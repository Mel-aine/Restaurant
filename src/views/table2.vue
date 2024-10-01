<template>
  <div>
    <div class=" sticky top-0 z-50">
    <Header/>
</div>
 <div class="relative  overflow-hidden w-full h-50 bg-orange-200 " > 
   
    <div class="flex flex-col items-center uppercase py-10 ">
  <h1 class="text-4xl font-extrabold text-orange-500 ">Nom du Restaurant</h1>
  <span class="text-gray-950"></span>
   
  </div>
 
<form class="flex items-center max-w-lg mx-auto py-10">
    
    
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">

        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full ps-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Recherchez les menus..." required />
        
    </div>
    <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-orange-500 bg-white rounded-lg border border-orange-700 hover:bg-orange-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>
</form>

<RouterLink to="/tab" class="flex justify-end mr-20   px-3  text-lg  font-medium text-center text-orange-500 hover:underline hover:text-gray-950">
          Poursuivez votre Commande

        <svg class="h-10 w-10 text-gray-950  "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
</svg></RouterLink>

 </div>
 <div  class=" inline-flex items-center space-x-1 px-4">
 <svg class="h-6 w-6 text-gray-950"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
</svg>
      <h1 class="text-2xl font-bold uppercase text-orange-500 ">Plats</h1>
</div>
<div class="max-w-4xl mx-auto mt-10">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in menu" :key="item.id" class="bg-white shadow-md rounded-lg overflow-hidden">
          <img :src="item.image" alt="Image de {{ item.name }}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-xl font-bold">{{ item.name }}</h2>
            <p class="text-gray-700">{{ item.description }}</p>
            <p class="text-lg font-semibold text-orange-600">{{ item.price }} FCFA</p>
            <RouterLink to="" class="flex flex-col items-center px-3 py-1 text-sm  font-medium text-center text-white bg-orange-700 rounded-full hover:bg-white border hover:text-orange-700 hover:border-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
          Commandez

      </RouterLink>
          </div>
        </div>
        
      </div>


    </div>

    <div  class=" inline-flex items-center pt-5 space-x-1 px-4">
 <svg class="h-6 w-6 text-gray-950"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
</svg>
      <h1 class="text-2xl font-bold uppercase text-orange-500 ">boissons</h1>
</div>
<div class="max-w-4xl mx-auto mt-10">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in menu" :key="item.id" class="bg-white shadow-md rounded-lg overflow-hidden">
          <img :src="item.image" alt="Image de {{ item.name }}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-xl font-bold">{{ item.name }}</h2>
            <p class="text-gray-700">{{ item.description }}</p>
            <p class="text-lg font-semibold text-orange-600">{{ item.price }} FCFA</p>
            <RouterLink to="" class="flex flex-col  items-center px-3 py-1 text-sm  font-medium text-center text-white bg-orange-700 rounded-full hover:bg-white border hover:text-orange-700 hover:border-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
          Commandez

      </RouterLink>
          </div>
        </div>
        
      </div>


    </div>

    <div  class=" inline-flex items-center space-x-1 px-4 pt-5">
 <svg class="h-6 w-6 text-gray-950"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
</svg>
      <h1 class="text-2xl font-bold text-orange-500 uppercase ">Desserts</h1>
</div>
<div class="max-w-4xl mx-auto my-10">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in menu" :key="item.id" class="bg-white shadow-md rounded-lg overflow-hidden">
          <img :src="item.image" alt="Image de {{ item.name }}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-xl font-bold">{{ item.name }}</h2>
            <p class="text-gray-700">{{ item.description }}</p>
            <p class="text-lg font-semibold text-orange-600">{{ item.price }} FCFA</p>
            <RouterLink to="" class="flex-col flex  items-center px-3 py-1 text-sm  font-medium text-center text-white bg-orange-700 rounded-full hover:bg-white border hover:text-orange-700 hover:border-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
          Commandez

      </RouterLink>
          </div>
        </div>
        
      </div>


    </div>

</div>

</template>

<script setup>
import {ref} from 'vue';
import Header from '../components/Header.vue';
  

      const menu = ref([
        {
          id: 1,
          name: 'Spaghetti Carbonara',
          description: 'Pâtes avec une sauce crémeuse au fromage et pancetta.',
          price: 12.50,
          image: 'https://example.com/spaghetti.jpg', // Remplacez par une URL d'image valide
        },
        {
          id: 2,
          name: 'Salade César',
          description: 'Salade fraîche avec poulet grillé, croûtons et parmesan.',
          price: 10.00,
          image: 'https://example.com/salade.jpg', // Remplacez par une URL d'image valide
        },
        {
          id: 3,
          name: 'Tarte Tatin',
          description: 'Tarte aux pommes caramélisées servie chaude.',
          price: 6.50,
          image: 'https://example.com/tarte.jpg', // Remplacez par une URL d'image valide
        },
        // Ajoutez d'autres éléments du menu ici
      ]);

      const active = ref(true);
      const ouvrir = () =>{
        active.value = !active.value
      }
  
   

</script>

<style>

</style>