// 1.引入axios
import axios from "@/utils/myaxios.js";

// 获取所有权限数据
export const getAllRightList = type => {
  return axios({
    url: `rights/${type}`
  });
};

// 获取左侧菜单权限
export const getLeftMenu = () => {
  return axios({
    url: "menus"
  });
};
