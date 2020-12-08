import Vue from 'vue';
import App from './App.vue';
import router from './router';

// PLUGINS
import { fontAwesome } from './plugins/fontAwesome';

// SETTINGS
fontAwesome.install(Vue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
