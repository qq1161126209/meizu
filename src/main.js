import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false



// 引人VueRouter
import VueRouter from 'vue-router'
//VueRouter明确使用VueRouter
Vue.use(VueRouter)

//VueRouter明确使用VueRouter

Vue.use( VueAxios,axios)
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);


new Vue({
  swiper, swiperSlide,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
