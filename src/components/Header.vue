
<template>
<div>

      
      <nav class=" bg-orange-400  text-gray-950 ">
 
         <div class="flex justify-between px-8    md:justify-between mx-auto p-2">
                         <div class="flex items-start space-x-2">
                             <div class="flex items-center  ">
 
   <!-- <div class="  max-w-screen-xl flex flex-wrap items-center md:justify-between mx-auto p-1">-->
    <a href=""   class="  flex items-center space-x-3 rtl:space-x-reverse">
     
   <img src="../assets/un.jpg" class="h-12 border rounded-full border-orange-500" alt=" Logo" /> 
  </a>
    </div>
 
        <span class="self-center text-2xl font-semibold whitespace-nowrap ">EatEasily</span>
    
  
                         </div>
  
         <div class="flex   md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse  items-center  ">

  
  <!---  <RouterLink to="" @mouseover="togglePopover"  class="inline-flex justify-center   px-4 py-2  text-lg font-medium text-gray-700">
      {{ userEmail  }} ggg
    </RouterLink>-->

    

    <button  id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white font-medium  text-sm text-center inline-flex items-center " type="button"> {{ userEmail  }} <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<!-- Dropdown menu -->
<div  id="dropdownHover" class="-z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
      
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mes commandes</a>
      </li>
      <li>
        <button @click="logout" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
      </li>
    </ul>
</div>




   <!-- <div v-if="isOpen" class="absolute z-20 mt-1 w-40 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5" >
      <div class="py-1" role="tooltip" aria-orientation="vertical" aria-labelledby="options-menu" style="white-space: nowrap">
        <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100">LogOut</button>
        <button @click="closePopover" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-100">
          Fermer
        </button>
      </div>
    </div>-->
  
     
    </div>
        
         </div>
 
    
      
  
     
        
 
  
  </nav>


</div>



</template>

<script setup >

import {  ref ,onMounted} from 'vue';
import { useRouter } from "vue-router";
import { getAuth, signOut } from "firebase/auth";

import { initializeApp } from 'firebase/app';
     

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


     //Your web app's Firebase configuration
     const firebaseConfig = {
        apiKey: "AIzaSyBafa0YuLnJkxK4AJCeeNWtyCZsKr4j3-Q",
        authDomain: "upload-firebase-storage-90674.firebaseapp.com",
        projectId: "upload-firebase-storage-90674",
        storageBucket: "upload-firebase-storage-90674.appspot.com",
        messagingSenderId: "256589565536",
        appId: "1:256589565536:web:6ad77c4447d9d79c1f7d05"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);



const logout = () => {

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

  // Supprimer le token et l'email de l'utilisateur dans le local storage
  localStorage.removeItem ('userEmail'); // Supprimer l'email lors de la déconnexion
  userEmail.value = '';
  // Redirection vers la page de connexion
  router.push('/');
};




</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>

