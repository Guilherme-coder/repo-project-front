import App from './App.vue'
import Login from './pages/Login/Login'

export const routes = [
    { path: '/app', name: 'App', component: App },
    { path: '/login', name: 'login', component: Login },
]