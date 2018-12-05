/**
 * [本地存储]
 */
import local_store from 'store'
export default function install(Vue) {
	// Vue.prototype.$local_store = local_store
	// local_store.get_cookie = function (cookie_name) {
	// 	var strCookie = document.cookie
 //        var arrCookie = strCookie.split('; ')
 //        for(var i = 0; i < arrCookie.length; i++){
 //            var arr = arrCookie[i].split('=')
 //            if(cookie_name == arr[0]){
 //                return arr[1]
 //            }
 //        }
 //        return ''
	// }

	// local_store.set_cookie = function (cname, cvalue, exdays) {
	//     var d = new Date()
	//     d.setTime(d.getTime() + (exdays*24*60*60*1000))
	//     var expires = 'expires='+d.toUTCString()
	//     document.cookie = cname + '=' + cvalue + '; ' + expires
	// }

	// local_store.clear_cookie = function (name) {  
	//     local_store.set_cookie(name, '', -1)
	// } 

	Object.defineProperties(Vue.prototype, {
		$local_store:{
			get:function(){
				return local_store
			}
		}
	})



	var setCookie = function (name,value) {
    document.cookie = name + '=' + escape(value)+"; path=/";
	}

  var getCookie = function (name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); //正则匹配
    if(arr=document.cookie.match(reg)){
      return unescape(arr[2]);
    }
    else{
     return null;
    }
	} 

	var  delCookie = function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null){
      document.cookie= name + "="+cval+";expires="+exp.toGMTString()+"; path=/";
    }
	} 

	Object.defineProperties(Vue.prototype, {
		$set_cookie:{
			get:function(){
				return setCookie;
			}
		}
	})

	Object.defineProperties(Vue.prototype, {
		$get_cookie:{
			get:function(){
				return getCookie;
			}
		}
	})

	Object.defineProperties(Vue.prototype, {
		$del_cookie:{
			get:function(){
				return delCookie;
			}
		}
	})

}