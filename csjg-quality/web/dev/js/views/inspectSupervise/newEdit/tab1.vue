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
                {{params.inspectionType | filter_map_key qualityInspectionTypes2}}
              </div>
            </div>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <div class="row">
              <span class="col w-info">计划开始时间:</span>
              <div class="col">
                {{params.planStartTime}}
              </div>
            </div>
          </div>
          <div class="col w-info-100"></div>
          <div class="col">
            <div class="row">
              <span class="col w-info">计划结束时间:</span>
              <div class="col">
                {{params.planEndTime}}
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
              <span class="col w-info">检查任务接收人:</span>
              <div class="col">
                {{params.enforcementLeader}}
              </div>
            </div>
          </div>
          <div class="col w-info-100"></div>
          <div class="col">
            <div class="row">
              <span class="col w-info">随行人员:</span>
              <div class="col">
                {{params.entourage}}
              </div>
            </div>
          </div>
        </div>
        <div class="control-group">
          <div class="col">
            <div class="row">
              <span class="col w-info">检查状态:</span>
              <div class="col">
                <select class="input full input-select" v-model="params.state" :class="{'input-select-on': params.state!='' && params.state!=null}">
                  <option value="">请选择</option>
                  <option v-for="item in reformInspect" :value="item.id">
                    {{item.name}}
                  </option>
                </select>
              </div>
              <div class="col"></div>
            </div>
          </div>
          <div class="col w-info-100"></div>
          <div class="col">
            <div class="row">
              <span class="col w-info">检查时间:</span>
              <div class="row-auto">
                <div class="col">
                  <datepicker :readonly="true" :value.sync="params.startTime" :limit="[{max:params.endTime}]" :placeholder="'开始日期'" format="YYYY-MM-DD">
                  </datepicker>
                </div>
                <span class="col-auto plr-5">至</span>
                <div class="col">
                  <datepicker align="right" :readonly="true" :value.sync="params.endTime" :limit="[{min:params.startTime}]" :placeholder="'结束日期'" format="YYYY-MM-DD">
                  </datepicker>
                </div>
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
    fire: {
      type: Boolean,
      default: false
    },
    verify: {
      type: Boolean,
      default: false
    },
    params: {
      type: Object,
      default: function(value) {
        return value = {};
      }
    },
    allSpecialList: {
      type: Array,
      default: function(value) {
        return value = [];
      }
    }
  },

  data() {
    this.model = model(this.$http);
    return {
      reformResult: reformResult,//整改结果，1通过，2未通过
      reformInspect: reformInspect,//状态,1待检查，2已检查
      industryArea: [],
      qualityInspectionTypes2: []
    }
  },
  methods: {
  },
  watch: {},
  ready() {
    //所属区域
    this.model.depNode({ pk: 130 }).then((res) => {
      this.industryArea = res.data.result;
    })

    //检查类型
    this.model.dataList({ typeId: "qualityInspectionType2" }).then(res => {
      this.qualityInspectionTypes2 = res.data.result;
    })

  }
}
</script>