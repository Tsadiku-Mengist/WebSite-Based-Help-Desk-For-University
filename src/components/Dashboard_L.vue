<template>
   <div class="Library">
<div class="Dashboard_L">
    
   <sidebar_L/>
   <div class="content">
    
    <router-view v-slot="{ Component }">
              <transition name="route" mode="out-in">
<component :is="Component"></component>
              </transition>
             </router-view>

     
   </div> 
     </div>

             </div>


</template>
<script>
import sidebar_L from '../components/sidebar_L.vue'
export default {
    name:'Dashoard_L',
    components:{
        sidebar_L
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
.route-inter-form{
opacity: 0;
transform: translateY(100px);
}
.route-enter-active{
 transition: all 0.4s ease-out;  
}
.route-leave-to{
  opacity: 0;
transform: translateY(-100px);

}
.route-leave-active{
   transition: all 0.4s ease-out; 
}



</style>