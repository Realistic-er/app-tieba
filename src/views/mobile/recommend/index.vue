<template>
    <div>
        <list-show :info="info"></list-show>
    </div>
</template>

<script>
import listshow  from '@/components/mobile/listshow'
import {getHomeRecommend} from '@/util/API/recommend.js'
export default {
    data() {
        return {
            info:[]
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

</style>