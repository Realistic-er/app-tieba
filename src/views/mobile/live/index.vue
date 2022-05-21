<template>
  <div class="live">
      <ul>
        <li v-for="(live,index) in livedata" :key="index"
        :style="{backgroundImage:'url(' + live.imgeurl+ ')',backgroundSize: 'cover'}">
          <a href="https://www.douyu.com/topic/WWPYJ_web2?rid=3125893">
            <div class="text">
              <p class="text1">{{live.livename}}</p>
              <p class="text2">
                <span>{{live.livelocation}}</span>
                <span>{{live.concernnumber+"人"}}</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
import {getLive} from '@/util/API/recommend.js'
import {getHot} from '@/util/API/recommend.js'
export default {
  data() {
    return {
      livedata:[]
    }
  },
  created() {
    getLive().then((res) => {
      console.log(res)
      this.livedata = res.data.data
    })
  }
}
</script>

<style>
    @import "@/assets/mobilecss/live.css";
</style>