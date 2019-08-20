import Vue from 'vue'
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex,Axios)


var cart_ids=[]
// 状态store对象
const store = new Vuex.Store({
    // state是一个对象，用来保存所有的应用状态
    state: {
      home:{},
      
      cat:[],
      product_page:[],
      jiaru:[],
      cart_page:[]
    },
    mutations:{
          f1(state, obj){
            state.home=obj
          },
          f2(){
            
          },
          f3(state,id){
              state.product_page=state.home.block_317[id*1]      
          },
          jiaru(state,id){
            // store.state.cart_page.push(store.state.home.block_317[id*1])
            id=id*1
            console.log(id)
            console.log( state.cart_page)
            console.log(state.home.block_317)



            let goodInCart =  state.cart_page.find( g => g.skuid == id );
            console.log(goodInCart)
              if(goodInCart){
              state.cart_page = state.cart_page.map( g => {
                    if(g.skuid == id){
                        g.num++;
                    }
                    return g
                })
            }else{
                // 数组的find方法，可以找出符合条件的元素
                let good = state.home.block_317.find((go)=> go.skuid == id)
                console.log(good)
                // 加入购物车
                state.cart_page.push({
                    ...good,num:1
                })
           }
      },

    },
    actions: {
      async f2(store,id){
        await Axios.get("https://easy-mock.com/mock/5d536ee9de7d3605830fc362/example/phone")
        .then((res) => {
          // console.log(id)
          store.commit('f1', res.data);  
          if(id!==undefined){
            store.commit('f3',id);
          }  
        })
      },
      
      
     
    },
})
export default store;