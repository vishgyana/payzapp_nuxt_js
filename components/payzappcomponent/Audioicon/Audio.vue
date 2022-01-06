<template>
  <div>
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="audioMute"
      v-if="showUnmutebtn"
    >
      <g filter="url(#filter0_dd)">
        <circle cx="28" cy="28" r="16" fill="#FAFAFA" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.5371 22.1256C27.8206 22.2494 28.0009 22.5099 28.0009 22.7957L28.0009 33.2047C28.0009 33.4905 27.8206 33.751 27.5371 33.8748C27.2536 33.9986 26.9171 33.9638 26.6715 33.7852L22.8043 30.9742L19.8183 30.9742C19.3663 30.9742 19 30.6413 19 30.2307L19 25.7697C19 25.3591 19.3663 25.0262 19.8183 25.0262L22.8043 25.0262L26.6715 22.2152C26.9171 22.0366 27.2536 22.0018 27.5371 22.1256ZM26.3644 24.3427L23.6025 26.3503C23.4574 26.4558 23.2771 26.5132 23.0913 26.5132L20.6365 26.5132L20.6365 29.4872L23.0913 29.4872C23.2771 29.4872 23.4574 29.5447 23.6025 29.6501L26.3644 31.6577L26.3644 24.3427Z"
          fill="#202020"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33.2073 22.2177C33.5269 21.9274 34.045 21.9274 34.3645 22.2178C36.0519 23.7515 36.9999 25.8314 36.9999 28C36.9999 30.1686 36.0519 32.2485 34.3645 33.7822C34.045 34.0726 33.5269 34.0726 33.2073 33.7823C32.8877 33.492 32.8876 33.0213 33.2072 32.7309C34.5878 31.476 35.3633 29.7743 35.3633 28C35.3633 26.2257 34.5878 24.524 33.2072 23.2691C32.8876 22.9787 32.8877 22.508 33.2073 22.2177ZM30.3189 24.8422C30.6385 24.5519 31.1566 24.552 31.4761 24.8424C32.3965 25.6789 32.9135 26.8134 32.9135 27.9963C32.9135 29.1792 32.3965 30.3136 31.4761 31.1502C31.1566 31.4406 30.6385 31.4407 30.3189 31.1503C29.9993 30.86 29.9992 30.3893 30.3187 30.0989C30.9323 29.5412 31.277 28.7849 31.277 27.9963C31.277 27.2077 30.9323 26.4514 30.3187 25.8937C29.9992 25.6033 29.9993 25.1325 30.3189 24.8422Z"
          fill="#202020"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd"
          x="0"
          y="0"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-4" dy="-4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>

    <svg
      @click="audioUnmute"
      v-if="showMutebtn"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd)">
        <circle cx="28" cy="28" r="16" fill="#FAFAFA" />
      </g>
      <path
        d="M37 25L33.9516 28M33.9516 28L30.9033 31M33.9516 28L30.9033 25M33.9516 28L37 31M26.8387 22L22.4839 25.4286H19V30.5714H22.4839L26.8387 34V22Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_dd"
          x="0"
          y="0"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-4" dy="-4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>

    <svg
      @click="repeatBtnclickaction"
      v-if="showReplaybtn"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd)">
        <circle cx="28" cy="28" r="16" fill="#FAFAFA" />
      </g>
      <path
        d="M31.8889 20L35 22.9091M35 22.9091L31.8889 25.8182M35 22.9091H24.1111C23.286 22.9091 22.4947 23.2156 21.9112 23.7611C21.3278 24.3067 21 25.0466 21 25.8182V27.2727M24.1111 36L21 33.0909M21 33.0909L24.1111 30.1818M21 33.0909H31.8889C32.714 33.0909 33.5053 32.7844 34.0888 32.2389C34.6722 31.6933 35 30.9534 35 30.1818V28.7273"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_dd"
          x="0"
          y="0"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-4" dy="-4" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Icon",
  computed: {
    ...mapState("payzappcampaign", ["audioMuted", "buttonBlink"]),
    showMutebtn() {
      return this.audioMuted == "true" && !this.showReplaybtn ? true : false;
    },
    showUnmutebtn() {
      return this.audioMuted == "false" && !this.showReplaybtn ? true : false;
    },
    showReplaybtn() {
      return this.buttonBlink == "true" ? true : false;
    }
  },
  methods: {
    ...mapActions("payzappcampaign", [
      "audioMute",
      "audioUnmute",
      "repeatBtnclickaction"
    ])
  }
};
</script>

<style></style>
