<template>
  <div>
    <!-- 搜索框 -->
    <van-search placeholder="请输入搜索关键词"
    v-model="value" shape="round" :readonly="true" @click="jump" />
    <!-- 导航栏 -->
    <van-tabs v-model="active">
      <van-tab title="我的吧">
        <my-bar></my-bar>
      </van-tab>
      <van-tab title="吧广场">
        <bar-square></bar-square>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import mybar  from '@/components/mobile/mybar'
import barsquare  from '@/components/mobile/barsquare'
export default {
      components:{
        'my-bar':mybar,
        'bar-square':barsquare
      },
      data() {
        return {
          value:'',
          active:''
        }
      },
      methods:{
        // 搜索框跳转
        jump() {
          this.$router.push({
            name:'search'
          })
        }
      }

}
</script>

<style>
@import "@/assets/mobilecss/upgrade.css";
</style>