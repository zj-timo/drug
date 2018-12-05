<template>
  <div class="main-content">
	  <div class="orient-plan-content">
			<div class="row-auto content-header">
	      <div class="border-l pr-2"></div>
	      <div class="border-l pr-10"></div>
	      <span class="header-title">检查对象管理>检查对象新增</span>
        <div class="col"></div>
	    </div>
			<validator name="verify">
			<div class="control-group mb-20">
		    <div class="col">
					<div class="row">
		        <span class="w-130 col-top"><i class="required">*</i>选择检查年度:</span>
		        <div class="col"
            :class="{'has-error' : fire && $verify.annualPlan.invalid}">
              <select class="input full input-select" v-model="params.annualPlan" :class="{'input-select-on': params.annualPlan!='' && params.annualPlan!=null}" v-validate:annual-plan="{required:true}">
								<option value="">请选择</option>
								<option v-for="item in fiveYears" :value="item.name">{{item.name}}</option>
							</select>
              <span class="mandatory-msg" v-if="fire && $verify.annualPlan.required">
                请选择检查年度
              </span>
            </div>
            <div class="col"></div>
		      </div>
		    </div>
		    <div class="col"></div>
		  </div>

		  <div class="row plr-11">
		  	<div class="plan-header">
	        <div class="table-name">企业名称</div>
	      </div>
	      <div class="row plan-group">
	        <div class="col-top pr-20">
	          <div class="row">
	            <span class="w-130 col-top"><i class="required">*</i>企业名称:</span>
	            <div class="col pr" id="drop_down_name"
									:class="{'has-error' : fire && $verify.searchName.invalid}">
	              <input type="text" class="input full" @keyup.enter="nameSearch" placeholder="请输入企业名称" v-model="searchName" debounce="200" detect-blur="off" v-validate:search-name="{required:true}">
	              <div class="drop-down" v-if="isShowList">
					       	<div v-for="item in searchCompnyList" >
					       		<div class="plr-10" @click="checkCategory(item)" @mouseover="showActive($index)" @mouseout="hideActive($index)" :class="{'drop-active': (temp==$index) && isActive}">
					       			{{item.name}}
					       		</div>
					       	</div>
						   	</div>
                <span class="mandatory-msg" v-if="fire && $verify.searchName.required">
                  请输入企业名称
                </span>
	            </div>
	          </div>
	        </div>

	        <div class="col-top pr-20">
	          <div class="row">
	            <span class="w-130 col-top"><i class="required">*</i>统一社会信用代码:</span>
	            <div class="col pr" id="drop_down_code"
									:class="{'has-error' : fire && $verify.searchCode.invalid}">
	              <input type="text" class="input full" @keyup.enter="codeSearch" placeholder="请输入统一社会信用代码" v-model="searchCode" debounce="200" detect-blur="off" v-validate:search-code="{required:true, alreadyExists: searchCode!='' && isAlreadyExists, inList: searchCode!='' && isInList,  inCompany: codeSearch!='' && isInCompany}">
	              <div class="drop-down" v-if="isShowCodeList">
					       	<div v-for="item in searchCodeList" >
					       		<div style="font-size: 14px;font-family: cursive;" class="plr-10" @click="checkCode(item)" @mouseover="showCodeActive($index)" @mouseout="hideCodeActive($index)" :class="{'drop-active': (tempCode==$index) && isCodeActive}">
					       			{{item.creditCode}}
					       		</div>
					       	</div>
						   	</div>
                <span class="mandatory-msg" v-if="fire && $verify.searchCode.required">
                  请输入统一社会信用代码
                </span>
                <span class="mandatory-msg" v-if="fire && searchCode!='' && $verify.searchCode.alreadyExists">
                  该年度社会信用统一代码已存在
                </span>
                <span class="mandatory-msg" v-if="fire && searchCode!='' && $verify.searchCode.inList">
                  该年度社会信用统一代码已存在
                </span>
                <span class="mandatory-msg" v-if="fire && searchCode!='' && $verify.searchCode.inCompany">
                  所填企业信息不存在，请重新输入
                </span>
	            </div>
	          </div>
	        </div>

	        <div class="col-top search-100">
	          <input class="btn btn-primary" type="button" @click="searchCompny" value="添加">
	        </div>
	      </div>
		  </div>
		  </validator>
		  <div class="row mt-20 plr-11">
        <div class="table-header row-auto">
          <div class="table-name">年度计划名单</div>
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
                v-on:import-success="importSuccess"
                ></file-upload>
            </span>
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
                <th>所属区域</th>
                <th>检查状态</th>
                <th>上次检查年度</th>
                <th>监管方式</th>
                <th>检查任务接收人</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" v-if="list && list.length!=0">
                <td><input type="checkbox" v-model="checkedIds" value="{{item.creditCode}}"></input></td>
                <td>{{$index + 1}}</td>
                <td style="font-size: 14px;font-family: monospace;">{{item.creditCode}}</td>
                <td>{{item.name}}</td>
                <td>{{item.industryArea | filter_map_key  industryAreas}}</td>
                <td>{{item.state | filter_map_key  inspectStates}}</td>
                <td>{{item.annualPlan}}</td>
                <td>{{item.supervisionMode | filter_map_key  supervisionModes}}</td>
                <td>{{item.enforcementLeader}}</td>
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
              <td>
                <input type="checkbox" class="mr-10" @click="checkAll" v-model="checkedAll"></input>
                <button class="btn btn-gray" @click="openDelDialog()">移除</button>
              </td>
              <td class="txt-r">
              </td>
            </tr>
          </table>
        </div>
      </div>

			<div class="row mb-50 mt-30">
          <div class="col txt-c">
            <button type="button" class="btn btn-save mr-25" @click="save('yes')">保存</button>
            <button type="button" class="btn btn-back" @click="save('no')">返回</button>
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
      fiveYears:fiveYears,
	  	industryAreas:[],
	  	supervisionModes:[],
      inspectStates:[],
			fire: false,
	    params: {
	      annualPlan:fiveYears[1].name,
	      createdBy:''
	    },
	    tableFooter: false,
	    tablePb: false,
	    list: [],
	    sendList: [],
	    checkedIds: [],
	    checkedAll: '',
	    delShow: false,
	    delItem:{},
	    //模糊查询
	    isShowList:false,
	    searchCompnyList:[],
	    searchName:'',
	    resultName:'',
	    isActive:false,
			temp:'',
			isShowCodeList:false,
	    searchCodeList:[],
	    searchCode:'',
	    resultCode:'',
	    isCodeActive:false,
			tempCode:'',
      isAlreadyExists: false,
      isInCompany: false,
      isNoExists:false,
      showExcelMsg:false,
      excelMsg:'',
      isInList:false
	  }
	},
	route: {
	  data: function(transition) {
      var userInfo=this.$local_store.get("userInfo");
	  	if(transition.to.name == 'inspect-obj-new') {
        this.$promiseAll([this.model.dataList({typeId:"inspectState"}),
                          this.model.depNode({pk:"130"}),
                          this.model.dataList({typeId:"supervisionMode"})]).then(res=> {
          //检查状态
          this.inspectStates=res[0].data.result;
          //所属区域
          this.industryAreas=res[1].data.result
          //监管方式
          this.supervisionModes = res[2].data.result;

          this.params.createdBy=userInfo.account;


        })
			}

	  }
	},
	methods: {
    excelUpload(data){
      this.list = data;
    },
    
    importSuccess(data){
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
	  save(type) {
       
  		
      switch(type){
          case 'yes':
            
                if(this.list.length==0){
                    Message.show('error','请选择监管对象',3);
                    return
                }
          			this.list.forEach((item)=>{
          				this.sendList.push({annualPlan:this.params.annualPlan,creditCode:item.creditCode,createdBy:this.params.createdBy})
          			})
          			
              	this.model.add(JSON.stringify(this.sendList)).then(res => {
	                Message.show('success', '保存成功', 2, () => {
	                    this.$router.go({name: 'inspect-obj-index'})
	                })
	              });

              
            break;
          case 'no':
          		this.list=[];
              this.$router.go({name: 'inspect-obj-index'})
            break;
      } 

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
        
     // 展示删除框
      openDelDialog(){

          if(this.checkedIds.length == 0){
            Message.show('error','请选择删除项',2)
            return
          }
          this.delShow = true;
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
      // 关闭删除弹框
      closeDelDialog(type) {
        switch(type){
            case 'yes':
                var arr = [];
                this.list.forEach((item)=>{
                  if(!this.contains(this.checkedIds, item.creditCode)){
                    arr.push(item)
                  } 
                })
                // 
                this.list = this.$parse(arr);
                
              break;
            case 'cancel':

              break;
        }
        this.checkedIds = [];
        this.delShow=false;
      },
      //批量删除
      delBatch(){

        
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
        }else {
          this.tableFooter = false;
          this.tablePb = false;
          this.$els.table_footer.style.width = '100%';
        }

      },
      searchCompny(){
        
      	this.fire = true;

	  		if(this.$verify.invalid){
	  		    Message.show('error','请检查表单标红字段',3);
	  		    return
	  		}

      	this.model.getCompnyList({name: this.searchName,creditCode: this.searchCode} ).then(res => {
	          if(res.data.result && res.data.result.length != 0) {
	        		var arr=res.data.result;
	        		arr.forEach((item)=> {
	        			this.model.getCompnyDetail({creditCode:item.creditCode}).then(res=>{
	        				this.list.push(res.data.result);
	        			})
	        		})
	        	}else {
	        		this.isShowList = false;
	        		this.isShowCodeList = false;
	        		Message.show('error','此企业不存在, 请重新输入',3);
	        	}
            this.fire=false;
            this.resultName = '';
            this.searchName = '';
            this.resultCode = '';
            this.searchCode = '';

	       })
      },
      // 企业名称模糊查询
	    nameSearch() {
	        this.model.getCompnyList({name: this.searchName} ).then(res => {
	          this.searchCompnyList = res.data.result;
	          if(res.data.result && res.data.result.length != 0) {
	        		this.isShowList = true;
	        	}else {
	        		this.isShowList = false;
	        	}
	        })
	    },
	    // 统一社会信用代码模糊查询
	    codeSearch() {
	        this.model.getCompnyList({creditCode: this.searchCode} ).then(res => {
	          this.searchCodeList = res.data.result;
	          if(res.data.result && res.data.result.length != 0) {
	        		this.isShowCodeList = true;
	        	}else {
	        		this.isShowCodeList = false;
	        	}
	        })
	    },
	    checkCategory(item) {
				this.resultName = item.name;
				this.searchName = item.name;
				this.resultCode = item.creditCode;
				this.searchCode = item.creditCode;
				this.isShowList = false;
			},
			checkCode(item) {
				this.resultName = item.name;
				this.searchName = item.name;
				this.resultCode = item.creditCode;
				this.searchCode = item.creditCode;
				this.isShowCodeList = false;
			},
	    showActive(index) {
          this.temp = index;
          this.isActive = true;
      },

      hideActive(index) {
          this.temp = index;
          this.isActive = false;
      },
      showCodeActive(index) {
          this.tempCode = index;
          this.isCodeActive = true;
      },

      hideCodeActive(index) {
          this.tempCode = index;
          this.isCodeActive = false;
      },
      importSuccess(res, index){
        // this.fileList[index].fileName = res.fileName;
        // this.fileList[index].fileUrl = res.filePath;
			},
	},

  computed: {

    checkedAll () {

      return this.checkedIds.length != 0 && this.checkedIds.length == this.list.length
    }
      
  },
  validators: {
    inCompany: {
      check(value,condition) {
        let $this = this.vm;
        if(value == null || value.trim() == ''){
              return true;
        }
         
       $this.model.isCompany({creditCode: value}).then(function(res) {
          if(res.data.result=="false") {
            $this.isInCompany = true;
          }else {
            $this.isInCompany = false;
          }
        })
        
        return !condition;
      }
    },
    inList: {
      check(value,condition) {
        let $this = this.vm;
    		if(value == null || value.trim() == ''){
              return true;
        }
        var bool = false;
        var list = $this.list;
        if(list.length != 0){
          for(var i=0; i<list.length;i++){
            if(list[i].creditCode == value){
              bool = true;
              return;
            }else{
              bool = false;
            }
            if(bool == true){ return }
          }
        }
        $this.isInList = bool;
        return !condition;
   		}
    },
    alreadyExists:{
      check(value,condition) {
        let $this = this.vm;
        if(value == null || value.trim() == ""){
          return
        }

        $this.model.isCompanyPlan({creditCode: value, annualPlan: $this.params.annualPlan}).then(function(res) {
          if(res.data.result=="true") {
            $this.isAlreadyExists = true;
          }else {
            $this.isAlreadyExists=false
          }
        })

        return !condition;
      }
    }

 },
	watch: {
      "params.annualPlan"(val){
        var $this = this;
        $this.model.isCompanyPlan({creditCode: $this.searchCode, annualPlan: val}).then(function(res) {
          if(res.data.result=="true") {
            $this.isAlreadyExists = true;
          }else {
            $this.isAlreadyExists = false;
          }
        })
      },
			searchName(val){
      	this.searchCompnyList = [];
      	if(val !== this.resultName) {
      		this.nameSearch();
      	}
      },
      searchCode(val){
      	this.searchCodeList = [];
      	if(val !== this.resultCode) {
      		this.codeSearch();
      	}

      }
	},


	ready() {
    
		var drop_down_name = document.getElementById('drop_down_name')
    window.addEventListener('click',(e)=> {
      if(!drop_down_name.contains(e.target)){
        this.isShowList = false;
      }
    })
    var drop_down_code = document.getElementById('drop_down_code')
    window.addEventListener('click',(e)=> {
      if(!drop_down_code.contains(e.target)){
        this.isShowCodeList = false;
      }
    })
	}
	
  }
</script>