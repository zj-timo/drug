<template>
<div class="main-content task-manage">
  <div class="row-auto content-header">
    <div class="border-l pr-2"></div>
    <div class="border-l pr-10"></div>
    <span class="header-title">查看</span>
    <div class="col"></div>
  </div>
  <validator name="verify">
    <form role="form" class="form-box-center">
      <div class="plr-11">
        <div class="tab-page-tit">
            <div class="tab-border-l pr-10"></div>
            <div class="tab-page">被查主体基本情况</div>
          </div>
          <div class="control-group">
            <div class="col">
              <div class="row">
                <span class="col w-150-info">字号名称: </span>
                <div class="col">
                  <div>{{params.name}}</div>
                </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
              <div class="row">
                <span class="col w-150-info">统一社会信用代码: </span>
                <div class="col">
                  <div >{{params.creditCode}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="control-group">
            <div class="col">
              <div class="row">
                <span class="col w-150-info">住所: </span>
                <div class="col">
                  <div>{{params.address}}</div>
                </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
              <div class="row">
                <span class="col w-150-info">经营者姓名或负责人: </span>
                <div class="col">
                  <div>{{params.personCharge}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="control-group">
            <div class="col">
              <div class="row">
                <span class="col w-150-info">主营商品: </span>
                <div class="col">
                  <div>{{params.mainCommodity}}</div>
                </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
              <div class="row">
                <span class="col w-150-info">联系电话: </span>
                <div class="col">
                  <div>{{params.contactNumber}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="control-group">
            <div class="col-top">
              <div class="tab-page-tit">
                <div class="tab-border-l pr-10"></div>
                <div class="tab-page">必查项目</div>
              </div>
              <div v-for="item in mustProjects" @change="productChange()">
                <span title="{{item.name}}" class="cursor-p">
                  {{item.name.length > 15 ? item.name.substring(0,15)+"...": item.name}}
                </span>
                <label class="mr-25 float-r">
                  <input type="radio" :name="'mustProjects'+item.id" class="ver-m" :value="false" v-model="item.isChecked" disabled>
                  <span>否</span>
                </label>
                <label class="mr-25 float-r">
                  <input type="radio" :name="'mustProjects'+item.id" class="ver-m" :value="true" v-model="item.isChecked" disabled>
                  <span>是</span>
                </label>
                
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col-top">
              <div class="tab-page-tit">
                <div class="tab-border-l pr-10"></div>
                <div class="tab-page">相关经营项目检查</div>
              </div>
              <div v-for="item in businessProjects" @change="businessChange()">
                <span title="{{item.name}}" class="cursor-p">
                  {{item.name.length > 15 ? item.name.substring(0,15)+"...": item.name}}
                </span>
                <label class="mr-25 float-r">
                  <input type="radio" :name="'businessProjects'+item.id" class="ver-m" :value="false" v-model="item.isChecked" disabled>
                  <span>否</span>
                </label>
                <label class="mr-25 float-r">
                  <input type="radio" :name="'businessProjects'+item.id" class="ver-m" :value="true" v-model="item.isChecked" disabled>
                  <span>是</span>
                </label>
                
              </div>
            </div>
          </div>
          <div class="tab-page-tit">
            <div class="tab-border-l pr-10"></div>
            <div class="tab-page">实际检查情况简述</div>
          </div>
          <div class="control-group">
            <div class="col">
              <div class="min-h-50">{{params.inspectionSituation}}</div>
            </div>
          </div>
          <div class="control-group">
            <div class="col-top">
              <div class="tab-page-tit">
                <div class="tab-border-l pr-10"></div>
                <div class="tab-page">检查结果</div>
              </div>
              <div class="ex-res-box">
                <div class="ex-res-item" v-for="item in examinationResultss"  @change="examinationChange()">
                  <span title="{{item.name}}" class="cursor-p">
                    {{item.name.length > 15 ? item.name.substring(0,15)+"...": item.name}}
                  </span>
                  <label class="mr-25 float-r">
                    <input type="radio" :name="'examinationResultss'+item.id" class="ver-m" :value="false" v-model="item.isChecked" disabled>
                    <span>否</span>
                  </label>
                  <label class="mr-25 float-r">
                    <input type="radio" :name="'examinationResultss'+item.id" class="ver-m" :value="true" v-model="item.isChecked" disabled>
                    <span>是</span>
                  </label>
                  
                </div>
              </div>
            </div>
          </div>
          <div class="tab-page-tit">
            <div class="tab-border-l pr-10"></div>
            <div class="tab-page">处理情况</div>
          </div>
          <div class="control-group">
            <div class="col">
              <div class="row">
                <span class="col w-150-info">当场处罚(决定书编号): </span>
                <div class="col">
                  <div>{{params.punishments}}</div>
                </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
              <div class="row">
                <span class="col w-150-info">责令改正(通知书编号): </span>
                <div class="col">
                  <div>{{params.orderCorrect}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="control-group">
            <div class="col">
              <div class="row">
                <span class="col w-150-info">是否立案: </span>
                <div class="col">
                  <div>{{params.isFiling | filter_map_key yesNo}}</div>
                </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
            </div>
          </div>
      </div>
      <div class="control-group mb-50 mt-30">
        <div class="col txt-c">
          <button type="button" class="btn btn-back" @click="goBack">返回</button>
        </div>
      </div>
    </form>
  </validator>
</div>      
</template>

<script type="text/javascript">

  import model from './model.js'

  export default {
     data() {
      this.model=model(this.$http);
      return {
        yesNo:yesNo,
        fire:false,
        industryAreas:[],
        supervisionModes:[],
        mustProjects:[],
        businessProjects:[],
        examinationResultss:[],
        params:{}
      }
    },


    route: {
      data: function(transition){
        var userInfo=this.$local_store.get("userInfo");
        this.$promiseAll([
          this.model.depNode({pk:130}),
          this.model.dataList({typeId:"supervisionMode"}),
          this.model.dataList({typeId:"mustProject"}),
          this.model.dataList({typeId:"businessProject"}),
          this.model.dataList({typeId:"examinationResults"}),
          this.model.companyInfo({pk:transition.to.params.pk})]).then(res => {
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

          //必查项目
          var arr1=this.mustProjects;
          arr1.forEach((item)=>{
            item.isChecked = true;
          })
          this.mustProjects=this.$parse(arr1);
          //相关经营项目检查
          var arr2=this.businessProjects;
          arr2.forEach((item)=>{
            item.isChecked = true;
          })
          this.businessProjects=this.$parse(arr2);
          //检查结果
          var arr3=this.examinationResultss;
          arr3.forEach((item)=>{
            item.isChecked = true;
          })
          this.examinationResultss=this.$parse(arr3);

          this.isCheckedChange(this.params.mustProject,this.mustProjects);
          this.isCheckedChange(this.params.businessProject,this.businessProjects);
          this.isCheckedChange(this.params.examinationResults,this.examinationResultss);
        });
      }
 
    },
  
    methods:{
      //按字符串为对应数组添加isChecked
      isCheckedChange(str,changeArr){
          var arr=[];
          arr = str.split(",");
          var arrList = changeArr;
          arrList.forEach((item)=>{
            if(this.contains(arr, item.id)){
              item.isChecked=true
            }else{
              item.isChecked=false
            }
          })
          changeArr = this.$parse(arrList);
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
