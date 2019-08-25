<template>
    <div>
            <div class="yanzhengma">
                <div>账号登陆</div>
                
                <div>验证码登陆</div>
            </div>
            <form action="" method="" class="form"   >
              
                手机号码:<input type="text" v-model="inp1_val" @input="search($event)" class="input_1" placeholder="请输入您的手机号">
                <span style="font-size:10px;">{{span1}}</span>
                </br>
                
                验证码:<input type="text" @input="search1($event)" v-model="inp2_val"  class="input_2" placeholder='请输入下方图型验证码'>
                  <span style="font-size:10px">{{span2}}</span>
                   <div class="code" @click="refreshCode">
                      <div class="mmm">
                        <a >看不清楚 换一张</a>
                          </div>
                        <s-identify :identifyCode="identifyCode"></s-identify>
                    </div>
                          <div class="zhao" v-show="bul3"></div>
                          <router-link to="/zhifu" class="inp3" >
                            <i></i>
                            <span style="color:#fff">登陆</span>
                            </router-link>
            </form>
    </div>
</template>

<script>
import SIdentify from './identify'
export default {
  name: "codetest",
  components:{
    SIdentify
  },
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      inp1_val:"",
      inp2_val:"",
      span1:"请输入手机号",
      span2:"请输入下方验证码",
      bul1:false,
      bul2:false,
      bul3:true
    };
  },
  computed:{

  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    search (event) {
  //方法一：直接通过event.data可以获得文本内容
    console.log(this.inp1_val)
				var reg = new RegExp(/^1[34578]\d{9}$/) || new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);;
        if(reg.test(this.inp1_val)){
            this.span1="手机号正确"
            this.bul1=true;
            if(this.bul1 && this.bul2){
              this.bul3=false
               this.$store.commit('f0',this.inp1_val)
            }
        }else{
          this.span1="请输入正确的手机号"
        }
},

    search1 (event){
      console.log(this.inp2_val)
      if(this.identifyCode===this.inp2_val){
          this.span2="验证码正确"
            this.bul2=true;
             if(this.bul1 && this.bul2){
              this.bul3=false
              this.$store.commit('f0',this.inp1_val)
            }
      }
    },
  
     

   
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  }
};

</script>

<style>

</style>
