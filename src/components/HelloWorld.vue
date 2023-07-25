<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <input type="text" v-model="todoInpot">
    <input type="button" value="Input Todo" @click="enterTodo">
    <childComponent :todos="todo"/>
  </div>
</template>

<script>
import childComponent from '@/components/childComponent.vue';


export default {
  name: 'HelloWorld',
  components: {
    childComponent,
  },
  props: {
    msg: String ,
  },
  data(){
    return{
      message: 'Hello World! You have successfully Login',
      todo: [],
      todoInpot: '',
    }
  },
  methods: {
    enterTodo(){
      this.todo.push(this.todoInpot);
      console.log(this.todo);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
