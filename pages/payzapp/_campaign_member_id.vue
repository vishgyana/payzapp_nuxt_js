<template>
  <div>
    <audio ref="audioElement">
      <source :src="selectedObj.url" />
    </audio>
    <Modal ref="AudioNotificationModal" />
    <Scratchcard v-if="selectedIndex === 0" :moveToOffers="moveToOffers" />
    <Offers v-if="selectedIndex === 1" />
    <div class="circle_block" :class="anima_class"></div>
  </div>
</template>
<script>
import Scratchcard from "@/pages/scratchcard/_campaign_member_id.vue";
import Offers from "@/pages/offers/_campaign_member_id.vue";
import Modal from "@/components/payzappcomponent/Modal/index.vue";

import { mapState, mapActions, mapGetters } from "vuex";

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
    ...mapActions("payzappcampaign", ["increaseIndex", "mainpageRenderAction"]),
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
          this.$refs.AudioNotificationModal.triggerModalshow();
          this.mainpageRenderAction("true");
        })
        .catch(() => {
          this.$refs.AudioNotificationModal.triggerModalshow();
          this.mainpageRenderAction("false");
        });
    },
    triggerAudioplay() {
      this.$refs.audioElement.load();
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
    }
  },
  computed: {
    ...mapState("payzappcampaign", ["selectedIndex"]),
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
    }
  }
};
</script>

<style lang="scss" scoped></style>
