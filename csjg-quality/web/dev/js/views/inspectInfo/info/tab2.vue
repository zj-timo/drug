<template>
  <div class="plr-11 mt-30 h-100">

    <iframe id="ifame-page" :src="pageName" frameborder="0" width="100%" scrolling="no" height="3590px"></iframe>

  </div>
</template>
<script type="text/javascript">
import model from '../model.js'
export default {
  props: {
    params: {
      type: Object,
      default: function(value) {
        return value = {};
      }
    },
    pageName: {
      type: String,
      default: function(value) {
        return value = '';
      }
    }
  },
  data() {
    this.model = model(this.$http);
    return {
    }
  },
  events: {
    'print-report': function() {
      //调打印
      document.getElementById('ifame-page').contentWindow.print();
    }
  },
  methods: {
  },
  watch: {},
  ready() {
  }
}
</script>