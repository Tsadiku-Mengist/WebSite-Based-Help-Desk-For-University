<template>
    <div>

      <!--Header-->
<div class="bg-green-600">
      
      <h3 class="font-serif text-center text-2xl pt-3 text-white font-bold">Add New Location</h3>
       <p class="font-serif text-center text-xl text-white "> TO Add New Location Fill The Black Space And Create The Location, </p>  
</div>

     <!--spinner-->
<div v-if="loading">
   <Spinner/>
</div>

<!--Error Message-->
  <div v-if="!loading && errorMessage">
     <h3 class="text-red-400 font-bold text-2xl text-center">{{errorMessage}}</h3>
  </div>

<!--main class-->
 <div class="flex pl-80 bg-gray-200" >
       <div class="mt-3 pl-60  ">
          <form @submit.prevent="submitCreate()">
           <div><input required v-model="naturalCollege.department" type="text" placeholder="Department" class="w-full px-6 py-3 pt-2 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div> 
           <div><input required v-model="naturalCollege.headName" type="text" placeholder="Department Head Name" class="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div> 
           <div><input required v-model="naturalCollege.photo" type="text" placeholder="Photo URL" class="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div>
           <div><input required v-model="naturalCollege.officeNumber" type="number" placeholder="Office Number" class="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div>
           <div><input required v-model="naturalCollege.bulidngNumber" type="number" placeholder="bulidngNumber" class="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3" ></div>
           <div><input required v-model="naturalCollege.viceHeadName" type="text" placeholder="Vice Head Name" class="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div> 
           <div><input required v-model="naturalCollege.viceOfficeNumber" type="number" placeholder="vice Office Number" class="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div>
           <div><input required v-model="naturalCollege.viceBulidngNumber" type="number" placeholder="vice Bulidng Number" class="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div>
           <div><input required v-model="naturalCollege.collegeEmail" type="text" placeholder="college Email" class="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3" ></div>
          
           
           <!--back and create button-->
           <div>
            <router-link to="/ContactNaturalAndComputationalColleges" class="font-serif  text-center   font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500"> Back </router-link>
            <input type="submit" value="Create" class="font-serif  text-center   font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500 ">
           </div>

          </form>
       </div>
        <!--acount image-->
         <div class="pl-5">
             <img :src="naturalCollege.photo" alt="" class="w-[200px] rounded-full mt-10 ml-5">
         </div>
        </div>
        
</div>
</template>
    


    <script>
     import { ContactService } from '../services/ContactService';
 
    export default {
    name: "AddNaturalColleges",
    data : function (){
      return {
        naturalCollege : {
            department: '',
            headName: '',
            photo: '',
            officeNumber:'',
            bulidngNumber: '',
            viceHeadName: '',
            viceOfficeNumber: '',
            viceBulidngNumber: '',
            collegeEmail: '',
                       },
                       
                     }
                  },   
       
      methods : { 
        submitCreate : async function (){
         try{
             let response = await ContactService.createNaturalCollege(this.naturalCollege);
             if(response){
               return this.$router.push('/ContactNaturalAndComputationalColleges');
            }
             else{
               return this.$router.push('/ContactNaturalAndComputationalColleges/add');
            }
         }
         catch(error){
            console.log(error);
         }
      }
   
   }   
      }
   
   </script>
    
    