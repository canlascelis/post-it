import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from './views/home/Home.vue'

library.add(faMoon, faSun)

const routes = [
    { 
        path: "/", 
        name: "HomePage", 
        component: Home
    },
    {
        path: "/about",
        name: "AboutPage",
        component: () => { import(/* webpackChunkName: "about" */ './views/about/AboutPage.vue') } // lazy loading this route
    },
    {
        path: "/:catchAll(.*)",
        name: "ErrorPage",
        component: () => { import('./views/error/Error.vue') }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')