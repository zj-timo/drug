<style>
  .datetime-picker {
    position: relative;
    display: inline-block;
    font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei";
    -webkit-font-smoothing: antialiased;
    color: #333;
    width: 100%;
  }

  .datetime-picker * {
    box-sizing: border-box;
  }

  .datetime-picker input {
    width: 100%;
    padding: 0px 10px;
    height: 27px;
    line-height: 27px;
    outline: 0 none;
    border: 1px solid #ccc;
    font-size: 12px;
  }

  .datetime-picker .picker-wrap {
    position: absolute;
    z-index: 1000;
    width: 314px;
    margin-top: 2px;
    background-color: #fff;
    box-shadow: 0 0 6px #ccc;
    padding: 15px;
  }

  .datetime-picker table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: center;
    font-size: 13px;
  }

  .datetime-picker tr {
    height: 34px;
    border: 0 none;
  }

  .datetime-picker th, .datetime-picker td {
    user-select: none;
    /*width: 34px;*/
    height: 34px;
    padding: 0;
    border: 0 none;
    line-height: 34px;
    text-align: center;
  }

  .datetime-picker td {
    cursor: pointer;
  }

  .datetime-picker td:hover {
    background-color: #f0f0f0;
    border-radius: 3px;
  }

  .datetime-picker td.date-pass, .datetime-picker td.date-future {
    color: #aaa;
  }
  .datetime-picker td.date-disable {
    color: #bbb;
    cursor: no-drop;
  }
  .datetime-picker td.date-active {
    background-color: #2196F3;
    color: #fff;
    border-radius: 3px;
  }

  .datetime-picker .date-head {
    text-align: center;
    font-size: 14px;
  }

  .datetime-picker .date-days {
    color: #c8c8c8;
    font-size: 13px;
  }
  .week-days{
    color: #ef5350;
    font-weight: bold;
  }
  .datetime-picker .show-year {
    display: inline-block;
    min-width: 62px;
    vertical-align: middle;
  }

  .datetime-picker .show-month {
    display: inline-block;
    min-width: 28px;
    vertical-align: middle;
  }

  .datetime-picker .btn-prev,
  .datetime-picker .btn-next {
    cursor: pointer;
    display: inline-block;
    padding: 0 10px;
    vertical-align: middle;
  }

  .datetime-picker .btn-prev:hover,
  .datetime-picker .btn-next:hover {
    background: rgba(16, 160, 234, 0.5);
  }

  .datetime-picker .close{
    position: absolute;
    top: 0px;
    right:5px;
    font-size: 12px;
    line-height: 27px;
    color: #C8C8C8;
  }
  .close:hover{
    color: #777777;
  }

  .date-picker-footer {
    border-top: 1px solid #E5E6E8;
    padding-top: 10px;
    margin: 5px 0;
  }

  .date-picker-footer > ul {
    display: inline-block;
    float: right;
  }

  .date-picker-footer > ul >li {
    display: inline-block;
    padding: 0 10px;
    margin-left: -5px;
    border-top: 1px solid #E5E6E8;
    border-bottom: 1px solid #E5E6E8;
    border-left: 1px solid #E5E6E8;
  }

  .date-picker-footer > ul >li:hover {
    color: #2196F3;
  }

  .show-time {
    color: #2196F3;
  }

  .click-time {
    background: #2196F3;
  }

  .mouse-over {
    background: #E5E6E8;
  }

  .hide-time {
    color: #2196F3;
  }

  .date-picker-footer > ul >li:last-child {
    border-right: 1px solid #E5E6E8;
  }
  
  .check-time > ul {
    position: relative;
    display: inline-block;
    width: 33.33%;
    border: 1px solid #E5E6E8;
    margin: 10px -4px 0 0;
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
  }

  .check-time > ul > li{
    display: block;
    height: 22px;
    line-height: 22px;
  }
  .mouse{
    cursor: pointer;
  }
</style>

