/**
这里定义系统所有不同菜单
**/

export default function install(Vue){

  const menus = [
    {
      name: '药品经营许可',
      id:'drug',
      open: false,
      subMenus:[{
        name: '筹建',
        id:'drug-build',
        open: false,
        subMenus:[
          { name: '筹建', open: false, url: 'drug-build-index', router_type:'drug-build'},
          { name: '审查', open: false, url: 'drug-build-examine-index', router_type:'drug-build-examine'},
          { name: '听证', open: false, url: 'drug-build-hearing-index', router_type:'drug-build-hearing'},
          { name: '现场核查', open: false, url: 'drug-build-check-index', router_type:'drug-build-check'},
          { name: '审核', open: false, url: 'drug-build-verify-index', router_type:'drug-build-verify'},
          { name: '审批', open: false, url: 'drug-build-ratify-index', router_type:'drug-build-ratify'},
          { name: '打证', open: false, url: 'drug-build-print-index', router_type:'drug-build-print'},
          { name: '发证', open: false, url: 'drug-build-grant-index', router_type:'drug-build-grant'},
          { name: '归档', open: false, url: 'drug-build-file-index', router_type:'drug-build-file'},
          { name: '文书补打', open: false, url: 'drug-build-supplement-index', router_type:'drug-build-supplement'}
        ]
      },{
        name: '核发',
        id:'drug-approve',
        open: false,
        subMenus:[
          { name: '核发', open: false, url: 'drug-approve-index', router_type:'drug-approve'},
          { name: '审查', open: false, url: 'drug-approve-examine-index', router_type:'drug-approve-examine'},
          { name: '听证', open: false, url: 'drug-approve-hearing-index', router_type:'drug-approve-hearing'},
          { name: '现场核查', open: false, url: 'drug-approve-check-index', router_type:'drug-approve-check'},
          { name: '审核', open: false, url: 'drug-approve-verify-index', router_type:'drug-approve-verify'},
          { name: '审批', open: false, url: 'drug-approve-ratify-index', router_type:'drug-approve-ratify'},
          { name: '打证', open: false, url: 'drug-approve-print-index', router_type:'drug-approve-print'},
          { name: '发证', open: false, url: 'drug-approve-grant-index', router_type:'drug-approve-grant'},
          { name: '归档', open: false, url: 'drug-approve-file-index', router_type:'drug-approve-file'},
          { name: '文书补打', open: false, url: 'drug-approve-supplement-index', router_type:'drug-approve-supplement'}
        ]
      },{
        name: '变更',
        id:'drug-change',
        open: false,
        subMenus:[
          {  name: '变更', open: false, url: 'drug-change-index', router_type:'drug-change'},
          {  name: '审查', open: false, url: 'drug-change-examine-index', router_type:'drug-change-examine'},
          {  name: '听证', open: false, url: 'drug-change-hearing-index', router_type:'drug-change-hearing'},
          {  name: '现场核查', open: false, url: 'drug-change-check-index', router_type:'drug-change-check'},
          {  name: '审核', open: false, url: 'drug-change-verify-index', router_type:'drug-change-verify'},
          {  name: '审批', open: false, url: 'drug-change-ratify-index', router_type:'drug-change-ratify'},
          {  name: '打证', open: false, url: 'drug-change-print-index', router_type:'drug-change-print'},
          {  name: '发证', open: false, url: 'drug-change-grant-index', router_type:'drug-change-grant'},
          {  name: '归档', open: false, url: 'drug-change-file-index', router_type:'drug-change-file'},
          {  name: '文书补打', open: false, url: 'drug-change-supplement-index', router_type:'drug-change-supplement'}
        ]
      },{
        name: '换发',
        id:'drug-renew',
        open: false,
        subMenus:[
          { name: '换发', open: false, url: 'drug-renew-index', router_type:'drug-renew'},
          { name: '审查', open: false, url: 'drug-renew-examine-index', router_type:'drug-renew-examine'},
          { name: '听证', open: false, url: 'drug-renew-hearing-index', router_type:'drug-renew-hearing'},
          { name: '现场核查', open: false, url: 'drug-renew-check-index', router_type:'drug-renew-check'},
          { name: '审核', open: false, url: 'drug-renew-verify-index', router_type:'drug-renew-verify'},
          { name: '审批', open: false, url: 'drug-renew-ratify-index', router_type:'drug-renew-ratify'},
          { name: '打证', open: false, url: 'drug-renew-print-index', router_type:'drug-renew-print'},
          { name: '发证', open: false, url: 'drug-renew-grant-index', router_type:'drug-renew-grant'},
          { name: '归档', open: false, url: 'drug-renew-file-index', router_type:'drug-renew-file'},
          { name: '文书补打', open: false, url: 'drug-renew-supplement-index', router_type:'drug-renew-supplement'}
        ]
      },{
        name: '注销',
        id:'drug-cancel',
        open: false,
        subMenus:[
          { name: '注销', open: false, url: 'drug-cancel-index', router_type:'drug-cancel'},
          { name: '审查', open: false, url: 'drug-cancel-examine-index', router_type:'drug-cancel-examine'},
          { name: '听证', open: false, url: 'drug-cancel-hearing-index', router_type:'drug-cancel-hearing'},
          { name: '现场核查', open: false, url: 'drug-cancel-check-index', router_type:'drug-cancel-check'},
          { name: '审核', open: false, url: 'drug-cancel-verify-index', router_type:'drug-cancel-verify'},
          { name: '审批', open: false, url: 'drug-cancel-ratify-index', router_type:'drug-cancel-ratify'},
          { name: '打证', open: false, url: 'drug-cancel-print-index', router_type:'drug-cancel-print'},
          { name: '发证', open: false, url: 'drug-cancel-grant-index', router_type:'drug-cancel-grant'},
          { name: '归档', open: false, url: 'drug-cancel-file-index', router_type:'drug-cancel-file'},
          { name: '文书补打', open: false, url: 'drug-cancel-supplement-index', router_type:'drug-cancel-supplement'}
        ]
      },{
        name: '补证',
        id:'drug-readd',
        open: false,
        subMenus:[
          { name: '补证', open: false, url: 'drug-readd-index', router_type:'drug-readd'},
          { name: '审查', open: false, url: 'drug-readd-examine-index', router_type:'drug-readd-examine'},
          { name: '听证', open: false, url: 'drug-readd-hearing-index', router_type:'drug-readd-hearing'},
          { name: '现场核查', open: false, url: 'drug-readd-check-index', router_type:'drug-readd-check'},
          { name: '审核', open: false, url: 'drug-readd-verify-index', router_type:'drug-readd-verify'},
          { name: '审批', open: false, url: 'drug-readd-ratify-index', router_type:'drug-readd-ratify'},
          { name: '打证', open: false, url: 'drug-readd-print-index', router_type:'drug-readd-print'},
          { name: '发证', open: false, url: 'drug-readd-grant-index', router_type:'drug-readd-grant'},
          { name: '归档', open: false, url: 'drug-readd-file-index', router_type:'drug-readd-file'},
          { name: '文书补打', open: false, url: 'drug-readd-supplement-index', router_type:'drug-readd-supplement'}
        ]
      }]
    },
    {
      name: '第一类医疗器械生产备案',
      id:'first-record',
      open: false,
      subMenus:[
        { name: '受理', open: false, url: 'first-accept-index', router_type:'first-accept'},
        { name: '审批', open: false, url: 'first-ratify-index', router_type:'first-ratify'},
        { name: '打证', open: false, url: 'first-print-index', router_type:'first-print'},
        { name: '发证', open: false, url: 'first-grant-index', router_type:'first-grant'},
        { name: '归档', open: false, url: 'first-file-index', router_type:'first-file'},
        { name: '文书补打', open: false, url: 'first-supplement-index', router_type:'first-supplement'}
      ]
    },
    {
      name: '第二类医疗器械经营备案',
      id:'second-record',
      open: false,
      subMenus:[
        { name: '受理', open: false, url: 'second-accept-index', router_type:'second-accept'},
        { name: '审批', open: false, url: 'second-ratify-index', router_type:'second-ratify'},
        { name: '打证', open: false, url: 'second-print-index', router_type:'second-print'},
        { name: '发证', open: false, url: 'second-grant-index', router_type:'second-grant'},
        { name: '归档', open: false, url: 'second-file-index', router_type:'second-file'},
        { name: '文书补打', open: false, url: 'second-supplement-index', router_type:'second-supplement'}
      ]
    },
    {
      name: '第三类医疗器械经营许可',
      id:'third',
      open: false,
      subMenus:[{
        name: '申办',
        id:'third-bid',
        open: false,
        subMenus:[
          { name: '申办', open: false, url: 'third-bid-index', router_type:'third-bid'},
          { name: '审查', open: false, url: 'third-bid-examine-index', router_type:'third-bid-examine'},
          { name: '现场核查', open: false, url: 'third-bid-check-index', router_type:'third-bid-check'},
          { name: '审批', open: false, url: 'third-bid-ratify-index', router_type:'third-bid-ratify'},
          { name: '打证', open: false, url: 'third-bid-print-index', router_type:'third-bid-print'},
          { name: '发证', open: false, url: 'third-bid-grant-index', router_type:'third-bid-grant'},
          { name: '归档', open: false, url: 'third-bid-file-index', router_type:'third-bid-file'},
          { name: '文书补打', open: false, url: 'third-bid-supplement-index', router_type:'third-bid-supplement'}
        ]
      },{
        name: '许可事项变更',
        id:'third-permit',
        open: false,
        subMenus:[
          { name: '许可事项变更', open: false, url: 'third-permit-index', router_type:'third-permit'},
          { name: '审查', open: false, url: 'third-permit-examine-index', router_type:'third-permit-examine'},
          { name: '现场核查', open: false, url: 'third-permit-check-index', router_type:'third-permit-check'},
          { name: '审批', open: false, url: 'third-permit-ratify-index', router_type:'third-permit-ratify'},
          { name: '打证', open: false, url: 'third-permit-print-index', router_type:'third-permit-print'},
          { name: '发证', open: false, url: 'third-permit-grant-index', router_type:'third-permit-grant'},
          { name: '归档', open: false, url: 'third-permit-file-index', router_type:'third-permit-file'},
          { name: '文书补打', open: false, url: 'third-permit-supplement-index', router_type:'third-permit-supplement'}
        ]
      },{
        name: '登记事项变更',
        id:'third-register',
        open: false,
        subMenus:[
          { name: '登记事项变更', open: false, url: 'third-register-index', router_type:'third-register'},
          { name: '审查', open: false, url: 'third-register-examine-index', router_type:'third-register-examine'},
          { name: '现场核查', open: false, url: 'third-register-check-index', router_type:'third-register-check'},
          { name: '审批', open: false, url: 'third-register-ratify-index', router_type:'third-register-ratify'},
          { name: '打证', open: false, url: 'third-register-print-index', router_type:'third-register-print'},
          { name: '发证', open: false, url: 'third-register-grant-index', router_type:'third-register-grant'},
          { name: '归档', open: false, url: 'third-register-file-index', router_type:'third-register-file'},
          { name: '文书补打', open: false, url: 'third-register-supplement-index', router_type:'third-register-supplement'}
        ]
      },{
        name: '延续',
        id:'third-continue',
        open: false,
        subMenus:[
          { name: '延续', open: false, url: 'third-continue-index', router_type:'third-continue'},
          { name: '审查', open: false, url: 'third-continue-examine-index', router_type:'third-continue-examine'},
          { name: '现场核查', open: false, url: 'third-continue-check-index', router_type:'third-continue-check'},
          { name: '审批', open: false, url: 'third-continue-ratify-index', router_type:'third-continue-ratify'},
          { name: '打证', open: false, url: 'third-continue-print-index', router_type:'third-continue-print'},
          { name: '发证', open: false, url: 'third-continue-grant-index', router_type:'third-continue-grant'},
          { name: '归档', open: false, url: 'third-continue-file-index', router_type:'third-continue-file'},
          { name: '文书补打', open: false, url: 'third-continue-supplement-index', router_type:'third-continue-supplement'}
        ]
      },{
        name: '注销',
        id:'third-cancel',
        open: false,
        subMenus:[
          { name: '注销', open: false, url: 'third-cancel-index', router_type:'third-cancel'},
          { name: '审查', open: false, url: 'third-cancel-examine-index', router_type:'third-cancel-examine'},
          { name: '现场核查', open: false, url: 'third-cancel-check-index', router_type:'third-cancel-check'},
          { name: '审批', open: false, url: 'third-cancel-ratify-index', router_type:'third-cancel-ratify'},
          { name: '打证', open: false, url: 'third-cancel-print-index', router_type:'third-cancel-print'},
          { name: '发证', open: false, url: 'third-cancel-grant-index', router_type:'third-cancel-grant'},
          { name: '归档', open: false, url: 'third-cancel-file-index', router_type:'third-cancel-file'},
          { name: '文书补打', open: false, url: 'third-cancel-supplement-index', router_type:'third-cancel-supplement'}
        ]
      }]  
    } 
  ]
    
  var keys = {
    menus
  };

    
  Object.keys(keys).forEach(key=>{
    window[key] = keys[key]
  })

};
