/**
 * [腻子方法]
 * Object.create
 * Object.keys
 * __isDate
 * __isArray
 * __isRegExp
 */
if (!Object.create) {
    Object.create = function(o) {
        function F() {}
        F.prototype = o
        var newf = new F()
        return newf
    }
}

if (!Object.keys) {
    Object.keys = function(o) {
        var a = []
        for (var i in o)
            if (o.hasOwnProperty(i)) a.push(i)
        return a
    }
}


function __isType(o,type) {
    return Object.prototype.toString.call(o) === '[object '+type+']'
}
exports.__isType = __isType
exports.__isObject = function(o){return __isType(o,'Object')}
exports.__isString = function(o){return __isType(o,'String')}
exports.__isDate = function(o){return __isType(o,'Date')}
exports.__isArray = function(o){return __isType(o,'Array')}
exports.__isRegExp = function(o){return __isType(o,'RegExp')}