<template>
  <div class="datetime-picker">
    <input
        class="input"
        type="text"
        :readonly="readonly"
        :disabled="disabled"
        :value="value"
        :placeholder="placeholder"
        @click="isShowdateTime()">
    <a href="javascript:;" class="icon close" v-show="value && isNeed" @click="clear()">&#xe602;</a>
    <div class="picker-wrap" v-show="show" :style="{ right: ((this.align == 'right') && '0px') || left}">
      <table class="date-picker" v-show="!isShowTime">
        <thead>
          <tr class="date-head">
            <th colspan="4">
              <span class="btn-prev" @click="yearClick(-1)">&lt;</span>
              <span class="show-year">{{now.getFullYear()}}</span>
              <span class="btn-next" @click="yearClick(1)">&gt;</span>
            </th>
            <th colspan="3">
              <span class="btn-prev" @click="monthClick(-1)">&lt;</span>
              <span class="show-month">{{months[now.getMonth()]}}</span>
              <span class="btn-next" @click="monthClick(1)">&gt;</span>
            </th>
          </tr>
          <tr class="date-days">
              <th v-for="day in days" :class="{'week-days': day == $t('datepicker.liu','六') || day == $t('datepicker.ri','日') }">
                {{day}}
              </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 6">
            <td v-for="j in 7"
                :class="date[i * 7 + j] && date[i * 7 + j].status"
                :date="date[i * 7 + j] && date[i * 7 + j].date"
                @click="pickDate(i * 7 + j , date[i * 7 + j] && date[i * 7 + j].status)">{{date[i * 7 + j] && date[i * 7 + j].text}}
            </td>
          </tr>
        </tbody>
      </table>
      <div v-show="isShowTime">
        <div class="txt-c">选择时间</div>
        <div class="row">
          <span class="col-top txt-c">时</span>
          <span class="col-top txt-c">分</span>
          <span class="col-top txt-c">秒</span>
        </div>
        <div class="check-time">
          <ul id="hour-ul">
            <li v-for="item in hours" id="{{item.id}}" @click="hourClick(item)" @mouseover="showActive(item.id)" @mouseout="hideActive(item.id)" :class="{'mouse-over': (temp == item.id) && isActive, 'click-time': item.check}">{{item.hour}}</li>
          </ul>
          <ul id="minute-ul">
            <li v-for="item in minutes" id="{{item.id}}" @click="minuteClick(item)" @mouseover="showActive(item.id)" @mouseout="hideActive(item.id)" :class="{'mouse-over': (temp == item.id) && isActive, 'click-time': item.check}">{{item.minute}}</li>
          </ul>
          <ul id="second-ul">
            <li v-for="item in seconds" id="{{item.id}}" @click="secondClick(item)" @mouseover="showActive(item.id)" @mouseout="hideActive(item.id)" :class="{'mouse-over': (temp == item.id) && isActive, 'click-time': item.check}">{{item.second}}</li>
          </ul>
        </div>
      </div>

      <div class="date-picker-footer">
        <span v-show="!isShowTime" class="mouse" @click="showTime()" @mouseover="showActive('-1')" @mouseout="hideActive('-1')" :class="{'show-time': (temp=='-1') && isActive}">
          选择时间
        </span>
        <span v-show="isShowTime" class="hide-time" @click="hideTime()">返回日期</span>
        <ul>
          <li class="mouse" @click="clear()">清空</li>
          <li class="mouse" @click="nowTime()">现在</li>
          <li class="mouse" @click="checkDateTime()">确定</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
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
          return val
        } 
      },
      valueDefault: { 
        type: String, 
        default: '' 
      },
      formatYmd: { 
        type: String, 
        default: 'YYYY-MM-DD' 
      },
      formatHms: { 
        type: String, 
        default: 'HH:mm:ss' 
      },
      limit:{
        coerce(val) {

          var time = 0;

          if(val == 'yesterday'){
              time = new Date();
              return [{
                min:time.add(0, "days").getTime()-3600000*24
              }]               
          }else{

            val && val.forEach((t)=>{
              t.min = (new Date(t.min)).getTime()-3600000*24
              t.max = (new Date(t.max)).getTime()
            })
          }
          return val;
        }
      },
      isShowTime: {
        type: Boolean,
        default: false
      }
    },
    data () {
        
        return {
          align_style:this.align == 'left' ? '' : 'right:0',
          show: false,
          days: ['日', '一', '二', '三', '四', '五', '六'],
          months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          date: [],
          now: new Date(),
          isActive:false,
          hours:[{
            check:true,
            id: '100',
            hour: '00'
            },{
              check:false,
              id:'101',
              hour:'01'
            },{
              check:false,
              id:'102',
              hour:'02'
            },{
              check:false,
              id:'103',
              hour:'03'
            },{
              check:false,
              id:'104',
              hour:'04'
            },{
              check:false,
              id:'105',
              hour:'05'
            },{
              check:false,
              id:'106',
              hour:'06'
            },{
              check:false,
              id:'107',
              hour:'07'
            },{
              check:false,
              id:'108',
              hour:'08'
            },{
              check:false,
              id:'109',
              hour:'09'
            },{
              check:false,
              id:'110',
              hour:'10'
            },{
              check:false,
              id:'111',
              hour:'11'
            },{
              check:false,
              id:'112',
              hour:'12'
            },{
              check:false,
              id:'113',
              hour:'13'
            },{
              check:false,
              id:'114',
              hour:'14'
            },{
              check:false,
              id:'115',
              hour:'15'
            },{
              check:false,
              id:'116',
              hour:'16'
            },{
              check:false,
              id:'117',
              hour:'17'
            },{
              check:false,
              id:'118',
              hour:'18'
            },{
              check:false,
              id:'119',
              hour:'19'
            },{
              check:false,
              id:'120',
              hour:'20'
            },{
              check:false,
              id:'121',
              hour:'21'
            },{
              check:false,
              id:'122',
              hour:'22'
            },{
              check:false,
              id:'123',
              hour:'23'
            }],
          minutes:[{
            check:true,
            id: '124',
            minute: '00'
            },{
              check:false,
              id:'125',
              minute:'01'
            },{
              check:false,
              id:'126',
              minute:'02'
            },{
              check:false,
              id:'127',
              minute:'03'
            },{
              check:false,
              id:'128',
              minute:'04'
            },{
              check:false,
              id:'129',
              minute:'05'
            },{
              check:false,
              id:'130',
              minute:'06'
            },{
              check:false,
              id:'131',
              minute:'07'
            },{
              check:false,
              id:'132',
              minute:'08'
            },{
              check:false,
              id:'133',
              minute:'09'
            },{
              check:false,
              id:'134',
              minute:'10'
            },{
              check:false,
              id:'135',
              minute:'11'
            },{
              check:false,
              id:'136',
              minute:'12'
            },{
              check:false,
              id:'137',
              minute:'13'
            },{
              check:false,
              id:'138',
              minute:'14'
            },{
              check:false,
              id:'139',
              minute:'15'
            },{
              check:false,
              id:'140',
              minute:'16'
            },{
              check:false,
              id:'141',
              minute:'17'
            },{
              check:false,
              id:'142',
              minute:'18'
            },{
              check:false,
              id:'143',
              minute:'19'
            },{
              check:false,
              id:'144',
              minute:'20'
            },{
              check:false,
              id:'145',
              minute:'21'
            },{
              check:false,
              id:'146',
              minute:'22'
            },{
              check:false,
              id:'147',
              minute:'23'
            },{
              check:false,
              id:'148',
              minute:'24'
            },{
              check:false,
              id:'149',
              minute:'25'
            },{
              check:false,
              id:'150',
              minute:'26'
            },{
              check:false,
              id:'151',
              minute:'27'
            },{
              check:false,
              id:'152',
              minute:'28'
            },{
              check:false,
              id:'153',
              minute:'29'
            },{
              check:false,
              id:'154',
              minute:'30'
            },{
              check:false,
              id:'155',
              minute:'31'
            },{
              check:false,
              id:'156',
              minute:'32'
            },{
              check:false,
              id:'157',
              minute:'33'
            },{
              check:false,
              id:'158',
              minute:'34'
            },{
              check:false,
              id:'159',
              minute:'35'
            },{
              check:false,
              id:'160',
              minute:'36'
            },{
              check:false,
              id:'161',
              minute:'37'
            },{
              check:false,
              id:'162',
              minute:'38'
            },{
              check:false,
              id:'163',
              minute:'39'
            },{
              check:false,
              id:'164',
              minute:'40'
            },{
              check:false,
              id:'165',
              minute:'41'
            },{
              check:false,
              id:'166',
              minute:'42'
            },{
              check:false,
              id:'167',
              minute:'43'
            },{
              check:false,
              id:'168',
              minute:'44'
            },{
              check:false,
              id:'169',
              minute:'45'
            },{
              check:false,
              id:'170',
              minute:'46'
            },{
              check:false,
              id:'171',
              minute:'47'
            },{
              check:false,
              id:'172',
              minute:'48'
            },{
              check:false,
              id:'173',
              minute:'49'
            },{
              check:false,
              id:'174',
              minute:'50'
            },{
              check:false,
              id:'175',
              minute:'51'
            },{
              check:false,
              id:'176',
              minute:'52'
            },{
              check:false,
              id:'177',
              minute:'53'
            },{
              check:false,
              id:'178',
              minute:'54'
            },{
              check:false,
              id:'179',
              minute:'55'
            },{
              check:false,
              id:'180',
              minute:'56'
            },{
              check:false,
              id:'181',
              minute:'57'
            },{
              check:false,
              id:'182',
              minute:'58'
            },{
              check:false,
              id:'183',
              minute:'59'
            }],
          seconds:[
            {
              check:true,
              id: '184',
              second: '00'
            },{
              check:false,
              id:'185',
              second:'01'
            },{
              check:false,
              id:'186',
              second:'02'
            },{
              check:false,
              id:'187',
              second:'03'
            },{
              check:false,
              id:'188',
              second:'04'
            },{
              check:false,
              id:'189',
              second:'05'
            },{
              check:false,
              id:'190',
              second:'06'
            },{
              check:false,
              id:'191',
              second:'07'
            },{
              check:false,
              id:'192',
              second:'08'
            },{
              check:false,
              id:'193',
              second:'09'
            },{
              check:false,
              id:'194',
              second:'10'
            },{
              check:false,
              id:'195',
              second:'11'
            },{
              check:false,
              id:'196',
              second:'12'
            },{
              check:false,
              id:'197',
              second:'13'
            },{
              check:false,
              id:'198',
              second:'14'
            },{
              check:false,
              id:'199',
              second:'15'
            },{
              check:false,
              id:'200',
              second:'16'
            },{
              check:false,
              id:'201',
              second:'17'
            },{
              check:false,
              id:'202',
              second:'18'
            },{
              check:false,
              id:'203',
              second:'19'
            },{
              check:false,
              id:'204',
              second:'20'
            },{
              check:false,
              id:'205',
              second:'21'
            },{
              check:false,
              id:'206',
              second:'22'
            },{
              check:false,
              id:'207',
              second:'23'
            },{
              check:false,
              id:'208',
              second:'24'
            },{
              check:false,
              id:'209',
              second:'25'
            },{
              check:false,
              id:'210',
              second:'26'
            },{
              check:false,
              id:'211',
              second:'27'
            },{
              check:false,
              id:'212',
              second:'28'
            },{
              check:false,
              id:'213',
              second:'29'
            },{
              check:false,
              id:'214',
              second:'30'
            },{
              check:false,
              id:'215',
              second:'31'
            },{
              check:false,
              id:'216',
              second:'32'
            },{
              check:false,
              id:'217',
              second:'33'
            },{
              check:false,
              id:'218',
              second:'34'
            },{
              check:false,
              id:'219',
              second:'35'
            },{
              check:false,
              id:'220',
              second:'36'
            },{
              check:false,
              id:'221',
              second:'37'
            },{
              check:false,
              id:'222',
              second:'38'
            },{
              check:false,
              id:'223',
              second:'39'
            },{
              check:false,
              id:'224',
              second:'40'
            },{
              check:false,
              id:'225',
              second:'41'
            },{
              check:false,
              id:'226',
              second:'42'
            },{
              check:false,
              id:'227',
              second:'43'
            },{
              check:false,
              id:'228',
              second:'44'
            },{
              check:false,
              id:'229',
              second:'45'
            },{
              check:false,
              id:'230',
              second:'46'
            },{
              check:false,
              id:'231',
              second:'47'
            },{
              check:false,
              id:'232',
              second:'48'
            },{
              check:false,
              id:'233',
              second:'49'
            },{
              check:false,
              id:'234',
              second:'50'
            },{
              check:false,
              id:'235',
              second:'51'
            },{
              check:false,
              id:'236',
              second:'52'
            },{
              check:false,
              id:'237',
              second:'53'
            },{
              check:false,
              id:'238',
              second:'54'
            },{
              check:false,
              id:'239',
              second:'55'
            },{
              check:false,
              id:'240',
              second:'56'
            },{
              check:false,
              id:'241',
              second:'57'
            },{
              check:false,
              id:'242',
              second:'58'
            },{
              check:false,
              id:'243',
              second:'59'
            }
          ],
          ymd:'',
          hour :'00',
          minute:'00',
          second:'00',
          temp: '',
          time:''
        }
    },
    watch: {
        now () {
          this.update();
        },
        show () {
          this.update();
        }
    },
    methods: {
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
      isShowdateTime() {
        this.show = !this.show;
        this.isShowTime = false;
      },
      close () {
        this.isShowTime = false;
        this.show = false;
      },
      clear() {
        this.isShowTime = false;
        this.show = false;
        for(var i=0; i< this.hours.length; i++) {
          if(i === 0) {
            this.hours[i].check = true;
          }else {
            this.hours[i].check = false;
          }
        }

        for(var i=0; i< this.minutes.length; i++) {
          if(i === 0) {
            this.minutes[i].check = true;
          }else {
            this.minutes[i].check = false;
          }
        }

        for(var i=0; i< this.minutes.length; i++) {
          if(i === 0) {
            this.seconds[i].check = true;
          }else {
            this.seconds[i].check = false;
          }
        }

        this.hour = '00',
        this.minute = '00',
        this.second = '00',
        this.value = '';
        this.ymd = '';
        this.now = this.parse(this.valueDefault) || new Date();
      },
      update () {

        var arr = [];
        var time = new Date(this.now);
        time.setMonth(time.getMonth(), 1);           // the first day
        var curFirstDay = time.getDay();
        curFirstDay === 0 && (curFirstDay = 7);
        time.setDate(0);                             // the last day
        var lastDayCount = time.getDate();
        for (let i = curFirstDay; i > 0; i--) {
          let tmpTime = new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1);

          arr.push({
              text: lastDayCount - i + 1,
              time: tmpTime,
              status: 'date-pass'
          });
        }

        time.setMonth(time.getMonth() + 2, 0);       // the last day of this month
        var curDayCount = time.getDate();
        time.setDate(1);                             // fix bug when month change
        var value = this.ymd || this.stringify(new Date());
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
          if(this.get_disable(t.time.getTime())){
              t.status = 'date-disable'    
          }
            
        })
        this.date = arr;
      },

      yearClick (flag) {
        this.now.setFullYear(this.now.getFullYear() + flag);
        this.now = new Date(this.now);
      },

      monthClick (flag) {
        this.now.setMonth(this.now.getMonth() + flag,1);
        this.now = new Date(this.now);
      },

      stringify (time = this.now, format = this.formatYmd) {
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
            D: date,
        };
        return format.replace(/Y+|M+|D+/g, function (str) {
            return map[str];
        });
      },

      pickDate (index,status) {
        if( 'date-disable' == status) return
        this.now = new Date(this.date[index].time);
        this.ymd = this.stringify();
      },

      nowTime() {
        var date = new Date();

        if(!this.ymd) {
          var year='', month='', day='';
          year = date.getFullYear();
          month = date.getMonth() + 1;
          day = date.getDate();

          this.ymd = year + '-' + month + '-' + day;
        }

        this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        this.time = this.hour + ':' + this.minute + ':' + this.second;
        this.value = this.ymd + ' ' + this.time;

        this.checkItem(this.hour, this.hours, 'hour');
        this.checkItem(this.minute, this.minutes, 'minute');
        this.checkItem(this.second, this.seconds, 'second');

        this.show = false;
        this.isShowTime = false;
      },

      checkDateTime() {
        if(!this.ymd) {
          var date = '', year='', month='', day='';
          date = new Date();
          year = date.getFullYear();
          month = date.getMonth() + 1;
          day = date.getDate();

          this.ymd = year + '-' + month + '-' + day;
        }

        this.time =  this.hour + ':' + this.minute + ':' + this.second;
        this.value = this.ymd + ' ' + this.time; 
        this.show = false;
        this.isShowTime = false;
      },

      parse (str) {
        var time = new Date(str);
        return isNaN(time.getTime()) ? null : time;
      },
      
      showTime() {
        this.isShowTime = true;
        setTimeout(()=>{
          this.chekckedTimePosition();
        })
        
      },
      hideTime() {
        this.isShowTime = false;
      },

      showActive(id) {
        this.temp = id;
        this.isActive = true;
      },

      hideActive(id) {
        this.temp = id;
        this.isActive = false;
      },

      hourClick(obj) {

        this.hours.forEach((item) => {
          if(obj === item) {
            this.hour = item.hour;
            item.check = true;
          }else {
            item.check = false;
          }
        });

      },

      minuteClick(obj) {

        var minute = '';

        this.minutes.forEach((item) => {
          if(obj === item) {
            this.minute = item.minute;
            item.check = true;
          }else {
            item.check = false;
          }
        });
      },

      secondClick(obj) {

        this.seconds.forEach((item) => {
          if(obj === item) {
            this.second = item.second;
            item.check = true;
          }else {
            item.check = false;
          }
        });
      },

      isContains(e){
        if (this.$el && !this.$el.contains(e.target)) {
          this.close();
        }
      },

      checkItem(val, arr, key) {
        arr.forEach((item) => {
          if(val == item[key]) {
            item.check = true;
          }else {
            item.check = false;
          }
        })
      },

      chekckedTimePosition() {
        var hourLi = '', minuteLi='', secondLi='', hourUl='', minuteUl='', secondUl='';

        hourUl = document.getElementById('hour-ul');
        minuteUl = document.getElementById('minute-ul');
        secondUl = document.getElementById('second-ul');

        this.hours.forEach((item) => {
          if(!!item.check) {
            hourLi = document.getElementById(item.id);
          }
        });

        this.minutes.forEach((item) => {
          if(!!item.check) {
            minuteLi = document.getElementById(item.id);
          }
        });

        this.seconds.forEach((item) => {
          if(!!item.check) {
            secondLi = document.getElementById(item.id);
          }
        });

        if(hourLi.offsetTop >=100) {
          hourUl.scrollTop = hourLi.offsetTop - 50;
        }

        if(minuteLi.offsetTop >=100) {
          minuteUl.scrollTop = minuteLi.offsetTop - 50;
        }

        if(secondLi.offsetTop >=100) {
          secondUl.scrollTop = secondLi.offsetTop - 50;
        }

      }

    },
    ready () {

      if (this.value === undefined || this.value == null) {
        this.value = '';
      }

      if(this.value != '') {
        this.ymd = this.value.slice(0,10);
        this.hour = this.value.slice(11,13);
        this.minute = this.value.slice(14,16);
        this.second = this.value.slice(17,19);

        this.checkItem(this.hour, this.hours, 'hour');
        this.checkItem(this.minute, this.minutes, 'minute');
        this.checkItem(this.second, this.seconds, 'second');
      }

      this.now = this.parse(this.value.slice(0,10)) || this.parse(this.valueDefault) || new Date();
      document.addEventListener('click', this.isContains , false);
    },
    beforeDestroy () {
      document.removeEventListener('click', this.isContains, false);
    }

  };
</script>
