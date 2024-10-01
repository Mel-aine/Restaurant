<template>
    <div>



<div class="space-y-2">

      <div v-for="categorie in categories" :key="categorie.id" id="accordion-flush" data-accordion="collapse" data-active-classes=" bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
  <h2 id="accordion-flush-heading-1">
    <button  type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border px-8 border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
      <span>{{ categorie.name }}</span>
      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  
  <button @click="open" type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Ajouter un menu</button>
        
</div>
</div>


           




      <button @click="open2" type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Ajouter une categorie</button>
        

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
            <form @submit.prevent="submitForm" class="space-y-6">
              <label
                class="block mb-2 text-sm font-medium text-orange-500 dark:text-white"
                >Dish</label
              >
              <div class="flex flex-col items-center pb-5">
                <img
                  class="w-24 h-24 mb-3 rounded shadow-lg"
                  src="../assets/un.jpg"
                  alt="logo du restaurant"
                />

                <input
                  class="mx-8 translate-x-2"
                  type="file"
                  id="myFile"
                  name="filename"
                />
              </div>

              <label
                for="name"
                class="block text-orange-500 text-sm font-bold mb-2"
                >Name of the dish</label
              >
              <input
                v-model="form.name"
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
                  v-model="form.description"
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
                  v-model="form.price"
                  type="number"
                  id="price"
                  placeholder="Enter the price"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

            <!---  <div class="mb-4">
                <label
                  for="category"
                  class="block text-orange-500 text-sm font-bold mb-2"
                  >Category</label
                >
                <select
                  v-model="form.category"
                  id="category"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select a category</option>
                  <option
                    v-for="categorie in categories"
                    :key="categorie.id"
                    
                  >
                    {{ categorie.name }}
                  </option>
                </select>
              </div>-->

              <div class="flex items-center justify-between">
                <button
                  type="submit"
                  class="w-full text-orange-500 bg-white hover:bg-orange-500 hover:text-white border border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Register
                </button>
              </div>
            </form>

            <div
              v-if="submitted"
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
  
  <button @click="close2" type="submit" class="text-white  bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Sauvegarder</button>
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
  const active2 = ref(true);
  const active = ref(true);
  const form = ref({
      name1: "",
      description: "",
      price: "",
      category: "",
    });
   /* const categories = [
      "Plats Africains",
      "Plats Européens",
      "Desserts",
      "Boissons",
    ];*/
    const open = () => {
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
    const router = useRouter();
    const nom = ref('');
    const erreur = ref(null);
    const description = ref('');

const Sauvegarder= async () => {
  try {
   
    // Étape 2 : Soumission des données du formulaire
    const response = await axios.post('http://localhost:3001/categorie/form', {
  
      Description: description.value,
      Name: nom.value,
    });

    console.log(response.data);
    alert("categorie sauvegardees ! ");
    

    //localStorage.setItem('restaurant', email.value);

  } catch (error) {
    if (error.response) {
      erreur.value = error.response.data.message || 'Erreur lors de la sauvegarde';
    } else {
      erreur.value = 'Erreur de sauvegarde';
    }
  }
};

// Référence réactive pour stocker les restaurants
const categories = ref([]);

// Fonction pour récupérer les restaurants
const fetchCategorie = async () => {
  try {
    const response = await axios.get('http://localhost:3001/categorie/cat');
    // Accéder aux données en utilisant response.data.data
    categories.value = response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des restaurants:', error);
  }
};

// Appeler la fonction lors du montage du composant
onMounted(fetchCategorie);


 </script>