<template>
  <div>
    <modal
      name="welcomeModal"
      height="auto"
      data-aos="fade"
      data-aos-easing="ease-in-out"
      data-aos-duration="300"
      data-aos-delay="500"
      @before-close="beforeClose"
    >
      <div class="example-modal-content" data-aos="fade-down"
           data-aos-easing="ease-in-out"
           data-aos-duration="500"
           data-aos-delay="1200">

        <svg width="104" height="34" viewBox="0 0 104 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M58.5177 26.5559H103.603L46.9398 34L62.1429 6.05007H44.6553L73.283 0L58.5177 26.5559Z" fill="#E70304"/>
          <path d="M2.85457 22.2035H7.96178L7.4921 24.4901H0L1.44552 17.437H3.83497L2.85457 22.2035Z" fill="#E70304"/>
          <path d="M18.0974 17.437L16.6473 24.4901H9.2373L9.70699 22.2035H14.7321L15.7125 17.437H18.0974Z" fill="#E70304"/>
          <path d="M3.27365 8.53418H10.7703L10.2961 10.8208H5.19341L4.21301 15.578H1.82812L3.27365 8.53418Z" fill="#E70304"/>
          <path d="M19.9285 8.53418L18.483 15.578H16.0981L17.074 10.8208H12.0488L12.5185 8.53418H19.9285Z" fill="#E70304"/>
          <path d="M12.8361 14.1611L12.5443 15.5782L12.1658 17.4369L11.8739 18.8632H7.11328L7.40512 17.4369L7.7836 15.5782L8.07544 14.1611H12.8361Z" fill="#062D7E"/>
          <path d="M23.8428 8.52979H29.6021C33.5237 8.52979 33.6788 11.3915 33.2547 13.379C32.6345 16.2407 30.8607 18.2513 27.1397 18.2513H25.5072L24.1985 24.4854H20.4775L23.8428 8.52979ZM26.1046 15.4816H27.1215C28.6035 15.4816 29.1598 14.543 29.3787 13.4711C29.6204 12.2426 29.4243 11.3041 27.9149 11.3041H26.9664L26.1046 15.4816Z" fill="#062D7E"/>
          <path d="M37.8651 8.52979H42.5163L43.0909 24.4854H39.2377L39.3061 21.4443H35.5167L34.322 24.4854H30.4688L37.8651 8.52979ZM39.5021 11.4375H39.4565L36.6658 18.5458H39.3699L39.5021 11.4375Z" fill="#062D7E"/>
          <path d="M46.5022 18.2053L44.5322 8.52979H48.6499L49.1606 14.451H49.2062L52.2842 8.52979H56.2697L50.2231 18.2053L48.8962 24.4854H45.1752L46.5022 18.2053Z" fill="#062D7E"/>
          <path d="M72.326 8.52979H76.9772L77.5518 24.4854H73.6986L73.767 21.4443H69.9776L68.7829 24.4854H64.9297L72.326 8.52979ZM73.9676 11.4375H73.922L71.1313 18.5458H73.8354L73.9676 11.4375Z" fill="#E70304"/>
          <path d="M82.1159 8.52979H87.8752C91.7969 8.52979 91.9519 11.3915 91.5278 13.379C90.9076 16.2407 89.1338 18.2513 85.4128 18.2513H83.7758L82.4671 24.4854H78.7461L82.1159 8.52979ZM84.3732 15.4816H85.39C86.872 15.4816 87.4284 14.543 87.6472 13.4711C87.8889 12.2426 87.6928 11.3041 86.1835 11.3041H85.2304L84.3732 15.4816Z" fill="#E70304"/>
          <path d="M94.4265 8.52979H100.186C104.107 8.52979 104.262 11.3915 103.838 13.379C103.218 16.2407 101.444 18.2513 97.7234 18.2513H96.0863L94.7776 24.4854H91.0566L94.4265 8.52979ZM96.6883 15.4816H97.7051C99.1871 15.4816 99.7435 14.543 99.9623 13.4711C100.204 12.2426 100.008 11.3041 98.4986 11.3041H97.5455L96.6883 15.4816Z" fill="#E70304"/>
        </svg>
        <span>Hello Anand!</span>

        <h1 class="text-center w-full float-left">
          Welcome to Payzapp
        </h1>
        <p
          class="text-center font-normal text-base mb-6 ml11 w-full float-left"
        >
          A minimum average monthly balance of Rs.30 lakhs in a combination of Savings accounts & term deposits
        </p>
        <button @click="triggerModalhide">Play Eva</button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  methods: {
    triggerModalshow() {
      this.$modal.show("welcomeModal");
    },
    triggerModalhide() {
      this.$emit("playEva");
      this.$modal.hide("welcomeModal");
    },
    beforeClose() {
      this.$emit("playEva");
    }
  }
};
</script>
<style></style>
