<template>
<div class="main-content">
  <div class="row-auto content-header">
    <div class="border-l pr-2"></div>
    <div class="border-l pr-10"></div>
    <span class="header-title">专业商品交易市场场内经营者现场抽查表</span>
    <div class="col"></div>
    <div class="col-auto">
      <input type="button" class="btn btn-save mr-25" value="打印" v-on:click="printme()">
      <input type="button" class="btn btn-back" value="返回" v-on:click="goBack">
    </div>
  </div>
  
  <div v-el:tap_wrap class="mb-50">
    <div class="print-wrap-297">
      <div class="form-body">
        <h2>专业商品交易市场场内经营者现场抽查表</h2>
        <div class="control-group">
          <div class="col">
            市场名称：<span>{{params.companyName}}</span>
          </div>

          <div class="col">
            <label class="checkLabel" v-for="item in marketTypes">
              <span v-if='params.marketCategory!=item.id'>
                <input type="checkbox" class="checkbox" disabled>
              </span>
              <span v-if='params.marketCategory==item.id'>
                <input type="checkbox" class="checkbox" checked disabled>
              </span>
              <span>{{item.name}}</span>
            </label>
          </div>
          
        </div>
        <table>
          <tr>
            <td rowspan="2" colspan="8" width="8%"><span class="table-span">被查主体基本信息</span></td>
            <td colspan="8" width="8%"><span class="table-span">字号名字</span></td>
            <td colspan="25" width="25%">{{params. name}}</td>
            <td colspan="10" width="10%"><span class="table-span">统一社会信用代码(注册号)</span></td>
            <td colspan="16" width="16%">{{params.creditCode}}</td>
            <td colspan="8" width="8%"><span class="table-span">住所</span></td>
            <td colspan="25" width="25%">{{params.address}}</td>
          </tr>
          <tr>
            <td colspan="8" width="8%"><span class="table-span">经营者姓名或负责人</span></td>
            <td colspan="25" width="25%">{{params.personCharge}}</td>
            <td colspan="10" width="10%"><span class="table-span">主营商品</span></td>
            <td colspan="16" width="16%">{{params.mainCommodity}}</td>
            <td colspan="8" width="8%"><span class="table-span">联系电话</span></td>
            <td colspan="25" width="25%">{{params.contactNumber}}</td>
          </tr>
          <tr>
            <td colspan="41" width="41%">必查项目</td>
            <td colspan="5" width="5%">是</td>
            <td colspan="5" width="5%">否</td>
            <td colspan="39" width="39%">相关经营项目检查</td>
            <td colspan="5" width="5%">是</td>
            <td colspan="5" width="5%">否</td>
          </tr>
          <tr v-for="item in cntactArr">
            <td colspan="41" width="41%" class="txt-l">{{item.name}}</td>
            <td colspan="5" width="5%">
              <span v-show="item.isMustChecked==true">
                <input type="radio" class="checkbox" checked disabled>
              </span>
              <span v-show="item.isMustChecked==false">
                <input type="radio" class="checkbox" disabled>
              </span>
            </td>
            <td colspan="5" width="5%">
              <span v-show="item.isMustChecked==false">
                <input type="radio" class="checkbox" checked disabled>
              </span>
              <span v-show="item.isMustChecked==true">
                <input type="radio" class="checkbox" disabled>
              </span>
            </td>
            <td colspan="39" width="39%" class="txt-l">{{item.busName}}</td>
            <td colspan="5" width="5%">
              <span v-show="item.isBusChecked==true">
                <input type="radio" class="checkbox" checked disabled>
              </span>
              <span v-show="item.isBusChecked==false">
                <input type="radio" class="checkbox" disabled>
              </span>
            </td>
            <td colspan="5" width="5%">
              <span v-show="item.isBusChecked==false">
                <input type="radio" class="checkbox" checked disabled>
              </span>
              <span v-show="item.isBusChecked==true">
                <input type="radio" class="checkbox" disabled>
              </span>
            </td>
          </tr>
          <tr>
          <td colspan="16" width="16%">
              <span class="table-span">实际检查情况简述</span>
            </td>
            <td colspan="84" width="84%">
              <div class="min-h-50">{{params.inspectionSituation}}</div>
            </td>
          </tr>

          <tr v-for="item in newExa">
            <td rowspan="3" colspan="8" width="8%" v-show="$index==0">
              <span class="table-span">检查结果</span>
            </td>
            <td colspan="33" width="33%">
              {{item.name}}
            </td>
             <td colspan="5" width="5%">是</td>
            <td colspan="5" width="5%">
              <span v-show="item.isExaChecked==true">
                <input type="radio" class="checkbox" checked disabled>
              </span>
              <span v-show="item.isExaChecked==false">
                <input type="radio" class="checkbox" disabled>
              </span>
            </td>
            <td colspan="5" width="5%">否</td>
            <td colspan="5" width="5%">
              <span v-show="item.isExaChecked==false">
                <input type="radio" class="checkbox" checked disabled>
              </span>
              <span v-show="item.isExaChecked==true">
                <input type="radio" class="checkbox" disabled>
              </span>
            </td>
            <td colspan="19" width="19%">
              {{{item.name2}}}
            </td>
            <td colspan="5" width="5%">是</td>
            <td colspan="5" width="5%">
              <span v-show="item.isExaChecked2==true">
                <input type="radio" class="checkbox" checked disabled>
              </span>
              <span v-show="item.isExaChecked2==false">
                <input type="radio" class="checkbox" disabled>
              </span>
            </td>
            <td colspan="5" width="5%">否</td>
            <td colspan="5" width="5%">
              <span v-show="item.isExaChecked2==false">
                <input type="radio" class="checkbox" checked disabled>
              </span>
              <span v-show="item.isExaChecked2==true">
                <input type="radio" class="checkbox" disabled>
              </span>
            </td>
          </tr>
          <tr>
            <td colspan="8" width="8%"><span class="table-span">处理情况</span></td>
            <td colspan="15" width="15%"><span class="table-span">当场处罚(决定书编号)</span></td>
            <td colspan="18" width="18%">{{params.punishments}}</td>
            <td colspan="15" width="15%"><span class="table-span">责令改正(决定书编号)</span></td>
            <td colspan="15" width="15%">{{params.orderCorrect}}</td>
            <td colspan="9" width="9%"><span class="table-span">是否立案</span></td>
            <td colspan="5" width="5%">是</td>
            <td colspan="5" width="5%">
              <span v-show="params.isFiling==1">
                <input type="radio" class="checkbox" checked disabled>
              </span>
              <span v-show="params.isFiling!=1">
                <input type="radio" class="checkbox" disabled>
              </span>
            </td>
            <td colspan="5" width="5%">否</td>
            <td colspan="5" width="5%">
              <span v-show="params.isFiling==2">
                <input type="radio" class="checkbox" checked disabled>
              </span>
              <span v-show="params.isFiling!=2">
                <input type="radio" class="checkbox" disabled>
              </span>
            </td>
          </tr>
          <tr>
            <td colspan="8" width="8%"><span class="table-span">检查单位</span></td>
            <td colspan="33" width="33%"></td>
            <td colspan="5" width="5%"><span class="table-span">检查人</span></td>
            <td colspan="15" width="15%"></td>
            <td colspan="5" width="5%"><span class="table-span">检查时间</span></td>
            <td colspan="10" width="10%"></td>
            <td colspan="9" width="9%"><span class="table-span">被查经营者/负责人签字</span></td>
            <td colspan="15" width="15%"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>  
