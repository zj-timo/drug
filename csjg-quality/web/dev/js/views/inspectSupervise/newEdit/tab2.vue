<template>
  <div class="plr-11 mt-30">
    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">检查结果登记</div>
    </div>
    <div class="table-header row-auto">
      <div class="table-name">检查结果列表</div>
      <div class="col-auto">
        <a class="btn btn-primary mr-25" @click="addResults()">新增</a>
      </div>
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
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in taskProblem" v-if="taskProblem && taskProblem.length!=0" track-by="$index">
            <td>{{$index + 1}}</td>
            <td>
              <input type="text" class="input full" v-model="item.specificTerms">
            </td>
            <td>
              <input type="text" class="input full" v-model="item.problemDescription">
            </td>
            <td>
              <select class="input input-select" v-model="item.disposalLevel" :class="{'input-select-on': item.disposalLevel!='' && item.disposalLevel!=null}" @change="checkLeader(item.disposalLevel, $index)">
                <option value="">请选择</option>
                <option :value="item2.id" v-for="item2 in disposalLevel">{{item2.name}}</option>
              </select>
            </td>
            <td>
              <input type="text" class="input full" v-model="item.remarks">
            </td>
            <td>
              <span>
                <a href="javascript:;" @click="openDelDialog($index)">删除</a>
              </span>
            </td>
          </tr>
          <tr v-if="taskProblem.length == 0">
            <td colspan="6" class="txt-c">
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
            <select class="input full" v-model="baseParams.disposalMeasures">
              <option value="" selected>请选择</option>
              <option :value="item.id" v-for="item in disposalMeasures">{{item.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col w-info-100"></div>
      <div class="col">
        <div class="row">
          <span class="col w-info">整改日期:</span>
          <div class="col">
            <datepicker :readonly="true" :value.sync="baseParams.rectificationTime" :limit="" :placeholder="'选择日期'" format="YYYY-MM-DD">
            </datepicker>
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
      <div class="col-auto">
        <a class="btn btn-primary mr-25" @click="add()">新增</a>
      </div>
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
            <td><input type="text" v-model="item.fileName" class="input full"></td>
            <td>
              <file-upload 
                :size="5242880"
                v-on:import-success="importSuccess"
                :pk="($index).toString()"
                :url="'./file/upload'"
                ></file-upload>
              <span>|</span>
              <span>
                <a href="javascript:;" @click="del($index)">删除</a>
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

  <dialog :show="delShow" title="警告" :cb-close="closeOneDelDialog">
    <div slot="dialogContent">
      <i class="icon warn-icon">&#xe63a;</i>
      <span>您确定要删除这条信息吗？</span>
    </div>
    <div slot="dialogBtn">
      <input type="button" class="btn btn-primary mr-25" value="确定" @click="closeOneDelDialog('yes')">
      <input type="button" class="btn btn-primary" value="取消" @click="closeOneDelDialog('cancel')">
    </div>
  </dialog>

  <dialog :show="delFileShow" title="警告" :cb-close="closeDelDialog">
    <div slot="dialogContent">
      <i class="icon warn-icon">&#xe63a;</i>
      <span>您确定要删除这条信息吗？</span>
    </div>
    <div slot="dialogBtn">
      <input type="button" class="btn btn-primary mr-25" value="确定" @click="closeDelDialog('yes')">
      <input type="button" class="btn btn-primary" value="取消" @click="closeDelDialog('cancel')">
    </div>
  </dialog>
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
      delShow: false,
      delFileShow: false,
      delIndex: '',
      delItem: '',
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
    addResults(){
      var arr = this.taskProblem;
      arr.push(this.params);
      this.taskProblem = this.$parse(arr);
    },
    checkLeader(disposalLevel,index){
    },
    // 展示结果列表删除弹框
    openDelDialog(index){
      this.delShow = true;
      this.delIndex = index;
    },
    //关闭结果列表删除弹框
    closeOneDelDialog(type) {

      switch(type){
        case 'yes':
          this.taskProblem.splice(this.delIndex, 1);
          break;
        case 'cancel':
          break;
      }
      this.delShow=false;
    },

    add(){
      var arr = this.fileParams;
      arr.push(this.fileObj);
      this.fileParams = this.$parse(arr);
    },
    del(index){
      this.delItem = index;
      this.delFileShow = true;
    },
    // 关闭附件列表删除弹框
    closeDelDialog(type) {
      switch(type){
        case 'yes':
          this.fileParams.splice(this.delItem,1);
          break;
        case 'cancel':
          break;
      }
      this.fileParams = this.$parse(this.fileParams);
      this.delFileShow = false;
    },
    importSuccess(res, index){
      this.fileParams[index].fileName = res.fileName;
      this.fileParams[index].fileUrl = res.filePath;
    }
  },
  watch: {},
  ready() {
  }
}
</script>