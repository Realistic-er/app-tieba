import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
import router from './router'
import store from './store'
import 'amfe-flexible'
import '../src/assets/resetcss/resetcss.css'
import '@/util/mock/mock'






Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(Lazyload);


let ua = navigator.userAgent.toLowerCase()
console.log(ua)







new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
