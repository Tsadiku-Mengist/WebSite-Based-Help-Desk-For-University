<template>
     <div>
    <div class="text-center pt-10 text-4xl text-blue mt-50 font-serif">
     <h1 class="pb-1">Welcome to Debre Markos University Finance Section, </h1>
      <h2 class="pb-1">Which Finance Office Do you went?</h2>
     <div class="flex md:flex justify-between pt-1">
         <div><img src="../assets/finance_img1.jpg" class="" alt=""/></div>
         <div><img src="../assets/finance_img2.jpg" class="" alt=""/></div>
         <div><img src="../assets/finance_img3.jpg" class="pr-5" alt=""/></div>      
     </div>
     </div>
 <div class="table">
      <div class="pb-5 pr-2">
  
  <!--header-->
  <div class="bg-green-600 ml-40">
    <h3 class="font-serif text-center text-2xl  text-white font-bold">List Of Location And Personal Information On Finance Office  </h3>
     
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
        <div  class="flex bg-white " v-for="financeOffice of financeOffices" :key="financeOffice">
            <!--photo-->
       <div class="pl-5"> 
           <img :src="financeOffice.photo" alt="" class="w-[150px] rounded-full pt-3">
       </div>
             <!--List of Name-->
       <div class="pt-10 pl-5 pb-3" > 
           <ul class="bg-gray-100  rounded w-58 divide-y divide-gray-700 divide-opacity-25 text-gray-800">
                <li >Office Name :<span class="font-bold"> {{financeOffice.OfficeName}}</span>  </li>
                <li >Person Name :<span class="font-bold"> {{financeOffice.name}}</span> </li>
                <li >Office Number :<span class="font-bold">{{financeOffice.officeNumber}}</span> </li>
                <li >Buliding Number :<span class="font-bold">{{financeOffice.bulidngNumber}}</span> </li>
           </ul>
          </div>
                
          
        </div>
     </div>
  
  </div>
 </div>
 
 
 
    <div class="text-center font-serif">
    <h1 class="text-4xl pt-1"> What Are The Role Of The Section?</h1>
  
    <h6 class="text-xl pt-1"> 
     <strong> The Finance Section At Debre Markos:</strong> <br>
    provides a reporting and control framework to support all of the University’s financial activities <br>
    generates management information in order to support departments in their decision making<br>
    offers purchasing services ensuring that departments achieve value for money<br>
    provide transaction services to students, staff, departments and external customers</h6>
 
   </div>
 
   <div class=" pt-5 text-center font-serif">
 
 <h2 class="text-4xl pt-1"> Service Delivery</h2>
 <p class="text-xl pt-1">Several sections within finance provide a front facing service, offering advice and guidance to staff, students and external customers. Individuals need to be confident in responding to requests for information and disseminating their specialist knowledge and guidance to departments for the benefit of the wider university.</p>
  
  <p class="text-xl p-2 "><strong> Analysis and Research:</strong>
     Finance works with a large amount of data, in the form of accounts and systems and databases of financial information. Attention to detail and the ability to carefully analyse and systematically process information are important. Finance has responsibility for ensuring that the University achieves value for money, therefore all financial decisions must be carefully researched and processes analysed to ensure maximum effectiveness.</p>
     <P class="text-xl p-2 ">
 <strong> Planning and Organising:</strong>
 In order to support the continual smooth running of the universities finances, careful planning is required across the finance function. Individuals must be able to ensure that processes run on time and to schedule and that accounts and systems are maintained in a logical and well organised manner.
 </P>
 <p class="text-xl p-2 ">
 Decision making (specifically relevant to accountancy roles): Financial planning plays a leading role in university planning processes. Therefore a key skill for those in finance roles, the ability to help departments make sound financial decisions.
 
     </P>
   </div>
   <div class="Back  justify-center pl-80 pt-5 pb-30">
              <router-link to="/" active-class="active" tag="button" type="submit" class="font-serif  text-center  font-poppins outline outline-offset-4  hover:bg-green-900 m-5 cursor-pointer px-5 py-1 rounded-full bg-green-500">
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
        name: "ContactFinanceOffice",
        components: { Spinner },
        data : function (){
          return {
            loading : false,
            financeOffices : [],
            errorMessage : null
      
          }
        },
        created : async function (){
          try{
            this.loading = true;
            let response = await ContactService.getAllFinanceOffices();
            this.financeOffices = response.data;
            this.loading = false;
          }
          catch(error) {
           this.errorMessage = error;
           this.loading = false;
          }
      
        },
       methods : 
         {clickDeleteFinanceOffice : async function (financeOfficeId){
                 try{
                   this.loading = true;
                   let response = await ContactService.deleteFinanceOffice(financeOfficeId);
                    if(response){
                      let response = await ContactService.getAllFinanceOffices();
                      this.financeOffices= response.data;
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
      
      