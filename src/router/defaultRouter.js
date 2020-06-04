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
      }
    ]
  }
]

export default defaultRouter