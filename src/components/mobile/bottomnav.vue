<template>
  <div>
      <van-tabbar v-model="active" active-color="#775df2" 
      >
        <van-tabbar-item v-for="(nav,index) in nav" :key="index" :icon="nav.icon"
        :dot="nav.dot" :info="nav.info" @click="jump(nav.path)">
            {{nav.title}}</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
    name:'bottomnav',
    data() {
        return {
            active:0,
            nav:[
                {
                    icon:'home-o',
                    title:'首页',
                    info:'',
                    dot:false,
                    path:'/advertisement/'
                },
                {
                    icon:'upgrade',
                    title:'进吧',
                    info:'',
                    dot:false,
                    path:'/advertisement/upgrade'
                },
                {
                    icon:'tv-o',
                    title:'视频',
                    info:'',
                    dot:false,
                    path:'/advertisement/tv'
                },
                {
                    icon:'chat-o',
                    title:'消息',
                    info:'5',
                    dot:false,
                    path:'/advertisement/chat'
                },
                {
                    icon:'user-o',
                    title:'我的',
                    info:'',
                    dot:false,
                    path:'/advertisement/user'
                }
            ]
        }
    },
    methods:{
        jump(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style>

</style>