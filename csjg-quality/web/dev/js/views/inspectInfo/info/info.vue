<template>
  <div class="main-content" v-el:main_content>
    <div class="tab-content">
      <div class="row-auto content-header">
        <div class="border-l pr-2"></div>
        <div class="border-l pr-10"></div>
        <span class="header-title">检查记录查询>检查记录明细</span>
        <div class="col-auto">
          <div class="col txt-r" v-if="!btnPos" :class="{'btn-re': !btnPos}" v-el:btn_position>
            <input class="btn btn-info mr-10" type="button" value="返回" v-link="{name:'inspect-info-index'}">
            <input class="btn btn-info" v-if="isChoosed==1" type="button" value="打印检查表" @click="print()">
          </div>
        </div>
      </div>

      <div class="row" v-if="btnPos">
        <div class="col" :class="{'btn-fixed': btnPos}" v-el:btn_position>
          <input class="btn btn-info mr-10" type="button" value="返回" v-link="{name:'inspect-info-index'}">
          <input class="btn btn-info" v-if="isChoosed==1" type="button" value="打印检查表" @click="print()">
        </div>
      </div>

      <validator name="validator">
        <form role="form">
          <div class="row tab-tit plr-10">
            <p class="tab-name" :class="{'change': $index==isChoosed}" v-for="item in tabArr" @click="tabShow($index)">{{item}}</p>
          </div>
          <div v-show="isChoosed==0">
            <tab1
             :params.sync="params">
            </tab1>
          </div>
          <div v-show="isChoosed==1">
            <tab2
             :params.sync="params"
             :page-name="pageName">
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
      tabArr: ["基本信息", "检查表信息"],
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
      pageName: '',
      btnPos: false
    }
  },

  route: {
    data: function(transition) {
      this.model.info({pk: transition.to.params.pk}).then(res => {
        this.params = res.data.result.qualityTask;
        //根据检查类型，拉取不同的检查表信息
        var pageObj = {
          '1':'../printView/html/productionLicense.html?pk=' + transition.to.params.pk,
          '2':'../printView/html/mandatoryCertification.html?pk=' + transition.to.params.pk,
          '3':'../printView/html/administrativeSupervision.html?pk=' + transition.to.params.pk,
          '4':'../printView/html/organicProducts.html?pk=' + transition.to.params.pk,
          '5':'../printView/html/InspectionTesting.html?pk=' + transition.to.params.pk
        };

        for (var key in pageObj) {
          if (this.params.inspectionType == key) {
            this.pageName = pageObj[key];
          }
        }

      })
    }
  },
  methods: {
    tabShow(index) {
      this.isChoosed = index;
    },
    print() {
      this.$broadcast('print-report');
    },
    btnPosition() {
      let _this = this;
      var main_content = this.$els.main_content;

      main_content.addEventListener('scroll',function (event) {
       let scrollTop = _this.$els.main_content.scrollTop;
       let offsetTop = _this.$els.btn_position.offsetTop;

       if(scrollTop-offsetTop >= 0){
          _this.btnPos = true;
        }else {
          _this.btnPos = false;
        }

      },false);
    }
  },
  watch: {

  },
  components: {
    tab1,
    tab2
  },
  ready() {
    this.btnPosition();
  }
}
</script>