<template>
  <div class="app">
      <div class="nave bg-green-600">
         <div class="md:flex justify-between
                 items-center  grid grid-cols-1 md:grid-cols-3 gap-2">
         
                  <div >
                     <img src="./assets/dmu_logo.png" alt="" class="pl-20 pt-10">
                  </div>
                   
                    <div>
                     <p class="  pt-10 text-4xl text-white font-serif">Debre Markos University</p>
                     <p class="  text-2xl text-white font-serif">GROW WISER AT THE WATER TOWER</p>
                     <p class=" pt-5  text-4xl text-white font-serif">ደብረ ማርቆስ ዩኒቨርሲቲ</p>
                     <p class="  text-2xl text-white font-serif">በውሃ ማማ ላይ በጥበብ ያሳድጉ</p>                                          
                    </div>

                    <div class="icon mr-20">
                      <div class="call flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" fill="none"   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" color="white" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                       </svg>
                               <p class="font-serif text-white text-lg">
                                 +251-58-178-0033</p>
                      </div>

                     <div class="post flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-15 w-10" viewBox="0 0 20 20" fill="currentColor" color="white">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                     </svg>
                        <p class="font-serif text-white text-lg">
                           prcd@dmu.edu.et</p>
                     </div>                                          
                    </div>

         </div>
         <div class="bg-gray-900">
    <ul v-show="!mobile" class="navigation text-gray-100 py-3.5 px-4 mt-20 hidden shadow md:flex justify-between
                 items-center ">
                 
       <router-link to="/" class="text-xl hover:text-green-500" >Home</router-link>
       <router-link to="/administration" class="text-xl hover:text-green-500"> Administration</router-link>
       <router-link to="/register" class="text-xl hover:text-green-500">Register</router-link>
       <router-link to="/colleges" class="text-xl hover:text-green-500">Colleges</router-link>
       <router-link to="/finance" class="text-xl hover:text-green-500">Finace</router-link>
       <router-link to="/library" class="text-xl hover:text-green-500">Library</router-link>
       <router-link to="/other" class="text-xl hover:text-green-500">Other</router-link>

       <router-link to="/admin" class="text-xl hover:text-green-500"> 
                                      <img src="./assets/admin_icon.png" 
                                       alt="" 
                                       class="w-10 h-10"></router-link> 
                                       </ul>
                                       <div class="icon block md:hidden text-gray-100 py-3.5 pl-5 right-6 mt-20 shadow cursor-pointer">
                                        <button @click="toggleMobileNav" v-show="mobile" class="flex flex-col" :class="{'icon-active':mobileNav}">
                                          <div class="w-6 h-1 bg-white"></div>
                                          <div class="w-6 h-1 my-1 bg-white"></div>
                                          <div class="w-6 h-1 bg-white"></div>
                                           
                                        </button>
                                       </div>
                                       <transition name="mobile-nav">
                                        <ul v-show="mobileNav" class="dropdown-nav flex flex-col text-gray-100">
                                          <router-link to="/" class="text-xl mb-6 hover:text-green-500" >Home</router-link>
       <router-link to="/administration" class="text-xl mb-6 hover:text-green-500"> Administration</router-link>
       <router-link to="/register" class="text-xl mb-6 hover:text-green-500">Register</router-link>
       <router-link to="/colleges" class="text-xl mb-6 hover:text-green-500">Colleges</router-link>
       <router-link to="/finance" class="text- mb-6 hover:text-green-500">Finace</router-link>
       <router-link to="/library" class="text-xl mb-6 hover:text-green-500">Library</router-link>
       <router-link to="/other" class="text-xl mb-6 hover:text-green-500">Other</router-link>

       <router-link to="/admin" class="text-xl hover:text-green-500"> 
                                      <img src="./assets/admin_icon.png" 
                                       alt="" 
                                       class="w-10 h-10"></router-link>
                                        </ul>
                                       </transition>
<router-link to="/Admin_home" active-class="active" tag="button" class="side-btn"></router-link>
     </div>
     </div>
        <div>
            <router-view v-slot="{ Component }">
              <transition name="route" mode="out-in">
