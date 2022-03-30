<template>
  <div>
    <Header></Header>
    <Banner title="Kose Yazisi"></Banner>
    <Nuxt />
  </div>
</template>

<script>
import Banner from '../components/common/Banner.vue'
import Header from '../components/common/Header.vue'
export default {
  components:{
    Banner,
    Header
  },
  middleware:['session-control','auth']
}
</script>

<style >
  body{
    overflow-x: hidden;
  }
</style>