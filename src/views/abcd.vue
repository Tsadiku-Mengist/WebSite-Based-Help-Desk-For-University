<template>
    <div>
        <ul>
            <li v-for="login of logins" :key="login.id">{{login.email}},{{login.password}}

            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'b',
    Data(){
        return{
            logins:[]
        };
    },
    async created(){
        try {
            const res = await axios.get('http://localhost:9000/logins');
            this.logins = res.data;
        }
        catch (e){
            console.error(e);
        }
    }

}
</script>
