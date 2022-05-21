<template>
  <div class="advertisement">

      <!-- 这是router-view -->
      <div class="routerview">
        <router-view></router-view>
      </div>

      <div class="bottomnav">
        <bottom-nav></bottom-nav>
      </div>
      

  </div>
</template>

<script>
import {getConfigsByProductId} from '@/util/API/recommend.js'
import bottomnav  from '@/components/mobile/bottomnav'
export default {
    components:{
      'bottom-nav':bottomnav
    },
    data() {
      return {
        //   图片地址
        imgsrc:'',
      }
    },
    mounted() {
    },
    created() {
      console.log('1234')
      getConfigsByProductId().then((res) => {
          console.log(res)
          this.imgsrc = res.data.data.image
          console.log(this.imgsrc)
      })
    }
}
</script>

<style scoped>
@import "@/assets/mobilecss/advertisement.css";
</style>