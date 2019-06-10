<template>
  <div id="app">
	<div id="top"></div>

	<ul class="nav">
	  <li :class="navItemClass1">
		<a class="nav-link" href="#nav1">Link</a>
	  </li>
	  <li :class="navItemClass2">
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

	<div class="container">
	  <section id="nav1">
		<h1>1.見出し</h1>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
	  </section>
	  <section id="nav2">
		<h1>2.見出し</h1>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
	  </section>
	  <section id="nav3">
		<h1>3.見出し</h1>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
	  </section>
	  <section id="nav4">
		<h1>4.見出し</h1>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
	  </section>
	  <section id="nav5">
		<h1>5.見出し</h1>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
	  </section>
	  <section id="nav6">
		<h1>6.見出し</h1>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
	  </section>
	  <section id="nav7">
		<h1>7.見出し</h1>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
		<p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
	  </section>
	</div>

	<div :class="topBtnClass">
	  <div class="back" @click="scrollToTop"><a>TOPへ戻る</a></div>
	</div>
  </div>
</template>

<script>
    //<!--<div v-if="scrollY > 500">-->
    //import HelloWorld from './components/HelloWorld.vue'

    import AppMenu from './Menu.vue'

    export default {
        components: {
            AppMenu
        },
        data() {
            return {
                scrollY: 0
            }
        },
        methods: {
            scrollToTop() {
                //window.scrollTo(0,0)
                this.$scrollTo('#top', 500, {
                    offset: 0
                });
            }
        },
        computed: {
            showTopButton() {
                return this.scrollY > 500 && this.scrollY < 2000
            },
            topBtnClass() {
                return {
                    activeeee: this.scrollY > 500,
                    'btn-top': true
                }
            },
            navItemClass1() {
                const tar1 = document.querySelector("#nav1")
                const tar2 = document.querySelector("#nav2")
                if (this.scrollY > 0 && tar1 && tar2) {
                    return {
                        "nav-item": true,
                        "active": tar1.getBoundingClientRect().y - 50 < this.scrollY && this.scrollY < tar2.getBoundingClientRect().y
                    }
                } else {
                    return {
                        "nav-item": true,
                    }
                }
            },
            navItemClass2() {
                const tar2 = document.querySelector("#nav2")
                const tar3 = document.querySelector("#nav3")
                if (this.scrollY > 0 && tar2 && tar3) {
                    return {
                        "nav-item": true,
                        "active": tar2.getBoundingClientRect().y < this.scrollY && this.scrollY < tar3.getBoundingClientRect().y
                    }
                } else {
                    return {
                        "nav-item": true,
                    }
                }
            },
        },
        mounted() {
            //console.log('page ready');
            window.addEventListener('scroll', () => {
                this.scrollY = window.scrollY
                console.log(this.scrollY)
            })
        },
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

  .active a {
	color: red;
  }
</style>
