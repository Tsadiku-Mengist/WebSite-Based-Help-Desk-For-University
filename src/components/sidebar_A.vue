<template>
   <div class="sidebar">
    <div class="title underline pl-5">
        Administration Office
    </div>
    <div class="menu-items">
        <router-link to="/president_adm" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
          President Office
        </div>
        </router-link>
            <router-link to="/Acadamic_adm" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
           Acadamic Affaris V/President Office
        </div>
        </router-link>
            <router-link to="/Continuing_adm" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
            Continuing Education Cordinating Diractor
        </div>
        </router-link>
            <router-link to="/Corporate_adm" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
            Corporate Communication Diractor
        </div>
        </router-link>
            
       
    </div>
   </div>
</template>
<style scoped>
.title{
color: white;
font-size: 25px;
margin-top:5px ;
}
.menu-items{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}
.menu-items > *{
    margin-top: 20px;

}
.side-btn:focus{
    outline: none;
}
.side-btn.active{
position: relative;
background-color: white;
color: green;
font-weight: 500;
margin-left: 10px;
border-radius: 15px 0 0 15px;
}
.side-btn.active::before{
    position:absolute;
    content: "";
    top:-30px;
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}

.side-btn.active::after{
    position:absolute;
    content: "";
    bottom:-30px;
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}
.side-btn{
    border: none;
    padding: 10px 0px;
    color: white;
    cursor: pointer;
    font-size: 15px;
    padding-left: 2px;
    background-color: transparent;

}
.side-btn.active .link-container::before{
position:absolute;
top:-60px;
right: 0;
content:"";
height: 60px;
width: 60px;
border-radius: 50%;
background-color:  rgb(22 163 74);
}
.side-btn.active .link-container::after{
position:absolute;
bottom:-60px;
right: 0;
content:"";
height: 60px;
width: 60px;
border-radius: 50%;
background-color:  rgb(22 163 74);
z-index: 99;
}
</style>