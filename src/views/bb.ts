import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      }
    }
  },
  validations () {
    return {
      firstName: { required }, // Matches this.firstName
      lastName: { required }, // Matches this.lastName
      contact: {
        email: { required, email } // Matches this.contact.email
      }
    }
  }
}




import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      }
    }
  },
  validations () {
    return {
      firstName: { required }, // Matches this.firstName
      lastName: { required }, // Matches this.lastName
      contact: {
        email: { required, email } // Matches this.contact.email
      }
    }
  }
}






import { reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  setup () {
    const state = reactive({
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      }
    })
    const rules = {
      firstName: { required }, // Matches state.firstName
      lastName: { required }, // Matches state.lastName
      contact: {
        email: { required, email } // Matches state.contact.email
      }
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  }
}


















{
    "$property": "firstName",
    "$validator": "required",
    "$message": "Value is required",
    [...]
  }
  <div onclick="toggle_nav()" class="block md:hidden text-gray-100 py-3.5 pl-5 right-6 mt-20 shadow cursor-pointer">
  <button class="flex flex-col">
  <div class="w-6 h-1 bg-white"></div>
  <div class="w-6 h-1 my-1 bg-white"></div>
  <div class="w-6 h-1 bg-white"></div>
  <i class="far fa-bars"></i>
</button>
 </div>
 async uniqueEmail(value){
  if(value == "")return false;
  const response  = await axios.get('http://localhost:9000/logins')
  const logins = response .data;
  const alreadyDoneLogin = logins.find(login => login.email==value)
  if(alreadyDoneLogin){
    return true
  }
  return false

}











  <div :class="{ error: v$.firstName.$errors.length }">
  <input v-model="state.firstName">
  <div class="input-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">
    <div class="error-msg">{{ error.$message }}</div>
  </div>
</div>













