<template>
  <div>
    <div class="grid grid-cols-2 justify-items-start">
      <div class="col-start-1">
        <Logo
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="300"
          data-aos-delay="100"
        />

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 288" xmlns:v="https://vecta.io/nano"><path d="M156.29 166.2h98.87L130.9 182.38l33.34-60.75h-38.35l62.78-13.15zm-122.07-9.46h11.2l-1.03 4.97H27.96l3.17-15.33h5.24zm33.43-10.36l-3.18 15.33H48.22l1.03-4.97h11.02l2.15-10.36zm-32.51-19.35h16.44L50.54 132H39.35l-2.15 10.34h-5.23zm36.52 0l-3.17 15.31h-5.23L65.4 132H54.38l1.03-4.97z" fill="#e70304"/><path d="M56.11 139.26l-.64 3.08-.83 4.04-.64 3.1H43.56l.64-3.1.83-4.04.64-3.08zm24.14-12.24h12.63c8.6 0 8.94 6.22 8.01 10.54-1.36 6.22-5.25 10.59-13.41 10.59H83.9l-2.87 13.55h-8.16l7.38-34.68zm4.96 15.11h2.23c3.25 0 4.47-2.04 4.95-4.37.53-2.67.1-4.71-3.21-4.71H87.1l-1.89 9.08zM111 127.02h10.2l1.26 34.68h-8.45l.15-6.61h-8.31l-2.62 6.61h-8.45L111 127.02zm3.59 6.32h-.1l-6.12 15.45h5.93l.29-15.45zm15.35 14.71l-4.32-21.03h9.03l1.12 12.87h.1l6.75-12.87h8.74l-13.26 21.03-2.91 13.65h-8.16l2.91-13.65z" fill="#062d7e"/><path d="M186.57 127.02h10.2l1.26 34.68h-8.45l.15-6.61h-8.31l-2.62 6.61h-8.45l16.22-34.68zm3.6 6.32h-.1l-6.12 15.45h5.93l.29-15.45zm17.87-6.32h12.63c8.6 0 8.94 6.22 8.01 10.54-1.36 6.22-5.25 10.59-13.41 10.59h-3.59l-2.87 13.55h-8.16l7.39-34.68zm4.95 15.11h2.23c3.25 0 4.47-2.04 4.95-4.37.53-2.67.1-4.71-3.21-4.71h-2.09l-1.88 9.08zm22.05-15.11h12.63c8.6 0 8.94 6.22 8.01 10.54-1.36 6.22-5.25 10.59-13.41 10.59h-3.59l-2.87 13.55h-8.16l7.39-34.68zm4.96 15.11h2.23c3.25 0 4.47-2.04 4.95-4.37.53-2.67.1-4.71-3.21-4.71h-2.09l-1.88 9.08z" fill="#e70304"/></svg>

        <img src="@/assets/img/logo.webp" />
      </div>
      <div class="col-end-7">
        <Audio
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="300"
          data-aos-delay="100"
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
    CuriousbtnStyle() {
      if (this.isShowcuriousbutton == 1) {
        return { opacity: 1, visibility: "visible" };
      } else {
        return { opacity: 0, visibility: "hidden" };
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
    }, 800);

    setTimeout(() => {
      this.surpriseBelowtextAnimation();
      this.issurpriseBelowtext = true;
    }, 2500);
  }
};
</script>
