<template>
     <div class="pb-5 pr-2">
    
     <!--header-->
     <div class="bg-green-600">
       <h3 class="font-serif text-center text-2xl pt-3 text-white font-bold">List Of Location And Personal Information On College Of Medicine  </h3>
        
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
           <div  class="flex bg-white " v-for="medicineCollege of medicineColleges" :key="medicineCollege">
               <!--photo-->
          <div class="pl-5"> 
              <img :src="medicineCollege.photo" alt="" class="w-[150px] rounded-full pt-3">
          </div>
                <!--List of Name-->
          <div class="pt-10 pl-5 pb-3" > 
              <ul class="bg-gray-100  rounded w-58 divide-y divide-gray-700 divide-opacity-25 text-gray-800">
                   <li >Department :<span class="font-bold"> {{medicineCollege.department}}</span>  </li>
                   <li >Head Name :<span class="font-bold"> {{medicineCollege.headName}}</span> </li>
                   <li >Office Number :<span class="font-bold">{{medicineCollege.officeNumber}}</span> </li>
                   <li >Buliding Number :<span class="font-bold">{{medicineCollege.bulidngNumber}}</span> </li>
              </ul>
              <!--Icon-->
             <div class=" pl-5">
               <div><router-link :to="`/SeeMoreMedicine_table_list${medicineCollege.id}`" > <span style="font-size: 1.5em; color:blue "> <fa icon="eye" />More...</span> </router-link></div> 
             </div>
             </div>
                     
           </div>
        </div>
     
        <div class="Back  justify-center pl-80 pt-5 pb-30">
             <router-link to="/colleges" active-class="active" tag="button" type="submit" class="font-serif  text-center  font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500">
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
     name: "ContactMedicineColleges",
     components: { Spinner },
     data : function (){
       return {
         loading : false,
         medicineColleges : [],
         errorMessage : null
 
       }
     },
     created : async function (){
       try{
         this.loading = true;
         let response = await ContactService.getAllMedicineColleges();
         this.medicineColleges = response.data;
         this.loading = false;
       }
       catch(error) {
        this.errorMessage = error;
        this.loading = false;
       }
 
     },
    methods : 
      {clickDeleteMedicineCollege : async function (medicineCollegeId){
              try{
                this.loading = true;
                let response = await ContactService.deleteMedicineCollege(medicineCollegeId);
                 if(response){
                   let response = await ContactService.getAllMedicineColleges();
                   this.medicineColleges = response.data;
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
 
  