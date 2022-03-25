<template>
  <div> 
      <PostList :posts="getPosts"></PostList>

  </div>
</template>

<script>
import PostList from '../../components/post/PostList.vue'

export default {
  name: "Posts",
  components:{
    PostList,
    
  },
  computed:{
    getPosts(){
      return this.$store.getters.posts
    }
  }
  // data(){
  //   return{
  //     posts:[
  //       {id:1,title:'Post-title 1',subtitle:'Post Sub-Title 2',author:'Kanan',text:'Salam en yaxsi framework heqiqeten vuedir. Nuxt ile vapse bomba olur'},
  //       {id:2,title:'Post-title 2',subtitle:'Post Sub-Title 2',author:'Goshgar',text:'Salam en yaxsi framework heqiqeten Angulardir.Angular ile mesgul olun. '},
  //     ]
  //   }
  // },


  // ASYNC DATA EVEZINE FETCH HAZIR METOD VAR NUXTA OZEL ONU ANCAQ VUEXI GUNCELLEMEK UCUN ISTIFADE EDIRIK ASYNC DATA ICINDE THIS ACAR SOZUNU ISLEMEK OLMUR
  
  
  // asyncData(context,callback){
  //   setTimeout(() => {
  //     // return new Promise().catch(e=>{
  //     //   context.error(new Error())
  //     // })
  //     callback(null,{
        
  //       posts:[
  //       {id:1,title:'Post-title 1',subtitle:'Post Sub-Title 2',author:'Kanan',text:'Salam en yaxsi framework heqiqeten vuedir. Nuxt ile vapse bomba olur'},
  //       {id:2,title:'Post-title 2',subtitle:'Post Sub-Title 2',author:'Goshgar',text:'Salam en yaxsi framework heqiqeten Angulardir.Angular ile mesgul olun. '},
  //     ]
  //     })
  //   }, 2000);
  // }
};
</script>
