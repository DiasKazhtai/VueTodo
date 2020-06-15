<template>
    <ul>
        <TodoItem
             v-for="todo of todos" :key="todo.id"
             v-bind:todo = "todo"
             v-on:remove-todo="removeTodo"
        />
    </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
    props: ['todos'],
    components:{
        TodoItem
    },
    methods: {
        removeTodo(id){
            console.log(id)
        }
    }
}
</script>


<style  scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>