import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import "aos/dist/aos.css"
import 'flowbite'; // Importez Flowbite ici



createApp(App).use(router).mount('#app')
