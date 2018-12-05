<style>
.file-upload{
    display: inline-block;
}
.file-upload-input{
    vertical-align: bottom;
    display: inline-block;
    cursor: pointer;
}
.file-upload-style{
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
}

.file-upload-style input{
    width: 100%;
    height: 100%;
    font-size:0;
    cursor: pointer;
    position: absolute;top: 0;left:0;
    opacity: 0;
}
.file-upload-text{
    cursor: pointer;
}
</style>

<template>

  <div class="file-upload">
      <div class="file-upload-input">
        <div class="file-upload-style">
          <span class="file-upload-text" v-text="title"></span>
          <input type="file" @change="change($event)" title="选择文件">
        </div>
      </div>
  </div>


</template>

<script type="text/javascript">
 import i18n from './i18n.js'

    export default {
        locales:i18n,
        props:{
            title:{type:String,default:'上传附件'},
            src:{type:String,required: false},
            pk:{type:String,required: false},
            // 大小 默认1M
            size:{type:Number,default:1048576},
            // 格式
            exts:{
                type:Array,
                default:function (value) {
                    return value = [];
                }
            },
            url:{type:String,default:''},
            arr:{
                type:Array,
                default:function (value) {
                    return value = [];
                }
            },
            isOnly:{
                type:Boolean,
                default:false
            },
            params:{
              type:Object,
              default:function (value) {
                  return value = {};
              }
            },
            fileLocation:{
              type:String,
              default:'fileLocation'
            }

        },
        data(){
            return {
                fileName:''
            }
        },  
        computed:{},
        methods:{
            // 类型检查
            check_type(input){
                var error_message = []
                if(this.exts && this.exts.length != 0 && !~this.exts.indexOf(input.name.split('.')[1]) ){
                    error_message.push('输入格式不正确');
                }else if(input.size > this.size) {
                    error_message.push('大小不可超过' +this.size/1024/1024+'M')
                }    
                
                if(error_message.length){
                    Message.show('error',error_message.join(' , '),3)
                    return false
                }
                return true
            },
            
            /**
             * @description 上传图片逻辑
             * @param e {Object} 事件event对象
             */
            change(e) {

                var fd = new FormData(),
                    input = e.target.files[0];

                fd.append('file', input);
                e.target.value = '';
                if(!this.check_type(input)) return

                this.fileName = input.name;
                this.src='';
                this.exl=[];

                if(JSON.stringify(this.params) == "{}") {

                  this.$http.post(this.url, fd).then(res => {
                    
                    Message.show('success', '导入成功', 2, () => {
                      this.src = '/lims-sys' + res.data.result;
                      this.$emit('update-list',this.pk,this.src);

                      this.$emit('import-success',res.data.result,this.pk);
                      this.$emit('del-item',res.data.result);
                      var fileLocation = 'fileUrl';
                      if(!!this.isOnly) {
                          this.arr.$set(0, {fileName: input.name, [fileLocation]: res.data.result.filePath});
                      }else {
                          this.arr.push({fileName: input.name, [fileLocation]: res.data.result.filePath});
                      }
                    })
                      
                  })
                }else {
                  var arr = [];

                  for(var key in this.params) {
                    if(this.params.hasOwnProperty(key)) {
                      arr.push(key+'='+this.params[key]);
                    }
                  }
                  this.$http.post(this.url+'?'+arr.join('&'), fd).then(res => {

                    Message.show('success', '导入成功', 2, () => {
                      this.$emit('import-success',res.data.result);
                      if(!!this.isOnly) {
                        this.arr.$set(0, {fileName: input.name});
                      }else {
                        this.arr.push({fileName: input.name});
                      }
                    })
           
                  })
                }
            }
        },
        ready(){

        }


    }

</script>
