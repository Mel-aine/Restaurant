<template>
  <div >
     <div class="max-w-full  bg-white shadow-2xl rounded-2xl overflow-hidden"> 
    <div class="p-1 ">
      <div class="flex flex-col items-center">
      <button @click="showDrop=!showDrop" class="text-3xl font-semibold border hover:bg-gray-200 bg-orange-300 border-orange-400 rounded-xl px-8 py-1  text-gray-800 my-4 uppercase">schedules</button>
    </div>
      <ul v-if="showDrop" class="space-x-4 flex flex-row items-start mx-auto px-8">
        <li
          v-for="horaire in horaires"
          :key="horaire.id"
          class="flex  justify-between items-center space-x-5 p-2 bg-gray-100 rounded-2xl transition duration-300 ease-in-out hover:bg-orange-200"
        >
          <span class="font-semibold  text-gray-700">{{ horaire.day }} </span>
          <span class="text-orange-600 font-semibold ">{{ horaire.opening_hour }} AM  --- {{ horaire.closing_hour }} PM </span>
        </li>
      </ul>
    </div>
   </div>  

    <form class="max-w-md mx-auto pt-10">   
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input @input="searchMenu" v-model="searchQuery" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-orange-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search Dish..." required />
      </div>
    </form>
    <div class="flex flex-col items-end mx-8 px-8">
      <button data-modal-target="select-modal" data-modal-toggle="select-modal" class=" border rounded-full p-2 px-2 border-orange-400" type="button" >
        <svg class="h-8 w-8 text-orange-500 inline-flex"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg> <span class="text-gray-950 font-semibold">( {{ cart.count }} )</span> </button>
    </div>
        
        <div v-for="categorie in categories" :key="categorie.id_categorie" class="py-20"  id="accordion-flush"  data-accordion="collapse" data-active-classes=" bg-white  dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
         
          
          <div class="flex justify-end pb-2 overflow-x-auto overflow-y-hidden ">
            <button class="flex flex-col justify-around h-24 w-28 p-4 rounded-lg shadow-lg drop-shadow-lg mr-5 cursor-pointer select-none transition-transform transform hover:scale-105">
              <div class="text-orange-500 font-bold text-sm   ">
                <h1 class="text-lg font-bold">{{ categorie.name }}</h1>
              </div>
              
              
            </button> 
            
            <hr class="w-full h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
          </div>
          <div class=" max-w-4xl mx-auto my-2">
          
        <div v-if="menuList.length > 0" >
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6   ">
            <div v-for="menuList in filteredMenus(categorie.id_categorie)" :key="menuList.id_menu" class="bg-white space-x-5 flex flex-col justify-between px-3   rounded-xl p-2 shadow-xl  h-30 w-50  transition-transform transform hover:scale-105  overflow-hidden" >
              <div class=" flex flex-col items-center ">
                 <img class="mb-1 w-40 h-30 rounded-lg " :src=menuList.image alt="Image du menu">
              </div>
              <div class="p-2">
                <h2 class="text-xl text-center text-orange-500 font-bold uppercase"> {{ menuList.name }}</h2>
                <p class="text-gray-700  text-center font-serif text-sm">{{ menuList.description }}</p>
                <p  class="text-lg text-center font-semibold text-orange-600">★ {{ menuList.price }} FCFA</p>
              </div>
              <div>
              <div v-if="isUserLoggedIn()" class="flex flex-col items-center">
                    <button @click.prevent="   cart.add(menuList)"   class="bg-orange-600 text-black text-sm font-bold py-1 px-4 rounded-xl"  > Add to Dish </button>  
                </div>
                <div v-else class="flex flex-col items-center">
                    <button @click.prevent="message" class="bg-orange-600 text-black w-full text-sm font-bold py-1 px-4 rounded-xl"  > Add to Dish
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
        <p v-else>Aucun menu disponible pour cette catégorie.</p>
        </div>
      </div>
      
      <!-- Main modal -->
      <div id="select-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full  max-h-full  max-w-xl ">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Menu
              </h3>
              <button  type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="select-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            
            <div class="p-4 md:p-5 " >
              <div v-for="item in cart.items" :key="item.id"   class="flex h-20 w-80 md:h-22 rounded-lg drop-shadow-md border-2  border-slate-300 p-2 my-3 text-sm mx-auto">
                <img :src=item.image alt="Image du menu" class="h-full object-cover aspect-square rounded-lg mr-2" />
                <div class="flex flex-col font-semibold justify-between w-full translate-x-6">
                  <div class="text-black flex justify-between h-full ">
                    <span class="text-md text-center text-orange-500 font-bold uppercase" >{{ item.name }}</span>   
                  </div>
                  <span class="text-greenlight uppercase">{{ item.price }} fcfa</span>
                  <div class="flex justify-between text-sm h-full items-center  ">
                    <span>  
<form class="max-w-xs mx-auto mb-2">
    <div class="relative flex items-center">
        <button @click.prevent="cart.decrement(item)" type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
            </svg>
        </button>
        <input type="text" id="counter-input" data-input-counter class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" v-model= "item.quantity" required />
        <button @click.prevent="cart.increment(item)" type="button" id="increment-button" data-input-counter-increment="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
            <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
        </button>
    </div>
