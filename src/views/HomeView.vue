<template>
<div class="">

 <!--<div class="relative  overflow-hidden h-50 md:h-50 ]">  w-full  bg-cover bg-center bg-no-repeat bg-[url('assets/cover.jpg')je dois faire un diaspo -->
  <!-- <div class="px-4 mx-auto  text-center py-24 lg:py-56 md:py-20 sm:py-20"> -->
  
 <!-- Carousel -->
<div id="default-carousel" class="relative w-full" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden md:h-96">
        <!-- Item 1 with header and paragraph -->
        <!-- <div class="hidden duration-700 ease-in-out relative" data-carousel-item>
            <img src="../assets/image4.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            
    
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div class="">
                    
                  <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-800">
                        Welcome to <span class="font-extrabold text-5xl text-orange-500 uppercase">EATEASILY</span>
                    </h1>
                    <p class="mb-4 text-2xl font-extrabold text-gray-800">Search for restaurants and place your orders</p> 
                </div>
            </div>
        </div> -->

        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../assets/image6.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        
         <!-- Text content over the image -->
         <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div class="">
                    
                  <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-800">
                        Welcome to <span class="font-extrabold text-5xl text-orange-500 uppercase">EATEASILY</span>
                    </h1>
                    <p class="mb-4 text-2xl font-extrabold text-gray-800">Search for restaurants and place your orders</p> 
                </div>
            </div>
        
        
          </div>

        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../assets/image5.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        
         <!-- Text content over the image -->
         <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div class="">
                    
                  <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-800">
                        Welcome to <span class="font-extrabold text-5xl text-orange-500 uppercase">EATEASILY</span>
                    </h1>
                    <p class="mb-4 text-2xl font-extrabold text-gray-800">Search for restaurants and place your orders</p> 
                </div>
            </div>
        
        
          </div>
    

     <!-- Item 3 -->
     <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../assets/cover.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        
         <!-- Text content over the image -->
         <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div class="">
                    
                  <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-800">
                        Welcome to <span class="font-extrabold text-5xl text-orange-500 uppercase">EATEASILY</span>
                    </h1>
                    <p class="mb-4 text-2xl font-extrabold text-gray-800">Search for restaurants and place your orders</p> 
                </div>
            </div>
        
     </div>
          </div>
    

    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>

    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>


<!-- 
<div class="absolute inset-0 md:absolute md:inset-0 flex justify-center items-center z-40">
   
    <div class="bg-transparent  ">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-800">Welcome to <span class="font-extrabold text-5xl text-orange-500 uppercase">EATEASILY</span></h1>
        <p class="mb-4 text-2xl font-extrabold text-gray-800">Search for restaurants and place your orders</p> 
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
</div> -->








    
  

  
  
  
    <!-- <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Welcome to  <span class="font-extrabold text-5xl text-orange-500 uppercase" >EATEASILY</span></h1>      
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
</div>-->
<div class="bg-orange-100 min-h-screen"> 
     <main class="container mx-auto px-4 p-4">
      <div class="flex justify-between items-center py-10 mx-8">
    <!-- Title Section -->
    <h1 class="uppercase text-orange-500 text-2xl font-extrabold">Discover Restaurants</h1>
    
    <!-- Search Form Section -->
    <form class="flex items-center w-full sm:w-auto">
        <label for="default-search" class="sr-only">Search</label>
        <div class="relative w-full sm:w-64">
            <!-- Search Icon -->
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <!-- Search Input -->
            <input v-model="searchQuery" type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search Yaoundé, Douala..." required />
            <!-- Search Button -->
            <button @click.prevent="searchRestaurant" type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                Search
            </button>
        </div>
    </form>
</div>

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
     <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button"
      @click="open1"  class="fixed bottom-5 right-5 bg-white border border-orange-400 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 hover:bg-gray-100" >
    <svg class="h-10 w-10 text-orange-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
</svg>

    </button>
    <div id="tooltip-bottom" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-orange-400 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
      Add your restaurant easily by clicking on the button below.
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
</div>






    <!-- Main modal add restaurant -->
    <div  v-show="active == false"  class="inset-0 bg-gray-950 bg-opacity-50  flex shadow overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full h-full" > 
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div  class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-orange-500 dark:text-white">
              Welcome to  <span class="font-extrabold text-xl text-orange-500 uppercase" >EATEASILY</span>
            </h3>
            <button  type="button"  @click="open1"  class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"  >
              <svg  class="w-3 h-3"    xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 14 14">
                <path  stroke="currentColor"  stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2"  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5">
            <form class="space-y-4" action=" "  >
              <p v-if="errorMessage" class="text-red-500 font-serif">{{ errorMessage }}</p>
              <div>
                <label  for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Email</label>
                <input   v-model="email"   type="email"  id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required autocomplete="username"  />
              </div>
              <div>
                <label   for="password"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >Password</label>
                <input  v-model="password"   type="password"  id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required autocomplete="current-password" />
              </div>
              <div class="py-2"></div>
              <RouterLink to="">
                <button @click.prevent ="connexion" :disabled="isLoading" type="submit"  class="w-full text-white bg-orange-700 hover:bg-white border hover:border-orange-500 hover:text-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  connect to your restaurateur space
                </button></RouterLink>
                 <!-- Spinner -->
              <div v-if="isLoading" role="status" class="flex justify-start items-center">
                  <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span class="sr-only text-gray-900" >Loading...</span>
              </div>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?
                <RouterLink to="/form"
                  ><button  @click="open1"  class="text-orange-700 hover:underline dark:text-orange-500">  Add your restaurant  </button></RouterLink >
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>










</div> 

</template>

<script setup>    
import { getStorage, ref as stRef, uploadBytes ,getDownloadURL } from 'firebase/storage';
import { ref, onMounted ,watch } from 'vue';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import axios from 'axios';
import { useRouter } from 'vue-router';
import 'swiper/swiper-bundle.css';
import { store } from '../store/global';
import { RouterLink } from 'vue-router';
import { useUserStore } from '../utils/useUserStore.js'
import { useCartStore } from '/src/utils/useCartStore.js';
const active = ref(true)
const Restaurant = store.getRestaurant()
const searchQuery = ref('');
const restaurants = ref([]);
const restoStore = useCartStore();
const email = ref("");
const password = ref("");
const router = useRouter();
const errorMessage = ref("");




// Déclare les variables réactives
const currentSlide = ref(0);

// Fonction pour changer de slide
const setCurrentSlide = (index) => {
  currentSlide.value = index;
};

// Fonction pour aller au slide suivant
const nextSlide = () => {
  if (currentSlide.value < 2) {
    currentSlide.value += 1;
  }
};

// Fonction pour aller au slide précédent
const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value -= 1;
  }
};

