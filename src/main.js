import Vue from "vue";
import "tailwindcss/dist/tailwind.css";
import "./assets/main.css";

import App from "./App.vue";
import './plugins';
import './services';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
