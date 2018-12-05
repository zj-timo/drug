function model(http) {
  return {

    login (data) {
     	return http.post('../oper-login',data)
    }

  }

}

module.exports = model
