import polyfill from '../utils/polyfill.js'


;(function () {
	var isArray = polyfill.__isArray,
		isObject =  polyfill.__isObject,
		isString =  polyfill.__isString

	var loop = {

		obj:function (obj,source) {
			// console.log(obj)
			var data = {}
			for(var k in obj){
				if(obj.hasOwnProperty(k)){
					data[k] = repair(obj[k],source[k])
				}
			}
			return data
		},

		ary:function (ary,source) {
			var data = []
			for(var i = 0 , len = source.length ; i<len ; i++){
				data.push(repair(ary[0],source[i]))
			}
			return data
		},

		str:function (str,source) {
			return source || str
		}
	}
	var repair = function (model,source) {
		var data 

		switch(true){
			case isObject(model):
				data = loop.obj(model,source)
			break

			case isArray(model):
				data = loop.ary(model,source)
			break

			case isString(model):
				data = loop.str(model,source)
			break

			default:
				data = loop.str(model,source)
			break
		}
		return data
	}

	/**
	 * demo
	 */
	// var a = {
	// 	name:'a',
	// 	ary:[{
	// 		name:'aaaa'
	// 	}]
	// }
	// var b = {
	// 	name:'b',
	// 	ary:[{
	// 		name:'ddd'
	// 	},
	// 	{
	// 		name:''
	// 	},
	// 	{
	// 		name:'cccc',
	// 		val:'3'
	// 	}]
	// }
	// a = repair(a,b)
	// console.log(repair(a,b))
	module.exports = repair
})()