import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// Vue.prototype.$store = store
// Vue.prototype.$router = router

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

// 配置axios的baseUrl
// axios.defaults.baseURL = '/wj'
// axios.interceptors.request.use(config => {
//   console.log('222222222')
//   const token = store.state.token
//   config.headers.common.token = token
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.needLogin)) {
    if (store.state.token !== null && store.state.token !== '') {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
