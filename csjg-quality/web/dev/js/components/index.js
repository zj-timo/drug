
import datepicker from './datepicker'
import datepickerTime from './datepicker-time'
import dialog from './dialog'

import noData from './no-data'
import Notify from './notify'

import upload from './upload'
import fileUpload from './file-upload'
import imgsUpload from './imgs-upload'

import pageGroup from './pagegroup/index.1.1.0.js'
import loadingRouteData from './loading-route-data'
// import treeview from './tree-view/vue.tree-view.js'



const components = {
    datepicker,
    dialog,
    Notify,
    upload,
    fileUpload,
    pageGroup,
    imgsUpload,
    loadingRouteData,
    datepickerTime,
    // treeview
}

export default function install(Vue) {
    if(!Vue) {console.error('please install Vue')}
    Object.keys(components).forEach(k => Vue.component(k, components[k]))
}
