<template>
  
 <div class="max-w-md mx-auto bg-white  p-8 rounded-lg shadow-md mt-5">
   <h1 class="text-2xl font-bold text-center  pb-5 uppercase text-orange-500"><svg class="h-8 w-8 text-orange-500 inline-flex"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 6 12 12 16 14" /></svg>schedules</h1>
   
      <hr>

      <div v-for="horaire in horaires" :key="horaire.id" class="hover:bg-gray-100 transition duration-300">
    <div class="grid grid-cols-2 gap-6 px-8 py-4 border-b border-gray-300">
        <div class="text-gray-800 font-semibold">
            <span class="text-sm">{{ horaire.day }}</span>
        </div>
        <div class="flex items-center justify-between">
            <div class="flex flex-col items-start">
                <span class="text-sm text-gray-600">Ouverture</span>
                <span class="text-sm text-gray-800 font-semibold">{{ horaire.opening_hour }}</span>
            </div>
            <span class="mx-2 text-gray-500">----</span>
            <div class="flex flex-col items-end">
                <span class="text-sm text-gray-600">Fermeture</span>
                <span class="text-sm text-gray-800 font-semibold">{{ horaire.closing_hour }}</span>
            </div>
        </div>
    </div>
</div>
<div class="grid grid-cols-2 gab-6">
<button @click="open" type="button" class="py-2.5  px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add schedule</button>

<button  class="py-2.5  px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-red-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete Schedule</button>
</div>
</div>
<div v-show="active==true" id="app" class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
        <h1 class="text-2xl font-bold text-center text-gray-700">Horaires d'Ouverture du Restaurant</h1>
        <form @submit.prevent="soumettre" >
           <hr>

            <div class="my-4">
                <label class="block text-gray-600 font-semibold">Jours d'Ouverture :</label>
                <div class="flex flex-col">
                    <label class="inline-flex items-center">
                        <input type="checkbox"  value="lundi" v-model="jours"  class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Lundi</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" value="mardi" v-model="jours"   class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Mardi</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" value="mercredi" v-model="jours"  class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Mercredi</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" value="jeudi" v-model="jours"  class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Jeudi</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" value="vendredi" v-model="jours" class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Vendredi</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" value="samedi" v-model="jours" class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Samedi</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" value="dimanche" v-model="jours" class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Dimanche</span>
                    </label>
                </div>
            </div>
{{ jours }}
            <div class="mb-4">
                <label for="heure_ouverture" class="block text-gray-600 font-semibold">Heure d'Ouverture :</label>
                <div class="relative">
        <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
            </svg>
        </div>
                <input type="time" v-model="heure_ouverture" required class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200">
            </div>
            </div>

            <div class="mb-4">
                <label for="heure_fermeture" class="block text-gray-600 font-semibold">Heure de Fermeture :</label>
                <div class="relative">
        <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
            </svg>
        </div>
                <input type="time" v-model="heure_fermeture" required class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200">
            </div>
            </div>

            <input type="submit" value="Soumettre" class="w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 transition duration-200">
        </form>
    </div>



    
</template>
    <script setup>
     import {  ref,onMounted } from 'vue';
     import axios from "axios";
     import { store } from "../store/global";
            
                const jours = ref([]);
                const heure_ouverture = ref('');
                const heure_fermeture = ref('');
                const active = ref(false);

                const open = () => {
                    active.value = !active.value;
                };

                const close = () => {
                    active.value = false;
                };

const soumettre = async () => {
    if (heure_ouverture.value >= heure_fermeture.value) {
        alert("L'heure d'ouverture doit être antérieure à l'heure de fermeture.");
        return;
    }
 

    try {
        const response = await axios.post('https://proj-kappa-green.vercel.app:3001/horaires/form', {
            Day: jours.value.join(','), // Convertir le tableau en chaîne
            Opening_hour: heure_ouverture.value,
            Closing_hour: heure_fermeture.value,
            id_restaurant: store.getRestaurantId(),
        });

        console.log(response.data);
        close(); 
        alert("Horaire sauvegardé !");
    } catch (error) {
        console.error('Erreur lors de la soumission des horaires :', error);
        alert("Une erreur s'est produite lors de la sauvegarde des horaires.");
    }
}
               
const horaires = ref([]);

const fetchHoraire = async () => {
  try {
    const restaurantId = store.getRestaurantId();
    const response = await axios.get(`https://proj-kappa-green.vercel.app:3001/horaires/${restaurantId}`);
    horaires.value = response.data.data;

  } catch (error) {
    console.error(' horaire :: fetchHoraire :: ', error);
  }
};       
onMounted(fetchHoraire);        
    </script>

