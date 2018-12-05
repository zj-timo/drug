<template>
<div class="main-content task-manage">
  <div class="row-auto content-header">
    <div class="border-l pr-2"></div>
    <div class="border-l pr-10"></div>
    <span class="header-title">{{title}}</span>
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
              <span class="col w-150">字号名称: </span>
              <div class="col">
                <input type="text" class="input full" placeholder="" v-model="params.name">
              </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <div class="row">
              <span class="col w-150">统一社会信用代码: </span>
              <div class="col">
                <input type="text" class="input full" placeholder="" v-model="params.creditCode">
              </div>
            </div>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <div class="row">
              <span class="col w-150">住所: </span>
              <div class="col">
                <input type="text" class="input full" placeholder="" v-model="params.address">
              </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <div class="row">
              <span class="col w-150">经营者姓名或负责人: </span>
              <div class="col">
                <input type="text" class="input full" placeholder="" v-model="params.personCharge">
              </div>
            </div>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <div class="row">
              <span class="col w-150">主营商品: </span>
              <div class="col">
                <input type="text" class="input full" placeholder="" v-model="params.mainCommodity">
              </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <div class="row">
              <span class="col w-150">联系电话: </span>
              <div class="col">
                <input type="text" class="input full" placeholder="" v-model="params.contactNumber">
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
                {{item.name}}
              </span>
              <label class="mr-25 float-r">
                <input type="radio" :name="'mustAdd'+item.id" class="ver-m" :value="false" v-model="item.isChecked">
                <span>否</span>
              </label>
              <label class="mr-25 float-r">
                <input type="radio" :name="'mustAdd'+item.id" class="ver-m" :value="true" v-model="item.isChecked">
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
                {{item.name}}
              </span>
              <label class="mr-25 float-r">
                <input type="radio" :name="'busAdd'+item.id" class="ver-m" :value="false" v-model="item.isChecked">
                <span>否</span>
              </label>
              <label class="mr-25 float-r">
                <input type="radio" :name="'busAdd'+item.id" class="ver-m" :value="true" v-model="item.isChecked">
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
            <textarea class="textarea full input" v-model="params.inspectionSituation"></textarea>
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
                  {{item.name}}
                </span>
                <label class="mr-25 float-r">
                  <input type="radio" :name="'exaAdd'+item.id" class="ver-m" :value="false" v-model="item.isChecked">
                  <span>否</span>
                </label>
                <label class="mr-25 float-r">
                  <input type="radio" :name="'exaAdd'+item.id" class="ver-m" :value="true" v-model="item.isChecked">
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
              <span class="col w-150">当场处罚(决定书编号): </span>
              <div class="col">
                <input type="text" class="input full" placeholder="" v-model="params.punishments">
              </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col">
            <div class="row">
              <span class="col w-150">责令改正(通知书编号): </span>
              <div class="col">
                <input type="text" class="input full" placeholder="" v-model="params.orderCorrect">
              </div>
            </div>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <div class="row">
              <span class="col w-150">是否立案: </span>
              <div class="col">
                <select class="input full input-select" v-model="params.isFiling" :class="{'input-select-on': params.isFiling!='' && params.isFiling!=null}">
                  <option value="">请选择</option>
                  <option v-for="item in yesNo" :value="item.id">{{item.name}}</option>
                </select>
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
          <button type="button" @click='save()' class="btn btn-save mr-25">保存</button>
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
        title:'',
        industryAreas:[],
        supervisionModes:[],
        mustProjects:[],
        businessProjects:[],
        examinationResultss:[],
        params:{
          ratingTaskPk:'',
          name:'',
          creditCode:'',
          personCharge:'',
          mainCommodity:'',
          contactNumber:'',
          mustProject:'1,2,3,4,5,6,7,8,9,10,11,12,13,14',
          businessProject:'2,4,5,7,8,10',
          inspectionSituation:'',
          examinationResults:'1,2,3,4,5,6',
          punishments:'',
          orderCorrect:'',
          address:'',
          isFiling:''
        }
      }
    },

    route: {
      data: function(transition){
        var userInfo=this.$local_store.get("userInfo");
        if(transition.to.name == "company-edit"){
          this.title="编辑"
          this.$promiseAll([this.model.depNode({pk:130}),
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
        }else{
          this.title="新增" 
          this.model.depNode({pk:130}).then(res => {
            //所属区域
            this.industryAreas=res.data.result;
          });
          this.model.dataList({typeId:"supervisionMode"}).then(res => {
            //监管方式
            this.supervisionModes = res.data.result;
          });
          this.model.dataList({typeId:"mustProject"}).then(res => {
            //必查项目
            this.mustProjects = res.data.result;
            //必查项目
            var arr1=this.mustProjects;
            arr1.forEach((item)=>{
              item.isChecked = true;
            })
            this.mustProjects=this.$parse(arr1);
            this.isCheckedChange(this.params.mustProject,this.mustProjects);
          });
          this.model.dataList({typeId:"businessProject"}).then(res => {
             
            //相关经营项目检查
            this.businessProjects = res.data.result;
            //相关经营项目检查
            var arr2=this.businessProjects;
            arr2.forEach((item)=>{
              item.isChecked = true;
            })
            this.businessProjects=this.$parse(arr2);
            this.isCheckedChange(this.params.businessProject,this.businessProjects);

          });
          this.model.dataList({typeId:"examinationResults"}).then(res => {
            //检查结果
            this.examinationResultss = res.data.result;
            //检查结果
            var arr3=this.examinationResultss;
            arr3.forEach((item)=>{
              item.isChecked = true;
            })
            this.examinationResultss=this.$parse(arr3);
            this.isCheckedChange(this.params.examinationResults,this.examinationResultss);
          });


          this.params.createdBy = userInfo.account;

        }
        
        
      }
 
    },
  
    methods:{
      save() {
        this.fire = true;
        if(this.$verify.invalid){
          Message.show('error','请检查表单标红字段',3);
          return
        }
        var backName = this.$local_store.get('backHtml');
        this.params.ratingTaskPk = backName.ratingPk;
        if(this.params.pk) {
          this.model.updateCompany(this.params).then((res)=>{
            Message.show('success', '保存成功', 2, () => {
              this.model.companyList({pk:this.params.pk}).then((res)=>{
                this.$router.go({name: backName.name , params:{pk: backName.ratingPk,state:backName.ratingState}});
              })
            }) 
          })
        } else {
          this.model.addCompany(this.params).then((res)=>{
            Message.show('success', '保存成功', 2, () => {
              this.model.companyList({pk:this.params.pk}).then((res)=>{
                this.$router.go({name: backName.name , params:{pk: backName.ratingPk,state:backName.ratingState}});
              })
            }) 
          })
        }
      },
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
      productChange(){
        var arr=[]
        this.mustProjects.forEach((item)=>{
          if(item.isChecked==true){
            arr.push(item.id);
          }
        })
        this.params.mustProject = arr.join(",");
      },
      businessChange(){
        var arr=[]
        this.businessProjects.forEach((item)=>{
          if(item.isChecked==true){
            arr.push(item.id);
          }
        })
        this.params.businessProject = arr.join(",");
      },
      examinationChange(){
        var arr=[]
        this.examinationResultss.forEach((item)=>{
          if(item.isChecked==true){
            arr.push(item.id);
          }
        })
        this.params.examinationResults = arr.join(",");
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
