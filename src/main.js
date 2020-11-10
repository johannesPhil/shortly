import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount("#app");
