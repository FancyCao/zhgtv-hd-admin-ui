import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Index from "../views/templates/Index.vue";
import Sign from "../views/templates/Sign.vue";
import Lottery from "../views/templates/Lottery.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: "/home",
    name: "模板管理",
    component: Home,
    redirect: '/home/index',
    children: [
      {
        path: "index",
        name: "首页",
        component: Index
      },
      {
        path: "sign",
        name: "签到模板",
        component: Sign
      },
      {
        path: "lottery",
        name: "抽奖模板",
        component: Lottery
      }
    ]
  },
  // {
  //   path: "/about",
  //   name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
