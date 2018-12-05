<style>
.form-hor .control-group .upload-input{
  vertical-align: bottom;
}
.upload-img{
    width: 170px;
}
  .upload-style{
    border: 1px solid #ccc;
    border-radius: 3px;
    height: 27px;
    line-height: 27px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  
  .upload-style input{
    width: 100%;
    height: 27px;
    position: absolute;top: 0;left:0;
    opacity: 0;
  }
  .upload-text {}
  
</style>

<template>

  <div class="col upload">

    <style>
      .upload-text:before{
        content: "{{$t('upload.content','选择文件')}}";
        background-color: #f5f5f5;
        display: inline-block;
        width:80px;
        text-align: center;
        position: absolute;
        right: 0;
      }
    </style>
    <div class="row">
      <div class="upload-input col">
        <div class="upload-style">
          &emsp;<span class="upload-text"></span>
          <input type="file" :accept="hasimg && 'image/gif, image/jpeg, image/png'" @change="change($event)">
          
        </div>
        <p v-if="hasimg">
          上传图片支持jpg、png、jpeg格式,大小不超过5M。<br>
        </p>
        <div class="pt-10">
          <img v-if="src && src.length != 0" :src="src">
        </div>
      </div>
     </div>
  </div>


</template>

<script type="text/javascript">
 import i18n from './i18n.js'

    export default {
        locales:i18n,
        props:{
            src:{type:String,required: false},
            // 上传接口中应用 public 、 private, 图片 public;
            scope:{type:String,default:'public'},
            // 格式
            exts:{type:Array,default:[]},
            // 大小 默认1M
            size:{type:Number,default:1048576}
            
            
        },
        data(){
            return {}
        },  
        computed:{
            hasimg(){
                return this.exts.indexOf('jpg')!=-1
            }
        },
        methods:{
            // 类型检查
            check_type(input){
                var error_message = [];
                var arr = input.name.split('.');

                if(!~this.exts.indexOf(arr[arr.length-1])){
                    error_message.push('输入格式不正确')
                }else if(input.size > this.size){
                    error_message.push('大小不可超过'+this.size/1024/1024+'M')
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
                    input = e.target.files[0]

                fd.append('file', input);
                e.target.value = '';
                if(!this.check_type(input)) return

                
                this.src = '';

                this.$http.post('./file/images/upload', fd).then(res=> {
                    this.src = '/lims-sys' + res.data.result;
                })

                  // *** 上传图片
                
            }
        },
        ready(){
            // this.$dispatch('COMPONENT-UPLOAD-MSG')
        }


    }

</script>
