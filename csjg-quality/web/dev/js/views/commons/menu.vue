
<template>
    
  <div class="left" :style="{width: leftWidth+'px'}">
    <div class="show-menu" @click="isHideMenu()">
      <i class="icon" style="color: #fff">&#xe625;</i>
    </div>

    <div class="item-menu" v-for="item in menus" id="{{item.id}}">
      <div class="first-menu"
          :class="{'active': item.open, 'first-active': (tempFirst==$index) && isActiveFirst}"
          @click="clickMenu(item)"
          @mouseover="firstShowActive($index, item)"
          @mouseout="firstHideActive($index, item)">
        <i class="icon icon-{{item.id}}"></i>
        <span v-if="leftWidth==200">{{item.name}}</span>
        <i class="icon float-r" v-show="item.open">&#xe613;</i>
        <i class="icon float-r" v-show="!item.open">&#xe645;</i>
      </div>

      <ul v-show="item.open" id="{{item.name}}">
        <li v-for="subMenu in item.subMenus" id="{{subMenu.id}}"
            :class="{'active': subMenu.open, 'second-active': (tempSecond==$index) && isActiveSecond}"
            @click="clickSubmenu(subMenu)"
            @mouseover="secondShowActive($index, subMenu, item.name)"
            @mouseout="secondHideActive($index, subMenu, item.name)">
          <i class="icon second-menu-icon">&#xe622;</i>
          <span v-if="leftWidth==200">{{subMenu.name}}</span>
        </li>
      </ul>
    </div>  
  </div>

  <div class="temp-tooltip" :style="{left: leftWidth+'px', top: tooltipTop+'px'}">
    {{menuName}}
  </div> 

  <div class="center" :style="{left: leftWidth+'px', width: centerWidth+'px'}" v-show="centerWidth==162">
    <div>
      <aside>
        <div class="checked-menu">{{secondMenuName}}</div>
        <ul>
          <li v-for="item in thirdMenus" @click="clickThirdMenu(item)"
              :class="{'active': item.open}">
            {{item.name}}
          </li>    
        </ul>   
      </aside>
      <div class="center-close" @click="hideThreeMenu()" v-if="centerWidth==162">
        <i class="icon icon-close">&#xe624;</i>
      </div>
    </div>
  </div>
  
  <div class="center-open" @click="showThreeMenu()" :style="{left: leftWidth + centerWidth +'px'}" v-if="thirdMenus && thirdMenus.length != 0 && centerWidth==0">
    <i class="icon icon-open">&#xe645;</i>
  </div>

