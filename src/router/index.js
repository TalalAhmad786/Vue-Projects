import {createRouter,createWebHistory} from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import SignupPage from '../components/signup/signup.vue'
import LoginPage from '../components/login/login.vue'

const routes= [
    {
        path: '/',
        name: 'signup',
        component : SignupPage,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
        props: true,
    },
    {
        path: '/home',
        name: 'hello',
        component : HelloWorld,
    },
]

const router= createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router