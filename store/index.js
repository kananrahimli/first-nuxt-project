import Vuex from "vuex";
import axios from "axios";
const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      posts: [],
    }),
    mutations: {
      setPosts(state, payload) {
        state.posts = payload;
      },
      update(state, payload) {
        state.posts = state.posts.map((post) => {
          if (post.id === payload.id) {
            return payload;
          } else {
            return post;
          }
        });
      },
      newPost(state,payload){
        state.posts.push(payload)
      }
    },
    actions: {
      nuxtServerInit(vContext, context) {
        return axios
          .get(
            "https://kose-yazisi-nuxt-js-default-rtdb.firebaseio.com/posts.json"
          )
          .then((res) => {
            let data = res.data;
            var postArray = [];
            for (const key in data) {
              postArray.push({ id: key, ...data[key] });
            }
            vContext.commit("setPosts", postArray);
          });
      },
      updatePost(context, payload) {
        context.commit("update", payload);
        console.log(payload);
        return axios.put(
          `https://kose-yazisi-nuxt-js-default-rtdb.firebaseio.com/posts/${payload.id}.json`,
          payload
        );
      },

      async newPost(context,payload) {
        
        await axios
          .post(
            "https://kose-yazisi-nuxt-js-default-rtdb.firebaseio.com/posts.json",
            payload
          )
          .then((res) => {
            context.commit('newPost',{id:res.data.name,...payload})
            
           axios.put(
            `https://kose-yazisi-nuxt-js-default-rtdb.firebaseio.com/posts/${res.data.name}.json`,
            {...payload,id:res.data.name}
          )
          });

        
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
