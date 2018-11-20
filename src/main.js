// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
//挂载swiper
Vue.use(VueLazyLoad,{
  error:'../static/img/error.png',
  loading:'../static/img/loading.png'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
