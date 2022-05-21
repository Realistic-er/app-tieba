import Vue from 'vue'
import VueRouter from 'vue-router'
import { pcroute } from '@/util/route/pc'
import { mobileroute } from '@/util/route/mobile'






Vue.use(VueRouter)

let routes = [
]
function IsPhone() {
  //获取浏览器navigator对象的use==rAgent属性（浏览器用于HTTP请求的用户代理头的值）
  var info = navigator.userAgent;
  //通过正则表达式的test方法判断是否包含“Mobile”字符串
  var isPhone = /mobile/i.test(info);
  //如果包含“Mobile”（是手机设备）则返回true
  return isPhone;
}

console.log(IsPhone())
if (IsPhone()) {
  console.log('123')
  routes = mobileroute
  console.log(routes)
} else {
  routes = pcroute
  console.log(routes)
}



const router = new VueRouter({
  routes
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router