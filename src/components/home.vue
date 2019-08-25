<template>
<div class="banner">   
      <div class="header">
        <div class="box_left">
          <router-link to="/sou">
            <i class="iconfont icon-fangdajing"></i>
          </router-link>
        </div>

        <div>
          <a href="#">MEIZU</a>
        </div>
        <div>
             <router-link to="/">
              <i class="iconfont icon-diandiandianshu"></i>
            </router-link>
          <router-link to="/Cat">
            <i class="iconfont icon-gouwuche"></i>
          </router-link>
        </div>

    </div>

     <div class="list">
             <ul>
              <router-link to="/">推荐</router-link>
              <router-link to="/phone">手机</router-link>
              <router-link to="/shengxue">声学</router-link>
              <router-link to="/peijian">配件</router-link>
              <router-link to="/life">生活</router-link>
              </ul>
           </div>

          

           
  <swiper :options="swiperOption" ref="mySwiper" @slideChangeTransitionEnd="slideChangeEnd">
    <!-- slides -->
    <swiper-slide>
        <img class="banners"  src="../img/1.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
        <img class="banners"  src="../img/2.jpg" alt="">
    </swiper-slide>
    <swiper-slide><img class="banners" src="../img/3.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="banners"  src="../img/4.jpg" alt=""></swiper-slide>
    <swiper-slide><img  class="banners" src="../img/5.jpg" alt=""></swiper-slide>
    <swiper-slide><img  class="banners" src="../img/6.jpg" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
    

                    <router-view></router-view> 
			      <!-- <router-view class='d1' name="d1"></router-view> -->
			      <router-view class='d2' name="d2"></router-view>
			      <router-view class='d3' name="d3"></router-view>

  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
    const that = this;
    return {
      imgIndex: 1,
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        //滑动速度
        speed: 800,
        //滑动方向
        direction: "horizontal",
        //小手掌抓取滑动
        grabCursor: true,
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function() {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex= this.realIndex - 1;
          },
        },
        //分页器设置
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      }
   };
},

    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, true)
    },
    methods: {
        slideChangeEnd(){
            console.log('slideChangeEnd')
        }
    },
  }
</script>


