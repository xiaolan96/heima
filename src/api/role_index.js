// 1.引入axios
import axios from "@/utils/myaxios.js";
// 分配角色
export const getAllRoleList = () => {
  return axios({
    url: "roles"
  });
};
