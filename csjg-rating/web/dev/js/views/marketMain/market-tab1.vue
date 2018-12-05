
<template>
  <div class="tab-inner-tit">
    <p :class="{'choosed':$index==isChoosed}" v-for="item in tabArr" @click="changeTab($index)">{{item}}</p>
  </div>
  <div  class="tab-inner-info" v-show="isChoosed==0">
    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">基础信息</div>
    </div>
    <div class="row">
        <table class="tab-page-table">
          <tr>
            <td class="bg-color">经营场所</td>
            <td>{{params.businessPremises}}</td>
            <td class="bg-color">经营场所面积</td>
            <td>{{params.operatingPlaceArea}}</td>
          </tr>
          <tr>
            <td class="bg-color">经营者</td>
            <td>{{params.operator}}</td>
            <td class="bg-color">产权属性</td>
            <td>{{params.propertyRights}}</td>
          </tr>
          <tr>
            <td class="bg-color">属地监管工商所</td>
            <td>{{params.businessCircles}}</td>
            <td class="bg-color">登记机关</td>
            <td>{{params.registrationAuthority}}</td>
          </tr>
          <tr>
            <td class="bg-color">经营场所所在行政区划</td>
            <td>{{params.administrativeDivision}}</td>
            <td class="bg-color">经营范围</td>
            <td>{{params.businessScope}}</td>
          </tr>
          <tr>
            <td class="bg-color">注册资金</td>
            <td>{{params.amountFunds}}</td>
            <td class="bg-color">从业人数</td>
            <td>{{params.peopleNumber}}</td>
          </tr>
          <tr>
            <td class="bg-color">邮政编码</td>
            <td>{{params.postalCode}}</td>
            <td class="bg-color">电子邮件</td>
            <td>{{params.email}}</td>
          </tr>
          <tr>
            <td class="bg-color">网址</td>
            <td>{{params.website}}</td>
            <td class="bg-color">传真</td>
            <td>{{params.fax}}</td>
          </tr>
        </table>
    </div>
  </div>
  <div class="tab-inner-info" v-show="isChoosed==1">
    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">股东信息</div>
    </div>
  </div>
  <div class="tab-inner-info" v-show="isChoosed==2">
    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">工商变更</div>
    </div>
  </div>
  <div class="tab-inner-info" v-show="isChoosed==3">
    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">管理单位信息</div>
    </div>
    <div class="row">
        <table class="tab-page-table">
          <tr>
            <td class="bg-color">管理单位名称</td>
            <td>{{professionalParams.managementUnitName}}</td>
            <td class="bg-color">有效证/照名称</td>
            <td>{{professionalParams.managementUnitCertificate}}</td>
          </tr>
          <tr>
            <td class="bg-color">证/照号码</td>
            <td>{{professionalParams.managementUnitNumber}}</td>
            <td class="bg-color">负责人</td>
            <td>{{professionalParams.managementUnitPerson}}</td>
          </tr>
          <tr>
            <td class="bg-color">联系电话</td>
            <td>{{professionalParams.managementUnitTelephone}}</td>
            <td class="bg-color"></td>
            <td></td>
          </tr>
        </table>
    </div>
  </div>
  <div class="tab-inner-info" v-show="isChoosed==4">
    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">市场主办单位信息</div>
    </div>
    <div class="row">
        <table class="tab-page-table">
          <tr>
            <td class="bg-color">主办单位名称</td>
            <td>{{professionalParams.hostUnitName}}</td>
            <td class="bg-color">有效证/照名称</td>
            <td>{{professionalParams.hostUnitCertificate}}</td>
          </tr>
          <tr>
            <td class="bg-color">证/照号码</td>
            <td>{{professionalParams.hostUnitNumber}}</td>
            <td class="bg-color">负责人</td>
            <td>{{professionalParams.hostUnitPerson}}</td>
          </tr>
          <tr>
            <td class="bg-color">联系电话</td>
            <td>{{professionalParams.hostUnitTelephone}}</td>
            <td class="bg-color"></td>
            <td></td>
          </tr>
        </table>
    </div>
  </div>
  <div class="tab-inner-info" v-show="isChoosed==5">
    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">市场详细信息</div>
    </div>
    <div class="row">
        <table class="tab-page-table">
          <tr>
            <td class="bg-color">市场类别</td>
            <td>{{professionalParams.marketCategory  | filter_map_key  marketTypes}}</td>
            <td class="bg-color">市场投资总额（万元）</td>
            <td>{{professionalParams.investmentTotal}}</td>
          </tr>
          <tr>
            <td class="bg-color">市场主体结构形式</td>
            <td>{{professionalParams.structuralStyle | filter_map_key  structureTypes}}</td>
            <td class="bg-color">主营商品</td>
            <td>{{professionalParams.mainCommodity}}</td>
          </tr>
          <tr>
            <td class="bg-color">市场占地面积（平方米）</td>
            <td>{{professionalParams.coveredArea}}</td>
            <td class="bg-color">其中市场建筑面积（平方米）</td>
            <td>{{professionalParams.architectureArea}}</td>
          </tr>
          <tr>
            <td class="bg-color">其中配套停车场面积</td>
            <td>{{professionalParams.parkingArea}}</td>
            <td class="bg-color">市场经营面积（平方米）</td>
            <td>{{professionalParams.managementArea}}</td>
          </tr>
          <tr>
            <td class="bg-color">其中设置门店（个）</td>
            <td>{{professionalParams.stores}}</td>
            <td class="bg-color">其中设置摊位（个）</td>
            <td>{{professionalParams.booth}}</td>
          </tr>
          <tr>
            <td class="bg-color">管理方式</td>
            <td>{{professionalParams.managementStyle | filter_map_key managementStyles}}</td>
            <td class="bg-color"></td>
            <td></td>
          </tr>
        </table>
    </div>
  </div>
  <div class="tab-inner-info" v-show="isChoosed==6">
    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">市场经营性数据</div>
    </div>
    <div class="table-striped">
      <table>
          <thead>
            <tr class="border-top">
              <th>序号</th>
              <th>年份</th>
              <th>入市经营户数</th>
              <th>其中现经营门店（个）</th>
              <th>其中现经营摊位（个）</th>
              <th>市场管理团队人数（个）</th>
              <th>上年成交额（万元）</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list" v-if="list && list.length!=0">
              <td>{{$index + 1}}</td>
              <td>{{item.yearShare}}</td>
              <td>{{item.operationNumber}}</td>
              <td>{{item.storeNumber}}</td>
              <td>{{item.boothNumber}}</td>
              <td>{{item.teamNumber}}</td>
              <td>{{item.lastYearTurnover}}</td>
            </tr>
  
            <tr v-if="list.length == 0">
              <td colspan="7" class="txt-c">
                <span>~没有任何查询结果~</span>
              </td>
            </tr>
          </tbody>
  
        </table>
    </div>
  </div>
  <div class="tab-inner-info" v-show="isChoosed==7">
    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">其他信息</div>
    </div>
    <div class="row">
      <div class="col">{{professionalParams.otherInformation}}</div>
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
      company_pk:{
        type:String,
        default:''
      },
      category_identification:{
        type:String,
        default:''
      }
    },

    data(){
        this.model=model(this.$http);
        return {
            tabArr:["基础信息","股东信息","工商变更","管理单位信息","市场主办单位信息","市场详细信息","市场经营性数据","其他信息"],
            isChoosed:0,
            marketTypes:marketTypes,
            structureTypes:[],
            list:[],
            professionalParams:{},
            managementStyles:[]
        }
    },   
      
    methods:{
      changeTab(index){
        this.isChoosed = index;
      },
    },
    watch:{
      company_pk(){
        this.model.detail({pk:this.company_pk}).then(res => {
          this.professionalParams = res.data.result;
          if(this.professionalParams==''){
            this.list = [];
          }else{
            this.list = this.professionalParams.professionalMarketDetail;
          }
          this.category_identification = this.professionalParams.categoryIdentification;
        })
      }
    },
    ready() {
      this.model.dataList({typeId:"structureType"}).then(res => {
         //市场主体结构形式
          this.structureTypes=res.data.result;
      })
      this.model.dataList({typeId:"managementMethod"}).then(res => {
         //管理方式
          this.managementStyles = res.data.result;
      })
    }
    
  }

</script>
