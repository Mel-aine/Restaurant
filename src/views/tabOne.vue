<template>
  <div>

    
    
    <div v-for="(categorie, index) in categories" :key="categorie.id_categorie" id="accordion-flush" data-accordion="collapse" data-active-classes=" bg-white  dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
      <h2 :id="'accordion-flush-heading-' + index">
        <button type="button" class="flex items-center justify-between rounded-xl bg-slate-50 w-full py-5 font-medium rtl:text-right text-gray-500 border px-8 border-gray-700 dark:border-gray-700 dark:text-gray-400 gap-3" @click="toggleMenu(index, categorie.id_categorie)" aria-expanded="getShowMenu(index)" :aria-controls="'accordion-flush-body-' + index">
          <span class="uppercase text-sm font-extralight text-orange-500">{{ categorie.name }}</span>
          <svg data-accordion-icon :class="{'rotate-180': getShowMenu(index)}" class="h-8 w-8 text-orange-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" /></svg>
        </button>
      </h2>
      <div v-show="getShowMenu(index)" class="max-w-4xl mx-auto my-2" >
        
        <div v-if="menuList.length > 0" >
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6   ">
            <div v-for="menuList in filteredMenus(categorie.id_categorie)" :key="menuList.id_menu" class="bg-white space-x-5 flex flex-col justify-between px-3 mx-auto  rounded-xl p-2 shadow-xl  h-30 w-50  transition-transform transform hover:scale-105  overflow-hidden" >
              <div class=" flex flex-col items-center ">
                 <img class="mb-1 w-40 h-30 rounded-lg " :src=menuList.image alt="Image du menu">
              </div>
              <div class="p-2">
                <h2 class="text-xl text-center text-orange-500 font-bold uppercase"> {{ menuList.name }}</h2>
                <p class="text-gray-700  text-center font-serif text-sm">{{ menuList.description }}</p>
                <p  class="text-lg text-center font-semibold text-orange-600">★ {{ menuList.price }} FCFA</p>
              </div>
              <div class=" ">
                
                  <button  @click="openModal(menuList.id_menu)"> <svg class="h-8 w-8 text-gray-500"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg></button>
                
                
                  <button @click.prevent="openPopup(menuList.id_menu)"> <svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>
                
              </div>
            </div>
          </div>
        </div>
        <p v-else>Aucun menu disponible pour cette catégorie.</p>
        <div class="py-10 flex flex-col items-end">
          
          <button @click="open(categorie.id_categorie)" type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add Menu</button>
        </div>
      </div>
      
    </div>
    
    
    <div class="flex flex-col items-center py-5">
      
      <button @click="open2" type="button" class="py-2.5 px-5 me-2 mb-2 text-sm  font-medium text-gray-900 focus:outline-none bg-orange-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add Category</button>
      
    </div>



<div v-show=" popup"  class="overflow-y-auto fixed inset-0  bg-opacity-50 flex justify-center items-center bg-gray-900 overflow-x-hidden  top-0 right-0 left-0 z-50 w-full md:inset-0 ">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button @click="closePopup" type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this Dish?</h3>
                <button @click="deleteMenu(selectedMenuId)" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Yes, I'm sure
                </button>
                <button @click="closePopup" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
            </div>
        </div>
    </div>
