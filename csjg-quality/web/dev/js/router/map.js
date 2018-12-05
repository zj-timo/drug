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

         // 年度检查对象管理 index
        '/inspect-obj-index':{ 
          name:'inspect-obj-index',
          router_type:'inspect-obj',
          component: function(resolve){

            timer_show()
            require(['../views/inspectObj/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        // 检查对象管理 新增
        '/inspect-obj-new':{ 
          name:'inspect-obj-new',
          router_type:'inspect-obj',
          component: function(resolve){

            timer_show()
            require(['../views/inspectObj/newEdit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        // 检查对象管理 编辑
        '/inspect-obj-edit/:pk':{ 
          name:'inspect-obj-edit',
          router_type:'inspect-obj',
          component: function(resolve){

            timer_show()
            require(['../views/inspectObj/newEdit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

        // 质量监管检查计划 index
        '/inspect-plan-index':{ 
          name:'inspect-plan-index',
          router_type:'inspect-plan',
          component: function(resolve){

            timer_show()
            require(['../views/inspectPlan/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

         // 质量监管检查计划 new
        '/inspect-plan-new':{ 
          name:'inspect-plan-new',
          router_type:'inspect-plan',
          component: function(resolve){

            timer_show()
            require(['../views/inspectPlan/newEdit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

         // 质量监管检查计划 edit
        '/inspect-plan-edit/:pk':{ 
          name:'inspect-plan-edit',
          router_type:'inspect-plan',
          component: function(resolve){

            timer_show()
            require(['../views/inspectPlan/newEdit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

         // 质量监管检查计划 
        '/inspect-plan-info/:pk':{ 
          name:'inspect-plan-info',
          router_type:'inspect-plan',
          component: function(resolve){

            timer_show()
            require(['../views/inspectPlan/info.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

        // 任务受理 列表页
        '/inspect-task-index':{
          name:'inspect-task-index',
          router_type:'inspect-task',
          component: function(resolve){

            timer_show()
            require(['../views/inspectTask/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        // 任务受理 详情页
        '/inspect-task-edit/:pk':{
          name:'inspect-task-edit',
          router_type:'inspect-task',
          component: function(resolve){

            timer_show()
            require(['../views/inspectTask/newEdit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        // 任务受理 详情页
        '/inspect-task-info/:pk':{
          name:'inspect-task-info',
          router_type:'inspect-task',
          component: function(resolve){

            timer_show()
            require(['../views/inspectTask/info.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

        // 检查信息查询 列表页
        '/inspect-info-index':{
          name:'inspect-info-index',
          router_type:'inspect-info',
          component: function(resolve){

            timer_show()
            require(['../views/inspectInfo/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

        // 检查信息查询 详情页
        '/inspect-info-info/:pk':{
          name:'inspect-info-info',
          router_type:'inspect-info',
          component: function(resolve){

            timer_show()
            require(['../views/inspectInfo/info/info.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

        // 专项监管信息管理 列表页
        '/inspect-supervise-index':{
          name:'inspect-supervise-index',
          router_type:'inspect-supervise',
          component: function(resolve){

            timer_show()
            require(['../views/inspectSupervise/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        // 专项监管信息管理 编辑页
        '/inspect-supervise-edit/:pk':{
          name:'inspect-supervise-edit',
          router_type:'inspect-supervise',
          component: function(resolve){

            timer_show()
            require(['../views/inspectSupervise/newEdit/newEdit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        // 专项监管信息管理 详情页
        '/inspect-supervise-info/:pk':{
          name:'inspect-supervise-info',
          router_type:'inspect-supervise',
          component: function(resolve){

            timer_show()
            require(['../views/inspectSupervise/info/info.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

        // 整改信息管理 列表页
        '/inspect-reform-index':{
          name:'inspect-reform-index',
          router_type:'inspect-reform',
          component: function(resolve){

            timer_show()
            require(['../views/inspectReform/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        // 整改信息管理 编辑页
        '/inspect-reform-edit/:pk':{
          name:'inspect-reform-edit',
          router_type:'inspect-reform',
          component: function(resolve){

            timer_show()
            require(['../views/inspectReform/newEdit.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },
        // 整改信息管理 详情页
        '/inspect-reform-info/:pk':{
          name:'inspect-reform-info',
          router_type:'inspect-reform',
          component: function(resolve){

            timer_show()
            require(['../views/inspectReform/info.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

        // 统计分析 质量认证/列表页
        '/stat-quality-index':{
          name:'stat-quality-index',
          router_type:'stat-quality',
          component: function(resolve){

            timer_show()
            require(['../views/statQuality/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

        // 统计分析 3C认证/列表页
        '/stat-force-index':{
          name:'stat-force-index',
          router_type:'stat-force',
          component: function(resolve){

            timer_show()
            require(['../views/statForce/index.vue'], (res)=> {
              Message.hide()
              resolve(res)
            })
          }
        },

        // 统计分析 工业产品生产许可证/列表页
        '/stat-prod-index':{
          name:'stat-prod-index',
          router_type:'stat-prod',
          component: function(resolve){

            timer_show()
            require(['../views/statProd/index.vue'], (res)=> {
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