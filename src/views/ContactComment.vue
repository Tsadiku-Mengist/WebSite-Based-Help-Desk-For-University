<template>
  <div class="pb-5 pr-2">
 
  <!--header-->
  <div class="bg-green-600">
    <h3 class="font-serif text-center text-2xl pt-3 text-white font-bold">Some Comments Users Left </h3>
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
        <div  class="flex bg-white " v-for="comment of comments" :key="comment">
        
             <!--List of Name-->
       <div class="pt-10 pl-5 pb-3" > 
           <ul class="bg-gray-100  rounded w-58 divide-y divide-gray-700 divide-opacity-25 text-gray-800">
                <li >Comment :<span class="font-bold"> {{comment.comment}}</span>  </li>
                
           </ul>
          </div>
                  <!--Icon-->
          <div class="pt-10 pl-5">
            <div><button @click="clickDeleteComment(comment.id)"><span style="font-size: 1.5em; color:red "> <fa icon="trash" /></span> </button></div>
          </div>
        </div>
     </div>
  
  </div>
</template>



<script>
import { ContactService } from "../services/ContactService";
import Spinner from "../components/Spinner.vue";

export default {
  name: "ContactComment",
  components: { Spinner },
  data : function (){
    return {
      loading : false,
      comments : [],
      errorMessage : null

    }
  },
  created : async function (){
    try{
      this.loading = true;
      let response = await ContactService.getAllComments();
      this.comments = response.data;
      this.loading = false;
    }
    catch(error) {
     this.errorMessage = error;
     this.loading = false;
    }

  },
 methods : 
   {clickDeleteComment : async function (commentId){
           try{
             this.loading = true;
             let response = await ContactService.deleteComment(commentId);
              if(response){
                let response = await ContactService.getAllComments();
                this.comments = response.data;
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

