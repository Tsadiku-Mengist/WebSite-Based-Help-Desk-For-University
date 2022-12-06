<template>
    <div class="mb-5">
                          <h4 class="pb-4">What do you think about us?</h4>
                          <p class="text-gray-500 pb-2">Comments</p>
                           <form @submit.prevent="submitCreate()" class="flex flex-row flex-warp">
                            
                             <input required v-model="comment.comment" type="text" class="text-gray-500 w-2/3 p-2 focus:border-yellow-500" placeholder=" Write Comments">
                             <button value="Create" class="p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow-600">submit</button>
                           </form>
                         </div>
   

       
        

</template>
    


<script>
    import { ContactService } from '../services/ContactService';
   export default {
   name: "AddComment",
   data : function (){
     return {
       comment : {
        comment: '',
           
       
                      },
                      
                    }
                 },   
      
     methods : { 
       submitCreate : async function (){
        try{
            let response = await ContactService.createComment(this.comment);
            if(response){
              return this.$router.push('/'),
              alert('sessesfull');
           }
            else{
              return this.$router.push('/ContactComment/Add');
           }
        }
        catch(error){
           console.log(error);
        }
     }
  
  }   
     }
  
  </script>