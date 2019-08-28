<template>
    <div class="s">
            <router-link to="/" class="sty">
             <
            </router-link>
            <input type="text" v-model="name1">
            <span>搜索</span>
            <div>
                <ul>
                    <li v-for=" s,i in arr" :key="i">
                        {{s.name}}
                    </li>
                </ul>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            router1:[],
            router2:[],
            name1:'',
        }
    },
    computed:{
        arr(){
            const name1=this.name1;
            var ff;
            if(name1!==""){
                if(this.router2[11]!==undefined){
                ff=this.router2[11].filter( g => (g.name.indexOf(name1)!==-1)  ); 
            }
            }
            return ff
        }
    },
    mounted(){
         this.$store.dispatch('f2')
         .then(res=>{
            // console.log(this.$store.state.product_page)
            this.router1=this.$store.state.home
            // console.log(this.router1)
            for(var i in this.router1){
                this.router2.push(this.router1[i])
            }
            // console.log(this.router2)

        })  
    }
}
</script>