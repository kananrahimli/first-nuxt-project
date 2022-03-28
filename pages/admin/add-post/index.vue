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
    await this.$store.dispatch('newPost',data)
     await this.$router.push('/admin')
    },
  }
}
</script>

<style scoped>

</style>