<template>
  <div class="print-wrap">
    <div>
      <div class="form-body">
        <h2>专业商品交易市场信用分级监管巡查表</h2>
        <br>
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
            <td colspan="3">{{params.mainCommodity}}</td>
          </tr>
          <tr>
            <td width="15%">场内经营户数</td>
            <td width="18%">{{params.fieldAccounts}}</td>
            <td width="17%">持照数</td>
            <td width="18%">{{params.businessLicense}}</td>
            <td width="15%">无照数</td>
            <td width="17%">{{params.notBusinessLicense}}</td>
          </tr>
          <tr>
            <td rowspan="3">市场管理<br>机构概况</td>
            <td colspan="5" class="txt-l">
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
            </td>
          </tr>
          <tr>
            <td colspan="5" class="txt-l">
              市场经营管理单位情况:
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
            </td>
          </tr>
          <tr>
            <td colspan="5" class="txt-l">
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
            </td>
          </tr>
          <tr>
            <td>市场管理<br>制度建设</td>
            <td colspan="5" class="txt-l">
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
            <td>与场内经营者<br>权利义务设定</td>
            <td colspan="5" class="txt-l">
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
            <td>进场经营者<br>照亮情况</td>
            <td colspan="5" class="txt-l">
              <p>
                现场检查，发现未照亮经营户
                <span class="print-num">{{params.unilluminatedOperationRate}}</span>户
              </p>
            </td>
          </tr>
          <tr>
            <td rowspan="2">商品质量管理</td>
            <td colspan="5" class="txt-l">
              <p>
                违禁品检查和清退记录:
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
              <p>
                监管部门现场认定和日常巡查发现质量不合格的商品情况:
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
            <td colspan="5" class="txt-l">
              <p>
                经营管理单位商品外观质量检查记录:
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
              <p>
                监管部门现场认定和日常巡查发现质量不合格的商品情况:
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
              <p>
                被监管部门查处假冒侵权等案件：
                <span class="print-num">{{params.investigateInfringement}}</span>件
              </p>
            </td>
          </tr>
          <tr>
            <td>消费者权益保护</td>
            <td colspan="5" class="txt-l">
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
                投诉者满意度记录:
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
                受理投诉
                <span class="print-num">{{params.yearComplaint}}</span>
                宗，解决
                <span class="print-num">{{params.solveComplaint}}</span>宗
              </p>
            </td>
          </tr>
          <tr>
            <td>信息公开</td>
            <td colspan="5" class="txt-l">
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
            <td>主要存在问题</td>
            <td colspan="2" class="txt-l">
              <div class="min-h-80">
                <p>{{params.existingProblems}}</p>
              </div>
            </td>
            <td>问题整改意见</td>
            <td colspan="2" class="txt-l">
              <div class="min-h-80">
                <p>{{params.rectificationOpinion}}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>被检查单位</td>
            <td colspan="2">
              <div class="min-h-80">
                （印章）<br><br><br>签收人（签字）
              </div>
            </td>
            <td>现场检查人员</td>
            <td colspan="2">
              <div class="min-h-80"></div>
            </td>
          </tr>
        </table>
        <p class="txt-r mt-10">检查日期:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;月&nbsp;&nbsp;日&nbsp;&nbsp;&nbsp;&nbsp;</p>
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
      },
      industryAreas:{type:Array,
        default:function(value){
          return value=[]
        }
      },
      supervisionModes:{type:Array,
        default:function(value){
          return value=[]
        }    
      },
    },  
    data() {
      this.model=model(this.$http);
      return {
        creditRatings:creditRatings
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
