<template>
  <div>

    
    
    <div v-for="(categorie, index) in categories" :key="categorie.id_categorie" id="accordion-flush" data-accordion="collapse" data-active-classes=" bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
      <h2 :id="'accordion-flush-heading-' + index">
        <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border px-8 border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" @click="toggleMenu(index, categorie.id_categorie)" aria-expanded="getShowMenu(index)" :aria-controls="'accordion-flush-body-' + index">
          <span>{{ categorie.name }}</span>
          <svg data-accordion-icon :class="{'rotate-180': getShowMenu(index)}" class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" /></svg>
        </button>
      </h2>
      <div v-show="getShowMenu(index)" class="max-w-4xl mx-auto my-2" >
        
        <div v-if="menuList.length > 0" >
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6   ">
            <div v-for="menuList in filteredMenus(categorie.id_categorie)" :key="menuList.id_menu" class="bg-white shadow-md transition-transform transform hover:scale-105 rounded-lg overflow-hidden" >
              <div class=" flex flex-col items-center ">
                <img class="w-40 h-35 mt-2 rounded-lg" :src=menuList.image alt="Image de {{ item.name }}">
              </div>
              <div class="p-2">
                <h2 class="text-xl text-center text-orange-500 font-bold"> {{ menuList.name }}</h2>
                <p class="text-gray-700  text-center">{{ menuList.description }}</p>
                <p  class="text-lg text-center font-semibold text-orange-600"> {{ menuList.price }} fcfa</p>
              </div>
              <div class="flex flex-col items-end">
                <div>
                  <button> <svg class="h-8 w-8 text-gray-500"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg></button>
                </div>
                <div>
                  <button> <svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>
                </div>
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
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
  
  <div
  v-if="erreur"
  class="mt-4 p-4 bg-green-200 text-green-700 rounded"
  >
  Plat soumis avec succès !
</div>
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
  
  const filteredMenus = () => {
    const id_categorie = store.getCategorieId();
    return menuList.value.filter(menuList => menuList.id_categorie === id_categorie);
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
  
  const Sauvegarder= async () => {
    try {
      
      // Étape 2 : Soumission des données du formulaire
      // const response = await axios.post('http://localhost:3001/categorie/form', {
      const  id_restaurant = store.getRestaurantId()
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
  
  // Fonction pour récupérer les restaurants
  const fetchCategorie = async () => {
    try {
      const restaurantId = store.getRestaurantId();
      //const response = await axios.get('http://localhost:3001/categorie/');
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
      const response = await axios.get(`http://localhost:3001/menus/${categorieId}/menu`); // Déclarez response ici
      
      // Vérifiez la réponse de l'API
      console.log("Réponse de l'API:", response);
      
      // Vérifiez les données spécifiques
      console.log("Données récupérées:", response.data.data);
      
      // Accéder aux données en utilisant response.data.data
      console.log("response", response.data.data);
      menuList.value = response.data.data; // Affectez les données à menuList
      //const data = await response.json();
      //menuList.value = data; // Affectez les données à menuList
      //menus.value = response.data.data; // Mettre à jour les menus
      console.log("Menus après mise à jour:", menus.value);
      
    } catch (error) {
      console.error('Erreur lors de la récupération des menus');
      console.error('TabOne :: fetchMenu :: ', error);
    }
    
  }
  // Appel de la fonction lors du montage du composant
  //onMounted( fetchMenu);
  // Appeler la fonction lors du montage du composant
  onMounted(fetchCategorie);
  
  
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
    

    const newFileRef = push(databaseReference);
    await set(newFileRef, {
      name: file.value.name,
      url: downloadURL // Sauvegardez l'URL dans la base de données
    });
    return snapshot, downloadURL; // Renvoie l'URL pour utilisation //snapshot; // Renvoie le snapshot pour vérifier le succès
  } catch (error) {
    console.error("Upload failed:", error);
    throw error; // Lève l'erreur pour la gestion dans Register
  }
};



  
  const submitted= async () => {
    try {

     const image = await uploadFile();
    
      //Dish, Name,Description, id_categorie, Price, id_restaurant
      // Étape 2 : Soumission des données du formulaire
      const response = await axios.post('http://localhost:3001/menus/form', {
        Dish: image ,
        Description: formDescription.value,
        Name: formName.value,
        Price: formPrice.value,
        id_categorie: store.getCategorieId (),// Ajoutez l'ID de la catégorie ici
        id_restaurant: store.getRestaurantId(), // Ajoutez l'ID du restaurant
        
      });
      
      console.log(response.data);
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