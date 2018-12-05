export default function install (Vue){
  var locales = {
    cn: {
    	routers:{
    	loading: '正在加载组件...',
    	},
      config:{
      },
      use: {
        interceptor: {
          loading: '加载中...'
        }
      }

    },
    en: {
      routers:{
        loading: "Loading components",
        
      },
      config:{
       
      },
      use: {
        interceptor: {
          loading: "Loading"
        }
      }
    }

  }
  Object.keys(locales).forEach(lang => Vue.locale(lang, locales[lang]));
}
