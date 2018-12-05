function model(http) {
	return {
		// 首页list
		list (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./qualityObject/list',data)
  		}else {
  			return http.get('./qualityObject/list',data)
  		}

		},

		del (data) { 
			return http.post('./qualityObject/delete',data)
		},

		add (data) {

			return http.post('./qualityObject/add',data)
		},

		info (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./qualityObject/info',data)
  		}else {
  			return http.get('./qualityObject/info',data)
  		}

		},
		//获取企业主体树列表,支持模糊查询
		getCompnyList (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./supervisionObject/company/list',data)
  		}else {
  			return http.get('./supervisionObject/company/list',data)
  		}

		},
		//获取企业主体明细
		getCompnyDetail (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./qualityObject/company/detail',data)
  		}else {
  			return http.get('./qualityObject/company/detail',data)
  		}

		},
		//Excel导入
		excelUpload (data) {

			return http.post('./qualityObject/excelUpload',data)
		},
		//导入数据Excel模版下载
		exportExcel (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./qualityObject/exportExcel',data)
  		}else {
  			return http.get('./qualityObject/exportExcel',data)
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

		//判断企业是否存在指定年度下
		isCompanyPlan (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./qualityObject/isCompanyPlan',data)
  		}else {
  			return http.get('./qualityObject/isCompanyPlan',data)
  		}

		},

		//根据统一编号判断企业是否存在主体信息中
		isCompany (data) {

			if(APP_ENV === 'dev') {
  			return http.post('./supervisionObject/isCompany',data)
  		}else {
  			return http.get('./supervisionObject/isCompany',data)
  		}

		},
		
		//所属区域
		depNode (data) {
			
			if(APP_ENV === 'dev') {
  			return http.post('./user/getDepNode',data)
  		}else {
  			return http.get('./user/getDepNode',data)
  		}

		}

	}

}

module.exports = model

