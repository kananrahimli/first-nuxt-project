<template>
  <div>
    <Header></Header>
            
    <Nuxt />
  </div>
</template>

<script>

import Header from '../components/common/Header.vue'
export default {
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