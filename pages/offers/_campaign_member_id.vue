<template>
  <div ref="topView">
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
    <div class="items-center h-90 flex top-0 w-full">
      <div class="content_block">
        <p
          data-aos="fade"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
          data-aos-delay="1000"
        >
          Get Cashback's worth upto <br />
          Rs 2,500 per month <br />
          & Rs 25,000 a year
        </p>

        <div class="tab_block" id="tab_section">
          <swiper
            ref="swip1"
            class="nav nav-tabs"
            :options="swiperOptions1"
            data-aos="fade"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="1800"
          >
            <swiper-slide>
              <div
                class="nav-item"
                @click="changeOnButtonClick(0)"
                :class="[selected_index === 0 ? 'activestate' : '']"
              >
                <a class="nav-link" id="all_value">All</a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="nav-item"
                @click="changeOnButtonClick(1)"
                :class="[selected_index === 1 ? 'activestate' : '']"
              >
                <a class="nav-link" id="food_delivery_value">Food Delivery</a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="nav-item"
                @click="changeOnButtonClick(2)"
                :class="[selected_index === 2 ? 'activestate' : '']"
              >
                <a class="nav-link" id="groceries_value">Groceries</a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="nav-item"
                @click="changeOnButtonClick(3)"
                :class="[selected_index === 3 ? 'activestate' : '']"
              >
                <a class="nav-link" id="billspayments_value"
                  >Bills & Payments</a
                >
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="nav-item"
                @click="changeOnButtonClick(4)"
                :class="[selected_index === 4 ? 'activestate' : '']"
              >
                <a class="nav-link" id="service_value">Service</a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div
                class="nav-item"
                @click="changeOnButtonClick(5)"
                :class="[selected_index === 5 ? 'activestate' : '']"
              >
                <a class="nav-link" id="entertainment_value">Entertainment</a>
              </div>
            </swiper-slide>
            <div class="tab-active-bar" :style="getStyleBar"></div>
          </swiper>

          <swiper
            class="content_tab"
            ref="swip2"
            :options="swiperOptions2"
            @slideChange="onThumbnailChange"
          >
            <swiper-slide>
              <div
                ref="firstTab"
                class="tab-content"
                data-aos="fade"
                data-aos-easing="ease-in-out"
                data-aos-duration="500"
                data-aos-delay="2600"
              >
                <Food
                  data-aos="fade"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="500"
                  data-aos-delay="3000"
                />
                <Grocries />
                <Bill />
                <Services />
                <Entertainment />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div ref="secondTab" class="tab-content">
                <Food />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div ref="thirdTab" class="tab-content">
                <Grocries />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div ref="fourthTab" class="tab-content">
                <Bill />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div ref="fifthTab" class="tab-content">
                <Services />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div ref="sixthTab" class="tab-content">
                <Entertainment />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div
      :style="{ opacity: isShowdownloadbutton }"
      class="bottom_button"
      data-aos="zoom"
      data-aos-easing="ease-in-out"
      data-aos-duration="300"
      data-aos-delay="100"
    >
      <button v-if="DeviceOS === 'android'" @click="Downloadlink">
        <img src="@/assets/img/appstore.svg" class="img-fluid" /> Download
        Payzapp
      </button>

      <button v-if="DeviceOS === 'ios'" @click="Downloadlink">
        <img src="@/assets/img/appstore.svg" class="img-fluid" /> Download
        Payzapp
      </button>

      <button v-if="DeviceOS === 'other'" @click="Downloadlink">
        <img src="@/assets/img/appstore.svg" class="img-fluid" /> Download
        Payzapp
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Food from "@/components/payzappcomponent/Screen/CashBackList/Food";
import Grocries from "@/components/payzappcomponent/Screen/CashBackList/Grocries";
import Bill from "@/components/payzappcomponent/Screen/CashBackList/Bill";
import Services from "@/components/payzappcomponent/Screen/CashBackList/Services";
import Entertainment from "@/components/payzappcomponent/Screen/CashBackList/Entertainment";

