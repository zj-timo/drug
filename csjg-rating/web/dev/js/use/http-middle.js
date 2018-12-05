/**
 * [then 中的resolve,reject 如定义，则调用]
 */

export default function install (Vue) {
    // ['get', 'put', 'post', 'patch', 'delete', 'jsonp']
    ['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach((type)=> {
        var cb = Vue.http[type];
        Vue.http[type] = (...args)=> {

            var promise = {

              then(resolve_cb,reject_cb) {
                cb.apply(Vue.http,args).then((res) => {
                  resolve_cb && resolve_cb(res);
                },(res) => {
                  reject_cb && reject_cb(res);
                })
              }
            }

            return promise
        }
    })
}

