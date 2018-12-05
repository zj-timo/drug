/**
 * [返回路由map]
 * @param  {[type]} Vue [description]
 * @return {[type]}     [description]
 */
export default function (Vue){
  var timer_show = function () {
    setTimeout(()=> {
      Message.show('loading',Vue.t('routers.loading'),1)
    })
  }


  var map = {
    '/':{
      name:'root',
      router_type:'root',
      component: function(resolve){
        require(['../views/app.vue'],resolve)
      },
      subRoutes:{
        '/index':{ 
          name:'index',
          router_type:'index',
          component: function(resolve){

            timer_show()
            require(['../views/index/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

          //市场主体管理
        '/market-main-index':{
          name:'market-main-index',
          router_type:'market-main',
          component: function(resolve){

            timer_show()
            require(['../views/marketMain/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        '/market-main-info/:pk':{
          name:'market-main-info',
          router_type:'market-main',
          component: function(resolve){

            timer_show()
            require(['../views/marketMain/info.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        '/market-main-edit/:pk':{
          name:'market-main-edit',
          router_type:'market-main',
          component: function(resolve){

            timer_show()
            require(['../views/marketMain/edit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
          //我的任务管理
        '/task-manage-index':{
          name:'task-manage-index',
          router_type:'task-manage',
          component: function(resolve){

            timer_show()
            require(['../views/taskManage/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
          //信用评级登记
        '/rating-registration-edit/:pk/:state':{
          name:'rating-registration-edit',
          router_type:'task-manage',
          component: function(resolve){

            timer_show()
            require(['../views/taskManage/ratingEdit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
          //信用巡查登记
        '/patrol-registration-edit/:pk/:state':{
          name:'patrol-registration-edit',
          router_type:'task-manage',
          component: function(resolve){

            timer_show()
            require(['../views/taskManage/patrolEdit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        //信用评级查看
        '/rating-registration-info/:pk':{
          name:'rating-registration-info',
          router_type:'task-manage',
          component: function(resolve){

            timer_show()
            require(['../views/taskManage/ratingInfo.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
          //信用巡查查看
        '/patrol-registration-info/:pk':{
          name:'patrol-registration-info',
          router_type:'task-manage',
          component: function(resolve){

            timer_show()
            require(['../views/taskManage/patrolInfo.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
          //现场抽查单新增
        '/company-new':{
          name:'company-new',
          router_type:'task-manage',
          component: function(resolve){

            timer_show()
            require(['../views/taskManage/companyNewEdit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
          //现场抽查单编辑
        '/company-edit/:pk':{
          name:'company-edit',
          router_type:'task-manage',
          component: function(resolve){

            timer_show()
            require(['../views/taskManage/companyNewEdit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
           //现场抽查单编辑
        '/company-info/:pk':{
          name:'company-info',
          router_type:'task-manage',
          component: function(resolve){

            timer_show()
            require(['../views/taskManage/companyInfo.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
          //现场抽查单打印
        '/company-print/:pk':{
          name:'company-print',
          router_type:'task-manage',
          component: function(resolve){

            timer_show()
            require(['../views/taskManage/companyPrint.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        // 年度监管对象 index
        '/supervise-obj-index':{
          name:'supervise-obj-index',
          router_type:'supervise-obj',
          component: function(resolve){

            timer_show()
            require(['../views/superviseObj/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        // 年度监管对象 检查对象维护
        '/supervise-obj-mainten':{
          name:'supervise-obj-mainten',
          router_type:'supervise-obj',
          component: function(resolve){

            timer_show()
            require(['../views/superviseObj/mainten.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        // 信用任务管理 index
        '/credit-task-index':{
          name:'credit-task-index',
          router_type:'credit-task',
          component: function(resolve){

            timer_show()
            require(['../views/creditTask/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

        // 信用任务管理 constitute
        '/credit-task-constitute':{
          name:'credit-task-constitute',
          router_type:'credit-task',
          component: function(resolve){

            timer_show()
            require(['../views/creditTask/constitute.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

        // 信用任务管理 info
        '/credit-task-info/:pk':{
          name:'credit-task-info',
          router_type:'credit-task',
          component: function(resolve){

            timer_show()
            require(['../views/creditTask/info.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        //信用级别认定管理
        '/credit-confirm-index':{
          name:'credit-confirm-index',
          router_type:'credit-confirm',
          component: function(resolve){

            timer_show()
            require(['../views/creditConfirm/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        //信用级别认定管理查看
        '/credit-confirm-info/:pk':{
          name:'credit-confirm-info',
          router_type:'credit-confirm',
          component: function(resolve){

            timer_show()
            require(['../views/creditConfirm/info.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        //信用级别认定管理编辑
        '/credit-confirm-edit/:pk':{
          name:'credit-confirm-edit',
          router_type:'credit-confirm',
          component: function(resolve){

            timer_show()
            require(['../views/creditConfirm/edit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        //信用分级监管巡查管理
        '/credit-patrol-index':{
          name:'credit-patrol-index',
          router_type:'credit-patrol',
          component: function(resolve){

            timer_show()
            require(['../views/creditPatrol/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        //信用分级监管巡查查看
        '/credit-patrol-info/:pk':{
          name:'credit-patrol-info',
          router_type:'credit-patrol',
          component: function(resolve){

            timer_show()
            require(['../views/creditPatrol/info.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        //信用分级监管巡查管理
        '/task-accept-index':{
          name:'task-accept-index',
          router_type:'task-accept',
          component: function(resolve){

            timer_show()
            require(['../views/taskAccept/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        //信用分级监管巡查查看
        '/task-accept-info/:pk':{
          name:'task-accept-info',
          router_type:'task-accept',
          component: function(resolve){

            timer_show()
            require(['../views/taskAccept/info.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        }
      }
    },

    // 登陆
    '/login':{
      name:'login',
      router_type:'login',
      component: function(resolve){
          // //console.log('member-new',resolve)
          require(['../views/login/index.vue'],resolve);
      }
    },
    
    /* 404路由 */
    // '*': {
    //     name:'404',
    //     component: function(resolve){
    //         router.go({ name: 'index'})
    //     }
    // }
  }
  
  return map
}