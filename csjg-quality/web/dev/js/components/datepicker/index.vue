<style>
.date-picker {
    position: relative;
    font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei";
    -webkit-font-smoothing: antialiased;
    color: #333;
    width: 100%;
}

.date-picker * {
    box-sizing: border-box;
}

.date-picker .picker-wrap {
    position: absolute;
    z-index: 1000;
    width: 314px;
    margin-top: 2px;
    background-color: #fff;
    box-shadow: 0 0 6px #ccc;
    padding: 20px;
}

.date-picker .picker-year {
    padding: 20px 0;
}

.date-picker table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: center;
    font-size: 13px;
}

.date-picker tr {
    height: 34px;
    border: 0 none;
}

.date-picker th, .date-picker td {
    user-select: none;
    /*width: 34px;*/
    height: 34px;
    padding: 0;
    border: 0 none;
    line-height: 34px;
    text-align: center;
}

.date-picker td {
    cursor: pointer;
}

.date-picker td:hover {
    background-color: #f0f0f0;
    border-radius: 3px;
}

.date-picker td.date-pass, .date-picker td.date-future {
    color: #aaa;
}
.date-picker td.date-disable {
    color: #bbb;
    cursor: no-drop;
}
.date-picker td.date-active {
    background-color: #2196F3;
    color: #fff;
    border-radius: 3px;
}

.date-picker .date-days {
    color: #c8c8c8;
    font-size: 13px;
}
.week-days{
    color: #ef5350;
    font-weight: bold;
}

.date-picker .btn-prev,
.date-picker .btn-next {
    cursor: pointer;
    display: inline-block;
    padding: 0 10px;
    vertical-align: middle;
    font-weight: bold;
}

.date-picker .btn-prev:hover,
.date-picker .btn-next:hover {
    background: rgba(16, 160, 234, 0.5);
}

.date-picker .close{
    position: absolute;
    /*top: 11px;*/
    right:5px;
    font-size: 12px;
    line-height: 27px;
    color: #C8C8C8;
}
.close:hover{
    color: #777777;
}

.date-picker .input {
  border-radius: 3px;
}

.date-picker-btn {
  font-family: "microsoft yahei";
  display: inline-block;
  padding: 0 10px;
  height: 26px;
  line-height: 26px;
  font-size: 13px;
  color: #333;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dfdfdf;
  text-align: center;
  border-radius: 3px;
  cursor:pointer;
  // border-radius: 3px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  box-sizing: border-box;
  &:focus {
    border-color: #00BCD4;
    outline: 0;
  }
  &::-ms-clear{display:none;}
}

</style>

