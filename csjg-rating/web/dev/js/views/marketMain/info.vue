
<template>
  <div class="main-content">
    <div class="market-main-content">
      <div class="row-auto content-header">
        <div class="border-l pr-2"></div>
        <div class="border-l pr-10"></div>
        <span class="header-title">市场主体信息</span>
        <div class="col"></div>
      </div>

      <div class="market-msg">
        <div class="col">
          <div class="main-img-box">
            <div v-show="file!= null&&file.length>0">
              <img :src="showImg" alt="" >
            </div>
            <img src="../../../img/noImage.jpg" alt="" v-show="file==null||file.length==0">
          </div>
        </div>
        <div class="col">
          <div class="row main-row">
            <span class="main-tit">{{params.name}}</span>
            <span class="main-tit-sub mr-15">{{params.state  | filter_map_key companyStates}}</span>
            <span class="main-tit-sub mr-15" v-show="labelShow == true">专业市场</span>
            <span class="main-tit-sub" v-show="categoryIdentification!=''&&labelShow==true">{{categoryIdentification | filter_map_key creditRatings}}</span>
            <span class="main-tit-sub" v-show="categoryIdentification==''&&labelShow==true">未定级</span>
          </div>
          <div class="row main-row">
            <div class="col-top">
              <div class="row">
                <span class="col">注册号/统一社会信息代码 : <span class="item-msg">{{params.registerNumber}}</span> </span>
              </div>
            </div>
            <div class="col-top">
              <div class="row">
                <span class="col">法定代表人 : <span class="item-msg">{{params.legalRepresentative}}</span> </span>
              </div>
            </div>
            <div class="col w-120"></div>
          </div>
          <div class="row main-row">
            <div class="col-top">
              <div class="row">
                <span class="col col-top item-lab">主体地址 : </span>
                <div class="col">
                  <span class="item-msg">{{params.address}}</span>
                </div>
              </div>
            </div>
            <div class="col col-top">
              <div class="row">
                <span class="col-top item-lab">所属行业 : </span>
                <div class="col">
                  <span class="item-msg">{{params.industryOwned}}</span>
                </div>
              </div>
            </div>
            <div class="col w-120"></div>
          </div>
          <div class="row main-row">
            <div class="col-top">
              <div class="row">
                <span class="col col-top item-lab">主体类型 : </span>
                <div class="col">
                  <span class="item-msg">{{params.companyType | filter_map_key companyTypes}}</span>
                </div>
              </div>
            </div>
            <div class="col col-top">
              <div class="row">
                <span class="col-top item-lab">联系人 : </span>
                <div class="col">
                  <span class="item-msg">{{params.contacts}}</span>
                </div>
              </div>
            </div>
            <div class="col w-120"></div>
          </div>
          <div class="row main-row">
            <div class="col col-top">
              <div class="row">
                <span class="col-top item-lab">主体标签 : </span>
                <div class="col">
                  <span class="item-msg">{{showCompanyLabelName}}</span>
                </div>
              </div>
            </div>
            <div class="col col-top">
              <div class="row">
                <span class="col-top item-lab">联系电话 : </span>
                <div class="col">
                  <span class="item-msg">{{params.contactNumber}}</span>
                </div>
              </div>
            </div>
            <div class="col w-120"></div>
          </div>
        </div>
      </div>
      <div class="tab-tit plr-10">
        <p class="tab-name" :class="{'change': $index==isChoosed}" v-for="item in tabArr" @click="tabShow($index)">{{item}}</p>
      </div>
      <div v-show="isChoosed==0">
        <market-tab1 
          :params="params"
          :company_pk="companyPk"
          :category_identification.sync="categoryIdentification"></market-tab1> 
      </div>
      <div v-show="isChoosed==1">
        <market-tab2
          :company_pk="companyPk"
          :file.sync="file"
          :show_img.sync="showImg"
          :label_show.sync="labelShow"
          :show_company_label_name.sync="showCompanyLabelName"></market-tab2> 
      </div>
      <div v-show="isChoosed==2">
        <market-tab3></market-tab3> 
      </div>
      <div v-show="isChoosed==3">
        <market-tab4></market-tab4> 
      </div>
      <div v-show="isChoosed==4">
        <market-tab5 
          :register_number="params.registerNumber"></market-tab5> 
      </div>
    
      <div class="row mb-50 mt-30">
          <div class="col txt-c">
            <button type="button" class="btn btn-back" v-link="{name: 'market-main-index'}">返回</button>
          </div>
      </div>   


  
    </div>
  </div>

</template>


<script type="text/javascript">

  import model from './model.js'
  import marketTab1 from './market-tab1.vue'
  import marketTab2 from './market-tab2.vue'
  import marketTab3 from './market-tab3.vue'
  import marketTab4 from './market-tab4.vue'
  import marketTab5 from './market-tab5.vue'

  export default {
    
    data() {
      this.model=model(this.$http);
      return {
        categoryIdentification:'',
        showImg:'',
        fiveYears: fiveYears,
        companyTypes:[],
        companyLabels:[],
        industryOwneds:[],
        companyStates:[],
        creditRatings:creditRatings,
        params: {},
        list:[],
        companyPk:'',
        tabArr:["主体信息","采集信息","证照信息","特种设备","巡查历史"],
        isChoosed:0,//默认打开第一个子菜单
        file:[],
        labelShow:false,//判断是否显示categoryIdentification标签
        showCompanyLabelName:''
      }
    },

    route: {

      data: function(transition){
        this.companyPk = transition.to.params.pk;
        var userInfo=this.$local_store.get("userInfo");
        this.$promiseAll([
			        	this.model.dataList({typeId:"companyLabel"}),
			        	this.model.dataList({typeId:"companyClass"}),
			        	this.model.companyInfo({pk:transition.to.params.pk})]).then(res => {
            //主体标签
            this.companyLabels=res[0].data.result;
            //所属行业
            this.industryOwneds=res[1].data.result;
            this.params = res[2].data.result;
            

            if(this.params.companyLabel!=null){
              var arr=this.params.companyLabel.split(",");
              var getArr=[]
              this.companyLabels.forEach((item)=>{
                if(this.contains(arr, item.id)){
                  getArr.push(item.name);
                }
              })
              this.params.companyLabel = getArr.join(",");
            }
        });
          
      }
    },
    components:{
      "market-tab1":marketTab1,
      "market-tab2":marketTab2,
      "market-tab3":marketTab3,
      "market-tab4":marketTab4,
      "market-tab5":marketTab5
    },

    methods:{
      tabShow(index){
         this.isChoosed=index;
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
      }
      
    },

    watch: {

    },

    ready() {
      this.model.dataList({typeId:"companyState"}).then((res) => {
        //企业状态
        this.companyStates=res.data.result;
      })
      this.model.dataList({typeId:"companyType"}).then((res) => {
        //主体类型
        this.companyTypes=res.data.result;
      })
    }
  }

</script>
