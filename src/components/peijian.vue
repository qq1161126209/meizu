<template>
     <div class="gg">
         
           
            <ul>
                
 <router-link :to="{name:'product',query:{id:s.skuid}}" v-for="s,i in home.block_321" :key="s.skuid"   >
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
import { mapState,mapActions,mapMutations } from 'vuex';

export default {
        methods: {

  },
    computed: {
        ...mapActions(['f2','f3']),
        ...mapState(['home']),
        ...mapMutations(["f3"])
    },
    mounted(){
         this.$store.dispatch('f2')
         

    }
}
</script>