<template>
  <div>
    <audio ref="audioElement">
      <source :src="selectedObj.url" />
    </audio>
    <Modal ref="AudioNotificationModal" @playEva="listenModalclose" />
    <Scratchcard
      v-if="selectedIndex === 0 && mainpageRender"
      :moveToOffers="moveToOffers"
    />
    <Offers v-if="selectedIndex === 1" />
    <div class="circle_block" :class="anima_class"></div>
  </div>
</template>
<script>
import Scratchcard from "@/pages/scratchcard/_campaign_member_id.vue";
import Offers from "@/pages/offers/_campaign_member_id.vue";
import Modal from "@/components/payzappcomponent/Modal/index.vue";
import { mapState, mapActions, mapGetters } from "vuex";

//canvas-confetti start
import MyPromise from "promise";
import confetti from "canvas-confetti";
confetti.Promise = MyPromise;

export default {
  data() {
    return {
      anima_class: "",
      Audiofull_length: null,
      Endedaudio_length: null,
      Instartingstage_Is_AudioMuted: null,
      Audiomuted_time: null,
      Audiounmuted_time: null,
      completely_played_in_mute_mode: null,
      completely_played_in_unmute_mode: null,
      partially_played_in_mute_mode: null,
      partially_played_in_unmute_mode: null
    };
  },
  created() {
    document.addEventListener("visibilitychange", this.visibilityChange, false);
  },
  components: {
    Scratchcard,
    Offers,
    Modal
  },
  methods: {
    ...mapActions("payzappcampaign", [
      "increaseIndex",
      "mainpageRenderAction",
      "changebuttonBlink"
    ]),
    moveToOffers() {
      this.anima_class = "button-zoom-in";
      setTimeout(() => {
        this.anima_class = "button-zoom-out";
      }, 300);

      setTimeout(() => {
        this.increaseIndex();
      }, 300);
    },
    trigerAutoplay() {
      this.Audiofull_length = this.$refs.audioElement.duration;
      this.$refs.audioElement
        .play()
        .then(() => {
          this.mainpageRenderAction(true);
        })
        .catch(() => {
          this.$refs.AudioNotificationModal.triggerModalshow();
          this.mainpageRenderAction(false);
        });
    },
    audioEnded() {
      this.changebuttonBlink("true");
    },
    triggerAudioplay() {
      this.changebuttonBlink("false");
      this.$refs.audioElement.load();
      this.$refs.audioElement.addEventListener("ended", () => {
        this.audioEnded(this.$refs.audioElement.currentTime);
      });
      this.$refs.audioElement.addEventListener("canplaythrough", null);
      this.$refs.audioElement.addEventListener("canplaythrough", () => {
        this.trigerAutoplay();
      });
    },
    visibilityChange() {
      if (document.hidden) {
        this.$refs.audioElement.pause();
      } else {
        this.$refs.audioElement.play();
      }
    },
    listenModalclose() {
      this.triggerAudioplay();
    },
    showConfetti() {
      confetti({
        particleCount: 100,
        spread: 45,
        origin: { y: 0.5 }
      });
    }
  },
  computed: {
    ...mapState("payzappcampaign", [
      "selectedIndex",
      "repeatBtnclickcount",
      "mainpageRender",
      "is_scratchcardDone"
    ]),
    ...mapGetters("payzappcampaign", ["selectedObj", "isaudioMuted"])
  },
  mounted() {
    this.triggerAudioplay();
  },
  watch: {
    selectedObj() {
      this.triggerAudioplay();
    },
    isaudioMuted() {
      let MValue = this.audioMuted == "false" ? false : true;
      this.$refs.audioElement.muted = MValue;
    },
    repeatBtnclickcount() {
      this.triggerAudioplay();
    },
    is_scratchcardDone() {
      if (this.is_scratchcardDone) {
        this.showConfetti();
      }
    },
    selectedIndex() {
      if (Number(this.selectedIndex) === 1) {
        confetti.reset();
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
