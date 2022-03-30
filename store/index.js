import Vuex from "vuex";
import axios from "axios";
import Cookie from "js-cookie";
import auth from "../middleware/auth";
const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      posts: [],
      authKey: null,
      isAuth: null,
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
      newPost(state, payload) {
        state.posts.push(payload);
      },
      setAuthKey(state, authKey) {
        // Cookie.set("auth", authKey);
        // localStorage.setItem("auth", authKey);
        // console.log(authKey);
        state.authKey = authKey;
      },
      deleteAuthKey(state, authKey) {
        Cookie.remove("auth");
        Cookie.remove("expiresIn");
        if(process.client){
          localStorage.removeItem("auth");
        localStorage.removeItem("expiresIn");
        }
        
        state.authKey = null;
      },
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

        return axios.put(
          `https://kose-yazisi-nuxt-js-default-rtdb.firebaseio.com/posts/${payload.id}.json`,
          payload
        );
      },

      async newPost(context, payload) {
        await axios
          .post(
            "https://kose-yazisi-nuxt-js-default-rtdb.firebaseio.com/posts.json",
            payload
          )
          .then((res) => {
            context.commit("newPost", { id: res.data.name, ...payload });

            axios.put(
              `https://kose-yazisi-nuxt-js-default-rtdb.firebaseio.com/posts/${res.data.name}.json`,
              { ...payload, id: res.data.name }
            );
          });
      },

      initAuth(context, req) {
        var token;
        var expiresIn;
        if (req) {
          // server side ..
          if (!req.headers.cookie) {
            return;
          } else {
            token = req.headers.cookie.trim().split("auth=");
            if (token) {
              token = token[1];
            }
            
            expiresIn = req.headers.cookie.trim().split("expiresIn=");
            if (expiresIn) {
              expiresIn = expiresIn[1];
            }
          }
        } else {
          token = localStorage.getItem("auth");
          expiresIn=localStorage.getItem('expiresIn')
        }
        if(new Date().getTime()> +expiresIn || !token){
          context.commit('deleteAuthKey')
        }
        context.commit("setAuthKey", token);
      },

      login(context, data) {
        // SignUp
        var url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

        if (data.isLogin) {
          // LOGIN
          url =
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
        }

        return axios
          .post(url + process.env.apiKey, {
            email: data.user.email,
            password: data.user.password,
            returnSecureToken: true,
          })
          .then((res) => {
            // let expiresIn= new Date().getTime()+ +res.data.expiresIn*1000   
            let expiresIn= new Date().getTime()+10000


            localStorage.setItem('expiresIn',expiresIn)
            localStorage.setItem("auth", res.data.idToken);
            Cookie.set("auth", res.data.idToken);
            Cookie.set('expiresIn',expiresIn)
            context.commit("setAuthKey", res.data.idToken);
          });
      },
      logout(context) {
        context.commit("deleteAuthKey");
      },
    },

    getters: {
      posts(state) {
        return state.posts;
      },

      authKey(state) {
        return state.authKey;
      },

      isUser(state) {
        return state.authKey != null;
      },
    },
  });
};

export default createStore;
