<template>
  <div class="post-item">
      <PostDetail :post="post"></PostDetail>
  </div>
</template>

<script>
import PostDetail from '@/components/post/PostDetail.vue'
import axios from 'axios'
export default {
    layout:'postdetail',
    components:{
        PostDetail
    },
  
    asyncData(context) {
     return axios.get(`https://kose-yazisi-nuxt-js-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
        .then(res=>{
            
            return {
                post:res.data
            }
        })
  },
    
}
</script>

<style scoped>

</style>