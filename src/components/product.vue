<template>
    <div class="phone_">
                <div class="cont">
                    <a href=''>
                        <div><img :src="aa.img" alt=""></div>
                        <h3>{{aa.name}}</h3>
                        <h4>{{aa.skuprice}}</h4>
                        <span>分期价:暂无数据</span>
                        <p>{{aa.title}}</p>
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
                    <i></i>
                    <span>购物车</span>
                </div>

            </div>
            <div class="right">
                <div class="box1">
                    加入购物车
                </div>
                <div class="box2">
                    立即购买
                </div>
                                              
            </div>
        </div>
    </div>
</template>
<script>
// import { mapState,mapActions } from 'vuex';

export default {
    data(){
        return{
            ss:[],
            id:0,
            aa:[],
            home:[]
        }
    },
     methods: {

  },
    computed: {
        // ...mapActions(['f2']),
        // ...mapState(['home']),
    },
   
    mounted() {
                this.axios.get("https://easy-mock.com/mock/5d536ee9de7d3605830fc362/example/phone")
                        .then((res) => {
                        this.home=res.data;
                        console.log(res.data)
                        this.home= res.data;
                         var id = this.$route.query.id;
                            // console.log(id)               
                         console.log(this.home)


                    this.id=id;
                    console.log(this.id)

                    
               this.aa= this.home.block_317[this.id]
                    })
                     
            
     

  }, 
}
</script>