<template>
<!---<div class="relative  overflow-hidden w-full h-50  bg-cover bg-center bg-no-repeat bg-[url('assets/piz.jpg')]">
    
      <div class="px-4 mx-auto  text-center py-24 lg:py-20 ">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Bienvenue sur <span class="font-extrabold text-5xl text-orange-500 uppercase" >EATEASILY</span></h1>
                
                
            
      </div>
</div>-->
<div>
<div class="px-4 mx-auto  text-center  ">
 
</div>

<div class="flex ">
    <div class="lg:-1/4 bg-orange-500 ">
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

<script>
import tabOne from './tabOne.vue';
import tabTwo from './tabTwo.vue';
import tabThree from './tabThree.vue';

export default {
  data() {
    return {
      selectedTab: null,
      tabs: [
        {
          name: 'Home',
          component: 'tabTwo',
        },
        {
          name: 'Dashbord',
          component: 'tabOne',
        },
        {
          name: ' Order Management',
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
