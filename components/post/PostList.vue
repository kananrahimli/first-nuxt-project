<template>
  <div class="row px-4 ">
      <PostItem v-for="index in 10" />
  </div>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
    components:{
        PostItem
    }
}
</script>

<style>

</style>