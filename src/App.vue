<template>
  <div id="app">

          

        <!-- 2. 定义路由匹配成功后显示的内容 -->
                <router-view></router-view>

  </div>
</template>

<script>
function setrem(){
    //设置根元素font-size为设备宽度的 1/10
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 20 + 'px';
}
//窗口大小发生变化时，重置
window.onresize = function(){
    setrem()
}
setrem()

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>

</style>
