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
                                <div><img :src="aa.img" alt=""></div>
                                <h3>{{aa.name}}</h3>
                                <h4>{{aa.skuprice}}</h4>
                                <span>分期价:暂无数据</span>
                                <p>{{aa.title}}</p>
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
                        <div class="box1" @click="jiaru_cat" >
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
// import { mapState,mapActions } from 'vuex';
var s=[];
export default {
    data(){
        return{
            ss:[],
            aa:[],
            home:[],
            block:false,
            block1:true
        }
    },
     methods: {
         jiaru_cat(){
             this.$store.state.cat.push(this.$store.state.ids[this.$store.state.ids.length-1])
             console.log(this.$store.state.cat)
         }
  },
    computed: {
        // ...mapActions(['f2']),
        // ...mapState(['home']),
    },
   
    mounted() {
                

                this.axios.get("https://easy-mock.com/mock/5d536ee9de7d3605830fc362/example/phone")
                        .then((res) => {
                        this.home=res.data;
                        if(this.$route.query.id){
                                 var id = this.$route.query.id; 
                                    this.$store.state.ids.push(id); 
                                    this.id=id;
                        }else{
                             this.id=this.$store.state.ids[this.$store.state.ids.length-1];
                        }
                        console.log(this.id)
                        console.log(this.$store.state.ids)  
                         this.aa= this.home.block_317[this.id]
                            if(this.aa){
                                this.block1=!this.block1;
                                this.block=!this.block;
                            }
                    })
                     
        
  }, 
}
</script>