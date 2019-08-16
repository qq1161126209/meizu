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
      cat_ids:[],
      cat:[],
      cat_page:[],
      jiaru:[],
      cart_page:[]
    },
    mutations:{
          f1(state, obj){
            state.home=obj
            // console.log(state.home)
          },
          f2(){
            
          },
          f3(state,id){
            state.cat_ids=(id);
          },
          f4(state,data){
            // console.log(state.cat_ids)
            // console.log(data)
            state.cat_page=data.block_317[state.cat_ids]
            // console.log(state.cat_page)
          },
          jiaru(state,id){
            console.log(id)
            state.jiaru.push(id)
            console.log(state.jiaru)
          },
          cart_page(state,data){
            console.log(data)
            console.log(state.jiaru)
              for(var i in state.jiaru){
                state.cart_page.push(data.block_317[state.jiaru[i]])
              }
          }
    },
    actions: {
      f2(store,id){
        Axios.get("https://easy-mock.com/mock/5d536ee9de7d3605830fc362/example/phone")
        .then((res) => {
          console.log(id)
          if(id===undefined){
            store.commit('f1', res.data);
            store.commit('cart_page', res.data)

          }else{
            store.commit('f3',id)
            store.commit('f4',res.data)
          }
        })
      },
    },
})
export default store;