<component :is="Component"></component>
              </transition>
             </router-view>
          </div>



 <footer>
       <div class="footer">
                 <div class="p-10 bg-gray-800 text-gray-200">
                    <div class="max-w-7xl mx-auto">
                      <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div class="mb-5">
                           <h4 class="text-2xl pb-4">Location</h4>
                             <p class="text-gray-500">
                           Amhara Administrative Region <br>
                          Misrak Gojjam Zone <br>
                           Ethiopia <br><br>
                          <strong>Phone</strong>+251-58-178-0033<br>
                          <a href="mailto:prcd@dmu.edu.et"><strong>Email:</strong>prcd@dmu.edu.et</a><br><br>
                           </p>
                        </div>
                          
                        <div class="mb-5">
                           <h4 class="bp-4">Usefull links</h4> 
                            <ul class="text-gray-500">
                              <li class="pb-4"><i class="fa fa-chevron-right"></i> <a href="" class="hover:text-yellow-500">Home</a> </li>
                              <li class="pb-4"><i class="fa fa-chevron-right"></i><a href="" class="hover:text-yellow-500">About us</a> </li>
                              <li class="pb-4"><i class="fa fa-chevron-right"></i><a href="" class="hover:text-yellow-500">Services</a></li>
                              <li class="pb-4"><i class="fa fa-chevron-right"></i><a href="" class="hover:text-yellow-500">Term of services</a></li>
                              <li class="pb-4"><i class="fa fa-chevron-right"></i><a href="" class="hover:text-yellow-500">Privace policy</a></li>
                            </ul>                
                        </div>

                         <div class="mb-5">
                          <h4 class="bp-4">Our service</h4> 
                            <ul class="text-gray-500">
                              <li class="pb-4"><i class="fa fa-chevron-right"></i><a href="" class="hover:text-yellow-500">Web design</a></li>
                              <li class="pb-4"><i class="fa fa-chevron-right"></i><a href="" class="hover:text-yellow-500">Web development</a></li>
                              <li class="pb-4"><i class="fa fa-chevron-right"></i><a href="" class="hover:text-yellow-500">product mangement</a></li>
                              <li class="pb-4"><i class="fa fa-chevron-right"></i><a href="" class="hover:text-yellow-500">Marketing</a></li>
                              <li class="pb-4"><i class="fa fa-chevron-right"></i><a href="" class="hover:text-yellow-500">graphics design</a></li>
                            </ul>  
                         </div>

                         <AddComment/>

                      </div>

                    </div>
                </div > 

                     <div class="w-full bg-gray-900 text-gray-500 px-10">
                       <div class="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
                         <div class="text-center">
                           <div>
                            copyright <strong><span>University</span></strong>.All Right Reserved
                           </div>
                            <div>
                              Designe By: <a href="" class="text-yellow-500">Developers</a>
                            </div>
                         </div>
                           <div class="text-center text-white text-2xl mb-2">
                             <a href="#" class="w-10 h-10 rounded-full bg-yellow-500 mx-1 inline-block pt-1"><fa :icon="['fab','youtube']"  /></a>
                             <a href="#" class="w-10 h-10 rounded-full bg-yellow-500 mx-1 inline-block pt-1"><fa :icon="['fab','instagram']" /></a>
                             <a href="#" class="w-10 h-10 rounded-full bg-yellow-500 mx-1 inline-block pt-1"><fa :icon="['fab','facebook']" /></a>
                             <a href="#" class="w-10 h-10 rounded-full bg-yellow-500 mx-1 inline-block pt-1"><fa :icon="['fab','skype']" /></a>
                             <a href="#" class="w-10 h-10 rounded-full bg-yellow-500 mx-1 inline-block pt-1"><fa :icon="['fab','linkedin']" /></a>
                
                           </div>
                       </div>

                     </div>
             
              
   <div id="developers" class="bg-green-600 py-0 text-white">
     <div class="container mx-auto py-1 ">
       <h2 class="text-3xl font-bold mb-1 text-center">About Developers</h2>
       <p class="px-24 text-center">we are 4th year Computer Engineering students at Bahir Dar University,<br>and prepared this website to Debre Markos University main campus for <strong>Help Desk</strong>  during our internship pariod. </p>
       <p class="px-24 text-center"><strong>Copyright 2022/23 G.C</strong></p>
       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
         <div class="w-1/3 text-center p-6">
               <div class="flex justify-center mb-5">
                <img src="./assets/tsadiku.jpg" alt="" class="rounded-full w-20 h-20 ">
               </div>
               <h5 class="mb-1 font-bold">Tsadiku Mengist</h5>
               <p class="mb-1 "><a href="mailto:tsadikumengist14@gmail.com">tsadikumengist14@gmail.com</a></p>
                 
                 </div>   
      


                  <div class="w-1/3 text-center p-6">
               <div class="flex justify-center mb-5">
                <img src="./assets/betelhem.jpg" alt="" class="rounded-full w-20 h-20 ">
              
          
               </div>
               <h5 class="mb-1 font-bold">Betelhem Lema</h5>
               <p class="mb-1"><a href="mailto:betelhem8484@gmail.com">Betelhem8484@gmail.com</a></p>
                 
                 </div>

                

                <div class="w-1/3 text-center p-6">
               <div class="flex justify-center mb-5">
                <img src="./assets/ozi.jpg" alt="" class="rounded-full w-20 h-20 ">
               </div>
               <h5 class="mb-1 font-bold">Oziann Haddis</h5>
               <p class="mb-1"><a href="mailto:OziannHaddis14@gmail.com">OziannHaddis14@gmail.com</a></p>
                  
                 </div>
               </div>
              </div>
             </div>
             </div>
    </footer>
    

     
  </div>
</template>
<script>
  import AddComment from './views/AddComment.vue';
 export default {
 name: "App",
 components:{
  AddComment
 },
 data(){
  return{
   scrollPosition:null,
   mobile:null,
   mobileNav:null,
   windowWidth:null
  };
 }, 
 created(){
  window.addEventListener('resize',this.checkScreen);
  this.checkScreen();
 },
methods:{
  toggleMobileNav(){
    this.mobileNav = !this.mobileNav;
  },
  checkScreen(){
     this.windowWidth = window.innerWidth;
     if(this.windowWidth <= 750){
      this.mobile = true;
      return;
      
     }
     this.mobile = false;
     this.mobileNav = false;
     return;

  }
},

   }

</script>
<style>
.route-inter-form{
opacity: 0;
transform: translateX(100px);
}
.route-enter-active{
 transition: all 0.4s ease-out;  
}
.route-leave-to{
  opacity: 0;
transform: translateX(-100px);

}
.route-leave-active{
   transition: all 0.4s ease-out; 
}</style>