function model(http) {
	return {
		// 统计数据
		list (data) {
			if(APP_ENV === 'dev') {
  			return http.post('./indexCount/quality/list',data)
  		}else {
  			return http.get('./indexCount/quality/list',data)
  		}
		},

		// charts数据
		echartList (data) {
			if(APP_ENV === 'dev') {
  			return http.post('./indexCount/quality/charts',data)
  		}else {
  			return http.get('./indexCount/quality/charts',data)
  		}
		}

	}

}

module.exports = model
