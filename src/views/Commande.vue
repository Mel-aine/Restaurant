<template>

<div>

  <div class=" sticky top-0 z-50">
    <Header/>
</div>
<div class="px-4 mx-auto  text-center  ">
 
</div>

<div class="flex ">
    <div class="lg:-1/4 bg-orange-400 ">
      <ul class="flex flex-col my-auto  h-screen  p-4">
        <li v-for="tab in tabs" :key="tab.name" class="mb-2  text-semibold text-gray-950 text-xl">
          <button
            @click="selectTab(tab)"
            :class="{
              'bg-gray-500 text-white': selectedTab === tab,
              'bg-orange-100 text-black': selectedTab !== tab
            }"
            class="md:w-full hover:bg-gray-700 text-center py-2 px-4 rounded md:px-8"
          >
          <svg v-if="tab.icon" class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path :d="tab.icon" />
            </svg>
            {{ tab.name }}
          </button>
        </li>
      </ul>
    </div>
    <div class="lg:w-full p-4 bg-orange-100 ">
      <component :is="selectedTab.component" />
    </div>
  </div>
</div>
</template>

<script >


/*import { ref } from 'vue';
import tabOne from '../views/tabOne.vue';
import tabTwo from './tabTwo.vue';
import tabThree from './tabThree.vue';
import Header from '../components/Header.vue';

const selectedTab = ref(null);
const tabs = [
  {
    name: 'Home',
    component: 'tabTwo',
  },
  {
    name: 'Dashboard',
    component: 'tabOne',
  },
  {
    name: 'Order Management',
    component: 'tabThree',
  },
];

// Sélectionner le premier onglet par défaut
selectedTab.value = tabs[0];

const selectTab = (tab) => {
  selectedTab.value = tab;
};*/



import tabOne from './tabOne.vue';
import tabTwo from './tabTwo.vue';
import tabThree from './tabThree.vue';

import Header from '../components/Header.vue';

export default {
  data() {
    return {
      selectedTab: null,
      tabs: [
        {
          name: 'profile',
          icon: 'M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z',
          component: 'tabTwo',
        },
        {
          name: 'Dashbord',
          icon: 'M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Z',
          component: 'tabOne',
        },
        {
          name: ' Order Management',
          component: 'tabThree',
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
    },
    
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped>
/* Ajoutez ici des styles personnalisés si nécessaire */
</style>
