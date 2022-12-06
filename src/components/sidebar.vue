<template>
   <div class="sidebar">
    <div class="title pl-5 underline">
        List of Colleges
    </div>
    <div class="menu-items">
        <router-link to="/busness" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
           College of busness and economics
        </div>
        </router-link>
            <router-link to="/agri" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
            College of agriculcher and natural resorse
        </div>
        </router-link>
            <router-link to="/law" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
            School of law
        </div>
        </router-link>
            <router-link to="/medicne" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
            School of  medicine
        </div>
        </router-link>
            <router-link to="/Techino_College" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
            College of techinological institute 
        </div>
        </router-link>
        <router-link to="/health" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
            College of health scince
        </div>
        </router-link>
        <router-link to="/natural" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
            Natural and computational scince
        </div>
        </router-link>
        <router-link to="/social" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
            College of social scince and humanity
        </div>
        </router-link>
        <router-link to="/land" active-class="active" tag="button" class="side-btn hover:opacity-50">
        <div class="link-container pl-5" >
           Institute of land administration
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
    margin-top: 20px;
}
.menu-items > *{
    margin-top: 10px;

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