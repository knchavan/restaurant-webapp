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
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'home',
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'add',
        path: '/add',
        component: Add,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'edit',
        path: '/edit',
        component: Edit,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'update',
        path: '/update/:id',
        component: Update,
        meta: {
            requiresAuth: true
        }
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    const user = localStorage.getItem('restaurantUser');
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if(requiresAuth && !user) 
        next({ name: 'login'});
    else next()
})

export default router;