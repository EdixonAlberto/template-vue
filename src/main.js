import Vue from 'vue';
import App from './App.vue';
import router from './router';

// ASSETS
import './assets/scss/main.scss';

// PLUGINS
import { fontAwesome } from './plugins/fontAwesome';

import store from './store';

// SETTINGS
fontAwesome.install(Vue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
