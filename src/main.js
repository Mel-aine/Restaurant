import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import "aos/dist/aos.css"
import 'flowbite'; // Importez Flowbite ici
import { createPinia } from 'pinia'


const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
