
<template>
  <div class="main-content index-system">
    <div class="m-f-12">
      <div class="row count-box">
        <div class="col count-first">
          <div class="count-num">{{params.companyCount}}</div>
          <div>企业总数</div>
        </div>
        <div class="col count-second">
          <div class="count-num">{{params.planCount}}</div>
          <div>当年计划监管合计</div>
        </div>
        <div class="col count-third">
          <div class="count-num">{{params.yesPlanCount}}</div>
          <div>当年已完成监管合计</div>
        </div>
        <div class="col count-fourth">
          <div class="count-num">{{params.noPlanCount}}</div>
          <div>当年未完成监管合计</div>
        </div>
      </div>
    </div>

    <div class="mb-100">
      <div class="import-loading" v-if="!!isLoading">
        <span class="loading-icon"></span>
        <span style="color: #339eff">加载中...</span>
      </div>
      <div v-if="!isLoading" id="main" style="width: 100%; height:500px;"></div>
    </div>

  </div>

</template>


<script type="text/javascript">

  import model from './model.js'
  // 引入 echarts 主模块。
  import * as echarts from 'echarts/lib/echarts';
  // 引入柱状图。
  import 'echarts/lib/chart/bar';
  // 引入提示框组件、标题组件、工具箱组件。
  import 'echarts/lib/component/tooltip';
  import 'echarts/lib/component/title';
  import 'echarts/lib/component/toolbox';
  import 'echarts/theme/macarons';

  export default {

    data() {
        this.model=model(this.$http);
        return {
          option: {
            xData: [],
            planCount: [],
            planYesCount: []
          },
          params: {
            companyCount:'',
            noPlanCount:'',
            planCount:'',
            yesPlanCount:''
          },
          isLoading:true
        }
    },
    route: {
      data: function(transition) {
        
      }
    },
    methods:{

      getList() {
        this.model.list().then(res => {
          if(res.data.result != '') {
            this.params = res.data.result;
          }
        })
      },

      echartInit() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'), 'macarons');
        var option = {
          title : {
              text: '任务数据统计表'
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['当月计划总数','当月计划完成总数']
          },
          grid: {
              bottom: 90
          },
          dataZoom: [{
              type: 'slider',
              show: true,
              realtime: true,
              start: 0,
              end: 100
            },
            {
              type: 'inside',
              realtime: true,
              start: 0,
              end: 100
            }
          ],
          toolbox: {
            show : true,
            feature : {
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
          },
          calculable : true,
          xAxis : [
            {
              type: 'category',
              data: this.option.xData
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
                name:'当月计划总数',
                type:'bar',
                data: this.option.planCount
            },
            {
              name:'当月计划完成总数',
              type:'bar',
              data: this.option.planYesCount
            }
          ]
        };

        // 为echarts对象加载数据 
        myChart.setOption(option);
      },

      //获取eharts表数据
      getEchartList() {
        return this.$promise((resolve, reject) => {
          this.model.echartList().then(res => {
            this.isLoading = false;

            if (res.data.result.planCount && res.data.result.planCount.length != 0) {

              this.option.planCount = res.data.result.planCount;
            }

            if (res.data.result.planYesCount && res.data.result.planYesCount.length != 0) {

              this.option.planYesCount = res.data.result.planYesCount;
            }

            if (res.data.result.industryArea && res.data.result.industryArea.length != 0) {
              this.option.xData = res.data.result.industryArea;
            }

            resolve(resolve);

          })
        })
        
      }

    },

    watch:{
    },

    computed: {
        
    },

    ready() {

      this.getList();

      this.getEchartList().then((res) => {
        this.echartInit();
      });
    }
   
}
</script>
