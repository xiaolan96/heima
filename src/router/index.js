import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/view/login.vue";
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
    }
  ]
});
export default router;