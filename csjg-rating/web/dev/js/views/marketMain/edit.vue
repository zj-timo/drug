
<template>
  <div class="main-content title-style market-main-content">
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">专业市场编辑</span>
      <div class="col txt-r">
        <button type="button" class="btn btn-save mr-20" v-on:click="printme()">打印</button>
      </div>
    </div>
    <validator name="verify">
      <form role="form" class="form-box-center">
        <div class="plr-11">
          <div class="tab-page-tit">
            <div class="tab-border-l pr-10"></div>
            <div class="tab-page">市场信息</div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200-info">名称:</span>
                  <div class="col">
                    {{params.name}}
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200-info">统一社会信用代码:</span>
                  <div class="col">
                    {{params.registerNumber}}
                  </div>
              </div>
            </div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200-info">住所:</span>
                  <div class="col">
                    {{params.address}}
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200-info">法定代表人:</span>
                  <div class="col">
                    {{params.legalRepresentative}}
                  </div>
              </div>
            </div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200-info">联系电话:</span>
                  <div class="col">
                    {{params.contactNumber}}
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200-info">成立日期:</span>
                  <div class="col">
                    {{params.foundTime}}
                  </div>
              </div>
            </div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200-info">开业日期:</span>
                  <div class="col">
                    {{params.opendTime}}
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200">管理方式:</span>
                  <div class="col">
                    <select class="input full input-select" v-model="params.managementStyle" :class="{'input-select-on': params.managementStyle!='' && params.managementStyle!=null}">
                      <option value="">请选择</option>
                      <option v-for="item in managementStyles" :value="item.id">{{item.name}}</option>
                    </select>
                  </div>
              </div>
            </div>
          </div>

          <div class="tab-page-tit">
            <div class="tab-border-l pr-10"></div>
            <div class="tab-page">管理单位信息</div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200">管理单位名称:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.managementUnitName">
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200">有效证/照名称:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.managementUnitCertificate">
                  </div>
              </div>
            </div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200">证/照号码:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.managementUnitNumber">
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200">负责人:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.managementUnitPerson">
                  </div>
              </div>
            </div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200">联系电话:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.managementUnitTelephone">
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
            </div>
          </div>

          <div class="tab-page-tit">
            <div class="tab-border-l pr-10"></div>
            <div class="tab-page">市场主办单位信息</div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200">主办单位名称:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.hostUnitName">
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200">有效证/照名称:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.hostUnitCertificate">
                  </div>
              </div>
            </div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200">证/照号码:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.hostUnitNumber">
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200">负责人:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.hostUnitPerson">
                  </div>
              </div>
            </div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200">联系电话:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.hostUnitTelephone">
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
            </div>
          </div>

          <div class="tab-page-tit">
            <div class="tab-border-l pr-10"></div>
            <div class="tab-page">市场详细信息</div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200">市场类别:</span>
                  <div class="col">
                    <select class="input full input-select" v-model="params.marketCategory" :class="{'input-select-on': params.marketCategory!='' && params.marketCategory!=null}">
                      <option value="">请选择</option>
                      <option v-for="item in marketTypes" :value="item.id">{{item.name}}</option>
                    </select>
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200">市场投资总额（万元）:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.investmentTotal">
                  </div>
              </div>
            </div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200">市场主体结构形式:</span>
                  <div class="col">
                    <select class="input full input-select" v-model="params.structuralStyle" :class="{'input-select-on': params.structuralStyle!='' && params.structuralStyle!=null}">
                      <option value="">请选择</option>
                      <option v-for="item in structureTypes" :value="item.id">{{item.name}}</option>
                    </select>
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200">主营商品:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.mainCommodity">
                  </div>
              </div>
            </div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200">市场占地面积（平方米）:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.coveredArea">
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200">其中市场建筑面积（平方米）:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.architectureArea">
                  </div>
              </div>
            </div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200">其中配套停车场面积（平方米）:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.parkingArea">
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200">市场经营面积（平方米）:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.managementArea">
                  </div>
              </div>
            </div>
          </div>
          <div class="control-group mb-15">
            <div class="col">
               <div class="row">
                  <span  class="col w-200">其中设置门店（个）:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.stores">
                  </div>
              </div>
            </div>
            <div class="col w-100"></div>
            <div class="col">
               <div class="row">
                  <span  class="col w-200">其中设置摊位（个）:</span>
                  <div class="col">
                    <input type="text" class="input full" v-model="params.booth">
                  </div>
              </div>
            </div>
          </div>
          <div class="tab-page-tit">
            <div class="tab-border-l pr-10"></div>
            <div class="tab-page">其他信息</div>
          </div>
          <div class="control-group mb-20">
            <div class="col">
               <div class="row">
                  <span  class= "w-200 col-top">其他:</span>
                  <div class="col">
                    <textarea class="input textarea full" v-model="params.otherInformation"></textarea>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-15 mt-15 plr-11">
          <div>
            <div class="table-header row-auto">
              <div class="table-name">市场经营数据</div>
              <div class="col-auto">
                <input class="btn btn-gray mr-10" type="button"  @click="openAddDialog()" value="新增">
              </div>
            </div>
          <!-- table -->
            <div class="table-striped">
              <table>
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>年份</th>
                    <th>入市经营户数</th>
                    <th>其中现经营门店（个）</th>
                    <th>其中现经营摊位（个）</th>
                    <th>市场管理团队人数（个）</th>
                    <th>上年成交额（万元）</th>
                    <th>操作</th>
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
                    <td>
                      <span>
                        <a href="javascript:;" @click="del($index)">删除</a>
                      </span>
                    </td>
                  </tr>

                  <tr v-if="list.length == 0">
                    <td colspan="8" class="txt-c">
                      <span>~没有任何查询结果~</span>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </div>
        <div class="row mb-50 mt-30">
            <div class="col txt-c">
              <button type="button" class="btn btn-save mr-25" @click="save()">保存</button>
              <button type="button" v-link="{name: 'market-main-index'}" class="btn btn-back">返回</button>
            </div>
        </div>        
      </form>
    </validator>
    <dialog :show="delShow" title="警告" :cb-close="closeDelDialog">
      <div slot="dialogContent">
        <i class="icon warn-icon">&#xe63a;</i>
        <span>您确定要删除这条信息吗？</span>
      </div>
      <div slot="dialogBtn">
        <input type="button" class="btn btn-primary mr-25" value="确定" @click="closeDelDialog('yes')">
        <input type="button" class="btn btn-primary" value="取消" @click="closeDelDialog('cancel')">
      </div>
    </dialog>
    <dialog :show="addShow" title="新增" :width="600" :cb-close="closeAddDialog">
      <div slot="dialogContent">
        <validator name="verify">
          <div class="control-group">
            <span class="col w-150">年份:</span>
            <div class="col">
              <select class="input full input-select" v-model="addParams.yearShare" :class="{'input-select-on': addParams.yearShare!='' && addParams.yearShare!=null}">
                <option value="">请选择</option>
                <option v-for="item in fiveYears" :value="item.name">{{item.name}}</option>
              </select>
            </div>
          </div>
          <div class="control-group">
            <span class="col-top w-150">入市经营户数:</span>
            <div class="col">
              <input class="input full" type="text" v-model="addParams.operationNumber">
            </div>
          </div>
          <div class="control-group">
            <span class="col-top w-150">其中现经营门店（个）:</span>
            <div class="col">
              <input class="input full" type="text" v-model="addParams.storeNumber">
            </div>
          </div>
          <div class="control-group">
            <span class="col-top w-150">其中现经营摊位（个）:</span>
            <div class="col">
              <input class="input full" type="text" v-model="addParams.boothNumber">
            </div>
          </div>
          <div class="control-group">
            <span class="col-top w-150">市场管理团队人数（个）:</span>
            <div class="col">
              <input class="input full" type="text" v-model="addParams.teamNumber">
            </div>
          </div>
          <div class="control-group">
            <span class="col-top w-150">上年成交额（万元）:</span>
            <div class="col">
              <input class="input full" type="text" v-model="addParams.lastYearTurnover">
            </div>
          </div>
        </validator>
      </div>
      <div slot="dialogBtn">
        <input type="button" class="btn btn-primary mr-25" value="确定" @click="closeAddDialog('yes')">
        <input type="button" class="btn btn-primary" value="取消" @click="closeAddDialog('cancel')">
      </div>
    </dialog>
    <div v-el:tap_wrap  class="print-div">
      <print  :structure_types="structureTypes" 
              :market_types="marketTypes" 
              :management_styles="managementStyles" 
              :industry_areas="industryAreas"
              :company_params="companyParams" 
              :params="params"
              :list="list"></print>
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
        fire:false,
        managementStyles:[],
        marketTypes:marketTypes,
        fiveYears:fiveYears,
        structureTypes:[],
        industryAreas:[],
        companyParams: {},
        params: {
          // name: '',
          // registerNumber: '',
          // address: '',
          // legalRepresentative:'',
          // contactNumber: '',
          // establishTime: '',
          // openingTime: '',
          managementStyle: '',
          managementUnitName:'',
          managementUnitCertificate: '',
          managementUnitNumber: '',
          managementUnitPerson: '',
          managementUnitTelephone: '',
          hostUnitName: '',
          hostUnitCertificate: '',
          hostUnitNumber: '',
          hostUnitPerson: '',
          hostUnitTelephone: '',
          marketCategory: '',
          investmentTotal: '',
          structuralStyle: '',
          mainCommodity: '',
          coveredArea:'',
          architectureArea: '',
          parkingArea: '',
          managementArea: '',
          stores: '',
          booth: '',
          otherInformation: '',
          professionalMarketDetail:[]
        },
        list: [],
        delShow:false,
        delItem:'',
        addShow:false,
        addParams:{
          // professionalMarketPk:'',
          yearShare: fiveYears[1].name,
          operationNumber:'',
          storeNumber:'',
          boothNumber:'',
          teamNumber:'',
          lastYearTurnover:''
        }
      }
    },

    route: {
      data: function(transition){
        var userInfo=this.$local_store.get("userInfo");
        this.$promiseAll([
          this.model.depNode({pk: 130}),
          this.model.dataList({typeId:"managementMethod"}),
          this.model.dataList({typeId:"structureType"}),
        	this.model.detail({pk:transition.to.params.pk})]).then(res => {
          //所属区域
          this.industryAreas = res[0].data.result;
          //管理方式
          this.managementStyles=res[1].data.result
          //市场主体结构形式
          this.structureTypes=res[2].data.result;
          //详情
          this.params = res[3].data.result;
          this.params.companyPk = transition.to.params.pk;
          this.list = this.params.professionalMarketDetail;
        });
      }
    },
  
    methods:{
      openAddDialog(){
        this.addShow = true;
      },
      closeAddDialog(type){
        var userInfo=this.$local_store.get("userInfo");
        switch(type){
          case 'yes':
            this.addParams.createdBy = userInfo.account;
            this.list.unshift(this.addParams);
            break;
          case 'cancel':
            break;
        }
        this.addParams = {};
        this.addParams.yearShare = this.fiveYears[1].name;
        this.addShow = false;
      },
      del(num){
        this.delShow = true;
        this.delItem = num;
      },
      closeDelDialog(type){
        switch(type){
            case 'yes':
                this.list.splice(this.delItem,1);
              break;
            case 'cancel':
              break;
        }
        this.delItem = '';
        this.delShow=false;
      },
      save(){
        // this.fire = true;

        // if(this.$verify.invalid){
        //     Message.show('error','请检查表单标红字段',3);
        //     return
        // }
    

        var userInfo=this.$local_store.get("userInfo");
        if(this.list!=[]&&this.list!=null){
          this.list.forEach((item)=>{
            item.createdBy= userInfo.account;
          })
        }

        if(this.params.pk == ''||this.params.pk == null){

          this.params.createdBy = userInfo.account;

          this.params.professionalMarketDetail = this.list;

          this.model.add(this.params).then(res => {
            Message.show('success', '保存成功', 2, () => {
              this.$router.go({name: 'market-main-index'})
            }) 
          });
        }else{
          this.params.updatedBy = userInfo.account;

          this.params.professionalMarketDetail = this.list;

          this.model.update(this.params).then(res => {
            Message.show('success', '保存成功', 2, () => {
              this.$router.go({name: 'market-main-index'})
            }) 
          });
        }
      },
      printme(){
        //选择打印区域
        window.document.body.innerHTML=this.$els.tap_wrap.innerHTML;
        //调打印
        window.print();
        //强制页面刷新
        location.reload(); 
      },

    },
    components:{
      "print":print
    },
    watch: {

    },

    ready() {

    }
  }

</script>
