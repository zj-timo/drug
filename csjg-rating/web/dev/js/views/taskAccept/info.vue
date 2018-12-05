
<template>
  <div class="main-content task-accept">
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">任务受理——查看</span>
    </div>
  
    <form role="form" class="form-box-center">
      <div class="plr-11">
        <div class="control-group">
          <div class="col">
             <div class="row">
                <span  class="col w-130">计划期数:</span>
                <div class="col">
                  {{params.plannedNumber}}
                </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="control-group">
          <div class="col">
             <div class="row">
                <span  class="col w-130">企业名称:</span>
                <div class="col">
                  {{params.name}}
                </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="control-group">
          <div class="col">
             <div class="row">
                <span  class="col w-130">计划开始时间:</span>
                <div class="col">
                  {{params.startTime}}
                </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="control-group">
          <div class="col">
             <div class="row">
                <span  class="col w-130">计划结束时间:</span>
                <div class="col">
                  {{params.endTime}}
                </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="control-group">
          <div class="col">
             <div class="row">
                <span  class="col w-130">统一社会信用代码:</span>
                <div class="col">
                  {{params.creditCode}}
                </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="control-group">
          <div class="col">
             <div class="row">
                <span  class="col w-130">所属管区:</span>
                <div class="col">
                  {{params.industryArea | filter_map_key industryAreas}}
                </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="control-group">
          <div class="col">
             <div class="row">
                <span  class="col w-130">年度计划:</span>
                <div class="col">
                  {{params.annualPlan}}
                </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="control-group">
          <div class="col">
             <div class="row">
                <span  class="col w-130">监管方式:</span>
                <div class="col">
                  {{params.supervisionMode | filter_map_key ratingSupervisionModes}}
                </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="control-group">
          <div class="col">
             <div class="row">
                <span  class="col w-130">检查任务接收人:</span>
                <div class="col">
                  {{params.enforcementLeader}}
                </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="control-group">
          <div class="col">
             <div class="row">
                <span  class="col w-130">检查状态:</span>
                <div class="col">
                  {{params.state | filter_map_key planStates}}
                </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="control-group" v-show="stateWrap ==1">
          <div class="col-top">
             <div class="row">
                <span  class="col-top w-130">选择随行人员:</span>
                <div class="col-top">
                  <div class="pr pr-15">
                    <textarea class="textarea input full" type="text" v-model="businessScopeShow" readonly></textarea>
                  </div>
                </div>
                <button class="btn btn-primary label-choose" @click="chooseBusinessScope()" type="button">选择</button>
            </div>
          </div>
        </div>
        <div class="control-group" v-show="stateWrap ==2 && entourageWrap !=''">
          <div class="col">
             <div class="row">
                <span  class="col-top w-130">选择随行人员:</span>
                <div class="col">
                  {{entourageWrap}}
                </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="control-group" v-show="stateWrap ==3 && reasonsWrap !=''">
          <div class="col">
             <div class="row">
                <span  class="col w-130">退回原因:</span>
                <div class="col">
                  {{reasonsWrap}}
                </div>
            </div>
          </div>
          <div class="col w-100"></div>
          <div class="col"></div>
        </div>
        <div class="row mb-50 mt-30">
          <div class="col txt-c">
            <button type="button" class="btn btn-save mr-25" v-show="stateWrap ==1" @click="accept()">受理</button>
            <button type="button" class="btn btn-save mr-25" v-show="stateWrap ==1" @click="openDelDialog()">退回</button>
            <button type="button" v-link="{name: 'task-accept-index'}" class="btn btn-back">返回</button>
          </div>
        </div>
      </div>
    </form>

    <dialog :show="delShow" title="请填写退回原因" :cb-close="closeDelDialog">
      <div slot="dialogContent">
        <textarea class="input textarea full" v-model="params.reasons"></textarea>
      </div>
      <div slot="dialogBtn">
        <input type="button" class="btn btn-primary mr-25" value="确定" @click="closeDelDialog('yes')">
        <input type="button" class="btn btn-primary" value="取消" @click="closeDelDialog('cancel')">
      </div>
    </dialog>
    <!-- 选择随行人员弹框-->
    <dialog class="label-dialog" :show="labelShow" :width="auto" title="选择随行人员" :cb-close="closeLabelDialog">
      <div slot="dialogContent">
        <div>
          <div class="control-group">
            <div class="col">
              <div class="row">
                <span class="col w-70">查询条件 :</span>
                <div class="col">
                  <input type="text" class="input full" placeholder="请输入姓名或账号" v-model="value">
                </div>
              </div>
            </div>
            <div class="col txt-r w-100">
              <input class="btn btn-primary" type="button"  v-on:click="search()" value="查询">
            </div>
          </div>
          <div class="tab-border-l pr-10"></div>
          <div class="tab-page">当前已选定的随行人员:</div>
          <div class="mt-20 border-line pb-20">
            <label class="label-border"  v-for="item in showmemberList" track-by="$index">
              <span>{{item.name}}</span>
            </label>
          </div>
          <div class="mt-20">
            <table class="arr-table">
              <tr v-for="item in showArr" >
                <td class="min-200" v-for=" item in showArr[$index]" >
                  <label class="arr-label" style="">
                    <input type="checkbox" class="label-input" v-model="checkedLabels" :value="item.id" />
                    <span>{{item.name}}</span>
                  </label>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div slot="dialogBtn" class="txt-c">
          <input type="button" class="btn btn-save mr-25" value="保存" @click="closeLabelDialog('save')">               
          <input type="button" class="btn btn-back" value="取消" @click="closeLabelDialog('no')">               
      </div>
    </dialog>
  </div>
