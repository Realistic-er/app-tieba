<template>
  <div class="chat">
    <!-- 顶头部分 -->
    <div class="header">
      <van-nav-bar title="消息">
        <van-icon name="add-o" slot="right" color="#101010" @click="dialog"/>
      </van-nav-bar>
    </div>
    <!-- 中间部分 -->
    <div class="middle">
      <ul>
        <li>
          <img src="@/assets/img/index.webp" alt="">
          <p>@我的</p>
        </li>
        <li>
          <img src="@/assets/img/index.webp" alt="">
          <p>点赞</p>
        </li>
        <li>
          <img src="@/assets/img/index.webp" alt="">
          <p>回复</p>
        </li>
        <li>
          <img src="@/assets/img/index.webp" alt="">
          <p>粉丝</p>
        </li>
      </ul>
    </div>
    <!-- 地脚部分 -->
    <div class="bottom">
      <ul>
        <li v-for="(chatinfo,index) in chatinfo" :key="index">
          <div class="left">
            <img src="@/assets/img/index.webp" alt="">
            <div class="p">
              <p>
                {{chatinfo.infosource}}
              </p>
              <p>
                {{chatinfo.infoparagraps}}
              </p>
            </div>
          </div>
          <div class="right">
            <p>{{chatinfo.infotime}}天前</p>
            <p>{{chatinfo.infonnumber}}</p>
          </div>
        </li>
      </ul>
    </div>


    <!-- 弹出内容 -->
    <van-action-sheet v-model="show" title="选择联系人">
      <dialog-chat></dialog-chat>
    </van-action-sheet>


  </div>
</template>

<script>
import {getChatinfo} from '@/util/API/recommend.js'
import dialogchat  from '@/components/mobile/dialogchat'
export default {
  data() {
    return {
      chatinfo:[],
      show:false,
    }
  },
  components:{
      'dialog-chat':dialogchat
    },
  created() {
    getChatinfo().then((res) => {
      console.log(res)
      this.chatinfo = res.data.data
    })
  },
  methods:{
    dialog() {
      this.show = true
    }
  }

}
</script>

<style>
@import "@/assets/mobilecss/chat.css";
</style>