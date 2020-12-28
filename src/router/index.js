import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//原先引入路由的方式
//import Home from '../views/Home/Home.vue'

//懒加载引入路由方式
//只有在执行函数才会加载路由组件，这个函数在请求对应的路由路径时才会执行
//const Home=()=>import ('../views/Home/Home.vue')
const router = new VueRouter({
	routes: [
		{
			path: "/",
			redirect: "/home",
		},
		{
			path: "/home",
			component: () => import("../views/Home/Home.vue"),
			meta: {
				showFooter: true,
			},
		},
		{
			path: "/order",
			component: () => import("../views/Order/Order.vue"),
			meta: {
				showFooter: true,
			},
		},
		{
			path: "/profile",
			component: () => import("../views/Profile/Profile.vue"),
			meta: {
				showFooter: true,
			},
		},
		{
			path: "/search",
			component: () => import("../views/Search/Search.vue"),
			meta: {
				showFooter: true,
			},
		},
		{
			path: "/test",
			component: () => import("../views/test.vue"),
		},
		{
			path: "/login",
			component: () => import("../views/Login/Login.vue"),
		},
		{
			path: "/shop",
			component: () => import("../views/Shop/Shop.vue"),
			children: [
				{
					path: "/shop/goods",
					component: () => import("../views/Shop/ShopGoods/ShopGoods.vue"),
				},
				{
					path: "/shop/ratings",
					component: () => import("../views/Shop/ShopRatings/ShopRatings.vue"),
				},
				{
					path: "/shop/info",
					component: () => import("../views/Shop/ShopInfo/ShopInfo.vue"),
        },
        {
          path: '',
          redirect: "/shop/goods",
        },
			],
		},
	],
});

export default router;
