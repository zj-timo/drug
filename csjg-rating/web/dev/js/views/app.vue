<template>
	<nv-header :user-info="userInfo"
						 :system-menus="systemMenus">
	</nv-header>
	<div class="main">
		<nv-menu :menus="ratingMenus"
		         :left-width.sync="leftWidth"
		         :center-width.sync="centerWidth"
		         :second-menu-name="secondMenuName"
		         :third-menus="thirdMenus">
		</nv-menu>

    <router-view :style="{left: menuWidth+'px'}"></router-view> 

	</div>
</template>

<script type="text/javascript">
	import model from './model.js';

	export default {
		data() {
			this.model = model(this.$http);
			
			return {
				leftWidth: 200,
				centerWidth: 0,
				ratingMenus:[],
				userInfo:{},
				systemMenus:[],
				secondMenuName:'',
				thirdMenus:[]
			}
		},

		route:{
			activate: function(transition){

				var token = this.$get_cookie('token');
				if(token == '' || token == null){
	        this.$router.go({'name':'login'});
	        return
	      }

				var arr = [], user = {}, systemMenus = [];
				arr = this.$local_store.get('ratingMenus');
				user = this.$local_store.get('userInfo');
				systemMenus = this.$local_store.get('systemMenus');

				if(transition.from.name == 'login' || transition.to.name == 'root'|| transition.to.name == 'index') {
					this.$router.go({'name':'index'});
					this.getMenuList();
					this.getUserInfo();
					this.getSystemMenus();

				}else {
					if(arr && arr.length !=0) {
						this.ratingMenus = arr;
					}

					if(JSON.stringify(user) != '{}' && user !== undefined) {
						this.userInfo = user;
					}

					if(systemMenus && systemMenus.length !=0) {
						this.systemMenus = systemMenus;
					}

				}

				this.ratingMenus.forEach((item) => {
          this.convertNode(item);
        })

				transition.next();
			}
		},

		methods: {
			getMenuList() {
        this.model.menuList({sysPk: 'csjg-rating'}).then(res => {
          this.ratingMenus = res.data.result;
          this.$local_store.set('ratingMenus', res.data.result);
        })
      },

      // 获取用户信息
      getUserInfo() {
        this.model.getUser().then(res => {
          if(JSON.stringify(res.data.result) != '{}') {
          	this.$local_store.set('userInfo', res.data.result);
            this.userInfo = res.data.result;

          	var obj = {action: "登录", module: "登录", personId: this.userInfo.account, personName: this.userInfo.name};

            this.model.logAdd(obj).then(res => {});

          }
          
        })
      },

      getSystemMenus() {
        this.model.systemMenus().then(res => {
          this.systemMenus = res.data.result;
          this.$local_store.set('systemMenus', res.data.result);
        })
      },
      
      // 刷新时定位菜单
      convertNode(node) {

        node.subMenus.forEach((item) => {

          if(item.subMenus && item.subMenus.length) {
            item.subMenus.forEach((i) => {
              if(this.$route.router_type == i.router_type) {
                i.open = true;
                item.open = true;
                node.open = true;

                this.secondMenuName = item.name;
                this.thirdMenus = item.subMenus;
              }else{
                i.open = false;
              }
            })
          }else{

            if(this.$route.router_type == item.router_type) {
              item.open = true;
              node.open = true;
            }
          }
            
        })
          
      }
		},

		computed: {

			menuWidth() {

				var width = '';
				
				width = this.leftWidth + this.centerWidth;

				return width;
			}
    },

		ready() {

		}
	}
</script>