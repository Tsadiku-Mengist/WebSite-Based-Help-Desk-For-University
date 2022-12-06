<template>
<div>
<div class="Administration">
   <sidebar_A/>
   <div class="content">
<router-view/>
 <Administration_home/>
   </div>
    </div>

    </div>
</template>
<script>
import sidebar_A from '../components/sidebar_A.vue'
import Administration_home from './Administration_home.vue'
export default {
    name:'Administration',
    components:{
        sidebar_A,
        Administration_home
    }
}
</script>
<style scoped>
.Administration{
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