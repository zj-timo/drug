
<template>
  <header class="top-header">
    <div class="dis-i">
      <img class="" src="../../../img/logo.gif">
      <div class="header-system">
        <a v-for="item in systemMenus" class="{{item.id}}" @click="clickSystem(item)" id="{{item.id}}">
          {{item.name}}
        </a>
      </div>
    </div>

    <div class="header-r" id="loginout_info">
      <div class="user-info">
        <img class="img-circle" src="../../../img/user-head-w.png"/>
        <span class="pl-10">
          <span class="cursor-p" @click="showLoginout=!showLoginout">
            <span>{{userInfo.name}}</span>
            <i class="icon">&#xe613;</i>
          </span>
          <ul class="loginout-menu" v-show="showLoginout">
            <li @mouseover="showActive(16)" @mouseout="hideActive(16)" :class="{'loginout-bg': (temp==16) && isActive}">
                <i class="icon pr-5" style="font-size: 13px;">&#xe626;</i>
                <span @click="editPassword()">
                  修改密码
                </span>
            </li>
            <li @mouseover="showActive(18)" @mouseout="hideActive(18)" :class="{'loginout-bg': (temp==18) && isActive}">
                <i class="icon pr-5" style="font-size: 13px;">&#xe60a;</i>
                <span @click="loginout()">
                  退出登录
                </span>
            </li>
          </ul>
        </span>
      </div>
    </div>

    <!-- 修改密码 -->
    <dialog :show="editPasswordShow" :width="500" title="修改密码" :cb-close="closeEditPasswordDialog">
      <div slot="dialogContent">
        <validator name="verify">
          <form role="form">
            <div class="control-group">
              <span class="col w-100"><i class="required">*</i>新密码:</span>
              <div class="col"
                  :class="{'has-error' : fire && $verify.newPasswd.invalid}">
                <input type="password" class="input full" placeholder="" v-model="params.newPasswd" v-validate:new-passwd="{required:true}">
                <span class="mandatory-msg" v-if="fire && $verify.newPasswd.required">请输入新密码</span>
              </div>
            </div>
           <div class="control-group">
              <span class="col w-100"><i class="required">*</i>确认新密码:</span>
              <div class="col"
                  :class="{'has-error' : fire && $verify.confirmPasswd.invalid}">
                <input type="password" class="input full" placeholder="" v-model="params.confirmPasswd" v-validate:confirm-passwd="{required:true, confirm:{rule: params.newPasswd}}">
                <span class="mandatory-msg" v-if="fire && $verify.confirmPasswd.required">请输入确认新密码</span>
                <span class="mandatory-msg" v-if="fire && params.confirmPasswd !='' && $verify.confirmPasswd.confirm">与输入的密码不一致</span>
              </div>
            </div>
          </form>
        </validator>
      </div>
       <div slot="dialogBtn">
          <input type="button" class="btn btn-primary mr-10" value="保存" @click="closeEditPasswordDialog('yes')">
          <input type="button" class="btn btn-primary" value="取消" @click="closeEditPasswordDialog('cancel')">         
      </div>
    </dialog>

  </header>
</template>


<script>
    import model from './model.js'
    import i18n from './i18n.js'
    
    export default {
      locales:i18n,
      props:{
        systemMenus:{
          type: Array,
          default: function (value) {
                    return value = [];
                  }
        },

        userInfo:{
          type: Object,
          default: function (value) {
                    return value = {};
                  }
        }
      },
      data(){
        this.model = model(this.$http)
        return {
          fire: false,
          temp:'',
          isActive:'',
          showLoginout:false,
          editPasswordShow: false,
          params: {
            newPasswd:'',
            confirmPasswd:'',
            account:''
          }
        }
      },

      methods:{
        clickSystem(item) {
          document.getElementById(item.id).href = "/" + item.id + "/";
        },

       showActive(index) {
          this.temp = index;
          this.isActive = true;
        },

        hideActive(index) {
          this.temp = index;
          this.isActive = false;
        },

        loginout() {
          this.model.logout().then(res => {
            var obj = {action: "退出", module: "退出", personId: this.userInfo.account, personName: this.userInfo.name};

            this.model.logAdd(obj).then(res => {});
            
            this.$local_store.clear();
            this.$del_cookie('token');
            window.location.reload();
          });
        },

        editPassword() {
          this.editPasswordShow = true;
        },

        closeEditPasswordDialog(type) {
          switch(type){
            case 'yes':
              this.fire = true;

              if(this.$verify.invalid){
                Message.show('error','请检查表单标红字段',3)
                return
              }

              this.params.account = this.userInfo.account;

              this.model.resetPassword(this.params).then(res => {

              });
              break;
            case 'cancel':
              break;
          }

          this.editPasswordShow = false;
          this.fire = false;
          var $this = this;
          Object.keys(this.params).forEach(function(key) {
            $this.params[key] = '';
          });
        }
      },
      ready(){

        var loginoutInfo = document.getElementById('loginout_info');

        window.addEventListener('click',(e)=> {
          if(!loginoutInfo.contains(e.target)){
            this.showLoginout = false;
          }
        })

      }
       
    }
</script>

