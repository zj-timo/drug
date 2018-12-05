/**
 * filter_number input中过滤为数字
 */

import filter_grade from './filter_grade';
import filter_number from './filter_number';
import filter_map_address from './filter_map_address';
import filter_phone from './filter_phone';
import filter_trim from './filter_trim';
import filter_number_style from './filter_number_style';
import filter_map_key from './filter_map_key';
import filter_map_pk from './filter_map_pk';

var filters = {
    filter_grade,
    filter_number,
    filter_phone,
    filter_trim,
    filter_number_style,
    filter_map_key,
    filter_map_address,
    filter_map_pk
}

export default function install(Vue) {
    if(!Vue) {console.error('please install Vue')}
    Object.keys(filters).forEach(k => {  
        Vue.filter(k, filters[k])
    })
	
};
