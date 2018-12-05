<template>
  <div class="main-content">
    <div class="tab-content">
      <div class="row-auto content-header">
        <div class="border-l pr-2"></div>
        <div class="border-l pr-10"></div>
        <span class="header-title">任务管理>任务受理>任务查看</span>
        <div class="col-auto">
          <input class="btn btn-info" type="button" value="返回" v-link="{name: 'inspect-task-index'}">
        </div>
      </div>
    </div>
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
              {{params.startTime}}
            </div>
          </div>
        </div>
        <div class="col w-info-100"></div>
        <div class="col">
          <div class="row">
            <span class="col w-info">计划结束时间:</span>
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
              {{params.industryArea | filter_map_key industryAreas}}
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
            <span class="col w-info">检查状态:</span>
            <div class="col">
              {{params.state | filter_map_key planStates}}
            </div>
          </div>
        </div>
        <div class="col w-info-100"></div>
        <div class="col">
          <div class="row">
            <span class="col w-info">检查任务接收人:</span>
            <div class="col">
              {{params.enforcementLeader}}
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row" v-if="params.state == '3'">
            <span class="col w-info">退回原因:</span>
            <div class="col">
              {{params.reasons}}
            </div>
          </div>
          <div class="row" v-else>
            <span class="col w-info">随行人员:</span>
            <div class="col">
              {{params.entourage}}
            </div>
          </div>
        </div>
      </div>
      <div class="tab-page-tit">
        <div class="tab-border-l pr-10"></div>
        <div class="tab-page">下载检查表</div>
      </div>
      <div class="table-header">
        <div class="table-name">提交材料列表</div>
      </div>
      <div class="table-striped">
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>文件名称</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in qualityInspectionFile" v-if="qualityInspectionFile && qualityInspectionFile.length!=0" track-by="$index">
              <td>{{$index + 1}}</td>
              <td>{{item.fileName}}</td>
              <td>
                <span>
                  <a href="javascript:;" @click="dowloadFiles(item.fileUrl)">下载</a>
                </span>
              </td>
            </tr>

            <tr v-if="qualityInspectionFile.length == 0">
              <td colspan="4" class="txt-c">
                <span>~没有任何查询结果~</span>
              </td>
            </tr>
          </tbody>
        </table>
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
      params: {},
      yesNo: yesNo,
      planStates: planStates,
      industryAreas: [],
      qualityInspectionTypes2: [],
      allSpecialList: [],
      qualityInspectionFile:[]
    }
  },
  route: {
    data: function(transition) {
      //所属区域
      this.model.depNode({ pk: 130 }).then((res) => {
        this.industryAreas = res.data.result;
      })
      //检查类型
      this.model.dataList({ typeId: "qualityInspectionType2" }).then(res => {
        this.qualityInspectionTypes2 = res.data.result;
      })
      //详情
      this.model.info({ pk: transition.to.params.pk }).then(res => {
        this.params = res.data.result;
        this.qualityInspectionFile = res.data.result.qualityInspectionFile;
        //获取随行人员
        this.model.getSpecialUser({pk:transition.to.params.pk}).then(res => {
          this.allSpecialList = res.data.result;
        })
        
      })
    }
  },
  methods: {
    //下载附件
    dowloadFiles(fileUrl){
      window.open("/csjg-sys/file/downLoad?fileUrl="+fileUrl);
    }
  },
  watch: {},
  ready() {}
}
</script>