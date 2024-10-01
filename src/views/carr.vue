<template>

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
    



  
</template>
  
    <script setup >

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



