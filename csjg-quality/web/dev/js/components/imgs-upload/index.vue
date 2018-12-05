<style>
.upload-add{
  display: inline-block;
  border: 1px solid #cfcfcf;
  height: 150px;
  line-height: 150px;
  width: 150px;
  background-color: #f6f6f6;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}
.upload-add input{
  width: 100%;
  height: 150px;
  width: 150px;
  position: absolute;top: 0;left:0;
  opacity: 0;
}

.img-list{
  width: 150px;
  height: 150px;
  display: block;
}
.upload-add img{
  display: inline-block;
  line-height: 150px;
  margin: 53px auto;
  display: block;
  width: 42px;
  height: 42px;
}
.error-tip{
  color:#F60;
}
.del-img{
  color: white;
  text-align: center;
  display: block;
  line-height: 150px;
  cursor:pointer
}
.tab-box{ 
  display: inline-block;
  width: 150px; 
  height: 150px; 
  position: relative;
  margin-right:10px;
}
</style>

<template>
  <div>
    <style>
      .img-bg{
        width: 150px; 
        height: 150px; 
        top: 0; 
        left: 0; 
        position: absolute; 
        background: #000;  
        opacity:0;
        filter:(alpha=0);
        -ms-filter:alpha(opacity=0);
        -moz-opacity: 0;
      }
      .img-bg:hover{ 
        opacity:0.5;
        filter:(alpha=50);
        -ms-filter:alpha(opacity=50);
        -moz-opacity: 0.5;
      }
      
    </style>

    <div class="row">
      <div class="tab-box" @click="del($index)" v-if="imgArr && imgArr.length != 0" v-for="item in imgArr" >
        <img class="img-list" :src="systemName+item.fileUrl">
        <div class="img-bg">
          <span class="del-img">删除</span>
        </div>
      </div>
     
      <div class="upload-add" v-show="imgArr.length<limit">  
        <img src="../../../img/add_img.png" >
        <input type="file" :accept="hasimg && 'image/gif, image/jpeg, image/png'" @change="change($event)">
      </div>
    </div>
    <p class="error-tip">
      上传图片支持jpg、png、jpeg格式,大小不超过2M。<br>
    </p>
  </div>
</template>

<script type="text/javascript">
  import i18n from './i18n.js'

  export default {
    locales:i18n,
    props:{        
      imgArr:{type:Array,
        default:function(value){
          return value=[]
        }
      },
      url: {
        type:String,
        default:''
      },
      // 格式
      exts:{type:Array,
        default:function(value){
          return value=[]
        }
      },
      // 大小 默认1M
      size:{type:Number,default:1048576},
      //最多上传5张图片
      limit:{
        type:Number,
        default:5
      },
      systemName: {
        type: String,
        default:''
      }
    },
    data(){
        return {             
        }
    },  
      
    methods:{
      // 类型检查
      check_type(input){
        var error_message = [];
        var arr = input.name.split('.');

        if(!~this.exts.indexOf(arr[arr.length-1])) {
          error_message.push('输入格式不正确');
        }else if(input.size > this.size){
          error_message.push('大小不超过'+this.size/1024/1024+'M');
        }    
        if(error_message.length){
          Message.show('error',error_message.join(' , '),3);
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

          var fileName = input.name;

          this.$http.post(this.url, fd).then(res=> {
            Message.show('success', '导入成功', 2, () => {
              this.imgArr.push({fileName: fileName, fileUrl: res.data.result});
              this.$emit('import-success',this.imgArr);
            }) 
          })        
        // *** 上传图片
      },

      del(index) { 
        this.imgArr.splice(index,1);
      }
    },
    ready() {

    }


  }

</script>
