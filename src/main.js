import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import * as VueGoogleMaps from "vue2-google-maps";

import JwPagination from "jw-vue-pagination";
Vue.component("jw-pagination", JwPagination);

Vue.prototype.$store = store;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDmNhUT1t0IGt10_GymkN_cFt5CM_WsGKM",
    libraries: "places", // necessary for places input
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