<template>
  <div class="date-picker">
    <input
        class="input full"
        type="text"
        :readonly="readonly"
        :disabled="disabled"
        :value="value"
        :placeholder="placeholder"
        @click="showDialog()">
        <a href="javascript:;" class="icon close" v-show="value && isNeed" @click="clear()">&#xe602;</a>
    <div class="picker-wrap" :class="{'picker-year': isShowYear}" v-show="show" :style="{ right: ((this.align == 'right') && '0px') || left}">
      <div class="row" v-show="isShowDay">
        <div class="col pr-10">
          <span class="date-picker-btn full" @click="clickYear()">
            {{now.getFullYear()}}
          </span>
        </div>
        <div class="col pl-10">
          <span class="date-picker-btn full" @click="clickMonth()">
            {{months[now.getMonth()].text}}
          </span>
        </div>
      </div>
      <div class="row-auto" v-show="isShowYear">
        <div class="col-auto">
          <span class="btn-prev" @click="yearAdd('minus')">&lt;</span>
        </div>
        <div class="col txt-c">
          <span class="date-picker-btn full mb-10" @click="clickYear()">
            {{now.getFullYear()}}
          </span>
          <table class="date-picker">
            <tbody>
              <tr v-for="i in 6">
                <td v-for="j in 7" :class="years[i * 7 + j] && years[i * 7 + j].status" @click="pickYear(i * 7 + j)">
                  {{years[i * 7 + j] && years[i * 7 + j].text}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-auto">
          <span class="btn-prev" @click="yearAdd('add')">&gt;</span>
        </div>
      </div>
      <div class="txt-c" v-show="isShowMonth">
        <span class="date-picker-btn full mb-10" @click="clickMonth()">
          {{months[now.getMonth()].text}}
        </span>
        <table class="date-picker">
          <tbody>
            <tr v-for="i in 4">
              <td v-for="j in 3" :class="months[i * 3 + j] && months[i * 3 + j].status" @click="pickMonth(i * 3 + j)">
                {{months[i * 3 + j] && months[i * 3 + j].text}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <table class="date-picker" v-show="isShowDay">
        <thead>
          <tr class="date-days">
            <th v-for="day in days" :class="{'week-days': day == $t('datepicker.liu','六') || day == $t('datepicker.ri','日') }">{{day}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 6">
            <td v-for="j in 7"
                :class="date[i * 7 + j] && date[i * 7 + j].status"
                :date="date[i * 7 + j] && date[i * 7 + j].date"
                @click="pickDate(i * 7 + j , date[i * 7 + j] && date[i * 7 + j].status)">
              {{date[i * 7 + j] && date[i * 7 + j].text}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

  import i18n from './i18n.js'

  export default {
    locales:i18n,
    props: {
      align:{
        type: String,
        default:'left'
      },
      isNeed:{
        type: Boolean,
        default: true 
      },
      readonly: { 
        type: Boolean,
        default: false 
      },
      disabled:{
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String
      },
      value: { 
        type: String, 
        coerce(val) {
          // //console.log(val)
          if(val){
            return val.slice(0,10)    
          }else{
            return val
          }
            
        } 
      },
      valueDefault: { 
        type: String, 
        default: '' 
      },
      format: { 
        type: String, 
        default: 'YYYY-MM-DD' 
      },
      limit:{coerce(val) {

        var time = 0

        if(val == 'yesterday'){
          time = new Date()
          //console.log(time.getMonth(),time.getDate(),time.add(-1, "days").getTime()  )   
          return [{
            min:time.add(0, "days").getTime()-3600000*24
          }]               
        }else{
          // //console.log(val,'===')
          val && val.forEach((t)=>{
            t.min = (new Date(t.min)).getTime()-3600000*24
            t.max = (new Date(t.max)).getTime()
          })
        }
        return val
          
          
      }}
    },
    data () {
        
      return {
        align_style:this.align == 'left' ? '' : 'right:0',
        show: false,
        years: [],
        months: [{
          id: '00',
          text: '一月'
        },{
          id: '01',
          text: '二月'
        },{
          id: '02',
          text: '三月'
        },{
          id: '03',
          text: '四月'
        },{
          id: '04',
          text: '五月'
        },{
          id: '05',
          text: '六月'
        },{
          id: '06',
          text: '七月'
        },{
          id: '07',
          text: '八月'
        },{
          id: '08',
          text: '九月'
        },{
          id: '09',
          text: '十月'
        },{
          id: '10',
          text: '十一月'
        },{
          id: '11',
          text: '十二月'
        }],
        days: ['日', '一', '二', '三', '四', '五', '六'],
        date: [],
        now: new Date(),
        isShowYear: false,
        isShowMonth: false,
        isShowDay: true
      }
    },
    watch: {
        now () {
          this.update()
        },
        show () {
          this.update()
        }
    },
    methods: {
      showDialog() {
        this.show = !this.show;

        if(!!this.show && this.value == '') {
          this.now = new Date();
        }
        this.isShowDay = true;
        this.isShowMonth = false;
        this.isShowYear = false;
      },
      clickYear() {
        this.isShowYear = !this.isShowYear;

        var myDate = new Date();
        var curYear = myDate.getFullYear();
        var arr = [];
        var checkYear = this.now.getFullYear();

        if(!!this.isShowYear) {
          this.isShowMonth = false;
          this.isShowDay = false;

          for(var i=(checkYear - 22); i < checkYear; i++) {
            arr.push({
              text: i
            })
          }

          arr.push({
            text: checkYear
          })

          for(var i=checkYear+1; i < (parseInt(checkYear) + 20); i++) {
            arr.push({
              text: i
            })
          }

          this.years = arr;
          this.years.forEach((item) => {
            if(item.text > curYear) {
              item.status = 'date-future';
            }else {
              item.status = '';
            }

            if(item.text == checkYear) {
              item.status = 'date-active';
            }
          })
        }else {
          this.isShowMonth = false;
          this.isShowDay = true;
        }
        
      },

      yearAdd(type) {

        var myDate = new Date();
        var curYear = myDate.getFullYear();
        var checkYear = this.now.getFullYear();

        var endYear = this.years[41].text + 1;
        var beginYear = this.years[0].text - 42;
        var tempAdd = [];
        var tempMinus = [];

        if(type == 'add') {
          for(var i=0; i < 42; i++) {
            tempAdd.push({
              text: endYear + i
            })
          }

          this.years = this.$parse(tempAdd);
        }

        if(type == 'minus') {
          for(var i=0; i < 42; i++) {
            tempMinus.push({
              text: beginYear + i
            })
          }

          this.years = this.$parse(tempMinus);
        }

        this.years.forEach((item) => {
          if(item.text > curYear) {
            item.status = 'date-future';
          }else {
            item.status = '';
          }

          if(item.text == checkYear) {
            item.status = 'date-active';
          }
        })

      },

      clickMonth() {
        this.isShowMonth = !this.isShowMonth;

        if(!!this.isShowMonth) {
          this.isShowYear = false;
          this.isShowDay = false;

          this.months.forEach((item) => {
            if(item.id == this.now.getMonth()) {
              item.status = 'date-active';
            }else {
              item.status = '';
            }
          })

          this.months = this.$parse(this.months);

        }else {
          this.isShowYear = false;
          this.isShowDay = true;
        }
      },

      get_disable(val) {

        var flag = false
        if(!this.limit) return
        
        flag = this.limit.some((t)=>{
          if(t.min && t.max){
            if(val>=t.min && val<=t.max) return true
          }else if(t.min){
            if(val<=t.min) return true
          }else if(t.max){
            if(val>=t.max) return true
          }
        })

        return flag
      },
      close () {
        this.show = false;
      },
      clear() {
        this.value = '';
      },
      update () {
          // //console.log(this.now.getMonth())
          var arr = [];
          var time = new Date(this.now);
          time.setMonth(time.getMonth(), 1);           // the first day
          var curFirstDay = time.getDay();
          curFirstDay === 0 && (curFirstDay = 7);
          time.setDate(0);                             // the last day
          var lastDayCount = time.getDate();
          for (let i = curFirstDay; i > 0; i--) {
              let tmpTime = new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1)
              // //console.log(tmpTime.getTime())

              arr.push({
                  text: lastDayCount - i + 1,
                  time: tmpTime,
                  status: 'date-pass'
              });
          }

          time.setMonth(time.getMonth() + 2, 0);       // the last day of this month
          var curDayCount = time.getDate();
          time.setDate(1);                             // fix bug when month change
          var value = this.value || this.stringify(new Date());
          for (let i = 0; i < curDayCount; i++) {
              let tmpTime = new Date(time.getFullYear(), time.getMonth(), i + 1);
              let status = '';
              this.stringify(tmpTime) === value && (status = 'date-active');
              arr.push({
                  text: i + 1,
                  time: tmpTime,
                  status: status
              });
          }

          var j = 1;
          while (arr.length < 42) {
              arr.push({
                  text: j,
                  time: new Date(time.getFullYear(), time.getMonth() + 1, j),
                  status: 'date-future'
              });
              j++;
          }
          arr.forEach((t)=>{
              // //console.log(t.time.getTime())
              if(this.get_disable(t.time.getTime())){
                  t.status = 'date-disable'    
              }
              
          })
          this.date = arr;
      },

      pickYear(index) {
        this.now.setFullYear(this.years[index].text);
        this.now = new Date(this.now);
        this.isShowYear = false;
        this.isShowMonth = false;
        this.isShowDay = true;
      },

      pickMonth(index) {
        this.now.setMonth(this.months[index].id,1);
        this.now = new Date(this.now);
        this.isShowYear = false;
        this.isShowMonth = false;
        this.isShowDay = true;
      },

      pickDate (index,status) {

        if( 'date-disable' == status) return
        this.show = false;
        this.now = new Date(this.date[index].time);
        this.value = this.stringify();

      },
      parse (str) {
        var time = new Date(str);
        return isNaN(time.getTime()) ? null : time;
      },
      stringify (time = this.now, format = this.format) {
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        var monthName = this.months[time.getMonth()];

        var map = {
            YYYY: year,
            MMM: monthName,
            MM: ('0' + month).slice(-2),
            M: month,
            DD: ('0' + date).slice(-2),
            D: date
        };
        return format.replace(/Y+|M+|D+/g, function (str) {
            return map[str];
        });
      },
      isContains(e){
        if (this.$el && !this.$el.contains(e.target)) {
          this.close();
        }
      }
    },
    ready () {
      this.now = this.parse(this.value) || this.parse(this.valueDefault) || new Date();
      document.addEventListener('click', this.isContains , false);
    },
    beforeDestroy () {
      document.removeEventListener('click', this.isContains, false);
    }

  };
</script>
