<template>
	<div :class="wrapClasses" :style="style">
  		<div :class="componentClass + '-content'" v-el:content>
			<span :class="icon" v-show="icon"></span><span class="" v-text="content"></span>&nbsp;&nbsp;<a href="javascript:;" @click="close('force')">x</a>
		</div>
	</div>	
</template>
<script type="text/javascript">
	
	import {defaultProps , oneOfType} from '../../utils'
	import cx from 'classnames'
	
	export default {
		props: defaultProps({
			prefixCls: 'message',
			duration: oneOfType([Number, 'Null']),
			content: '',
			style: {
				type: Object,
				default: function() {
					return {
						right: '50%'
					}
				}
			},
			closable: Boolean,
			className: String,
			icon:String,
			on_end: () => {},
			onClose: () => {}
		}),
		data() {
			return {
				show:false
			}
		},
		computed: {
			componentClass() {
				return `${this.prefixCls}-notify`
			},

			wrapClasses() {
				return cx({
					[this.componentClass]: 1, 
					[this.className]: !!this.className, 
					show:this.show,
					[`${this.componentClass}-closable`]: this.closable
				})
			},

			// icon() {
			// 	return cx({
			// 		iconDefault:this.iconDefault
			// 	})
			// }
		},

		methods: {
			_renderContent() {
				// const node = this.$els.content
				// const span = document.createElement('span')

				// //console.log(node)
				// span.innerHTML = this.content
				// node.appendChild(span)
			},

			clear_close_timer() {

				if (this.closeTimer) {
					clearTimeout(this.closeTimer)
					this.closeTimer = null
				}

			},

			close(type) {

				if('force' == type) this.count = 0
				this.clear_close_timer()
				this.onClose()
				this.show = false
			},
			auto_hide() {

				if (this.duration) {
					this.closeTimer = setTimeout(() => {
			        	this.on_end && this.on_end()
			        	this.close()

			      	}, this.duration * 500)
				}
			},
			// 超10s强制销毁
			force_destroy(show) {
				if(this.duration) return
				this.clear_close_timer()
				if(show){
					this.closeTimer = setTimeout(()=>{
						this.close()
					},1000)
				}
			}
		},
		watch:{
			show(val) {
				this.force_destroy(val)
			}
		},

		ready() {
			this.clear_close_timer()
			
		}
	}
</script>