</div>



 <!-- Main modal menu update-->
 <div id="authentication-modal" tabindex="-1"   v-if="isModalOpen" class="inset-0 bg-gray-950 bg-opacity-50 flex shadow overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full  max-h-full"  >
    <div class="relative p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600" >
        <h1 class="text-orange-500 font-semibold text-lg translate-x-10">
          Restaurant menu form
        </h1>
        <button type="button" @click="closeModal" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal"  >
        <svg  class="w-3 h-3"  aria-hidden="true"  xmlns="http://www.w3.org/2000/svg"  fill="none"  viewBox="0 0 14 14"  >  <path  stroke="currentColor"  stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"  />
      </svg>
      <span class="sr-only">Close modal</span>
    </button>
  </div>
  <!-- Modal body -->
  <div class="p-4 md:p-5">
    <form  class="space-y-6">
      <label  class="block mb-2 text-sm font-medium text-orange-500 dark:text-white">Dish</label  >
      <div class="flex flex-col items-center pb-5">  
        <input  class="mx-8 translate-x-2"  type="file"  id="myFile"  name="filename"  @change="onFileChange" />
      </div> 
      <label for="name1" class="block text-orange-500 text-sm font-bold mb-2" >Name of the dish</label >
      <input v-model="menu.name" type="text" id="name1" placeholder="Enter name of the dish" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
      <div class="mb-4">
        <label for="description1" class="block text-orange-500 text-sm font-bold mb-2" >Description</label >
        <textarea v-model="menu.description" id="description1" placeholder="Enter a description" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" required ></textarea>
      </div>
      <div class="mb-4">
        <label for="price1" class="block text-orange-500 text-sm font-bold mb-2" >Price</label >
        <input  v-model="menu.price"  type="number"  id="price1"  placeholder="Enter the price" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" required />
      </div>
      <div class="flex justify-center">
            <button @click="closeModal" type="button" class="mr-2 py-2 px-4 bg-gray-300 rounded">Annuler</button>
            <button @click.prevent="updateMenu(selectedMenuId) " type="submit" class="py-2 px-4 bg-orange-500 text-white rounded">Enregistrer</button>
          </div>
  </form>
</div>
</div>
</div>
</div>







    <!-- Main modal menu -->
    <div
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    v-show="active == false"
    class="inset-0 bg-gray-950 bg-opacity-50 flex shadow overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full  max-h-full"
    >
    <div class="relative p-4 w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
        class="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600"
        >
        <h1 class="text-orange-500 font-semibold text-lg translate-x-10">
          Restaurant menu form
        </h1>
        <button
        type="button"
        @click="close"
        class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-hide="authentication-modal"
        >
        <svg
        class="w-3 h-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 14"
        >
        <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
      <span class="sr-only">Close modal</span>
    </button>
  </div>
  <!-- Modal body -->
  <div class="p-4 md:p-5">
    <form  class="space-y-6">
      <label
      class="block mb-2 text-sm font-medium text-orange-500 dark:text-white"
      >Dish</label
      >
      <div class="flex flex-col items-center pb-5">
        
        
        <input
        class="mx-8 translate-x-2"
        type="file"
        id="myFile"
        name="filename"
        @change="onFileChange" 
        />
      </div>
      
      <label
      for="name"
      class="block text-orange-500 text-sm font-bold mb-2"
      >Name of the dish</label
      >
      <input
      v-model="formName"
      type="text"
      id="name"
      placeholder="Enter name of the dish"
      class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500"
      required
      
      />
      
      <div class="mb-4">
        <label
        for="description"
        class="block text-orange-500 text-sm font-bold mb-2"
        >Description</label
        >
        <textarea
        v-model="formDescription"
        id="description"
        placeholder="Enter a description"
        class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500"
        required
        ></textarea>
      </div>
      
      <div class="mb-4">
        <label
        for="price"
        class="block text-orange-500 text-sm font-bold mb-2"
        >Price</label
        >
        <input
        v-model="formPrice"
        type="number"
        id="price"
        placeholder="Enter the price"
        class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500"
        required
        />
      </div>
      
      <div class="flex items-center justify-between">
        <button
        @click.prevent="submitted()"
        type="submit"
        class="w-full text-orange-500 bg-white hover:bg-orange-500 hover:text-white border border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
        Register
      </button>
    </div>
  </form>
</div>
</div>
</div>
</div>

<!-- Main modal categorie -->
<div
id="authentication-modal"
tabindex="-1"
aria-hidden="true"
v-show="active2 == false"
class="inset-0 bg-gray-950 bg-opacity-50 flex shadow overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full  max-h-full"
>
<div class="relative p-4 w-full max-w-md max-h-full">
  <!-- Modal content -->
  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
    <!-- Modal header -->
    <div
    class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
    >
    <h1 class="text-orange-500 font-semibold text-lg translate-x-10">
      
    </h1>
    <button
    type="button"
    @click="close2"
    class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
    data-modal-hide="authentication-modal"
    >
    <svg
    class="w-3 h-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    >
    <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
    />
  </svg>
  <span class="sr-only">Close modal</span>
