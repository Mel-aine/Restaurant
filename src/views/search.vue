<template>
    
  <div class="container mx-auto p-4 pt-20 bg-white min-h-screen ">
    <!-- Indicateur de chargement -->
    <div v-if="isLoading" role="status" class="flex justify-center items-center py-12">
      <svg
        aria-hidden="true"
        class="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>

    <!-- Liste des restaurants -->
    <div v-else class="flex flex-wrap justify-center gap-6 mx-auto">
      <a
        v-for="restaurant in restoStore.restoSearch"
        :key="restaurant.id"
        data-aos="zoom-in-down"
        href="#"
        class="flex flex-col items-center  p-2 h-30 w-80 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100  transition duration-200 ease-in-out"
      >
      <RouterLink :to="{ name: 'Menu', params: { id_restaurant:restaurant.id_restaurant}}">
        <img
          class="object-cover w-full rounded-t-lg h-48 md:h-64"
          :src="restaurant.logo"
          alt="restaurant logo"
        />
        <div class="flex flex-col justify-between p-4 leading-normal ">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-orange-500 uppercase">
            {{ restaurant.name }}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ restaurant.phone }} 
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ restaurant.address }} 
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ restaurant.service }} 
          </p>
          
        </div>
    </RouterLink>
      </a>
    </div>
  </div>


  
</template>

<script setup>
import { useCartStore } from '/src/utils/useCartStore.js';
import axios from 'axios';
import { ref, onMounted } from 'vue';
const restaurants = ref([]);
const isLoading = ref(true);
const restoStore = useCartStore();

 
 const fetchRestaurants = async () => {
  isLoading.value = true;  
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
     const response = await axios.get('https://proj-bdjg.onrender.com/restaurants/resto');
     restaurants.value = response.data.data;
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
</script>