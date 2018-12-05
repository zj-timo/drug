<style>
	.dialog-mask {
		position: fixed;
		top:0;
		right:0;
		z-index:100;
		width:100%;
		height: 100%;
		background: #222;
		opacity: 0.3;
	}
	
</style>
<template>
	<div v-show="show">
		<div class="dialog" :style="{width:width+'px'}">

			<div class="dialog-header">
				<div class="dialog-title" v-text="title"></div>
				<div class="dialog-icon" @click="_close()">
					<i class="icon">&#xe602;</i>
				</div>
			</div>

			<div class="dialog-content">
				<slot name="dialogContent"></slot>
			</div>

			<div class="dialog-btn">
				<slot name="dialogBtn"></slot>
			</div>	
			
		</div>
		<div class="dialog-mask"></div>
	</div>
</template>
<script type="text/javascript">
	
	import i18n from './i18n.js'
    export default {
        locales:i18n,
		props:{
			title:{
				type:String
			},
			show:{
				type:Boolean,
				default:false
			},
			width:{
				type:Number,
				default:200
			},
			is_storetype:{
				type:Boolean,
				default:false
			},
			cbClose:{}
		},
		data() {
			return {
			    align: {
			        points: ['cc', 'cc']
			    },
			    monitor: true
			}
		},
		methods :{
			_close() {
				if(this.cbClose){
					this.cbClose('cancel');
				}
				this.show = false;
			}	
		},
		created(){
			this.title=this.title||this.$t('dialog.title','标题');
		},
		ready(){
			// //console.log(this.cbClose)
		}

	}
</script>
