<template>
  <div>
    <audio ref="audioElement">
      <source :src="selectedObj.url" />
    </audio>

    <audio ref="hdfcbgm" loop autoplay>
      <source
        src="https://takeaway-vgts.s3.ap-south-1.amazonaws.com/hdfc_audio/hdfcbgm.mp3"
      />
    </audio>

    <audio ref="downloadaudio" loop>
      <source
        src="https://takeaway-vgts.s3.ap-south-1.amazonaws.com/hdfc_audio/claimoffers.mp3"
      />
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
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

//canvas-confetti start
import MyPromise from "promise";
import confetti from "canvas-confetti";
confetti.Promise = MyPromise;

const IDLE_TIMEOUT = 4;
const idleSecondsTimer = null;
const idleSecondsCounter = 0;

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
      partially_played_in_unmute_mode: null,
      IDLE_TIMEOUT: IDLE_TIMEOUT,
      idleSecondsTimer: idleSecondsTimer,
      idleSecondsCounter: idleSecondsCounter
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
    ...mapMutations("payzappcampaign", ["mutate_selectedAudiokey"]),
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
          this.unsetSetinterval();
          this.mainpageRenderAction(true);
        })
        .catch(() => {
          this.$refs.AudioNotificationModal.triggerModalshow();
          this.mainpageRenderAction(false);
        });
    },
    audioEnded() {
      this.changebuttonBlink(true);
    },
    triggerAudioplay() {
      this.changebuttonBlink(false);
      this.$refs.audioElement.load();
      this.$refs.audioElement.addEventListener("ended", () => {
        if (this.idleSecondsTimer == null && Number(this.selectedIndex) === 1) {
          this.setSetinterval();
        }
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
        this.$refs.downloadaudio.currentTime = 0;
        this.$refs.downloadaudio.pause();
        this.$refs.hdfcbgm.pause();
      } else {
        this.$refs.audioElement.play();
        this.$refs.hdfcbgm.play();
      }
    },
    listenModalclose() {
      this.triggerAudioplay();
      this.$refs.hdfcbgm.play();
    },
    showConfetti() {
      confetti({
        particleCount: 100,
        spread: 45,
        origin: { y: 0.5 }
      });
    },
    resetTimer() {
      this.idleSecondsCounter = 0;
      if (this.$refs.downloadaudio.currentTime != 0) {
        this.$refs.downloadaudio.currentTime = 0;
        this.$refs.downloadaudio.pause();
      }
    },
    setSetinterval() {
      this.idleSecondsTimer = window.setInterval(this.CheckIdleTime, 1000);
    },
    unsetSetinterval() {
      window.clearInterval(this.idleSecondsTimer);
      this.IDLE_TIMEOUT = IDLE_TIMEOUT;
      this.idleSecondsTimer = idleSecondsTimer;
      this.idleSecondsCounter = idleSecondsCounter;
    },
    CheckIdleTime() {
      this.idleSecondsCounter++;
      if (this.idleSecondsCounter >= this.IDLE_TIMEOUT) {
        if (
          this.$refs.audioElement.currentTime &&
          !document.hidden &&
          this.$refs.downloadaudio.currentTime == 0
        ) {
          this.$refs.downloadaudio.play();
        }
      }
    }
  },
  computed: {
    ...mapState("payzappcampaign", [
      "selectedIndex",
      "repeatBtnclickcount",
      "mainpageRender",
      "is_scratchcardDone",
      "audioMuted"
    ]),
    ...mapGetters("payzappcampaign", ["selectedObj"])
  },
  mounted() {
    this.triggerAudioplay();

    //IDEAL TIME MUSIC START
    window.onload = this.resetTimer;
    window.onmousemove = this.resetTimer;
    window.onmousedown = this.resetTimer;
    window.ontouchstart = this.resetTimer;
    window.onclick = this.resetTimer;
    window.onkeypress = this.resetTimer;
    //IDEAL TIME MUSIC END
  },
  watch: {
    selectedObj() {
      this.triggerAudioplay();
    },
    audioMuted() {
      this.$refs.audioElement.muted = this.audioMuted;
      this.$refs.hdfcbgm.muted = this.audioMuted;
      this.$refs.downloadaudio.muted = this.audioMuted;
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
        this.mutate_selectedAudiokey("getcashback");
        confetti.reset();
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
