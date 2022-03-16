<template>
  <div class="col-md-2 mt-5">
    <div class="post-item">
      <h2>Post Title</h2>
      <h4>Post subtitle</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
        cupiditate pariatur maxime molestiae minima? Ducimus, eveniet! Expedita
        aliquam quis sed sequi doloremque nisi necessitatibus inventore pariatur
        officiis? Debitis, nam recusandae?
      </p>
      <nuxt-link class="post-see" to="">Goruntule</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
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