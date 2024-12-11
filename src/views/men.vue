<template>
<div class="bg-white min-h-screen">
        
    <div class="flex justify-start overflow-x-auto gap-8 px-8 flex-wrap">
    <div v-for="categorie in categories" :key="categorie.id_categorie" class="flex-shrink-0 w-28 mx-2 mb-4">
      <button  type="button"
        @click="toggleMenu(categorie.id_categorie)" 
        class=" w-28 mr-5 flex flex-col bg-white justify-around h-24 p-4 rounded-lg shadow-lg drop-shadow-lg cursor-pointer hover:bg-gray-100 select-none transition-transform transform hover:scale-105">
        <div class="text-orange-500 font-bold text-sm">
          <h1 class="text-lg font-bold">{{ categorie.name }}</h1>
        </div>  
      </button>
    </div>
  </div>
 

  <!-- Conteneur pour les menus -->
  
  <div v-if="activeCategory" class="mt-4 p-4">
    <h2 class="text-2xl font-bold text-center text-gray-500 mb-4">Menus for {{ getCategoryName(activeCategory) }} Category</h2>


    <div v-if="filteredMenus(activeCategory).length > 0">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        <div v-for="menu in filteredMenus(activeCategory)" :key="menu.id_menu" class="text-xs bg-white space-x-5 flex flex-col justify-between px-3 rounded-xl p-2 shadow-xl h-25 w-50 transition-transform transform hover:scale-105 overflow-hidden">
          <div class="flex flex-col items-center">
            <img class="w-60 h-32 rounded-lg" :src="menu.image" alt="Image du menu">
          </div>
          <div>
            <h2 class="sm:text-lg text-center text-orange-500 font-bold uppercase">{{ menu.name }}</h2>
            <p class="text-gray-700 text-center font-serif sm:text-sm">{{ menu.description }}</p>
            <p class="sm:text-lg text-center font-semibold text-orange-600">★ {{ menu.price }} FCFA</p>
          </div>
          <div class="flex flex-col items-center">
            <button @click.prevent="cart.add(menuList)" class="bg-orange-600 text-black text-sm font-bold py-1 px-4 rounded-xl truncate">Add to Dish</button>
          </div>
        </div>
      </div>
    </div>
    <p v-else>Aucun menu disponible pour cette catégorie.</p>
  </div>







  
    <div v-for="categorie in categories" :key="categorie.id_categorie" class="pb-10"  id="accordion-flush"  data-accordion="collapse" data-active-classes=" bg-white  dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
         
          
         <div class="flex justify-end bg-white pb-2 overflow-x-auto overflow-y-hidden ">
           <button class="flex flex-col bg-white justify-around h-24 w-28 p-4 rounded-lg shadow-lg drop-shadow-lg mr-5 cursor-pointer select-none transition-transform transform hover:scale-105">
             <div class="text-orange-500 font-bold text-sm   ">
               <h1 class="text-lg font-bold">{{ categorie.name }}</h1>
             </div>
             
             
           </button> 
           
           <hr class="w-full h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
         </div>
         <div class=" max-w-4xl mx-auto ">
         
       <div v-if="menuList.length > 0" >
         <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mx-auto  ">
           <div v-for="menuList in filteredMenus(categorie.id_categorie)" :key="menuList.id_menu" class=" text-xs  bg-white space-x-5 flex flex-col justify-between px-3   rounded-xl p-2 shadow-xl  h-25 w-50  transition-transform transform hover:scale-105  overflow-hidden" >
             <div class=" flex flex-col items-center ">
                <img class=" w-60 h-32 rounded-lg " :src=menuList.image alt="Image du menu">
             </div>
             <div class="">
               <h2 class="sm:text-lg text-center  text-orange-500 font-bold uppercase"> {{ menuList.name }}</h2>
               <p class="text-gray-700  text-center font-serif sm:text-sm">{{ menuList.description }}</p>
               <p  class="sm:text-lg text-center font-semibold text-orange-600">★ {{ menuList.price }} FCFA</p>
             </div>
             <div>
             <div  class="flex flex-col items-center">
                   <button @click.prevent="   cart.add(menuList)"   class="bg-orange-600 text-black text-sm font-bold py-1 px-4 rounded-xl truncate"  > Add to Dish </button>  
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
   
 </div>
</template>

<script setup>
</script>