</template>


<script type="text/javascript">

	import model from './model.js'

  export default {
    
    data() {
      this.model=model(this.$http);
      return {
        stateWrap: '',
        reasonsWrap: '',
        entourageWrap: '',
        checkedLabels: [],
        planStates:planStates,
        industryAreas:[],
        ratingSupervisionModes:[],
        memberList:[],
        memberListAll:[],
        value:"",
        params: {
          pk: '',
          state: '',
          entourage: '',
          updatedBy: '',
          reasons: ''
        },
        delShow: false,
        delItem:{},

        businessScopeShow:'',
        labelShow:false,
        showmemberList:[],
        showArr:[],
        savecheckedLabels:[]
      }
    },

    route: {
      data: function(transition){
        var userInfo=this.$local_store.get("userInfo");
        this.$promiseAll([this.model.depNode({"pk":130}),this.model.memberList({pk:transition.to.params.pk}),this.model.dataList({typeId:"ratingSupervisionMode"}),this.model.info({pk:transition.to.params.pk})]).then(res => {
          //所属区域
          this.industryAreas=res[0].data.result;
          //随行组员
          this.memberList=res[1].data.result;
          this.memberListAll = this.memberList
          //监管方式
          this.ratingSupervisionModes = res[2].data.result;
          //详情
          this.params = res[3].data.result;
          this.entourageWrap = this.params.entourage;
          this.reasonsWrap = this.params.reasons;
          this.stateWrap = this.params.state;
          this.params.updatedBy=userInfo.account;
        });
      }
    },
  
    methods:{
      search(){
        this.model.memberList({value:this.value}).then((res) => {
            if (res.data.result && res.data.result!= 0) {
              this.memberList = res.data.result;
              this.showArr=this.sliceArray(this.memberList, 3);
            }else {
              this.memberList = [];
            }
          }) 
      },
	    // 展示退回框
      openDelDialog(){
        this.params.reasons='';
        this.delShow = true;
      },
      
      // 关闭退回弹框
      closeDelDialog(type) {
        switch(type){
          case 'yes':
              this.params.state = 3;
              this.model.update(this.params).then(res => {
                this.$router.go({name: 'task-accept-index'})
              });
            break;
          case 'cancel':
            this.delShow=false;
            break;
        }
      },
      //受理
      accept(){
        if(this.params.pk != ''&& this.params.pk != null){
          // var checkedString = this.checkedLabels.join(",");
          this.params.state = 2;
          // this.params.entourage = checkedString;
          this.model.update(this.params).then(res => {
            Message.show('success', '保存成功', 2, () => {
              this.$router.go({name: 'task-accept-index'})
            }) 
          });
        }
      },
      // 打开随行选择人员弹窗
      chooseBusinessScope(){
        // 弹窗展示数组
        this.showArr=this.sliceArray(this.memberList, 3);
        
        this.showmemberList = this.memberList.filter(c => ( this.checkedLabels.indexOf(c.id) != -1 ));
        console.log(this.showmemberList)
        
        this.savecheckedLabels = this.$parse(this.checkedLabels);
        this.labelShow = true;
      },
      sliceArray(array, size) {
          var result = [];
          for (var x = 0; x < Math.ceil(array.length / size); x++) {
              var start = x * size;
              var end = start + size;
              result.push(array.slice(start, end));
          }
          return result;
      },
      closeLabelDialog(type){
        switch(type){
          case "save":
              var idArr = [];
              var nameArr = [];
              this.showmemberList.forEach((item)=>{
                idArr.push(item.id);
                nameArr.push(item.name);
              });
              this.businessScopeShow = nameArr.join(",");
              this.params.entourage = idArr.join(",");
              break;
          case "no":
              this.checkedLabels = this.$parse(this.savecheckedLabels);
              break;
        }
        
        this.labelShow = false;
        this.value = '';
        this.search();

      },
    },

    watch: {
      checkedLabels(val) {
        this.showmemberList = this.memberListAll.filter(c => 
        (val.indexOf(c.id) != -1)
        );
    // console.log(this.showmemberList)

      },
    },
   
    ready() {
      
    }
  }

</script>
