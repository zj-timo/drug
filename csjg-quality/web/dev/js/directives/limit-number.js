
export default {

	twoWay: true,
	bind: function () {

	    this.handler = function () {
	      // 将数据写回 vm
	      // 如果指令这样绑定 v-example="a.b.c"
	      // 它将用给定值设置 `vm.a.b.c`
	      	var num = parseInt(this.el.value, 10);
 			num = isNaN(num) ? '' : num;
			this.el.value = num;
	        this.set(num);
	    }.bind(this)

	    // this.el.addEventListener('keyup', this.handler)
	     // if (document.addEventListener) {
      //       this.el.addEventListener('input', this.handler)
      //   } else if (document.attachEvent) {
      //   	this.el.attachEvent('onpropertychange', this.handler)
      //   }

	}
}