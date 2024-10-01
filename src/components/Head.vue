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
          
            <div class="space-x-5">


       <a href=""  >  <bouton @click.prevent="open1" class="text-gray-950 text-md  font-meduim">Restaurateur space</bouton> </a>
         

    <RouterLink to="" class="" >
        <button @click.prevent="open" class="">

    <div  class="flex items-center space-x-2 px-4 border border-orange-500 bg-white hover:bg-orange-300 hover:text-white rounded-full">
        <div  class="flex items-center space-x-1 px-4">
   <svg class="h-4 w-4 text-gray-950"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>
<span class="text-gray-950 text-md font-meduim">Sign In</span>

</div>
 </div>
</button>
   </RouterLink>
   </div>
       
        </div>

   </div>
     
 
    
       

 
 </nav>
<!-- Main modal -->
<div id="authentication-modal" tabindex="-1" aria-hidden="true" v-show = "active == false" class=" flex inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0  z-50 justify-center items-center w-full h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                
                <h3 class="text-xl font-semibold  text-orange-500 dark:text-white">
                    Welcome to EatEasily
                </h3>
                
                <button type="button" @click="close" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
                <form class="space-y-4" action="" >
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" v-model="email1" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" v-model="password1" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <!----<div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-orange-700 hover:underline dark:text-orange-500">Lost Password?</a>
                    </div>-->

                    <div class="py-2"></div>
                    <RouterLink to="">
                    <button @click.prevent = "login" type="submit" class="w-full text-white bg-orange-700 hover:bg-white hover:text-orange-500 border hover:border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Login to your account</button></RouterLink>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <RouterLink to="/inscrire" class="text-orange-700 hover:underline dark:text-orange-500">Create account</RouterLink>
                    </div>
                </form>
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </div>
        </div>
    </div>
</div> 




<!-- Main modal add restaurant -->
<div id="authentication-modal" tabindex="-1" aria-hidden="true" v-show = "active1 == false" class=" inset-0 bg-gray-950 bg-opacity-50 flex shadow  overflow-y-auto overflow-x-hidden fixed top-0  z-50 justify-center items-center w-full h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-orange-500 dark:text-white">
                    Sign in to our platform
                </h3>
                <button type="button" @click="close1" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
                <form class="space-y-4" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-orange-700 hover:underline dark:text-orange-500">Lost Password?</a>
                    </div>
                    <RouterLink to="/cmd">    <button @click="close1" type="submit" class="w-full text-white bg-orange-700 hover:bg-white border hover:border-orange-500 hover:text-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Login to your account</button></RouterLink>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <RouterLink to="/form"><button @click="close1" class="text-orange-700 hover:underline dark:text-orange-500">Create account</button></RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 


</div>

</template>

<script setup>
import {ref} from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { useRouter } from "vue-router";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// src/firebase.js
import { initializeApp } from 'firebase/app';


const active = ref(true);
const active1 = ref(true);
const active2 = ref(true);
const errorMessage = ref('');
const successMessage = ref('');
const errorcode = ref('');

 const router = useRouter(); // Initialiser le routeur


 

const open = () => {
  active.value = !active.value ;
}
const close =() => {
  active.value = !active.active ;
}

const open1 = () => {
  active1.value = !active1.value ;
}
const close1 =() => {
  active1.value = !active1.active ;
}

const open2 = () => {
  active2.value = !active2.value ;
}
const close2 =() => {
  active2.value = !active2.active ;
}

const email1 = ref('');
const password1 = ref('');






    //Your web app's Firebase configuration
    const firebaseConfig = {
  apiKey: "AIzaSyBafa0YuLnJkxK4AJCeeNWtyCZsKr4j3-Q",
  authDomain: "upload-firebase-storage-90674.firebaseapp.com",
  projectId: "upload-firebase-storage-90674",
  storageBucket: "upload-firebase-storage-90674.appspot.com",
  messagingSenderId: "256589565536",
  appId: "1:256589565536:web:6ad77c4447d9d79c1f7d05"
};
// Initialiser Firebase
const app = initializeApp(firebaseConfig);

const login = async () => {
    try {
        
const auth = getAuth(); // Initialisation de l'authentification

        errorMessage.value = ''; // Réinitialiser le message d'erreur

        // Utilisation de await pour la promesse
        const userCredential = await signInWithEmailAndPassword(auth, email1.value, password1.value);
        
        // Connexion réussie
        const user = userCredential.user;
        router.push('/client'); 
         // Stocker l'email dans localStorage
     localStorage.setItem('userEmail', email1.value);

        console.log("Connexion réussie :", user);
    } catch (error) {
        // Gérer les erreurs ici
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erreur de connexion :", errorCode, errorMessage);
        errorMessage.value = errorMessage; // Afficher le message d'erreur à l'utilisateur
    }
};


/*
const login = async () => {
      try {
        errorMessage.value = ''; // Réinitialiser le message d'erreur
        const response = await axios.post('http://localhost:3001/users/login', {
          Email: email1.value,
          Password: password1.value,
        });

        // Traitement de la réponse (par exemple, stockage du token ou des données utilisateur ici)
        console.log(response.data);


        // Redirection vers la page d'accueil ou tableau de bord après connexion réussie
        router.push('/client'); 

            // Stocker l'email dans localStorage
     localStorage.setItem('userEmail', email1.value);


      } catch (error) {
        if (error.response) {
          errorMessage.value = error.response.data.message || 'Erreur lors de la connexion';
        } else {
          errorMessage.value = 'Erreur de connexion';
        }
      }
    };
*/
    
    const email = ref('');
    const password = ref('');
    const firstname = ref('');
    const lastname = ref('');
    const phone = ref('');
    const address = ref('');
    const erreur = ref(null);

    

    const register = async () => {

      try {
        const response = await axios.post('http://localhost:3001/users/form', {
            Email: email.value,
            Password: password.value,
            FirstName : firstname.value,
            LastName : lastname.value,
            Phone : phone.value,
            Address : address.value,
        });

        
        
    // Traitement de la réponse (par exemple, stockage du token ou des données utilisateur ici)
        console.log(response.data);

// Redirection vers la page d'accueil ou tableau de bord après connexion réussie
successMessage.value = "Inscription réussie ! Vous pouvez maintenant vous connecter.";
        // Redirection vers la page de connexion ou autre
router.push('/'); 





      } 
      catch (error) {
        if (error.response) {
          erreur.value = error.response.data.message || 'Erreur lors de l\'inscription';
        } else {
          erreur.value = 'Erreur d\' Enregistrement';
        }
      }
    };




</script>