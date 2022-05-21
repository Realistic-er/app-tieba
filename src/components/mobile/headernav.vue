<template>
  <div>
      <van-tabs v-model="active" swipeable background="#f6f6f8"  @click="jump">
            <van-tab v-for="(label,index) in label" :key="index"
            :title="label.title" >
            </van-tab>
      </van-tabs>
  </div>
</template>

<script>
export default {
    name:'headernav',
    data() {
        return {
            active:1,
            label:[
                {
                    title:"关注",
                    name:"concern"
                },
                {
                    title:"推荐",
                    name:"recommend"
                },
                {
                    title:"热榜",
                    name:"hot"
                },
                {
                    title:"直播",
                    name:"live"
                },
                {
                    title:"游戏",
                    name:"game"
                },
                {
                    title:"数码",
                    name:"number"
                },
            ]
        }
    },
    methods: {
        jump(index,title) {
            console.log(index)
            let name = this.label[index].name
            console.log(name)
            this.$router.push({name})
        }
    }
}
</script>

<style>
@import "@/assets/mobilecss/headernav.css";
</style>