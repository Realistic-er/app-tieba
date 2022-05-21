<template>
  <div class="home">
            <!-- 搜索框 -->
            <div class="header" >
                <div class="btn">
                    <van-icon name="search" />
                    <span class="text">点击搜索...</span>
                </div>
                <div class="icon">
                    <van-icon name="balance-o" size="30px" color="#e4596d" />
                    <van-icon name="point-gift-o" size="30px" color="#586ce7" />
                    <div class="publish">
                        <van-icon name="edit" size="20px" color="#fffeff" />
                        <span>发布</span>
                    </div>
                </div>
            </div>
            <!-- 导航栏 -->
            <div>
                <bottom-header></bottom-header>
            </div>
      



      <div class="context">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import bottomheader  from '@/components/mobile/headernav'
export default {
    data() {
        return {
            i:0,
            isShowHeader:true
        }
    },
    components:{
      'bottom-header':bottomheader
    },

    mounted() {
        window.addEventListener("scroll", this.watchScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.watchScroll) // 销毁监听滑动事件
    },
    methods:{
        watchScroll() {
            // 容器的高度
            var offsetTop = document.querySelector(".header").offsetHeight;
            // 滚动的距离
            var scrollTop =window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            let scrollstep = scrollTop - this.i
            console.log(this.i,scrollTop)
            console.log(scrollstep)
            this.i = scrollTop
            // console.log(this.i,scrollTop)
            //  滚动的距离如果大于了元素到顶部的距离时，实现吸顶效果
            if (scrollstep > 0) {
                this.isShowHeader = false
            } else {
                this.isShowHeader = true
            }
        }
    }

}
</script>

<style>
@import "@/assets/mobilecss/home.css";
</style>