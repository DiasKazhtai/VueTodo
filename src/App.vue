<template>
  <div id="app">
    <h1>Todo</h1>
    <hr>
    <TodoList
      v-bind:todos ="todos"
    />
  </div>
</template>

<script>

import TodoList from '@/components/TodoList'
export default {
  data (){
    return {
      todos: [
        {id: 1 , title: 'купить хлеб', completed: false},
        {id: 2 , title: 'купить сыр', completed: false},
        {id: 3 , title: 'купить яйца', completed: false},
        
      ]
    }
  },
  name: 'App',
  components: {
    TodoList
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
