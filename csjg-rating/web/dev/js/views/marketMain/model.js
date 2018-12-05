function model(http) {
	return {

		list (data) {
			return http.get('./professionalMarket/list',data)
			// return http.post('./professionalMarket/list',data)
		},
		add (data) {
			return http.post('./professionalMarket/add',data)
		},
		update (data) {
			return http.post('./professionalMarket/update',data)
		},
		
		//主体市场详情
		companyInfo (data) {
			return http.get('./company/info',data)
			// return http.post('./company/info',data)
		},
		//专业市场详情
		detail (data) {
			return http.get('./professionalMarket/detail',data)
			// return http.post('./professionalMarket/detail',data)
		},
		// 巡查历史详情
		patrolDetail (data) {
			return http.get('./professionalMarket/patrolDetail',data)
			// return http.post('./professionalMarket/patrolDetail',data)
		},
		//获取数据字典列表(根据类型取值) 
		dataList (data) {

			return http.get('./dataDictionary/list',data)
			// return http.post('./dataDictionary/list',data)
		},
		//市场经营数据
		depNode (data) {

			return http.get('./user/getDepNode',data)
			// return http.post('./user/getDepNode',data)
		},

		collectionInfo (data) {

			return http.get('./companyCollection/info',data)
			// return http.post('./companyCollection/info',data)
		},
		collectionUpdate (data) {

			return http.post('./companyCollection/update',data)
		},
		//检查任务接收人
    userList (data) {
        return http.get('./inspectionPlan/user/list',data)
    }

	}

}

module.exports = model
