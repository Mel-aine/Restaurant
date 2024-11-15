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
                <span class="text-sm text-gray-600">ouverture</span>
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
        <h1 class="text-2xl font-bold text-center text-gray-700">Restaurant Opening Hours</h1>
        <form @submit.prevent="soumettre" >
           <hr>

            <div class="my-4">
                <label class="block text-gray-600 font-semibold">Opening Days :</label>
                <div class="flex flex-col">
                    <label class="inline-flex items-center">
                        <input type="checkbox"  value="monday" v-model="jours"  class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Monday</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" value="tuesday" v-model="jours"   class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Tuesday</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" value="wednesday" v-model="jours"  class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Wednesday</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" value="thursday" v-model="jours"  class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Thursday</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" value="friday" v-model="jours" class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Friday</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" value="saturday" v-model="jours" class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Saturday</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" value="sunday" v-model="jours" class="form-checkbox h-5 w-5 text-orange-600">
                        <span class="ml-2 text-gray-700">Sunday</span>
                    </label>
                </div>
            </div>
            <div class="mb-4">
                <label for="heure_ouverture" class="block text-gray-600 font-semibold">Opening Hours :</label>
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
                <label for="heure_fermeture" class="block text-gray-600 font-semibold">Closing Hours :</label>
                <div class="relative">
        <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
            </svg>
        </div>
                <input type="time" v-model="heure_fermeture" required class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200">
            </div>
            </div>

            <input type="submit" value="Submit" class="w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 transition duration-200">
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



    
</template>
    <script setup>
     import {  ref,onMounted } from 'vue';
     import axios from "axios";
     import { store } from "../store/global";
            
                const jours = ref([]);
                const heure_ouverture = ref('');
                const heure_fermeture = ref('');
                const active = ref(false);
                const isLoading = ref(false);

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

        // Définir l'ordre des jours de la semaine
        const ordreJours = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

        // Trier les jours selon l'ordre défini
        const joursTries = jours.value.sort((a, b) => {
          return ordreJours.indexOf(a) - ordreJours.indexOf(b);

        });

        isLoading.value = true;
        
        const response = await axios.post('https://proj-bdjg.onrender.com/horaires/form', {
            Day: joursTries.join(','), // Convertir le tableau en chaîne
            Opening_hour: heure_ouverture.value,
            Closing_hour: heure_fermeture.value,
            id_restaurant: store.getRestaurantId(),
        });

        console.log(response.data);
        close(); 
       // alert("Horaire sauvegardé !");
    } catch (error) {
        console.error('Erreur lors de la soumission des horaires :', error);
        alert("Une erreur s'est produite lors de la sauvegarde des horaires.");
    }finally{
        isLoading.value = false;
    }
}
               
const horaires = ref([]);

const fetchHoraire = async () => {
  try {
    const restaurantId = store.getRestaurantId();
    const response = await axios.get(`https://proj-bdjg.onrender.com/horaires/${restaurantId}`);
    horaires.value = response.data.data;
    console.log(restaurantId);

  } catch (error) {
    console.error(' horaire :: fetchHoraire :: ', error);
  }
};       
onMounted(fetchHoraire);        
    </script>

