
<template>
    <div class="pb-5 pr-2">
   
    <!--header-->
    <div class="bg-green-600">
      <h3 class="font-serif text-center text-2xl pt-3 text-white font-bold">List Of Location And Personal Information On Liberary Three,  </h3>
       <p class="font-serif text-center text-xl text-white  "> On List Of Location Below By Using Icon You Can Edit,Update, And Also Delete The Location And Personal Information.</p>  
       <p class="font-serif text-center text-xl text-white pb-5 ">To Add New Location And Personal Information By Click Add New Location.</p> 
    </div>

       <!--Add new location button-->
      <div class="pt-5 pl-80">
         <div class="pl-80">
        <router-link to="/ContactLiberaryThrees/add" class="font-serif  text-center   font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500"><span style="font-size: 1em; color:white  "> <fa icon="plus" /></span>Add New</router-link>
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
          <div  class="flex bg-white " v-for="liberaryThree of liberaryThrees" :key="liberaryThree">
              <!--photo-->
         <div class="pl-5"> 
             <img :src="liberaryThree.photo" alt="" class="w-[150px] rounded-full pt-3">
         </div>
               <!--List of Name-->
         <div class="pt-10 pl-5 pb-3" > 
             <ul class="bg-gray-100  rounded w-58 divide-y divide-gray-700 divide-opacity-25 text-gray-800">
                  <li >Office Name :<span class="font-bold"> {{liberaryThree.OfficeName}}</span>  </li>
                  <li >Person Name :<span class="font-bold"> {{liberaryThree.name}}</span> </li>
                  <li >Office Number :<span class="font-bold">{{liberaryThree.officeNumber}}</span> </li>
                  <li >Buliding Number :<span class="font-bold">{{liberaryThree.bulidngNumber}}</span> </li>
             </ul>
            </div>
                    <!--Icon-->
            <div class="pt-10 pl-5">
            
              <div><router-link :to="`/ContactLiberaryThrees/edit${liberaryThree.id}`"><span style="font-size: 1.5em; color:blue "> <fa icon="edit" /></span></router-link></div>
              <div><button @click="clickDeleteLiberaryThree(liberaryThree.id)"><span style="font-size: 1.5em; color:red "> <fa icon="trash" /></span> </button></div>
            </div>
          </div>
       </div>
    
    </div>
</template>



<script>
import { ContactService } from "../services/ContactService";
import Spinner from "../components/Spinner.vue";

export default {
    name: "ContactLiberaryThrees",
    components: { Spinner },
    data : function (){
      return {
        loading : false,
        liberaryThrees : [],
        errorMessage : null

      }
    },
    created : async function (){
      try{
        this.loading = true;
        let response = await ContactService.getAllLiberaryThrees();
        this.liberaryThrees = response.data;
        this.loading = false;
      }
      catch(error) {
       this.errorMessage = error;
       this.loading = false;
      }

    },
   methods : 
     {clickDeleteLiberaryThree : async function (liberaryThreeId){
             try{
               this.loading = true;
               let response = await ContactService.deleteLiberaryThree(liberaryThreeId);
                if(response){
                  let response = await ContactService.getAllLiberaryThrees();
                  this.liberaryThrees = response.data;
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

