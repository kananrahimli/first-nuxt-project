<template>
  <div class="add-post">
    <Form formTitle=" Kose yazisini duzenle" :edit="currentIdData"></Form>
  </div>
</template>

<script>
import Form from "../../../../components/admin/Form.vue";
export default {
  components: {
    Form,
  },
  data() {
    return {
      currentIdData: null
    };
  },

  created(){
    let id=this.$route.params.postId
    let posts=this.$store.getters.posts
    this.currentIdData=posts.find(post=>{
     return post.id==id
    })
    
  }
};
</script>

<style scoped>
</style>