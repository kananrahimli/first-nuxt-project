<template>
  <div> 
      <div class="d-flex justify-content-center align-items-center"><nuxt-link to="/admin/add-post" class="btn btn-secondary ">Add new Card</nuxt-link></div>
      <PostList isAdmin :posts="posts"></PostList>

  </div>
</template>

<script>
import PostList from '../../components/post/PostList.vue'

export default {
  name: "Posts",
  layout:'admin',
  components:{
    PostList,
    
  },
   data(){
    return{
      posts:[
        {id:1,title:'Post-title 1',subtitle:'Post Sub-Title 2',author:'Kanan',text:'Salam en yaxsi framework heqiqeten vuedir. Nuxt ile vapse bomba olur'},
        {id:2,title:'Post-title 2',subtitle:'Post Sub-Title 2',author:'Goshgar',text:'Salam en yaxsi framework heqiqeten Angulardir.Angular ile mesgul olun. '},
      ]
    }
  }
};
</script>
