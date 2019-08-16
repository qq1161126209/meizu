<template>
<div>
    <div class="loading" v-if="block1">
            数据加载中...
    </div>
            <div class="phone_" v-if="block">
                        
                            <div class="head">
                                <router-link to="/" class="fanhui">
                                    <
                                </router-link>                          
                            </div>
                        
                        <div class="cont">
                            <a href=''>
                                <div><img :src="this.cat_page.img" alt=""></div>
                                <h3>{{this.cat_page.name}}</h3>
                                <h4>{{this.cat_page.skuprice}}</h4>
                                <span>分期价:暂无数据</span>
                                <p>{{this.cat_page.title}}</p>
                            </a>
                    </div>
                        <div>
                            手机信息:无数据
                        </div>
                        <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div> <div>
                            手机信息:无数据

                        </div>
                <div class="cat_">
                    <div class="left">
                        <div class="box">
                            <i></i>
                            <span>客服</span>
                        </div>
                        <div class="box">
                            <i></i>
                            <span>收藏</span>
                        </div>
                        <div class="box">
                            <router-link to="/Cat">
                            <i></i>
                            <span>购物车</span>
                            </router-link>
                        </div>
                    </div>
                    <div class="right">
                        <div class="box1"  @click="jiaru" >
                            加入购物车
                        </div>
                        <div class="box2">
                            立即购买
                        </div>
                                                    
                    </div>
                </div>
                <div class="CAT">
                    
                </div>
            </div>


    

    </div>
</template>
<script>
import { mapState,mapActions } from 'vuex';
var s=[];
export default {
    data(){
        return{
            block:true,
            block1:false
        }
    },
     methods: {
        jiaru(){
            this.$store.commit("jiaru",this.$route.query.id)
        }
  },
    computed: {
        
        ...mapState(['cat_page']),
    },
    created(){
        
    },
    mounted() {
        if(this.$route.query.id){
                 this.$store.dispatch('f2',this.$route.query.id);   
        }

  }, 
}
</script>