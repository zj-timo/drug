<template>
  <div class="main-content">
    <div class="tab-content">
      <div class="row-auto content-header">
        <div class="border-l pr-2"></div>
        <div class="border-l pr-10"></div>
        <span class="header-title">任务管理>任务受理>任务接收</span>
        <div class="col-auto">
          <input class="btn btn-info mr-10" type="button" value="受理" @click="acceptance()">
          <input class="btn btn-info mr-10" type="button" value="退回" @click="openRrturnDialog()">
          <input class="btn btn-info" type="button" value="返回" v-link="{name: 'inspect-task-index'}">
        </div>
      </div>
    </div>
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
        </div>
      </form>

      <div class="plr-11">
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
                <th>检查表名称</th>
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
      <dialog :show="returnShow" title="请填写退回原因" :cb-close="closeReturnDialog">
        <div slot="dialogContent">
          <div class="row">
            <textarea class="textarea input full" v-model="params.reasons"></textarea>
          </div>
        </div>
        <div slot="dialogBtn" class="txt-r">
          <input type="button" class="btn btn-primary mr-10" value="确定" @click="closeReturnDialog('save')">
          <input type="button" class="btn btn-primary" value="取消" @click="closeReturnDialog('cancel')">
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
              <label class="label-border"  v-for="item in showallSpecialList" track-by="$index">
                <span>{{item.name}}</span>
              </label>
            </div>
            <div class="mt-20">
              <table class="arr-table">
                <tr v-for="item in showArr" >
                  <td class="min-200" v-for=" item in showArr[$index]" >
                    <label class="arr-label" style="">
                      <input type="checkbox" class="label-input" v-model="entourageList" :value="item.id" />
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
    </validator>
  </div>
</template>
<script type="text/javascript">
import model from './model.js'
export default {
  data() {
    this.model = model(this.$http);
    return {
      yesNo: yesNo,
      returnShow: false,
      value:"",
      params: {
        pk: '', //主键pk 
        plannedNumber: '', //计划期数 
        inspectionType: '', // 检查类型(字典获取:inspectionType) 
        startTime: '', //开始时间 
        endTime: '', // 结束时间 
        name: '', // 企业名称 
        creditCode: '', // 统一社会信用代码 
        industryArea: '', // 所属管区 
        annualPlan: '', // 年度计划 
        state: '', //状态2接收3退回 
        enforcementLeader: '', // 执法组长 
        reasons: '', //退回原因 
        entourage: '' // 随行人员
      },
      entourageList: [],
      allSpecialList: [],
      planStates: planStates,
      industryArea: [],
      qualityInspectionTypes2: [],
      qualityInspectionFile: [],
      
      businessScopeShow:'',
      labelShow:false,
      showallSpecialList:[],
      SpecialList:[],
      showArr:[],
      saveentourageList:[]
    }
  },
  route: {
    data: function(transition) {
      //所属区域
      this.model.depNode({ pk: 130 }).then((res) => {
        this.industryArea = res.data.result;
      })
      //检查类型
      this.model.dataList({ typeId: "qualityInspectionType2" }).then(res => {
        this.qualityInspectionTypes2 = res.data.result;
      })
      //详情
      this.model.info({ pk: transition.to.params.pk }).then(res => {
        this.params = res.data.result;
        this.qualityInspectionFile = res.data.result.qualityInspectionFile;
        if (this.params.entourage) {
          this.entourageList = this.params.entourage.split(',');
        }
        //获取随行人员
        this.model.getSpecialUser({pk:transition.to.params.pk}).then(res => {
          this.allSpecialList = res.data.result;
          this.SpecialList = this.allSpecialList;
        })
        

      })
    }
  },
  methods: {
    search(){
        this.model.getSpecialUser({value:this.value}).then((res) => {
            if (res.data.result && res.data.result!= 0) {
              this.allSpecialList = res.data.result;
              this.showArr=this.sliceArray(this.allSpecialList, 3);
            }else {
              this.allSpecialList = [];
            }
          }) 
      },
    acceptance() {
      //受理
      this.params.state = '2';
      var entourage = this.entourageList.join(",");
      this.params.entourage = entourage;
      this.model.update(this.params).then(res => {
        Message.show('success', '保存成功', 2, () => {
          this.$router.go({name:'inspect-task-index'});    
        })
      })
    },
    openRrturnDialog() {
      this.returnShow = true;
    },
    closeReturnDialog(type) {
      switch (type) {
        case "save":{
          //退回
          this.params.state = '3';
          // var entourage = this.entourageList.join(",");
          // this.params.entourage = entourage;
          this.model.update(this.params).then(res => {
            Message.show('success', '保存成功', 2, () => {
              this.$router.go({name:'inspect-task-index'});    
            })
          })
        }
        break;
        case "cancel":
          break;
      }
      this.returnShow = false;
      this.params.reasons = '';
    },
    //下载附件
    dowloadFiles(fileUrl){
      window.open("/csjg-sys/file/downLoad?fileUrl="+fileUrl);
    },

    // 打开随行选择人员弹窗
    chooseBusinessScope(){
      // 弹窗展示数组
      this.showArr=this.sliceArray(this.allSpecialList, 3);
      
      this.showallSpecialList = this.allSpecialList.filter(c => ( this.entourageList.indexOf(c.id) != -1 ));
      
      this.saveentourageList = this.$parse(this.entourageList);
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
            this.showallSpecialList.forEach((item)=>{
              idArr.push(item.id);
              nameArr.push(item.name);
            });
            this.businessScopeShow = nameArr.join(",");
            this.params.entourage = idArr.join(",");
            break;
        case "no":
            this.entourageList = this.$parse(this.saveentourageList);
            break;
      }
      this.labelShow = false;
      this.value = '';
      this.search();
    },
  },
  watch: {
    entourageList(val) {
        this.showallSpecialList = this.SpecialList.filter(c => (val.indexOf(c.id) != -1));
      },
  },
  ready() {}
}
</script>