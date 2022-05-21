<template>
  <div class="advertisement">
      <img class="img" src="@/assets/img/index.webp" alt="">
      <p class="firstpage1">这世界有你更精彩</p>
      <p class="firstpage2">百度贴吧</p>
  </div>
</template>

<script>
export default {
    data() {
      return {

      }
    },
    mounted() {
        setTimeout(() => {
            this.$router.push('/advertisement')
        }, 2000);
    },
    created() {
      
    }
}
</script>

<style scoped>
@import "@/assets/mobilecss/firstpage.css";
</style>*
