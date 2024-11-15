<template>
  <div >
     <div class="max-w-full  flex flex-col md:flex-row justify-between px-4 py-2   bg-white shadow-2xl rounded-2xl overflow-hidden"> 
     <div class="p-1  ">
     <!-- <div class="flex flex-col items-center">
      <button  class="text-3xl font-semibold border hover:bg-gray-200 bg-orange-300 border-orange-400 rounded-xl px-8 py-1  text-gray-800 my-4 uppercase">schedules</button>
    </div> -->
      <ul  class="space-x-4  flex flex-col md:flex-row items-start mx-auto px-2">
        <li
          v-for="horaire in horaires"
          :key="horaire.id_horaire"
          class="  flex  justify-between items-center space-x-5 p-2 bg-gray-100 rounded-2xl transition duration-300 ease-in-out hover:bg-orange-200"
        >
          <span class="font-semibold  text-gray-700">{{ horaire.day }} </span>
          <span class="text-orange-600 font-semibold ">{{ horaire.opening_hour }} --- {{ horaire.closing_hour }} </span>
        </li>
      </ul>
    </div>
<div class="mt-4 md:mt-0">
  
      <div v-if="isUserLoggedIn">
        <button @click="openModal" class=" border rounded-full p-2 px-2 border-orange-400" type="button" >
        <svg class="h-8 w-8 text-orange-500 inline-flex"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg> <span class="text-gray-950 font-semibold">( {{ cart.count }} )</span> </button>
      </div>
          <div v-else class="flex flex-col items-center">
                    <button @click="message" class=" border rounded-full p-2 px-2 border-orange-400"   > <svg class="h-8 w-8 text-orange-500 inline-flex"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg> <span class="text-gray-950 font-semibold">( {{ cart.count }} )</span>
                    </button>
          </div>  
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
   
        
        <div v-for="categorie in categories" :key="categorie.id_categorie" class="py-10"  id="accordion-flush"  data-accordion="collapse" data-active-classes=" bg-white  dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
         
          
          <div class="flex justify-end pb-2 overflow-x-auto overflow-y-hidden ">
            <button class="flex flex-col justify-around h-24 w-28 p-4 rounded-lg shadow-lg drop-shadow-lg mr-5 cursor-pointer select-none transition-transform transform hover:scale-105">
              <div class="text-orange-500 font-bold text-sm   ">
                <h1 class="text-lg font-bold">{{ categorie.name }}</h1>
              </div>
              
              
            </button> 
            
            <hr class="w-full h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
          </div>
          <div class=" max-w-4xl mx-auto ">
          
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
              <div  class="flex flex-col items-center">
                    <button @click.prevent="   cart.add(menuList)"   class="bg-orange-600 text-black text-sm font-bold py-1 px-4 rounded-xl"  > Add to Dish </button>  
                </div>
                <!-- <div v-else class="flex flex-col items-center">
                    <button @click.prevent="message" class="bg-orange-600 text-black w-full text-sm font-bold py-1 px-4 rounded-xl"  > Add to Dish
                  </button>
                </div> -->
            </div>
          </div>
        </div>
      </div>
        <p v-else>Aucun menu disponible pour cette catégorie.</p>
        </div>
      </div>
      
      <!-- Main modal -->
      <div  v-show="showModal" class="flex bg-gray-950 bg-opacity-50 inset-0 overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full h-full">
        <div class="relative p-4 w-full  max-h-full  max-w-xl ">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Menu
              </h3>
              <button @click="closeModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="select-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            
            <div class="p-4 md:p-5 " >
              <div v-for="item in cart.items" :key="item.id"   class="flex h-20 w-80 md:h-22 rounded-lg p-2 py-1 drop-shadow-md border-2  border-slate-300  my-3 text-sm mx-auto">
                <img :src=item.image alt="Image du menu" class="h-full object-cover aspect-square rounded-lg mr-2" />
                <div class="flex flex-col font-semibold justify-between w-full translate-x-6">
                  <div class="text-black flex justify-between h-full ">
                    <span class="text-md text-center text-orange-500 font-bold uppercase" >{{ item.name }}</span>   
                  </div>
                  <span class="text-greenlight uppercase">{{ item.price }} fcfa</span>
                  <div class="flex justify-between text-sm h-full items-center  ">
                    <span>  
