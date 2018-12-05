var email = function (val) {
  return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(val)
}

var confirm = function(val,target) {
    return val === target
}

// var alreadyExists = function(val,url) {
//     if(value == null || value.trim() == ""){
//       return Promise.resolve();
//     }
//     let $this = this.vm

//     return Vue.http.get(url, '').then(res => {
//             return res.data.result ? Promise.reject() : Promise.resolve();
//         })
// }

var phone = function (val) {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/
    return reg.test(val)
}

var required = function (val) {
	if ( val == "" ) return false;
	var regu = "^[ ]+$";
	var re = new RegExp(regu);
	return re.test(val)?false:true;
}

//20170112 只能输入字母和数字
var num_letter = function (val) {
    return /^[0-9a-zA-Z]*$/g.test(val)
}

//20170302 只能输入数字
var register_num= function (val) {
    return /^[0-9]*$/g.test(val)?true:false;
}
//20170302 只能输入字母和数字和汉字
var register_name = function (val) {
    var reg = /^[\u4E00-\u9FA5A-Za-z0-9]+$/
    return reg.test(val)
}
//20170919 输入字符串的最大长度
var max_length = function (val) {
    var reg = /^[\u4E00-\u9FA5]^$/;
    var len = '';

    if (reg.test(val) && val.match(reg) && val.match(reg).length) {
        len = (val.length - val.match(reg).length) + val.match(reg).length*2;
    }

    return len;
}
//只能输入数字和小数点
var num_point= function (val) {
    if ( val == "" ) return true;
    var re = /^\d*(\.\d+)?$/;
    return re.test(val)?true:false;
}

//非空与数字校验
var num_empty= function (val) {
    return /^[0-9]+$/g.test(val)?true:false;
}

//非零校验
var no_zero= function (val) {
    if ( val == 0 ) return false;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(val)?false:true;
}


var validators = {
	required,
    email,
    phone,
    num_letter,
    register_name,
    register_num,
    max_length,
    num_point,
    num_empty,
    no_zero,
    confirm
}

export default function install(Vue) {
    if(!Vue) {console.error('please install Vue')}
    Object.keys(validators).forEach(k => Vue.validator(k, validators[k]))
};






