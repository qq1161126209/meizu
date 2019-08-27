<template>
    <div class='dizhi_inp'>
                    <div class="header1">
                             <h1  @click="go" >
                                    <
                                </h1>
                                <h2>添加收货地址</h2>
                        </div>
                       <div class="section">
                          
                           <div><input type="text" @input="search1()" v-model="inp1_val" id="receiver" class="inp" value="" data-name="收货人姓名" data-required="true" max-length="15" required-msg="请填写收货人姓名" placeholder="收货人姓名">
                           <span>{{span1}}</span>
                           </div>
                           
                            <div><input type="tel" @input="search1()" v-model="inp2_val" id="tel-number" class="inp" value="" data-type="phone" data-required="true" required-msg="请填写收货人手机号" type-msg="手机号码不正确~" placeholder="手机号码">
                            <span>{{span2}}</span>
                            </div>
                        
                            <!-- <input type="text" id="region-compeleted" data-required="true" required-msg="请选择所在地区" placeholder="XX省XX市XX区/县"> -->
                               <div class="liandong">
                                <div class="city" @click="toAddress">{{city}}</div>
                                <v-distpicker type="mobile" @selected='selected' v-show="addInp" style="width: 300px">
                                </v-distpicker>
                                <div class="mask" v-show="mask"></div>
                                </div>
                        
                        <div>
                            <input type="text" @input="search1()" v-model="inp3_val" id="address" value="" class="inp" data-name="详细地址" data-required="true" required-msg="请填写详细地址" min-length="3" max-length="50" placeholder="详细地址">
                            <span>{{span3}}</span>
                        </div>

                       
                       </div>
                        <div class="bull" v-if="bull" @click="fk()">

                        </div>
                        <div class="tijiao" @click="go">
                            {{tijiao}}
                        </div>
                       
    </div>
</template>
<script>
import VDistpicker from 'v-distpicker';
import {mapState,mapMutations} from 'vuex'
export default {
      name: 'join_page',
  components: { VDistpicker },
  data () {
    return {
      city:'请选择地区',
      addInp :false,
      mask:false,
      inp1_val:"",
      inp2_val:"",
      inp3_val:"",
      tijiao:"提交",
      span1:"",
      span2:"",
      span3:"",
      bull:true
    }
  },
  
    methods:{
        fk(){
             this.span1="请输入上述信息";
             this.span2="请输入上述信息"
             this.span3="请输入上述信息"
        },
        go(){
            // console.log(1)
            this.$router.go(-1)
        },
         toAddress(){
      this.mask = true;
      this.addInp = true
    },
     search1(event) {
        // console.log(this.inp1_val)
        // console.log(this.inp2_val)
        // console.log(this.inp3_val)
       if(this.inp1_val){
             this.span1=""
        }
        if(this.inp3_val){
             this.span3=""
        }
        var reg = new RegExp(/^1[34578]\d{9}$/) || new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);;
        
        if(this.inp1_val && reg.test(this.inp2_val) && this.inp3_val  ){
            this.bull=false;
            this.$store.commit('city',this.city)
            this.$store.commit("f11",[this.inp1_val,this.inp2_val,this.inp3_val])
        }else{
            this.bull=true;
        }
     },
    // 省市区三级联动
    selected(data){
      this.mask =false;
      this.addInp = false;
      this.city = data.province.value + ' ' + data.city.value +' ' + data.area.value;
    }
       
    },
}
</script>