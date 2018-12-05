
export default {
	params:['height'],
	bind () {

		this.vm.$nextTick(()=>{

			var percent = this.vm.$eval((this.expression))

			if(percent>0){
				this.el.scrollTop = (+this.el.scrollHeight || +this.params.height)*parseInt(percent)
			}
		})
		
	},
	update() {
		//console.log('update')
	}
}