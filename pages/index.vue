<template>
  <div> 
      <PostList></PostList>
      <About></About>
  </div>
</template>

<script>
import PostList from '../components/post/PostList.vue'
import About from '../components/about/About.vue'
export default {
  name: "IndexPage",
  components:{
    PostList,
    About
  }
};
</script>
