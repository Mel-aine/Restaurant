<template>

<div class="  ">


  <div class="relative overflow-hidden w-full bg-cover bg-center bg-no-repeat bg-[url('assets/sandwich.jpg')]">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto pb-10">
    <div class="hidden md:block"></div> 

    <div class="w-full max-w-lg px-4 md:px-8">
      <form @submit.prevent="Register()" class="bg-white space-y-4 my-4 py-10 mx-auto z-10 translate-y-6 px-8">
        <h1 class="text-xl font-semibold flex text-orange-500 flex-col items-center underline">
          Do you already have an account?
        </h1>

        <hr class="py-2">

        <p v-if=" errorMessage" class="text-red-500 font-serif text-lg">{{  errorMessage }}</p>
        <p v-if=" successMessage" class="text-green-500 font-serif text-lg">{{  successMessage }}</p>

        <div class="mb-5">
          <label class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Restaurant's logo</label>
          <div class="flex flex-col items-center pb-5">
            <input type="file" @change="onFileChange" />
          </div>
        </div>

        <div class="mb-5">
          <label for="address" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Restaurant Address</label>
          <input type="text" id="address" v-model="address" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Entrez restaurant address" required />
        </div>

        <div class="mb-5">
          <label for="nom" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Restaurant's Name</label>
          <input type="text" id="nom" v-model="name" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Exemple: liv's-PIZZA" required />
        </div>

        <div class="mb-5">
          <label for="site" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Website</label>
          <input type="text" id="site" v-model="website" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="www.nmmml.com" />
        </div>

        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="">
            <label for="nom1" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">First Name</label>
            <input type="text" id="nom1" v-model="firstname" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Entrez votre nom" required />
          </div>

          <div class="">
            <label for="prenom" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Last Name</label>
            <input type="text" id="prenom" v-model="lastname" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Entrez votre prénom" required />
          </div>
        </div>

        <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
          <div class="">
            <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" v-model="email" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="name@gmail.com" autocomplete="username" required />
          </div>

          <div class="">
            <label for="numero" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input type="tel" id="numero" v-model="phone" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="697778855" required />
          </div>
        </div>

        <label for="pass" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="pass" v-model="password" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Entrez votre mot de passe" autocomplete="current-password" required />

        <!-- <div class="my-5">
          <label class="block text-gray-900 text-lg font-semibold mb-2 dark:text-white">Type of Service</label>
          <select v-model="service" class="appearance-none border rounded-lg w-full border-orange-300 py-2 px-3 text-gray-700 leading-tight focus:ring-orange-500 focus:outline-none focus:shadow-outline" required>
            <option value="" disabled>Select an option</option>
            <option value="reservation">Reservation</option>
            <option value="Delivery">Delivery</option>
            <option value="Delivery and Reservation">Delivery and Reservation</option>
          </select>
        </div> -->

        <div class=" mt-10">
          <button type="submit" :disabled="isLoading" class="inline-flex flex-col items-center w-full px-3 py-2 text-lg font-medium  text-white bg-orange-700 rounded-lg hover:bg-white border hover:text-orange-700 hover:border-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
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
      </form>
    </div>
  </div>
</div>


    </div>
</template>
<script setup >

import { getStorage, ref as stRef, uploadBytes ,getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as dbRef, push, set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { ref } from 'vue';
import axios from 'axios';
import { store } from "../store/global";
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const firstname = ref('');
const lastname = ref('');
const phone = ref('');
const address = ref('');
const  errorMessage = ref(null);
const service = ref('');
const website = ref('');
const name = ref('');
const logo = ref('');
const file = ref(null);
const  successMessage = ref(null);

// Your web app's Firebase configuration
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
const storage = getStorage(app);
const database = getDatabase(app);
const databaseReference = dbRef(database, "files");

const onFileChange = (event) => {
  file.value = event.target.files[0];
};


const uploadFile = async () => {
  if (!file.value) return null;

  const storageRef = stRef(storage, "files/" + file.value.name);
  try {
    const snapshot = await uploadBytes(storageRef, file.value);
    // Obtenez l'URL de téléchargement
    const downloadURL = await getDownloadURL(storageRef);
    
    // Retournez simplement l'URL
    return downloadURL; 
  } catch (error) {
    console.error("Upload failed:", error);
    throw error; // Lève l'erreur pour la gestion dans Register
  }
};


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

const isLoading = ref(false);


  const Register= async () => {

    if (!validateFields()) {
     return; 
   }
   isLoading.value = true; // Active le spinner

    try {
    
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    
    
// //     // Étape 1 : Upload du fichier
     const logo = await uploadFile(); 
    
//      // Étape 2 : Soumission des données du formulaire
      const response = await axios.post('https://proj-bdjg.onrender.com/restaurants/form', {
        Email: email.value,
        Password: password.value,
        FirstName: firstname.value,
        LastName: lastname.value,
        Phone: phone.value,
        Address: address.value,
       Service: "Delivery",
        Website: website.value,
        Name: name.value,
        Logo: logo
      
      });
    
      console.log(response.data);
      store.setRestaurantId(response.data.data);
     // alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
     successMessage.value = response.data.message
     email.value="", password.value="",
      firstname.value="", lastname.value="", phone.value="", address.value="", name.value="", website.value=""
     
     
    
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/email-already-in-use') {
            errorMessage.value = 'This email address is already in use. Please choose another one';
        } else if (error.response) {
            errorMessage = error.response.data.message || 'Erreur lors de l\'inscription';
        } else {
            errorMessage = error.message || "Registration error";
        }
   }finally{
    isLoading.value = false; // Désactive le spinner
   }
 };




</script>