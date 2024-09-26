<template>
  <div>
    <div class=" sticky top-0 z-50">
    <Header/>
</div>
<div class="relative  overflow-hidden w-full h-50  bg-cover bg-center bg-no-repeat bg-[url('assets/image5.jpg')]">
    
      <div class="px-4 mx-auto  text-center py-24 lg:py-20 ">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Bienvenue sur <span class="font-extrabold text-5xl text-orange-500 uppercase" >EATEASILY</span></h1>
                
        

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

<h1 class="uppercase text-orange-500 flex flex-col items-center py-10 text-2xl font-extrabold">decouvrez nos Restaurants</h1>
<div class="py-10">
<div class="max-w-4xl mx-auto px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="item in menu" :key="item.id" class="bg-white shadow-md rounded-lg overflow-hidden">
          <img :src="item.image" alt="Image de {{ item.name }}" class="w-full h-48 object-cover">
          <div class="p-2">
            <h2 class="text-xl font-bold">{{ item.nameRestaurant }}</h2>
            <h3 class="text-xl font-bold">{{ item.address }}</h3>
            <ul class="text-gray-700"><li v-for="item in menu" :key="item.hour">{{ item.hour }}</li></ul>
            <p class="text-lg font-semibold text-orange-600">{{ item.typeservice }} </p>
            <div class="flex flex-col items-center ">

<RouterLink to="/tab1" class="inline-flex items-center px-3 py-1 text-sm  font-medium text-center text-white bg-orange-700 rounded-full hover:bg-white border hover:text-orange-700 hover:border-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
          commandez maintenant

      </RouterLink>

</div>
            
          </div>
        
        </div>
   <!--- <button
      
      class="absolute left-0  transform translate-y-50 bg-gray-950 p-2 rounded-full shadow"
    >
      &#10094;  Flèche gauche 
   </button>
    <button
      
      class="absolute right-0   transform translate-y-50 bg-gray-950 p-2 rounded-full shadow"
    >
      &#10095;  Flèche droite 
    </button> -->

  
</div>
      

    </div>
  </div>
  </div>
</template>
  
  
  <script  setup >
  import {ref} from 'vue';
  import Header from '../components/Header.vue';
  
      const menu = ref([
        {
          id: 1,
          
          address: 'Odza',
          hour: "samedi-",
          image: '', // Remplacez par une URL d'image 
          nameRestaurant:'nom restaurant',
          typeservice :'Livraison et reservation',
        },
       /* {
          id: 2,
          name: 'Salade ',
          description: 'Salade fraîche avec poulet grillé',
          price: 10.00,
          image: 'https://example.com/salade.jpg', // Remplacez par une URL d'image valide
          nameRestaurant:'nom restaurant',
          typeservice :'Livraison et reservation',
        },
        {
          id: 3,
          name: 'nom',
          description: 'description.',
          price: 6.50,
          image: 'https://example.com/tarte.jpg', // Remplacez par une URL d'image valide
          nameRestaurant:'nom restaurant',
          typeservice :'Livraison et reservation',
        },*/
        // Ajoutez d'autres éléments du menu ici
      ]);
  
    


  
  </script>
  
  <style>
  /* Ajouter ici des styles personnalisés si nécessaire */
  </style>
  
    


