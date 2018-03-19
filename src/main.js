// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router'; // importing vue-router

import App from './App';
import { routes } from './routes'; // importing routes  

import VueResource from 'vue-resource';

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');

Vue.use(VueResource);
Vue.use(VueRouter); // use vue-router plug-in
Vue.config.productionTip = false;

const router = new VueRouter({ // vue-router setting
  hashbang: false,
  mode: 'history', 
  routes                       //Routing settings
});
new Vue({
  el: '#app',
  router,  // Add vue-router configuration to Vue instance
  render: h => h(App)
});

