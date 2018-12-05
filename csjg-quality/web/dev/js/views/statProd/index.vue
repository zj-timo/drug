<template>
  <div class="main-content" v-el:main_content>
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">统计分析>工业产品生产许可证</span>
      <div class="col"></div>
      <div class="col-auto">
        <input class="btn btn-info" type="button" @click="downExcel()" value="导出">
      </div>
    </div>
    <div class="plr-11">
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-70">开始时间:</span>
              <div class="col">
                <datepicker
                  :readonly="true"
                  :value.sync="params.startTime"
                  :limit="[{max:params.endTime}]"
                  :placeholder="'开始日期'" format="YYYY-MM-DD">
                </datepicker>
              </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <span class="col w-100">结束时间:</span>
              <div class="col">
                <datepicker
                   align="right"
                   :readonly="true"
                   :value.sync="params.endTime"
                   :limit="[{min:params.startTime}]"
                   :placeholder="'结束日期'"
                   format="YYYY-MM-DD">
                </datepicker>
              </div>
          </div>
        </div>
        <div class="col txt-r">
          <input class="btn btn-primary" type="button" v-on:click="search('serach_btn')" value="查询">
        </div>
      </div>
      <div class="row">
        <div class="table-header">
          <div class="table-name">工业产品生产许可证</div>
        </div>
        <!-- table -->
        <div class="table-striped" :class="{'table-pb': tablePb}" v-el:table_parent>
          <table>
            <thead>
              <tr>
                <th>序号</th>
                <th>企业名称</th>
                <th>社会信用代码</th>
                <th>产品类别</th>
                <th>产品名称</th>
                <th>风险类别</th>
                <th>原级别</th>
                <th>现级别</th>
                <th>级别升降</th>
                <th>评价得分</th>
                <th>有无否决项</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" v-if="list && list.length!=0">
                <td>{{(pageNo - 1) * params.pageSize + ($index + 1)}}</td>
                <td>{{item.name}}</td>
                <td style="font-size: 14px;font-family: monospace;">{{item.creditCode}}</td>
                <td>{{item.productType}}</td>
                <td>{{item.productName}}</td>
                <td>{{item.evaluateType | filter_map_key evaluateTypes}}</td>
                <td>{{item.oldLevel}}</td>
                <td>{{item.nowLevel}}</td>
                <td>{{item.changeLevel}}</td>
                <td>{{item.evaluateBranch}}</td>
                <td>{{item.isNo}}</td>
                <td title="{{item.remarks}}" class="cursor-p">
                  {{item.remarks.length > 12 ? item.remarks.substring(0,10)+"...":item.remarks}}
                </td>
              </tr>
              <tr v-if="list.length == 0">
                <td colspan="9" class="txt-c">
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
export default {
  data() {
    this.model = model(this.$http);
    return {
      pageNo: 1,
      params: {
        pageSize: 10,
        startTime: '',
        endTime: ''
      },
      totalRecord: 0,
      tableFooter: false,
      tablePb: false,
      list: [],
      evaluateTypes: evaluateTypes
    }
  },
  methods: {
    // 导出
    downExcel() {
      var excelParams = this.$parse(this.params);
      delete excelParams.pageSize;
      delete excelParams.pageNo;
      var arr = []
      for (var key in excelParams) {
        if (excelParams.hasOwnProperty(key)) {
          arr.push(key + '=' + excelParams[key])
        }
      }
      window.open('/csjg-sys/qualityCount/industryExcel?' + arr.join('&'));
    },
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

    }

  },
  
  ready() {
    this.search();
  }
}
</script>