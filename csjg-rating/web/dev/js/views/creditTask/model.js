function model(http) {
	return {

		// 
		list (data) {

			return http.get('./ratingInspectionPlan/list',data)
			// return http.post('./ratingInspectionPlan/list',data)
		},

		add (data) {

			return http.post('./ratingInspectionPlan/add',data)
		},

		companyList (data) {
			return http.get('./ratingInspectionPlan/companyList',data)
			// return http.post('./ratingInspectionPlan/companyList',data)
		},

		info (data) {

			return http.get('./ratingInspectionPlan/detail',data)
			// return http.post('./ratingInspectionPlan/detail',data)
		},

		userList (data) {

			return http.get('./inspectionPlan/user/list',data)
			// return http.post('./inspectionPlan/user/list',data)
		},

		//获取数据字典列表(根据类型取值) 
		dataList (data) {

			return http.get('./dataDictionary/list',data)
			// return http.post('./dataDictionary/list',data)
		},
		//所属区域
		depNode (data) {

			return http.get('./user/getDepNode',data)
			// return http.post('./user/getDepNode',data)
		},

		//检查任务接收人
		depUser (data) {

			return http.get('./user/depUser',data)
			// return http.post('./user/depUser',data)
		},

		//
		isExist (data) {

			return http.get('./user/isExist',data)
			// return http.post('./user/isExist',data)
		}
		

	}

}

module.exports = model
