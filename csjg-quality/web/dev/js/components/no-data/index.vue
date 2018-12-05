<template>
	<div v-show="isshow<=0">
        {{$t('nodata.none','0条数据')}}
    </div>
</template>
<script>
	import i18n from './i18n.js'
    export default {
        locales:i18n,
		props:{
			isshow:{type:Number,default:0}
		},
		data(){
			return {}
		},
		ready() {
			
			//console.log('no-data',this)
		}
	}
</script>