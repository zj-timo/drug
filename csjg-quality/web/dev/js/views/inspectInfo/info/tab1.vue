<template>
  <validator name="validator1">
    <form role="form" class="form-box-center" :val="verify = $validator1.invalid">
      <div class="plr-11">
        <div class="tab-page-tit">
          <div class="tab-border-l pr-10"></div>
          <div class="tab-page">基本信息</div>
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
                {{params.inspectionType | filter_map_key qualityInspectionTypes1}}
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
              <div class="col">
                {{params.entourage}}
              </div>
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
      </div>
    </form>
  </validator>
</template>
<script type="text/javascript">
import model from '../model.js'
export default {
  props: {
    params: {
      type: Object,
      default: function(value) {
        return value = {};
      }
    }
  },

  data() {
    this.model = model(this.$http);
    return {
      reformResult: reformResult,//整改结果，1通过，2未通过
      reformInspect: reformInspect,//状态,1待检查，2已检查
      industryArea: [],
      qualityInspectionTypes1: []
    }
  },
  methods: {
    // 下载
    download(item){
      window.open("/csjg-sys/file/downLoad/?fileUrl="+item.rectificationFile);
    }
  },
  watch: {},
  ready() {
    //所属区域
    this.model.depNode({ pk: 130 }).then((res) => {
      this.industryArea = res.data.result;
    })
    //检查类型
    this.model.dataList({ typeId: "qualityInspectionType1" }).then(res => {
      this.qualityInspectionTypes1 = res.data.result;
    })
  }
}
</script>