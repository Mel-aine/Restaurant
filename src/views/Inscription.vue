<template>


<section class="relative overflow-hidden h-50 w-full bg-cover bg-center bg-no-repeat bg-[url('assets/image6.jpg')]">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto p-4">
    <div class="w-full max-w-full p-4 bg-white border border-gray-200 shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 class="text-xl flex flex-col items-center uppercase font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
      <form @submit.prevent="register" class="space-y-4 py-8 my-8 z-10 translate-y-6">
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
        <p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>

        <div class="relative z-0 w-full mb-5 group">
          <input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="email" autocomplete="username"/>
          <label for="email" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
        </div>

        <div class="relative z-0 w-full mb-5 group">
          <input type="password" name="password" id="password" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="password" autocomplete="current-password" />
          <label for="password" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="firstname" id="firstname" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="firstname" />
            <label for="firstname" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="lastname" id="lastname" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="lastname" />
            <label for="lastname" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
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

        <!-- <div class="mt-10 ">
          <button :disabled="isLoading" type="submit" class="w-full inline-flex flex-col items-center px-5 py-2.5 text-orange-500 bg-white hover:text-white hover:bg-orange-500 border border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-xl text-md sm:w-auto text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Register</button>
        </div> -->
        <div class=" mt-10">
          <button type="submit" :disabled="isLoading" class="inline-flex flex-col items-center w-full px-3 py-2 text-lg font-medium   text-orange-500 bg-white hover:text-white  border-orange-500 hover:bg-orange-500  rounded-lg  border   focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            Register
          </button>
        </div>
           <!-- Spinner -->
              <div v-if="isLoading" role="status" class="flex justify-start items-center">
                  <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span class="sr-only text-gray-900" >Loading...</span>
              </div>

       
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already have an account? <RouterLink to="/" class="text-orange-700 font-medium text-lg hover:underline dark:text-orange-500">Log In</RouterLink>
        </div>
      </form>
    </div>
  </div>
</section>



</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
//import { auth } from './firebase'; // Importez votre configuration Firebase
import { signInWithEmailAndPassword } from "firebase/auth"; // Importez la fonction de connexion avec Firebase Auth
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { store } from "../store/global";

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



const isLoading = ref(false);
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
    const errorMessage = ref(null);
    const successMessage = ref(null);

  
const validateFields = () => {
  // Vérification de l'email
  if (!email.value) {
    errorMessage.value = "Email is required.";
    return false;
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour valider l'email
  if (!emailPattern.test(email.value)) { // Utilisez email1 ici
    errorMessage.value = "Please enter a valid email address.";
    return false;
  }
  
  // Vérification du mot de passe
  if (!password.value) {
    errorMessage.value = "Password is required.";
    return false;
  }
  
  if (password.value.length < 6) {
    errorMessage.value = "The password must contain at least 6 characters.";
    return false;
  }

  const phonePattern = /^6\d{8}$/; // Validation pour le format commençant par 6 et ayant 9 chiffres
      if (!phone.value.match(phonePattern)) {
        errorMessage.value = "The number must start with 6 and contain 9 digits in total.";
        return false;
      } 
    
  
  // Réinitialiser le message d'erreur si tout est valide
  errorMessage.value = ""; 
  return true;
};  

    const register = async () => {
      if (!validateFields()) {
     return; 
   }
      isLoading.value = true;
      try {


  const auth = getAuth();
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  }) 
        
        const response = await axios.post('https://proj-bdjg.onrender.com/users/form', {
            Email: email.value,
            Password: password.value,
            FirstName : firstname.value,
            LastName : lastname.value,
            Phone : phone.value,
            Address : address.value,
        });

        console.log(response.data);
        store.setRestaurantId(response.data.data);
        successMessage.value = response.data.message
     email.value="", password.value="",
      firstname.value="", lastname.value="", phone.value="", address.value=""
     
     
        

      } 
      catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            errorMessage.value = 'This email address is already in use. Please choose another one';
        } else if (error.response) {
            errorMessage.value = error.response.data.message || 'Erreur lors de l\'inscription';
        } else {
            errorMessage.value = error.message || "Registration error";
        }
    } finally {
    isLoading.value = false;
  }
    };



   </script>