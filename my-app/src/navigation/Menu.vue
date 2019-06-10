<template>
  <div id="app">
	<ul class="nav">
	  <li :class="navItemClass1">
		<a class="nav-link" href="#nav1">Link</a>
	  </li>
	  <li :class="navItemClass2>
		<a class="nav-link" href="#nav2">Link</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#nav3">Link</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#nav4">Link</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#nav5">Link</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#nav6">Link</a>
	  </li>
	  <li class="nav-item">
		<a class="nav-link" href="#nav7">Link</a>
	  </li>
	</ul>
  </div>
</template>

<script>
    export default {
        computed: {

            navItemClass1() {
                const tar1 = document.querySelector("#nav1")
                const tar2 = document.querySelector("#nav2")
                if (this.scrollY > 0 && tar1 && tar2) {
                    return {
                        "nav-item": true,
                        "active": tar1.getBoundingClientRect().y < this.scrollY && this.scrollY < tar2.getBoundingClientRect().y
                    }
                } else {
                    return {
                        "nav-item": true,
                    }
                }
            },
            navItemClass2() {
                const tar1 = document.querySelector("#nav2")
                const tar2 = document.querySelector("#nav3")
                if (this.scrollY > 0 && tar1 && tar2) {
                    return {
                        "nav-item": true,
                        "active": tar1.getBoundingClientRect().y < this.scrollY && this.scrollY < tar2.getBoundingClientRect().y
                    }
                } else {
                    return {
                        "nav-item": true,
                    }
                }
            },
        }
    }
</script>

<style>
  #app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
  }

  .container {
	padding-top: 50px;
  }

  .nav {
	background: #111;
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	margin-bottom: 1em;
  }

  .back {
	background: gray;
	text-align: center;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
  }

  .back a {
	color: #fff;
  }

  .active {
	color: red;
  }
</style>
