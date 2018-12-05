function model(http) {
	return {
		// 统计数据
		list (data) {
			if(APP_ENV === 'dev') {
  			return http.post('./indexCount/rating/list',data)
  		}else {
  			return http.get('./indexCount/rating/list',data)
  		}
		},

		// charts数据
		echartList (data) {
			if(APP_ENV === 'dev') {
  			return http.post('./indexCount/rating/charts',data)
  		}else {
  			return http.get('./indexCount/rating/charts',data)
  		}
		}

	}

}

module.exports = model
