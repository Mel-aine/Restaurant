<template>
  <div>
    <div v-if="store.global?.hasUser"  class=" max-w-md mx-auto bg-white p-8 px-8 rounded-lg shadow-md mt-10 ">
       
          <div class="flex flex-col items-center px-4 pt-2 pb-5">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"  
              :src="store.global.user.Restaurants[0].logo"
              alt="Bonnie image"
            />
            <h5
              class="mb-1 text-xl uppercase font-semibold text-orange-500 dark:text-white"
            >
            {{ store.global.user.Restaurants[0].name }}
            </h5>
          </div>

          <div class="px-8 mx-auto">
            <dl
              class="max-w-md text-gray-900 divide-y items-center divide-gray-200 dark:text-white dark:divide-gray-700"
            >
              <div class="flex-col pb-2 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Email address
                </dt>
                <dd class="text-lg font-semibold">{{ store.global.user.email }}</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Restaurant address
                </dt>
                <dd class="text-lg font-semibold">{{ store.global.user.Restaurants[0].address }}</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Phone number
                </dt>
                <dd class="text-lg font-semibold">{{ store.global.user.Restaurants[0].phone }}</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Site web
                </dt>
                <dd class="text-lg font-semibold">{{ store.global.user.Restaurants[0].website }}</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Type of service
                </dt>
                <dd class="text-lg font-semibold">{{ store.global.user.Restaurants[0].service }}</dd>
              </div>
            </dl>
          </div>

          <div class="flex mt-4 md:mt-6 pb-5 flex-col items-center">
            <button
              @click="openModal"  type="button"
              class="py-2 w-full px-4 ms-2 text-sm font-medium text-orange-500 focus:outline-none bg-white rounded-lg border border-orange-500 hover:bg-orange-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-700 dark:bg-orange-800 dark:text-white dark:border-orange-600 dark:hover:text-white dark:hover:bg-orange-700"
            >
              Edit
            </button>
          </div>
    </div>



<!-- Main modal profil -->
<div id="authentication-modal" tabindex="-1" v-if="isModalOpen" class="inset-0 bg-gray-950 bg-opacity-50 flex shadow overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full  max-h-full" >
    <div class="relative p-4 w-full max-w-xl max-h-full"> 
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600" >
        <h1 class="text-orange-500 font-semibold text-lg translate-x-10">   Restaurant  form </h1>
        <button type="button" @click="closeModal"  class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"  data-modal-hide="authentication-modal" >
        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" >
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
      </svg>
      <span class="sr-only">Close modal</span>
    </button>
  </div>
  
  <div class="p-4 md:p-5">
    <form  class="space-y-6" @submit.prevent="updateRestaurant">
      <label class="block mb-2 text-sm font-medium text-orange-500 dark:text-white" >Logo</label>
      <div class="flex flex-col items-center pb-5">
        <input class="mx-8 translate-x-2" type="file"  id="myFile"  name="filename" @change="onFileChange"  />
      </div>
      <div class="mb-5">
    <label for="nom" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Restaurant's Name</label>
    <input type="text" id="nom" v-model="restaurant.name" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Exemple: liv's-PIZZA" required />
  </div>
      <div class="mb-5">
    <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id="email" v-model="restaurant.email" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="name@gmail.com" required />
  </div>
  <div class="mb-5  ">
    <label for="address" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Restaurant Address</label>

    <input type="address" id="address" v-model="restaurant.address" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Entez restaurant address" required />
    
</div>
      
<div class="mb-5">
      <label for="numero" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Phone number</label>
      <input type="phone" id="numero" v-model="restaurant.phone" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="697778855" required />
    
  </div>
      <div class="mb-5">
    <label for="site" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Website</label>
    <input type="site" id="site" v-model="restaurant.website" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="www.nmmml.com "  />
  </div>
         <div class="flex justify-end">
            <button @click="closeModal" type="button" class="mr-2 py-2 px-4 bg-gray-300 rounded">Annuler</button>
            <button type="submit" class="py-2 px-4 bg-orange-500 text-white rounded">Enregistrer</button>
          </div>
  </form>

</div>
</div>
</div>
</div> 


 
  </div>
</template>
<script setup >
import { ref } from "vue";
import { store } from "../store/global";
import axios from "axios";
import { RouterLink } from "vue-router";
const active = ref(true);

const Restaurant = store.getRestaurant()

const open1 = () => {
    active.value = !active.value;
  };

  
// État pour le modal et les informations du restaurant
const isModalOpen = ref(false);
const restaurant = ref({
  name: '',
  address: '',
  phone: '',
  website: '',
  service: '',
  email: '',
  logo: '',
  
});

// Ouvrir le modal et pré-remplir les informations
const openModal = () => {
  restaurant.value.name = store.global.user.Restaurants[0].name;
  restaurant.value.address = store.global.user.Restaurants[0].address;
  restaurant.value.phone = store.global.user.Restaurants[0].phone;
  restaurant.value.website = store.global.user.Restaurants[0].website;
  restaurant.value.service = store.global.user.Restaurants[0].service;
  restaurant.value.email = store.global.user.email;
  restaurant.value.logo = store.global.user.Restaurants[0].logo;
  isModalOpen.value = true;
};

// Fermer le modal
const closeModal = () => {
  isModalOpen.value = false;
};

  const updatedRestaurant = ref(null);

// Fonction pour mettre à jour le restaurant
const updateRestaurant = async () => {
  try {
    const restaurantId = store.getRestaurantId(); 
    console.log("id du restaurant",restaurantId);
    console.log('Restaurant:', restaurant);

    const response = await axios.put(`https://proj-kappa-green.vercel.app:3001/restaurants/${restaurantId}`, {
      
      name: restaurant.value.name,
      phone: restaurant.value.phone,
      address: restaurant.value.address,
      email: restaurant.value.email,
      website:restaurant.value.website,
      logo: "logo",//comment modifier une image dans firebase
    });
    
    updatedRestaurant.value = response.data; 
    store.setRestaurant(updatedRestaurant.value); 
    console.log('Restaurant mis à jour:', store.getRestaurant());
    
    closeModal();
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error);
  }
};
    
   import { useRouter } from 'vue-router';

const router = useRouter();

const reloadRoute = () => {
  router.go(0); // Recharge la route actuelle
};

</script>
