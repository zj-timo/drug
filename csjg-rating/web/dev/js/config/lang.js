    // 语言环境
    export default function (Vue){
        // console.log(Vue)
        Vue.config.lang = getCacheLangType(Vue.prototype.$local_store) || getBrowserLangType();
    };


    // 读取缓存语言环境
    function getCacheLangType(local_store){
        return local_store.get('lang');
    };

    // 读取浏览器语言环境
    function getBrowserLangType(){
        var lang = navigator.language || navigator.browserLanguage;
        
        var type = lang.match(/cn/gi) 
                ? 'cn'
                : lang.match(/en/gi) 
                    ? 'en'
                    : 'cn';

        return type;
    };
    