<template>
  <div id="app">
	<div class="container mt-5">
	  <h1 class="h4 mb-5">ABCD COMPANY</h1>
	  <nav class="nav nav-pills nav-fill">

		<router-link to="/" class="nav-item nav-link">トップ</router-link>
		<br>
		<router-link to="/about" class="nav-item nav-link">わたしたちについて</router-link>
		<br>
		<router-link to="/service/ec" class="nav-item nav-link">EC事業</router-link>
		<br>
		<router-link to="/service/consulting" class="nav-item nav-link">コンサルティング</router-link>
		<br>
		<router-link to="/api" class="nav-item nav-link">API</router-link>
	  </nav>
	  <div class="main">
		<router-view/>
	  </div>
	  <nav class="nav nav-pills nav-fill">

		<router-link to="/" class="nav-item nav-link">トップ</router-link>
		<br>
		<router-link to="/about" class="nav-item nav-link">わたしたちについて</router-link>
		<br>
		<router-link to="/service/ec" class="nav-item nav-link">EC事業</router-link>
		<br>
		<router-link to="/service/consulting" class="nav-item nav-link">コンサルティング</router-link>
		<br>
		<router-link to="/api" class="nav-item nav-link">API</router-link>

	  </nav>
	</div>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
    }
</script>

<style>
  .container {
  }

  .router-link-exact-active {
	color: red;
	font-weight: bold;
  }

  .nav {
	width: 100%;
	padding-bottom: 30px;
	display: flex;
	justify-content: space-between;
  }
  
  .main {
	margin:0 0 30px 0;
	padding: 20px;
	min-height: 50vh;
	border: 1px solid gray;
  }
</style>