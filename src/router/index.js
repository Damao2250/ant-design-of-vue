import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultRouter from './defaultRouter'
import NProgress from 'nprogress'

Vue.use(VueRouter)


const router = new VueRouter({
  routes: defaultRouter,
  mode: 'hash',
  scrollBehavior(to, from, savedPosition) {

    // keep-alive 返回缓存页面浏览记录的位置
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition
    }
    // 异步滚动操作
    return new Promise(() => {
      setTimeout((resolve, reject) => {
        console.log(reject);

        resolve({ x: 0, y: 0 })
      }, 200);
    })
  }
})

// 消除路由重复警告
const selfAddRoutes = (params) => {
  // 替换现有router的routes
  // router.matcher是比较核心的一个属性。对外提供两个方法match(负责route匹配), addRoutes（动态添加路由）。
  router.matcher = new VueRouter().matcher
  router.addRoutes(params)
}

router.beforeEach((to, from, next) => {
  NProgress.start();
  // selfAddRoutes(defaultRouter)
  next()

})

router.afterEach((to, from) => {
  NProgress.done();
  // NProgress.remove();
})



export default router