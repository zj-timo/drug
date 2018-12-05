
import datepicker from './datepicker'
import dialog from './dialog'

import noData from './no-data'
import Notify from './notify'

import upload from './upload'
import fileUpload from './file-upload'
import imgsUpload from './imgs-upload'

import pageGroup from './pagegroup/index.1.1.0.js'
import richEditor from './rich-editor'
import loadingRouteData from './loading-route-data'



const components = {
    datepicker,
    dialog,
    Notify,
    upload,
    fileUpload,
    pageGroup,
    richEditor,
    imgsUpload,
    loadingRouteData
}

export default function install(Vue) {
    if(!Vue) {console.error('please install Vue')}
    Object.keys(components).forEach(k => Vue.component(k, components[k]))
}
