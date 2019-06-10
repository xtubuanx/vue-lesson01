<template>
  <div>
	<div class="mb-3">
	  <router-link to="/">トップへ戻る</router-link>
	</div>
	<div v-if="event">
	  <h1 class="h4 mb-3">{{event.title}}</h1>
	  <div class="text-right">
		<a :href="event.event_url">Connpass</a>
	  </div>
	  <p>{{event.catch}}</p>
	  <p>{{event.description}}</p>
	  <!--{{}}で書かれた中にHTMLが入っている場合は、自動的にサニタイズ処理をしてくれている（セキュリティ対策）-->
	  <hr>
	  <div class="htmlArea" v-html="event.description"></div>
	  <!--HTMLをそのまま出したい場合はv-html-->
	  <!--{{}}記法と、v-textはサニタイズ処理をする。これはXSS脆弱性に対応したVueの機能-->
	</div>
	<div v-if="event === false">
	  該当のイベントが見つかりません。
	  <!--ユーザーがURLを加工したり、古いURLにアクセスされたときなどに必要な処理-->
	</div>
	<div v-if="event === null">
	  読み込み中
	</div>
  </div>
</template>

<script>
    import axios from "axios"
    export default {
        data(){
            return {
                events: null
            }
        },
        computed: {
            event_id(){
                return parseInt(this.$route.params.event_id)
				//parseInt は文字列ではなく数字とする
            },
            event(){
                if(this.events){
                    for(let event of this.events ){
                        if(event.event_id == this.event_id){
                            return event
                        }
                    }
                    return false
                }else{
                    return null
                }

            }
        },
        async mounted() {
            const result = await axios.get("https://happy-curie-5886a5.netlify.com/.netlify/functions/event",{
                params: {
                    count: 15
				}
			})
			//APIはブラウザから叩けないものもある。connpassもそう。バックエンドからしか読み込めないものも。
            this.events = result.data.events
        }
    }
</script>

<!--sassは>>>は使えない。sassは/deep/オペレータを使う
v-html 内部のHTML 要素に対してscoped css を記述する場合、 うまく装飾が適用されないことがある-->
<style>
 .htmlArea >>>  h1 {
   font-style: italic;
  }
</style>
<!--
<style lang="scss" scoped>
  .htmlArea a{ // dont work
	color: red;
  }

  .htmlArea /deep/ a{ // work!
	color: blue;
  }
</style>-->
