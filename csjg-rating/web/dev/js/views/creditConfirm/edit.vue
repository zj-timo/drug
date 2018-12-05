
<template>
  <div class="main-content credit-confirm">
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">信用级别认定管理——编辑</span>
    </div>
    <form role="form" class="form-box-center">
      <div class="plr-11">
        <div class="tab-page-tit">
          <div class="tab-border-l pr-10"></div>
          <div class="tab-page">任务详情</div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">任务编号:</span>
              {{params.taskNumber}}
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">检查年度:</span>
              {{params.annualPlan}}
            </p>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">市场主体名称:</span>
              {{params.name}}
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">统一社会信用代码:</span>
              {{params.registerNumber}}
            </p>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">所属区域:</span>
              {{params.industryArea  | filter_map_key industryAreas}}
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">监管方式:</span>
              {{params.supervisionMode | filter_map_key ratingSupervisionModes}}
            </p>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">检查任务接收人:</span>
              {{params.enforcementLeader}}
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">随行组员:</span>
              {{params.entourage}}
            </p>
          </div>
        </div>
        <div class="tab-page-tit">
          <div class="tab-border-l pr-10"></div>
          <div class="tab-page">登记详情</div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">市场主体名称:</span>
              {{params.name}}
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">统一社会信用代码:</span>
              {{params.registerNumber}}
            </p>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">市场类别:</span>
              {{params.marketType | filter_map_key marketTypes}}
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">场内经营户数:</span>
              <span class="num-style">{{params.fieldAccounts}}</span>
              户，其中领取营业执照
              <span class="num-style">{{params.businessLicense}}</span>
              户
            </p>
          </div>
        </div>
        <div class="secend-title control-group">
          <p>一、市场管理机构概况</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">市场经营管理单位性质:</span>
              {{params.managementUnitNature | filter_map_key managementUnitNatures}}
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">市场经营管理单位情况:</span>
              {{params.managementUnitState | filter_map_key managementUnitStates}}
            </p>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">市场经营管理单位组织机构建设:</span>
              {{params.managementUnitGroup | filter_map_key managementUnitGroups}}
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="secend-title control-group">
          <p>二、市场管理制度建设</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">管理制度和工作制度:</span>
              {{params.workSystem| filter_map_key workSystems}}
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="secend-title control-group">
          <p>三、与场内经营者权利义务设定</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">条款包含下列内容:</span>
              {{params.clauseContains| filter_map_key clauseContainss}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">双发权利义务责任:</span>
              {{params.responsibility| filter_map_key responsibilitys}}
            </p>
          </div> 
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              市场开办单位与场内经营者
              <span class="num-style">{{params.operationContracts}}</span>
              户签订进场经营合同
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col"></div> 
        </div>
        <div class="secend-title control-group">
          <p>四、照亮经营情况</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              场内经营者未照亮经营率
              <span class="num-style">{{params.unilluminatedOperationRate}}</span>
              %
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div> 
        </div>
        <div class="secend-title control-group">
          <p>五、经营者档案管理</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">经营者档案:</span>
              {{params.operatorFiles | filter_map_key operatorFiless}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">经营者档案和实际情况:</span>
              {{params.operatorFilesTruth | filter_map_key operatorFilesTruths}}
            </p>
          </div> 
        </div>
        <div class="secend-title control-group">
          <p>六、商品质量管理</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">违禁品检查和清退记录:</span>
              {{params.repayingRecord | filter_map_key isHas}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">监管部门现场认定和日常巡查发现质量不合格的商品情况:</span>
              {{params.disqualificationType | filter_map_key disqualificationTypes}}
            </p>
          </div> 
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">经营管理单位商品外观质量检查记录:</span>
              {{params.checkRecord | filter_map_key isHas}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">监管部门现场认定和日常巡查发现质量不合格的商品情况:</span>
              {{params.disqualificationState | filter_map_key disqualificationStates}}
            </p>
          </div> 
        </div> 
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              被监管部门查处假冒侵权等案件
              <span class="num-style">{{params.investigateInfringement}}</span>件
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col"></div> 
        </div>
        <div class="secend-title control-group">
          <p>七、八、落实进货查验索证索票制度</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              现场抽取（不少于10户，不多于30户）经营户
              <span class="num-style">{{params.extractionOperators}}</span>
              户，发现票证不齐全的
              <span class="num-style">{{params.findTicket}}</span>
              户
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col"></div> 
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              现场抽取（不少于10户，不多于30户）经营户
              <span class="num-style">{{params.extractionOperators}}</span>
              户，发现台账不能真实完整的
              <span class="num-style">{{params.findAccount}}</span>
              户
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col"></div> 
        </div>
        <div class="secend-title control-group">
          <p>九、计量器具管理</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              现场抽取（不少于10户，不多于30户）经营户
              <span class="num-style">{{params.extractingOperators}}</span>
              户，发现计量器具未检定的
              <span class="num-style">{{params.instrumentsVerification}}</span>
              户
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col"></div>   
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              查实计量不准确、不公正投诉
              <span class="num-style">{{params.inaccurateMeasurement}}</span>
              宗，占总投诉
              <span class="num-style">{{params.complaintsPercentage}}</span>%
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col"></div> 
        </div>
        <div class="secend-title control-group">
          <p>十、特种设备管理</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              现场检查发现特种设备未明示检定标志
              <span class="num-style">{{params.indicationSign}}</span>
              台，占特种设备总量
              <span class="num-style">{{params.percentageTotalAmount}}</span>%
            </p>
          </div>  
          <div class="col w-100"></div>
          <div class="col"></div>   
        </div>
        <div class="secend-title control-group">
          <p>十一、主动管理情况</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              一年内制止场内经营者的违法经营行为
              <span class="num-style">{{params.yearIllegalOperation}}</span>宗
            </p>
          </div>  
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">制止场内经营者的违法经营行为记录:</span>
              {{params.illegalOperation | filter_map_key isHas}}
            </p>
          </div>   
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              一年内市场及场内经营者被监管部门立案查处的案件
              <span class="num-style">{{params.yearFilingCase}}</span>宗
            </p>
          </div>  
          <div class="col w-100"></div>
          <div class="col"></div>   
        </div>
        <div class="secend-title control-group">
          <p>十二、落实商品退市制度</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">市场推出管理制度:</span>
              {{params.exitManagementSystem | filter_map_key isEstablish}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">清退记录:</span>
              {{params.repayingRecord | filter_map_key isHas}}
            </p>
          </div> 
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              清退不合格商品
              <span class="num-style">{{params.repayingCommodities}}</span>
              种，其中食品
              <span class="num-style">{{params.quantityFood}}</span>
              公斤
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="secend-title control-group">
          <p>十三、知识产权保护</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              近一年内查处的商标案件
              <span class="num-style">{{params.yearTrademarkCase}}</span>
              宗，其中
              <span class="num-style">{{params.managementUnitReport}}</span>
              宗来源于市场经营管理单位的报告
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">市场内经销的驰名、著名商标商品登记档案:</span>
              {{params.registrationFiles | filter_map_key isEstablish}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="secend-title control-group">
          <p>十四、信息公开</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">信息公示项目:</span>
              {{params.publicityProject | filter_map_key publicity}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">信息更新频率:</span>
              {{params.updateFrequency | filter_map_key frequency}}
            </p>
          </div>
        </div>
        <div class="secend-title control-group">
          <p>十五、消费者权益保护</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">消费者权益保护制度:</span>
              {{params.protectionSystem | filter_map_key isEstablish}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">进场合同中约定消费者侵权损害赔偿办法:</span>
              {{params.compensationMethod | filter_map_key isHas}}
            </p>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">投诉信箱:</span>
              {{params.complaintMailBox | filter_map_key isEstablishment}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">投诉电话:</span>
              {{params.complaintCall | filter_map_key isEstablishment}}
            </p>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">投诉者满意度记录:</span>
              {{params.satisfactionRecord | filter_map_key isHas}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              一年内投诉
              <span class="num-style">{{params.yearComplaint}}</span>
              宗，解决
              <span class="num-style">{{params.solveComplaint}}</span>
              宗
            </p>
          </div>
        </div>
        <div class="secend-title control-group">
          <p>十六、信用建设</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">市场信用建设工作开展:</span>
              {{params.creditWork | filter_map_key develop}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">营造信用文化氛围:</span>
              {{params.culturalAtmosphere | filter_map_key isHas}}
            </p>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">对场内经营者开展信用工作评比:</span>
              {{params.evaluationWork | filter_map_key isPart}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">评比工作资料:</span>
              {{params.evaluationWorkFile | filter_map_key isHas}}
            </p>
          </div>
        </div>
        <div class="secend-title control-group">
          <p>十七、安全管理</p>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">应对紧急突发事件的预案:</span>
              {{params.preparedness | filter_map_key isEstablish}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">应急管理人员:</span>
              {{params.emergencyManagement}}
            </p>
          </div>
        </div>
        <div class="grade-wrap control-group">
          <p>现场检查人员评级:{{params.creditRating | filter_map_key creditRatings}}</p>
        </div>
        <div class="secend-title control-group">
          <p>十八、行政处罚征信</p>
        </div>
        <div class="control-group">
          <div class="col">
            <textarea class="input textarea full" v-model="params.punishmentCredit"></textarea>
          </div> 
        </div>
        <div class="secend-title control-group">
          <p>十九、公示反馈情况</p>
        </div>
        <div class="control-group">
          <div class="col">
            <textarea class="input textarea full" v-model="params.publicFeedback"></textarea>
          </div> 
        </div>
        <div class="secend-title control-group">
          <p>二十、初审机构意见</p>
        </div>
        <div class="control-group">
           <div class="col">
            <p class="info-p">
              1、发放
              <input type="text" class="input" v-model="params.proposalContent">
              行政建议书
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              2、发放
              <input type="text" class="input" v-model="params.rectificationNotice">
              限期整改通知书
            </p>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              3、建议认定级别为
              <select class="input input-select num-sel" v-model="params.categoryIdentification" :class="{'input-select-on': params.categoryIdentification!='' && params.categoryIdentification!=null}">
                <option value="">请选择</option>
                <option v-for="item in creditRatings" :value="item.id">{{item.name}}</option>
              </select>
              级
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="row mb-50 mt-30">
          <div class="col txt-c">
          <button type="button" class="btn btn-save mr-25" @click="save()">保存</button>
            <button type="button" v-link="{name: 'credit-confirm-index'}" class="btn btn-back">返回</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script type="text/javascript">

	import model from './model.js'

  export default {
    
    data() {
      this.model=model(this.$http);
      return {
        creditRatings:creditRatings,
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
        ratingSupervisionModes:[],
        params: {
          pk: '',
          updatedBy: '',
          punishmentCredit:'',
          publicFeedback:'',
          proposalContent:'',
          rectificationNotice:'',
          categoryIdentification:''
        },
      }
    },

    route: {
      data: function(transition){
        var userInfo=this.$local_store.get("userInfo");
        this.$promiseAll([this.model.depNode({"pk":130}),this.model.dataList({typeId:"ratingSupervisionMode"}),this.model.info({pk:transition.to.params.pk})]).then(res => {

          //所属区域
          this.industryAreas=res[0].data.result;
          //监管方式
          this.ratingSupervisionModes = res[1].data.result;
          //详情
          this.params = res[2].data.result;
          this.params.updatedBy = userInfo.account;
        });
      
      }
    },
  
    methods:{
	    save(){
        if(this.params.pk != ''&& this.params.pk != null){
          this.model.update(this.params).then(res => {
            Message.show('success', '保存成功', 2, () => {
              this.$router.go({name: 'credit-confirm-index'})
            }) 
          });
        }
      }
    },

    watch: {

    },
    
    ready() {
      
    }
  }

</script>
