import Vue from "vue";

//https://stackoverflow.com/questions/59752101/detect-click-outside-element-in-nuxt
Vue.directive("click-outside", {
  bind: function(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  }
});
