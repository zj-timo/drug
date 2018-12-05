function model(http) {
	return {
		// 首页list
		list (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./qualityCount/force/list',data)
  		}else {
  			return http.get('./qualityCount/force/list',data)
  		}
		}
	}

}

module.exports = model
