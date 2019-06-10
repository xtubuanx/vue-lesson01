//main.jsはエントリファイルという
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import App from './App.vue'
Vue.config.productionTip = false

// import TopView from './views/Top.vue'
// import AboutView from './views/About.vue'
// import ServiceView from './views/Service.vue'
const router = new VueRouter({
    routes: [
        //ｊｓを分割してビルドする書き方:動的インポート
        { path: '/', component: () => import('./views/Top.vue')},
        { path: '/service/:categorydesu', component: () => import('./views/Service.vue')},
        { path: '/about',  component: () => import('./views/About.vue')},
        { path: '/api',  component: () => import('./views/api.vue')},
        { path: '/event/:event_id', component: () => import('./views/Event.vue')},
        // { path: '/', component: TopView},
        // { path: '/service/:category', component: ServiceView},
        // { path: '/about', component: AboutView},
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

new Vue({
    router,//vue-routerを使う場合はこれを忘れず！
  render: h => h(App),
}).$mount('#app')


