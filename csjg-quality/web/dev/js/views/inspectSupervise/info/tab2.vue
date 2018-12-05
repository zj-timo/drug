<template>
  <div class="plr-11 mt-30">
    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">检查结果登记</div>
    </div>
    <div class="table-header row-auto">
      <div class="table-name">检查结果列表</div>
    </div>
    <!-- table -->
    <div class="table-striped" :class="{'table-pb': tablePb}" v-el:table_parent>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>条款</th>
            <th>问题描述</th>
            <th>问题级别</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in taskProblem" v-if="taskProblem && taskProblem.length!=0" track-by="$index">
            <td>{{$index + 1}}</td>
            <td>
              {{item.specificTerms}}
            </td>
            <td>
              {{item.problemDescription}}
            </td>
            <td>
              {{item.disposalLevel | filter_map_key disposalLevel}}
            </td>
            <td>
              {{item.remarks}}
            </td>
          </tr>
          <tr v-if="taskProblem.length == 0">
            <td colspan="5" class="txt-c">
              <span>~没有任何查询结果~</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">处理措施登记</div>
    </div>
    <div class="control-group">
      <div class="col">
        <div class="row">
          <span class="col w-info">处理措施:</span>
          <div class="col">
            {{baseParams.disposalMeasures | filter_map_key disposalMeasures}}
          </div>
        </div>
      </div>
      <div class="col w-info-100"></div>
      <div class="col">
        <div class="row">
          <span class="col w-info">整改日期:</span>
          <div class="col">
            {{baseParams.rectificationTime}}
          </div>
        </div>
      </div>
    </div>

    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">上传检查表</div>
    </div>
    <div class="table-header row-auto">
      <div class="table-name">提交材料列表</div>
    </div>
    <div class="table-striped" :class="{'table-pb': tablePb}" v-el:table_parent>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>文件名称</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in fileParams" v-if="fileParams && fileParams.length!=0" track-by="$index">
            <td>{{$index + 1}}</td>
            <td>
              {{item.fileName}}
            </td>
            <td>
              <span>
                <a href="javascript:;" @click="dowloadFiles(item.fileUrl)">下载</a>
              </span>
            </td>
          </tr>

          <tr v-if="fileParams.length == 0">
            <td colspan="3" class="txt-c">
              <span>~没有任何查询结果~</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script type="text/javascript">
import model from '../model.js'
export default {
  props: {
    baseParams: {
      type: Object,
      default: function(value) {
        return value = {};
      }
    },
    taskProblem: {
      type: Array,
      default: function(value) {
        return value = [];
      }
    },
    fileParams: {
      type: Array,
      default: function(value) {
        return value = [];
      }
    }
  },
  data() {
    this.model = model(this.$http);
    return {
      reformItem: reformItem,
      disposalLevel:disposalLevelLists,
      disposalMeasures:disposalMeasures,
      params:{
        disposalLevel:'',
        problemDescription:'',
        remarks:'',
        specificTerms:''
      },
      fileObj:{
        fileName: '',
        fileUrl: ''
      }
    }
  },
  methods: {
    //下载附件
    dowloadFiles(fileUrl){
      window.open("/csjg-sys/file/downLoad?fileUrl="+fileUrl);
    }
  },
  watch: {},
  ready() {
  }
}
</script>