<template>

<div class="  ">


  <div class="relative overflow-hidden h-50 w-full bg-cover bg-center bg-no-repeat bg-[url('assets/sand.jpg')]">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto py-10">
    <div class="hidden md:block"></div> 

    <div class="w-full max-w-lg px-4 md:px-8">
      <form @submit.prevent="Register()" class="bg-white space-y-4 my-4 py-10 mx-auto z-10 translate-y-6 px-8">
        <h1 class="text-xl font-semibold flex text-orange-500 flex-col items-center underline">
          Do you already have an account?
        </h1>

        <hr class="py-2">

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
          <div class="mb-5">
            <label for="nom1" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">First Name</label>
            <input type="text" id="nom1" v-model="firstname" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Entrez votre nom" required />
          </div>

          <div class="mb-5">
            <label for="prenom" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Last Name</label>
            <input type="text" id="prenom" v-model="lastname" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Entrez votre prénom" required />
          </div>
        </div>

        <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
          <div class="mb-5">
            <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" v-model="email" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="name@gmail.com" required />
          </div>

          <div class="mb-5">
            <label for="numero" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input type="tel" id="numero" v-model="phone" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="697778855" required />
          </div>
        </div>

        <label for="pass" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="pass" v-model="password" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Entrez votre mot de passe" required />

        <div class="my-5">
          <label class="block text-gray-900 text-lg font-semibold mb-2 dark:text-white">Type of Service</label>
          <select v-model="service" class="appearance-none border rounded-lg w-full border-orange-300 py-2 px-3 text-gray-700 leading-tight focus:ring-orange-500 focus:outline-none focus:shadow-outline" required>
            <option value="" disabled>Select an option</option>
            <option value="reservation">Reservation</option>
            <option value="Delivery">Delivery</option>
            <option value="Delivery and Reservation">Delivery and Reservation</option>
          </select>
        </div>

        <div class="flex flex-col items-center mt-10">
          <button type="submit" class="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-white border hover:text-orange-700 hover:border-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            Enregistrer
          </button>
        </div>

        <p v-if="erreur" class="text-red-500 font-serif text-lg">{{ erreur }}</p>
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
const erreur = ref(null);
const service = ref('');
const website = ref('');
const name = ref('');
const logo = ref('');
const file = ref(null);

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



// const uploadFile = async () => {
//   if (!file.value) return null;

//   const storageRef = stRef(storage, "files/" + file.value.name);
//   try {
//     const snapshot = await uploadBytes(storageRef, file.value);
//     // Obtenez l'URL de téléchargement
//     const downloadURL = await getDownloadURL(storageRef);
    

//     const newFileRef = push(databaseReference);
//     await set(newFileRef, {
//       name: file.value.name,
//       url: downloadURL // Sauvegardez l'URL dans la base de données
//     });
//     return snapshot, downloadURL; // Renvoie l'URL pour utilisation //snapshot; // Renvoie le snapshot pour vérifier le succès
//   } catch (error) {
//     console.error("Upload failed:", error);
//     throw error; // Lève l'erreur pour la gestion dans Register
//   }
// };


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



  const Register= async () => {
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
       Service: service.value,
        Website: website.value,
        Name: name.value,
        Logo: logo
      
      });
    
      console.log(response.data);
      store.setRestaurantId(response.data.data);
      alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
      router.push('/');
    
    } catch (error) {
      console.log(error); 
      if (error.response) {
        erreur.value = error.response.data.message || 'Erreur lors de l\'inscription';
      } else {
        erreur.value = 'Erreur d\' Enregistrement';
      }
   }
 };




</script>