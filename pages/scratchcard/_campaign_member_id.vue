<template>
  <div>
    <div class="grid grid-cols-2 justify-items-start">
      <div class="col-start-1">
        <Logo
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="300"
          data-aos-delay="800"
        />
      </div>
      <div class="col-end-7">
        <Audio
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="300"
          data-aos-delay="800"
        />
      </div>
    </div>
    <div
      class="grid grid-cols-none items-center h-90vh flex relative top-0 w-full z-1"
    >
      <div class="main_content w-full float-left">
        <div v-if="isShowsurprisesection">
          <h1
            class="ml8 text-center font-bold text-3xl w-full float-left"
            v-show="issurpriseVisibles"
          >
            <span class="letters-container">
              <span class="letters letters-left">Surprise</span>
              <span class="letters bang">!</span>
            </span>
          </h1>
          <p
            class="text-center font-normal text-base mb-6 ml11 w-full float-left"
          >
            <span class="text-wrapper">
              <span v-show="issurpriseBelowtext" class="letters">
                Scratch the card to unveil them.</span
              >
            </span>
          </p>
        </div>
        <Vuescratchcard
          class="scratch_main w-full float-left"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
        />
      </div>
    </div>
    <div
      :style="CuriousbtnStyle"
      class="bottom_button"
      data-aos="zoom"
      data-aos-easing="ease-in-out"
      data-aos-duration="300"
      data-aos-delay="100"
    >
      <button @click="clickCall">Curious? Find out how</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import surprise from "@/components/payzappcomponent/Screen/surprise";
import Vuescratchcard from "@/components/Vuescratchcard/index.vue";
import Audio from "@/components/payzappcomponent/Audioicon/Audio.vue";
import Logo from "@/components/payzappcomponent/Logoicon/Logo.vue";

// Mixin start
import global from "../../mixin/global.js";
// Mixin end

export default {
  mixins: [global],
  props: ["moveToOffers"],
  components: { Vuescratchcard, surprise, Audio, Logo },
  data() {
    return {
      show_data: true,
      issurpriseVisibles: false,
      issurpriseBelowtext: false
    };
  },
  computed: {
    ...mapState("payzappcampaign", [
      "isShowsurprisesection",
      "DeviceOS",
      "isShowcuriousbutton"
    ]),
    name() {
      return this.data;
    },
    CuriousbtnStyle(){
      if(this.isShowcuriousbutton == 1) {
        return { opacity: 1 , visibility : "visible" }
      }else{
        return { opacity: 0 , visibility : "hidden" }
      }
    }
  },
  methods: {
    ...mapActions("payzappcampaign", ["setShowcuriousbutton"]),
    navigateNextpage() {
      this.$router.push({
        name: "offers-campaign_member_id",
        params: { campaign_member_id: "hewhw" }
      });
    },
    clickCall() {
      this.setShowcuriousbutton(0);
      this.moveToOffers();
    },
    surpriseAnimation() {
      this.$anime
        .timeline({ loop: false })
        .add({
          targets: ".ml8 .letters-left",
          scale: [0, 1],
          duration: 1200,
          offset: "-=550"
        })
        .add({
          targets: ".ml8 .bang",
          scale: [0, 1],
          rotateZ: [45, 15],
          duration: 1000,
          offset: "-=1000",
          delay: 10
        });
    },
    surpriseBelowtextAnimation() {
      // Wrap every letter in a span
      var textWrapper = document.querySelector(".ml11 .letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
      this.$anime.timeline({ loop: false }).add({
        targets: ".ml11 .letter",
        rotateY: [-90, 0],
        duration: 1500,
        delay: (el, i) => 45 * i
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.surpriseAnimation();
      this.issurpriseVisibles = true;
    }, 1600);

    setTimeout(() => {
      this.surpriseBelowtextAnimation();
      this.issurpriseBelowtext = true;
    }, 3000);
  },
};
</script>
