import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
Vue.use(ViewUI);
import 'view-design/dist/styles/iview.css';
// import './assets/iview-theme-dark/dist/iview.css';

console.info("view-design装载完毕");
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
