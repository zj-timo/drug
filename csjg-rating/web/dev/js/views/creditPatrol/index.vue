
<template>
  <div class="main-content" v-el:main_content>
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">信用分级监管巡查管理</span>
      <div class="col"></div>
    </div>

    <div class="plr-11">
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-100">企业名称:</span>
            <div class="col">
              <input type="text" class="input full" placeholder="" v-model="params.name">
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row">
            <span class="col w-130">统一社会信用代码:</span>
            <div class="col">
              <input type="text" class="input full" placeholder="" v-model="params.registerNumber">
            </div>
          </div>
        </div>

         <div class="col">
          <div class="row">
            <span class="col w-130">状态:</span>
            <div class="col">
              <select class="input full input-select" v-model="params.state" :class="{'input-select-on': params.state!='' && params.state!=null}">
                <option value="">请选择</option>
                <option v-for="item in states" v-if="item.id==1 || item.id==4" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col search-100"></div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-100">所属管区:</span>
            <div class="col">
              <select class="input full input-select" v-model="params.industryArea" :class="{'input-select-on': params.industryArea!='' && params.industryArea!=null}">
                <option value="">请选择</option>
                <option v-for="item in industryAreas" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row">
            <span class="col w-130">选择时间:</span>
            <div class="row-auto">
              <div class="col">
                <datepicker 
                  :readonly="true" 
                  :value.sync="params.beginTime" 
                  :limit="[{max:params.endTime}]"
                  :placeholder="'开始日期'" 
                  format="YYYY-MM-DD"></datepicker>
              </div>
              <span class="col-auto plr-5">至</span>
              <div class="col">
                <datepicker 
                  align="right" 
                  :readonly="true" 
                  :value.sync="params.endTime" 
                  :limit="[{min:params.beginTime}]"
                  :placeholder="'结束日期'" 
                  format="YYYY-MM-DD"></datepicker>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row">
            <span class="col w-130">巡查年度:</span>
            <div class="col">  
              <select class="input full input-select" v-model="params.annualPlan" :class="{'input-select-on': params.annualPlan!='' && params.annualPlan!=null}">
                <option value="">请选择</option>
                <option v-for="item in fiveYears" :value="item.name">{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col search-100">
          <input class="btn btn-primary" type="button"  v-on:click="search('serach_btn')" value="查询">
        </div>
      </div>

      <div class="row mb-10">
        <div class="table-header">
          <div class="table-name">信用分级监管巡查列表</div>
        </div>
        <!-- table -->
        <div class="table-striped" :class="{'table-pb': tablePb}" v-el:table_parent>
          <table>
            <thead>
              <tr>
                <th>序号</th>
                <th>统一社会信用代码</th>
                <th>信用巡查编号</th>
                <th>企业名称</th>
                <th>所属管区</th>
                <th>巡查年度</th>
                <th>监管方式</th>
                <th>状态</th>
                <th>巡查日期</th>
                <th>检查任务接收人</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" v-if="list && list.length!=0">
                <td>{{(pageNo - 1) * params.pageSize + ($index + 1)}}</td>
                <td style="font-size: 14px;font-family: monospace;">{{item.registerNumber}}</td>
                <td>
                  {{item.taskNumber}}
                </td>
                <td title="{{item.name}}" class="cursor-p">
                  {{item.name && item.name.length > 10 ? item.name.substring(0,10)+"...": item.name}}
                </td>
                <td>{{item.industryArea | filter_map_key industryAreas}}</td>
                <td>{{item.annualPlan}}</td>
                <td>
                  {{item.supervisionMode | filter_map_key ratingSupervisionModes}}
                </td>
                <td>{{item.state | filter_map_key states}}</td>
                <td>{{item.createdTime ? item.createdTime.substring(0,10) : ""}}</td>
                <td>{{item.enforcementLeader}}</td>
                <td>
                  <span>
                    <a href="javascript:;"  @click="clickInfo(item.pk)"  >查看</a>
                  </span>
                </td>
              </tr>

              <tr v-if="list.length == 0">
                <td colspan="11" class="txt-c">
                  <span>~没有任何查询结果~</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- table-footer -->
        <div class="table-footer" :class="{'table-fixed': tableFooter, 'table-re': !tableFooter}" v-el:table_footer>
          <table>
            <tr>
              <td>
              </td>
              <td class="txt-r">
                <page-group 
                    :total="totalRecord"
                    :size.sync="params.pageSize"
                    :current.sync="pageNo"
                    v-on:change="changePage"></page-group>
              </td>
            </tr>
          </table>
          <div class="bottom-distance"></div>
        </div>
      </div>
    </div>

  </div>

</template>


<script type="text/javascript">
  
  import model from './model.js'
  import {menusTablePosition} from '../../vuex/getters'
  export default {

    vuex: {
      getters: {
        menusTablePosition
      },
    },
    data() {
        this.model=model(this.$http);
        return {
          industryAreas:[],
          ratingSupervisionModes:[],
          states:states,
          fiveYears:fiveYears,
          pageNo: 1,
          params: {
            pageSize: 10,
            annualPlan: fiveYears[1].name,
            industryArea:'',
            state:'',
            registerNumber:'',
            name:'',
            beginTime:'',
            endTime:''
          },
          totalRecord: 0,
          tableFooter: false,
          tablePb: false,
          list: [],
        }
    },
    route:{
      data:function(transition){
        if (transition.from.name == "credit-patrol-info") {
          this.getStorage();
        }
      }
    },
    methods:{ 
        tempSearch(type) {
        
        return this.$promise((resolve, reject) => {

          type == 'serach_btn' && (this.pageNo = 1);

          this.params.pageNo = this.pageNo || 1;

          this.model.list(this.params).then((res) => {
            if (res.data.result.results && res.data.result.results.length != 0) {
              this.list = res.data.result.results;
            }else {
              this.list = [];
            }
            this.totalRecord = res.data.result.totalRecord;
            resolve(resolve);
          }) 
        })
      },
      search(type) {
        this.tempSearch(type).then(() => {
          return this.tableFooterPosition();
        });     
      },
   
      //分页切换
      changePage(val,type){
        this.search({keyCode: 13})
      },

      tableFooterPosition() {
        if(this.$els.table_parent == null) return
        var tableWidth = this.$els.table_parent.offsetWidth;

        let offsetTop = this.$els.table_parent.offsetTop;
        let tableHeight = this.$els.table_parent.clientHeight;
         
        let clientHeight = 0;
        if (document.documentElement && document.documentElement.clientHeight) {
          clientHeight = document.documentElement.clientHeight;
        } else if (document.body) {
          clientHeight = document.body.clientHeight;
        }

        if(clientHeight-offsetTop-tableHeight <= 0){
          this.tableFooter = true;
          this.tablePb = true;
          this.$els.table_footer.style.width = tableWidth+'px';
        }else {
          this.tableFooter = false;
          this.tablePb = false;
          this.$els.table_footer.style.width = '100%';
        }

      },

      setStorage() {
        this.params.pageNo = this.pageNo;
        sessionStorage.setItem('searchData', JSON.stringify(this.params));
      },

      getStorage() {
        this.params = JSON.parse(sessionStorage.getItem('searchData'));
        this.pageNo = this.params.pageNo;
      },

      clickInfo(pk) {
        this.setStorage();
        this.$router.go({name:'credit-patrol-info', params:{pk:pk}});
      }
    },

    watch:{
      menusTablePosition(val) {
        var tableWidth = this.$els.table_parent.offsetWidth;
        this.$els.table_footer.style.width = tableWidth + 'px';
      }
    },

    computed: {
  
    },

    ready() {
      this.model.depNode({"pk":130}).then((res) => {
        //所属区域
        this.industryAreas=res.data.result;
      });
      this.model.dataList({typeId:"ratingSupervisionMode"}).then((res) => {
        //监管方式
        this.ratingSupervisionModes = res.data.result;
      });
      this.search();
    }
   
}

</script>
