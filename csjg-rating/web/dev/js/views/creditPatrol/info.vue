
<template>
  <div class="main-content credit-confirm">
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">信用巡查详情——查看</span>
      <div class="col txt-r">
        <button type="button" class="btn btn-save mr-20" v-on:click="printme()">打印</button>
      </div>
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
              {{params.industryArea | filter_map_key industryAreas}}
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
              <span class="mr-8">认定级别:</span>
              {{params.categoryIdentification | filter_map_key  creditRatings}}
            </p>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">主营商品:</span>
              {{params.mainCommodity}}
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">场内经营户数:</span>
              {{params.fieldAccounts}}
            </p>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">持照数:</span>
              {{params.businessLicense}}
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">无照数:</span>
              {{params.notBusinessLicense}}
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
              {{params.workSystem | filter_map_key workSystems}}
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
              {{params.clauseContains | filter_map_key clauseContainss}}
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col">
            <p class="info-p">
              <span class="mr-8">双发权利义务责任:</span>
              {{params.responsibility | filter_map_key responsibilitys}}
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
              现场检查，发现未照亮经营户
              <span class="num-style">{{params.unilluminatedOperation}}</span>
              户
            </p>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div> 
        </div>
        <div class="secend-title control-group">
          <p>五、商品质量管理</p>
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
              <span class="num-style">{{params.investigateInfringement}}</span>
              件
            </p>
          </div> 
          <div class="col w-100"></div>
          <div class="col"></div> 
        </div>
        <div class="secend-title control-group">
          <p>六、消费者权益保护</p>
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
              受理投诉
              <span class="num-style">{{params.yearComplaint}}</span>
              宗，解决
              <span class="num-style">{{params.solveComplaint}}</span>
              宗
            </p>
          </div>
        </div>
        <div class="secend-title control-group">
          <p>七、信息公开</p>
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
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">主要存在问题:</span>
              {{params.existingProblems}}
            </p>
          </div>  
        </div>
        <div class="control-group">
          <div class="col">
            <p class="info-p">
              <span class="mr-8">问题整改意见:</span>
              {{params.rectificationOpinion}}
            </p>
          </div>  
        </div>
        <div class="row mb-50 mt-30">
          <div class="col txt-c">
            <button type="button" v-link="{name: 'credit-patrol-index'}" class="btn btn-back">返回</button>
          </div>
        </div>
      </div>
    </form>
    <div v-el:tap_wrap class="print-div">
      <print :industry-areas="industryAreas" :supervision-modes="ratingSupervisionModes" :params="params"></print>
    </div> 
  </div>
</template>


<script type="text/javascript">

	import model from './model.js'
  import print from './print.vue'

  export default {
    
    data() {
      this.model=model(this.$http);
      return {
        isHas:isHas,
        creditRatings:creditRatings,
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
        params: {},
      }
    },

    route: {
      data: function(transition){
        this.$promiseAll([this.model.depNode({"pk":130}),this.model.dataList({typeId:"ratingSupervisionMode"}),this.model.info({pk:transition.to.params.pk})]).then(res => {
          //所属区域
          this.industryAreas=res[0].data.result;
          //监管方式
          this.ratingSupervisionModes = res[1].data.result;
          //详情
          this.params = res[2].data.result;
        });
      
      }
    },
  
    methods:{
	    printme(){
        //选择打印区域
        window.document.body.innerHTML=this.$els.tap_wrap.innerHTML;
        //调打印
        window.print();
        //强制页面刷新
        location.reload(); 
      },
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
