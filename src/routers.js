import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Edit from './components/Edit.vue'
import Update from './components/Update.vue'

const routes = [
    {
        name: 'signup',
        path: '/signup',
        component: SignUp
    },
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'add',
        path: '/add',
        component: Add
    },
    {
        name: 'edit',
        path: '/edit',
        component: Edit
    },
    {
        name: 'update',
        path: '/update/:id',
        component: Update
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;