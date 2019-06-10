<template>
  <div>
    <h1 class="h4 mb-3">Event List</h1>
    <div class="list-group list-group-flush" v-if="events !== null">
      <!-- 画面が真っ白になってしまうためユーザー体験が損なわれるため、ローディング画像を出すなどをするとよい　-->
      <router-link
              class="list-group-item list-group-item-action"
              v-for="(event,index) in events" :key="index"
              :to="`/event/${event.event_id}`"

      >
        {{event.title}}--{{event.owner_nickname}}<br>

        <!--${}記法を囲むときはバッククォートで囲まないと文字列と認識されてしまうので注意-->
      <!--Vueの拡張機能を使って、値を確認しながら-->

      <!--デベロッパーツールのnetworkタブを開くと、eventという項目が出てくる-->
      </router-link>
    </div>
    <div v-if="events == null">読み込み中</div>
    <div v-if="event != null && events.length === 0">アクティブなイベンドがありません</div>
    <!--lengthは配列を見る。が、読み込まれてないうちから判別が始まってしまうのでエラーがでる。
    なので、nullのとき、かつ　length === 0をする-->
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
        async mounted() {
            const result = await axios.get("https://happy-curie-5886a5.netlify.com/.netlify/functions/event")
            this.events = result.data.events
        }
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