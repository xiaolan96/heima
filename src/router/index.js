import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/view/login.vue";
import Home from "@/view/home.vue";
import Welcome from "@/view/welcome.vue";
import Users from "@/view/users/user.vue";
import Rights from "@/view/right/rights.vue";
import Roles from "@/view/right/roles.vue";
// 使用
Vue.use(VueRouter);
// 创建路由对象

var router = new VueRouter({
  routes: [
    {
      name: "default",
      path: "/",
      redirect: { name: "login" }
    },
    {
      name: "login",
      path: "/login",
      component: Login
    },
    {
      name: "home",
      path: "/home",
      // 添加啊路由从定向
      redirect: { name: "welcome" },
      component: Home,
      // 添加嵌套路由
      children: [
        {
          name: "welcome",
          path: "welcome",

          component: Welcome
        },
        {
          name: "users",
          path: "users",
          component: Users
        },
        {
          name: "rights",
          path: "rights",
          component: Rights
        },
        {
          name: "roles",
          path: "roles",
          component: Roles
        }
      ]
    }
  ]
});
// 暴露
export default router;
