function model(http) {
	return {
		//列表
        list (data) {

            return http.get('./ratingPatrolTask/list',data)
            // return http.post('./ratingPatrolTask/list',data)
        },
        
        //查看
        info(data) {
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
        //检查任务接收人
        enforcementLeader (data) {
            return http.get('./inspectionPlan/user/list',data)
        }
	}

}

module.exports = model
