<template>
<div class="">

<div class="relative  overflow-hidden h-50 w-full  bg-cover bg-center bg-no-repeat bg-[url('assets/image5.jpg')]">
  <div class="px-4 mx-auto  text-center py-24 lg:py-20 md:py-20 sm:py-20">
    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Welcome to  <span class="font-extrabold text-5xl text-orange-500 uppercase" >EATEASILY</span></h1>      
    <p class="mb-4 text-2xl font-extrabold text-white">Search for restaurants and place yours orders </p>
      <form class="max-w-md mx-auto">   
         <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input v-model="searchQuery" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search Yaoundé, Douala..." required />
          <button @click.prevent="searchRestaurant" type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-blorange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Search</button>
        </div>
      </form>
  </div>
</div>
<div class="bg-orange-100 min-h-screen"> 
     <main class="container mx-auto px-4 p-4">
      <h1 class="uppercase text-orange-500 flex flex-col items-center py-10 text-2xl font-extrabold">Discover Restaurants</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="restaurant in restaurants" :key="restaurant.id"  data-aos="zoom-in-down"  class="bg-white  rounded-xl border border-orange-400 shadow-xl  p-2 h-30 w-60 overflow-hidden transition-transform transform hover:scale-105">
          <div class=" flex flex-col items-center">
            <img class="  w-40 h-32 object-cover rounded-lg" :src= "restaurant.logo"  alt="restaurant logo" />
            <h2 class="font-bold text-xl text-orange-600 uppercase mt-1 truncate">{{ restaurant.name }}</h2>
            <p class="text-gray-500 font-semibold text-lg "><svg class="h-4 w-4 inline-flex text-orange-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  <circle cx="12" cy="10" r="3" /></svg> {{ restaurant.address }}</p>
            <p class="text-gray-500"><svg class="h-4 w-4 inline-flex text-orange-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg> {{ restaurant.phone }}</p>
            <RouterLink to="" class="text-gray-500 hover:underline"><svg class="h-4 w-4 inline-flex text-orange-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" /></svg> {{ restaurant.website }}</RouterLink>
            <!-- <p class="text-gray-500">{{ restaurant.email }}</p> -->
            <!-- <p class="text-gray-950"> ★ {{ restaurant.service }}</p> -->
            <RouterLink :to="{ name: 'Menu', params: { id_restaurant:restaurant.id_restaurant}}"> <button  class="mt-2 inline-block bg-orange-400 text-white rounded-xl py-2 px-4 hover:bg-orange-700 transition">See the Menu</button></RouterLink>
          </div>
        </div>
      </div>
     </main>
</div>



</div> 

</template>

<script setup>    
import { getStorage, ref as stRef, uploadBytes ,getDownloadURL } from 'firebase/storage';
import { ref, onMounted ,watch } from 'vue';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import axios from 'axios';
import { useRoute } from 'vue-router';
import 'swiper/swiper-bundle.css';
import { store } from '../store/global';
import { RouterLink } from 'vue-router';
import { useCartStore } from '/src/utils/useCartStore.js';
const route = useRoute();
const active = ref(true)
const Restaurant = store.getRestaurant()
const searchQuery = ref('');
const restaurants = ref([]);
const restoStore = useCartStore();


 //Fonction pour récupérer les restaurants
 const fetchRestaurants = async () => {
  try {
    const response = await axios.get('https://proj-kappa-green.vercel.app:3001/restaurants/resto');
    restaurants.value = response.data.data;
    restoStore.restoMemory = response.data.data
    console.log("resto",restoStore.restoMemory );
   } catch (error) {
    console.error('Erreur lors de la récupération des restaurants:', error);
  }
 };
// // Appeler la fonction lors du montage du composant
 onMounted(fetchRestaurants)



const searchRestaurant  = () => {
  const query = searchQuery.value; 
  if (!query.trim()) {
    restaurants.value = restoStore.restoMemory 
  } else {
    restaurants.value = restoStore.restoMemory.filter(Item =>
      Item.address.toLowerCase().includes(query.toLowerCase())
    );
  }
};



  
</script>
