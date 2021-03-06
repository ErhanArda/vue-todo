import Vue from 'vue';
import Router  from 'vue-router';
import Login from '../components/Auth/Login'
import Todo from '../components/Todo'
import Signup from '../components/Auth/Signup'
import Tasks from '../components/Tasks.vue'

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Todo',
            component: Todo,
        },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    },
    {
        path: '/tasks',
        name: 'Tasks',
        component: Tasks,
    },
],   

})

