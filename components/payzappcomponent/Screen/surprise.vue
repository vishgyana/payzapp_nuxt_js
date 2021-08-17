<template>
  <div class="main_content">
    <h2 class="ml10 text-center font-bold text-3xl mb-2">
          <span class="text-wrapper">
            <span class="letters">Surprise!</span>
          </span>
    </h2>
    <h1 class="ml6 text-center font-bold text-3xl mb-2">
          <span class="text-wrapper">
            <span class="letters">Surprise!</span>
          </span>
    </h1>
    <h1 class="ml15 text-center font-bold text-3xl mb-2">
      <span class="word">Surprise!</span>
    </h1>
    <h1 class="ml16 text-center font-bold text-3xl mb-2">Surprise!</h1>
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
      // Wrap every letter in a span
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
      );

      this.$anime
        .timeline({ loop: true })
        .add({
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
        });
    }
  }
}
</script>

<style scoped>

</style>
