<template>
    <div class="game">
        <!-- 轮播图 -->
        <div class="img">
            <van-swipe :autoplay="1000" :height="200">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 帖子 -->
        <div class="article">
            <list-show :info="info"></list-show>
        </div>
    </div>
    
</template>

<script>
import listshow  from '@/components/mobile/listshow'
import {getHomeRecommend} from '@/util/API/recommend.js'
export default {
    data() {
        return {
            info:[],
            images: [
                'https://rpic.douyucdn.cn/asrpic/220507/9375414_1318.png/dy1',
                'https://rpic.douyucdn.cn/asrpic/220507/10392685_1319.png/dy1',
                'https://rpic.douyucdn.cn/asrpic/220507/52876_1316.png/dy1'
            ]
        }
    },
    components:{
      'list-show':listshow
    },
    created() {
        getHomeRecommend().then((res) => {
            console.log(res)
            if (res.status == 200) {
                this.info = res.data.data
            }
        })
    }
}
</script>

<style scoped>
@import "@/assets/mobilecss/game.css";
</style>