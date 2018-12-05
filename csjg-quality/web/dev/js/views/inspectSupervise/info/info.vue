<template>
  <div class="main-content" v-el:main_content>
    <div class="tab-content">
      <div class="row-auto content-header">
        <div class="border-l pr-2"></div>
        <div class="border-l pr-10"></div>
        <span class="header-title">专项检查信息管理>专项检查信息明细</span>
        <div class="col-auto">
          <input class="btn btn-info" type="button" value="返回" v-link="{name:'inspect-supervise-index'}">
        </div>
      </div>
      <validator name="validator">
        <form role="form">
          <div class="row tab-tit plr-10">
            <p class="tab-name" :class="{'change': $index==isChoosed}" v-for="item in tabArr" @click="tabShow($index)">{{item}}</p>
          </div>
          <div v-show="isChoosed==0">
            <tab1
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
    this.model = model(this.$http);
    return {
      tabArr: ["基本信息", "检查结果"],
      isChoosed: 0, //默认打开第一个子菜单
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
    data: function(transition) {
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
  methods: {
    tabShow(index) {
      this.isChoosed = index;
    }
  },
  watch: {

  },
  components: {
    tab1,
    tab2
  },
  ready() {
  }
}
</script>