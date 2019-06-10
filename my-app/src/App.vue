<template>
  <div id="app">
    <div class="container mt-5">
      <h1 class="h4 mb-5">ABCD COMPANY</h1>
      <div>
        <router-link to="/">トップ</router-link><br>
        <router-link to="/about">わたしたちについて</router-link><br>
        <router-link to="/service/ec">EC事業</router-link><br>
        <router-link to="/service/consulting">コンサルティング</router-link><br>
        <router-link to="/api">API</router-link>

      </div>
      <router-view />
      <div>
        <router-link to="/">トップ</router-link><br>
        <router-link to="/about">わたしたちについて</router-link><br>
        <router-link to="/service/ec">EC事業</router-link><br>
        <router-link to="/service/consulting">コンサルティング</router-link>
        <br>
        <router-link to="/api">API</router-link>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return { }
        },
    }
</script>

<style>
  .container{
    max-width: 480px;
  }

  .router-link-exact-active {
    color: red;
    font-weight: bold;
  }
</style>