// Fonction pour gérer les changements de slide via un événement
const handleSlideChange = (event) => {
  currentSlide.value = Number(event.target.getAttribute('data-carousel-slide-to'));
};




















const open1 = () => {
  active.value = !active.value;
  email.value = '';
      password.value = '';
      errorMessage.value = "";
};

 //Fonction pour récupérer les restaurants
 const fetchRestaurants = async () => {
  try {
    const response = await axios.get('https://proj-bdjg.onrender.com/restaurants/resto');
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
  
  // Réinitialiser le message d'erreur si tout est valide
  errorMessage.value = ""; 
  return true;
};


const isLoading = ref(false)



const connexion = async () => {
  const userStore = useUserStore();
  if (!validateFields()) {
    return;
  }
  
  isLoading.value = true;  
  try {
    

    // Connexion avec Firebase
    const userCredential = await  userStore.login(email.value, password.value);;
    const user = userCredential.user;

    // Si vous avez besoin d'appeler votre API après la connexion Firebase
    const response = await axios.post("https://proj-bdjg.onrender.com/users/login", {
      Email: email.value,
      Password: password.value,
    });

    // Mettez à jour le store avec les données de l'utilisateur
    store.setUser(response.data.data);
    
    // Ouvrir la modal ou effectuer une action
    open1();
    
    // Redirection vers la page de commande
    router.push("/cmd"); 

    // Stocker l'email de l'utilisateur dans le localStorage
    localStorage.setItem("userEmail1",userStore.userInfo.email ); 
    email.value = '';
    password.value = '';
    errorMessage.value = ""; 

  } catch (error) {
    console.error("Erreur de connexion :", error);
  if (error.code === 'auth/invalid-email') {
    errorMessage.value = "L'adresse email saisie est invalide. Veuillez vérifier votre email.";
  } else if (error.code === 'auth/wrong-password') {
    errorMessage.value = "Le mot de passe saisi est incorrect.";
  } else if (error.code === 'auth/user-not-found') {
    errorMessage.value = "Aucun utilisateur trouvé avec cet email.";
  } else if (error.code === 'auth/invalid-credential') {
    errorMessage.value = "The credentials provided are invalid. Please try again.";
  }
  else {
    errorMessage.value = error.message || "Erreur de connexion";
  }
  } finally {
    isLoading.value = false;  
  }
};





  
</script>
