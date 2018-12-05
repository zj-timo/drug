import VueRouter from 'vue-router'
import map from './map'


export default function (Vue){
    Vue.use(VueRouter)
    //实例化VueRouter
    let router = new VueRouter({
      hashbang: true,
      history: false,
      saveScrollPosition: true,
      transitionOnLoad: true
    })

    var routerMap= map(Vue)
    router.map(routerMap)

    /**
     * [description router 跳转]
     */
    Vue.http.interceptors.push({
       
      response (response) {

        // 拦截session过期
        if(response.data.code === 403){
          setTimeout(()=>{
            router.go({name:'login'});
          })
        }

        return response;

      }

    })

    return router

}