<template>
  <div>
     <!-- <script id="editor" type="text/plain"></script> -->
      <div :id="editorId"></div>
  </div>
</template>
<script>
  import '../../../../editor/ueditor.config.js'
  import '../../../../editor/ueditor.all.min.js'
  import '../../../../editor/lang/zh-cn/zh-cn.js'
  import '../../../../editor/ueditor.parse.min.js'

  export default {
    name: 'UE',
    props: {
      defaultMsg: {
        type: String
      },
      config: {
        type: Object
      },
      editorId:{
        type: String,
        default:"editor"
      }

    },
    data () {
      return {
        editor: null
      }
    },

    // watch: {
    //   defaultMsg(val, oldVal) {
    //     this.editor = UE.getEditor('editor', this.config);
    //     if (val !== null) {
    //       this.editor.setContent(val);
    //     }
    //   },
    // },

    events: {
      'get-content': function () { // 获取内容方法
        // this.defaultMsg = UE.getEditor('editor').getContent();
        this.defaultMsg = UE.getEditor(this.editorId).getContent();
      }
    },

    ready() {
      const _this = this;
      // this.editor = UE.getEditor('editor', this.config); // 初始化UE
      this.editor = UE.getEditor(this.editorId, this.config); 
      this.editor.addListener("ready", function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });

    },

    destroyed() {
      this.editor.destroy();
    }
  }
</script>