</button>
</div>
<!-- Modal body -->
<div class="p-4 md:p-5">
  
  <form @submit.prevent="Sauvegarder()" class="max-w-sm mx-auto border rounded-lg px-8 p-8">
    <div class="mb-5">
      <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">nom categorie</label>
      <input type="text" v-model="nom" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500 dark:shadow-sm-light" placeholder="" required />
    </div>
    
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description categorie</label>
    <textarea id="message" v-model="description" rows="4" class="block p-2.5 w-full text-sm mb-2 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Write your thoughts here..."></textarea>
    <div class = "space-x-2 flex flex-col items-center">
      
      <button type="submit" class="text-white  bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Sauvegarder</button>
    </div>
  </form>
  <p v-if="erreur" class="text-red-500">{{ erreur }}</p>
</div>
</div>
</div>
</div>




</div>
  </template>
  
  <script setup>
  import { ref,onMounted } from "vue";
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import { useCartStore } from '/src/utils/useCartStore.js';
  import { store } from "../store/global";
  import { getStorage, ref as stRef, uploadBytes ,getDownloadURL } from 'firebase/storage';
  import { getDatabase, ref as dbRef, push, set } from 'firebase/database';
  import { initializeApp } from 'firebase/app';
  const active2 = ref(true);
  const active = ref(true);
  const formPrice = ref('');
  const formDescription = ref('');
  const formName = ref('');
  const showMenu = ref([]);
  const fileName = ref('');
  const menus = ref([])
  const activeIndex = ref(null);
  const menuList = ref([]);
  const router = useRouter();
  const nom = ref('');
  const erreur = ref(null);
  const description = ref('');
  const categories = ref([]);
  const popup = ref(false);
  const isModalOpen = ref(false);
 


 

// // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBafa0YuLnJkxK4AJCeeNWtyCZsKr4j3-Q",
   authDomain: "upload-firebase-storage-90674.firebaseapp.com",
   projectId: "upload-firebase-storage-90674",
   storageBucket: "upload-firebase-storage-90674.appspot.com",
   messagingSenderId: "256589565536",
   appId: "1:256589565536:web:6ad77c4447d9d79c1f7d05"
 };

// // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const storage = getStorage(app);
 const database = getDatabase(app);
 const databaseReference = dbRef(database, "files");

 const file = ref(null);

 const menuStore = useCartStore()

  const toggleMenu = (index, categorieId) => {
    //fetch les menu
    store.setCategorieId(categorieId)
    fetchMenu(categorieId);
    
    //affecter les menus a une ref menuList
    return activeIndex.value = activeIndex.value === index ? null : index;
    //showMenu.value[index] = !showMenu.value[index]; // Met à jour l'état de showMenu
  };
  
  const getShowMenu = (index) => {
    return activeIndex.value === index ; // Vérifie si l'index est actif ou s'il doit être affiché
  };
  
  const closeModal = () => {
  isModalOpen.value = false;
};

  const filteredMenus = () => {
    const id_categorie = store.getCategorieId();
    return menuList.value.filter(menuList => menuList.id_categorie === id_categorie);
  };
  
  const selectedMenuId = ref(null);
  const openPopup = (menuId) => {
    selectedMenuId.value = menuId;
    alert(menuId)
      popup.value = true;
    };

    const closePopup = () => {
      popup.value = false;
      selectedMenuId.value = null;
    };

  
  
  const open = (categorieId) => {
    alert(categorieId)
    store.setCategorieId(categorieId);
    active.value = !active.value;
  };
  const close = () => {
    active.value = !active.active;
  };
  
  const open2 = () => {
    active2.value = !active2.value;
  };
  const close2 = () => {
    active2.value = !active2.active;
  };

  const menu = ref({
  name: "",
  description: "",
  price: "",
});


const openModal = (menuId) => {
  console.log("Menu ID:", menuId); // Vérifiez quel ID est passé
  selectedMenuId.value = menuId;
  console.log("Dish Memory:", menuStore.dishMemory);

  // Utilisez id_menu pour trouver le plat
  const selectedDish = menuStore.dishMemory.find(dish => dish.id_menu === menuId);
  
  if (selectedDish) {
    menu.value.name = selectedDish.name;
    menu.value.description = selectedDish.description;
    menu.value.price = selectedDish.price;
    isModalOpen.value = true;
  } else {
    alert("Plat non trouvé !");
  }
};


