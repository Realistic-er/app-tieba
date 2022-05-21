<template>
  <div class="dialogchat">
    <ul>
        <li v-for="(chatname,index) in chatname" :key="index">
            <img src="@/assets/img/index.webp" alt="">
            <span>{{chatname.chatname}}</span>
        </li>
    </ul>
  </div>
</template>

<script>
import {getChatname} from '@/util/API/recommend.js'
export default {
    data() {
        return {
            chatname:[]
        }
    },
    created() {
        getChatname().then((res) => {
            console.log(res)
            this.chatname = res.data.data
        })
    }
}
</script>

<style>
@import "@/assets/mobilecss/dialogchat.css";
</style>