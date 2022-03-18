<template>
  <div class="row px-4 ">
      <PostItem v-for="post in posts" :key="post.id" :post="post" :isAdmin="isAdmin"/>
  </div>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
    props:{
        isAdmin:{
            type:Boolean,
            required:false,
            default:false
        },

        posts:{
            requierd:true,
            
        }
    },
    components:{
        PostItem
    }
}
</script>

<style>

</style>