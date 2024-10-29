import { createRouter, createWebHistory } from 'vue-router'
 
import Formulaire from '../views/Formulaire.vue'
import HomeView from '../views/HomeView.vue'
import Inscription from '../views/Inscription.vue'
import horaire from '../views/horaire.vue'
import restaurateur from '../views/restaurateur.vue'
import Menu from '../views/Menu.vue'
import {store} from '../store/global'



 const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes : [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/form',
            name: 'form',
            component: Formulaire
        },

        {
            path: '/inscrire',
            name: 'inscrire',
            component: Inscription
        },

        {
            path: '/connect',
            name: 'connect',
            component: horaire
        },

        {
            path: '/cmd',
            name: 'cmd',
            component: restaurateur
        },

        {path: '/restaurant/:id_restaurant',
             name: 'Menu', 
             component: Menu,
             


            },
    
        
    ]
    
})
const waitForStorageToBeReady = async (to, from, next) => {
    console.log('..................');
    
     store.restored()
        next()
  }
router.beforeEach(waitForStorageToBeReady)
export default router
