<template>
  <div>
    <PostList :posts="posts"></PostList>
    <About></About>
  </div>
</template>

<script>
import PostList from "../components/post/PostList.vue";
import About from "../components/about/About.vue";
export default {
  name: "IndexPage",
  components: {
    PostList,
    About,
  },
  // data(){
  //   return{
  //     posts:[
  //       {id:1,title:'Post-title 1',subtitle:'Post Sub-Title 2',author:'Kanan',text:'Salam en yaxsi framework heqiqeten vuedir. Nuxt ile vapse bomba olur'},
  //       {id:2,title:'Post-title 2',subtitle:'Post Sub-Title 2',author:'Goshgar',text:'Salam en yaxsi framework heqiqeten Angulardir.Angular ile mesgul olun. '},
  //     ]
  //   }
  // },

  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        posts: [
          {
            id: 1,
            title: "Post-title 1",
            subtitle: "Post Sub-Title 2",
            author: "Kanan",
            text: "Salam en yaxsi framework heqiqeten vuedir. Nuxt ile vapse bomba olur",
          },
          {
            id: 2,
            title: "Post-title 2",
            subtitle: "Post Sub-Title 2",
            author: "Goshgar",
            text: "Salam en yaxsi framework heqiqeten Angulardir.Angular ile mesgul olun. ",
          },
        ],
      });
    }, 2000);
  },
};
</script>
