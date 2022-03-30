<template>
  <div class="error d-flex justify-content-center flex-column align-items-center mt-5">
      <h1>Hata oluştu</h1>
      <h2 class="mt-4">Bir şeylər düz gitmedi :(</h2>
  </div>
</template>

<script>
export default {
middleware:['session-control','auth'],
}
</script>

<style >

</style>