// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";

Vue.config.productionTip = false

Vue.component('app-card', Card);
Vue.component('app-header', Header);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
