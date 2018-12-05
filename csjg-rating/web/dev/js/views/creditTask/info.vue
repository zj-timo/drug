
<template>
  <div class="main-content">
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">信用评级计划详情</span>
    </div>

    <form role="form" class="form-box-center">
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span  class="col w-info info-span">计划期数:</span>
            <div class="col info-p">
              {{params.plannedNumber}}
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span  class="col w-info info-span">企业名称:</span>
            <div class="col info-p">
              {{params.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span  class="col w-info info-span">统一社会信用代码:</span>
            <div class="col info-p">
              {{params.creditCode}}
            </div>
          </div>
        </div>
      </div>

      <div class="control-group">
        <div class="col">
          <div class="row">
            <span  class="col w-info info-span">所属管区:</span>
            <div class="col info-p">
              {{params.industryArea | filter_map_key industryAreas}}
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span  class="col w-info info-span">年度计划:</span>
            <div class="col info-p">
              {{params.annualPlan}}
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span  class="col w-info info-span">监管方式:</span>
            <div class="col info-p">
              {{params.supervisionMode | filter_map_key supervisionModes}}
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span  class="col w-info info-span">开始时间:</span>
            <div class="col info-p">
              {{params.startTime}} 
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span  class="col w-info info-span">结束时间:</span>
            <div class="col info-p">
              {{params.endTime}} 
            </div>
          </div>
        </div>
      </div>

      <div class="control-group">
        <div class="col">
          <div class="row">
            <span  class="col w-info info-span">检查任务接收人:</span>
            <div class="col info-p">
              {{params.enforcementLeader}}
            </div>
          </div>
        </div>
      </div>
      
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span  class="col w-info info-span">检查状态:</span>
            <div class="col info-p">
              {{params.state | filter_map_key states}}
            </div>
          </div>
        </div>
      </div>
      
      <div class="control-group" v-show="params.state==3">
        <div class="col">
          <div class="row">
            <span  class="col w-info info-span">退回原因:</span>
            <div class="col info-p">
              {{params.reasons}}
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-50 mt-30">
        <div class="col txt-c">
          <button type="button" v-link="{name: 'credit-task-index'}" class="btn btn-back">返回</button>
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
        states:planStates,
        industryAreas:[],
        supervisionModes:[],
        params: {}
      }
    },

    route: {
      data: function(transition){

        this.$promiseAll([this.model.dataList({typeId:"ratingSupervisionMode"}),this.model.depNode({pk: 130}),this.model.info({pk:transition.to.params.pk})]).then(res => {
          
          //监管方式
          this.supervisionModes = res[0].data.result;
          //所属区域
          this.industryAreas=res[1].data.result;
          this.params = res[2].data.result;

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
