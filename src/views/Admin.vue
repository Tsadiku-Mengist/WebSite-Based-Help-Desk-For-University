<template>
  <div>
  
    <div name='contact' className='col-md-9 w-full h-screen bg-gradient-to-b from-gray-800 to-gray-500 p-4 text-white '>
        <div className='flex flex-col pt-20 justify-center max-w-screen-lg mx-auto '>
            <div className='flex justify-center items-center'>
            
            <form @submit.prevent="login" className='flex flex-col w-full md:w-1/2'>
              <p className='text-4xl pl-20 pb-3'>Hello Admin</p>
                <p className='py-6 pl-10 text-2xl'>Login to to get access </p>
              <label className='relative'>
              <input type='email' v-model="state.email" className='w-96 mb-6 h-20 px-6 text-2xl bg-gray-500 border-r-0 border-t-0 border-l-0 border-2 border-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-white transition duration-200' @blur="v$.email.$touch()"/>
               <span  className='text-2xl text-white text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-email'>Enter your Email</span> <br>
               
               <template v-if="v$.email.$error">
                <p class="mb-6">{{v$.email.$errors[0].$message}}</p>
               </template>
          </label>
          <label className='relative'>
              <input type='password' v-model="state.password" className='w-96 h-20 mb-6 px-6 text-2xl bg-gray-500 border-2 border-white border-r-0 border-t-0 border-l-0 rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-white transition duration-200' @blur="v$.password.$touch()"/>
            <span className='text-2xl text-white text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-password'>Enter your Password</span><br>
            <template v-if="v$.password.$error">
                <p>{{v$.password.$errors[0].$message}}</p>
            </template>
          </label>
              <button  :disabled="v$.$invalid" @click="submitForm" active-class="active" value=Check tag="button" type="submit" className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Login</button>
            </form>
            
            </div>
        </div>

        </div>
  </div>
      
</template>
<script>
import axios from 'axios'
import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
export default {
  
  setup(){
    const state = reactive({
        email: '',
        password:''
    })
    

    const rules = computed(() => {
      return{
      email:{ required, email,
      },
      password:{ required, minLength:minLength(6) }
      }  
    }
    )
    const v$ = useValidate(rules, state)

return { state, v$ }
},

  
  methods:{
    submitForm() {
     this.v$.$validate()
     if(!this.v$.$error){
      return this.$router.push('/Admin_home');
     
     
    }
  }
}
}
</script>