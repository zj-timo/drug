function model(http) {
	return {
		// 首页list
		list (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./qualityCount/quality/list',data)
  		}else {
  			return http.get('./qualityCount/quality/list',data)
  		}
		}
	}

}

module.exports = model
