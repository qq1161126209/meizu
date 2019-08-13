module.exports = {
    devServer: {
      proxy: {
       '/': {
            target:'https://m.mi.com', // 要请求的目标服务器
            changeOrigin: true,
            ws:false
          },
        
      
    }
  }
}