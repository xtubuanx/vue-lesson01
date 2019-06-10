import Vue from 'vue'
import App from './App.vue'

//これを false に設定すると、 Vue の起動時のプロダクションのヒントが表示されなくなります。
Vue.config.productionTip = false

/* ここから */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
/* ここまで */

// Vue を初期化して public/index.html の #app に適用する
new Vue({
    render: h => h(App),
}).$mount('#app')