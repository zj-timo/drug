<template>
  <div class="main-content">
    <div class="tab-content">
      <div class="row-auto content-header">
        <div class="border-l pr-2"></div>
        <div class="border-l pr-10"></div>
        <span class="header-title">整改信息管理>整改信息管理详情</span>
        <div class="col-auto">
          <input class="btn btn-info" type="button" value="返回" v-link="{name:'inspect-reform-index'}">
        </div>
      </div>
    </div>
    <div class="plr-11">
      <div class="tab-page-tit">
        <div class="tab-border-l pr-10"></div>
        <div class="tab-page">整改信息管理详情</div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-info">计划期数:</span>
            <div class="col">
              {{params.plannedNumber}}
            </div>
          </div>
        </div>
        <div class="col w-info-100"></div>
        <div class="col">
          <div class="row">
            <span class="col w-info">检查类型:</span>
            <div class="col">
              {{params.inspectionType | filter_map_key inspectionTypes}}
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-info">检查开始时间:</span>
            <div class="col">
              {{params.startTime}}
            </div>
          </div>
        </div>
        <div class="col w-info-100"></div>
        <div class="col">
          <div class="row">
            <span class="col w-info">检查结束时间:</span>
            <div class="col">
              {{params.endTime}}
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-info">企业名称:</span>
            <div class="col">
              {{params.name}}
            </div>
          </div>
        </div>
        <div class="col w-info-100"></div>
        <div class="col">
          <div class="row">
            <span class="col w-info">统一社会信用代码:</span>
            <div class="col">
              {{params.creditCode}}
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-info">所属管区:</span>
            <div class="col">
              {{params.industryArea | filter_map_key industryArea}}
            </div>
          </div>
        </div>
        <div class="col w-info-100"></div>
        <div class="col">
          <div class="row">
            <span class="col w-info">计划年度:</span>
            <div class="col">
              {{params.annualPlan}}
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-info">检查人员:</span>
            <div class="col">
              {{params.entourage}}
            </div>
          </div>
        </div>
        <div class="col w-info-100"></div>
        <div class="col">
          <div class="row">
            <span class="col w-info">状态:</span>
            <div class="col">
              {{params.state | filter_map_key reformInspect}}
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-info">整改结果:</span>
            <div class="col">
              {{params.rectificationResult | filter_map_key reformResult}}
            </div>
          </div>
        </div>
        <div class="col w-info-100"></div>
        <div class="col">
          <div class="row">
            <span class="col w-info">整改报告:</span>
            <div class="col">
              <span>
                {{params.rectificationName}}
              </span>
              <input v-if="params.rectificationFile" type="button" class="btn btn-gray reform-file-upload ml-10" @click="download(params)" value="下载附件">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import model from './model.js'

export default {

  data() {
    this.model = model(this.$http);
    return {
      tabArr: ["整改信息管理详情", "整改情况"],
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
      reformResult: reformResult,//整改结果，1通过，2未通过
      reformInspect: reformInspect,//状态,1待检查，2已检查
      industryArea: [],
      inspectionTypes: []
    }
  },
  route: {
    data: function(transition) {
      this.model.info({pk: transition.to.params.pk}).then(res => {
        this.params = res.data.result.qualityTask;
      })
    }
  },
  methods: {
    tabShow(index) {
      this.isChoosed = index;
    },
    // 下载
    download(item){
      window.open("/csjg-sys/file/downLoad/?fileUrl="+item.rectificationFile);
    }
  },
  watch: {
  },
  ready() {
    //所属区域
    this.model.depNode({ pk: 130 }).then((res) => {
      this.industryArea = res.data.result;
    })
    //检查类型
    this.model.getDataDictionary({ typeId: "inspectionType" }).then(res => {
      this.inspectionTypes = res.data.result;
    })
  }
}
</script>