<template>
    <div>
        <input type="button" value="Show Todo" @click = "showTodo">
        <ul v-if="flag">
            <li v-for="n in todos" :key="n">
                {{ n }}
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    
    name: 'ChildComponent',
   props:{
    todos: [],
    
   },
    data(){
        return{
        flag: false
    }
    },
    methods: {
        showTodo(){

            this.flag=true;
            return this.flag
        }
    }
}


</script>