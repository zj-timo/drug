
<template>
  <div class="main-content task-manage">
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">信用评级登记</span>
    </div>
    <form role="form" class="form-box-center">
      <div class="plr-11">
        <div class="edit-wrap">
          <div class="form-body">
            <br>
            <h2>专业商品交易市场信用级别认定表</h2><br>
            <div class="control-group">
              <div class="col">
                <p class="print-p">市场名称:{{params.name}}</p>
              </div>
              <div class="col w-70"></div>
              <div class="col">
                <p class="print-p">统一社会信用代码:{{params.creditCode}}</p>
              </div>
            </div>
            <div class="control-group">
              <p class="print-p">
                市场类型:
                <label class="checkLabel" v-for="item in marketTypes">
                  <span>
                    <input type="radio" name="marketType" class="checkbox" :value="item.id" v-model="params.marketType">
                  </span>
                  <span>{{item.name}}</span>
                </label>
              </p>
            </div>
            <div>
              <p class="print-p">场内经营户数:
                <input type="text" class="input num-inp" v-model="params.fieldAccounts">
                户，其中领取营业执照
                <input type="text" class="input num-inp" v-model="params.businessLicense">
                户
              </p>
            </div>
            <br>
            <table>
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
                    <label class="checkLabel" v-for="item in managementUnitNatures">
                      <span>
                        <input name="managementUnitNature" type="radio" class="checkbox" :value="item.id" v-model="params.managementUnitNature">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                </td>
              </tr>
              <tr class="txt-l">
                <td>
                  市场经营管理单位情况:
                  <p>
                    <label class="checkLabel" v-for="item in managementUnitStates">
                      <span>
                        <input name="managementUnitState" type="radio" class="checkbox" :value="item.id" v-model="params.managementUnitState">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                </td>
              </tr>
              <tr class="txt-l">
                <td>
                  <p>
                    市场经营管理单位组织机构建设:
                    <label class="checkLabel" v-for="item in managementUnitGroups">
                      <span>
                        <input name="managementUnitGroup" type="radio" class="checkbox" :value="item.id" v-model="params.managementUnitGroup">
                      </span>
                      <span>{{item.name}}</span>
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
                    <label class="checkLabel" v-for="item in workSystems">
                      <span>
                        <input name="workSystem" type="radio" class="checkbox" :value="item.id" v-model="params.workSystem">
                      </span>
                      <span>{{item.name}}</span>
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
                    <input type="text" class="input num-inp" v-model="params.operationContracts">
                    户签订进场经营合同
                  </p>
                  <p>
                    双方权利义务责任:
                    <label class="checkLabel" v-for="item in responsibilitys">
                      <span>
                        <input name="responsibility" type="radio" class="checkbox" :value="item.id" v-model="params.responsibility">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                  <p>
                    条款包含下列内容:
                    <label class="checkLabel" v-for="item in clauseContainss">
                      <span>
                        <input name="clauseContains" type="radio" class="checkbox" :value="item.id" v-model="params.clauseContains">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                </td>
              </tr>
              <tr>
                <td>四</td>
                <td>照亮经营情况</td>
                <td class="txt-l">
                  <p>场内经营者未照亮经营率
                    <input type="text" class="input num-inp" v-model="params.unilluminatedOperationRate">
                    %
                  </p>
                </td>
              </tr>
              <tr>
                <td>五</td>
                <td>经营者档案管理</td>
                <td class="txt-l">
                  <p>经营者档案:
                    <label class="checkLabel" v-for="item in operatorFiless">
                      <span>
                        <input name="operatorFiles" type="radio" class="checkbox" :value="item.id" v-model="params.operatorFiles">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                  <p>经营者档案和实际情况:
                    <label class="checkLabel" v-for="item in operatorFilesTruths">
                      <span>
                        <input name="operatorFilesTruth" type="radio" class="checkbox" :value="item.id" v-model="params.operatorFilesTruth">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                </td>
              </tr>
              <tr>
                <td rowspan="2">六</td>
                <td rowspan="2">商品质量管理</td>
                <td class="txt-l">
                  <p>违禁品检查和清退记录:
                    <label class="checkLabel" v-for="item in isHas">
                      <span>
                        <input name="repayingRecords" type="radio" class="checkbox" :value="item.id" v-model="params.repayingRecords">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                  <p>监管部门现场认定和日常巡查发现质量不合格的商品情况:
                    <label class="checkLabel" v-for="item in disqualificationTypes">
                      <span>
                        <input name="disqualificationType" type="radio" class="checkbox" :value="item.id" v-model="params.disqualificationType">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                </td>
              </tr>
              <tr>
                <td class="txt-l">
                  <p>经营管理单位商品外观质量检查记录:
                    <label class="checkLabel" v-for="item in isHas">
                      <span>
                        <input name="checkRecord" type="radio" class="checkbox" :value="item.id" v-model="params.checkRecord">
                      </span>
                      <span>{{item.name}}</span>
                    </label> 
                  </p>
                  <p>监管部门现场认定和日常巡查发现质量不合格的商品情况:
                    <label class="checkLabel" v-for="item in disqualificationStates">
                      <span>
                        <input name="disqualificationState" type="radio" class="checkbox" :value="item.id" v-model="params.disqualificationState">
                      </span>
                      <span>{{item.name}}</span>
                    </label> 
                  </p>
                  <p>被监管部门查处假冒侵权等案件：
                    <input type="text" class="input num-inp" v-model="params.investigateInfringement">
                    件
                  </p>
                </td>
              </tr>
              <tr>
                <td>七</td>
                <td rowspan="2">落实进货查验<br>索证索票制度</td>
                <td class="txt-l">
                  <p>
                    现场抽取（不少于10户，不多于30户）经营户
                    <input type="text" class="input num-inp" v-model="params.extractionOperators">
                    户，发现票证不齐全的
                    <input type="text" class="input num-inp" v-model="params.findTicket">
                    户
                  </p>
                </td>
              </tr>
              <tr>
                <td>八</td>
                <td class="txt-l">
                  <p>
                    现场抽取（不少于10户，不多于30户）经营户
                    <input type="text" class="input num-inp" v-model="params.extractionOperators">
                    户，发现台账不能真实完整的
                    <input type="text" class="input num-inp" v-model="params.findAccount">
                    户
                  </p>
                </td>
              </tr>
              <tr>
                <td>九</td>
                <td>计量器具管理</td>
                <td class="txt-l">
                  <p>
                    现场抽取（不少于10户，不多于30户）经营户
                    <input type="text" class="input num-inp" v-model="params.extractingOperators">
                    户，发现计量器具未检定的
                    <input type="text" class="input num-inp" v-model="params.instrumentsVerification">
                    户
                  </p>
                  <p>
                    查实计量不准确、不公正投诉
                    <input type="text" class="input num-inp" v-model="params.inaccurateMeasurement">
                    宗，占总投诉
                    <input type="text" class="input num-inp" v-model="params.complaintsPercentage">
                    %
                  </p>
                </td>
              </tr>
              <tr>
                <td>十</td>
                <td>特种设备管理</td>
                <td class="txt-l">
                  <p>
                    现场检查发现特种设备未明示检定标志
                    <input type="text" class="input num-inp" v-model="params.indicationSign">
                    台，占特种设备总量
                    <input type="text" class="input num-inp" v-model="params.percentageTotalAmount">
                    %
                  </p>
                </td>
              </tr>
              <tr>
                <td>十一</td>
                <td>主动管理情况</td>
                <td class="txt-l">
                  <p>
                    制止场内经营者的违法经营行为记录:
                    <label class="checkLabel" v-for="item in isHas">
                      <span>
                        <input name="illegalOperation" type="radio" class="checkbox" :value="item.id" v-model="params.illegalOperation">
                      </span>
                      <span>{{item.name}}</span>
                    </label>  
                  </p>
                  <p>
                    一年内制止场内经营者的违法经营行为
                    <input type="text" class="input num-inp" v-model="params.yearIllegalOperation">
                    宗
                  </p>
                  <p>
                    一年内市场及场内经营者被监管部门立案查处的案件
                    <input type="text" class="input num-inp" v-model="params.yearFilingCase">
                    宗
                  </p>
                </td>
              </tr>
              <tr>
                <td width="8%">十二</td>
                <td width="18%">落实商品<br>退市制度</td>
                <td class="txt-l" width="74%">
                  <p>
                    市场推出管理制度:
                    <label class="checkLabel" v-for="item in isEstablish">
                      <span>
                        <input name="exitManagementSystem" type="radio" class="checkbox" :value="item.id" v-model="params.exitManagementSystem">
                      </span>
                      <span>{{item.name}}</span>
                    </label>  
                  </p>
                  <p>
                    清退不合格商品
                    <input type="text" class="input num-inp" v-model="params.repayingCommodities">
                    种，其中食品
                    <input type="text" class="input num-inp" v-model="params.quantityFood">
                    公斤
                  </p>
                  <p>
                    清退记录:
                    <label class="checkLabel" v-for="item in isHas">
                      <span>
                        <input name="repayingRecord" type="radio" class="checkbox" :value="item.id" v-model="params.repayingRecord">
                      </span>
                      <span>{{item.name}}</span>
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
                    <label class="checkLabel" v-for="item in isEstablish">
                      <span>
                        <input name="registrationFiles" type="radio" class="checkbox" :value="item.id" v-model="params.registrationFiles">
                      </span>
                      <span>{{item.name}}</span>
                    </label> 
                  </p>
                  <p>
                    近一年内查处的商标案件
                    <input type="text" class="input num-inp" v-model="params.yearTrademarkCase">
                    宗，其中
                    <input type="text" class="input num-inp" v-model="params.managementUnitReport">
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
                    <label class="checkLabel" v-for="item in publicity">
                      <span>
                        <input name="publicityProject" type="radio" class="checkbox" :value="item.id" v-model="params.publicityProject">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                  <p>
                    信息更新频率:
                    <label class="checkLabel" v-for="item in frequency">
                      <span>
                        <input name="updateFrequency" type="radio" class="checkbox" :value="item.id" v-model="params.updateFrequency">
                      </span>
                      <span>{{item.name}}</span>
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
                    <label class="checkLabel" v-for="item in isEstablish">
                      <span>
                        <input name="protectionSystem" type="radio" class="checkbox" :value="item.id" v-model="params.protectionSystem">
                      </span>
                      <span>{{item.name}}</span>
                    </label>     
                  </p>
                  <p>
                    进场合同中约定消费者侵权损害赔偿办法:
                    <label class="checkLabel" v-for="item in isHas">
                      <span>
                        <input name="compensationMethod" type="radio" class="checkbox" :value="item.id" v-model="params.compensationMethod">
                      </span>
                      <span>{{item.name}}</span>
                    </label>    
                  </p>
                  <p>
                    投诉邮箱:
                    <label class="checkLabel" v-for="item in isEstablishment">
                      <span>
                        <input name="complaintMailBox" type="radio" class="checkbox" :value="item.id" v-model="params.complaintMailBox">
                      </span>
                      <span>{{item.name}}</span>
                    </label>   
                  </p>
                  <p>
                    投诉电话:
                    <label class="checkLabel" v-for="item in isEstablishment">
                      <span>
                        <input name="complaintCall" type="radio" class="checkbox" :value="item.id" v-model="params.complaintCall">
                      </span>
                      <span>{{item.name}}</span>
                    </label>     
                  </p>
                  <p>
                    投诉者满意度查询:
                    <label class="checkLabel" v-for="item in isHas">
                      <span>
                        <input name="satisfactionRecord" type="radio" class="checkbox" :value="item.id" v-model="params.satisfactionRecord">
                      </span>
                      <span>{{item.name}}</span>
                    </label>  
                  </p>
                  <p>
                    一年内投诉
                    <input type="text" class="input num-inp" v-model="params.yearComplaint">
                    宗，解决
                    <input type="text" class="input num-inp" v-model="params.solveComplaint">
                    宗
                  </p>
                </td>
              </tr>
              <tr>
                <td>十六</td>
                <td>信用建设</td>
                <td class="txt-l">
                  <p>
                    市场信用建设工作开展:
                     <label class="checkLabel" v-for="item in develop">
                      <span>
                        <input name="creditWork" type="radio" class="checkbox" :value="item.id" v-model="params.creditWork">
                      </span>
                      <span>{{item.name}}</span>
                    </label>  
                  </p>
                  <p>
                    营造信用文化氛围:
                    <label class="checkLabel" v-for="item in isHas">
                      <span>
                        <input name="culturalAtmosphere" type="radio" class="checkbox" :value="item.id" v-model="params.culturalAtmosphere">
                      </span>
                      <span>{{item.name}}</span>
                    </label>    
                  </p>
                  <p>
                    对场内经营者开展信用工作评比:
                     <label class="checkLabel" v-for="item in isPart">
                      <span>
                        <input name="evaluationWork" type="radio" class="checkbox" :value="item.id" v-model="params.evaluationWork">
                      </span>
                      <span>{{item.name}}</span>
                    </label>    
                  </p>
                  <p>（评比工作资料:
                    <label class="checkLabel" v-for="item in isHas">
                      <span>
                        <input name="evaluationWorkFile" type="radio" class="checkbox" :value="item.id" v-model="params.evaluationWorkFile">
                      </span>
                      <span>{{item.name}}</span>
                    </label> 
                    ）
                  </p>
                </td>
              </tr>
              <tr>
                <td>十七</td>
                <td>安全管理</td>
                <td class="txt-l">
                  <p>
                    应对紧急突发事件的预案:
                    <label class="checkLabel" v-for="item in isEstablish">
                      <span>
                        <input name="preparedness" type="radio" class="checkbox" :value="item.id" v-model="params.preparedness">
                      </span>
                      <span>{{item.name}}</span>
                    </label> 
                  </p>
                  <p>
                    应急管理人员:
                    <input type="text" class="input num-inp" v-model="params.emergencyManagement">
                    人
                  </p>
                </td>
              </tr>
            </table>
          </div>     
        </div>
        <div class="grade-wrap control-group">
          <div class="col">
            <p class="info-p">
              <span>请选择评定等级: </span>
              <select class="input input-select num-sel" v-model="params.creditRating" :class="{'input-select-on': params.creditRating!='' && params.creditRating!=null}">
                <option value="">请选择</option>
                <option v-for="item in creditRatings" :value="item.id">{{item.name}}</option>
              </select>
            </p>
          </div>
        </div>
        <div class="row mb-15 mt-15">
          <div>
            <div class="table-header row-auto">
              <div class="table-name">现场抽查详情</div>
              <div class="col-auto">
                <input class="btn btn-gray mr-10" type="button" @click="goCompanyNew" value="新增">
              </div>
            </div>
          <!-- table -->
            <div class="table-striped">
              <table>
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>字号名称</th>
                    <th>统一社会信用代码</th>
                    <th>住所</th>
                    <th>经营者姓名或负责人</th>
                    <th>主营商品</th>
                    <th>联系电话</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in list" v-if="list && list.length!=0">
                    <td>{{$index + 1}}</td>
                    <td>{{item.name}}</td>
                    <td style="font-size: 14px;font-family: monospace;">{{item.creditCode}}</td>
                    <td>{{item.address}}</td>
                    <td>{{item.personCharge}}</td>
                    <td>{{item.mainCommodity}}</td>
                    <td>{{item.contactNumber}}</td>
                    <td>
                      <span>
                        <a href="javascript:;" @click="goCompanyInfo(item)">查看</a>
                      </span>
                      <span>|</span>
                      <span>
                        <a href="javascript:;"  @click="goCompanyEdit(item)">编辑</a>
                      </span>
                      <span>|</span>
                      <span>
                        <a href="javascript:;" @click="goPrint(item)">打印</a>
                      </span>
                      <span>|</span>
                      <span>
                        <a href="javascript:;" @click="listDel(item)">删除</a>
                      </span>
                    </td>
                  </tr>

                  <tr v-if="list.length == 0">
                    <td colspan="8" class="txt-c"><a href="javascript:;">~没有任何查询结果~</a></td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </div>
        <div class="row mb-50 mt-30">
            <div class="col txt-c">
            <button type="button" class="btn btn-save mr-25" @click="save()">保存</button>
              <button type="button" v-link="{name: 'task-manage-index'}" class="btn btn-back">返回</button>
            </div>
        </div>
    </form>
    <dialog :show="delShow" title="警告" :cb-close="closeDelDialog">
      <div slot="dialogContent">
        <i class="icon warn-icon">&#xe63a;</i>
        <span>您确定要删除这条信息吗？</span>
      </div>
      <div slot="dialogBtn">
        <input type="button" class="btn btn-primary mr-25" value="确定" @click="closeDelDialog('yes')">
        <input type="button" class="btn btn-primary" value="取消" @click="closeDelDialog('cancel')">
      </div>
    </dialog>
  </div>
