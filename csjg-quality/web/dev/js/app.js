	import Vue from 'vue'
	// import VueI18n from 'vue-i18n'
	import VueI18n from './lib/vue-i18n/src/index'
	import VueResource from 'vue-resource'
	import validator from 'vue-validator'
	// import router_map from './routers'
	import router from './router'
	import store from './vuex/store'
	import filters from './filters'
	import validators from './validators'
	import directives from './directives'
	import locales from './views/i18n'
	import config from './config'
	import uses from './use'

	// 公共组件
  	import components  from './components'
  	import commons  from './views/commons'
  	
	
	// 使用
	Vue.use(VueI18n)
	Vue.use(locales)
	Vue.use(VueResource)
	Vue.use(validator)
	Vue.use(uses)
	Vue.use(config)
	Vue.use(filters)
	Vue.use(directives)
	Vue.use(validators)
	Vue.use(components)
	Vue.use(commons)
	
	let app = Vue.extend({
		store
	})

	router(Vue).start(app, "#app")

	
	// Vue.router = router

