import Vue from "vue";
import App from "./App.vue";
// 1.引入element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 2.使用element
Vue.use(ElementUI);

// 引入公共样式
import "@/styles/index.less";

// 引入路由
import router from "@/router/index.js";
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  var token = localStorage.getItem("itcast_manage_34_token");
  if (token || to.path === "/login") {
    next();
  } else {
    next({ name: "login" });
  }
});

new Vue({
  // 注入
  router,
  render: h => h(App)
}).$mount("#app");
