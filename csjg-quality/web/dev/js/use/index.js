import http_middle from './http-middle.js'
import interceptor from './interceptor.js'
import local_store from './local-store.js'
import proto from './proto.js'
import repair from './repair-vue.js'
import tabSize from './tab-size.js'




var uses = {
	http_middle,
	interceptor,
	local_store,
	proto,
	repair,
	tabSize
}


export default function install(Vue) {
    if(!Vue) {console.error('please install Vue')}
    Object.keys(uses).forEach(k => Vue.use(uses[k]));
};



