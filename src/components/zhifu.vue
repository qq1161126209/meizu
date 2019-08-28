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
                                <router-link to="dizhi" style="color:#999999;font-size:14px;">
                                    点击编辑收货人和地址
                                </router-link>
                                <div class="uu"></div>
                        </div>

                        <div class="dizhi" v-else>
                                <div class="username" style="color:#333333;">
                                 {{user_xx[0]}}
                                 <span class="spano">{{user_xx[1]}}</span>
                                </div>
                            <p class="po">收货地址:{{user_xx[2]}}</p>
                            <router-link to="dizhi" style="color:#999999;font-size:14px;">
                                    点击编辑收货人和地址
                                </router-link>
                            <div class="uu"></div>
                        </div>
                        <div class="zhifu_cart">
                            <ul>
                                <li v-for="j in cart_page" :key="j.skuid">
                                    <div class="da">
                                        <h3>{{j.name}}</h3>
                                        <h4>{{j.title}}</h4>
                                        <span>{{j.skuprice}}</span>
                                    </div>
                                    <div class="di">X {{j.num}}</div>
                                    <img :src="j.img" alt="">
                                </li>
                            </ul>
                            
                        </div>
                        <div class="peisong">
                            <ul>
                                <li>
                                    <span>配送方式</span>
                                    <i>快递配送(运费0)</i>
                                </li>
                                <li>
                                    <span>发票类型</span>
                                    <p>电子发票</p>
                                </li>
                                <li>
                                    <span>发票抬头</span>
                                    <p>个人</p>
                                </li>
                                <li>
                                    <span>抬头全称</span>
                                    <p>{{user_xx[0]}}</p>
                                </li>
                                <li>
                                    <span>买家留言</span>
                                    <input type="text">
                                </li>
                                <div>
                                    <span>共{{num}}件商品</span>
                                    <i>合计:￥{{totalPrice}}</i>
                                </div>
                                 <li>
                                    <span>回购金</span>
                                    <p>未使用></p>
                                </li>
                                 <li>
                                    <span>礼品卡</span>
                                    <p>></p>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="cart_total ">
                            <h2> 总价：{{totalPrice}}</h2>
                            <div class="aa" v-if="this.kk" @click="ll()"></div>
                            <router-link to="/zhifubao">
                                结算
                            </router-link>
                        </div>
                
    </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
    data(){
        return{
            fal:true,
            num:0,
            kk:true,
        }
    },
    methods:{
        go(){
            // console.log(1)
            this.$router.go(-1)
        },
        ll(){
            alert('请添加收货地址信息或添加商品到购物车')
        }
    },
    mounted(){
        
        if(this.user_xx[0] && this.user_xx[1] && this.user_xx[2] && this.city){
            this.fal=!this.fal
        }
        console.log(this.cart_page)
        this.cart_page.find(r=>{
           this.num+= r.num
        })
        console.log(this.num)
        console.log(this.user_xx.length)
        if(this.user_xx.length>1 && this.num>0){
            this.kk=!this.kk
        }
    },
    computed:{
        　　...mapState(['user','city','user_xx','cart_page']),
        ...mapGetters(["totalPrice"]),
    },
}
</script>