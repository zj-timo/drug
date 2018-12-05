
<template>
  <div class="tab-inner-info">
    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">采集数据</div>
      <div class="float-r mr-15 tab-btn" v-show='isEdit==false' @click="toEdit"><i class="icon">&#xe630;</i>编辑数据</div>
      <div class="float-r mr-15 tab-btn" v-show='isEdit==true' @click="toSave('cancel')"><i class="icon">&#xe6d0;</i>取消</div>
      <div class="float-r mr-15 tab-btn" v-show='isEdit==true' @click="toSave('yes')"><i class="icon">&#xe6f4;</i>保存</div>
    </div>
    <div class="row">
      <table class="tab-page-table">
        <tr>
          <td class="bg-color">联系人</td>
          <td>
            <input v-show='isEdit==true' class="tab-input full" type="text" v-model="collectionParams.contacts">
            <p v-show='isEdit==false'>{{collectionParams.contacts}}</p>
          </td>
          <td class="bg-color">行政区划</td>
          <td>
            <div class="row" v-show='isEdit==true'>
              <div class="col">
                <select class="tab-input full" v-model="collectionParams.administrativeDivision1">
                  <option selected value="">请选择</option>
                  <option v-for="item in regions" :value="item.id">{{item.name}}</option>
                </select>
              </div>
              <div class="col plr-10">
                <select class="tab-input full" v-model="collectionParams.administrativeDivision2">
                  <option selected value="">请选择</option>
                </select>
              </div>
              <div class="col">
                <select class="tab-input full" v-model="collectionParams.administrativeDivision3">
                  <option selected value="">请选择</option>
                </select>
              </div>
            </div>
            
            <p v-show='isEdit==false'>
              {{collectionParams.administrativeDivision1 | filter_map_key regions}}
              {{collectionParams.administrativeDivision2}}
              {{collectionParams.administrativeDivision3}}
            </p>
          </td>
        </tr>
        <tr>
          <td class="bg-color">联系电话</td>
          <td>
            <input v-show='isEdit==true' class="tab-input full" type="text" v-model="collectionParams.contactNumber">
            <p v-show='isEdit==false'>{{collectionParams.contactNumber}}</p>
          </td>
          <td class="bg-color">主体标签</td>
          <td>
            <div v-show='isEdit==true' class="pr pr-70">
              <input class="tab-input full noChange" type="text" v-model="collectionParams.companyLabelName" disabled>
              <button class="btn btn-primary label-choose" @click="chooseLabel()">选择</button>
            </div>
            <p v-show='isEdit==false'>{{collectionParams.companyLabelName}}</p>
          </td>
        </tr>
        <tr>
          <td class="bg-color">经营范围</td>
          <td colspan="3">
            <textarea v-show='isEdit==true' class="tab-input full" rows="3" v-model="collectionParams.businessScope"></textarea>
            <p v-show='isEdit==false'>{{collectionParams.businessScope}}</p>
          </td>
        </tr>
        <tr>
          <td class="bg-color">备注</td>
          <td colspan="3">
            <input v-show='isEdit==true' class="tab-input full" type="text" v-model="collectionParams.remark">
            <p v-show='isEdit==false'>{{collectionParams.remark}}</p>
          </td>
        </tr>
        <tr>
          <td class="bg-color">主体图片</td>
          <td colspan="3">
            <div v-show='isEdit==true'>
              <imgs-upload 
                :size="2097152"
                :system-name="'/csjg-sys'"
                :url="'./file/images/upload'"
                :exts="['jpg','png','jpeg','JPG','PNG','JPEG']"
                :limit="5"
                v-on:import-success="importSuccess"
                :img-arr.sync="collectionParams.file">
              </imgs-upload>
            </div>
            <div v-show='isEdit==false'>
              <div v-for="item in collectionParams.file" v-if="collectionParams.file && collectionParams.file.length !=0" style="display: inline-block;margin-right:5px;">
                <img :src="'/csjg-sys'+item.fileUrl"  style="width: 150px;height: 150px;display:block; ">
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
    <!-- 选择主体标签 -->
   <dialog class="label-dialog" :show="labelShow" :width="600" title="选择主体标签" :cb-close="closePlanDialog">
       <div slot="dialogContent">
         <div>
           <div class="tab-border-l pr-10"></div>
           <div class="tab-page">当前已选定的主体标签:</div>
           <div class="mt-20 border-line pb-20">
             <label class="label-border"  v-for="item in showLabel" track-by="$index">
               <span>{{item.name}}</span>
             </label>
           </div>
             
           <div class="mt-20">
             <label class="label-border"  v-for="item in companyLabels" track-by="$index">
               <input type="checkbox" class="label-input"  @change="checkedGroup" v-model="checkedLabels" value="{{item.id}}" />
               <span>{{item.name}}</span>
             </label>
           </div>
           
         </div>
       </div>
        <div slot="dialogBtn" class="txt-c">
           <input type="button" class="btn btn-save mr-25" value="保存" @click="closeLabelDialog('save')">               
           <input type="button" class="btn btn-back" value="取消" @click="closeLabelDialog('no')">               
       </div>
   </dialog>
</template>

