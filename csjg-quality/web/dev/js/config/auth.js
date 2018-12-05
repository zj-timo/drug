
import md5 from 'md5';
import date_format from '../lib/date-format-lite';
import Vue from 'vue'

var auth = (request)=>{
  var userId = '', userName = '';

  if(Vue.prototype.$local_store.get('userInfo') != undefined  && (Vue.prototype.$local_store.get('userInfo').account != '' || Vue.prototype.$local_store.get('userInfo').account != undefined)) {
    userId = Vue.prototype.$local_store.get('userInfo').account;
  }else {
    userId = '';
  }

  if(Vue.prototype.$local_store.get('userInfo') != undefined  && (Vue.prototype.$local_store.get('userInfo').name != '' || Vue.prototype.$local_store.get('userInfo').name != undefined)) {
    userName = Vue.prototype.$local_store.get('userInfo').name;
  }else {
    userName = '';
  }

  request.headers['accessToken'] = Vue.prototype.$get_cookie('token');
  request.headers['userId'] = userId;
  request.headers['userName'] = encodeURI(userName,"UTF-8");
}



export default function install (Vue){
  if(!(Vue && Vue.http)) console.error('请先注入vue 和 vue-resource')

  Vue.http.interceptors.push({

    request (request) {
      if(request.url != '../oper-login') {
        auth(request);
      }

      return request
    }

  })
}