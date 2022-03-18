<template>
  <div class="add-post">
      <Form formTitle=" Kose yazisi Ekle" @onSubmit="submit"></Form>
  </div>
</template>

<script>
import Form from '../../../components/admin/Form.vue'
export default {
  components:{
    Form
  },
  methods:{
    submit(data){
      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>