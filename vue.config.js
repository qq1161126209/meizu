module.exports = {
  devServer: {
    proxy: {
     '/data': {
          target:'https://dms-dataapi.meizu.com/data', // 要请求的目标服务器
          changeOrigin: true,
          ws:false
        },
  }
}
}



// mutations:{
//   setHome(state,data){
//     state.home = data
//   }
// },