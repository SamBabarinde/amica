import './assets/main.css'
import './css/style.css'
import './css/additional-styles/custom-fonts.css'
import './css/additional-styles/range-slider.css'
import './css/additional-styles/theme.css'
import './css/additional-styles/toggle-switch.css'
import './css/additional-styles/utility-patterns.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';

import App from './App.vue';
import HomeView from './pages/Home.vue';
import SignIn from './pages/SignIn.vue';
import SignUp from './pages/signup.vue';
      
axios.defaults.baseURL = 'http://127.0.0.1:8000'

const app = createApp(App)


const routes = [
      {path: '/', name: 'home', component: HomeView },
      {path: '/register', name: 'register', component: SignUp },
      {path: '/signin', name: 'SignIn', component: SignIn },
    ];

const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: routes
      });

// router.addRoute({ path: '/', name: 'home', component: HomeView })

app.use(createPinia())
app.use(axios)
app.use(router)

app.mount('#app')


router.addRoute({ path: '/', name: 'home', component: HomeView })