</template>


<script type="text/javascript">

  import model from './model.js'
  import print from './companyPrint.vue'
  export default {
    
    data() {
      this.model=model(this.$http);
      return {
        yesNo:yesNo,
        isHas:isHas,
        isPart:isPart,
        develop:develop,
        publicity:publicity,
        disqualificationTypes:disqualificationTypes,
        disqualificationStates:disqualificationStates,
        operatorFiless:operatorFiless,
        operatorFilesTruths:operatorFilesTruths,
        frequency:frequency,
        isEstablishment:isEstablishment,
        isEstablish:isEstablish,
        clauseContainss:clauseContainss,
        responsibilitys:responsibilitys,
        managementUnitGroups:managementUnitGroups,
        managementUnitNatures:managementUnitNatures,
        managementUnitStates:managementUnitStates,
        marketTypes:marketTypes,
        workSystems:workSystems,
        industryAreas:[],
        supervisionModes:[],
        creditRatings:creditRatings,
        params: {
           marketType:'',
           fieldAccounts:'',
           businessLicense:'',
           managementUnitNature:'',
           managementUnitState:'1',
           managementUnitGroup:'1',
           workSystem:'1',
           clauseContains:'',
           responsibility:'1',
           operationContracts:'',
           unilluminatedOperationRate:'',
           operatorFiles:'1',
           operatorFilesTruth:'1',
           repayingRecords:'1',
           disqualificationType:'1',
           checkRecord:'1',
           disqualificationState:'1',
           investigateInfringement:'',
           extractionOperators:'',
           findTicket:'',
           findAccount:'',
           extractingOperators:'',
           instrumentsVerification:'',
           inaccurateMeasurement:'',
           complaintsPercentage:'',
           indicationSign:'',
           percentageTotalAmount:'',
           yearIllegalOperation:'',
           illegalOperation:'1',
           yearFilingCase:'',
           exitManagementSystem:'1',
           repayingRecord:'1',
           repayingCommodities:'',
           quantityFood:'',
           yearTrademarkCase:'',
           managementUnitReport:'',
           registrationFiles:'1',
           publicityProject:'1',
           updateFrequency:'1',
           protectionSystem:'1',
           compensationMethod:'1',
           complaintMailBox:'1',
           complaintCall:'1',
           satisfactionRecord:'1',
           yearComplaint:'',
           solveComplaint:'',
           creditWork:'1',
           culturalAtmosphere:'1',
           evaluationWork:'1',
           evaluationWorkFile:'1',
           preparedness:'1',
           emergencyManagement:'',
           creditRating:''
        },
        mustProjects:[],
        businessProjects:[],
        examinationResultss:[],
        list:[],
        delShow:false,
        ratingPk:''
      }
    },

    route: {
      data: function(transition){
        var userInfo=this.$local_store.get("userInfo");

        if(transition.to.params.state != "1"){
          this.$promiseAll([
            this.model.depNode({pk: 130}),
            this.model.dataList({typeId: "supervisionMode"}),
            this.model.ratingInfo({pk: transition.to.params.pk}),
            this.model.companyList({pk:transition.to.params.pk})]).then(res => {
            //所属区域
            this.industryAreas=res[0].data.result;
            //监管方式
            this.supervisionModes = res[1].data.result;
            //详情
            this.params = res[2].data.result;  
            //现场抽查详情
            this.list = res[3].data.result;            
          }).then(() => {
            if(transition.from.name != "task-manage-index"){
              //详情
              this.params = this.$local_store.get('editParams');
            }
          });

          
        }else{
            this.model.depNode({pk: 130}).then(res => {
              //所属区域
              this.industryAreas=res.data.result;
            })
            this.model.dataList({typeId: "supervisionMode"}).then(res => {
              //监管方式
              this.supervisionModes = res.data.result;  
            });

            if(transition.from.name != "task-manage-index"){
              //详情
              this.params = this.$local_store.get('editParams');
            }
        }
        
        
        
      
        this.ratingPk = transition.to.params.pk;
        this.ratingState = transition.to.params.state;
      }
    },
  
    methods:{
      save(){
        var userInfo=this.$local_store.get("userInfo");
        if(this.params.pk != ''&& this.params.pk != null){

          var params = this.$parse(this.params);
          delete params.entourage;
          this.params = this.$parse(params);

          this.params.updatedBy = userInfo.account;
          this.model.ratingUpdate(this.params).then(res => {
            Message.show('success', '保存成功', 2, () => {
              this.$router.go({name: 'task-manage-index'})
            }) 
          });
        }
      },

      listDel(item){
        this.delItem = item;
        this.delShow = true;
      },


       // 关闭删除弹框
      closeDelDialog(type) {
        switch(type){
            case 'yes':
                var arr=[];
                arr.push(this.delItem.pk);

                this.model.companyDelete(JSON.stringify(arr)).then(res => {
                  Message.show('success', '删除成功', 2, () => {
                    this.model.companyList({pk:this.params.pk}).then((res)=>{
                      this.list = res.data.result;
                    })
                  }) 
                });
              break;
            case 'cancel':
              break;
        }

        this.delShow=false;
      },

      goCompanyNew(){
        this.$local_store.set('editParams', this.params);
        this.$local_store.set('backHtml', {name:'rating-registration-edit',ratingPk:this.ratingPk,ratingState:this.ratingState});
        this.$router.go({name: 'company-new'});
      },
      goCompanyEdit(item){
        this.$local_store.set('editParams', this.params);  
        this.$local_store.set('backHtml', {name:'rating-registration-edit',ratingPk:this.ratingPk,ratingState:this.ratingState});
        this.$router.go({name: 'company-edit',params:{pk:item.pk}});
      },
      goCompanyInfo(item){
        this.$local_store.set('editParams', this.params);  
        this.$local_store.set('backHtml', {name:'rating-registration-edit',ratingPk:this.ratingPk,ratingState:this.ratingState});
        this.$router.go({name: 'company-info',params:{pk:item.pk}});
      },
      goPrint(item){
        this.$local_store.set('editParams', this.params);  
        this.$local_store.set('backHtml', {name:'rating-registration-edit',ratingPk:this.ratingPk,ratingState:this.ratingState});
        this.$router.go({name: 'company-print',params:{pk:item.pk}});
      }
    },

    watch: {

    },
    components:{
      "print":print
    },
    ready() {
      
    }
  }

</script>
