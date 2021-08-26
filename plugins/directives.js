import Vue from "vue";

//https://stackoverflow.com/questions/59752101/detect-click-outside-element-in-nuxt
Vue.directive("clickoutside", {
  beforeMount(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
    alert("Hello Mount");
  },
  unmounted(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
    alert("Hello Unmount");
  }
});
