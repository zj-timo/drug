function model(http) {
  return {
  	logout (data) {
     	return http.get('../oper-logout',data)
     	// return http.post('../oper-logout',data)
    },

		resetPassword (data) {

			return http.post('../pms/privilege/reset/passwd/user',data)
		},

    // 新增日志
    logAdd(data) {
      return http.post('./log/add', data)
    }
		
  }

}

module.exports = model
