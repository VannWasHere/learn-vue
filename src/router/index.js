// Router Config
import { createRouter, createWebHistory } from "vue-router";
import HomePages from '../pages/HomePages.vue'
import AbouPagest from '../pages/AboutPages.vue'
import ProductPages from '../pages/ProductPages'
import ContactPages from '../pages/ContactPages'
import LoginPages from '../pages/LoginPages'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePages
    },
    {
        path: '/about',
        name: 'About',
        component: AbouPagest
    },
    {
        path: '/products',
        name: 'Explore Product',
        component: ProductPages
    },
    {
        path: '/contact',
        name: 'Contact Us',
        component: ContactPages
    },
    {
        path: '/',
        name: 'Welcome',
        component: LoginPages
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes 
})

export default router