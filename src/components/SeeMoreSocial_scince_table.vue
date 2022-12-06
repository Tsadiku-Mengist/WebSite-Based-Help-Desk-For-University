<template>
    
    <div class="">
   
        <!--header-->
           <div class="bg-green-600">
         <h3 class="font-serif text-center text-2xl pt-3 text-white font-bold">View Detalils Information  </h3>
          <p class="font-serif text-center text-xl text-white pb-5 "> If YOu Finshi Click Back Button.</p>  
            </div>
   
   <!--spinner-->
   <div v-if="loading">
      <Spinner/>
   </div>
   <!--Error Message-->
     <div v-if="!loading && errorMessage">
        <h3 class="text-red-400 font-bold text-2xl text-center">{{errorMessage}}</h3>
     </div>
   
        <!--Main class-->
        <!--Image-->
        <div class="view flex pl-80 items-center">
            <div>
               <img :src="socialCollege.photo" alt="" class="w-[200px] rounded-full">
            </div>
        <!--List OF Data-->
            <div class="pt-10 pl-10 pb-3">
               <ul class="bg-gray-100  rounded w-58 divide-y divide-gray-700 divide-opacity-25 text-gray-800" >
                     <li class="px-20 py-2">Department:<span class="font-bold ">{{socialCollege.department}}</span>  </li>
                     <li class="px-20 py-2">Department Head Name:<span class="font-bold"> {{socialCollege.headName}}</span> </li>
                     <li class="px-20 py-2">Office Number:<span class="font-bold">{{socialCollege.officeNumber}}</span>  </li>
                     <li class="px-20 py-2">bulidng Number:<span class="font-bold"> {{socialCollege.bulidngNumber}}</span> </li>
                     <li class="px-20 py-2">vice Hea dName:<span class="font-bold">{{socialCollege.viceHeadName}}</span>  </li>
                     <li class="px-20 py-2">vice Office Number:<span class="font-bold">{{socialCollege.viceOfficeNumber}}</span>  </li>
                     <li class="px-20 py-2">vice Bulidng Number:<span class="font-bold"> {{socialCollege.viceBulidngNumber}}</span> </li>
                     <li class="px-20 py-2">College Email:<span class="font-bold">{{socialCollege.collegeEmail}}</span>  </li>
                 </ul>
            </div>
        </div>
        <!--Back BUtton-->
   <div class="pb-3 pt-5 pl-80">
       <div class="pl-80">
       <router-link to="/social_scince_and_list_table" class="font-serif  text-center   font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500"> Back</router-link>
       </div>
   </div>

      </div>
   </template>
       
   
   <script>
import { ContactService } from '../services/ContactService.js'
import Spinner from '../components/Spinner.vue';

        export default{
    name: "SeeMoreSocial_scince_table",
    components: {Spinner},
    data: function () {
        return {
            socialCollegeId: this.$route.params.socialCollegeId,
            loading: false,
            socialCollege: {},
            errorMessage: null
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getSocialCollege(this.socialCollegeId);
            this.socialCollege = response.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    components: { Spinner }
} 
    </script>
    
       