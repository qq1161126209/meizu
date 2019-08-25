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
      cart_page:[],
      user:"1"
    },
    mutations:{
        f0(state,val){
         state.user=val
        },
          f1(state, obj){
            state.home=obj
          },
          f2(){
            
          },
          f3(state,id){
              // state.product_page=state.home.block_317[id*1]   
              // id=id*1
              // console.log(id)
              for(var i in state.home){
                 let ids =  state.home[i].find( g => g.skuid == id ); 
                  if(ids){
                    state.product_page=ids
                  }
              }
           
          },

          jiaru(state,id){       
            // id=id*1
            // console.log(state.home)
            // console.log(id)
            let goodInCart =  state.cart_page.find( g => g.skuid == id );
              if(goodInCart){
              state.cart_page = state.cart_page.map( g => {
                    if(g.skuid == id){
                        g.num++;
                    }
                    return g
                })
            }else{
                // 数组的find方法，可以找出符合条件的元素
                    for(var i in state.home){
                      let good =  state.home[i].find( g => g.skuid == id ); 
                        if(good){
                            state.cart_page.push({
                              ...good,num:1
                          })
                        }
                  }
               
                // 加入购物车
                
           }
      },



      
      increase(state,id){
        // 商品数量增加
        state.cart_page = state.cart_page.map( good => {
            if(good.skuid == id){
                good.num++;
            }
            return good;
        })
    },
    decrease(state,id){

        // 根据id找到商品
        let good = state.cart_page.find( go=> go.skuid ==id );
        // 判断商品数量是否大于1，如果大于1，把该商品的数量-1；
        if(good.num >1){
          state.cart_page = state.cart_page.map( good => {
                if(good.skuid == id){
                    good.num--;
                }
                return good;
            })
        }else{
            // 否则，把该商品从数组cart中移除
            state.cart_page = state.cart_page.filter( go => go.skuid != id )
        }
        
    }

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
    getters:{
      // 计算总价
      totalPrice ({cart_page}){
       
          let total = 0;
          for(let i=0; i< cart_page.length;i++){
              let good = cart_page[i];
              
              // skuprice=good.skuprice.Substring(1);
              var skuprice=(good.skuprice.slice(1))
              total += skuprice * good.num
          }
          return total;
      }
  }
})
export default store;