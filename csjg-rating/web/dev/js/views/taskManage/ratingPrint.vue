<template>
  <div class="print-wrap">
    <div>
      <div class="form-body">
        <br>
        <h2>专业商品交易市场信用级别认定表</h2><br>
        <div class="control-group">
          <div class="col">
            <p class="print-p">市场名称:{{params.name}}</p>
          </div>
          <div class="col w-50"></div>
          <div class="col">
            <p class="print-p">统一社会信用代码:{{params.creditCode}}</p>
          </div>
        </div>
        <div class="control-group">
          <p class="print-p">
            市场类型:
            <label class="checkLabel">
              <span v-if='params.marketType!=1'>
                <input type="checkbox" class="checkbox" disabled="">
              </span>
              <span v-if='params.marketType==1'>
                <input type="checkbox" class="checkbox" checked disabled="">
              </span>
              <span>工业消费品市场</span>
            </label>
            <label class="checkLabel">
              <span v-if='params.marketType!=2'>
                <input type="checkbox" class="checkbox" disabled="">
              </span>
              <span v-if='params.marketType==2'>
                <input type="checkbox" class="checkbox" checked disabled="">
              </span>
              <span>工业生产资料市场</span>
            </label>    
            <label class="checkLabel">
              <span v-if='params.marketType!=3'>
                <input type="checkbox" class="checkbox" disabled="">
              </span>
              <span v-if='params.marketType==3'>
                <input type="checkbox" class="checkbox" checked disabled="">
              </span>
              <span>其他消费品市场</span>
            </label>
            <label class="checkLabel">
              <span v-if='params.marketType!=4'>
                <input type="checkbox" class="checkbox" disabled="">
              </span>
              <span v-if='params.marketType==4'>
                <input type="checkbox" class="checkbox" checked disabled="">
              </span>
              <span>其他生产资料市场</span>
            </label>
          </p>
        </div>
        <div>
          <p class="print-p">场内经营户数:
            <span class="print-num">{{params.fieldAccounts}}</span>
            户，其中领取营业执照
            <span class="print-num">{{params.businessLicense}}</span>
            户
          </p>
        </div>
        <br>
        <table class="mb-50">
          <tr>
            <td width="8%">编号</td>
            <td width="16%">项目</td>
            <td width="76%">认定内容</td>
          </tr>
          <tr>
            <td rowspan="3">一</td>
            <td rowspan="3">市场管理<br>机构概况</td>
            <td class="txt-l">
              <p>
                市场经营管理单位性质:
                <label class="checkLabel">
                  <span v-if='params.managementUnitNature!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.managementUnitNature==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>企业法人</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.managementUnitNature!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.managementUnitNature==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>非企业法人</span>
                </label>
              </p>
            </td>
          </tr>
          <tr class="txt-l">
            <td>
              市场经营管理单位情况:
              <p>
                <label class="checkLabel">
                  <span v-if='params.managementUnitState!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.managementUnitState==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>正常</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.managementUnitState!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.managementUnitState==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>列入异常经营目录</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.managementUnitState!=3'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.managementUnitState==3'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>列入黑名单</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.managementUnitState!=4'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.managementUnitState==4'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>法定代表人权利受限</span>
                </label>
              </p>
            </td>
          </tr>
          <tr class="txt-l">
            <td>
              <p>
                市场经营管理单位组织机构建设:
                <label class="checkLabel">
                  <span v-if='params.managementUnitGroup!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.managementUnitGroup==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>健全</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.managementUnitGroup!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.managementUnitGroup==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>较健全</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.managementUnitGroup!=3'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.managementUnitGroup==3'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>不健全</span>
                </label>
              </p>
            </td>
          </tr>
          <tr>
            <td>二</td>
            <td>市场管理<br>制度建设</td>
            <td class="txt-l">
              <p>
                管理制度和工作制度:
                <label class="checkLabel">
                  <span v-if='params.workSystem!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.workSystem==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>详尽</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.workSystem!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.workSystem==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>部分</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.workSystem!=3'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.workSystem==3'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>未制定</span>
                </label>
              </p>
              <p>1、检查验收制度；2、台账登记制度；3、市场公示制度；4、先行赔偿制度；<br>5、质量承诺制度；6、合同管理制度；7、不合格商品退市制度；8、信用管理制度；<br>9、应急工作制度；10、市场预警制度；11、市场巡查制度；12、学习培训制度；<br>13、市场档案制度；14、品牌（重要）商品登记管理制度。</p>
            </td>
          </tr>
          <tr>
            <td>三</td>
            <td>与场内经营者<br>权利义务设定</td>
            <td class="txt-l">
              <p>市场开办单位与场内经营者
                <span class="print-num">{{params.operationContracts}}</span>
                户签订进场经营合同
              </p>
              <p>
                双方权利义务责任:
                <label class="checkLabel">
                  <span v-if='params.responsibility!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.responsibility==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>明确</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.responsibility!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.responsibility==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>不明确</span>
                </label>
              </p>
              <p>
                条款包含下列内容:
                <label class="checkLabel">
                  <span v-if='params.clauseContains!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.clauseContains==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>商品安全质量保障</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.clauseContains!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.clauseContains==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>知名品牌商品保护</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.clauseContains!=3'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.clauseContains==3'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>消费者权益保护</span>
                </label>
              </p>
            </td>
          </tr>
          <tr>
            <td>四</td>
            <td>照亮经营情况</td>
            <td class="txt-l">
              <p>场内经营者未照亮经营率
                <span class="print-num">{{params.unilluminatedOperationRate}}</span>%
              </p>
            </td>
          </tr>
          <tr>
            <td>五</td>
            <td>经营者档案管理</td>
            <td class="txt-l">
              <p>经营者档案:
                <label class="checkLabel">
                  <span v-if='params.operatorFiles!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.operatorFiles==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>完整</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.operatorFiles!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.operatorFiles==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>基本完整</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.operatorFiles!=3'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.operatorFiles==3'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>不完整</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.operatorFiles!=4'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.operatorFiles==4'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>未建立</span>
                </label>
              </p>
              <p>经营者档案和实际情况:
                <label class="checkLabel">
                  <span v-if='params.operatorFilesTruth!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.operatorFilesTruth==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>一致</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.operatorFilesTruth!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.operatorFilesTruth==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>基本一致</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.operatorFilesTruth!=3'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.operatorFilesTruth==3'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>一定差异</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.operatorFilesTruth!=4'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.operatorFilesTruth==4'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>较大差异</span>
                </label>
              </p>
            </td>
          </tr>
          <tr>
            <td rowspan="2">六</td>
            <td rowspan="2">商品质量管理</td>
            <td class="txt-l">
              <p>违禁品检查和清退记录:
                <label class="checkLabel">
                  <span v-if='params.repayingRecords!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.repayingRecords==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>有</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.repayingRecords!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.repayingRecords==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>无</span>
                </label>    
              </p>
              <p>监管部门现场认定和日常巡查发现质量不合格的商品情况:
                <label class="checkLabel">
                  <span v-if='params.disqualificationType!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.disqualificationType==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>未发现</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.disqualificationType!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.disqualificationType==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>少量</span>
                </label>    
                <label class="checkLabel">
                  <span v-if='params.disqualificationType!=3'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.disqualificationType==3'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>大量</span>
                </label>
              </p>
            </td>
          </tr>
          <tr>
            <td class="txt-l">
              <p>经营管理单位商品外观质量检查记录:
                <label class="checkLabel">
                  <span v-if='params.checkRecord!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.checkRecord==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>有</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.checkRecord!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.checkRecord==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>无</span>
                </label>    
              </p>
              <p>监管部门现场认定和日常巡查发现质量不合格的商品情况:
                <label class="checkLabel">
                  <span v-if='params.disqualificationState!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.disqualificationState==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>未发现</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.disqualificationState!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.disqualificationState==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>发现</span>
                </label>    
              </p>
              <p>被监管部门查处假冒侵权等案件：
                <span class="print-num">{{params.investigateInfringement}}</span>件
              </p>
            </td>
          </tr>
          <tr>
            <td>七</td>
            <td rowspan="2">落实进货查验<br>索证索票制度</td>
            <td class="txt-l">
              <p>
                现场抽取（不少于10户，不多于30户）经营户
                <span class="print-num">{{params.extractionOperators}}</span>
                户，发现票证不齐全的
                <span class="print-num">{{params.findTicket}}</span>户
              </p>
            </td>
          </tr>
          <tr>
            <td>八</td>
            <td class="txt-l">
              <p>
                现场抽取（不少于10户，不多于30户）经营户
                <span class="print-num">{{params.extractionOperators}}</span>
                户，发现台账不能真实完整的<span class="print-num">{{params.findAccount}}</span>户
              </p>
            </td>
          </tr>
          <tr>
            <td>九</td>
            <td>计量器具管理</td>
            <td class="txt-l">
              <p>
                现场抽取（不少于10户，不多于30户）经营户
                <span class="print-num">{{params.extractingOperators}}</span>
                户，发现计量器具未检定的
                <span class="print-num">{{params.instrumentsVerification}}</span>户
              </p>
              <p>
                查实计量不准确、不公正投诉
                <span class="print-num">{{params.inaccurateMeasurement}}</span>
                宗，占总投诉
                <span class="print-num">{{params.complaintsPercentage}}</span>%
              </p>
            </td>
          </tr>
          <tr>
            <td>十</td>
            <td>特种设备管理</td>
            <td class="txt-l">
              <p>
                现场检查发现特种设备未明示检定标志
                <span class="print-num">{{params.indicationSign}}</span>
                台，占特种设备总量
                <span class="print-num">{{params.percentageTotalAmount}}</span>%
              </p>
            </td>
          </tr>
          <tr>
            <td>十一</td>
            <td>主动管理情况</td>
            <td class="txt-l">
              <p>
                制止场内经营者的违法经营行为记录:
                <label class="checkLabel">
                  <span v-if='params.illegalOperation!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.illegalOperation==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>有</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.illegalOperation!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.illegalOperation==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>无</span>
                </label>    
              </p>
              <p>
                一年内制止场内经营者的违法经营行为
                <span class="print-num">{{params.yearIllegalOperation}}</span>宗
              </p>
              <p>
                一年内市场及场内经营者被监管部门立案查处的案件
                <span class="print-num">{{params.yearFilingCase}}</span>宗
              </p>
            </td>
          </tr>
        </table>


        <table>
          <tr>
            <td width="8%">十二</td>
            <td width="18%">落实商品<br>退市制度</td>
            <td class="txt-l" width="74%">
              <p>
                市场推出管理制度:
                <label class="checkLabel">
                  <span v-if='params.exitManagementSystem!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.exitManagementSystem==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>建立</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.exitManagementSystem!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.exitManagementSystem==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>未建立</span>
                </label>    
              </p>
              <p>
                清退不合格商品
                <span class="print-num">{{params.repayingCommodities}}</span>
                种，其中食品
                <span class="print-num">{{params.quantityFood}}</span>
                公斤
              </p>
              <p>
                清退记录:
                <label class="checkLabel">
                  <span v-if='params.repayingRecord!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.repayingRecord==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>有</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.repayingRecord!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.repayingRecord==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>无</span>
                </label>    
              </p>
            </td>
          </tr>
          <tr>
            <td>十三</td>
            <td>知识产权保护</td>
            <td class="txt-l">
              <p>
                市场内经销的驰名、著名商标商品登记档案:
                <label class="checkLabel">
                  <span v-if='params.registrationFiles!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.registrationFiles==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>建立</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.registrationFiles!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.registrationFiles==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>未建立</span>
                </label>    
              </p>
              <p>
                近一年内查处的商标案件
                <span class="print-num">{{params.yearTrademarkCase}}</span>
                宗，其中
                <span class="print-num">{{params.managementUnitReport}}</span>
                宗来源于市场经营管理单位的报告
              </p>
            </td>
          </tr>
          <tr>
            <td>十四</td>
            <td>信息公开</td>
            <td class="txt-l">
              <p>
                信息公示项目:
                <label class="checkLabel">
                  <span v-if='params.publicityProject!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.publicityProject==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>齐全</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.publicityProject!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.publicityProject==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>一般</span>
                </label>    
                <label class="checkLabel">
                  <span v-if='params.publicityProject!=3'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.publicityProject==3'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>很少</span>
                </label>
              </p>
              <p>
                信息更新频率:
                <label class="checkLabel">
                  <span v-if='params.updateFrequency!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.updateFrequency==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>及时</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.updateFrequency!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.updateFrequency==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>未及时</span>
                </label>    
              </p>
            </td>
          </tr>
          <tr>
            <td>十五</td>
            <td>消费者权益保护</td>
            <td class="txt-l">
              <p>
                消费者权益保护制度:
                <label class="checkLabel">
                  <span v-if='params.protectionSystem!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.protectionSystem==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>建立</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.protectionSystem!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.protectionSystem==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>未建立</span>
                </label>    
              </p>
              <p>
                进场合同中约定消费者侵权损害赔偿办法:
                <label class="checkLabel">
                  <span v-if='params.compensationMethod!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.compensationMethod==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>是</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.compensationMethod!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.compensationMethod==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>否</span>
                </label>    
              </p>
              <p>
                投诉邮箱:
                <label class="checkLabel">
                  <span v-if='params.complaintMailBox!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.complaintMailBox==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>设立</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.complaintMailBox!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.complaintMailBox==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>未设立</span>
                </label>    
              </p>
              <p>
                投诉电话:
                <label class="checkLabel">
                  <span v-if='params.complaintCall!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.complaintCall==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>设立</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.complaintCall!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.complaintCall==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>未设立</span>
                </label>    
              </p>
              <p>
                投诉者满意度查询:
                <label class="checkLabel">
                  <span v-if='params.satisfactionRecord!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.satisfactionRecord==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>有</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.satisfactionRecord!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.satisfactionRecord==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>无</span>
                </label>    
              </p>
              <p>
                一年内投诉
                <span class="print-num">{{params.yearComplaint}}</span>
                宗，解决
                <span class="print-num">{{params.solveComplaint}}</span>宗
              </p>
            </td>
          </tr>
          <tr>
            <td>十六</td>
            <td>信用建设</td>
            <td class="txt-l">
              <p>
                市场信用建设工作开展:
                <label class="checkLabel">
                  <span v-if='params.creditWork!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.creditWork==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>正常</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.creditWork!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.creditWork==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>阶段性</span>
                </label>    
              </p>
              <p>
                营造信用文化氛围:
                <label class="checkLabel">
                  <span v-if='params.culturalAtmosphere!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.culturalAtmosphere==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>有</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.culturalAtmosphere!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.culturalAtmosphere==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>无</span>
                </label>    
              </p>
              <p>
                对场内经营者开展信用工作评比:
                <label class="checkLabel">
                  <span v-if='params.evaluationWork!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.evaluationWork==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>有</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.evaluationWork!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.evaluationWork==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>部分</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.evaluationWork!=3'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.evaluationWork==3'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>无</span>
                </label>
              </p>
              <p>（评比工作资料:
                <label class="checkLabel">
                  <span v-if='params.evaluationWorkFile!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.evaluationWorkFile==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>有</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.evaluationWorkFile!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.evaluationWorkFile==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>无</span>
                </label>）
              </p>
            </td>
          </tr>
          <tr>
            <td>十七</td>
            <td>安全管理</td>
            <td class="txt-l">
              <p>
                应对紧急突发事件的预案:
                <label class="checkLabel">
                  <span v-if='params.preparedness!=1'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.preparedness==1'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>建立</span>
                </label>
                <label class="checkLabel">
                  <span v-if='params.preparedness!=2'>
                    <input type="checkbox" class="checkbox" disabled="">
                  </span>
                  <span v-if='params.preparedness==2'>
                    <input type="checkbox" class="checkbox" checked disabled="">
                  </span>
                  <span>未建立</span>
                </label>    
              </p>
              <p>
                应急管理人员:
                <span class="print-num">{{params.emergencyManagement}}</span>人
              </p>
            </td>
          </tr>
          <tr>
            <td>十八</td>
            <td>行政处罚征信</td>
            <td class="txt-l">
              <div class="min-h-110">
                <p>{{params.punishmentCredit}}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>十九</td>
            <td>公示反馈情况</td>
            <td class="txt-l">
              <div class="min-h-110">
                <p>{{params.publicFeedback}}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>二十</td>
            <td>初审机构意见</td>
            <td class="txt-l">
              <br>
              <p>
                1、发放
                <span class="print-num">{{params.proposalContent}}</span>
                行政建议书
              </p>
              <br>
              <p>
                2、发放
                <span class="print-num">{{params.rectificationNotice}}</span>
                限期整改通知书
              </p>
              <br>
               <p>
                3、建议认定级别为:
                <span class="print-num">{{params.categoryIdentification}}</span>
                级
              </p>
              <br>
              <p>初审机构（章）:</p>
              <p class="txt-r">年&nbsp;&nbsp;月&nbsp;&nbsp;日&nbsp;&nbsp;</p>
            </td>
          </tr>
          <tr>
            <td>二十一</td>
            <td>审定意见</td>
            <td class="txt-l">
              <br><br><br><br>
              <p>初审部门（章）:</p>
              <p class="txt-r">年&nbsp;&nbsp;月&nbsp;&nbsp;日&nbsp;&nbsp;</p>
            </td>
          </tr>
        </table>
      </div>
    </div>        
  </div>      
</template>


<script type="text/javascript">

  import model from './model.js'

  export default {
    props:{        
      params:{
        type:Object,
        default:function (value) {
            return value = {};
        }
      }
    },  
    data() {
      this.model=model(this.$http);
      return {
        
      }
    },

    // route: {
    //   data: function(transition){

    //     console.log(transition.to.params.pk)
        
 
    //   }
    // },
  
    methods:{
      
    },

    watch: {

    },

    ready() {
      
    }
  }

</script>
