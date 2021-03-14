import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";

// We declare it globally
window.jQuery = jQuery;

Vue.use(BootstrapVue);

new Vue({
   router,
   store,
   render: (h) => h(App),
}).$mount("#app");
