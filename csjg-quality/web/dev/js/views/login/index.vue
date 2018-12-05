<template>
	<div class="login">
		<div class="login-top">
			<div class="login-header-content">
			 <img class="" src="../../../img/logo.gif">
			</div>
		</div>
		<div class="login-center">
			<div class="login-pos">
				<div class="login-box">
				  <div class="login-content">
						<div class="login-tittle">
							登录平台
						</div>
						<div class="login-error" v-show="!!errorText">
							<i class="icon" style="font-weight: bold;">&#xe63d;</i>
							{{errorText}}
						</div>
						<div class="pr mb-10">
							<input type="text" class="login-input full" name="userName" placeholder="用户名" v-model="params.userName">
							<i class="icon login-icon">&#xe614;</i>
						</div>
						<div class="pr mb-10">
							<input type="password" autocomplete="new-password" class="login-input full" name="password" placeholder="密码" v-model="params.password" @keyup.enter="submit()">
							<i class="icon login-icon">&#xe736;</i>
						</div>
						<!-- <div class="login-prompt">
							<input type="checkbox" class="login-checkbox" v-model="loginFlag">
							<span class="remember-me">记住我</span>
						</div> -->
						<div class="">
							<button class="btn btn-btn" @click="submit()">登录</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="login-bottom">
			版权所有： 常熟市市场监督管理局
		</div>

	</div>
</template>

<script>
	

	import i18n from './i18n.js'
	import model from './model.js'

	export default{
		locales:i18n,
		data(){
			this.model = model(this.$http)
			return {
				errorText:'',
				loginFlag:'',
				params: {
					userName: '',
					password:''
				}
			}
		},
		
		methods: {
			submit() {

				this.model.login(this.params).then(res=> {
					this.$set_cookie('token',res.data.result);
					this.$router.go({'name':'root'});

				},(res)=>{
					this.errorText = res.data.message;
				})

			},

		},

		ready() {
			if(this.$get_cookie('token') != null && this.$get_cookie.toString().trim() != '') {
				this.$router.go({'name':'root'});
			}
	  }

	}
</script>
