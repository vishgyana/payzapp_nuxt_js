<template>
  <div>
    <Scratchcard v-if="selectedIndex === 0" :moveToOffers="moveToOffers" />
    <Offers v-if="selectedIndex === 1" />
    <div class="circle_block" :class="anima_class"></div>
  </div>
</template>

<script>
import Scratchcard from "@/pages/scratchcard/_campaign_member_id.vue";
import Offers from "@/pages/offers/_campaign_member_id.vue";

import { mapState,mapActions } from "vuex";

export default {
  data() {
    return {
      anima_class: ""
    };
  },
  components: {
    Scratchcard,
    Offers
  },
  methods: {
    ...mapActions("payzappcampaign", ["increaseIndex"]),
    moveToOffers() {
      this.anima_class = "button-zoom-in";
      setTimeout(() => {
        this.anima_class = "button-zoom-out";
      }, 300);

      setTimeout(() => {
        this.increaseIndex();
      }, 300);
    }
  },
  computed: {
    ...mapState("payzappcampaign", ["selectedIndex"])
  }
};
</script>

<style lang="scss" scoped></style>
