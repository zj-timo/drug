<template>
  <div class="main-content">
	  <div class="orient-plan-content">
			<div class="row-auto content-header">
			  <div class="border-l pr-2"></div>
	      <div class="border-l pr-10"></div>
	      <span class="header-title">质量监管检查计划>计划制定</span>
			</div>
			<validator name="verify">
				<div class="control-group mb-20 plr-11">
			    <div class="col-top">
						<div class="row">
			        <span class="w-100 col-top"><i class="required">*</i>计划时间:</span>
			        <div class="row-auto">
			          <div class="col-top" :class="{'has-error' : fire && $verify.startTime.invalid}">
				          <datepicker 
	                  :readonly="true" 
	                  :value.sync="params.startTime" 
	                  :limit="[{max:params.endTime}]"
	                  :placeholder="'开始日期'" 
	                  format="YYYY-MM-DD"></datepicker>
	                <input type="hidden" v-model="params.startTime" v-validate:start-time="['required']"/>
									<div class="mandatory-msg">计划检查开始日期不能为空</div>	
			          </div>
			          <span class="col-auto plr-5  col-top">至</span>
			          <div class="col-top" :class="{'has-error' : fire && $verify.endTime.invalid}">
				           <datepicker 
	                  :readonly="true" 
	                  :value.sync="params.endTime" 
	                  :limit="[{min:params.startTime}]"
	                  :placeholder="'结束日期'" 
	                  format="YYYY-MM-DD"></datepicker>
	                 <input type="hidden" v-model="params.endTime" v-validate:end-time="['required']"/>
									<div class="mandatory-msg">计划检查结束日期不能为空</div>	
			          </div>
			        </div>
			      </div>
			    </div>
			    <div class="col-top">
	          <div class="row">
	            <span class="w-100  col-top"><i class="required">*</i>检查类型:</span>
	            <div class="col-top" :class="{'has-error' : fire && $verify.inspectionType.invalid}">
	              <select class="input full input-select" v-model="params.inspectionType" :class="{'input-select-on': params.inspectionType!='' && params.inspectionType!=null}" v-validate:inspection-type="{required:true}">
									<option value="" selected>请选择</option>
									<option v-for="item in qualityInspectionTypes" :value="item.id">{{item.name}}</option>
								</select>
								<span class="mandatory-msg" v-if="fire && $verify.inspectionType.required">
	                请选择检查类型
	              </span>
	            </div>
	          </div>
	        </div>
	        <div class="w-200  col-top"></div>
			  </div>

				<div class="control-group mb-20 plr-11">
			    <div class="col-top">
						<div class="row">
		            <span class="w-100  col-top">计划年度:</span>
		            <div class="col">
		              <select class="input full input-select" v-model="companyParams.annualPlan"  :class="{'input-select-on': companyParams.annualPlan!='' && companyParams.annualPlan!=null}" >
										<option v-for="item in fiveYears" :value="item.name">{{item.name}}</option>
									</select>
		            </div>
		          </div>
			    </div>
			    <div class="col-top">
	        </div>
	        <div class="w-200  col-top"></div>
			  </div>

			  <div class="row plr-11">
			  	<div class="plan-header">
		        <div class="table-name">抽取企业</div>
		      </div>
		      <div class="plan-group">

		        <div class="col-top">
		          <div class="row">
		            <span class="w-100  col-top">所属管区:</span>
		            <div class="col">
		              <select class="input full input-select" v-model="companyParams.industryArea" :class="{'input-select-on': companyParams.industryArea!='' && companyParams.industryArea!=null}">
										<option value="">请选择</option>
										<option v-for="item in industryAreas" :value="item.id">{{item.name}}</option>
									</select>
		            </div>
		          </div>
		        </div>

						<div class="col-top">
							<div class="row"></div>
						</div>

		        <div class="w-200  col-top">
		          <input class="btn btn-primary" type="button"  v-on:click="searchCompny()" value="选择企业">
		        </div>
		      </div>
			  </div>
			 
			  <div class="row mt-20 plr-11">
	        <div class="table-header row-auto">
	          <div class="table-name">抽取企业列表</div>
	          <div class="col-auto">
							<a class="btn btn-download mr-10" href="javascript:void(0)" @click="downModel()"><i class="icon">&#xe648;</i>模板下载</a>
							<span class="btn btn-leading-in mr-10">
								<i class="icon">&#xe61d;</i>
								<file-upload 
									title="导入数据"
									:size="5242880"
									:exts="['xls']"
									:params="params"
									:url="'/csjg-sys/qualityObject/excelUpload'"
									v-on:import-success="importSuccessList"
									></file-upload>
							</span>
	            <a class="btn btn-download mr-10" href="javascript:void(0)" @click="save('no')">重新抽取</a>
	        	</div>
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
	                <th>所属管区</th>
	                <th>检查任务接收人</th>
	                <th>操作</th>
	              </tr>
	            </thead>
	            <tbody>
	              <tr v-for="item in list" v-if="list && list.length!=0" track-by="$index">
	                <td><input type="checkbox" v-model="checkedIds" value="{{item.creditCode}}"></input></td>
	                <td>{{$index + 1}}</td>
	                <td>{{item.creditCode}}</td>
	                <td>{{item.name}}</td>
	                <td>{{item.industryArea | filter_map_key industryAreas}}</td>

									<td>
		              	<div :class="{'has-error': fire && errors[$index]}">
		              		<input type="text" class="input" :class="{'input-select-on': item.enforcementLeaderName!=''&& item.enforcementLeaderName!=null}" v-model="item.enforcementLeaderName" @click="openItemDialog(item, $index)" readonly>
		              	</div>
		              </td>
	                <td>
	                  <span>
	                    <a href="javascript:;" @click="openDelDialog($index)">删除</a>
	                  </span>
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
	                <button class="btn btn-gray" @click="delBatch()">删除</button>
	              </td>
	              <td class="txt-r">
	               <!--  <page-group 
	                    :total="totalRecord"
	                    :size.sync="params.pageSize"
	                    :current.sync="pageNo"
	                    v-on:change="changePage"></page-group> -->
	              </td>
	            </tr>
	          </table>
	        </div>
	      </div>

	      <div class="row mt-20 plr-11" >
	      	<div class="plan-header mb-20">
		        <div class="table-name">上传检查表</div>
		      </div>

	        <div class="table-header row-auto">
			      <div class="table-name">提交材料列表</div>
			      <div class="col-auto">
			        <a class="btn btn-download mr-10" @click="addFile">新增</a>
			      </div>
			    </div>

			    <!-- table -->
			    <div class="table-striped" :class="{'table-pb': tablePb}" v-el:table_parent>
			      <table>
			        <thead>
			          <tr>
			            <th>序号</th>
			            <th>检查表名称</th>
			            <th>操作</th>
			          </tr>
			        </thead>
			        <tbody>
			          <tr v-for="item in fileList" v-if="fileList && fileList.length!=0" track-by="$index">
			            <td>{{$index + 1}}</td>
			            <td><input type="text" v-model="item.fileName" class="input full"></td>
			            <td class="table-upload">
			              <file-upload 
			                  :size="5242880"
			                  v-on:import-success="importSuccess"
			                  :pk="($index).toString()"
			                  :url="'./file/upload'"
			                  ></file-upload>
			              <span>|</span>
			              <span>
			                <a href="javascript:;" @click="delFile($index)">删除</a>
			              </span>
			            </td>
			          </tr>

			          <tr v-if="fileList.length == 0">
			            <td colspan="3" class="txt-c">
			              <span>~没有任何查询结果~</span>
			            </td>
			          </tr>
			        </tbody>
			      </table>
			    </div>
	        </div>
	      </div>


	 		</validator>
			<div class="row mb-50 mt-30">
          <div class="col txt-c">
            <button type="button" class="btn btn-save mr-25" @click="save('yes')">生成结果</button>
            <button type="button" class="btn btn-back" v-link="{name: 'inspect-plan-index'}">返回</button>
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
      <dialog :show="oneDelShow" title="警告" :cb-close="closeOneDelDialog">
	      <div slot="dialogContent">
	        <i class="icon warn-icon">&#xe63a;</i>
	        <span>您确定要删除这条信息吗？</span>
	      </div>
	      <div slot="dialogBtn">
	        <input type="button" class="btn btn-primary mr-25" value="确定" @click="closeOneDelDialog('yes')">
	        <input type="button" class="btn btn-primary" value="取消" @click="closeOneDelDialog('cancel')">
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
	    <dialog :show="fileShow" title="警告" :cb-close="closeFileDelDialog">
	      <div slot="dialogContent">
	        <i class="icon warn-icon">&#xe63a;</i>
	        <span>您确定要删除这条信息吗？</span>
	      </div>
	      <div slot="dialogBtn">
	        <input type="button" class="btn btn-primary mr-25" value="确定" @click="closeFileDelDialog('yes')">
	        <input type="button" class="btn btn-primary" value="取消" @click="closeFileDelDialog('cancel')">
	      </div>
	    </dialog>
			<!-- 企业列表弹窗 -->
		<dialog class="plan-dialog" :show="planShow" :width="880" title="可抽取企业列表" :cb-close="closePlanDialog">
	      <div slot="dialogContent">
	        <div class="num-show mtb-12">
						根据您所设置的选取范围，可抽取企业数量<span class="total-num">{{compnyTotalRecord}}</span>家
					</div>
					 <div class="row mb-20">
		        <div class="table-header">
		          <div class="col">
			          <div class="row">
			            <span class="col w-130">统一社会信用代码:</span>
			            <div class="col">
			              <input class="input full" type="text" v-model="companyParams.creditCode">
			            </div>
			          </div>
			        </div>
			        <div class="col">
			          <div class="row">
			            <span class="col w-100">企业名称:</span>
			            <div class="col">
			              <input class="input full" type="text" v-model="companyParams.name">
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
		                <th><input type="checkbox" @click="tableCheckAll" v-model="tableCheckedAll"></input></th>
		                <th>序号</th>
		                <th>统一社会信用代码</th>
		                <th>企业名称</th>
		                <th>所属区域</th>
		              </tr>
		            </thead>
		            <tbody>
		              <tr v-for="item in compnyList" v-if="compnyList && compnyList.length!=0">
		                <td><input type="checkbox" v-model="tableCheckedIds" value="{{item.creditCode}}"></input></td>
		                <td>{{(pageNo - 1) * companyParams.pageSize + ($index + 1)}}</td>
		                <td style="font-size: 14px;font-family: monospace;">{{item.creditCode}}</td>
		                <td>{{item.name}}</td>
		                <td>{{item.industryArea | filter_map_key industryAreas}}</td>
		              </tr>

		              <tr v-if="compnyList.length==0">
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
		                <input type="checkbox" @click="tableCheckAll" v-model="tableCheckedAll"></input>
		                <!-- <button class="btn btn-gray" @click="tableCheckAll">全选</button> -->
		              </td>
		              <td class="txt-r">
		                <page-group 
		                    :total="compnyTotalRecord"
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
	          <input type="button" class="btn btn-save mr-25" value="确定" @click="closePlanDialog('save')">               
	          <input type="button" class="btn btn-back" value="取消" @click="closePlanDialog('cancel')">               
	      </div>
	  </dialog>
		<dialog :show="showExcelMsg" title="警告" :cb-close="closeExcelDialog" :width="450">
			<div slot="dialogContent" style="height: 180px;overflow-y: auto;">
				<span>{{{excelMsg}}}</span>
			</div>
			<div slot="dialogBtn">
				<input type="button" class="btn btn-primary" value="确定" @click="closeExcelDialog">
			</div>
		</dialog>

	  </div>
  </div>

