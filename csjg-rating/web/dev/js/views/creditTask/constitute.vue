<template>
  <div class="main-content credit-task">
		<div class="row-auto content-header">
		  <div class="border-l pr-2"></div>
      <div class="border-l pr-10"></div>
      <span class="header-title">任务制定</span>
		</div>
		<validator name="verify">
			<form role="form">
				<div class="control-group mb-20 plr-11">
			    <div class="col-top">
						<div class="row">
			        <span class="w-130 col-top"><i class="required">*</i>制定计划时间:</span>
			        <div class="row-auto pr-20">
			          <div class="col-top" :class="{'has-error': fire && $verify.startTime.invalid}">
				          <datepicker 
	                  :readonly="true" 
	                  :value.sync="params.startTime" 
	                  :limit="[{max:params.endTime}]"
	                  :placeholder="'开始日期'" 
	                  format="YYYY-MM-DD"></datepicker>
	                <input type="hidden" v-model="params.startTime" v-validate:start-time="['required']"/>
									<div class="mandatory-msg">制定计划开始日期不能为空</div>	
			          </div>
			          <span class="col-auto plr-5  col-top">至</span>
			          <div class="col-top" :class="{'has-error' : fire && $verify.endTime.invalid}">
				          <datepicker
				           	align="right"
	                  :readonly="true" 
	                  :value.sync="params.endTime" 
	                  :limit="[{min:params.startTime}]"
	                  :placeholder="'结束日期'" 
	                  format="YYYY-MM-DD"></datepicker>
	                <input type="hidden" v-model="params.endTime" v-validate:end-time="['required']"/>
									<div class="mandatory-msg">制定计划结束日期不能为空</div>	
			          </div>
			        </div>
			      </div>
			    </div>
			    <div class="col-top">
	          <div class="row">
	            <span class="w-100  col-top"><i class="required">*</i>监管方式:</span>
	            <div class="col-top pr-20" :class="{'has-error' : fire && $verify.supervisionMode.invalid}">
	              <select class="input full input-select" v-model="params.supervisionMode"
	                      :class="{'input-select-on': params.supervisionMode!='' && params.supervisionMode!=null}" v-validate:supervision-mode="{required:true}" v-on:change="pushDate()">
									<option value="" selected>请选择</option>
									<option v-for="item in supervisionModes" :value="item.id">
										{{item.name}}
									</option>
								</select>
								<span class="mandatory-msg" v-if="fire && $verify.supervisionMode.required">
	                请选择监管方式
	              </span>
	            </div>
	          </div>
	        </div>
	        <div class="w-200 col-top"></div>
			  </div>
			</form>
 		</validator>
	  <div class="row plr-11">
	  	<div class="plan-header">
        <div class="table-name">企业筛选条件</div>
      </div>
      <div class="row plan-group">
        <div class="col pr-20">
          <div class="row">
            <span class="col w-100">计划年度:</span>
            <div class="col">
              <select class="input full input-select" v-model="companyParams.annualPlan"  :class="{'input-select-on': companyParams.annualPlan!='' && companyParams.annualPlan!=null}" >
								<option v-for="item in twoYears" :value="item.name">{{item.name}}</option>
							</select>
            </div>
          </div>
        </div>

        <div class="col pr-20">
          <div class="row">
            <span class="col w-100">归属区域:</span>
            <div class="col">
              <select class="input full input-select" v-model="companyParams.industryArea" :class="{'input-select-on': companyParams.industryArea!='' && companyParams.industryArea!=null}">
								<option value="">请选择</option>
								<option v-for="item in industryAreas" :value="item.id">{{item.name}}</option>
							</select>
            </div>
          </div>
        </div>

        <div class="col">
          <input class="btn btn-primary" type="button"  v-on:click="searchCompny()" value="选择企业">
        </div>
      </div>
	  </div>

	  <div class="row mt-20 plr-11">
      <div class="table-header row-auto">
        <div class="table-name">检查任务列表</div>
      </div>
      <!-- table -->
      <div class="table-striped" :class="{'table-pb': tablePb}" v-el:table_parent>
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>统一社会信用代码</th>
              <th>企业名称</th>
              <th>所属区域</th>
              <th>检查状态</th>
              <th>年度计划</th>
              <th>监管方式</th>
              <th>检查任务接收人</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list" v-if="list && list.length!=0" track-by="$index">
              <td>{{$index + 1}}</td>
              <td>{{item.creditCode}}</td>
              <td>{{item.name}}</td>
              <td>{{item.industryArea | filter_map_key industryAreas}}</td>
              <td>{{item.state | filter_map_key inspectStates}}</td>
              <td>{{item.annualPlan}}</td>
              <td>{{item.supervisionMode  | filter_map_key supervisionModes}}</td>
              <td>
              	<div :class="{'has-error': fire && errors[$index]}">
              		<input type="text" class="input" :class="{'input-select-on': item.enforcementLeaderName!=''}" v-model="item.enforcementLeaderName" @click="openItemDialog(item, $index)" readonly>
              	</div>
              </td>
              <!-- <td>
              	<div :class="{'has-error': fire && errors[$index]}">
									<select class="input input-select" v-model="item.enforcementLeader" :class="{'input-select-on': item.enforcementLeader!='' && item.enforcementLeader!=null}" @change="checkLeader(item.enforcementLeader, $index)">
										<option value="" selected>请选择</option>
										<option v-for="item in enforcementLeaders" :value="item.id">{{item.name}}</option>
									</select>
								</div>
              </td> -->
              <td>
                <span>
                  <a href="javascript:;" @click="openDelDialog($index)">移除</a>
                </span>
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
    </div>

		<div class="row mb-50 mt-30">
      <div class="col txt-c">
        <button type="button" class="btn btn-save mr-25" @click="save()">确认</button>
        <button type="button" class="btn btn-back" v-link="{name: 'credit-task-index'}">取消</button>
      </div>
    </div>

    <dialog :show="itemShow" title="检查任务接收人" :cb-close="closeItemDialog" :width="500">
      <div slot="dialogContent">
      	<validator name="validator">
      		<form role="form">
		       	<div class="row">
		          <span class="col-top w-100">检查任务接收人:</span>
		          <div class="col pr" id="drop_down_code"
									:class="{'has-error': fireDialog && $validator.tempUser.invalid}">
		            <input type="text" class="input full" @keyup.enter="searchUser" v-model="tempUser" debounce="200" detect-blur="off" v-validate:temp-user="{noExists: tempUser!='' && isNoExists}">
		            <div class="drop-down" v-if="isShowList">
					       	<div v-for="item in searchList" >
					       		<div class="plr-10" @click="checkUser(item)" @mouseover="showCodeActive($index)" @mouseout="hideCodeActive($index)" :class="{'drop-active': (tempIndex==$index) && isActive}">
					       			{{item.name}}
					       		</div>
					       	</div>
						   	</div>
		            <span class="mandatory-msg" v-if="fireDialog && tempUser!='' && $validator.tempUser.noExists">
		              人员不存在，请重新输入
		            </span>
		          </div>
		        </div>
		      </form>
	      </validator>
      </div>
      <div slot="dialogBtn">
        <input type="button" class="btn btn-primary mr-25" value="确定" @click="closeItemDialog('yes')">
        <input type="button" class="btn btn-primary" value="取消" @click="closeItemDialog('cancel')">
      </div>
    </dialog>

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

		<!-- 企业列表弹窗 -->
		<dialog class="plan-dialog" :show="planShow" :width="880" title="可抽取企业列表" :cb-close="closePlanDialog">
	      <div slot="dialogContent">
	        <div class="num-show mtb-12">
						根据您所设置的选取范围不同，可抽取企业家数<span class="total-num">{{totalRecord}}</span>家
					</div>
					 <div class="row mb-20">
		        <div class="table-header">
		        <div class="col pr-20">
			          <div class="row">
			            <span class="col w-100">企业名称:</span>
			            <div class="col">
			              <input class="input full" type="text" v-model="companyParams.name">
			            </div>
			          </div>
			        </div>
		          <div class="col">
			          <div class="row">
			            <span class="col w-130">统一社会信用代码:</span>
			            <div class="col">
			              <input class="input full" type="text" v-model="companyParams.creditCode">
			            </div>
			          </div>
			        </div>
			        
			        <div class="col w-200">
			          <input class="btn btn-primary" type="button"  v-on:click="searchCompny()" value="搜索">
			        </div>
		        </div>
		        <!-- table -->
		        <div class="table-striped" :class="{'table-pb': tablePb}" v-el:table_parent>
		          <table>
		            <thead>
		              <tr>
		                <th>
		                	<input type="checkbox" @click="checkAll" v-model="checkedAll"></input>
		                </th>
		                <th>序号</th>
		                <th>统一社会信用代码</th>
		                <th>企业名称</th>
		                <th>所属区域</th>
		              </tr>
		            </thead>
		            <tbody>
		              <tr v-for="item in companyList" v-if="companyList && companyList.length!=0">
		                <td><input type="checkbox" v-model="checkedIds" value="{{item.creditCode}}"></input></td>
		                <td>{{(pageNo - 1) * companyParams.pageSize + ($index + 1)}}</td>
		                <td  style="font-size: 14px;font-family: monospace;">{{item.creditCode}}</td>
		                <td>{{item.name}}</td>
		                <td>{{item.industryArea | filter_map_key industryAreas}}</td>
		              </tr>

		              <tr v-if="companyList.length==0">
		                <td colspan="5" class="txt-c">
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
		                    :size.sync="companyParams.pageSize"
		                    :current.sync="pageNo"
		                    v-on:change="changePage"></page-group>
		              </td>
		            </tr>
		          </table>
		        </div>
		      </div>

	      </div>
	      <div slot="dialogBtn" class="txt-c">
          <input type="button" class="btn btn-save mr-25" value="确定" @click="closePlanDialog('yes')">
          <input type="button" class="btn btn-back" value="取消" @click="closePlanDialog('cancel')">      
	      </div>
	  </dialog>
  </div>

