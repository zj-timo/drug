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

  var monthList  = [{
      id:'01',
      name: '一月'
    },
    {
      id:'02',
      name: '二月'
    },
    {
      id:'03',
      name: '三月'
    },
    {
      id:'04',
      name: '四月'
    },
    {
      id:'05',
      name: '五月'
    },
    {
      id:'06',
      name: '六月'
    },
    {
      id:'07',
      name: '七月'
    },
    {
      id:'08',
      name: '八月'
    },
    {
      id:'09',
      name: '九月'
    },
    {
      id:'10',
      name: '十月'
    },
    {
      id:'11',
      name: '十一月'
    },
    {
      id:'12',
      name: '十二月'
    }
  ];

  var twoYears = [{
      name: onYear+1
    },
    {
      name: onYear
    }
  ];

  var states = [{
      id:'1',
      name: '启用'
    },
    {
      id:'2',
      name: '禁用'
    }
  ];

  var inspectStates = [{
      id:'1',
      name: '已整改'
    },
    {
      id:'2',
      name: '未整改'
    }
  ];

  var reformStates = [{
      id:'1',
      name: '待处理'
    },
    {
      id:'2',
      name: '已处理'
    }
  ];

  var reformResult = [{
      id:'1',
      name: '已通过'
    },
    {
      id:'2',
      name: '未通过'
    }
  ];

  var reformItem = [{
      id:'1',
      name: '已处置'
    },
    {
      id:'2',
      name: '未处置'
    }
  ];

  var reformInspect = [{
      id:'1',
      name: '待检查'
    },
    {
      id:'2',
      name: '已检查'
    }
  ];  

  var planStates = [{
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

  var inspectTypes = [{
      id:'1',
      name: '待检查'
    },
    {
      id:'2',
      name: '已检查'
    }
  ];

  var quarterLists  = [{
      id:'1',
      name: '第一季度'
    },
    {
      id:'2',
      name: '第二季度'
    },
    {
      id:'3',
      name: '第三季度'
    },
    {
      id:'4',
      name: '第四季度'
    }
  ];

  var disposalLevelLists  = [{
      id:'1',
      name: '一般问题'
    },
    {
      id:'2',
      name: '较重问题'
    },
    {
      id:'3',
      name: '严重问题'
    }
  ];

  var disposalMeasures = [{
      id:'1',
      name: '责令整改'
    },
    {
      id:'2',
      name: '移交执法'
    }
  ];

  var evaluateTypes = [{
      id:'1',
      name: '高风险'
    },
    {
      id:'2',
      name: '中风险'
    },
    {
      id:'3',
      name: '低风险'
    }
  ];

  var keys = {
    yesNo,
    fiveYears,
    twoYears,
    states,
    inspectStates,
    reformStates,
    reformResult,
    reformItem,
    reformInspect,
    planStates,
    inspectTypes,
    quarterLists,
    monthList,
    disposalLevelLists,
    disposalMeasures,
    evaluateTypes
  };

  
  Object.keys(keys).forEach(key=>{
    window[key] = keys[key]
  })
};