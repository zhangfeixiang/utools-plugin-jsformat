import Vue from 'vue';
import App from './view/app.vue';

const { bytesToSize } = window.utils;

window.addEventListener('load', () => {
  Vue.use(Button);

  Vue.filter('bytes', bytesToSize);

  window.APP = new App().$mount('#app');
});
