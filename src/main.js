import Vue from './../entrance'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/reset.css'
import 'nprogress/nprogress.css'


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
