function model(http) {
	return {
		// 首页list
    list(data) {
      if (APP_ENV === 'dev') {
        return http.post('./qualityTask/rectify/list', data)
      } else {
        return http.get('./qualityTask/rectify/list', data)
      }
    },
    info(data) {
      if (APP_ENV === 'dev') {
        return http.post('./qualityTask/info', data)
      } else {
        return http.get('./qualityTask/info', data)
      }
    },
    //获取随行人员数据
    getrectifyUser(data) {
      if (APP_ENV === 'dev') {
        return http.post('./user/getAllUserByQuality', data)
      } else {
        return http.get('./user/getAllUserByQuality', data)
      }
    },
    //更新数据
    save (data) {
      return http.post('./qualityTask/rectify/update',data)
    },
    //整改-->操作接口
    // reform (data) {
    // 	if (APP_ENV === 'dev') {
    //     return http.post('./qualitytask/rectify/alter', data)
    //   } else {
    //     return http.get('./qualitytask/rectify/alter', data)
    //   }
    // },
    //数据字典管理
    getDataDictionary(data) {
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
