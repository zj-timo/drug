/**
 * [路由中的钩子]
 * @param  {[type]} router [description]
 * @return {[type]}        [description]
 */
export default function(router){
  router.beforeEach(transition =>{
  	if (Vue.prototype.$get_cookie('token' == '' || Vue.prototype.$get_cookie('token' == null)) {
      this.$router.go({'name':'login'});
    }else {
      transition.next();
    }

  })
}