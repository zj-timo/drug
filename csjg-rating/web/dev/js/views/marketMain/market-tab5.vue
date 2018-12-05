
<template>
  <div class="tab-inner-tit">
    <p @click="timeChoose('total')" :class="{'choosed': annualPlan=='total'}">总计</p>
    <p :class="{'choosed': item.name==annualPlan}" v-for="item in fiveYears" @click="timeChoose(item.name)" v-show="item!=fiveYears[0]">{{item.name}}年度</p>
  </div>
  <div class="tab-inner-info">
    <div class="tab-page-tit">
      <div class="tab-border-l pr-10"></div>
      <div class="tab-page">检查结果</div>
    </div>
    <div class="row">
        <table class="tab-page-table border-lr-no">
          <tr>
            <td class="bg-color">序号</td>
            <td class="bg-color">创建时间</td>
            <td class="bg-color">检查事项类型</td>
            <td class="bg-color">操作人</td>
            <td class="bg-color">具体内容</td>
          </tr>
          <tr v-for="item in checkResult" v-if="checkResult && checkResult.length!=0">
            <td>{{$index+1}}</td>
            <td>{{item.createdTime}}</td>
            <td>{{item.type | filter_map_key checkTypes}}</td>
            <td>{{item.createdBy}}</td>
            <td>
              <span>{{item.content}}</span>
            </td>
          </tr>

          <tr v-if="checkResult.length == 0">
            <td colspan="5" class="txt-c">
              <span>~没有任何检查结果~</span>
            </td>
          </tr>
        </table>
      </div>
  </div>
</template>

<script type="text/javascript">
import model from './model.js'
  export default {
    props:{        
      register_number:{
        type:String,
        default:'',
      }
    },

    data(){
        this.model=model(this.$http);
        return {
          annualPlan:fiveYears[1].name,
          fiveYears:fiveYears,
          checkResult:[],
          checkTypes:checkTypes
        }
    },   
      
    methods:{
       //检查时间选择
      timeChoose(year){
        this.annualPlan=year;
        if(year=="total"){
          this.model.patrolDetail({registerNumber:this.register_number}).then(res=>{
             Message.show('success', '加载成功', 2, () => {
                this.checkResult = res.data.result.results;
              }) 
          })
          
        }else{
          this.model.patrolDetail({registerNumber:this.register_number,annualPlan:year}).then(res=>{
             Message.show('success', '加载成功', 2, () => {
                this.checkResult = res.data.result.results;
              }) 
          })
        }

      },
    },
    watch:{
      register_number(){
        this.timeChoose(this.annualPlan);
      }
    },
    ready() {
       
    }


  }

</script>
