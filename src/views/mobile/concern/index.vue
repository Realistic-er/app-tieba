<template>
    <div>
        <concern-listshow :info="info"></concern-listshow>
    </div>
</template>

<script>
import concernlistshow  from '@/components/mobile/concernlistshow'
import {getHomeConcern} from '@/util/API/recommend.js'
export default {
    data() {
        return {
            info:[]
        }
    },
    components:{
      'concern-listshow':concernlistshow
    },
    created() {
        getHomeConcern().then((res) => {
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