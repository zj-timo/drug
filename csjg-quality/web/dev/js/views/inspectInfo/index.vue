<template>
  <div class="main-content" v-el:main_content>
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">检查记录查询</span>
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
              <input type="text" class="input full" placeholder="" v-model="params.creditCode">
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <span class="col w-130">所属管区:</span>
            <div class="col">
              <select class="input full input-select" v-model="params.industryArea" :class="{'input-select-on': params.industryArea!='' && params.industryArea!=null}">
                <option value="">请选择</option>
                <option v-for="item in industryArea" :value="item.id">
                  {{item.name}}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-100">检查年度:</span>
            <div class="col">
              <select class="input full input-select" v-model="params.annualPlan" :class="{'input-select-on': params.annualPlan!='' && params.annualPlan!=null}">
                <option value="">请选择</option>
                <option v-for="item in fiveYears" :value="item.name">{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <span class="col w-130">检查类型:</span>
            <div class="col">
              <select class="input full input-select" v-model="params.inspectionType" :class="{'input-select-on': params.inspectionType!='' && params.inspectionType!=null}">
                <option value="">请选择</option>
                <option v-for="item in qualityInspectionTypes1" :value="item.id">
                  {{item.name}}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <span class="col w-130">状态:</span>
            <div class="col">
              <select class="input full input-select" v-model="params.state" :class="{'input-select-on': params.state!='' && params.state!=null}">
                <option value="">请选择</option>
                <option v-for="item in inspectTypes" :value="item.id">
                  {{item.name}}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-100">计划时间:</span>
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
        <div class="col">
        </div>
        <div class="col txt-r">
          <input class="btn btn-primary" type="button" v-on:click="search('serach_btn')" value="查询">
        </div>
      </div>
      <div class="row mb-10">
        <div class="table-header">
          <div class="table-name">检查记录列表</div>
        </div>
        <!-- table -->
        <div class="table-striped" :class="{'table-pb': tablePb}" v-el:table_parent>
          <table>
            <thead>
              <tr>
                <th>序号</th>
                <th>统一社会信用代码</th>
                <th>计划期数</th>
                <th>企业名称</th>
                <th>所属管区</th>
                <th>检查年度</th>
                <th>检查类型</th>
                <th>状态</th>
                <th>开始时间</th>
                <th>结束时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" v-if="list && list.length!=0">
                <td>{{(pageNo - 1) * params.pageSize + ($index + 1)}}</td>
                <td style="font-size: 14px;font-family: monospace;">{{item.creditCode}}</td>
                <td>{{item.plannedNumber}}</td>
                <td>{{item.name}}</td>
                <td>{{item.industryArea | filter_map_key industryArea}}</td>
                <td>{{item.annualPlan}}</td>
                <td>{{item.inspectionType | filter_map_key qualityInspectionTypes1}}</td>
                <td>{{item.state | filter_map_key inspectTypes}}</td>
                <td>{{item.startTime}}</td>
                <td>{{item.endTime}}</td>
                <td>
                  <span>
                    <a href="javascript:;" @click="clickInfo(item.pk)">查看</a>
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
              <td class="txt-r">
                <page-group :total="totalRecord" :size.sync="params.pageSize" :current.sync="pageNo" v-on:change="changePage">
                </page-group>
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
import { menusTablePosition } from '../../vuex/getters'
export default {

  vuex: {
    getters: {
      menusTablePosition
    },
  },
  data() {
    this.model = model(this.$http);
    return {
      pageNo: 1,
      params: {
        pageSize: 10,
        name: '',
        creditCode: '',
        industryArea: '',
        annualPlan: '',
        inspectionType: '',
        state: '',//1 待复查 2 已检查
        startTime: '',
        endTime: ''
      },
      totalRecord: 0,
      tableFooter: false,
      tablePb: false,
      list: [],
      qualityInspectionTypes1: [],
      industryArea: [],
      fiveYears: fiveYears,
      inspectTypes: inspectTypes
    }
  },

  route: {
    data: function(transition) {
      if(transition.from.name == 'inspect-info-info') {
        this.getStorage();
      }
    }
  },

  methods: {

    tempSearch(type) {

      return this.$promise((resolve, reject) => {

        type == 'serach_btn' && (this.pageNo = 1);

        this.params.pageNo = this.pageNo || 1;

        this.model.list(this.params).then((res) => {
          if (res.data.result.results && res.data.result.results.length != 0) {
            this.list = res.data.result.results;
          } else {
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
    changePage(val, type) {
      this.search({ keyCode: 13 })
    },

    tableFooterPosition() {

      if (this.$els.table_parent == null) return

      var tableWidth = this.$els.table_parent.offsetWidth;

      let offsetTop = this.$els.table_parent.offsetTop;
      let tableHeight = this.$els.table_parent.clientHeight;

      let clientHeight = 0;
      if (document.documentElement && document.documentElement.clientHeight) {
        clientHeight = document.documentElement.clientHeight;
      } else if (document.body) {
        clientHeight = document.body.clientHeight;
      }

      if (clientHeight - offsetTop - tableHeight <= 0) {
        this.tableFooter = true;
        this.tablePb = true;
        this.$els.table_footer.style.width = tableWidth + 'px';
      } else {
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
      this.$router.go({name:'inspect-info-info', params:{pk:pk}});
    }
  },

  watch: {
    menusTablePosition(val) {
      var tableWidth = this.$els.table_parent.offsetWidth;
      this.$els.table_footer.style.width = tableWidth + 'px';
    }
  },

  ready() {
    //检查类型
    this.model.dataList({ typeId: "qualityInspectionType1" }).then(res => {
      this.qualityInspectionTypes1 = res.data.result;
    })
    //所属区域
    this.model.depNode({ pk: 130 }).then((res) => {

      this.industryArea = res.data.result;
    })

    this.search();
  }

}
</script>