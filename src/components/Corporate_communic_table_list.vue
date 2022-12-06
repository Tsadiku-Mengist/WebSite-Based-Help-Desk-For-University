<template>
     <div class="pb-5 pr-2">
    
     <!--header-->
     <div class="bg-green-600">
       <h3 class="font-serif text-center text-2xl pt-3 text-white font-bold">List Of Location And Personal Information On Corporate Comunication Director Office  </h3>
        
     </div>
 
        
          
 
    
 <!--spinner-->
 <div v-if="loading">
    <Spinner/>
 </div>
 <!--Error Message-->
   <div v-if="!loading && errorMessage">
      <h3 class="text-red-400 font-bold text-2xl text-center">{{errorMessage}}</h3>
   </div>
 
 <!--Card-->
        <div class=" grid lg:grid-cols-3 mt-10 "   >
           <div  class="flex bg-white " v-for="corporateDirector of corporateDirectors" :key="corporateDirector">
               <!--photo-->
          <div class="pl-5"> 
              <img :src="corporateDirector.photo" alt="" class="w-[150px] rounded-full pt-3">
          </div>
                <!--List of Name-->
          <div class="pt-10 pl-5 pb-3" > 
              <ul class="bg-gray-100  rounded w-58 divide-y divide-gray-700 divide-opacity-25 text-gray-800">
                   <li >Office Name :<span class="font-bold"> {{corporateDirector.OfficeName}}</span>  </li>
                   <li >Person Name :<span class="font-bold"> {{corporateDirector.name}}</span> </li>
                   <li >Office Number :<span class="font-bold">{{corporateDirector.officeNumber}}</span> </li>
                   <li >Buliding Number :<span class="font-bold">{{corporateDirector.bulidngNumber}}</span> </li>
              </ul>
             </div>
                     
            
           </div>
        </div>
        <div class="Back  justify-center pl-80 pt-5 pb-30">
            <router-link to="/administration" active-class="active" tag="button" type="submit" class="font-serif  text-center  font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500">
                <div class="link-container" >
                      Finish 
                </div>
                
             </router-link>
             </div>  
     </div>
 </template>
 
 
 
 <script>
 import { ContactService } from "../services/ContactService";
 import Spinner from "../components/Spinner.vue";
 
 export default {
     name: "ContactCorporateDirector",
     components: { Spinner },
     data : function (){
       return {
         loading : false,
         corporateDirectors : [],
         errorMessage : null
 
       }
     },
     created : async function (){
       try{
         this.loading = true;
         let response = await ContactService.getAllCorporateDirectors();
         this.corporateDirectors = response.data;
         this.loading = false;
       }
       catch(error) {
        this.errorMessage = error;
        this.loading = false;
       }
 
     },
    methods : 
      {clickDeleteCorporateDirector : async function (corporateDirectorId){
              try{
                this.loading = true;
                let response = await ContactService.deleteCorporateDirector(corporateDirectorId);
                 if(response){
                   let response = await ContactService.getAllCorporateDirectors();
                   this.corporateDirectors = response.data;
                   this.loading = false;
                       }
                         }
              catch(error){
               this.errorMessage = error;
               this.loading = false;
             }
               }
                 } 
                   } 
 </script>
 
 
        

