export default function install(Vue) {

  var yesNo=[{
      id:'1',
      name: '是'
    },
    {
      id:'2',
      name: '否'
    }
  ];

  //检查状态
  var planStates=[{
      id:'1',
      name: '已下发'
    },
    {
      id:'2',
      name: '已接收'
    },
    {
      id:'3',
      name: '已退回'
    }
  ];

  // 获取当前时间
  var myDate = new Date();
  var onYear = myDate.getFullYear();
  var fiveYears = [{
      name: onYear+1
    },
    {
      name: onYear
     },
    {
      name: onYear-1
     },
    {
      name: onYear-2
     },
    {
      name: onYear-3
    }
  ];

  var twoYears = [{
      name: onYear+1
    },
    {
      name: onYear
    }
  ];
  //信用管理状态  
  var states=[{
      id:'1',
      name: '待检查'
    },
    {
      id:'2',
      name: '评定完成'
    },
    {
      id:'3',
      name: '定级完成'
    },
    {
      id:'4',
      name: '巡查完成'
    }
  ];  
   
  //对场内经营者开展信用工作评比
  var isPart=[{
      id:'1',
      name: '有'
    },
    {
      id:'2',
      name: '部分'
    },
    {
      id:'3',
      name: '无'
    }
  ];
  //评定等级
  var  creditRatings=[{
    id:'1',
      name: 'AAA'
    },
    {
      id:'2',
      name: 'AA'
    },
    {
      id:'3',
      name: 'A'
    },
    {
      id:'4',
      name: 'B'
    }]
  //有无
  var isHas=[{
      id:'1',
      name: '有'
    },
    {
      id:'2',
      name: '无'
    }
  ];
  //是否建立
  var isEstablish=[{
      id:'1',
      name: '建立'
    },
    {
      id:'2',
      name: '未建立'
    }
  ];
  //是否设立
  var isEstablishment=[{
      id:'1',
      name: '设立'
    },
    {
      id:'2',
      name: '未设立'
    }
  ];
  //市场信用建设工作开展
  var develop=[{
      id:'1',
      name: '正常'
    },
    {
      id:'2',
      name: '阶段性'
    }
  ];
  //信息公示项目
  var publicity=[{
      id:'1',
      name: '齐全'
    },
    {
      id:'2',
      name: '一般'
    },
    {
      id:'3',
      name: '很少'
    }
  ];
  //信息更新频率
  var frequency=[{
      id:'1',
      name: '及时'
    },
    {
      id:'2',
      name: '不及时'
    }
  ];
  //监管部门现场认定和日常巡查发现质量不合格的商品情况分量
  var disqualificationTypes=[{
      id:'1',
      name: '未发现'
    },
    {
      id:'2',
      name: '少量'
    },
    {
      id:'3',
      name: '大量'
    }
  ];

  //监管部门现场认定和日常巡查发现质量不合格的商品情况
  var disqualificationStates=[{
      id:'1',
      name: '未发现'
    },
    {
      id:'2',
      name: '发现'
    }
  ];
  //经营者档案
  var operatorFiless=[{
      id:'1',
      name: '完整'
    },
    {
      id:'2',
      name: '基本完整'
    },
    {
      id:'3',
      name: '不完整'
    },
    {
      id:'4',
      name: '未建立'
    }
  ];
  //经营者档案和实际情况
  var operatorFilesTruths=[{
      id:'1',
      name: '一致'
    },
    {
      id:'2',
      name: '基本一致'
    },
    {
      id:'3',
      name: '一定差异'
    },
    {
      id:'4',
      name: '较大差异'
    }
  ];
  //双发权利义务责任
  var responsibilitys=[{
      id:'1',
      name: '明确'
    },
    {
      id:'2',
      name: '不明确'
    }
  ];
  //条款包含下列内容
  var clauseContainss=[{
      id:'1',
      name: '商品安全质量保障'
    },
    {
      id:'2',
      name: '知名品牌商品保证'
    },
    {
      id:'3',
      name: '消费者权益保护'
    }
  ];
  //市场经营管理单位组织机构建设
  var managementUnitGroups=[{
      id:'1',
      name: '健全'
    },
    {
      id:'2',
      name: '较健全'
    },
    {
      id:'3',
      name: '不健全'
    }
  ];
  //市场经营管理单位性质
  var managementUnitNatures=[{
      id:'1',
      name: '企业法人'
    },
    {
      id:'2',
      name: '非企业法人'
    }
  ];
  //市场经营管理单位情况
  var managementUnitStates=[{
      id:'1',
      name: '正常'
    },
    {
      id:'2',
      name: '列入异常经营项目'
    },
    {
      id:'3',
      name: '列入黑名单'
    },
    {
      id:'4',
      name: '法定代表人权利受限'
    }
  ];
  //市场类别
  var marketTypes=[{
      id:'1',
      name: '工业消费品市场'
    },
    {
      id:'2',
      name: '工业生产资料市场'
    },
    {
      id:'3',
      name: '其他消费品市场'
    },
    {
      id:'4',
      name: '其他生产资料市场'
    }
  ];
  //管理制度和工作制度
  var workSystems=[{
      id:'1',
      name: '详尽'
    },
    {
      id:'2',
      name: '基本'
    },
    {
      id:'3',
      name: '未制定'
    }
  ];
  
  //检查事项类型
  var checkTypes = [{
      id:'1',
      name:'评定完成'
  },
  {
      id:'2',
      name:'定级完成'
   },
  {
      id:'3',
      name:'巡查完成'
  }];

  //必查项目
  var mustProjects = [{
      id:'1',
      name:'是否按照核准的登记事项经营'
  },
  {
      id:'2',
      name:'是否亮照经营'
   },
  {
      id:'3',
      name:'证照是否齐全'
   },
  {
      id:'4',
      name:'是否按期年报'
   },
  {
      id:'5',
      name:'证件法定代表人是否一致'
   },
  {
      id:'6',
      name:'营业执照与许可证名称是否一致'
   },
  {
      id:'7',
      name:'营业执照与许可证地址是否一致'
   },
  {
      id:'8',
      name:'营业执照与许可证经营范围是否一致'
   },
  {
      id:'9',
      name:'营业执照与许可证企业类型是否一致'
   },
  {
      id:'10',
      name:'许可证是否在有效期内'
  },
  {
      id:'11',
      name:'是否索取产品合格证明和检验报告'
  },
  {
      id:'12',
      name:'是否审验供货商的经营资格'
  },
  {
      id:'13',
      name:'是否建立并执行产品进货台账'
  }];

  //相关经营项目检查
  var businessProjects = [{
      id:'1',
      name:'是否虚假、虚报注册资本或股东抽逃出资'
  },
  {
      id:'2',
      name:'是否合法使用商标'
   },
  {
      id:'3',
      name:'是否非法承印商标标识'
   },
  {
      id:'4',
      name:'发布广告是否登记备案'
   },
  {
      id:'5',
      name:'格式合同是否合法'
   },
  {
      id:'6',
      name:'是否销售国家禁止或限制自由买卖的商品'
   },
  {
      id:'7',
      name:'进口商品是否有合法证明'
   },
  {
      id:'8',
      name:'销售危险化学品是否合法'
   },
  {
      id:'9',
      name:'是否销售失效、变质商品'
   },
  {
      id:'10',
      name:'销售产品的标识是否合法'
  },
  {
      id:'11',
      name:'销售产品是否掺杂、惨假、以次充好'
  },
  {
      id:'12',
      name:'是否欺行霸市、哄抬物价、强买强卖'
  },
  {
      id:'13',
      name:'是否使用不合格度量衡器或计量器具弄虚作假、短斤少两'
   },
  {
      id:'14',
      name:'是否销售、出租、淫秽、封建迷信制品'
  }];


  //检查结果
  var examinationResultss = [{
      id:'1',
      name:'是否破产、歇业、解散、清算程序'
  },
  {
      id:'2',
      name:'限期整改行为是否改正'
   },
  {
      id:'3',
      name:'是否发现违法违规行为'
   },
  {
      id:'4',
      name:'许可经营项目是否无证经营'
   },
  {
      id:'5',
      name:'案后回访违法行为是否改正'
   },
  {
      id:'6',
      name:'查无下落'
   }];
 
  var keys = {
    yesNo,
    planStates,
    fiveYears,
    twoYears,
    states,
    isHas,
    isPart,
    isEstablish,
    isEstablishment,
    develop,
    publicity,
    frequency,
    disqualificationTypes,
    disqualificationStates,
    operatorFiless,
    operatorFilesTruths,
    clauseContainss,
    responsibilitys,
    managementUnitGroups,
    managementUnitNatures,
    managementUnitStates,
    marketTypes,
    workSystems,
    checkTypes,
    creditRatings,
    mustProjects,
    businessProjects,
    examinationResultss
  };

  
  Object.keys(keys).forEach(key=>{
    window[key] = keys[key]
  })
};