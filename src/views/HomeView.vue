<template>
<div class="">

  <div  class="relative w-full h-auto" >
    <!-- Carousel wrapper -->
    <div class="relative lg:h-[550px] overflow-hidden md:h-96 h-[200px] ">
      <!-- Items -->
      <div
        class="absolute inset-0 transition-opacity duration-700 ease-in-out"
        v-for="(item, index) in items"
        :key="index"
        :class="{ 'hidden': currentIndex !== index }"
        data-carousel-item
      >
        <img :src="item.image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Carousel Image">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 class="mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-none text-white">
            Welcome to <span class="font-extrabold text-5xl text-orange-500 uppercase">EATEASILY</span>
          </h1>
          <p class="mb-4 text-2xl mt-2 font-extrabold text-white">Search for restaurants and place your orders</p>
        </div>
      </div>
    </div>

    <!-- Slider indicators -->
    <div class="absolute z-30 flex  -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button
        v-for="(item, index) in items"
        :key="index"
        type="button"
        class="w-3 h-3 rounded-full "
        :class="{ 'bg-white': currentIndex === index, 'bg-gray-400': currentIndex !== index }"
        @click="goToSlide(index)"
        aria-label="Slide {{ index + 1 }}"
      ></button>
    </div>

    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="prevSlide">
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
        <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" @click="nextSlide">
      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
        <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
<div class="bg-white min-h-screen"> 
     <main class="container mx-auto px-4 p-4  sm:px-6 lg:px-8 py-4">
      <div class="flex flex-col items-center mx-8  flex-wrap   py-6">
    <!-- Title Section -->
    <h1 class="uppercase text-orange-500 text-2xl font-extrabold pb-6 text-center sm:text-left">Discover Restaurants</h1>
    
    
</div>

 

<SpinnerOverPage v-if="isLoading"/>
<div  class="flex flex-wrap justify-center gap-6 ">
        <div   v-for="restaurant in restoStore.resto" :key="restaurant.id"  data-aos="zoom-in-down"  class= "  bg-white text-xs rounded-xl  shadow-xl  p-2 h-30 w-32 sm:w-60  overflow-hidden transition-transform transform hover:scale-105">
          <div class=" flex flex-col items-start">
            
      <RouterLink :to="{ name: 'Menu', params: { id_restaurant:restaurant.id_restaurant}}" class=" cursor-pointer select-none transition-transform transform hover:scale-105 ">
            <img class="  w-60 h-32 object-cover rounded-lg" :src= "restaurant.logo"  alt="restaurant logo" />
            <h2 class="font-bold text-xs sm:text-xl text-orange-600 uppercase mt-1 truncate">{{ restaurant.name }}</h2>
            <p class="text-gray-500 font-semibold text-xs sm:text-lg "><svg class="h-4 w-4 inline-flex text-orange-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  <circle cx="12" cy="10" r="3" /></svg> {{ restaurant.address }}</p>
            <p class="text-gray-500  sm:text-base"><svg class="h-4 w-4 inline-flex text-orange-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg> {{ restaurant.phone }}</p>
            <RouterLink to="" class="text-gray-500 sm:text-base hover:underline truncate"><svg class="h-4 w-4 inline-flex  text-orange-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" /></svg> {{ restaurant.website }}</RouterLink>
            <!-- <p class="text-gray-500">{{ restaurant.email }}</p> -->
            <!-- <p class="text-gray-950"> ★ {{ restaurant.service }}</p> -->
            <!-- <RouterLink :to="{ name: 'Menu', params: { id_restaurant:restaurant.id_restaurant}}"> <button  class="mt-2 sm:text-base inline-block bg-orange-400 text-white rounded-xl px-4 p-1 hover:bg-orange-700 transition">See the Menu</button></RouterLink> -->
          </RouterLink>
          </div>
        </div>
 
      </div>
     </main>

</div>














</div> 

</template>

<script setup>    
import { getStorage, ref as stRef, uploadBytes ,getDownloadURL } from 'firebase/storage';
import { ref, onMounted ,onBeforeUnmount} from 'vue';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import axios from 'axios';
import { useRouter } from 'vue-router';
import 'swiper/swiper-bundle.css';
import { store } from '../store/global';
import { RouterLink } from 'vue-router';
import { useUserStore } from '../utils/useUserStore.js';
import { useCartStore } from '/src/utils/useCartStore.js';
import { defineAsyncComponent } from 'vue';
const SpinnerOverPage = defineAsyncComponent(() => import('../components/Utilities/SpinnerOverPage.vue'));
const active = ref(true)
const Restaurant = store.getRestaurant()
const searchQuery = ref('');
const restaurants = ref([]);
const restoStore = useCartStore();
const email = ref("");
const password = ref("");
const router = useRouter();
const errorMessage = ref("");





const open1 = () => {
  active.value = !active.value;
  email.value = '';
      password.value = '';
      errorMessage.value = "";
};

 //Fonction pour récupérer les restaurants
 const fetchRestaurants = async () => {
  isLoading.value = true;  
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
     const response = await axios.get('https://proj-bdjg.onrender.com/restaurants/resto');
     restaurants.value = response.data.data;
     console.log("restaurants", restaurants.value );
     restoStore.resto = response.data.data
     restoStore.restoMemory = response.data.data
     console.log("resto",restoStore.restoMemory );
    } catch (error) {
    console.error('Erreur lors de la récupération des restaurants:', error);
      } finally {
        isLoading.value = false; 
      }

 };
// // Appeler la fonction lors du montage du composant
 onMounted(fetchRestaurants)





const isLoading = ref(false)




const items = [
  { image: ('/assets/repas.jpg') },
  { image: ('/assets/salade.jpeg') },
  { image: ('/assets/cover.JPG') },
  { image: ('/assets/pizza.jpg') }
];

const currentIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Fonction pour démarrer le changement automatique
const startAutoSlide = () => {
  intervalId = setInterval(nextSlide, 5000); 
};

// Fonction pour arrêter le changement automatique
const stopAutoSlide = () => {
  clearInterval(intervalId);
};

// Démarrer l'auto-slide lorsque le composant est monté
onMounted(() => {
  startAutoSlide();
});

// Arrêter l'auto-slide lorsque le composant est démonté
onBeforeUnmount(() => {
  stopAutoSlide();
});


  
</script>
