import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
// import router from './router'
import store from "./store";

// 测试/-----
Vue.use(VueRouter)
var files = require.context('./router/demo', false, /\.js$/)
var route = []
files.keys().forEach(item => {
  route.push(files(item).default) 
})


const router = new VueRouter({
  base: process.env.BASE_URL,
  routes: route,
  mode: 'history',
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
