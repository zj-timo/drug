
<template>
  <div class="main-content" v-el:main_content>
    <div class="row-auto content-header">
      <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">市场主体管理</span>
      <div class="col"></div>
      <!-- <div class="col-auto">
        <input class="btn btn-info" type="button" v-link="{name: 'supervisory-project-new'}" value="新增">
      </div> -->
    </div>

    <div class="plr-11">
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
            <span class="col w-130">市场主体类型:</span>
            <div class="col">
              <select class="input full input-select" v-model="params.companyType" :class="{'input-select-on': params.companyType!='' && params.companyType!=null}">
                <option value="">请选择</option>
                <option v-for="item in companyTypes" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>

         <div class="col">
          <div class="row">
            <span class="col w-130">市场主体状态:</span>
            <div class="col">
              <select class="input full input-select" v-model="params.state" :class="{'input-select-on': params.state!='' && params.state!=null}">
                <option value="">请选择</option>
                <option v-for="item in companyStates" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="control-group">
        <div class="col">
          <div class="row">
            <span class="col w-100">市场主体标签:</span>
            <div class="col">
              <select class="input full input-select" v-model="params.companyLabel" :class="{'input-select-on': params.companyLabel!='' && params.companyLabel!=null}">
                <option value="">请选择</option>
                <option v-for="item in companyLabels" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="row">
            <span class="col w-130">市场主体名称:</span>
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
      </div>

      <div class="control-group">
         <div class="col">
          <div class="row">
            <span class="col w-100">所属行业:</span>
            <div class="col">
              <select class="input full input-select" v-model="params.industryOwned" :class="{'input-select-on': params.industryOwned!='' && params.industryOwned!=null}">
                <option value="">请选择</option>
                <option v-for="item in industryOwnedsAll" :value="item.id">{{item.name}}</option>
              </select>
            </div>
          </div>
         </div>

        <div class="col"></div>

        <div class="col txt-r">
          <input class="btn btn-primary" type="button"  v-on:click="search('serach_btn')" value="查询">
        </div>
      </div>

      <div class="row mb-10">
        <div class="table-header">
          <div class="table-name">市场主体列表</div>
        </div>
        <!-- table -->
        <div class="table-striped" :class="{'table-pb': tablePb}" v-el:table_parent>
          <table>
            <thead>
              <tr>
                <th>序号</th>
                <th>统一社会信用代码</th>
                <th>主体名称</th>
                <th>主体地址</th>
                <th>法定代表人</th>
                <th>所属行业</th>
                <th>主体类型</th>
                <th>所属管区</th>
                <th>主体状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" v-if="list && list.length!=0">
                <td>{{(pageNo - 1) * params.pageSize + ($index + 1)}}</td>
                <td style="font-size: 14px;font-family: monospace;">{{item.registerNumber}}</td>
                <td title="{{item.name}}" class="cursor-p">
                  {{item.name.length > 10 ? item.name.substring(0,10)+"...": item.name}}
                </td>
                <td title="{{item.address}}" class="cursor-p">
                  {{item.address.length > 10 ? item.address.substring(0,10)+"...": item.address}}
                </td>
                <td>{{item.legalRepresentative}}</td>
                <td title="{{item.industryOwned}}" class="cursor-p">
                  {{item.industryOwned.length > 10 ? item.industryOwned.substring(0,10)+"...": item.industryOwned}}
                </td>
                <td>{{item.companyType  | filter_map_key companyTypes}}</td>
                <td>{{item.industryArea | filter_map_key industryAreas}}</td>
                <td>{{item.state  | filter_map_key companyStates}}</td>
                <td>
                  <span>
                    <a href="javascript:;" @click="clickInfo(item.pk)" >查看</a>
                  </span>
                  <span v-show="!!item.showEdit">|</span>
                  <span>
                    <a href="javascript:;"  @click="clickEdit(item.pk)" v-show="!!item.showEdit">编辑专业市场</a>
                  </span>
                </td>
              </tr>

              <tr v-if="list.length == 0">
                <td colspan="10" class="txt-c">
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
                <!-- <input type="checkbox" class="mr-10" @click="checkAll" v-model="checkedAll"></input> -->
                <!-- <button class="btn btn-table" @click="delBatch()">批量删除</button> -->
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
          companyTypes:[],
          companyLabels:[],
          industryOwneds:[],
          companyStates:[],
          pageNo: 1,
          params: {
            pageSize: 10,
            industryArea:'',
            companyType:'',
            state:'',
            companyLabel:'06',
            name:'',
            registerNumber:'',
            industryOwned:''
          },
          totalRecord: 0,
          tableFooter: false,
          tablePb: false,
          list: [],
          checkedIds: [],
          checkedAll: '',
          industryOwnedsAll:[]
        }
    },
     route:{
      data:function(transition){
        if (transition.from.name == "market-main-info" || transition.from.name == "market-main-edit") {
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
             this.has06(res.data.result.results);
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
      
       // 判断字符串是否在数组中
      contains(arr, obj) {  
        var i = arr.length;  
        while (i--) {  
            if (arr[i] === obj) {  
                return true;  
            }  
        }  
        return false;  
      }, 
      //判断主体市场标签是否存在
      has06(list){
        list.forEach((item)=>{
          if(item.companyLabel!=''&&item.companyLabel!=null){
            var arr=[];
            arr = item.companyLabel.split(",");
            if(this.contains(arr, "06")){
              item.showEdit=true;
            }else{
              item.showEdit=false;
            }
          }
        })
        this.list=list;
      },
      checkAll() {
        if(this.checkedAll){
          this.checkedIds = [];
        }else{
          this.checkedIds = [];
          for (let item of this.list) {
            this.checkedIds.push(item.companyPk.toString());
          }
        }
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

      clickEdit(pk) {
        this.setStorage();
        this.$router.go({name:'market-main-edit', params:{pk:pk}});
      },

      clickInfo(pk) {
        this.setStorage();
        this.$router.go({name:'market-main-info', params:{pk:pk}});
      }
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
      this.model.dataList({typeId:"companyState"}).then((res) => {
        //企业状态
        this.companyStates=res.data.result;
      })
      
      this.model.dataList({typeId:"companyClass"}).then((res) => {
        //企业分类/行业
        this.industryOwneds=res.data.result;
      })
      this.model.dataList({typeId:"companyClassAll"}).then((res) => {
        //企业分类/行业 模糊查询
        this.industryOwnedsAll=res.data.result;
      })
      
      this.model.dataList({typeId:"companyLabel"}).then((res) => {
        //主体标签
        this.companyLabels=res.data.result;
      })
      this.model.dataList({typeId:"companyType"}).then((res) => {
        //主体类型
        this.companyTypes=res.data.result;
      })
      this.model.depNode({pk: 130}).then((res) => {
        //所属区域
        this.industryAreas=res.data.result;
      })
      this.search();
    }
}

</script>
