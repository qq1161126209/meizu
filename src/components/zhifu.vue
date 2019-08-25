<template>
    <div class="zhifu">
        
         尊敬的 : {{this.$store.state.user}}
           <h2> 总价：{{totalPrice}}</h2>
        </div>
           
    </div>
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
    mounted(){
        console.log(this.$store.state.user)
    },
    computed:{
        　　...mapState(['home','ids','cat','jiaru','cart_page']),
        ...mapGetters(["totalPrice"]),
        
    },
}
</script>