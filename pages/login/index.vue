<template>
  <div class="login mt-5">
    <form class="row justify-content-center"  @submit.prevent="onSubmit">
      <div class="col-md-3 d-flex justify-content-center flex-column align-items-center" :class="[isLogin?'success':'primary']">
        <h3 :class="[isLogin?'text-success':'text-primary']">Nuxt.js|Kose Yazisi</h3>
        <hr />
        <div class="input-group d-flex flex-column">
          <label for="email"> Email</label>
          <input type="email" class="form-control w-100" v-model="user.email"/>
        </div>
        <div class="input-group d-flex flex-column mt-3">
          <label for="email"> Password</label>
          <input type="password" class="form-control w-100" v-model="user.password" />
        </div>

        <button :class="[isLogin?'btn-success':'btn-primary']"  class="btn my-3 w-100">{{isLogin?'Giris':'Uye ol'}}</button>

       <span class="text-primary register" @click="changeToSignUp" :class="[isLogin?'text-success':'text-primary']">{{isLogin?'Uye degilim':'Login'}}</span>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  layout: "noMiddleware",
  data(){
      return{
          isLogin:true,
          user:{
            email:null,
            password:null
          }
      }
  },

  

  methods:{
      changeToSignUp(){
          this.isLogin=!this.isLogin
      }
      ,
      onSubmit(){
        

         this.$store.dispatch('login',{isLogin:this.isLogin,user:{email:this.user.email,password:this.user.password}})
         .then(()=>{
           this.$router.push('/posts')
         })
      }
  }
};
</script>

<style scoped>

.register{
    cursor: pointer;

}

.success{
    border: 1px  solid green;
    padding: 20px 16px;
}
.primary{
    border: 1px  solid blue;
    padding: 20px 16px;
}


</style>