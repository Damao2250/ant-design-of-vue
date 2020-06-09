const defaultRouter = [
  {
    path: "/",
    component: () => import('@/layout/layout'), // 布局页面
    redirect: {
      name: "index"
    },
    children: [
      {
        path: "/index",
        component: () => import('@/views/index/index'),
        name: "index",
        meta: {
          title: "index"
        }
      },
      {
        path: "/botton",
        component: () => import('@/views/components/general/botton'),
        name: "botton",
        meta: {
          title: "botton"
        }
      },
      {
        path: "/icon",
        component: () => import('@/views/components/general/icon'),
        name: "icon",
        meta: {
          title: "icon"
        }
      }
    ]
  }
]

export default defaultRouter