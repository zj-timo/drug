/**
 * 指令
 */

import disabled from './disabled';
import limit_number from './limit-number';
import limit_number_fixed from './limit-number-fixed';
import limit_number_fixed_business from './limit-number-fixed-business';
import scroll_to from './scroll-to';
import clickoutside from './clickOutside';

var directives = {
    'disabled':disabled,
    'limit-number':limit_number,
    'limit-number-fixed':limit_number_fixed,
    'limit-number-fixed-business':limit_number_fixed_business,
    'scroll-to':scroll_to,
    'clickoutside':clickoutside
};



export default function install(Vue) {
    if(!Vue) {console.error('please install Vue')}
    Object.keys(directives).forEach(k => Vue.directive(k, directives[k]));
};

