<template>
  <div class="print-wrap">
    <div>
      <div class="form-body">
        <h2>专业商品交易市场基本信息</h2>
        <div class="control-group">
          <div class="col">
            <p class="print-p">填写单位:{{company_params.name}}</p>
          </div>
          <div class="col w-70"></div>
          <div class="col">
            <p class="print-p">填写日期:</p>
          </div>
        </div>
        <table class="td-h">
          <tr>
            <td>市场名称</td>
            <td colspan="3">{{company_params.name}}</td>
            <td>统一社会信用代码</td>
            <td>{{company_params.registerNumber}}</td>
          </tr>
          <tr>
            <td width="13%">住所</td>
            <td width="20%">{{company_params.address}}</td>
            <td width="14%">法定代表人</td>
            <td width="20%">{{company_params.legalRepresentative}}</td>
            <td width="14%">联系电话</td>
            <td width="19%">{{company_params.contactNumber}}</td>
          </tr>
          <tr>
            <td>成立时间</td>
            <td>{{company_params.foundTime}}</td>
            <td>开业时间</td>
            <td>{{company_params.opendTime}}</td>
            <td>监管方式</td>
            <td>{{params.managementStyle | filter_map_key management_styles}}</td>
          </tr>
          <tr>
            <td rowspan="2">管理单位名称</td>
            <td rowspan="2">{{params.managementUnitName}}</td>
            <td>有效证/照名称</td>
            <td>{{params.managementUnitCertificate}}</td>
            <td>证/照号码</td>
            <td>{{params.managementUnitNumber}}</td>
          </tr>
          <tr>
            <td>负责人</td>
            <td>{{params.managementUnitPerson}}</td>
            <td>联系电话</td>
            <td>{{params.managementUnitTelephone}}</td>
          </tr>
          <tr>
            <td rowspan="2">市场主板单位</td>
            <td rowspan="2">{{params.hostUnitName}}</td>
            <td>有效证/照名称</td>
            <td>{{params.hostUnitCertificate}}</td>
            <td>证/照号码</td>
            <td>{{params.hostUnitNumber}}</td>
          </tr>
          <tr>
            <td>负责人</td>
            <td>{{params.hostUnitPerson}}</td>
            <td>联系电话</td>
            <td>{{params.hostUnitTelephone}}</td>
          </tr>
          <tr>
            <td>市场类别</td>
            <td>{{params.marketCategory | filter_map_key market_types}}</td>
            <td>市场投资总额（万元）</td>
            <td>{{params.investmentTotal}}</td>
            <td>市场主体结构形式</td>
            <td>{{params.structuralStyle | filter_map_key structure_types}}</td>
          </tr>
          <tr>
            <td>主营商品</td>
            <td colspan="5">{{params.mainCommodity}}</td>
          </tr>
           <tr>
            <td>市场占地面积（平方米）</td>
            <td>{{params.coveredArea}}</td>
            <td>其中市场建筑面积（平方米）</td>
            <td>{{params.architectureArea}}</td>
            <td>其中配套停车场面积（平方米）</td>
            <td>{{params.parkingArea}}</td>
          </tr>
           <tr>
            <td>市场经营面积（平方米）</td>
            <td>{{params.managementArea}}</td>
            <td>其中设置门面（个）</td>
            <td>{{params.stores}}</td>
            <td>其中设置摊位（个）</td>
            <td>{{params.booth}}</td>
          </tr>
           <tr>
            <td>市场经营者户数（户）</td>
            <td>{{numShow.operationNumber}}</td>
            <td>其中现经营门店（个）</td>
            <td>{{numShow.storeNumber}}</td>
            <td>其中现经营摊位（个）</td>
            <td>{{numShow.boothNumber}}</td>
          </tr>
           <tr>
            <td>市场管理团队人数（个）</td>
            <td>{{numShow.teamNumber}}</td>
            <td>上年成交额（万元）</td>
            <td>{{numShow.lastYearTurnover}}</td>
            <td>属地政府</td>
            <td>{{company_params.industryArea  | filter_map_key industry_areas}}</td>
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
      },
      company_params:{
        type:Object,
        default:function (value) {
            return value = {};
        }
      },
      list:{
        type:Array,
        default:function (value) {
            return value = [];
        }
      },
      market_types:{type:Array,
        default:function(value){
          return value=[]
        }
      },
      structure_types:{type:Array,
        default:function(value){
          return value=[]
        }    
      },
      management_styles:{type:Array,
        default:function(value){
          return value=[]
        }    
      },
      industry_areas:{type:Array,
        default:function(value){
          return value=[]
        }    
      }
    },  
    data() {
      this.model=model(this.$http);
      return {
        numShow:{}
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
      list(){

        if(this.list.length!=0){
          this.numShow = this.list[0];
        }else{
           this.numShow={};
        }
      }
    },

    ready() {  
      
    }
  }

</script>
