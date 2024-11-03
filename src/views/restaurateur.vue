<template>
  <div>
<div class="md:flex ">
    <ul class="flex-column  my-auto h-screen p-4   space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li v-for="(tab, index) in tabs" :key="index" class="mb-2 text-semibold text-gray-950 text-md">
        <button  @click="selectTab(tab)"   class="inline-flex  border border-orange-500 px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-orange-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white" >
          <svg v-if="tab.icon" class=" w-6 h-6   text-zinc-500 me-2 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
               <path :d="tab.icon" />
           </svg>
                    {{ tab.name }}
                    
        </button>

        </li>         
    </ul>
    <div class="p-6  bg-gray-100 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full h-screen scrollbar-custom overflow-auto">
        <component :is="selectedTab.component"/>
    </div>
</div>
</div> 
</template>

<script>
import horaire from './horaire.vue';
import tabOne from './tabOne.vue';
import tabTwo from './tabTwo.vue';
import tabThree from './tabThree.vue';

export default {
  data() {
    return {
      activeIndex:null,
      selectedTab: null,
      isDropdownOpen: false,
      tabs: [

     
       
        {
          name: 'Dashbord',
          icon: 'M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z',
          component: '',
        },
         
      {
          name: 'Profile',
          icon: 'M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z',
          component: 'tabTwo',
        },
        

        {
       name: 'Menu Setting',
        icon: 'M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z',
        component: 'tabOne',
      },
      {
       name: 'schedule Setting',
        icon: 'M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z',
        component: 'horaire',
      },
        
        {
          name: ' Order Management',
        icon: 'M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10',
        component: 'tabThree',
      },
      ],
    };
  },
  created() {
    this.selectedTab = this.tabs[0]; // Sélectionner le premier onglet par défaut
  },
  components: {
    tabOne,
    tabTwo,
    tabThree,
    horaire,
    },
    
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen; // Basculer l'état du dropdown
    },
     getShowMenu (index)  {
  this.activeIndex === index ; // Vérifie si l'index est actif ou s'il doit être affiché
},

  },
};
</script>

<style scoped>
/* Ajouter ce CSS à votre fichier de styles global */
.scrollbar-custom {
  /* Pour Firefox */
  scrollbar-width: thin; /* Utilisé par Firefox */
}

/* Pour Chrome, Safari et Edge */
.scrollbar-custom::-webkit-scrollbar {
  width: 8px; /* Largeur de la barre de défilement */
  height: 8px; /* Hauteur de la barre de défilement (pour défilement horizontal) */
}

.scrollbar-custom::-webkit-scrollbar-track {
  background: #f1f1f1; /* Couleur de la piste */
  border-radius: 10px; /* Arrondir les bords de la piste */
}

.scrollbar-custom::-webkit-scrollbar-thumb {
  background:orange; /* Couleur de la poignée */
  border-radius: 10px; /* Arrondi des bords de la poignée */
}

.scrollbar-custom::-webkit-scrollbar-thumb:hover {
  background: #555; /* Couleur de la poignée au survol */
}


</style>
