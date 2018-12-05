function model(http) {
	return {
		//列表
        list (data) {

            return http.get('./ratingInspectionPlan/taskList',data)
            // return http.post('./ratingInspectionPlan/list',data)
        },
        //编辑
        update(data) {

            return http.post('./ratingInspectionPlan/update', data)
        },
        
        //查看
        info(data) {
            return http.get('./ratingInspectionPlan/detail',data)
            // return http.post('./ratingInspectionPlan/detail', data)
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
        //随行组员
        memberList (data) {

            return http.get('./user/depUserAll',data)
            // return http.post('./user/getAllUserByRating',data)
        },
        //检查任务接收人
        enforcementLeader (data) {
            return http.get('./inspectionPlan/user/list',data)
        }
	}

}

module.exports = model
