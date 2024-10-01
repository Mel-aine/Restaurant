<template>
  
  <section class="bg-orange-200 ">
   
  <div class = "  ">
    <div class="sticky top-0 z-50">
    <Head/>
  </div>

<div class="grid grid-cols-2 gab-4 mx-auto ">


  <div class="w-full max-w-full   p-4 bg-white border border-gray-200  shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    
        <h5 class="text-xl flex flex-col items-center uppercase font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
        <form @submit.prevent="register" class="space-y-4 py-8 my-8 z-10 translate-y-6">
      <div class="relative z-0 w-full mb-5 group">
        <input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="email" />
        <label for="email" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
      </div>

      <div class="relative z-0 w-full mb-5 group">
        <input type="password" name="password" id="password" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="password"/>
        <label for="password" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      </div>

      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <input type="text" name="firstname" id="firstname" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="firstname" />
          <label for="firstname" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">FirstName</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input type="text" name="lastname" id="lastname" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="lastname" />
          <label for="lastname" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">LastName</label>
        </div>
      </div>

      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
          <input type="text" name="address" id="address" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="address"/>
          <label for="address" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input type="tel" name="phone" id="phone" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="phone"/>
          <label for="phone" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
        </div>
      </div>

      <div class="mt-10 flex md:flex-col items-center">
        <button type="submit" class="w-full px-5 py-2.5 text-orange-500 bg-white hover:text-white hover:bg-orange-500 border border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-xl text-md sm:w-auto text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Register</button>
      </div>

      <p v-if="erreur" class="text-red-500">{{ erreur }}</p>
      <p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>

      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Already have an account? <RouterLink to="/" class="text-orange-700 font-meduim text-lg  hover:underline dark:text-orange-500">LogIn</RouterLink>
      </div>
    </form>
</div>

<div>
  <img src="../assets/image4.jpg" class="max-w-full max-h-md">
</div>

</div>

  
</div>
 
</section>



</template>

<script setup>
import { ref } from "vue";
import Head from '../components/Head.vue';
import { useRouter } from "vue-router";
//import { auth } from './firebase'; // Importez votre configuration Firebase
import { signInWithEmailAndPassword } from "firebase/auth"; // Importez la fonction de connexion avec Firebase Auth
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import axios from 'axios';




// src/firebase.js
import { initializeApp } from 'firebase/app';

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




   
const successMessage = ref('');
 const router = useRouter(); // Initialiser le routeur



/*const router = useRouter()
const redirectReload = async () => {
    await router.push({ path : '/' })
    router.go(0);
}*/

 
const email = ref('');
    const password = ref('');
    const firstname = ref('');
    const lastname = ref('');
    const phone = ref('');
    const address = ref('');
    const erreur = ref(null);

    

    const register = async () => {

      try {

// 1. Créer un utilisateur avec Firebase Auth
//const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
   // const user = userCredential.user;

  const auth = getAuth();
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  }) 

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
//successMessage.value = "Inscription réussie ! Vous pouvez maintenant vous connecter.";
alert ("Inscription réussie ! Vous pouvez maintenant vous connecter.")
        // Redirection vers la page de connexion ou autre
router.push('/'); 





      } 
      catch (error) {
        if (error.response) {
          erreur.value = error.response.data.message || 'Erreur lors de l\'inscription';
        } else {
          erreur.value = error.message || "erreur d enregistrement";
        }
      
  }
    };



    


   </script>