const updatedMenu = ref(null);

// Fonction pour mettre à jour le restaurant
const updateMenu = async (menuId) => {
  try {
    selectedMenuId.value = menuId;
    console.log("id du menu",menuId);
    const response = await axios.put(`http://localhost:3001/menus/${menuId}`, {   
      name: menu.value.name,
      description: menu.value.description,
      image: "image",
      price: menu.value.price,
    });
    
    updatedMenu.value = response.data; 
    console.log("updated menu",updatedMenu.value);
    
    reloadRoute();
    closeModal();
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error);
  }
};
    
 


const reloadRoute = () => {
  router.go(0); 
};




  const Sauvegarder= async () => {
    try {
      
      // Étape 2 : Soumission des données du formulaire
      // const response = await axios.post('http://localhost:3001/categorie/form', {
      const  id_restaurant = store.getRestaurantId()
      console.log('GLOB ',id_restaurant)
      const response = await axios.post(`http://localhost:3001/categorie/${id_restaurant}/form`, {
        Description: description.value,
        Name: nom.value,
        id_restaurant: id_restaurant
      });
      
      console.log(response.data);
      store.setCategorieId(response.data.data);
      alert("categorie sauvegardees ! ");
      
      // Réinitialiser les champs du formulaire si nécessaire
      description.value = '';
      nom.value = '';
      close2();
      //localStorage.setItem('restaurant', email.value);
      
    } catch (error) {
      if (error.response) {
        erreur.value = error.response.data.message || 'Erreur lors de la sauvegarde';
      } else {
        erreur.value = 'Erreur de sauvegarde';
      }
    }
  };
  
  
  const fetchCategorie = async () => {
    try {
      const restaurantId = store.getRestaurantId();
      const response = await axios.get(`http://localhost:3001/categorie/${restaurantId}`);
      // Accéder aux données en utilisant response.data.data
      categories.value = response.data.data;
      showMenu.value = response.data.data.map(item => false);
    } catch (error) {
      console.error('Erreur lors de la récupération des restaurants:', error);
    }
  };
  
  
  
  const fetchMenu = async (id_categorie) => {
    
    try {
      const categorieId = store.getCategorieId(); // Récupérer l'ID de la catégorie
      const response = await axios.get(`http://localhost:3001/menus/${categorieId}/menu`); 
      console.log("Réponse de l'API:", response);
      console.log("response", response.data.data);
      menuList.value = response.data.data; 
      menuStore.dishMemory = response.data.data
      console.log("mmmmmm", menuStore.dishMemory);
      
    } catch (error) {
      console.error('Erreur lors de la récupération des menus');
      console.error('TabOne :: fetchMenu :: ', error);
    }
    
  }
  
  onMounted(fetchCategorie);


  const deleteMenu = async (menuId) => {
      try {
       
        await axios.delete(`http://localhost:3001/menus/${menuId}`); 
        closePopup();
        fetchMenu ();
      } catch (error) {
        console.error('Erreur lors de la suppression du menu:', error);
      }
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



  
  const submitted= async () => {
    try {

     const image = await uploadFile();
    
      const response = await axios.post('http://localhost:3001/menus/form', {
        Dish: image ,
        Description: formDescription.value,
        Name: formName.value,
        Price: formPrice.value,
        id_categorie: store.getCategorieId (),// Ajoutez l'ID de la catégorie ici
        id_restaurant: store.getRestaurantId(), // Ajoutez l'ID du restaurant
        
      });
      
      console.log("menu en registree " , response.data);

      store.setMenu(response.data); 
      alert("menu sauvegardé ! ");

     
      // Réinitialiser les champs du formulaire si nécessaire
      fileName.value = '';
      formName.value = '';
      formDescription.value = '';
      formPrice.value = '';
      
      close();
     // fetchMenu(id_categorie)
      
    } catch (error) {
      console.log("Error: " + error)
      if (error.response) {
        erreur.value = error.response.data.message || 'Erreur lors de la sauvegarde';
      } else {
        erreur.value = 'Erreur de sauvegarde';
      }
    }
  };
 

//onClick sur le dropdown, on fetch les données
//onMounted, on fetch les données
 </script>
 <style scoped>
 
 </style>