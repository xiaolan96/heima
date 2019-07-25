// 1.引入axios
import axios from "@/utils/myaxios.js";
// 分配角色
export const getAllRoleList = () => {
  return axios({
    url: "roles"
  });
};

export const delRightByRoleId = (roleId, rightId) => {
  return axios({
    url: `roles/${roleId}/rights/${rightId}`,
    method: "delete"
  });
};
