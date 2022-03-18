<template>
  <div class="post-detail mt-3 container">
    <h3>{{post.title}}</h3>
    <h5>{{post.subtitle}}</h5>

    <p>
       {{post.text}}
    </p>
    <span class="text-muted">{{post.author}}</span>
  </div>
</template>

<script>
export default {
  props:{
    post:{
      required:true,
      type:Object
    }
  }
};
</script>

<style>
</style>