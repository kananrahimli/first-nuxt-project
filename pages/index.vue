<template>
  <div>
    <!-- <PostList :posts="getPosts"></PostList>
    <About></About> -->

    <div class="local-storage d-flex justify-content-center p-4 my-4">
      <div class="col-6">
        <h1>Local storage</h1>
        <input type="text" class="form-control my-4" name="" v-model="storageVal" id="" >
        <button class="btn btn-success" @click="setStorageVal">Set Value</button>
        <button class="btn btn-success"> Get Value</button>
        <div class="reesult mt-4">
          <p>Local storage degeri: {{fromStorage}}</p>
        </div>
      </div>
    </div>
    <div class="cookie d-flex justify-content-center p-4 my-4">
      <div class="col-6">
        <h1>Cookie</h1>
        <input type="text" class="form-control my-4" name="" id="" v-model="cookieVal">
        <button class="btn btn-primary" @click="setCookieVal">Set Value</button>
        <button class="btn btn-primary"> Get Value</button>
        <div class="reesult mt-4">
          <p>Cookie degeri: {{fromCookie}}</p>
        </div>
      </div>
    </div>
    <nuxt-link to="/posts" tag="a">Posts</nuxt-link>
  </div>
</template>

<script>
import PostList from "../components/post/PostList.vue";
import About from "../components/about/About.vue";
import Cookie from 'js-cookie'
export default {
  name: "IndexPage",
  middleware:'auth',
  // components: {
  //   PostList,
  //   About,
  // },
  layout:'empty',
  
  computed:{
    getPosts(){
      return this.$store.getters.posts
    }
  },
  data(){
    return{
      storageVal:'',
      cookieVal:'',
      fromStorage:'',
      fromCookie:''
    }
  },
  methods:{
    setStorageVal(){
      localStorage.setItem('auth',this.storageVal)
    },
    setCookieVal(){
      Cookie.set('auth',this.cookieVal)
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

  // fetch(context, callback) {
  //   setTimeout(() => {
  //     callback(null, {
  //       posts: [
  //         {
  //           id: 1,
  //           title: "Post-title 1",
  //           subtitle: "Post Sub-Title 2",
  //           author: "Kanan",
  //           text: "Salam en yaxsi framework heqiqeten vuedir. Nuxt ile vapse bomba olur",
  //         },
  //         {
  //           id: 2,
  //           title: "Post-title 2",
  //           subtitle: "Post Sub-Title 2",
  //           author: "Goshgar",
  //           text: "Salam en yaxsi framework heqiqeten Angulardir.Angular ile mesgul olun. ",
  //         },
  //       ],
  //     });
  //   }, 2000);
  // },
};
</script>

<style scoped>
 .local-storage .col-6{
   border: 1px solid green;
 }
  .cookie .col-6{
   border: 1px solid blue;
 }
</style>
