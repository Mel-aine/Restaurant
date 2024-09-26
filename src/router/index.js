import { createRouter, createWebHistory } from 'vue-router'
 
import Formulaire from '../views/Formulaire.vue'
import HomeView from '../views/HomeView.vue'
import Inscription from '../views/Inscription.vue'
import Connexion from '../views/Connexion.vue'
import Commande from '../views/Commande.vue'
import table1 from '../views/table1.vue'
import table2 from '../views/table2.vue'
import Client from '../views/Client.vue'




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
            component: Connexion
        },

        {
            path: '/cmd',
            name: 'cmd',
            component: Commande
        },

        {
            path: '/tab',
            name: 'tab',
            component: table1
        },
        {
            path: '/tab1',
            name: 'tab1',
            component: table2
        },
        {
            path: '/client',
            name: 'client',
            component: Client
        },


        
    ]
    
})

export default router
