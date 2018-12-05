function model(http) {
	return {
		// 首页list
		list (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./qualityCount/industry/list',data)
  		}else {
  			return http.get('./qualityCount/industry/list',data)
  		}
		}
	}

}

module.exports = model
