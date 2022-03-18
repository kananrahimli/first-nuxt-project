<template>
  <div> 
      <PostList :posts="posts"></PostList>

  </div>
</template>

<script>
import PostList from '../../components/post/PostList.vue'

export default {
  name: "Posts",
  components:{
    PostList,
    
  },
  // data(){
  //   return{
  //     posts:[
  //       {id:1,title:'Post-title 1',subtitle:'Post Sub-Title 2',author:'Kanan',text:'Salam en yaxsi framework heqiqeten vuedir. Nuxt ile vapse bomba olur'},
  //       {id:2,title:'Post-title 2',subtitle:'Post Sub-Title 2',author:'Goshgar',text:'Salam en yaxsi framework heqiqeten Angulardir.Angular ile mesgul olun. '},
  //     ]
  //   }
  // },

  asyncData(context,callback){
    setTimeout(() => {
      // return new Promise().catch(e=>{
      //   context.error(new Error())
      // })
      callback(new Error(),{
        posts:[
        {id:1,title:'Post-title 1',subtitle:'Post Sub-Title 2',author:'Kanan',text:'Salam en yaxsi framework heqiqeten vuedir. Nuxt ile vapse bomba olur'},
        {id:2,title:'Post-title 2',subtitle:'Post Sub-Title 2',author:'Goshgar',text:'Salam en yaxsi framework heqiqeten Angulardir.Angular ile mesgul olun. '},
      ]
      })
    }, 2000);
  }
};
</script>
