
import repair from './repair.js'
export default function install(Vue) {

	Object.defineProperties(Vue.prototype, {
		$repair:{
			get:function(){
				return repair
			}
		}
	})
	

}