<template>
    <div class="zhifu">
                        <div class="header1">
                             <h1  @click="go" >
                                    <
                                </h1>
                                <h2 style="font-size:1rem">结算</h2>
                        </div>


                        <div class="dizhi" v-if="fal" >
                                <div class="username" style="color:#333333;">
                                    尊敬的:{{user}}
                                </div>
                                <router-link to="dizhi" style="color:#333333;font-size:14px;">
                                    点击新增收货人和地址
                                </router-link>
                                <div class="uu"></div>
                        </div>

                        <div class="dizhi" v-else>
                                <div class="username" style="color:#333333;">
                                 {{user_xx[0]}}
                                 <span class="spano">{{user_xx[1]}}</span>
                                </div>
                            <p class="po">收货地址:{{user_xx[2]}}</p>
                            <div class="uu"></div>
                        </div>
                        <div class="zhifu_cart">
                            <ul>
                                <li v-for="j in cart_page" key="j.skuid">
                                    <h3>{{j.name}}</h3>
                                    <h4>{{j.title}}</h4>
                                    <span>{{j.skuprice}}</span>
                                           <img :src="j.img" alt="">
                                </li>
                            </ul>
                            
                        </div>
           
    </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
    data(){
        return{
            fal:true
        }
    },
    methods:{
        go(){
            // console.log(1)
            this.$router.go(-1)
        },
    },
    mounted(){
        console.log(this.user_xx)
        if(this.user_xx[0] && this.user_xx[1] && this.user_xx[2] && this.city){
            this.fal=!this.fal
        }
        console.log(this.cart_page)
    },
    computed:{
        　　...mapState(['user','city','user_xx','cart_page']),
        ...mapGetters(["totalPrice"]),
    },
}
</script>