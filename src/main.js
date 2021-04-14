import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./../main.css";
import { router } from "./router";
import {install} from "./plugins/filtersAndDirectivesPlugin"

Vue.config.productionTip = false;

Vue.use(install)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
