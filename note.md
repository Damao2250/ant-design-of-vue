# nprogress进度条
# 安装
```shell
$ npm install --save nprogress
```

+ 使用
```js
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //全局样式

router.beforeEach((to, from, next) => {
  NProgress.start();
})

router.afterEach((to,from)=>{
    // 加载完马上消失（进度条没到尽头）
    NProgress.done();
    NProgress.remove();

    //加载不立即消失（进度条持续到尽头） 
    // NProgress.done();
})

```
+ provide/inject可以轻松实现跨级访问祖先组件的数据

+ vuex namespaced 解决分模块管理中的命名冲突问题





