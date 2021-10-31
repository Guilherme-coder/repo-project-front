import App from './App.vue'
import Login from './pages/Login/Login'
import Home from './pages/home/Home'

export const routes = [
    { path: '/app', name: 'App', component: App },
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
]