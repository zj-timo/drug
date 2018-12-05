
<template>
  <div class="main-content" v-el:main_content>
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">年度监管对象管理</span>
      <div class="col"></div>
      <div class="col-auto">
        <input class="btn btn-info" type="button" @click="clickSuperviseObj()"  value="检查对象维护">
      </div>
    </div>

    <div class="plr-11">
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-70">企业名称:</span>
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
            <span class="col w-130">所属行业:</span>
            <div class="col">
              <select class="input full input-select" v-model="params.industryOwned" :class="{'input-select-on': params.industryOwned!='' && params.industryOwned!=null}">
                <option value="">请选择</option>
                <option v-for="item in industryOwnedsAll" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
       <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-70">所属管区:</span>
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
            <span class="col w-130">检查年度:</span>
            <div class="col">
              <select class="input full input-select" v-model="params.annualPlan" :class="{'input-select-on': params.annualPlan!='' && params.annualPlan!=null}">
                <option value="">请选择</option>
                <option v-for="item in fiveYears" :value="item.name">{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col float-r">
          <input class="btn btn-primary" type="button"  v-on:click="search('serach_btn')" value="查询">
        </div>

      </div>

      <div class="row mb-10">
        <div class="table-header">
          <div class="table-name">检查对象列表</div>
        </div>
        <!-- table -->
        <div class="table-striped" :class="{'table-pb': tablePb}" v-el:table_parent>
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" @click="checkAll" v-model="checkedAll"></input></th>
                <th>序号</th>
                <th>统一社会信用代码</th>
                <th>企业名称</th>
                <th>所属行业</th>
                <th>主体地址</th>
                <th>检查年度</th>
                <th>所属管区</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" v-if="list && list.length!=0">
                <td><input type="checkbox" v-model="checkedIds" value="{{item.pk}}"></input></td>
                <td>{{(pageNo - 1) * params.pageSize + ($index + 1)}}</td>
                <td style="font-size: 14px;font-family: monospace;">{{item.creditCode}}</td>
                <td title="{{item.name}}" class="cursor-p">
                  {{item.name.length > 10 ? item.name.substring(0,10)+"...": item.name}}
                </td>
                <td title="{{item.industryOwned}}" class="cursor-p">
                  {{item.industryOwned.length > 10 ? item.industryOwned.substring(0,10)+"...": item.industryOwned}}
                </td>
                <td>{{item.address}}</td>
                <td>{{item.annualPlan}}</td>
                <td>{{item.industryArea | filter_map_key industryAreas}}</td>
              </tr>

              <tr v-if="list.length == 0">
                <td colspan="8" class="txt-c">
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
                <input type="checkbox" class="mr-10" @click="checkAll" v-model="checkedAll"></input>
                <button class="btn btn-gray" @click="downExcel()">导出</button>
                <button class="btn btn-gray" @click="delBatch()">删除</button>
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

    <dialog :show="delShow" title="警告" :cb-close="closeDelDialog">
      <div slot="dialogContent">
        <i class="icon warn-icon">&#xe63a;</i>
        <span>您确定要删除这条信息吗？</span>
      </div>
      <div slot="dialogBtn">
        <input type="button" class="btn btn-primary mr-25" value="确定" @click="closeDelDialog('yes')">
        <input type="button" class="btn btn-primary" value="取消" @click="closeDelDialog('cancel')">
      </div>
    </dialog>

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
        fiveYears:fiveYears,
        pageNo: 1,
        params: {
          pageSize: 10,
          name:'',
          creditCode:'',
          industryOwned:'',
          industryArea:'',
          annualPlan: fiveYears[1].name
        },
        totalRecord: 0,
        tableFooter: false,
        tablePb: false,
        list: [],
        checkedIds: [],
        checkedAll: '',
        delShow: false,
        industryOwneds: [],
        industryAreas:[],
        industryOwnedsAll:[]
      }
    },
   route:{
      data:function(transition){
        if (transition.from.name == "supervise-obj-mainten") {
          this.getStorage();
        }
      }
    },
    methods:{ 
      downExcel(){

        var excelParams = this.$parse(this.params);
        delete excelParams.pageSize;
        delete excelParams.pageNo;

        var token = this.$get_cookie('token');
        excelParams.accessToken = token;

        var arr=[];
        for(var key in excelParams){
          if(excelParams.hasOwnProperty(key)){
           arr.push(key+'='+excelParams[key])
         }
        }

        window.open('/csjg-sys/ratingSupervisionObject/exportExcel?'+arr.join('&'));

      },
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
      checkAll() {
        if(this.checkedAll){
          this.checkedIds = [];
        }else{
          this.checkedIds = [];
          for (let item of this.list) {
            this.checkedIds.push(item.pk.toString());
          }
        }
      },
      //展示批量删除框
      delBatch(){

        if(this.checkedIds.length == 0){
          Message.show('error','请选择删除项',2)
          return
        }
        this.delShow=true;
      },
      
      // 关闭删除弹框
      closeDelDialog(type) {
        switch(type){
          case 'yes':
            this.model.del(JSON.stringify(this.checkedIds)).then(res => {
              this.search();
            });
            break;
          case 'cancel':
            break;
        }
        this.checkedIds = [];
        this.delShow=false;
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

      clickSuperviseObj(pk) {
        this.setStorage();
        this.$router.go({name:'supervise-obj-mainten'});
      },

   
    },

    watch:{
      menusTablePosition(val) {
        var tableWidth = this.$els.table_parent.offsetWidth;
        this.$els.table_footer.style.width = tableWidth + 'px';
      }
    },

    computed: {

      checkedAll () {

        return this.checkedIds.length != 0 && this.checkedIds.length == this.list.length
      }
        
    },

    ready() {

      this.model.dataList({typeId:"companyClass"}).then((res) => {
        //所属行业
        this.industryOwneds = res.data.result;
      })

      this.model.dataList({typeId:"companyClassAll"}).then((res) => {
        //所属行业 模糊查询
        this.industryOwnedsAll = res.data.result;
      })

      this.model.depNode({pk: 130}).then((res) => {
        //所属区域
        this.industryAreas=res.data.result;
      })
      this.search();   
    }
   
}

</script>
