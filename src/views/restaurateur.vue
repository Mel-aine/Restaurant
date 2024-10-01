<template>
  <div class="flex">
    <div class="lg:w-1/4 bg-orange-400">
        <ul class="flex flex-col my-auto h-screen p-4">
           <!-- <li v-for="tab in tabs" :key="tab.name" class="mb-2 text-semibold text-gray-950 text-xl">
                <button
                    @click="selectTab(tab)"
                    :class="{
                        'bg-gray-500 text-white': selectedTab === tab,
                        'bg-orange-100 text-black': selectedTab !== tab
                    }"
                    class="md:w-full hover:bg-gray-700 text-center py-2 px-4 rounded"
                >
                    <svg v-if="tab.icon" class="w-4 h-4 me-2 inline-flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path :d="tab.icon" />
                    </svg>
                    {{ tab.name }}
                </button>
            </li>-->
            <li class="mb-2 text-semibold text-gray-950 text-lg">
                <button type="button" @click="toggleDropdown" class="flex items-center w-full p-2 text-base text-gray-900 transition space-y-2 duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example">
                  <svg class="h-8 w-8 text-zinc-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="3" />  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                    <span class="flex-1 ms-3 text-left text-lg rtl:text-right whitespace-nowrap">Configuration</span>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <ul id="dropdown-example" v-show="isDropdownOpen" class="py-2 space-y-2">
                    <li>
                        <a href="#" @click="selectTab({ name: 'Profil', component: 'tabTwo' })" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Profil</a>
                    </li>
                    <li>
                        <a href="#" @click="selectTab({ name: 'Heure d ouverture et fermeture', component: 'Connexion' })" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Heure d'ouverture et de fermeture
                        </a>
                    </li>
                    <li>
                        <a href="#" @click="selectTab({  component: 'tabOne' })" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Configuration du menu</a>
                    </li>

                    
                </ul>
            </li>

            <li v-for="tab in tabs" :key="tab.name" class="mb-2 text-semibold text-gray-950 text-xl">
                <button
                    @click="selectTab(tab)"
                    :class="{
                        //'bg-gray-500 text-white': selectedTab === tab,
                       // 'bg-orange-100 text-black': selectedTab !== tab
                    }"
                    class="flex items-center text-lg w-full p-2  text-gray-900 transition space-y-2 duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                    <svg v-if="tab.icon" class="w-8 h-8 text-zinc-500 me-2 inline-flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path :d="tab.icon" />
                    </svg>
                    {{ tab.name }}
                </button>
            </li>
        </ul>
    </div>
    <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        
        <component :is="selectedTab.component" />
    </div>
</div>

</template>

<script>
import Connexion from './Connexion.vue';
import tabOne from './tabOne.vue';
import tabTwo from './tabTwo.vue';
import tabThree from './tabThree.vue';
import Header from '../components/Header.vue';

export default {
  data() {
    return {
      selectedTab: null,
      isDropdownOpen: false,
      tabs: [
       
        {
          name: 'Dashbord',
          icon: 'M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Z',
          component: 'tabOne',
        },
        
        {
          name: ' Order Management',
        icon: 'M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Z',
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
    Header,
    Connexion,
    },
    
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
     // this.isDropdownOpen = false; // Fermer le dropdown après la sélection
    },
    toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen; // Basculer l'état du dropdown
    }
  },
};
</script>

<style scoped>
/* Ajoutez ici des styles personnalisés si nécessaire */
</style>
