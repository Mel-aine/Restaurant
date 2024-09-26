
<template>
<div>
<nav class=" bg-orange-400  text-gray-950 ">
   
   <div class="  max-w-screen-xl flex flex-wrap items-center md:justify-between mx-auto p-1">
   <a href=""   class="  flex items-center space-x-3 rtl:space-x-reverse">
    
  <img src="../assets/un.jpg" class="h-12 border rounded-full border-orange-500" alt=" Logo" /> 
       <span class="self-center text-2xl font-semibold whitespace-nowrap ">EatEasily</span>
   </a>
      <div class="flex   md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse  items-center  ">

  <div class="relative inline-block text-left" >
    <RouterLink to="" @mouseover="togglePopover"  class="inline-flex justify-center   px-4 py-2  text-lg font-medium text-gray-700">
      {{ userEmail  }}
    </RouterLink>

    <div v-if="isOpen" class="absolute z-20 mt-1 w-40 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5" >
      <div class="py-1" role="tooltip" aria-orientation="vertical" aria-labelledby="options-menu" style="white-space: nowrap">
        <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100">LogOut</button>
        <button @click="closePopover" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100">
          Fermer
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
       

 
 </nav>
</div>



</template>

<script setup >

import {  ref ,onMounted} from 'vue';
import { useRouter } from "vue-router";
const userEmail = ref('');

const router = useRouter(); // Initialiser le routeur


// Récupérer l'email de l'utilisateur lors du montage du composant
onMounted(() => {
  userEmail.value = localStorage.getItem('userEmail');
});

const isOpen = ref(false);

const togglePopover = () => {
  isOpen.value = !isOpen.value;
};

const closePopover = () => {
  isOpen.value = false;
};



const logout = () => {
  localStorage.removeItem ('userEmail'); // Supprimer l'email lors de la déconnexion
  userEmail.value = '';
  // Redirection vers la page de connexion
  router.push('/');
};




</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>

