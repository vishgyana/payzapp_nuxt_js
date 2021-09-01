<template>
  <div>
    <div id="scratchcard" ref="scratchcard">
      <div id="VueScratchable">
        <div
          class="wrapper"
          :class="[shoeshimmer ? 'shimmer' : '']"
          style="visibility: hidden"
          ref="CouponSection"
        >
          <div>
            <img
              src="~/assets/img/congratulation.svg"
              class="congratulation_img"
              :class="[isAnimationblockadded ? 'animation_block' : '']"
            />
            <h2>Congratulations</h2>
            <h3>
              You have saved upto <br />
              ₹ 2,000
            </h3>
          </div>
        </div>
        <canvas
          class="canvas"
          ref="jscanvas"
          id="js-canvas"
          :width="canvasWidth"
          :height="canvasHeight"
        ></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      isDrawing: null,
      lastPoint: null,
      canvas: null,
      removeCanvaspercentagelimit: 40,
      filledPercentage: 0,
      canvasWidth: 311,
      canvasHeight: 311,
      shoeshimmer: false
    };
  },
  computed: {
    ...mapState("payzappcampaign", ["isAnimationblockadded", "selectedIndex"]),
    ctx() {
      return this.canvas.getContext("2d");
    },
    image() {
      return new Image();
    },
    brush() {
      return new Image();
    }
  },
  methods: {
    ...mapActions("payzappcampaign", [
      "setShowcuriousbutton",
      "setShowsurprisesection",
      "setAnimationblockadded",
      "setscratchcardDone"
    ]),
    constractScratch() {
      //set reference to canvas
      this.canvas = this.$refs.jscanvas;

      // this.canvasWidth = this.$refs.scratchcard.clientWidth;
      //
      // this.canvasHeight = this.$refs.scratchcard.clientHeight;

      // base64 Workaround because Same-Origin-Policy
      this.image.src = require("~/assets/img/scratch.svg");
      // this.image.height = this.$refs.scratchcard.clientHeight;
      // this.image.width = this.$refs.scratchcard.clientWidth;
      // console.log(this.$refs.scratchcard.clientWidth);
      // console.log(this.$refs.scratchcard.clientHeight);

      this.image.addEventListener("load", this.scratchabelImageonload);
      this.brush.src = require("~/assets/img/brush.svg");

      // addEventListener to canvas start
      this.canvas.addEventListener("mousedown", this.handleMouseDown, false);
      this.canvas.addEventListener("touchstart", this.handleMouseDown, false);
      this.canvas.addEventListener("mousemove", this.handleMouseMove, false);
      this.canvas.addEventListener("touchmove", this.handleMouseMove, false);
      this.canvas.addEventListener("mouseup", this.handleMouseUp, false);
      this.canvas.addEventListener("touchend", this.handleMouseUp, false);
      // addEventListener to canvas end
    },
    scratchabelImageonload() {
      // draw image on board
      this.ctx.drawImage(this.image, 0, 0, this.canvasWidth, this.canvasHeight);
      // enable visibility of coupon content
      this.$refs.CouponSection.style.visibility = "visible";
    },
    getMouse(e, canvas) {
      var offsetX = 0,
        offsetY = 0,
        mx,
        my;

      if (canvas.offsetParent !== undefined) {
        do {
          offsetX += canvas.offsetLeft;
          offsetY += canvas.offsetTop;
        } while ((canvas = canvas.offsetParent));
      }

      mx = (e.pageX || e.touches[0].clientX) - offsetX;
      my = (e.pageY || e.touches[0].clientY) - offsetY;

      return { x: mx, y: my };
    },
    distanceBetween(point1, point2) {
      return Math.sqrt(
        Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
      );
    },
    updateShoeshimmer(payload) {
      this.shoeshimmer = payload;
    },
    removeCanvaslayer() {
      if (this.canvas.parentNode !== null) {
        // Hide canvas start
        this.canvas.style.zIndex = "-1000";
        this.canvas.style.opacity = "0.5";
        this.canvas.style.transition = "all 0.5s ease-in-out";
        // Hide canvas end
        //Animation start
        this.updateShoeshimmer(true);
        this.setAnimationblockadded(true);
        this.setShowsurprisesection(false);
        //Animation end
        this.$emit("canvas-arearemoved");
        this.setscratchcardDone(true);
        setTimeout(() => {
          this.updateShoeshimmer(false);
          this.setShowcuriousbutton(1);
        }, 2500);
        setTimeout(() => {
          this.setAnimationblockadded(false);
        }, 3600);
      }
    },
    checkPercentagereached() {
      if (this.filledPercentage >= this.removeCanvaspercentagelimit) {
        this.removeCanvaslayer();
      }
    },
    angleBetween(point1, point2) {
      return Math.atan2(point2.x - point1.x, point2.y - point1.y);
    },
    handlePercentage(filledPercentage) {
      this.filledPercentage = filledPercentage || 0;
      this.$emit("getfilled-percentage", this.filledPercentage);
    },
    getFilledInPixels(stride) {
      if (!stride || stride < 1) {
        stride = 1;
      }

      var pixels = this.ctx.getImageData(
          0,
          0,
          this.canvasWidth,
          this.canvasHeight
        ),
        pdata = pixels.data,
        l = pdata.length,
        total = l / stride,
        count = 0;

      // Iterate over all pixels
      for (var i = (count = 0); i < l; i += stride) {
        if (parseInt(pdata[i]) === 0) {
          count++;
        }
      }

      return Math.round((count / total) * 100);
    },
    handleMouseDown(e) {
      this.isDrawing = true;
      this.lastPoint = this.getMouse(e, this.canvas);
    },
    handleMouseMove(e) {
      if (!this.isDrawing) {
        return;
      }

      e.preventDefault();

      var currentPoint = this.getMouse(e, this.canvas),
        dist = this.distanceBetween(this.lastPoint, currentPoint),
        angle = this.angleBetween(this.lastPoint, currentPoint),
        x,
        y;

      for (var i = 0; i < dist; i++) {
        x = this.lastPoint.x + Math.sin(angle) * i - 25;
        y = this.lastPoint.y + Math.cos(angle) * i - 25;
        this.ctx.globalCompositeOperation = "destination-out";
        this.ctx.drawImage(this.brush, x, y);
      }

      this.lastPoint = currentPoint;
      this.handlePercentage(this.getFilledInPixels(32));
    },
    handleMouseUp(e) {
      this.isDrawing = false;
    },
    showConfetti() {}
  },
  mounted() {
    this.constractScratch();
  },
  watch: {
    filledPercentage() {
      this.checkPercentagereached();
    }
  }
};
</script>