</form>

                    </span> 
                  </div>
                </div>   
                <button  @click.prevent="cart.remove(item.id_menu)" class="text-red-500 hover:text-red-600 hover:underline  transition-colors duration-300 font-medium">   Supprimer  </button>
              </div>
              <div class="max-w-md mx-auto mt-4 p-4 bg-gray-100 rounded-lg shadow">
                <p class="text-lg font-semibold text-gray-900">Sous-total : <span class="text-green-600">{{ cart.subTotal }} fcfa</span></p>
              </div>
              <div class="max-w-md mx-auto mt-4">
                <p class="text-lg font-semibold text-gray-900">Méthode de paiement :</p>
                <div class="flex flex-col  space-y-4 mt-2">
                  
                  <div class="flex items-center space-x-2">
                    <input type="radio" id="bank-transfer" name="payment-method" value="bank-transfer" class="h-4 w-4 text-orange-600 border-gray-300 focus:ring-orange-500">
                    <label for="bank-transfer" class="text-gray-700">Paiement Mobile</label>
                  </div>
                  <div class="flex items-center space-x-2">
                    <input type="radio" id="cash" name="payment-method" value="cash" class="h-4 w-4 text-orange-600 border-gray-300 focus:ring-orange-500">
                    <label for="cash" class="text-gray-700">Espèces à la livraison</label>
                  </div>
                </div>
              </div>
              
              <div class="max-w-md mx-auto mt-4 p-4 bg-gray-100 rounded-lg shadow">
                <p class="text-lg font-semibold text-gray-900">Informations sur la livraison :</p>
                <div class="mt-2">
                  <label for="address" class="block text-gray-700">Adresse de livraison :</label>
                  <input type="text" id="address" name="address" placeholder="Entrez votre adresse" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500">
                </div>
                <div class="mt-4">
                  <label for="numero" class="block text-gray-700">Numero de Telephone :</label>
                  <input type="text" id="numero" name="numero" placeholder="Entrez votre numero" class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500">
                </div>
                <div class="mt-4">
                  <label for="notes" class="block text-gray-700">Notes spéciales :</label>
                  <textarea id="notes" name="notes" rows="3" placeholder="Ajoutez des instructions spéciales ici..." class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"></textarea>
                </div>
              </div>
              
              <div class="max-w-md mx-auto mt-6">
                <button
                @click.prevent="passerCommande"
                class="w-full inline-flex  justify-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-md shadow transition duration-300">
                Passer votre commande
              </button>
            </div>
          </div>
          </div>
        </div>
      </div> 
    
  </div> 

  </template>
  
  <script setup>
  
  import { ref,onMounted,watch } from "vue";
  import axios from 'axios';
import { useRoute } from 'vue-router';
import { useCartStore } from '/src/utils/useCartStore.js';
import { useUserStore } from '/src/utils/useUserStore.js'
import { computed } from 'vue';
import { initFlowbite } from 'flowbite'
import { Modal } from 'flowbite'
import { store } from "../store/global";

const route = useRoute(); 
const cart = useCartStore();
const menuList = ref([]);
const added = ref(false);
const count = ref(0);
const searchQuery = ref('');
const userStore = useUserStore();
const menuStore = useCartStore()
const showDrop = ref(false);

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})


const filteredMenus = (id_categorie) => {
  return menuList.value.filter(menuList => menuList.id_categorie === id_categorie);
};


// // Fonction pour récupérer les restaurants
const categories = ref([])
 const fetchCategorie = async () => {
  try {
     const restaurantId =route.params.id_restaurant; // Récupérer l'ID du restaurant depuis l'URL;
    const response = await axios.get(`http://localhost:3001/categorie/${restaurantId}`);
//     // Accéder aux données en utilisant response.data.data
     categories.value = response.data.data;
     categories.value.forEach(e=>{
       console.log(e);
       fetchMenu(e.id_categorie)
      })
     

  } catch (error) {
     console.error('Erreur lors de la récupération des restaurants:', error);
       }
 };
 onMounted(fetchCategorie);



 const fetchMenu = async (categorieId) => {
   try {
    console.log(categorieId);
     const response = await axios.get(`http://localhost:3001/menus/${categorieId}`);
     console.log("Réponse de l'API:: fetchMenu", response);
       console.log("Données récupérées:", response.data);
      menuList.value = response.data.data
      menuStore.dishList = response.data.data
      console.log("menuStore:", menuStore.dishList);
   } catch (error) {
     console.error('Erreur lors de la récupération des menus');
     console.error('fetchMenu :: ', error);
   }
 };



const searchMenu = () => {
 
  const query = searchQuery.value; 
  if (!query.trim()) {
    menuList.value =  menuStore.dishList; 
  } else {
    menuList.value = menuStore.dishList.filter(menuItem =>
      menuItem.name.toLowerCase().includes(query.toLowerCase())
    );
  }
};

const message = () => {
    alert("veuillez vous connectez !");
};

const isUserLoggedIn = () => { 
  return userStore.isLoggedIn; 
};


if (isUserLoggedIn()) {
  console.log('L\'utilisateur est connecté.');
} else {
  console.log('L\'utilisateur n\'est pas connecté.');
}

  // const passerCommande = async () => {
  //   const order = {
  //     user_id: user.id,
  //     restaurant_id: route.params.id_restaurant,
  //     items: cart.items,
  //     total: cart.total,
  //     payment_method: dishMemory.paymentMethod,
  //     address: dishMemory.address,
  //     notes: dishMemory.notes
  //   };

                 
const horaires = ref([]);

const fetchHoraire = async () => {
  try {
    const restaurantId = store.getRestaurantId();
    const response = await axios.get(`http://localhost:3001/horaires/${restaurantId}`);
    horaires.value = response.data.data;

  } catch (error) {
    console.error(' horaire :: fetchHoraire :: ', error);
  }
};       
onMounted(fetchHoraire);       




  </script>
  
  <style scoped>
 
  </style>