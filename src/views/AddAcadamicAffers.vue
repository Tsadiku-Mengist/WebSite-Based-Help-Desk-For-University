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
           <div><input required v-model="acadamicAffers.OfficeName" type="text" placeholder="Office Name" class="w-full px-6 py-3 pt-2 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div> 
           <div><input required v-model="acadamicAffers.name" type="text" placeholder="Name" class="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div> 
           <div><input required v-model="acadamicAffers.photo" type="text" placeholder="Photo URL" class="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div>
           <div><input required v-model="acadamicAffers.officeNumber" type="text" placeholder="Office Number" class="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div>
           <div><input required v-model="acadamicAffers.bulidngNumber" type="text" placeholder="bulidngNumber" class="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3" ></div>
          
           
           <!--back and create button-->
           <div>
            <router-link to="/ContactAcadamicAffers" class="font-serif  text-center   font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500"> Back </router-link>
            <input type="submit" value="Create" class="font-serif  text-center   font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500 ">
           </div>

          </form>
       </div>
        <!--acount image-->
         <div class="pl-5">
             <img :src="acadamicAffers.photo" alt="" class="w-[200px] rounded-full mt-10 ml-5">
         </div>
        </div>
        
</div>
</template>
    


    <script>
     import { ContactService } from '../services/ContactService';
 
    export default {
    name: "AddAcadamicAffers",
    data : function (){
      return {
        acadamicAffers : {
         OfficeName: '',
            name: '',
            officeNumber: '',
            bulidngNumber:'',
            photo: ''
        
                       },
                       
                     }
                  },   
       
      methods : { 
        submitCreate : async function (){
         try{
             let response = await ContactService.createAcadamicAffers(this.acadamicAffers);
             if(response){
               return this.$router.push('/ContactAcadamicAffers');
            }
             else{
               return this.$router.push('/ContactAcadamicAffers/add');
            }
         }
         catch(error){
            console.log(error);
         }
      }
   
   }   
      }
   
   </script>
    
    