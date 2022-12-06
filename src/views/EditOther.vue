<template>
    <div>
         <!--header-->
        <div class="bg-green-600">
      <h3 class="font-serif text-center text-2xl pt-3 text-white font-bold">Edit Location</h3>
       <p class="font-serif text-center text-xl text-white pb-5 "> TO Edit Location Edit The Input  Space And Update The Location, </p>  
         </div>

    <!--spinner-->
<div v-if="loading">
   <Spinner/>
</div>
<!--Error Message-->
  <div v-if="!loading && errorMessage">
     <h3 class="text-red-400 font-bold text-2xl text-center">{{errorMessage}}</h3>
  </div>
<!--main content-->
 <div class="flex pl-80 bg-gray-200" >
       <div class="mt-3 pl-40 ">
          <form @submit.prevent="updateSubmit()">
           <div><input required v-model="other.OfficeName" type="text" placeholder="Name" class="w-full px-6 py-3 pt-2 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div> 
           <div><input required v-model="other.name" type="text" placeholder="Email" class="w-full px-6 py-3 pt-2 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div> 
           <div><input required v-model="other.photo" type="text" placeholder="Photo URL" class="w-full px-6 py-3 pt-2 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div>
           <div><input required v-model="other.officeNumber" type="text" placeholder="Office number" class="w-full px-6 py-3 pt-2 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div>
           <div><input required v-model="other.bulidngNumber" type="number" placeholder="Number" class="w-full px-6 py-3 pt-2 rounded-xl ring-1 ring-gray-300 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none mb-3"></div>
          
          
           <!--back and update button-->
           <div>
            <router-link to="/ContactOther" class="font-serif  text-center   font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500">Back</router-link>
            <input type="submit" value="Update" class="font-serif  text-center   font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500"></div>
          </form>
       </div>
          <!--acount image-->
       <div class="pl-5">
             <img :src="other.photo" alt="" class="w-[200px] rounded-full mt-10">
         </div>

    </div>
        
</div>
</template>
    
    <script>
import { ContactService } from '../services/ContactService'
import Spinner from '../components/Spinner.vue';


        export default{
    name: "EditOther",
    components: { Spinner },
    data: function () {
        return {
            otherId: this.$route.params.otherId,
            loading: false,
            other: {
                OfficeName: " ",
                name: " ",
                photo: " ",
                officeNumber: " ",
                bulidngNumber: " "
                
            },
            errorMessage: null
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactService.getOther(this.otherId);
            this.other = response.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
        updateSubmit: async function () {
            try {
                let response = await ContactService.updateOther(this.other, this.otherId);
                if (response) {
                    return this.$router.push("/ContactOther");
                }
                else {
                    return this.$router.push(`/ContactOther/edit/${this.otherId}`);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    components: { Spinner }
}
   

    </script>
    
