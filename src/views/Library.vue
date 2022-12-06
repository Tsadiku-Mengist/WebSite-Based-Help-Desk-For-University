<template>
   <div class="Library">
<div class="Dashboard_L">
    
   <sidebar_L/>
   <div class="content">
    
<router-view/>
 <Library_home/>   
   </div> 
     </div>

             </div>


</template>
<script>
import sidebar_L from '../components/sidebar_L.vue'
import Library_home from './Library_home.vue'
export default {
    name:'Dashoard_L',
    components:{
        sidebar_L,
        Library_home
    }
}
</script>
<style scoped>
.Dashboard_L{
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: rgb(22 163 74);
   
    width: 100vw;

}
.content{
    background-color: white;
    border-radius: 20px;
    margin: 6px 6px 6px 0px;
}
</style>