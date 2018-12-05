function model(http) {
  return {
    // 首页list
    list(data) {
      if (APP_ENV === 'dev') {
        return http.post('./qualityPlan/pc/list', data)
      } else {
        return http.get('./qualityPlan/pc/list', data)
      }
    },
    info(data) {
      if (APP_ENV === 'dev') {
        return http.post('./qualityPlan/detail', data)
      } else {
        return http.get('./qualityPlan/detail', data)
      }
    },

    //获取随行人员数据
    getSpecialUser(data) {
      if (APP_ENV === 'dev') {
        return http.post('./user/depUserAll', data)
      } else {
        return http.get('./user/depUserAll', data)
      }
    },
    //更新数据
    update (data) {
      return http.post('./qualityPlan/update',data)
    },
    //数据字典管理
    dataList(data) {
      if (APP_ENV === 'dev') {
        return http.post('./dataDictionary/list', data)
      } else {
        return http.get('./dataDictionary/list', data)
      }
    },
    //所属区域
    depNode(data) {
      if (APP_ENV === 'dev') {
        return http.post('./user/getDepNode', data)
      } else {
        return http.get('./user/getDepNode', data)
      }
    }
    
  }

}

module.exports = model