import Vue from 'vue'
import VueRouter from 'vue-router'




Vue.use(VueRouter)



const router = new VueRouter({
  routes:[
      {
          path: '/',
          redirect:'/home'
    },
    {
      path:'/home',
      component: () => import('../views/Home/Home.vue'),
      meta: {
        showFooter:true
      }
    },
    {
        path:'/order',
      component: () => import('../views/Order/Order.vue'),
      meta: {
        showFooter:true
      }
    },
    {
        path:'/profile',
      component: () => import('../views/Profile/Profile.vue'),
      meta: {
        showFooter:true
      }
    },
    {
        path:'/search',
      component: () => import('../views/Search/Search.vue'),
      meta: {
        showFooter:true
      }
    },
    {
      path: '/test',
        component:()=>import('../views/test.vue')
    },
    {
      path: '/login',
      component:()=>import('../views/Login/Login.vue')
      }
  ]
})

export default router