</template>
<script>
  import model from './model.js'
  import {menusTablePosition} from '../../vuex/actions'

  export default {
    vuex:{
      actions: {
        menusTablePosition
      }
    },
    props:{
      leftWidth:{
        type: Number,
        default: 200
      },
      centerWidth:{
        type: Number,
        default: 162
      },
      menus:{
        type: Array,
        default: function (value) {
                    return value = [];
                }
      },
      secondMenuName:{
        type: String,
        default: ''
      },
      thirdMenus:{
        type: Array,
        default: function (value) {
                    return value = [];
                }
      }
    },

    data() {
      this.model = model(this.$http);
      return {
        thirdMenu:{},
        hideMenu: false,
        hidesubMenu: false,
        isActiveFirst:false,
        isActiveSecond:false,
        tempFirst:'',
        tempSecond:'',
        tooltipTop: 0,
        menuName:''
      }
    },
      
    methods:{
      firstShowActive(index,item) {
        this.tempFirst = index;
        this.isActiveFirst = true;

        if(!!this.hideMenu) {
          var firstPos = document.getElementById(item.id);

          this.tooltipTop = firstPos.offsetTop;

          this.menuName = item.name;

          var tooltip = document.getElementsByClassName('temp-tooltip');

          Array.prototype.forEach.call(tooltip,function(item){
            item.setAttribute("class", "tooltip");
          })
        }

      },

      firstHideActive(index,item) {
        this.tempFirst = index;
        this.isActiveFirst = false;

        var firstPos = document.getElementById(item.id);

        this.menuName = '';

        this.tooltipTop = firstPos.offsetTop;

        var tooltip = document.getElementsByClassName('tooltip');

        Array.prototype.forEach.call(tooltip,function(item){
          item.setAttribute("class", "temp-tooltip");
        })
      },

      secondShowActive(index, item, name) {
        this.tempSecond = index;
        this.isActiveSecond = true;

        if(!!this.hideMenu) {
          var offsetTop = document.getElementById(item.id).offsetTop;
          var scrollTop = document.getElementById(name).scrollTop;

          this.menuName = item.name;

          this.tooltipTop = offsetTop - scrollTop;
          
          var tooltip = document.getElementsByClassName('temp-tooltip');

          Array.prototype.forEach.call(tooltip,function(item){
            item.setAttribute("class", "tooltip");
          })
        }

      },

      secondHideActive(index, item, name) {
        this.tempSecond = index;
        this.isActiveSecond = false;

        var offsetTop = document.getElementById(item.id).offsetTop;
        var scrollTop = document.getElementById(name).scrollTop;

        this.menuName = '';

        this.tooltipTop = offsetTop - scrollTop;

        var tooltip = document.getElementsByClassName('tooltip');

        Array.prototype.forEach.call(tooltip,function(item){
          item.setAttribute("class", "temp-tooltip");
        })
      },

      //是否隐藏一级菜单
      isHideMenu() {
        this.hideMenu = !this.hideMenu;
      },

      //隐藏三级菜单
      hideThreeMenu() {
        this.hidesubMenu = true;
      },

      //显示三级菜单
      showThreeMenu() {
        this.hidesubMenu = false;
      },

      // 点击一级菜单
      clickMenu(item) {
        item.open = !item.open;
        //点击当前一级菜单时，其他的一级菜单处于关闭状态
        this.menus.forEach((i) => {
          if(item.name == i.name) {
            i.open = item.open;
          }else {
            i.open = false;
          }
        })
      },
      // 点击二级菜单
      clickSubmenu(tempItem) {

        this.thirdMenus = [];

        this.secondMenuName = tempItem.name;
        this.thirdMenus = tempItem.subMenus;

        this.menus.forEach((item) => {
          item.subMenus.forEach((i) => {
            if(i.subMenus && i.subMenus.length != 0) {
              if(tempItem.id == i.id) {
                item.open = true;
                i.open = true;
                for(var k=0; k<i.subMenus.length; k++) {
                  if(k==0) {
                    i.subMenus[k].open = true;
                  }else {
                    i.subMenus[k].open = false;
                  }
                }
                this.$router.go({'name': i.subMenus[0].url});
              }else{
                i.open = false;
                i.subMenus.forEach((j) => {
                  j.open = false;
                })
              }
            }else {
              if(tempItem.id == i.id) {
                item.open = true;
                i.open = true;
                this.$router.go({name: i.url});
              }else{
                i.open = false;
              }
            }
            
          })
        })
        
      },

      // 点击三级菜单
      clickThirdMenu(tempItem) {

        this.menus.forEach((item) => {
          item.subMenus.forEach((i) => {
            if(i.subMenus && i.subMenus.length != 0) {
              i.subMenus.forEach((j) => {
                if(tempItem.url == j.url) {
                  j.open = true;
                  this.$router.go({'name': j.url});
                }else {
                  j.open = false;
                }
              })
            }
            
          })
        })
      }
    },
    computed: {

      leftWidth() {
        var width = '';

        if(!!this.hideMenu) {
          width = 50;
          this.menusTablePosition('50');
        }else {
          width = 200;
          this.menusTablePosition('200');
        }

        return width;
      },

      centerWidth() {
        var cWidth = '';

        if(this.thirdMenus && this.thirdMenus.length != 0 && (!this.hidesubMenu)) {
          cWidth = 162;
          this.menusTablePosition('162');
        }else {
          cWidth = 0;
          this.menusTablePosition('0');
        }

        return cWidth;
      }

    },

    watch:{

    },

    ready() {
    }

  }
</script>   