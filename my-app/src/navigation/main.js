//エントリファイルといいます。
import Vue from 'vue'
import App from './App.vue'


/* ここから */
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)
/* ここまで */

/* ここから */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
/* ここまで */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
