<template>
  <div>
    <modal name="example-modal" height="auto" data-aos="fade"
           data-aos-easing="ease-in-out"
           data-aos-duration="300"
           data-aos-delay="500">
      <div class="example-modal-content">
        <h1 class="text-center font-bold text-3xl w-full float-left mb-5"> Welcome to Payzapp </h1>
        <p class="text-center font-normal text-base mb-6 ml11 w-full float-left"> I am Eva! Please Enable me to help you understand about Payzapp </p>
        <button>Play EVA</button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  methods: {
    triggerModalshow() {
      this.$modal.show('example-modal')
    }
  }
}
</script>
<style></style>