<script type="text/javascript">
  import model from './model.js'
  export default {
    props:{
      file:{
        type:Array,
        default:function (value) {
            return value = [];
        }
      },
      show_img:{
        type:String,
        default:''
      },
      company_pk:{
        type:String,
        default:''
      },
      label_show:{
        type:Boolean,
        default:false
      },
      show_company_label_name:{
        type:String,
        default:''
      },
    },
   

    data(){
        this.model=model(this.$http);
        return {
          fiveYears:fiveYears,
          companyTypes:[],
          companyLabels:[],
          inspectStates:[],
          industryOwneds:[],
          supervisionModes:[],
          companyStates:[],
          regions:[],/**/
          params: {},
          isEdit:false,
          collectionParams:{
            contacts:'',
            administrativeDivision1:'',
            administrativeDivision2:'',
            administrativeDivision3:'',
            contactNumber:'',
            companyLabel:'',
            companyLabelName:'',
            businessScope:'',
            remark:'',
            file:[],
            updatedBy:'',
            createdBy:'',
            companyPk:''
          },
          labelShow:false,
          checkedLabels:[],
          showLabel:[],
          showCompanyLabel:''
        }
    },   
    methods:{
        importSuccess(arr) {
          arr.forEach((item) =>{
            item.companyPk = this.collectionParams.companyPk;
          })

          this.collectionParams.file = this.$parse(arr);
          this.show_img='/csjg-sys'+this.collectionParams.file[0].fileUrl;
        },
          //编辑采集数据
        toEdit(){
          this.isEdit = true;
        },
        //保存采集数据
        toSave(type){
          var userInfo=this.$local_store.get("userInfo");
          switch(type){
              case 'yes':
                    
                    if(this.collectionParams.file.length!=0){
                      this.collectionParams.file.forEach((item)=>{
                        item.createdBy = userInfo.account;
                      })
                    }
                    this.model.collectionUpdate(this.collectionParams).then(res => {
                      Message.show('success', '保存成功', 2, () => {
                        this.collectionParams = res.data.result;
                        //show_company_label_name实时变化
                        this.show_company_label_name = this.collectionParams.companyLabelName;
                        //判断标签中是否含有'专业市场 06'
                        var arr = this.collectionParams.companyLabel.split(",");
                        this.label_show = this.contains( arr , "06");
                      }) 
                    });
                break;
              case 'cancel':
                    this.model.collectionInfo({pk:this.collectionParams.companyPk}).then(res => {
                      Message.show('success', '取消保存', 2, () => {
                        
                        if(this.collectionParams!=null){
                          this.collectionParams = res.data.result;
                          this.collectionParams.updatedBy = userInfo.account;
                        }else{
                          this.collectionParams.createdBy=userInfo.account;
                          this.collectionParams.companyPk = this.collectionParams.pk;
                        }
                      }) 
                    });
                break;
          }
          this.isEdit = false;
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
        // 打开主体标签弹窗
        chooseLabel(){
          if(this.collectionParams.companyLabel!=''&&this.collectionParams.companyLabel!=null){
            this.checkedLabels= this.collectionParams.companyLabel.split(",");
            this.checkedGroup();
          }
          
          this.labelShow=true;
        },
        checkedGroup() {

          var arr=[]
          var companyLabelList=[];
          this.companyLabels.forEach((item)=>{
            if(this.contains(this.checkedLabels, item.id)){
              arr.push(item);
              companyLabelList.push(item.id)
            }
          })
          this.showLabel=this.$parse(arr);
          this.collectionParams.companyLabel= companyLabelList.join(",");
        },
         
        closeLabelDialog(type){
          switch(type){
            case "save":
                this.getShowLabel(this.collectionParams.companyLabel);
                break;
            case "no":
                break;
          }
          this.labelShow=false;
        },
        getShowLabel(str){
          var arr=[];
          var getArr=[];
          if(str!=''&&str!=null){
            arr = str.split(",");
            this.companyLabels.forEach((item)=>{
              if(this.contains(arr, item.id)){
                getArr.push(item.name);
              }
            })
          }
          this.collectionParams.companyLabelName = getArr.join(",");
        },
        search(){
          
        }
        
    },
    watch:{
      company_pk(){
        var userInfo=this.$local_store.get("userInfo");

        this.$promiseAll([
              this.model.dataList({typeId:"companyLabel"}),
              this.model.dataList({typeId:"region"}),
              this.model.collectionInfo({pk:this.company_pk})]).then(res => {
            this.companyLabels=res[0].data.result;
            this.regions=res[1].data.result;
            // 采集信息
            if(res[2].data.result != null&&res[2].data.result != ''){

              this.collectionParams = res[2].data.result;
              if(this.collectionParams.administrativeDivision1==null){
                this.collectionParams.administrativeDivision1='';
              }
              if(this.collectionParams.administrativeDivision2==null){
                this.collectionParams.administrativeDivision2='';
              }
              if(this.collectionParams.administrativeDivision3==null){
                this.collectionParams.administrativeDivision3='';
              }
              this.collectionParams.updatedBy = userInfo.account;

              if(this.collectionParams.companyLabel!=''&&this.collectionParams.companyLabel!=null){
                this.getShowLabel(this.collectionParams.companyLabel);
              } 
            }else{
              this.collectionParams.createdBy=userInfo.account;
              this.collectionParams.companyPk = this.company_pk;
            }
      
            if(this.collectionParams.file!=null&&this.collectionParams.file.length!=0){
              this.show_img='/csjg-sys'+this.collectionParams.file[0].fileUrl;
              this.file = this.collectionParams.file;
              this.collectionParams.file.forEach((item)=>{
                item.companyPk=this.collectionParams.companyPk;
              })
            }
            //第一次获取show_company_label_name
            this.show_company_label_name = this.collectionParams.companyLabelName;
            //判断标签中是否含有'专业市场 06'
            
            var arr = this.collectionParams.companyLabel.split(",");

            this.label_show = this.contains( arr , "06");
        });
      }
      
    },



  }

</script>
