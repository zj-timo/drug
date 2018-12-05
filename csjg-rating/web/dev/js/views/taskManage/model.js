function model(http) {
	return {
		//列表
		list (data) {

			return http.get('./ratingTask/list',data)
			// return http.post('./ratingTask/list',data)
		},
		
        //现场评定编辑（监管方式信用评级）
        ratingUpdate(data) {

            return http.post('./ratingTask/updateRating', data)
        },
        //现场巡查编辑（监管方式信用巡查）
        updatePatrol(data) {

            return http.post('./ratingPatrolTask/update', data)
        },
        
        //评定完成查看
        ratingInfo(data) {
        	return http.get('./ratingTask/info',data)
            // return http.post('./ratingTask/info', data)
        },
        //巡查完成查看
        patrolInfo(data) {
            return http.get('./ratingPatrolTask/info',data)
            // return http.post('./ratingPatrolTask/info', data)
        },
        
        //市场经营数据
        depNode (data) {

            return http.get('./user/getDepNode',data)
            // return http.post('./user/getDepNode',data)
        },
        //获取数据字典列表(根据类型取值) 
        dataList (data) {

            return http.get('./dataDictionary/list',data)
            // return http.post('./dataDictionary/list',data)
        },
        //现场抽查登记—新增
        addCompany (data) {
            return http.post('./ratingTask/addCompany',data)
        },
        //现场抽查登记—编辑
        updateCompany (data) {
            return http.post('./ratingTask/updateCompany',data)
        },
        //现场抽查登记—列表
        companyList (data) {
            return http.get('./ratingTask/companyList',data)
            // return http.post('./ratingTask/companyList',data)
        },
        
        //现场抽查登记—删除
        companyDelete (data) {
            return http.post('./ratingTask/companyDelete',data)
        },
        //现场抽查登记—查看
        companyInfo (data) {
            return http.get('./ratingTask/companyInfo',data)
            // return http.post('./ratingTask/companyInfo',data)
        },
        //现场抽查登记—打印
        companyPrint (data) {
            return http.get('./ratingTask/printInfo',data)
            // return http.post('./ratingTask/companyInfo',data)
        },
        //检查任务接收人
        userList (data) {
            return http.get('./inspectionPlan/user/list',data)
        }
	}

}

module.exports = model
