<template>
    <div class="pb-5 pr-2">
   
    <!--header-->
    <div class="bg-green-600">
      <h3 class="font-serif text-center text-2xl pt-3 text-white font-bold">List Of Location And Personal Information On Acadamic affers V-president Office </h3>
       <p class="font-serif text-center text-xl text-white  "> On List Of Location Below By Using Icon You Can Edit,Update, And Also Delete The Location And Personal Information.</p>  
       <p class="font-serif text-center text-xl text-white pb-5 ">To Add New Location And Personal Information By Click Add New Location.</p> 
    </div>

       <!--Add new location button-->
      <div class="pt-5 pl-80">
         <div class="pl-80">
        <router-link to="/ContactAcadamicAffers/add" class="font-serif  text-center   font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500"><span style="font-size: 1em; color:white  "> <fa icon="plus" /></span>Add New</router-link>
        <router-link to="/Admin_home" class="font-serif  text-center   font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500">Back</router-link>
         </div>
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
          <div  class="flex bg-white " v-for="acadamicAffers of acadamicAfferss" :key="acadamicAffers">
              <!--photo-->
         <div class="pl-5"> 
             <img :src="acadamicAffers.photo" alt="" class="w-[150px] rounded-full pt-3">
         </div>
               <!--List of Name-->
         <div class="pt-10 pl-5 pb-3" > 
             <ul class="bg-gray-100  rounded w-58 divide-y divide-gray-700 divide-opacity-25 text-gray-800">
                  <li >Office Name :<span class="font-bold"> {{acadamicAffers.OfficeName}}</span>  </li>
                  <li >Person Name :<span class="font-bold"> {{acadamicAffers.name}}</span> </li>
                  <li >Office Number :<span class="font-bold">{{acadamicAffers.officeNumber}}</span> </li>
                  <li >Buliding Number :<span class="font-bold">{{acadamicAffers.bulidngNumber}}</span> </li>
             </ul>
            </div>
                    <!--Icon-->
            <div class="pt-10 pl-5">
              
              <div><router-link :to="`/ContactAcadamicAffers/edit${acadamicAffers.id}`"><span style="font-size: 1.5em; color:blue "> <fa icon="edit" /></span></router-link></div>
              <div><button @click="clickDeleteAcadamicAffers(acadamicAffers.id)"><span style="font-size: 1.5em; color:red "> <fa icon="trash" /></span> </button></div>
            </div>
          </div>
       </div>
    
    </div>
</template>



<script>
import { ContactService } from "../services/ContactService";
import Spinner from "../components/Spinner.vue";

export default {
    name: "ContactAcadamicAffers",
    components: { Spinner },
    data : function (){
      return {
        loading : false,
        acadamicAfferss : [],
        errorMessage : null

      }
    },
    created : async function (){
      try{
        this.loading = true;
        let response = await ContactService.getAllAcadamicAfferss();
        this.acadamicAfferss = response.data;
        this.loading = false;
      }
      catch(error) {
       this.errorMessage = error;
       this.loading = false;
      }

    },
   methods : 
     {clickDeleteAcadamicAffers : async function (acadamicAffersId){
             try{
               this.loading = true;
               let response = await ContactService.deleteAcadamicAffers(acadamicAffersId);
                if(response){
                  let response = await ContactService.getAllAcadamicAfferss();
                  this.acadamicAfferss = response.data;
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

