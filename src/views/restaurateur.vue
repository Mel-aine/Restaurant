<template>
  <div class="">
  <div class="sticky top-0 z-50">
    
  </div>
  <div class="flex">
    <div class="lg:w-1/4 bg-gray-100">
      <hr>
        <ul class="flex flex-col my-auto h-screen p-4 ">
          
            <li class="mb-2 text-semibold  text-gray-950 ">
                <button type="button" @click="toggleDropdown" class="flex  items-center bg-orange-200 w-full p-2 text-base text-gray-900 transition space-y-2 duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example">
                  
                  <!-- <svg class="h-6 w-6  text-zinc-500 items-center translate-x-8 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="3" />  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg> -->
                    <span class="flex-1 ms-3 text-left text-lg font-semibold flex flex-col items-center rtl:text-right whitespace-nowrap">Configuration</span>
                  
                    <svg class="h-6 w-6 text-gray-500" v-show="isDropdownOpen==false" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
                    <!-- <svg v-show="isDropdownOpen" class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>  -->
                    <svg class="h-6 w-6 text-gray-500" v-show="isDropdownOpen"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" /></svg>
                    <!-- <svg data-accordion-icon v-show="isDropdownOpen==false" class="w-3 h-3" :class="{'rotate-180': getShowMenu(index)}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg> -->
                </button>
                <ul id="dropdown-example" v-show="isDropdownOpen"  class="py-2 space-y-2 text-sm  font-semibold ">
                    <li>
                      

                        <a href="#" @click="selectTab({ name: 'Profile', component: 'tabTwo' })" class="flex space-x-2 hover:bg-orange-200 items-center w-full  p-2 text-gray-700 transition duration-75  rounded-lg pl-11 group  dark:text-white dark:hover:bg-gray-700">Profile</a>
                    </li>
                    <li>
                        <a href="#" @click="selectTab({ name: 'Heure d ouverture et fermeture', component: 'horaire' })" class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-orange-200 dark:text-white dark:hover:bg-gray-700">Opening and Closing time
                        </a>
                    </li>
                    <li>
                        <a href="#" @click="selectTab({  component: 'tabOne' })" class="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-orange-200 dark:text-white dark:hover:bg-gray-700">Menu Configuration</a>
                    </li>

                    
                </ul>
            </li>

            <li v-for="tab in tabs" :key="tab.name" class="mb-2 text-semibold text-gray-950 text-xl">
                <button
                    @click="selectTab(tab)"
                    :class="{
                        //'bg-orange-100 text-black': selectedTab === tab,
                        //'bg-orange-100 text-black': selectedTab !== tab
                    }"
                    class="flex flex-col items-center bg-orange-200 text-lg w-full p-2  font-semibold text-gray-900 transition space-y-2 duration-75 rounded-lg group hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700"
                >
                    <svg v-if="tab.icon" class="w-8 h-8 text-zinc-500 me-2 inline-flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path :d="tab.icon" />
                    </svg>
                    {{ tab.name }}
                </button>
            </li>
        </ul>
    </div>
    <div class="p-6 bg-orange-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        
        <component :is="selectedTab.component" />
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
          icon: '',
          component: '',
        },
        
        {
          name: ' Order Management',
        icon: '',
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
     // this.isDropdownOpen = false; // Fermer le dropdown après la sélection
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
/* Ajoutez ici des styles personnalisés si nécessaire */
</style>
