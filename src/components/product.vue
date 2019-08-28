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
                                <div><img :src="this.product_page.img" alt=""></div>
                                <h3>{{this.product_page.name}}</h3>
                                <h4>{{this.product_page.skuprice}}</h4>
                                <span>分期价:暂无数据</span>
                                <p>{{this.product_page.title}}</p>
                            </a>
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
                        <div class="box1"  @click="jiaru(router1)" >
                            <el-button type="text" @click="open">
                                    加入购物车
                            </el-button>
                            
                        </div>
                        <div class="box2">
                            <router-link to="/user">
                                结算
                            </router-link>
                        </div>
                                                    
                    </div>
                </div>
                <div class="CAT">
                    
                </div>
            </div>


    </div>
</template>
<script>
import { mapState,mapActions,mapMutations } from 'vuex';
var s=[];
export default {
    data(){
        return{
            block:true,
            block1:false,
            router1:0
        }
    },
     methods: {
         open() {
        this.$alert('成功加入购物车',  {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
         ...mapMutations(["jiaru"])
  },
    computed: {
        ...mapState(['product_page']),
        
    },
    created(){
        // this.$store.dispatch('f2')        
    },
    mounted() {
        this.$store.dispatch('f2',this.$route.query.id)
        .then(res=>{
            // console.log(this.$store.state.product_page)
            this.router1=this.$store.state.product_page.skuid
        }) 
        
  }, 
}
</script>