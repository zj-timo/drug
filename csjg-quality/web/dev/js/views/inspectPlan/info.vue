
<template>
  <div class="main-content">
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">质量监管检查计划>查看</span>
    </div>

    <form role="form" class="form-box-center">
      <div class="control-group mb-15">
        <div class="col">
           <div class="row">
              <span  class="col w-info info-span">计划期数:</span>
              <div class="col info-p">
                {{params.plannedNumber}}
              </div>
          </div>
        </div>
      </div>
      <div class="control-group mb-15">
        <div class="col">
           <div class="row">
              <span  class="col w-info info-span">检查类型:</span>
              <div class="col info-p">
                {{params.inspectionType | filter_map_key qualityInspectionTypes}}
              </div>
          </div>
        </div>
      </div>
      <div class="control-group mb-15">
        <div class="col">
           <div class="row">
              <span  class="col w-info info-span">检查开始时间:</span>
              <div class="col info-p">
                {{params.startTime}} 
              </div>
          </div>
        </div>
      </div>
      <div class="control-group mb-15">
        <div class="col">
           <div class="row">
              <span  class="col w-info info-span">检查结束时间:</span>
              <div class="col info-p">
                {{params.endTime}} 
              </div>
          </div>
        </div>
      </div>
      <div class="control-group mb-15">
        <div class="col">
           <div class="row">
              <span  class="col w-info info-span">企业名称:</span>
              <div class="col info-p">
                {{params.name}}
              </div>
          </div>
        </div>
      </div>

      <div class="control-group mb-15">
        <div class="col">
           <div class="row">
              <span  class="col w-info info-span">统一社会信用代码:</span>
              <div class="col info-p">
                {{params.creditCode}}
              </div>
          </div>
        </div>
      </div>
      
      <div class="control-group mb-15">
        <div class="col">
           <div class="row">
              <span  class="col w-info info-span">所属管区:</span>
              <div class="col info-p">
                {{params.industryArea | filter_map_key industryAreas}}
              </div>
          </div>
        </div>
      </div>
      
      <div class="control-group mb-15">
        <div class="col">
           <div class="row">
              <span  class="col w-info info-span">计划年度:</span>
              <div class="col info-p">
                {{params.annualPlan}}
              </div>
          </div>
        </div>
      </div>

      <div class="control-group mb-15">
        <div class="col">
           <div class="row">
              <span  class="col w-info info-span">检查状态:</span>
              <div class="col info-p">
                {{params.state | filter_map_key states}}
              </div>
          </div>
        </div>
      </div>
      <div class="control-group mb-15">
        <div class="col">
           <div class="row">
              <span  class="col w-info info-span">检查任务接收人:</span>
              <div class="col info-p">
                {{params.enforcementLeader}}
              </div>
          </div>
        </div>
      </div>

      <div class="control-group mb-15" v-show="params.state==3">
        <div class="col">
           <div class="row">
              <span  class="col w-info info-span">退回原因:</span>
              <div class="col info-p">
                {{params.reasons}}
              </div>
          </div>
        </div>
      </div>
      <div class="control-group mb-15" v-show="params.state==3">
        <div class="col">
           <div class="row">
              <span  class="col w-info info-span">退回时间:</span>
              <div class="col info-p">
                {{params.updatedTime}}
              </div>
          </div>
        </div>
      </div>
      <div class="row mb-50 mt-30">
          <div class="col txt-c">
            <button type="button" v-link="{name: 'inspect-plan-index'}" class="btn btn-back">返回</button>
          </div>
      </div>        
    </form>
  </div>

</template>


<script type="text/javascript">

  import model from './model.js'

  export default {
    
    data() {
      this.model=model(this.$http);
      return {
        yesNo:yesNo,
        states:planStates,
        industryAreas:[],
        qualityInspectionTypes:[],
        enforcementLeaders:[],
        params: {}
      }
    },

    route: {
      data: function(transition){

        this.$promiseAll([this.model.userList(),
                          this.model.dataList({typeId:"qualityInspectionType"}),
                          this.model.depNode({pk:"130"}),
                          this.model.info({pk:transition.to.params.pk})]).then(res => {
          //检查任务接收人
          this.enforcementLeaders = res[0].data.result;
          //检查类型
          this.qualityInspectionTypes = res[1].data.result;
          //所属区域
          this.industryAreas=res[2].data.result
          this.params = res[3].data.result;

        });
      }
    },
  
    methods:{
      
    },

    watch: {

    },

    ready() {

    }
  }

</script>
