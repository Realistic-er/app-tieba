<template>
  <div class="listshow">
     <van-list
        class="list"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="box" v-for="(info,index) in info" :key="index">
            <!-- log -->
          <div class="header">

            <img src="https://tieba-ares.cdn.bcebos.com/mis/2022-4/1651304720295/688c54f4cd87.JPG"
            alt="" class="photo">

            <div class="articleinfo">

              <p class="articlename">
                <span>{{info.articlename}}</span>
              </p>

              <p class="articlenumber">
                <span>{{info.articletime}}</span>
                <span>小时前</span>
              </p>
            </div>

          </div>


          
          <div class="context" @click="jump">
            <p class="p1">{{info.articletitle}}</p>
            <p class="p2">
              {{info.paragraph}}
            </p>

            <!-- 一张图片 -->
            <div class="img1" v-if="info.imgeurl.length === 1">
              <img :src="info.imgeurl[0]" alt="" @click.stop="getImage(info.imgeurl,index)">
            </div>
            
            <!-- 贴吧按钮 -->
            <div class="barname" @click.stop="jump1">
                <van-icon name="flag-o" color="#62579c" />
                <span>{{info.bartitle}}</span>
            </div>
          </div>

          

          <div class="bottom">
            <div>
              <van-icon name="share" color="#4d4d4d" size="15px" />
              <span>分享</span>
            </div>
            
            <div>
              <van-icon name="chat-o" color="#4d4d4d" size="15px" />
              <span>{{info.recommendnumber}}</span>
            </div>
            
            <div>
              <van-icon name="like-o" color="#4d4d4d" size="15px" />
              <span>{{info.goodnumber}}</span>
            </div>
          </div>

          
        </div>
      </van-list> 
  </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
    name:'listshow',
    data() {
      return {
        list: [],
        loading: false,
        finished: true
      };
    },
    props:{
      info:{
        type:Array,
        required:true
      }
    },
    
    methods:{
      onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
      },
      // 点击图片预览
      getImage(imgeurl,index) {
        console.log(imgeurl)
        ImagePreview({
          images: imgeurl,
          showIndex: true,
          loop: false,
          startPosition: index,
          onClose() {
            // do something
            imgeurl = []
          }
        });
        console.log(index);
        
      },
      // 点击盒子进行跳转
      jump() {
        this.$router.push({
          name:'articledetail'
        })
      },
      //  
      jump1() {
            
      } 
    }
}
</script>

<style scoped>
@import "@/assets/mobilecss/concernlistshow.css";
</style>