</div>      
</template>


<script type="text/javascript">

  import model from './model.js'

  export default {
     data() {
      this.model=model(this.$http);
      return {
        params:{},
        cntactArr:[],
        newExa:[],
        backName:'',
        marketTypes:marketTypes
      }
    },

    route: {
      data: function(transition){
        var userInfo=this.$local_store.get("userInfo");
        this.$promiseAll([this.model.depNode(),
          this.model.dataList({typeId:"supervisionMode"}),
          this.model.dataList({typeId:"mustProject"}),
          this.model.dataList({typeId:"businessProject"}),
          this.model.dataList({typeId:"examinationResults"}),
          this.model.companyPrint({pk:transition.to.params.pk})]).then(res => {
          //所属区域
          this.industryAreas=res[0].data.result;
          //监管方式
          this.supervisionModes = res[1].data.result;
          //必查项目
          this.mustProjects = res[2].data.result;
          //相关经营项目检查
          this.businessProjects = res[3].data.result;
          //检查结果
          this.examinationResultss = res[4].data.result;
          //现场抽查详情
          this.params = res[5].data.result;
          //合并必查项目与相关经营项目检查
          this.joinMustBus(this.mustProjects,this.businessProjects,this.params.mustProject,this.params.businessProject);
          //调整examinationResultss数组
          this.changeExa(this.examinationResultss,this.params.examinationResults);
        });
        
      }
 
    },
  
    methods:{
       printme(){ 
        var showBorder = document.getElementsByClassName('form-head-right');

        var noBorder=Array.prototype.filter.call(showBorder, function(item){
          return item.tagName.toLowerCase();
        });
        noBorder.forEach((item) => {
          item.setAttribute("class", "form-head-show")
        });
    
        //选择打印区域
        window.document.body.innerHTML=this.$els.tap_wrap.innerHTML;
        //调打印
        window.print();
        //强制页面刷新
        location.reload(); 
      },
       // 判断字符串是否在数组中
      contains(arr, obj) {  
        var i = arr.length;  
        while (i--) {  
            if (arr[i] === obj) {  
                return true;  
            }  
        }  
        return false;  
      },  
      joinMustBus(must,bus,mustPro,busPro){
        var arr1=[];
        arr1 = mustPro.split(",");
        var arrList1 = must;
        arrList1.forEach((item)=>{
          if(this.contains(arr1, item.id)){
            item.isMustChecked=true
          }else{
            item.isMustChecked=false
          }
        })
        must = this.$parse(arrList1);
        var arr2=[];
        arr2 = busPro.split(",");
        var arrList2= bus;
        arrList2.forEach((item)=>{
          if(this.contains(arr2, item.id)){
            item.isBusChecked=true
          }else{
            item.isBusChecked=false
          }
        })
        bus = this.$parse(arrList2);
      
        //合并必查项目与相关经营项目检查
        var newArr=[];
        
        if(must.length>=bus.length){
          for(var j=0;j<must.length;j++){
            newArr[j] = must[j];
            newArr[j].busName = '';
            newArr[j].isBusChecked=null;
            for(var i=0 ; i<bus.length ; i++){
              if(newArr[j].id == bus[i].id){
                newArr[j].busName=bus[i].name;
                newArr[j].isBusChecked=bus[i].isBusChecked;
              }
            }
          }
        }else{
          for(var j=0;j<bus.length;j++){
            newArr[j].id = bus[j].id;
            newArr[j].busName = bus[j].name;
            newArr[j].isBusChecked = bus[j].isBusChecked;
            newArr[j].name = '';
            newArr[j].isMustChecked=null;
            for(var i=0 ; i<must.length ; i++){
              if(newArr[j].id == must[i].id){
                newArr[j].name=must[i].name;
                newArr[j].isMustChecked=must[i].isMustChecked;
              }
            }
          }
        }
        this.cntactArr=this.$parse(newArr);
      },
      changeExa(exa,exaPro){
        var arr=[];
        arr = exaPro.split(",");
        var arrList = exa;
        arrList.forEach((item)=>{
          if(this.contains(arr, item.id)){
            item.isExaChecked=true
          }else{
            item.isExaChecked=false
          }
        })
        exa = this.$parse(arrList);


        var newExa = [];
        var leftArr=[];
        var rightArr=[];
        var num=Math.ceil(exa.length/2);
        for(var i=0;i<exa.length;i++){
          var bool = ((exa[i].id)%2 == 0 )?true:false;
          
          if(!bool){
            //exa[i].id为奇数
            leftArr.push(exa[i]);
          }else{
            rightArr.push(exa[i]);
            console.log(exa[i])
          }
        }
        for(var j=0;j<leftArr.length;j++){
          newExa.push(leftArr[j]);
          for(var i=0 ; i<rightArr.length ; i++){
            if(j == i){

              newExa[j].name2 = rightArr[i].name;
              newExa[j].isExaChecked2 = rightArr[i].isExaChecked;
            }
          }
        }
        this.newExa = this.$parse(newExa);
      },
      goBack(){
        var backName = this.$local_store.get('backHtml');
        this.$router.go({name: backName.name , params:{pk: backName.ratingPk,state:backName.ratingState}});
      }
    },

    watch: {

    },

    ready() {
      
    }
  }

</script>
