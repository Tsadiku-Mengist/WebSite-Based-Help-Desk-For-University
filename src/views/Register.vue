<template>
     <div>
     <div>
        <div class="adm text-center pt-10 text-4xl text-blue mt-50 font-serif">
         <h1 class="animate__animated animate__bounce">Welcome to Debre Markos University Registration Section,</h1>
         <h2 class="animate__animated animate__bounce animate__delay-2s">Please Scroll Below<br>To Get More Information</h2>
        
         </div>
     </div>
     <div class="pb-5 pr-2">
    
    <!--header-->
    <div class="bg-green-600">
      <h3 class="font-serif text-center text-2xl pt-3 text-white font-bold">List Of Location And Personal Information On Register Office </h3>
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
          <div  class="flex bg-white " v-for="register of registers" :key="register">
              <!--photo-->
         <div class="pl-5"> 
             <img :src="register.photo" alt="" class="w-[150px] rounded-full pt-3">
         </div>
               <!--List of Name-->
         <div class="pt-10 pl-5 pb-3" > 
             <ul class="bg-gray-100  rounded w-58 divide-y divide-gray-700 divide-opacity-25 text-gray-800">
                  <li >Office Name :<span class="font-bold"> {{register.OfficeName}}</span>  </li>
                  <li >Person Name :<span class="font-bold"> {{register.name}}</span> </li>
                  <li >Office Number :<span class="font-bold">{{register.officeNumber}}</span> </li>
                  <li >Buliding Number :<span class="font-bold">{{register.bulidngNumber}}</span> </li>
             </ul>
            </div>
           
          </div>
       </div>
    
    </div>
 
     <div class="grid grid-cols-1 md:grid-cols-2 ">
         <div class="view-1">
             <div class="p-5 flex flex-col">
               
       <h3 class="pt-10 text-4xl text-blue mt-50 font-serif">The Roles of Registration office</h3>
        <p>A University Registrar Plans, Organizes And Manages All Of The Activities <br>Related To The Records And Registration Department Of A University,<br>Including Serving As The Official Authorized Keeper Of The University's <br>Student Records.</p>
        </div>
        </div>
        <div class="view-">
             <div class="p-5 flex flex-col">
                 <h1 class="pt-10 text-4xl text-blue mt-50 font-serif">About</h1>
        <p>Debre Markos University Registrar has been organized and started its function with the first batch of 760 students in 2006/2007 G.C when the university was established in the same year with one college and eight departments.  The Directorate is responsible for managing the academic records of students and is committed to serve students and the external community. The number of students in all under and postgraduate programs is increasing each year such that those registered in the regular, summer and extension programs during 2016/2017 academic year have been reached over  30, 000.</p>
        </div>
        </div>
        </div>
        </div>
     </template>
   
 <script>
 import { ContactService } from "../services/ContactService";
 import Spinner from "../components/Spinner.vue";
 
 export default {
     name: "ContactRegister",
     components: { Spinner },
     data : function (){
       return {
         loading : false,
         registers : [],
         errorMessage : null
 
       }
     },
     created : async function (){
       try{
         this.loading = true;
         let response = await ContactService.getAllRegisters();
         this.registers = response.data;
         this.loading = false;
       }
       catch(error) {
        this.errorMessage = error;
        this.loading = false;
       }
 
     },
    methods : 
      {clickDeleteRegister : async function (registerId){
              try{
                this.loading = true;
                let response = await ContactService.deleteRegister(registerId);
                 if(response){
                   let response = await ContactService.getAllRegisters();
                   this.registers = response.data;
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
     <style scoped>
     .adm{
     background-image: url('../assets/register.jpg');
      height: 80vh;
     
     }
     
     </style>