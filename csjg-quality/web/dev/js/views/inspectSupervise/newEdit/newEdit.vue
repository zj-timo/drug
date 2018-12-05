
<template>
  <div class="main-content">
    <div class="tab-content">
      <div class="row-auto content-header">
        <div class="border-l pr-2"></div>
        <div class="border-l pr-10"></div>
        <span class="header-title">专项检查信息管理>专项检查信息明细</span>
        <div class="col-auto">
          <input class="btn btn-info mr-10" type="button" value="保存" @click="save()" :disabled="isClicked">
          <input class="btn btn-info" type="button" v-link="{name: 'inspect-supervise-index'}" value="返回">
        </div>
      </div>

      <validator name="validator">
        <form role="form">
          <div class="row tab-tit plr-10">
            <p class="tab-name" :class="{'change': $index==isChoosed}" v-for="item in tabArr" @click="tabShow($index)">{{item}}</p>
          </div>
          <div v-show="isChoosed==0">
            <tab1 
              :fire="fire" 
              :verify.sync="verify.tab1"
              :params.sync="params"
              :all-special-list="allSpecialList">
            </tab1>
          </div>
          <div v-show="isChoosed==1">
            <tab2
              :base-params.sync="params"
              :task-problem.sync="qualityTaskProblem"
              :file-params.sync="qualityInspectionFile">
            </tab2>
          </div>
        </form>
      </validator>
    </div>
  </div>

</template>


<script type="text/javascript">

  import model from '../model.js'
  import tab1 from './tab1.vue'
  import tab2 from './tab2.vue'

  export default {
    
    data() {
      this.model=model(this.$http);
      return {
        fire:false,
        verify:{
          tab1:false
        },
        tabArr:["基本信息","检查结果"],
        isChoosed:0,//默认打开第一个子菜单
        params: {
          annualPlan: '',
          createdBy: '',
          createdTime: '',
          creditCode: '',
          deleteMark: '',
          disposalMeasures: '',
          endTime: '',
          entourage: '',
          industryArea: '',
          inspectionPlanPk: '',
          inspectionType: '',
          name: '',
          pk: '',
          rectificationFile: '',
          rectificationName: '',
          rectificationResult: '',
          rectificationTime: '',
          startTime: '',
          state: '',
          enforcementLeader: '',
          planEndTime: '',
          planStartTime: '',
          plannedNumber: ''
        },
        qualityInspectionFile: [],
        isClicked:false,
        allSpecialList: [],
        qualityTaskProblem:[]
      }
    },

    route: {
      data: function(transition){
        this.model.taskInfo({pk: transition.to.params.pk}).then(res => {
          //基本记录表信息
          this.params = res.data.result.qualityTask;
          //问题表信息
          this.qualityTaskProblem = res.data.result.qualityTaskProblem;
          //附件表信息
          this.qualityInspectionFile = res.data.result.qualityInspectionFile;
          //获取随行人员
          this.model.getSpecialUser({pk:this.params.inspectionPlanPk}).then(res => {
            this.allSpecialList = res.data.result;
          })
        })
      }
    },
    events:{
      getInfo(){
        this.model.info({pk:this.pk}).then(res => {
          this.params = res.data.result;
        })
      }
    },
    methods:{
      tabShow(index){
        this.isChoosed=index;
      },
      save(type){

        this.fire = true;

        let $this = this;
        var isPass = false;
        Object.keys(this.verify).forEach(function(key) {
          if(!!$this.verify[key]) {   
            isPass = true; 
          }
        });

        if(!!isPass){
          Message.show('error', '请检查表单标红字段', 3);
          return
        }

        this.$broadcast('get-content');

        this.isClicked = true;

        var obj = {};
        obj.qualityTask = this.params;
        obj.qualityInspectionFile = this.qualityInspectionFile;
        obj.qualityTaskProblem = this.qualityTaskProblem;
        this.model.save(obj).then(res => {
          Message.show('success', res.data.message, 3, () => {
            this.$router.go({ name: 'inspect-supervise-index' });
          })
        })
      }
    },
    watch: {

    },
    components:{
      tab1,
      tab2
    },
    ready() {
    }
  }

</script>
