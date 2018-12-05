function model(http) {
  "use strict";

  return {
    menuList (data) {
      if(APP_ENV === 'dev') {
        return http.post('./menu/getMenuList',data)
      }else {
        return http.get('./menu/getMenuList',data)
      }
      
    },

    getUser (data) {

      if(APP_ENV === 'dev') {
        return http.post('../pms/privilege/info/user/get',data)
      }else {
        return http.get('../pms/privilege/info/user/get',data)
      }
    },

    // 系统菜单
    systemMenus(data) {
      if (APP_ENV === 'dev') {
        return http.post('./menu/getFuncList', data)
      } else {
        return http.get('./menu/getFuncList', data)
      }
    },

    // 新增日志
    logAdd(data) {
      return http.post('./log/add', data)
    }
  }
}
module.exports = model;

