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

// 获取所有用户数据
export const getAllUserlist = params => {
  return axios({
    url: "users",
    params
  });
};

//  添加用户
export const addUser = data => {
  return axios({
    url: "users",
    method: "post",
    data
  });
};

// 编辑用户
export const editUser = data => {
  return axios({
    url: `users/${data.id}`,
    method: "put",
    data: { email: data.email, mobile: data.mobile }
  });
};

// 根据id删除用户
export const delUserById = id => {
  return axios({
    url: `users/${id}`,
    method: "delete"
  });
};

// 根据用户id修改用户状态
export const updateUserState = (uid, type) => {
  return axios({
    url: `users/${uid}/state/${type}`,
    method: "put"
  });
};

// 分配角色
export const getAllRoleList = () => {
  return axios({
    url: "roles"
  });
};
