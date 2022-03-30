<template>
  <div>
    <Header></Header>
            
    <Nuxt />
  </div>
</template>

<script>

import Header from '../components/common/Header.vue'
export default {
  middleware:['session-control','auth'],
  components:{
    
    Header
  }
}
</script>

<style >
  body{
    overflow-x: hidden;
  }
</style>