import nvHeader from './header.vue'
import nvMenu from './menu.vue'
import nvFooter from './footer.vue'

var commons = {
  nvHeader,
  nvMenu,
  nvFooter
}

export default function install(Vue) {
    if(!Vue) {console.error('please install Vue')}
    Object.keys(commons).forEach(k => Vue.component(k, commons[k]))
};