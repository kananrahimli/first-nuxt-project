import Vuex from "vuex";
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      posts: [],
    }),
    mutations: {
      setPosts(state, payload) {
        state.posts = payload;
      },
    },
    actions: {
      nuxtServerInit(vContext, context) {
        return axios.get('https://kose-yazisi-nuxt-js-default-rtdb.firebaseio.com/posts.json')
        .then(res=>{
            let data=res.data;
            var postArray=[]
            for (const key in data) {
                postArray.push({id:key,...data[key]})
            }
            vContext.commit('setPosts',postArray)
        })
      },
    },
    getters: {
      posts(state) {
          
        return state.posts;
      },
    },
  });
};

export default createStore;
