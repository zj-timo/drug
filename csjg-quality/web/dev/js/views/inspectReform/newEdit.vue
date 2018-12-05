
<template>
  <div class="main-content">
    <div class="tab-content">
      <div class="row-auto content-header">
        <div class="border-l pr-2"></div>
        <div class="border-l pr-10"></div>
        <span class="header-title">整改信息管理>整改信息管理详情</span>
        <div class="col-auto">
          <input class="btn btn-info mr-10" type="button" value="保存" @click="save()" :disabled="isClicked">
          <input class="btn btn-info" type="button" v-link="{name: 'inspect-reform-index'}" value="返回">
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
                <select class="input full input-select" v-model="params.rectificationResult" :class="{'input-select-on': params.rectificationResult!='' && params.rectificationResult!=null}">
                  <option value="">请选择</option>
                  <option v-for="item in reformResult" :value="item.id">
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
              <span class="col w-info">整改报告:</span>
              <div class="col">
                <div class="row">
                  <div class="col">
                    <input type="text" v-model="params.rectificationName" class="input full">
                  </div>
                  <div class="col">
                    <div class="btn btn-gray reform-file-upload ml-10">
                      <file-upload 
                        :size="5242880"
                        v-on:import-success="importSuccess"
                        :pk="params.pk"
                        :url="'./file/upload'">
                      </file-upload>
                    </div>
                  </div>
                </div>
              </div>
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
      this.model=model(this.$http);
      return {
        fire:false,
        verify:{
          tab1:false
        },
        tabArr:["整改信息管理详情","整改情况"],
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
        pk: '',
        reformResult: reformResult,//整改结果，1通过，2未通过
        reformInspect: reformInspect,//状态,1待检查，2已检查
        industryArea: [],
        inspectionTypes: []
      }
    },
    route: {
      data: function(transition){
        this.pk = transition.to.params.pk;
        this.model.info({pk: transition.to.params.pk}).then(res => {
          this.params = res.data.result.qualityTask;
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
      importSuccess(res, index){
        this.params.rectificationFile = res.filePath;
        this.params.rectificationName = res.fileName;
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

        this.model.save(this.params).then(res => {
          Message.show('success', res.data.message, 3, () => {
            this.$router.go({ name: 'inspect-reform-index' });
          })
        })
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
