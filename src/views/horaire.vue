<template>
  
 <div class="max-w-md mx-auto bg-white  p-8 rounded-lg shadow-md mt-5">
   <h1 class="text-2xl font-bold text-center  pb-5 uppercase text-orange-500"><svg class="h-8 w-8 text-orange-500 inline-flex"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polyline points="12 6 12 12 16 14" /></svg>schedules</h1>
   
      <hr>

      <div v-for="horaire in horaires" :key="horaire.id" class="hover:bg-gray-100 transition duration-300">
      
    <div class="grid grid-cols-2 gap-5 px-8 py-2 border-b border-gray-300">
        <div class="text-gray-800 font-semibold flex flex-wrap">
            <span class="text-sm ">{{ horaire.day }} </span>    
        </div>
        <div class="flex items-center justify-between">
            <div class="flex flex-col items-start">
                <span class="text-sm text-gray-600">ouverture</span>
                <span class="text-sm text-gray-800 font-semibold">{{ horaire.opening_hour }}</span>
            </div>
            
            <span class="mx-2 text-gray-500">---- </span>
            
            <div class="flex flex-col items-end">
                <span class="text-sm text-gray-600">Fermeture</span>
                <span class="text-sm text-gray-800 font-semibold">{{ horaire.closing_hour }}</span>
                
            </div>
            
            <!-- <div class="flex flex-col items-end">  <svg class="h-8 w-8 text-gray-500 translate-x-8"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></div>  -->
        </div>
    
        <button  @click.prevent="openPopup(horaire.id_horaire)"  class="py-1   px-2  text-sm font-medium text-gray-900 focus:outline-none bg-red-500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</button>
    
</div>
</div>
<div class="grid grid-cols-2 gab-6">
<button @click="open" type="button" class="py-2.5  px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Add schedule</button>


</div>
</div>

<div v-show=" popup"  class="overflow-y-auto fixed inset-0  bg-opacity-50 flex justify-center items-center bg-gray-900 overflow-x-hidden  top-0 right-0 left-0 z-50 w-full md:inset-0 ">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button @click="closePopup" type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this Schedule?</h3>
                <button @click="deleteHoraire(selectedhoraireId)" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Yes, I'm sure
                </button>
                <button @click="closePopup" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
            </div>
        </div>
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
     import { useRoute } from 'vue-router';
const route = useRoute();

            
                const jours = ref([]);
                const heure_ouverture = ref('');
                const heure_fermeture = ref('');
                const active = ref(false);
                const isLoading = ref(false);
                const popup = ref(false);
  const selectedhoraireId = ref(null);
  const openPopup = (horaireId) => {
    selectedhoraireId.value = horaireId;
    alert(horaireId)
      popup.value = true;
    };

    const closePopup = () => {
      popup.value = false;
      selectedhoraireId.value = null;
    };


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
    const restaurantId = Number(route.params.id_restaurant); 
    const response = await axios.get(`https://proj-bdjg.onrender.com/horaires/${restaurantId}`);
    horaires.value = response.data.data;
    console.log(restaurantId);

  } catch (error) {
    console.error(' horaire :: fetchHoraire :: ', error);
  }
};       
onMounted(fetchHoraire);        


const deleteHoraire = async (horaireId) => {
      try {
       console.log("horaire :: deleteHoraire :: ", horaireId);
       
        await axios.delete(`http://localhost:3001/horaires/${horaireId}`); 
        closePopup();
        fetchHoraire ();
      } catch (error) {
        console.error('error when deleting schedule:', error);
      }
    };
  
    </script>

