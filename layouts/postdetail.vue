<template>
  <div>
    <Header></Header>
    <Banner title="Yazi basligi"></Banner>
    <Nuxt />
  </div>
</template>

<script>
import Banner from '../components/common/Banner.vue'
import Header from '../components/common/Header.vue'
export default {
  middleware:['session-control','auth'],
  components:{
    Banner,
    Header
  }
}
</script>

<style >
  body{
    overflow-x: hidden;
  }
</style>