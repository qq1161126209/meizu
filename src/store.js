import Vue from 'vue'
import Vuex from 'vuex';
import Axios from 'axios';
Vue.use(Vuex,Axios)



// 状态store对象
const store = new Vuex.Store({

    // state是一个对象，用来保存所有的应用状态
    state: {
      home:[]
    },

    
    actions: {
           
               
    },

    
})
export default store;