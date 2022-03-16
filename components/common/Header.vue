<template>
    <div class="header d-flex justify-content-between align-items-center p-3">
        <div class="d-flex justify-content-between align-items-center">
            <h5 class="header-logo mt-2">Kose yazisi</h5>
            <nuxt-link to="/posts" class="ml-4" tag="a">Yazilar</nuxt-link>
        </div>
        <div>
            <nuxt-link to="/admin">Admin</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>  
    a{
        color: #000;
        text-decoration: none;
        font-size: 18px;
    }
</style>