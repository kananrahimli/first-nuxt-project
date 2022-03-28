<template>
  <div class="add-post">
    <Form formTitle=" Kose yazisini duzenle" :edit="currentIdData" @onSubmit="update($event)"></Form>
  </div>
</template>

<script>
import Form from "../../../../components/admin/Form.vue";
import axios from 'axios'
export default {
  components: {
    Form,
  },
  data() {
    return {
      currentIdData: null
    };
  },

  // created(){
  //   let id=this.$route.params.postId
  //   let posts=this.$store.getters.posts
  //   this.currentIdData=posts.find(post=>{
  //    return post.id==id
  //   })
  // }

   asyncData(context) {
     return axios.get(`https://kose-yazisi-nuxt-js-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
        .then(res=>{
          
            return {
                currentIdData:res.data
            }
        })
  },
  methods:{
    update(editingPost){
      this.$store.dispatch('updatePost',{...editingPost,id:this.$route.params.postId})
        .then(()=>{
          this.$router.push('/admin')
        })
    }
  }
};
</script>

<style scoped>
</style>