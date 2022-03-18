<template>
  <div class="col-md-2 mt-5">
    <div class="post-item">
      <h2>{{post.title}}</h2>
      <h4>{{post.subtitle}}</h4>
      <p>
       {{post.text}}
      </p>
      
      <div v-if="isAdmin">
        <nuxt-link class="btn btn-outline-warning" :to="'/admin/'+post.id+'/edit'"> Duzenle</nuxt-link>
      <nuxt-link class="btn btn-outline-danger" to="">Sil</nuxt-link>
      </div>
      <nuxt-link v-else class="btn btn-outline-info" :to="'/posts/'+post.id">Goruntule</nuxt-link>
      
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isAdmin:{
      type:Boolean,
      required:false,
      default:false
    },
    post:{
      required:true,
      type:Object
    }
  }
};
</script>

<style scoped>
.post-item {
  border: 1px solid aquamarine;
  padding: 12px ;
}
.post-see{
    background: none;
    border: 1px solid aqua;
    text-decoration: none;
    color: #000;
    transition: 0.3s;
    padding: 8px 12px;
}
.post-see:hover{
    background: rgb(143, 141, 141);
    color: white;
}
</style>