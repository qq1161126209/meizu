import Vue from 'vue'
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex,Axios)



// 状态store对象
const store = new Vuex.Store({
    // state是一个对象，用来保存所有的应用状态
    state: {
      home:{},
      ids:[],
      cat:[]
    },
    mutations:{
          f1(state, obj){
            state.home=obj
          },
          f3(state,id){
            state.ids.push(id);
            console.log(state.ids)
          }
    },
    actions: {
      f2(){
        Axios.get("https://easy-mock.com/mock/5d536ee9de7d3605830fc362/example/phone")
        .then((res) => {
           store.commit('f1', res.data)
        })
      },

    },
})
export default store;