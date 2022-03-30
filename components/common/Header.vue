<template>
    <div class="header d-flex justify-content-between align-items-center p-3">
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="header-logo mt-2"><nuxt-link to="/" tag="a">Kose yazisi</nuxt-link></h5>
            <nuxt-link to="/posts" class="ml-4" tag="a">Yazilar</nuxt-link>
        </div>
        <div>

            <nuxt-link to="/admin" class="ml-3">Admin</nuxt-link>
            <nuxt-link to="/login" class="ml-3" v-if="!isAuthenticated">Login</nuxt-link>
            <button  class="ml-3" @click="logOut" v-if="isAuthenticated">Log out</button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        logOut(){
            this.$store.dispatch('logout')
            this.$router.push('/auth')
        }
    },
    computed:{
    isAuthenticated(){
      return this.$store.getters.isUser
    }
  },
}
</script>

<style scoped>  
    a{
        color: #000;
        text-decoration: none;
        font-size: 18px;
    }
</style>