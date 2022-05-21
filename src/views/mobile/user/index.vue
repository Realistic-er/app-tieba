<template>
  <div class="user">
    <!-- 用户上边 -->
    <div class="userheader">
      <div class="photo">
        <img src="@/assets/img/index.webp" alt="">
        <div class="info">
          <p>等待</p>
          <p>
            <span>关注</span>
            <span>22</span>
            <span>粉丝</span>
            <span>11</span>
          </p>
        </div>
        
      </div>
      <!-- 图标 -->
      <van-icon name="arrow" color="#d6d6d6" />
    </div>

    <!-- 用户贴吧信息 -->
    <div class="barinfo">
      <ul>
        <li>
          <p>3</p>
          <p>我的帖子</p>
        </li>
        <li>
          <p>3</p>
          <p>我的帖子</p>
        </li>
        <li>
          <p>3</p>
          <p>我的帖子</p>
        </li>
        <li>
          <p>3</p>
          <p>我的帖子</p>
        </li>
      </ul>
    </div>

    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" :width="400" :height="100" class="swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index" >
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- 我的钱包 -->
    <div class="money">
      <!-- 标题 -->
      <div class="header">
        <div class="mymoney">我的钱包</div>
        <div class="erdu">
          <span>查看我的额度</span>
          <van-icon name="arrow" color="#5c5c5c" size="20px"/>
        </div>
      </div>
      <ul>
        <li>
          <img src="@/assets/img/index.webp" alt="">
          <p>签到红包</p>
          <p>￥0.00现金</p>
        </li>
        <li>
          <img src="@/assets/img/index.webp" alt="">
          <p>签到红包</p>
          <p>￥0.00现金</p>
        </li>
        <li>
          <img src="@/assets/img/index.webp" alt="">
          <p>签到红包</p>
          <p>￥0.00现金</p>
        </li>
        <li>
          <img src="@/assets/img/index.webp" alt="">
          <p>签到红包</p>
          <p>￥0.00现金</p>
        </li>
      </ul>
    </div>

    <!-- 帖子创作中心 -->
    <div class="middle">
      <div class="divfather">


        <!-- div1 -->
        <div class="div1">
          <div class="header">
            <span>帖子创作中心</span>
            <van-icon name="arrow" color="#5c5c5c" size="20px"/>
          </div>


          <div class="middle1">
            <div class="big">
              <van-icon name="fire-o" />
              <span>大神认证</span>
            </div>
            <span>|</span>
            <div class="data">
              <van-icon name="bar-chart-o" />
              <span>帖子数据</span>
            </div>



          </div>


          <div class="bottom">
            <ul>
              <li>
                <p>1</p>
                <p>-</p>
                <p>昨日新增浏览</p>
              </li>
              <li>
                <p>1</p>
                <p>-</p>
                <p>昨日新增浏览</p>
              </li>
              <li>
                <p>1</p>
                <p>-</p>
                <p>昨日新增浏览</p>
              </li>
            </ul>
          </div>
          
        </div>



        <div class="div2">
          <div class="header">
              <span>开通视频号即可解锁</span>
              <van-icon name="arrow" color="#151517" size="20px"/>
          </div>

          <div class="middle1">
            <ul>
              <li>
                <van-icon name="arrow" color="#e6b45f" size="20px"/>
                <span>全新发布体验</span>
              </li>
              <li>
                <van-icon name="arrow" color="#e6b45f" size="20px"/>
                <span>全新发布体验</span>
              </li>
              <li>
                <van-icon name="arrow" color="#e6b45f" size="20px"/>
                <span>全新发布体验</span>
              </li>
              <li>
                <van-icon name="arrow" color="#e6b45f" size="20px"/>
                <span>全新发布体验</span>
              </li>
            </ul>
          </div>
        </div>




      </div>
      

    </div>



  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://rpic.douyucdn.cn/asrpic/220507/9375414_1318.png/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/695_1628.png/dy1",
    "https://rpic.douyucdn.cn/live-cover/roomCove_cover…22-04-27_8882991d5bd78e244fdae330024d9b00.jpg/dy1",
    "https://rpic.douyucdn.cn/asrpic/220507/8751050_1623.png/dy1",
      ]
    }
  },
  created() {

  }


}
</script>

<style>
@import "@/assets/mobilecss/user.css";
</style>