import Audio from "@/components/payzappcomponent/Audioicon/Audio.vue";
import Logo from "@/components/payzappcomponent/Logoicon/Logo.vue";

import vuescrollCarousel from "vuescroll-carousel";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.scss";

// Mixin start
import global from "../../mixin/global.js";
// Mixin end

export default {
  mixins: [global],
  components: {
    Entertainment,
    Food,
    Grocries,
    Bill,
    Services,
    vuescrollCarousel,
    Swiper,
    SwiperSlide,
    Audio,
    Logo
  },
  data() {
    return {
      isShowdownloadbutton: 0,
      selected_index: 0,
      // selected_width: 110,
      swiperOptions1: {
        slidesPerView: 3,
        centeredSlides: true,
        centeredSlidesBounds: true
      },
      swiperOptions2: {
        slidesPerView: 1
      }
    };
  },
  created() {
    setTimeout(() => {
      this.isShowdownloadbutton = 1;
    }, 3800);
  },
  computed: {
    ...mapState("payzappcampaign", ["DeviceOS"]),

    swiperFirst() {
      return this.$refs.swip1.$swiper;
    },
    swiperSecond() {
      return this.$refs.swip2.$swiper;
    },
    getStyleBar() {
      let presetValue = [
        {
          id: "all_value",
          width: 53,
          left: 15
        },
        {
          id: "food_delivery_value",
          width: 129,
          left: 83
        },
        {
          id: "groceries_value",
          width: 101,
          left: 226
        },
        {
          id: "billspayments_value",
          width: 148.28,
          left: 342
        },
        {
          id: "service_value",
          width: 84.2,
          left: 505
        },
        {
          id: "entertainment_value",
          width: 134.53,
          left: 605
        }
      ];

      var Width = null;
      var Left = null;

      if (
        document.querySelector(`#${presetValue[this.selected_index].id}`) ===
        null
      ) {
        Width = presetValue[this.selected_index].width;
        Left = presetValue[this.selected_index].left;
      } else {
        Width = document.querySelector(
          `#${presetValue[this.selected_index].id}`
        ).offsetWidth;
        Left = presetValue[this.selected_index].left;
      }

      return {
        width: Width + "px !important",
        transform: "translate3d(" + Left + "px, 0px, 0px)",
        transitionProperty: "all",
        transitionDuration: "0.1.2s"
      };
    }
  },
  methods: {
    getPositionAtCenter(element) {
      if (element !== null) {
        const { top, left, width, height } = element.getBoundingClientRect();
        return {
          x: left + width / 2,
          y: top + height / 2
        };
      } else {
        return {
          x: 0,
          y: 0
        };
      }
    },
    getDistanceBetweenElements(a, b) {
      if (a !== null && b !== null) {
        const aPosition = this.getPositionAtCenter(a);
        const bPosition = this.getPositionAtCenter(b);
        return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
      } else {
        return 37;
      }
    },
    onThumbnailChange(val) {
      this.selected_index = val.activeIndex;
      // this.selected_width = val.width
      this.$refs.swip1.$swiper.slideTo(val.activeIndex);
      // this.$nextTick(() => {
      //   switch (this.selected_index) {
      //     case 0: {
      //       this.$refs.firstTab.scrollIntoView({ behavior: "smooth" });
      //       this.$refs.topView.scrollIntoView({ behavior: "smooth" });
      //       break;
      //     }
      //     case 1: {
      //       this.$refs.secondTab.scrollIntoView({ behavior: "smooth" });
      //       break;
      //     }
      //   }
      // this.$refs.topView.scrollIntoView({ behavior: "smooth" });
      // });
    },
    changeOnButtonClick(val) {
      console.log("this.$refs.swip1", this.$refs.swip1);
      this.selected_index = val;
      this.$refs.swip2.$swiper.slideTo(val);
    },
    ...mapActions("payzappcampaign", ["increaseIndex"]),
    Downloadlink(){
      window.open("http://onelink.to/82e84e","_blank");
    }
  }
};
</script>

<style scoped></style>
