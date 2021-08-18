<template>
  <div class="main_content">
    <h1 class="ml8 text-center font-bold text-3xl mb-2">
  <span class="letters-container">
    <span class="letters letters-left">Surprise</span>
    <span class="letters bang">!</span>
  </span>
    </h1>
<!--    <h2 class="ml10 text-center font-bold text-3xl mb-2">-->
<!--          <span class="text-wrapper">-->
<!--            <span class="letters">Surprise!</span>-->
<!--          </span>-->
<!--    </h2>-->
<!--    <h1 class="ml6 text-center font-bold text-3xl mb-2">-->
<!--          <span class="text-wrapper">-->
<!--            <span class="letters">Surprise!</span>-->
<!--          </span>-->
<!--    </h1>-->
<!--    <h1 class="ml15 text-center font-bold text-3xl mb-2">-->
<!--      <span class="word">Surprise!</span>-->
<!--    </h1>-->
<!--    <h1 class="ml16 text-center font-bold text-3xl mb-2">Surprise!</h1>-->
  </div>
</template>

<script>
export default {
  name: "surprise",
  mounted() {
    this.animeanimate();
  },
  methods:{
    animeanimate() {

      /*// Wrap every letter in a span
      var textWrapper = document.querySelector(".ml10 .letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      // Wrap every letter in a span
      var textWrapper = document.querySelector(".ml6 .letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      // Wrap every letter in a span
      var textWrapper = document.querySelector(".ml16");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );*/

      this.$anime
        .timeline({ loop: true })
        /*.add({
          targets: ".ml16 .letter",
          translateY: [-100, 0],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 30 * i
        })
        .add({
          targets: ".ml16",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        })
        .add({
          targets: ".ml15 .word",
          scale: [14, 1],
          opacity: [0, 1],
          easing: "easeOutCirc",
          duration: 800,
          delay: (el, i) => 800 * i
        })
        .add({
          targets: ".ml15",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        })
        .add({
          targets: ".ml6 .letter",
          translateY: ["1.1em", 0],
          translateZ: 0,
          duration: 750,
          delay: (el, i) => 50 * i
        })
        .add({
          targets: ".ml6",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        })
        .add({
          targets: ".ml10 .letter",
          rotateY: [-90, 0],
          duration: 1300,
          delay: (el, i) => 45 * i
        })
        .add({
          targets: ".ml10",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        })*/
          .add({
            targets: '.ml8 .circle-white',
            scale: [0, 3],
            opacity: [1, 0],
            easing: "easeInOutExpo",
            rotateZ: 360,
            duration: 1100
          }).add({
        targets: '.ml8 .circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: '-=1000'
      }).add({
        targets: '.ml8 .circle-dark',
        scale: [0, 1],
        duration: 1100,
        easing: "easeOutExpo",
        offset: '-=600'
      }).add({
        targets: '.ml8 .letters-left',
        scale: [0, 1],
        duration: 1200,
        offset: '-=550'
      }).add({
        targets: '.ml8 .bang',
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: '-=1000'
      }).add({
        targets: '.ml8',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1400
      })

    }
  }
}
</script>

<style scoped>

</style>
