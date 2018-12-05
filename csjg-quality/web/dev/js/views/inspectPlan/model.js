function model(http) {
	return {
		// 首页list
		list (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./qualityPlan/list',data)
  		}else {
  			return http.get('./qualityPlan/list',data)
  		}

		},

		add (data) {

			return http.post('./qualityPlan/add',data)
		},

		info (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./qualityPlan/detail',data)
  		}else {
  			return http.get('./qualityPlan/detail',data)
  		}

		},

		companyList (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./qualityPlan/companyList',data)
  		}else {
  			return http.get('./qualityPlan/companyList',data)
  		}

		},

		//获取数据字典列表(根据类型取值) 
		dataList (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./dataDictionary/list',data)
  		}else {
  			return http.get('./dataDictionary/list',data)
  		}

		},
		//所属区域
		depNode (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./user/getDepNode',data)
  		}else {
  			return http.get('./user/getDepNode',data)
  		}

		},
		userList (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./inspectionPlan/user/list',data)
  		}else {
  			return http.get('./inspectionPlan/user/list',data)
  		}

		},
		getSelectTree (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./specialTheme/getSelectTree',data)
  		}else {
  			return http.get('./specialTheme/getSelectTree',data)
  		}

		},
		
		//检查任务接收人
		depUser (data) {

			return http.get('./user/depUser',data)
			// return http.post('./user/depUserAll',data)
		},

		//
		isExist (data) {

			return http.get('./user/isExist',data)
			// return http.post('./user/isExist',data)
		}
		

	}

}

module.exports = model