<form class="max-w-xs mx-auto ">
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
    

 <!-- Main modal connexion-->
 <div   tabindex="-1"  v-show="active "  class="flex bg-gray-950 bg-opacity-50 inset-0 overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full h-full"  >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div   class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600" >
            <h3 class="text-xl font-semibold text-orange-500 dark:text-white">
              Welcome to EatEasily
            </h3>
            <button type="button"  @click="close"  class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"  >
              <svg  class="w-3 h-3"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"   >
                <path  stroke="currentColor"  stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2"  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 md:p-5">
            <form class="space-y-4" action="" @submit.prevent="handleLogin" >
              <p v-if="errorMessage" class="text-red-500 font-serif ">{{ errorMessage }}</p>
              <div>
                <label for="email1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >Email</label >
                <input  type="email"  v-model="email1" required id="email1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"   autocomplete="username"  />
              </div>
              <div>
                <label  for="password1"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >Password</label >
                <input  type="password"   v-model="password1"  required    id="password1"  placeholder="••••••••"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"   autocomplete="current-password" />
              </div>
                <button  :disabled="isLoading" type="submit" class="w-full  text-white bg-orange-700 hover:bg-white hover:text-orange-500 border hover:border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" >
                Sign in
                </button>  
             
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
                <RouterLink to="/inscrire">
                  <button @click="close()"  class="text-orange-700 hover:underline dark:text-orange-500" >Create account </button></RouterLink  >
              </div>
            </form>
            
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
const active = ref(false);
const count = ref(0);
const searchQuery = ref('');
const userStore = useUserStore();
const menuStore = useCartStore()
const showModal = ref(false);




const openModal = () => {
  showModal.value = true;
}

const closeModal = () => {
  showModal.value = false;
}

const filteredMenus = (id_categorie) => {
  return menuList.value.filter(menuList => menuList.id_categorie === id_categorie);
};


// // Fonction pour récupérer les restaurants
const categories = ref([])
 const fetchCategorie = async () => {
  try {
     const restaurantId =route.params.id_restaurant; // Récupérer l'ID du restaurant depuis l'URL;
    const response = await axios.get(`https://proj-bdjg.onrender.com/categorie/${restaurantId}`);
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
     const response = await axios.get(`https://proj-bdjg.onrender.com/menus/${categorieId}`);
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
    active.value = true ;
};
const close = () => {
  active.value = false
};

// const isUserLoggedIn = () => { 
//   return userStore.isLoggedIn; 
// };


// const isUserLoggedIn = computed(() => userStore.isLoggedIn);

const isUserLoggedIn = computed(() => {
  return localStorage.getItem('userEmail1') !== null;
});



if (isUserLoggedIn) {
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
    const restaurantId = route.params.id_restaurant;
    const response = await axios.get(`https://proj-bdjg.onrender.com/horaires/${restaurantId}`);
    horaires.value = response.data.data;
    console.log("Données récupérées>'';;:",restaurantId); 

  } catch (error) {
    console.error(' Menu :: fetchHoraire :: ', error);
  }
};       
onMounted(fetchHoraire);       

const email1 = ref("");
const password1 = ref("");
const errorMessage = ref("");

const validateFields = () => {
  // Vérification de l'email
  if (!email1.value) {
    errorMessage.value = "Email is required.";
    return false;
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour valider l'email
  if (!emailPattern.test(email1.value)) { // Utilisez email1 ici
    errorMessage.value = "Please enter a valid email address.";
    return false;
  }
  
  // Vérification du mot de passe
  if (!password1.value) {
    errorMessage.value = "Password is required.";
    return false;
  }
  
  if (password1.value.length < 6) {
    errorMessage.value = "The password must contain at least 6 characters.";
    return false;
  }
  
  // Réinitialiser le message d'erreur si tout est valide
  errorMessage.value = ""; 
  return true;
};

const isLoading = ref(false)

const handleLogin = async () => {

   if (!validateFields()) {
     return; 
   }
   isLoading.value = true; // Active le spinner
  try {

    const userStore = useUserStore();
    await userStore.login(email1.value, password1.value);
    // Vérifiez si userInfo est défini
    if (userStore.userInfo && userStore.userInfo.email) {
      // alert('Connexion réussie !');
    
     console.log("Email de l'utilisateur :", userStore.userInfo.email)
     localStorage.setItem("userEmail1",userStore.userInfo.email ); 
     email1.value = '';
     password1.value = '';
     errorMessage.value = ""; 
     close();
    } else {
      throw new Error("Échec de la connexion : utilisateur non authentifié.");
    }
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
            isLoading.value = false; // Désactive le spinner
        }
};


  </script>
  
  <style scoped>
 
  </style>