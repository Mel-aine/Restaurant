<template>
<div class="">
  <div class="sticky top-0 z-50">
    <Head/>
  </div>
<div class="relative  overflow-hidden h-50 w-full  bg-cover bg-center bg-no-repeat bg-[url('assets/image5.jpg')]">

  <div class="px-4 mx-auto  text-center py-24 lg:py-20 ">

    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Bienvenue sur <span class="font-extrabold text-5xl text-orange-500 uppercase" >EATEASILY</span></h1>
            
    <p class="mb-4 text-2xl font-extrabold text-white">Recherchez les restaurants et lounges.Passez vos commandes. Nous livrons a domicile</p>

<form class="max-w-md mx-auto">   

    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search Yaoundé, Douala..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-blorange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Search</button>
    </div>
</form>
</div>
</div>
<carr/>
</div>
</template>

<script setup>
import Head from '../components/Head.vue';
import carr from '../views/carr.vue';
</script>