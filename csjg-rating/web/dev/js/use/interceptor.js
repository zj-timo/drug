/**
 * 拦截器
 * 
 */

var header = (request)=>{
    request.headers['Cache-Control'] = 'no-cache';
    request.headers['If-Modified-Since'] = '0';
}
export default function install(Vue) {

	Vue.http.interceptors.push({

		request (request) {

			header(request);

			Message.show('loading', Vue.t('use.interceptor.loading'),1);
	    	return request;
		},

		response (res) {
			// Message.hide();

			if(res.status == 404){
    		Message.show('error','网络异常',2);
    	}

    	if((res.data.code == 250 || res.data.code == -1 || res.data.code == 500) && res.request.url != '../oper-login'){
    		Message.show('error',res.data.message,10000);
    	}

    	if(res.data.code !== 200){
    		res.ok = false;
    	}

    	return res;
		}

	});


}
