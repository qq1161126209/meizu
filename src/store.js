import Vue from 'vue'
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex,Axios)



// 状态store对象
const store = new Vuex.Store({
    // state是一个对象，用来保存所有的应用状态
    state: {
      home:[],
      
    },
  
    actions: {
      f1(){
        Axios.get("https://easy-mock.com/mock/5d536ee9de7d3605830fc362/example/phone")
        .then((res) => {
          this.state.home=res.data;
          console.log(res.data)
          return res.data
        })
      },

    },
})
export default store;