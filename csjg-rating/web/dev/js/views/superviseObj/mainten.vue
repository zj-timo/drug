<template>
  <div class="main-content">
	  <div class="orient-plan-content">
			<div class="row-auto content-header">
	      <div class="border-l pr-2"></div>
	      <div class="border-l pr-10"></div>
	      <span class="header-title">检查对象维护</span>
        <div class="col"></div>
	    </div>

			<validator name="verify">
        <div class="message-warn">温馨提示：请将市场主体添加为专业市场再进行年度计划名单制定</div>
  			<div class="control-group-auto mb-20 plr-11">
	        <div class="col-auto pr-10"><i class="required">*</i>选择检查年度:</div>
	        <div class="col"
               :class="{'has-error': fire && $verify.annualPlan.invalid}">
            <select class="input input-select" v-model="params.annualPlan" :class="{'input-select-on': params.annualPlan!='' && params.annualPlan!=null}" v-validate:annual-plan="{required:true}" @change="search()">
							<option v-for="item in twoYears" :value="item.name">{{item.name}}</option>
						</select>
            <span class="mandatory-msg" v-if="fire && $verify.annualPlan.required">
              请选择检查年度
            </span>
          </div>
	      </div>
		  </validator>
		  <div class="row plr-11" v-el:table>
        <div class="table-header row-auto">
          <div class="table-name">年度计划名单</div>
          <div class="col"></div>
        </div>
        <!-- table -->
        <div class="table-striped" :class="{'table-pb': tablePb}" v-el:table_parent>
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" @click="checkAll" v-model="checkedAll"/></th>
                <th>序号</th>
                <th>统一社会信用代码</th>
                <th>主体名称</th>
                <th>主体地址</th>
                <th>所属管区</th>
                <th>所属行业</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" v-if="list && list.length!=0">
                <td><input type="checkbox" v-model="checkedIds" value="{{item.creditCode}}"/>
                </td>
                <td>{{(pageNo - 1) * params.pageSize + ($index + 1)}}</td>
                <td style="font-size: 14px;font-family: cursive;">{{item.creditCode}}</td>
                <td title="{{item.name}}" class="cursor-p">
                  {{item.name.length > 10 ? item.name.substring(0,10)+"...": item.name}}
                </td>
                <td>{{item.address}}</td>
                <td>{{item.industryArea | filter_map_key industryAreas}}</td>
                <td title="{{item.industryOwned}}" class="cursor-p">
                  {{item.industryOwned.length > 10 ? item.industryOwned.substring(0,10)+"...": item.industryOwned}}
                </td>
              </tr>

              <tr v-if="list.length == 0">
                <td colspan="7" class="txt-c">
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
          <div class="bottom-distance-big">
            <div class="txt-c">
              <button type="button" class="btn btn-save mr-25" @click="save()">保存</button>
              <button type="button" class="btn btn-back" @click="clickBack()">返回</button>
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
	  this.model = model(this.$http);
	  return {
      twoYears:twoYears,
			fire: false,
      pageNo: 1,
	    params: {
        pageSize: 10,
	      annualPlan: twoYears[1].name
	    },
      totalRecord: 0,
	    tableFooter: false,
	    tablePb: false,
	    list: [],
	    checkedIds: [],
	    checkedAll: '',
      industryOwneds: [],
      industryAreas:[],
      createdBy:''
	  }
	},

	methods: {
    tempSearch(type) {
        
        return this.$promise((resolve, reject) => {

          type == 'serach_btn' && (this.pageNo = 1);

          this.params.pageNo = this.pageNo || 1;

          this.model.companyList(this.params).then((res) => {
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
	  save(type) {
      this.fire = true;

      if (this.$verify.invalid) {
        Message.show('error', '请检查表单标红字段', 3);
        return
      }

      if(this.checkedIds.length==0){
        Message.show('error','请选择监管对象',3);
        return
      }

      var userInfo=this.$local_store.get("userInfo");
      this.createdBy=userInfo.account;

      var arr = [];
      this.checkedIds.forEach((item)=>{
        arr.push({annualPlan:this.params.annualPlan,creditCode:item,createdBy:this.createdBy})
      })

      this.model.add(JSON.stringify(arr)).then(res => {
        Message.show('success', '保存成功', 2, () => {
          this.$router.go({name: 'supervise-obj-index'});
        })
      });

	  },

    clickBack() {
      this.$router.go({name: 'supervise-obj-index'});
    },

	  //全选
	  checkAll() {
      if(this.checkedAll){
        this.checkedIds = [];
      }else{
        this.checkedIds = [];
        for (let item of this.list) {
          this.checkedIds.push(item.creditCode.toString());
        }
      }
    },

    //分页切换
    changePage(val,type){
      this.search({keyCode: 13})
    },

    tableFooterPosition() {

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
        this.$els.table.style['margin-bottom'] = '98px';
      }else {
        this.tableFooter = false;
        this.tablePb = false;
        this.$els.table_footer.style.width = '100%';
      }

    }
	},

  computed: {

    checkedAll () {

      return this.checkedIds.length != 0 && this.checkedIds.length == this.list.length;
    }
      
  },

	watch: {
		
	},


	ready() {
    this.model.dataList({typeId:"companyClass"}).then((res) => {
      //所属行业
      this.industryOwneds = res.data.result;
    });

    this.model.depNode({pk: 130}).then((res) => {
      //所属区域
      this.industryAreas=res.data.result;
    });

    this.search()
	}
	
}
</script>