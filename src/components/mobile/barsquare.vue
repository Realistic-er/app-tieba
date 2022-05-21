<template>
  <div class="barsquare">
      <div class="left">
          <!-- <ul>
              <li >
                  
              </li>
          </ul> -->
          <div class="leftmodule" v-for="(module,index) in module"
          :key="index" @click="change(index)" :class="{leftmodulesss:index === activity}">
              {{module.bartitle}}
          </div>
      </div>
      <div class="right">
          <ul>
              <li v-for="(barinfo,index) in barinfo" :key="index" @click="jump">
                  <div class="img">
                    <img src="https://tieba-ares.cdn.bcebos.com/mis/2022-4/1651304720295/688c54f4cd87.JPG"
                    alt="" class="imgsrc">
                  </div>
                  <div class="info">
                    <p class="barname">{{barinfo.bartitle}}</p>
                    <p>
                        <span>关注</span>
                        <span>{{barinfo.concernnumber}}</span>
                        <span>帖子</span>
                        <span>{{barinfo.articlenumber}}</span>
                    </p>
                  </div>
                  <div class="btn">
                    关注
                  </div>
              </li>
          </ul>
         
      </div>
  </div>
</template>

<script>
import {getModule,getBarinfo} from '@/util/API/recommend.js'
export default {
    data() {
        return {
            module:[],
            barinfo:[],
            activity:-1
        }
    },
    created() {
        getModule().then((res) => {
            console.log(res)
            this.module = res.data.data
        })
        getBarinfo().then((res) => {
            console.log(res)
            this.barinfo = res.data.data
        })
    },
    methods:{
        change(index) {
            this.activity = index
            getBarinfo().then((res) => {
                console.log(res)
                this.barinfo = res.data.data
            })
        },
        // 点击盒子进行跳转
      jump() {
        this.$router.push({
          name:'bardetail'
        })
      }
    }

}
</script>

<style>
@import "@/assets/mobilecss/barsquare.css";
</style>