import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("payzappcampaign", ["mutate_deviceos"]),
    getMobileOS() {
      const ua = navigator.userAgent;
      if (/android/i.test(ua)) {
        return "android";
      } else if (
        /iPad|iPhone|iPod/.test(ua) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
      ) {
        return "ios";
      }
      return "other";
    }
  },
  created() {
      console.log("created");
    this.mutate_deviceos(this.getMobileOS());
  }
};
