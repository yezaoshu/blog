
export const staticRoutes = [
    {
      path: "/",
      name: "home",
      component: ()=>import(`/src/views/homePage/Index.vue`),
      meta: { title: "首页" },
      children: [],
    },
    {
      path: "/article",
      name: "article",
      component: ()=>import(`/src/views/article/Index.vue`),
      meta: { title: "article" },
      children: [],
    },
    {
      path: "/about",
      name: "about",
      component: ()=>import(`/src/views/about/Index.vue`),
      meta: { title: "about" },
      children: [],
    }
]
  