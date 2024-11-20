<template>
  <div>
    <div v-if="store.global?.hasUser"  class=" max-w-md mx-auto bg-white p-8 px-8 rounded-lg shadow-md mt-10 ">
       
          <div class="flex flex-col items-center px-4 pt-2 pb-2">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"  
              :src="  store.global.user.Restaurants[0].logo "
              alt="Bonnie image"
            />
            <h5
              class="mb-1 text-xl uppercase font-semibold text-orange-500 dark:text-white"
            >
           {{ store.global.user.Restaurants[0].name }}
            </h5>
          </div>

          <div class="px-8 mx-auto ">
            <dl
              class="max-w-md text-gray-900 divide-y  items-center   divide-gray-200 dark:text-white dark:divide-gray-700"
            >
              <!-- <div class="flex-col pb-2 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Email address
                </dt>
                <dd class="text-lg font-semibold"> {{ store.global.user.Restaurants[0].email }}</dd>
              </div> -->
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Restaurant address
                </dt>
                <dd class="text-lg font-semibold"> {{ store.global.user.Restaurants[0].address }}</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Phone number
                </dt>
                <dd class="text-lg font-semibold"> {{ store.global.user.Restaurants[0].phone }}</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Site web
                </dt>
                <dd class="text-lg font-semibold"> {{ store.global.user.Restaurants[0].website }}</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Type of service
                </dt>
                <dd class="text-lg font-semibold"> {{ store.global.user.Restaurants[0].service }}</dd>
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
      <!-- <div class="mb-5">
    <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id="email" v-model="restaurant.email" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="name@gmail.com" required />
  </div> -->
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
            <button @click="closeModal" type="button" class="mr-2 py-2 px-4 bg-gray-300 rounded">Cancel</button>
            <button :disabled="isLoading"  type="submit" class="py-2 px-4 bg-orange-500 text-white rounded">Save</button>
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


 
  </div>
</template>
<script setup >
import { ref } from "vue";
import { store } from "../store/global";
import axios from "axios";
import { initializeApp } from 'firebase/app';
import { getStorage, ref as stRef, uploadBytes ,getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as dbRef, push, set } from 'firebase/database';

const active = ref(true);
const isLoading = ref(false);



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
  restaurant.value.name = store.global.user.Restaurants[0].name ;
  //restaurant.value.address = store.global.user.Restaurants[0].address;
  restaurant.value.address = store.global.user.Restaurants[0].address;
  restaurant.value.phone = store.global.user.Restaurants[0].phone;
  restaurant.value.website = store.global.user.Restaurants[0].website;
  restaurant.value.service = store.global.user.Restaurants[0].service;
  //restaurant.value.email = store.global.user.Restaurants[0].email;
  restaurant.value.logo = store.global.user.Restaurants[0].logo;
  isModalOpen.value = true;
};

// Fermer le modal
const closeModal = () => {
  isModalOpen.value = false;
};

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


  const updatedRestaurant = ref(null);
  const file = ref(null);
// Fonction pour mettre à jour le restaurant
const updateRestaurant = async () => {
  try {
    isLoading.value = true;
    const restaurantId = store.getRestaurantId(); 
    console.log("id du restaurant",restaurantId);
    console.log('Restaurant:', restaurant);
    
    //const logo = await uploadFile(); 
    const response = await axios.put(`https://proj-bdjg.onrender.com/restaurants/${restaurantId}`, {
      
      name: restaurant.value.name,
      phone: restaurant.value.phone,
      address: restaurant.value.address,
      email: restaurant.value.email,
      website:restaurant.value.website,
      logo: await uploadFile() ,//comment modifier une image dans firebase
    });
    
    updatedRestaurant.value = response.data; 
    store.setRestaurant(updatedRestaurant.value); 
    console.log('Restaurant mis à jour:', store.getRestaurant());
    
    closeModal();
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error);
  }finally {
    isLoading.value = false;
  }
};
    
   import { useRouter } from 'vue-router';

const router = useRouter();

const reloadRoute = () => {
  router.go(0); // Recharge la route actuelle
};

</script>
