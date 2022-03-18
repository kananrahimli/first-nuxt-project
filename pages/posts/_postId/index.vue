<template>
  <div class="post-item">
      <PostDetail :post="post"></PostDetail>
  </div>
</template>

<script>
import PostDetail from '../../../components/post/PostDetail.vue'
export default {
    layout:'postdetail',
    components:{
        PostDetail
    },
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error},callback) {
        setTimeout(() => {
            console.log(params);
            callback(null,{
                post:{
                    id:1,
                    title:'Vue js ucun ssr Nuxt.js dir '+ params.postId+' Bu idli post dur.',
                    subtitle:'Nuxt heleki cox bomba gedir',
                    text:'Nuxt oyrenmek daha rahat ve daha maraqlidir',
                    author:'Kanan Rahimli'

                }
            })
        }, 2000);
    },
    
}
</script>

<style scoped>

</style>