</template>
<script type="text/javascript">
  import model from './model.js'

  export default {

	data() {
	  this.model = model(this.$http);
	  return {
	  	themePks:[],
	  	yesNo:yesNo,
	  	fiveYears:fiveYears,
	  	qualityInspectionTypes:[],
	  	industryAreas:[],
			fire: false,
			title: '',
			pageNo: 1,
	    params: {
	      pageSize: 10,
	      startTime:'',
	      endTime:'',
	      createdBy:'',
	      inspectionType:''
	    },
	    companyParams:{
	    	pageSize: 10,
				annualPlan: fiveYears[1].name,
				industryArea:'',
				name:'',
				creditCode:'',
				inspectionType:'',
				//已选企业
				selectedCode:''
			},
	    totalRecord: 0,
	    compnyTotalRecord: 0,
	    tableFooter: false,
	    tablePb: false,
	    list: [],
	    fileList: [],
	    fileParams: {
        fileName: '',
        fileUrl: ''
      },
	    checkedIds: [],
			checkedAll: '',
	    delShow: false,
	    oneDelShow: false,
	    fileShow: false,
			delItem:{},
	    delIndex:'',
	    delFileIndex:'',
	    planShow: false,
	    compnyList:[],
	    tableCheckedIds: [],
	    tableCheckedAll: '',
	    chooseArr:[],
	    hideError:true,
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
			isNoExists: false,
			showExcelMsg:false,
      excelMsg:'',
	  }
	},

	methods: {
		importSuccessList(data){
      if(data.msg!=''){
        this.excelMsg = data.msg;
        this.showExcelMsg=true
      }
      var codeList=[];
      this.list.forEach((item)=>{
       codeList.push(item.creditCode);
      })

      var arr= data.companyDetail;
      arr.forEach((item)=>{
        if(!this.contains(codeList, item.creditCode)){
          this.list.push(item)
        } 
      })
      // 
      // this.list = this.$parse(arr);
		},
		closeExcelDialog(){
      this.showExcelMsg=false;
    },
		// 下载
		downModel(){
      window.open('/csjg-sys/qualityObject/exportExcel');
		},
		
		checkLeader(val, index) {
			

			var tempErrors = this.$parse(this.errors);

			if(val == "") {
				tempErrors[index] = true;
			}else {
				tempErrors[index] = false;
			}

			this.errors = this.$parse(tempErrors);
			console.log(this.errors,11)
		},
		
	  save(type) {

      switch(type){
					case 'yes':
					// debugger
          		this.fire = true;	
          		// if(this.params.inspectionType == 6 || this.params.inspectionType == 7){
          		// 	if(this.fileList.length == 0){
          		// 		Message.show('error','请先上传检查表',3);
          		// 		return
          		// 	}
          		// }
						  var tempErrors = [];

				  		tempErrors.length = this.list.length;

				  		for(var i=0; i<this.errors.length; i++) {
				  			tempErrors[i] = false;
				  		}
				  		
				  		for(var i=0; i<this.list.length; i++) {
				  			if(!this.list[i].enforcementLeaderName || this.list[i].enforcementLeaderName == "") {
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

							console.log(this.errors,22)
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
								item.inspectionType  = this.params.inspectionType;
								item.createdBy = this.params.createdBy;
								delete item.name;
								delete item.industryArea;
				    	})
				    	// 上传检查表与计划表
				    	this.model.add({qualityInspectionFile:this.fileList , qualityInspectionPlan: tempList }).then(res => {
				        Message.show('success', '保存成功', 2, () => {
				          this.$router.go({name: 'inspect-plan-index'});
				        })
				      });
   
            break;
          case 'no':
          		this.list=[];
          		this.errors=[];
            break;
      } 
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
	  		this.compnyList = res.data.result.results;
	  		this.compnyTotalRecord = res.data.result.totalRecord;
	  	})
	  	this.planShow = true;
	  	this.companyParams.selectedCode = '';

	  },
	   // 选中企业
     tableCheckAll() {
        if(this.tableCheckedAll){
          this.tableCheckedIds = [];
        }else{
          this.tableCheckedIds = [];
          for (let item of this.compnyList) {
            this.tableCheckedIds.push(item.creditCode.toString());
          }
        }
      },
	  closePlanDialog(type){
	  	switch(type){
	  		case "save":
	  			if(this.tableCheckedIds.length == 0){
		        Message.show('error','请选择企业',2)
		        return
		      }
		      
		      this.compnyList.forEach((item)=>{
						if(this.contains(this.tableCheckedIds,item.creditCode)){
							item.annualPlan = this.companyParams.annualPlan;

							item.inspectionType  = this.params.inspectionType;
							
	      			this.list.push(item);
						} 
					})
	  			break;
	  		case "cancel":
	  			break;
	  	}
	  	
	  	this.planShow = false;
	  	this.tableCheckedIds=[];
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
      
      // 展示单独删除弹框
	    openDelDialog(index){
	      this.oneDelShow = true;
	      this.delIndex = index;
	    },
	    //关闭单独删除弹框
	    closeOneDelDialog(type) {

	      switch(type){
	        case 'yes':
	        	this.list.splice(this.delIndex, 1);
	        	this.errors.splice(this.delIndex, 1)
	          break;
	        case 'cancel':
	          break;
	      }
	      this.oneDelShow=false;
	    },
	    //批量删除
      delBatch(){

        if(this.checkedIds.length == 0){
          Message.show('error','请选择删除项',2)
          return
        }
        this.delShow = true;
      },
       // 关闭批量删除弹框
      closeDelDialog(type) {
        switch(type){
            case 'yes':

            		var arr = [];
            		var errorsList = [];
								this.list.forEach((item)=>{
									if(!this.contains(this.checkedIds,item.creditCode)){
										arr.push(item)
									} 
								})
								this.errors.forEach((item)=>{
									if(!this.contains(this.checkedIds,item)){
										errorsList.push(item)
									} 
								})
								// 
								this.list = this.$parse(arr);
								this.errors = this.$parse(errorsList);

              break;
            case 'cancel':
              break;
        }
        this.checkedIds=[];
        this.delShow=false;
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

			},

      addFile(){
        var arr = this.fileList;
        arr.push(this.fileParams);
        this.fileList = this.$parse(arr);
      },
      delFile(index){
        this.delFileItem = index;
        this.fileShow = true;
      },
       // 关闭删除弹框
      closeFileDialog(type) {
        switch(type){
          case 'yes':
            this.fileList.splice(this.delFileItem,1);
            break;
          case 'cancel':
            break;
        }
        this.fileList = this.$parse(this.fileList);
        this.fileShow = false;
      },
      importSuccess(res, index){
        this.fileList[index].fileName = res.fileName;
        this.fileList[index].fileUrl = res.filePath;
			},

			// 检查任务接收人
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

						this.list = this.$parse(this.list);
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

        return this.checkedIds.length != 0 && this.checkedIds.length == this.list.length
      },
      tableCheckedAll () {

        return this.tableCheckedIds.length != 0 && this.tableCheckedIds.length == this.compnyList.length
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
		  this.model.dataList({typeId:"qualityInspectionType"}).then((res) => {
		  	//检查类型
	      this.qualityInspectionTypes = res.data.result;
		  });
		  this.model.depNode({pk:"130"}).then((res) => {
		  	//所属区域
	      this.industryAreas=res.data.result
		  });

			var drop_down_code = document.getElementById('drop_down_code');
	    window.addEventListener('click',(e)=> {
	      if(!drop_down_code.contains(e.target)){
	        this.isShowList = false;
	      }
	    })
		}
  }
</script>