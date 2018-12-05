import keys from './keys';
import lang from './lang';
import auth from './auth';
import menus from './menus-config';



export default function install (Vue) {
    
    var ENV = APP_ENV || 'dev';

    if(ENV != 'pro') {
      Vue.http.headers.common['DOMAIN'] = 'http://10.10.11.164:8081';
    }
    
    Vue.config.debug = false;
    Vue.config.warnExpressionErrors = false;
    Vue.http.options.emulateJSON = false;
    Vue.http.options.root = '/csjg-sys';
    Vue.use(lang);
    Vue.use(auth);
    Vue.use(keys);
    Vue.use(menus);
    proxyMock(Vue,ENV);

}

/**
 * [proxyMock dev环境加载proxy-mock]
 * @param  {[type]} Vue     [description]
 * @param  {[type]} APP_ENV [description]
 * @return {[type]}         [description]
 */
var proxyMock = function (Vue,ENV) {
    if (ENV === 'dev') {
        Vue.config.debug = true;
        Vue.config.warnExpressionErrors = true;
        require(['./proxy-mock'], function ({
            proxy_mock_core
        }) {
            proxy_mock_core(Vue);
        })
    }
}