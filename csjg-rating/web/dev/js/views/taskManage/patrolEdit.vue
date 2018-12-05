
<template>
  <div class="main-content task-manage">
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">信用巡查登记</span>
    </div>
    <form role="form" class="form-box-center">
      <div class="plr-11">
        <div class="edit-wrap">
          <div class="form-body">
            <h2>专业商品交易市场信用分级监管巡查表</h2>
            <br>
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
            <table>
              <tr>
                <td>市场名称</td>
                <td colspan="2">{{params.name}}</td>
                <td>统一社会信用代码</td>
                <td colspan="2">{{params.registerNumber}}</td>
              </tr>
              <tr>
                <td>认定级别</td>
                <td>{{params.categoryIdentification  | filter_map_key  creditRatings}}</td>
                <td>主营商品</td>
                <td colspan="3">
                  <input type="text" class="input full" v-model="params.mainCommodity">
                </td>
              </tr>
              <tr>
                <td width="15%">场内经营户数</td>
                <td width="18%">
                  <input type="text" class="input full" v-model="params.fieldAccounts">
                </td>
                <td width="17%">持照数</td>
                <td width="18%">
                  <input type="text" class="input full" v-model="params.businessLicense">
                </td>
                <td width="15%">无照数</td>
                <td width="17%">
                  <input type="text" class="input full" v-model="params.notBusinessLicense">
                </td>
              </tr>
              <tr>
                <td rowspan="3">市场管理<br>机构概况</td>
                <td colspan="5" class="txt-l">
                  市场经营管理单位性质:
                  <label class="checkLabel" v-for="item in managementUnitNatures">
                    <span>
                      <input type="radio" name="managementUnitNature" class="checkbox" :value="item.id" v-model="params.managementUnitNature">
                    </span>
                    <span>{{item.name}}</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td colspan="5" class="txt-l">
                  市场经营管理单位情况:
                  <label class="checkLabel" v-for="item in managementUnitStates">
                    <span>
                      <input type="radio" name="managementUnitState" class="checkbox" :value="item.id" v-model="params.managementUnitState">
                    </span>
                    <span>{{item.name}}</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td colspan="5" class="txt-l">
                  市场经营管理单位组织机构建设:
                  <label class="checkLabel" v-for="item in managementUnitGroups">
                    <span>
                      <input type="radio" name="managementUnitGroup" class="checkbox" :value="item.id" v-model="params.managementUnitGroup">
                    </span>
                    <span>{{item.name}}</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>市场管理<br>制度建设</td>
                <td colspan="5" class="txt-l">
                  <p>
                    管理制度和工作制度:
                    <label class="checkLabel" v-for="item in workSystems">
                      <span>
                        <input type="radio" name="workSystem" class="checkbox" :value="item.id" v-model="params.workSystem">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                  <p>1、检查验收制度；2、台账登记制度；3、市场公示制度；4、先行赔偿制度；<br>5、质量承诺制度；6、合同管理制度；7、不合格商品退市制度；8、信用管理制度；<br>9、应急工作制度；10、市场预警制度；11、市场巡查制度；12、学习培训制度；<br>13、市场档案制度；14、品牌（重要）商品登记管理制度。</p>
                </td>
              </tr>
              <tr>
                <td>与场内经营者<br>权利义务设定</td>
                <td colspan="5" class="txt-l">
                  <p>市场开办单位与场内经营者
                    <input type="text" class="input num-inp" v-model="params.operationContracts">
                    户签订进场经营合同
                  </p>
                  <p>
                    双方权利义务责任:
                    <label class="checkLabel" v-for="item in responsibilitys">
                      <span>
                        <input type="radio" name="responsibility" class="checkbox" :value="item.id" v-model="params.responsibility">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                  <p>
                    条款包含下列内容:
                    <label class="checkLabel" v-for="item in clauseContainss">
                      <span>
                        <input type="radio" name="clauseContains" class="checkbox" :value="item.id" v-model="params.clauseContains">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                </td>
              </tr>
              <tr>
                <td>进场经营者<br>照亮情况</td>
                <td colspan="5" class="txt-l">
                  <p>
                    现场检查，发现未照亮经营户
                    <input type="text" class="input num-inp" v-model="params.unilluminatedOperation">
                    户
                  </p>
                  
                </td>
              </tr>
              <tr>
                <td rowspan="2">商品质量管理</td>
                <td colspan="5" class="txt-l">
                  <p>
                    违禁品检查和清退记录:
                    <label class="checkLabel" v-for="item in isHas">
                      <span>
                        <input type="radio" name="repayingRecord" class="checkbox" :value="item.id" v-model="params.repayingRecord">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                  <p>
                    监管部门现场认定和日常巡查发现质量不合格的商品情况:
                    <label class="checkLabel" v-for="item in disqualificationTypes">
                      <span>
                        <input type="radio" name="disqualificationType" class="checkbox" :value="item.id" v-model="params.disqualificationType">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                </td>
              </tr>
              <tr>
                <td colspan="5" class="txt-l">
                  <p>
                    经营管理单位商品外观质量检查记录:
                    <label class="checkLabel" v-for="item in isHas">
                      <span>
                        <input type="radio" name="checkRecord" class="checkbox" :value="item.id" v-model="params.checkRecord">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                  <p>
                    监管部门现场认定和日常巡查发现质量不合格的商品情况:
                    <label class="checkLabel" v-for="item in disqualificationStates">
                      <span>
                        <input type="radio" name="disqualificationState" class="checkbox" :value="item.id" v-model="params.disqualificationState">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                  <p>
                    被监管部门查处假冒侵权等案件：
                    <input type="text" class="input num-inp" v-model="params.investigateInfringement">
                    件
                  </p>
                </td>
              </tr>
              <tr>
                <td>消费者权益保护</td>
                <td colspan="5" class="txt-l">
                  <p>
                    消费者权益保护制度:
                    <label class="checkLabel" v-for="item in isEstablish">
                      <span>
                        <input type="radio" name="protectionSystem" class="checkbox" :value="item.id" v-model="params.protectionSystem">
                      </span>
                      <span>{{item.name}}</span>
                    </label>
                  </p>
                  <p>
                    进场合同中约定消费者侵权损害赔偿办法:
                    <label class="checkLabel" v-for="item in yesNo">
                      <span>
                        <input type="radio" name="compensationMethod" class="checkbox" :value="item.id" v-model="params.compensationMethod">
                      </span>
                      <span>{{item.name}}</span>
                    </label>  
                  </p>
                  <p>
                    投诉邮箱:
                    <label class="checkLabel" v-for="item in isEstablishment">
                      <span>
                        <input type="radio" name="complaintMailBox" class="checkbox" :value="item.id" v-model="params.complaintMailBox">
                      </span>
                      <span>{{item.name}}</span>
                    </label>  
                  </p>
                  <p>
                    投诉电话:
                    <label class="checkLabel" v-for="item in isEstablishment">
                      <span>
                        <input type="radio" name="complaintCall" class="checkbox" :value="item.id" v-model="params.complaintCall">
                      </span>
                      <span>{{item.name}}</span>
                    </label>  
                  </p>
                  <p>
                    投诉者满意度记录:
                    <label class="checkLabel" v-for="item in isHas">
                      <span>
                        <input type="radio" name="satisfactionRecord" class="checkbox" :value="item.id" v-model="params.satisfactionRecord">
                      </span>
                      <span>{{item.name}}</span>
                    </label> 
                  </p>
                  <p>
                    受理投诉
                    <input type="text" class="input num-inp" v-model="params.yearComplaint">
                    宗，解决
                    <input type="text" class="input num-inp" v-model="params.solveComplaint">
                    宗
                  </p>
                </td>
              </tr>
              <tr>
                <td>信息公开</td>
                <td colspan="5" class="txt-l">
                  <p>
                    信息公示项目:
                    <label class="checkLabel" v-for="item in publicity">
                      <span>
                        <input type="radio" name="publicityProject" class="checkbox" :value="item.id" v-model="params.publicityProject">
                      </span>
                      <span>{{item.name}}</span>
                    </label> 
                  </p>
                  <p>
                    信息更新频率:
                    <label class="checkLabel" v-for="item in frequency">
                      <span>
                        <input type="radio" name="updateFrequency" class="checkbox" :value="item.id" v-model="params.updateFrequency">
                      </span>
                      <span>{{item.name}}</span>
                    </label> 
                  </p>
                </td>
              </tr>
              <tr>
                <td>主要存在问题</td>
                <td colspan="2" class="txt-l">
                  <div>
                    <textarea class="input textarea full" v-model="params.existingProblems"></textarea>
                  </div>
                </td>
                <td>问题整改意见</td>
                <td colspan="2" class="txt-l">
                  <div>
                    <textarea class="input textarea full" v-model="params.rectificationOpinion"></textarea>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>        
       
        <div class="row mb-50 mt-30">
            <div class="col txt-c">
            <button type="button" class="btn btn-save mr-25" @click="save()">保存</button>
              <button type="button" v-link="{name:  'task-manage-index'}" class="btn btn-back">返回</button>
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
        yesNo:yesNo,
        isHas: isHas,
        isPart: isPart,
        develop: develop,
        publicity: publicity,
        disqualificationTypes: disqualificationTypes,
        disqualificationStates: disqualificationStates,
        operatorFiless: operatorFiless,
        operatorFilesTruths: operatorFilesTruths,
        frequency: frequency,
        isEstablishment: isEstablishment,
        isEstablish: isEstablish,
        clauseContainss: clauseContainss,
        responsibilitys: responsibilitys,
        managementUnitGroups: managementUnitGroups,
        managementUnitNatures: managementUnitNatures,
        managementUnitStates: managementUnitStates,
        marketTypes: marketTypes,
        workSystems: workSystems,
        industryAreas: [],
        supervisionModes: [],
        creditRatings:creditRatings,
        params:  {
          name: '',
          registerNumber: '',
          marketType: '',
          categoryIdentification: '',
          mainCommodity: '',
          fieldAccounts: '',
          businessLicense: '',
          notBusinessLicense: '',
          managementUnitNature: '',
          managementUnitState: '1',
          managementUnitGroup: '1',
          workSystem: '1',
          clauseContains: '',
          responsibility: '1',
          operationContracts: '',
          unilluminatedOperation: '',
          repayingRecord: '1',
          disqualificationType: '1',
          checkRecord: '1',
          disqualificationState: '1',
          investigateInfringement: '',
          protectionSystem: '1',
          compensationMethod: '1',
          complaintMailBox: '1',
          complaintCall: '1',
          satisfactionRecord: '1',
          yearComplaint: '',
          publicityProject: '1',
          updateFrequency: '1',
          existingProblems: '',
          rectificationOpinion: ''
        },
      }
    },

        
    route:  {
      data:  function(transition){
        var userInfo=this.$local_store.get("userInfo");
        
        if(transition.to.params.state != "1"){
          this.$promiseAll([
            this.model.depNode({pk: 130}),
            this.model.dataList({typeId: "supervisionMode"}),
            this.model.patrolInfo({pk: transition.to.params.pk})]).then(res => {
            //所属区域
            this.industryAreas=res[0].data.result;
            //监管方式
            this.supervisionModes = res[1].data.result;
            //详情
            this.params = res[2].data.result;  
                          
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
            this.model.patrolInfo({pk: transition.to.params.pk}).then(res => {
              //详情
              this.params.name = res.data.result.name; 
              this.params.pk = transition.to.params.pk; 
              this.params.registerNumber = res.data.result.registerNumber; 
            })
        }
        
      
      }
    },
  
    methods: {
	    save(){
        var userInfo=this.$local_store.get("userInfo");

        this.params.updatedBy = userInfo.account;
        var params = this.$parse(this.params);
        delete params.entourage;
        this.params = this.$parse(params);
        this.model.updatePatrol(this.params).then(res => {
          Message.show('success', '保存成功', 2, () => {
            this.$router.go({name:  'task-manage-index'})
          }) 
        });
        
      }
    },

    watch:  {

    },
    
    ready() {
      
    }
  }

</script>
