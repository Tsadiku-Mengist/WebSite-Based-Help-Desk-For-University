<template>
    
  <div id="Other">


      <div class="text-center pt-10 text-4xl bt-10 text-blue mt-50 font-serif">
  <h1 class="pt-2">Welcome to Debre Markos University Ohters Section,</h1>
  <h2 class="pt-2">In This Section Have Information About Location Which Is Not Included In Home, </h2>
  <h2 class="pt-2">which Location  do you went?</h2>
  <h2>Please Scroll Dawon And Gate All The Information </h2>
      </div>

  
          <div class="grid grid-cols-3 md:grid-cols-6 gap-8 md:flex justify-between pt-10">
        <div><img src="../assets/ict-office.jpg" class="w-40 h-40 pl-10 " alt=""/>
          <p class="text-center pl-10   text-xl  text-blue  font-serif">ICT Center</p>
      </div>      
      <div><img src="../assets/lecture-room.jpg" class=" w-40 h-40" alt=""/>
          <p class="text-center  text-xl  text-blue  font-serif">Lecture Room</p>
      </div>
      
      <div><img src="../assets/bank.jpg" class="pr-5 w-40 h-40" alt=""/>
          <p class="text-center  text-xl  text-blue  font-serif">Bank</p>
         </div>
      <div><img src="../assets/male-butiy-salon.png " class="w-40 h-40" alt=""/>
          <p class="text-center  text-xl  text-blue  font-serif">Male Salon</p>
      </div>
      <div><img src="../assets/student-clinic.jpg" class="w-40 h-40" alt=""/>
          <p class="text-center  text-xl  text-blue  font-serif">Student Clinic</p>
      </div>
      <div><img src="../assets/female-butiy-salon.jpg" class="w-40 h-40 pr-10" alt=""/>
          <p class="text-center  text-xl  text-blue pr-20  font-serif">Female Salon</p>
         </div>
         </div>
         <div class="grid grid-cols-2 md:grid-cols-6 gap-8 md:flex justify-between pt-10">
  
        <div><img src="../assets/cafe.jfif" class="w-40 h-40 pl-10 " alt=""/>
          <p class="text-center pl-10   text-xl  text-blue  font-serif">Student Caffe</p>
      </div>      
      <div><img src="../assets/studnet-union.webp" class=" w-40 h-40" alt=""/>
          <p class="text-center  text-xl  text-blue  font-serif">Student Union</p>
      </div>
      
      <div><img src="../assets/shop1.jpg" class="pr-5 w-40 h-40" alt=""/>
          <p class="text-center  text-xl  text-blue  font-serif">Shopes</p>
      </div>
      <div><img src="../assets/staff-launch.jpg " class="w-40 h-40" alt=""/>
          <p class="text-center  text-xl  text-blue  font-serif">Staf Launch</p>
      </div>
      <div><img src="../assets/stuednt-cafe.jpg" class="w-40 h-40" alt=""/>
          <p class="text-center  text-xl  text-blue  font-serif">Student Launch</p>
      </div>
      <div><img src="../assets/shoe -shiner.webp" class="w-40 h-40 pr-10" alt=""/>
          <p class="text-center  text-xl  text-blue pr-20  font-serif">Shoe Shine</p>
         </div>
      </div> 

      <div class="pb-5 pr-2">
 
 <!--header-->
 <div class="bg-green-600">
   <h3 class="font-serif text-center text-2xl pt-3 text-white font-bold">List Of Location And Personal Information On Other Offices </h3>
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
       <div  class="flex bg-white " v-for="other of others" :key="other">
           <!--photo-->
      <div class="pl-5"> 
          <img :src="other.photo" alt="" class="w-[150px] rounded-full pt-3">
      </div>
            <!--List of Name-->
      <div class="pt-10 pl-5 pb-3" > 
          <ul class="bg-gray-100  rounded w-58 divide-y divide-gray-700 divide-opacity-25 text-gray-800">
               <li >Office Name :<span class="font-bold"> {{other.OfficeName}}</span>  </li>
               <li >Person Name :<span class="font-bold"> {{other.name}}</span> </li>
               <li >Office Number :<span class="font-bold">{{other.officeNumber}}</span> </li>
               <li >Buliding Number :<span class="font-bold">{{other.bulidngNumber}}</span> </li>
          </ul>
         </div>
          
       </div>
    </div>
 
 </div>
      
      
</div> 
</template>
<script>
import { ContactService } from "../services/ContactService";
import Spinner from "../components/Spinner.vue";

export default {
    name: "ContactOther",
    components: { Spinner },
    data : function (){
      return {
        loading : false,
        others : [],
        errorMessage : null

      }
    },
    created : async function (){
      try{
        this.loading = true;
        let response = await ContactService.getAllOthers();
        this.others = response.data;
        this.loading = false;
      }
      catch(error) {
       this.errorMessage = error;
       this.loading = false;
      }

    },
   methods : 
     {clickDeleteOther : async function (otherId){
             try{
               this.loading = true;
               let response = await ContactService.deleteOther(otherId);
                if(response){
                  let response = await ContactService.getAllOthers();
                  this.others = response.data;
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


<style>


th {
background: #3498db;
color: white;
font-weight: bold;
}

td,
th {
padding: 10px;
border: 1px solid #ccc;
text-align: left;
font-size: 18px;
}


</style>