<template>
  <div>
    <div class=" sticky top-0 z-50">
    <Header/>
</div>
<div class="relative  overflow-hidden w-full h-50  bg-cover bg-center bg-no-repeat bg-[url('assets/image5.jpg')]">
    
      <div class="px-4 mx-auto  text-center py-24 lg:py-20 ">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Bienvenue sur <span class="font-extrabold text-5xl text-orange-500 uppercase" >EATEASILY</span></h1>
                
                 
    <p class="mb-4 text-2xl font-extrabold text-white">Recherchez les restaurants et lounges.Passez vos commandes. Nous livrons a domicile</p>


        <form class="max-w-md mx-auto">   

<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
<div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
    </div>
    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search Yaoundé, Douala..." required />
    <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-blorange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Search</button>
</div>
</form>
      </div>
</div> 

<div class="container mx-auto p-8">
<h1 class="uppercase text-orange-500 flex flex-col items-center py-10 text-2xl font-extrabold">decouvrez nos Restaurants</h1>

   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
      <div v-for="restaurant in restaurants" :key="restaurant.id" class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
       
<div v-if="fileList.length">
      
      <div v-for="file in fileList" :key="file.url">
       
        <img :src="file.url" alt="Uploaded image" style="width: 200px; height: auto;" />
      </div>
    </div>
       
            
        <div class="p-6">
          <h2 class="text-2xl font-semibold text-orange-600 mb-2">{{ restaurant.name }}</h2>
          <p class="text-gray-600 mb-1"><strong>Adresse:</strong> {{ restaurant.address }}</p>
          <p class="text-gray-600 mb-1"><strong>Téléphone:</strong> {{ restaurant.phone }}</p>
          <p class="text-gray-600 mb-1"><strong>Site web:</strong> <a :href="restaurant.website" class="text-blue-500 hover:underline">{{ restaurant.site }}</a></p>
          <p class="text-gray-600 mb-1"><strong>Email:</strong> {{ restaurant.email }}</p>
          <p class="text-gray-600 mb-4"><strong>Services:</strong> {{ restaurant.service }}</p>
          <button class="bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-orange-500 transition duration-200">
            Plus d'infos
          </button>
        </div>
      </div>
    </div>



<hr class="pb-5">


</div>
    

  </div>

  
</template>
  
    <script setup >
 import Header from '../components/Header.vue'
import { getStorage, ref as stRef, uploadBytes ,getDownloadURL } from 'firebase/storage';
import { ref, onMounted } from 'vue';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import axios from 'axios';
import Swiper from 'swiper/bundle';
  import 'swiper/swiper-bundle.css';
  


    const fileList = ref([]);
    
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
const storage = getStorage(app);
const database = getDatabase(app);
const databaseReference = dbRef(database, "files");

    // Référence réactive pour stocker les fichiers

// Fonction pour récupérer les fichiers
const fetchFiles = () => {
  onValue(databaseReference, (snapshot) => {
    const files = snapshot.val();
    if (files) {
      // Transformez l'objet en tableau si nécessaire
      fileList.value = Object.values(files);
      console.log(fileList.value); // Affichez les fichiers dans la console
    }
  });
};

// Appeler la fonction pour récupérer les fichiers lors du montage du composant
onMounted(fetchFiles);
// Référence réactive pour stocker les restaurants
const restaurants = ref([]);

// Fonction pour récupérer les restaurants
const fetchRestaurants = async () => {
  try {
    const response = await axios.get('http://localhost:3001/restaurants/resto');
    // Accéder aux données en utilisant response.data.data
    restaurants.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des restaurants:', error);
  }
};

// Appeler la fonction lors du montage du composant
onMounted(fetchRestaurants);
</script>