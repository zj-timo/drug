/**
这里定义系统所有不同菜单
**/

export default function install(Vue){

  const menus = [
    {
      name: '市场主体',
      id:'market-main',
      open: false,
      subMenus:[
        { name: '市场主体管理', open: false, url: 'market-main-index', router_type:'market-main'}
      ]
    },
    {
      name: '监管对象管理',
      id:'supervise-obj',
      open: false,
      subMenus:[
        { name: '年度监管对象管理', open: false, url: 'supervise-obj-index', router_type:'supervise-obj'}
      ]
    },
    {
      name: '任务管理',
      id:'task-manage',
      open: false,
      subMenus:[
        { name: '信用任务管理', open: false, url: 'credit-task-index', router_type:'credit-task'},
        { name: '任务受理', open: false, url: 'task-accept-index', router_type:'task-accept'},
        { name: '我的任务管理', open: false, url: 'task-manage-index', router_type:'task-manage'},
        { name: '信用级别认定管理', open: false, url: 'credit-confirm-index', router_type:'credit-confirm'},
        { name: '信用分级巡查管理', open: false, url: 'credit-patrol-index', router_type:'credit-patrol'}
      ]
    }
  ]
    
  var keys = {
    menus
  };

    
  Object.keys(keys).forEach(key=>{
    window[key] = keys[key]
  })

};
