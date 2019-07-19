// 这个文件用来处理所有与用户相关的操作
// 1.引入axios
import axios from "@/utils/myaxios.js";

// 登录
export const login = data => {
  // axios({})返回了一个promise对象
  return axios({
    //   http://localhost:8888/api/private/v1/login
    // 请求路径
    url: "login",
    method: "post",
    data
  });
};
