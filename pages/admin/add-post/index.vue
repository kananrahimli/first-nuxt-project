<template>
  <div class="add-post">
      <Form formTitle=" Kose yazisi Ekle" @onSubmit="submit"></Form>
  </div>
</template>

<script>
import axios from 'axios'
import Form from '../../../components/admin/Form.vue'
export default {
  components:{
    Form
  },
  methods:{
    async submit(data){
     await axios.post('https://kose-yazisi-nuxt-js-default-rtdb.firebaseio.com/posts.json',data).then(()=>{
       this.$router.push('/admin')
     })
    }
  }
}
</script>

<style scoped>

</style>