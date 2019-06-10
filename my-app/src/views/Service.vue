<template>
  <div>
	<h1 class="h4 mb-3">Service - {{category}} / {{title}}</h1>
	<div>This is Service page</div>
	<img :src="image" alt="">

	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
	<p>aaaaaaaaa</p>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                contents: {
                    titles: {
                        'ec': 'EC事業部',
                        'consulting': 'コンサルティング'
                    },
					images: {
                        'ec': 'ec.jpg',
                        'consulting': 'consulting.jpg'
					}
				}
			}
		},
        name: "Service.vue",
		computed: { //コンピューテッド
            category() {
                return this.$route.params.categorydesu
			},
			title() {
                return this.contents.titles[this.category]
                // const titles = {
                //     'ec': 'EC事業部',
                //     'consulting': 'コンサルティング'
                // }
				// return titles[this.category]
			},
			image() {

                return this.contents.images[this.category]
                // const images = {
                //     'ec': 'ec.jpg',
				// 	'consulting': 'consulting.jpg'
				// }
			}
		},
		watch: {
            '$route' (to, from) {
                console.log('route changed')
			}
		},
		mounted() {
            console.log('page mounted')
		}
    }
</script>

<style scoped>

</style>