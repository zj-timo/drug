function model(http) {
	return {
		// 首页list
		list (data) {

			return http.get('./ratingSupervisionObject/list',data)
			// return http.post('./ratingSupervisionObject/list',data)
		},

		del (data) { 
			return http.post('./ratingSupervisionObject/delete',data)
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

		// 检查对象维护list
		companyList (data) {

			return http.get('./ratingSupervisionObject/companyList',data)
			// return http.post('./ratingSupervisionObject/companyList',data)
		},

		// 检查对象维护add
		add (data) {

			return http.post('./ratingSupervisionObject/add',data)
		},
	}

}

module.exports = model
