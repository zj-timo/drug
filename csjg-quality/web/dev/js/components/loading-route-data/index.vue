<template>	
	<div v-if="isLoading"></div>
	<div v-if="!isLoading">
		<slot></slot>
	</div>
</template>	
<script>
	export default {
		props: ['isLoading']
	}
</script>