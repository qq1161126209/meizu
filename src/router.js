import VueRouter from 'vue-router';

import Home from './components/home.vue';
import Home1 from './components/home1.vue';
import Home2 from './components/home2.vue';
import Cat from './components/cat.vue';
import Sou from './components/sou.vue';
import Phone from './components/phone.vue';
import peijian from './components/peijian.vue';
import shengxue from './components/shengxue.vue';
import life from './components/life.vue';
import product from './components/product.vue';
import user from './components/user.vue';
import zhifu from './components/zhifu.vue';
import dizhi from './components/dizhi.vue';
import zhifubao from './components/zhifubao.vue';












const  router = new VueRouter({
    routes:[
       {
           path:"/",component:Home,
           children:[
                { path:"/",components:{
                    d1:Home,
                    d2:Home1,
                    d3:Home2,
                } },
                {path:"/phone",components:{
                    d3:Home2,
                }},
                {path:"/peijian",component:peijian},
                {path:"/shengxue",component:shengxue},
                {path:"/life",component:life},
        ]
       },
       {path:"/sou",component:Sou},
       {path:"/product",name:"product",component:product},
       {path:"/cat",component:Cat},
       {path:"/user",component:user},
       {path:"/zhifu",component:zhifu},
       {path:"/dizhi",component:dizhi},
       {path:"/zhifubao",component:zhifubao},



       
    ]
})

export default router;