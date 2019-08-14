<template>
     <div class="gg">
            <ul>
                
                    <router-link :to="{name:'product',query:{id:i}}" v-for="s,i in home.block_317" :key="s.skuid"   >
                        <img :src="s.img" alt="" >
                        <h3 className="h3">{{s.name}}</h3>
                        <div>
                            <span>{{s.skuLable}}</span>
                            {{s.title}}
                        </div>
                        <h4>{{s.skuprice}}</h4>
                       </router-link>
                    
                
            </ul>
        </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';

export default {
        methods: {

  },
    computed: {
        ...mapActions(['f1']),
        ...mapState(['home']),
    },
    mounted(){
         this.$store.dispatch('f1')
    }
}
</script>