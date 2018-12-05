/**
 * [原型方法]
 */
export default function install(Vue) {
	
	
	if(Vue.prototype.$parse) return
	if(Vue.prototype.$trim) return
	if(Vue.prototype.$promiseAll) return

	Object.defineProperties(Vue.prototype, {
		$parse:{
			get:function(){
				return function (vm) {
					if(vm){
						return JSON.parse(JSON.stringify(vm))
					}
				}
			}
		},
		$trim:{
			get:function(){
				return function (str) {
					return str.replace(/\s/g,'')
				}
			}
		},
		$promiseAll:{
			get:function(){
				return Vue.Promise.all
			}
		}

	})
	


}