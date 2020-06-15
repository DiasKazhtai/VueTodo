import Vue from 'vue'
import Router from 'vue-router'
// import { component } from 'vue/types/umd'
import Home from './views/Home.vue'
import Todos from './views/Todos.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
           path: '/',
           component: Home
            },
       {
            path: '/todos',
            component: Todos
            }
        
    ]
})