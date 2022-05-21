<template>
  <div class="boxbar">
      <!-- 最近逛得吧 -->
      <div class="bared">
        <div class="text">
          <span>最近逛的吧</span>
          <van-icon name="closed-eye" />
        </div>
        <!-- 吧的循环 -->
        <div class="bar">
          <ul>
            <!--  -->
            <li v-for="(bared,index) in upgradeinfo.bared" :key="index">
              <div class="img">
                <p class="info">{{bared.disread}}</p>
              </div>
              <p >{{bared.barname}}</p>
              <p>
                <span>关注</span>
                <span>{{bared.concernnumber}}</span>
              </p>
            </li>
          </ul>
        </div>

      </div>
      <!-- 我关注的吧 -->
      <div class="barconcerned">
        <div class="text">
          <span>我关注的吧</span>
          <van-icon name="closed-eye" />
        </div>
        <!-- 贴吧循环 -->
        <div class="barxun">
          <ul>
            <li v-for="(barconcerned,index) in upgradeinfo.barconcerned" :key="index">
              <!-- 图片 -->
              <img src="https://tieba-ares.cdn.bcebos.com/mis/2022-4/1651304720295/688c54f4cd87.JPG"
              alt="" class="img">
              <!-- 文字 -->
              <div class="texte">
                <p>{{barconcerned.barname}}</p>
                <p>
                  <span>关注</span>
                  <span>{{barconcerned.concernnumber}}</span>
                </p>
              </div>
              <!-- 标签 -->
              <span :style="{color:barconcerned.color,}" class="span">{{barconcerned.level}}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 热门吧精选 -->
      <div class="hotbar">
        <p class="phot">热门吧精选</p>
        <div class="box" v-for="(item,index) in this.upgradeinfo.barhot" :key="index">
          <div class="info" >
            <div class="tetx">
              <img src="https://rpic.douyucdn.cn/live-cover/roomCover/2021…5c62de6694b9505e2f6993ed8ea2278_big.png/webpdy1.5"
              alt="" class="img">
              <div class="p">
                <p class="p1">{{item.barname}}</p>
                <p class="p2">
                  <span>关注</span>
                  <span>{{item.concernnumber}}</span>
                  <span>帖子</span>
                  <span>{{item.articlenumber}}</span>
                </p>
              </div>
              
            </div>
            <div class="btn">关注</div>
          </div>
          <!-- 图片展示 -->
          <ul>
            <li v-for="(imgarray,index) in item.imgarray" :key="index">
              <img :src="imgarray.imgeurl"
              alt="" class="img">
              <p>{{imgarray.articletitle}}</p>
            </li>
          </ul>
        </div>
      </div>

  </div>
</template>

<script>
import {getUpgrade} from '@/util/API/recommend.js'
export default {
  data() {
    return {
      upgradeinfo:[]
    }
  },
  created() {
    getUpgrade().then((res) => {
      console.log(res)
      this.upgradeinfo = res.data.data
      console.log(this.upgradeinfo.barhot)
    })
  }
}
</script>

<style>
@import "@/assets/mobilecss/mybar.css";
</style>