</template>
<script type="text/javascript">
  import model from './model.js'

  export default {

	data() {
	  this.model = model(this.$http);
	  return {
	  	twoYears: twoYears,
	  	industryAreas:[],
	  	supervisionModes:[],
	  	inspectStates:[],
			fire: false,
			pageNo: 1,
	    params: {
	      startTime:'',
	      endTime:'',
	      createdBy:'',
	      supervisionMode:''
	    },
	    companyParams:{
	    	pageSize: 10,
				annualPlan: twoYears[1].name,
				industryArea:'',
				name:'',
				creditCode:'',
				//已选企业
				selectedCode:''
			},
	    totalRecord: 0,
	    tableFooter: false,
	    tablePb: false,
	    list: [],
	    checkedIds: [],
	    checkedAll: '',
	    delShow: false,
	    delItem:{},
	    planShow: false,
	    companyList:[],
	    errors:[],
	    itemShow: false,
			fireDialog: false,
	    isShowList: false,
	    isActive: false,
	    tempIndex:'',
	    tempItem:'',
	    itemIndex:'',
	    tempUser:'',
	    searchResult:{
	    	id:'',
	    	name:''
	    },
	    searchId:'',
	    tempResult:'',
	    searchList:[],
	    isNoExists: false
	  }
	},

	methods: {
		pushDate(){
			var arr = this.list;
			arr.forEach((item)=>{
				item.supervisionMode = this.params.supervisionMode;
			})
			this.list = this.$parse(arr);
		},

		checkLeader(val, index) {

			var tempErrors = this.$parse(this.errors);

			if(val == "") {
				tempErrors[index] = true;
			}else {
				tempErrors[index] = false;
			}

			this.errors = this.$parse(tempErrors);
		},

	  save() {
		  this.fire = true;	

		  var tempErrors = [];

  		tempErrors.length = this.list.length;

  		for(var i=0; i<this.errors.length; i++) {
  			tempErrors[i] = false;
  		}
  		
  		for(var i=0; i<this.list.length; i++) {
  			if(this.list[i].enforcementLeader == "") {
  				tempErrors[i] = true;
  			}else {
  				tempErrors[i] = false;
  			}
  		}

  		this.errors = this.$parse(tempErrors);

  		if(this.list.length == 0){
      	Message.show('error','请先选择企业',3);
      	return
      }

  		for(var i=0; i<this.errors.length; i++) {
  			if(this.$verify.invalid || !!this.errors[i]) {
  				Message.show('error','请检查表单标红字段',3);
  		  	return
  			}
  		}

  		var tempList = this.$parse(this.list);

    	tempList.forEach((item)=>{
    		item.startTime = this.params.startTime;
				item.endTime = this.params.endTime;
				item.createdBy = this.params.createdBy;
				delete item.state;
				delete item.name;
				delete item.industryArea;
    	})

    	this.model.add(JSON.stringify(tempList)).then(res => {
        Message.show('success', '保存成功', 2, () => {
          this.$router.go({name: 'credit-task-index'});
        })
      });

      this.fire = false;

	  },

	  //搜索企业
	  searchCompny(){

      this.companyParams.pageNo = this.pageNo || 1;

	  	var arr=[];
	  	this.list.forEach((item)=>{
	  		arr.push(item.creditCode);
	  	})
	  	
	  	this.companyParams.selectedCode = arr.join(',');
	  	this.model.companyList(this.companyParams).then(res=> {
	  		this.companyList = res.data.result.results;
	  		this.totalRecord = res.data.result.totalRecord;
	  		
	  	})
	  	this.planShow = true;
	  	this.companyParams.selectedCode = '';

	  },
	  
	  closePlanDialog(type){
	  	switch(type){
	  		case "yes":
	  			if(this.checkedIds.length == 0){
		        Message.show('error','请选择企业',2)
		        return
		      }

			    var arr = this.$parse(this.companyList), tempList = [];
			      
		      arr.forEach((item)=>{
		      	item.annualPlan = this.companyParams.annualPlan;
						// 默认检测状态
						item.state = "1";
						item.supervisionMode = this.params.supervisionMode;
						item.enforcementLeaderName = '';
						item.enforcementLeader = '';

		      	for(var i=0; i<this.checkedIds.length; i++) {
		      		if(item.creditCode == this.checkedIds[i]) {
		      			tempList.push(item);
		      		}
		      	}
					})

					this.list = tempList;

	  			break;
	  		case "cancel":
	  			break;
	  	}
	  	
	  	this.planShow = false;
	  	this.checkedIds = [];
	  	this.companyList = [];
	  },
	 
	  //全选
	  checkAll() {
      if(this.checkedAll){
        this.checkedIds = [];
      }else{
        this.checkedIds = [];
        for (let item of this.companyList) {
          this.checkedIds.push(item.creditCode.toString());
        }
      }
    },

    openItemDialog(item, index) {
    	this.itemShow = true;
    	this.tempItem = item;
    	this.itemIndex = index;
    },

    closeItemDialog(type) {
    	switch(type){
        case 'yes':
        	this.fireDialog = true;

        	if(this.$validator.invalid){
				    Message.show('error','请检查表单标红字段',3);
				    return
					}

					this.list.forEach((item) => {
						if(item == this.tempItem) {
							item.enforcementLeader = this.searchResult.id;
							item.enforcementLeaderName = this.searchResult.name;
						}
					})

					this.checkLeader(this.searchResult.id, this.itemIndex);
          break;
        case 'cancel':
          break;
      }

      this.itemShow = false;
      this.tempItem = '';
      this.tempUser = '';
      this.searchResult = {
  			id:'',
  			name:''
  		}
  		this.fireDialog = false;
    },
      
    // 检查任务接收人模糊查询
    searchUser() {
      this.model.depUser({value: this.tempUser}).then(res => {
        this.searchList = res.data.result;
        if(res.data.result && res.data.result.length != 0) {
      		this.isShowList = true;
      	}else {
      		this.isShowList = false;
      	}
      })
    },

    checkUser(item) {
			this.tempUser = item.name;
			this.searchResult = item;
			this.searchId = item.id;
			this.isShowList = false;
		},

    showCodeActive(index) {
      this.tempIndex = index;
      this.isActive = true;
    },

    hideCodeActive(index) {
      this.tempIndex = index;
      this.isActive = false;
    },

    // 展示删除框
    openDelDialog(index){
      this.delShow = true;
      this.delIndex = index;
    },
    
    // 关闭删除弹框
    closeDelDialog(type) {
      switch(type){
        case 'yes':
        	this.list.splice(this.delIndex, 1);
        	this.errors.splice(this.delIndex, 1)
          break;
        case 'cancel':
          break;
      }
      this.delShow = false;
    },

    //分页切换
    changePage(val,type){
      this.searchCompny({keyCode: 13})
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
      }else {
        this.tableFooter = false;
        this.tablePb = false;
        this.$els.table_footer.style.width = '100%';
      }

    }
	},

	validators: {
    noExists: {
      check(value,condition) {
        let $this = this.vm;
        if(value == null || value.trim() == ''){
           return true;
        }
         
       $this.model.isExist({userId: $this.searchResult.id}).then(function(res) {
          if(!res.data.result) {
            $this.isNoExists = true;
          }else {
            $this.isNoExists = false;
          }
        })
        
        return !condition;
      }
    }
  },

	computed: {

    checkedAll () {

      return this.checkedIds.length != 0 && this.checkedIds.length == this.companyList.length;
    }
  },
	watch: {
		tempUser(val){
			this.searchList = [];
			if(val == '') return
    	if(this.searchId == '') {
    		this.searchUser();
    	}else {
    		this.searchId = '';
    	}

    }
	},

	ready() {
		var userInfo=this.$local_store.get("userInfo");
		this.params.createdBy=userInfo.account;

		this.model.dataList({typeId:"ratingSupervisionMode"}).then((res) => {
			//监管方式
      this.supervisionModes = res.data.result;
		})

		this.model.dataList({typeId:"inspectState"}).then((res) => {
			//检查状态
      this.inspectStates = res.data.result;
		})

		this.model.depNode({pk: 130}).then((res) => {
			//所属区域
      this.industryAreas=res.data.result;
		})

		var drop_down_code = document.getElementById('drop_down_code');
    window.addEventListener('click',(e)=> {
      if(!drop_down_code.contains(e.target)){
        this.isShowList = false;
      }
    })
		
	}
}
</script>