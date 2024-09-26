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

<RouterLink to="" >
<button @click.prevent="open" class="inline-flex items-center px-3 py-1 text-sm  font-medium text-center text-white bg-orange-700 rounded-full hover:bg-white border hover:text-orange-700 hover:border-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
          commandez maintenant
        </button>
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



<!-- Main modal -->
<div id="authentication-modal" tabindex="-1" aria-hidden="true" v-show = "active == false" class=" flex inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0  z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-orange-500 dark:text-white">
                    Sign in to our platform
                </h3>
                <button type="button" @click="close" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
                <form class="space-y-4" action="" >
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" v-model="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" v-model="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-orange-700 hover:underline dark:text-orange-500">Lost Password?</a>
                    </div>
                    <RouterLink to="">
                    <button @click.prevent = "connexion" type="submit" class="w-full text-white bg-orange-700 hover:bg-white hover:text-orange-500 border hover:border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Login to your account</button></RouterLink>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <RouterLink to="/inscrire"><button @click="close" class="text-orange-700 hover:underline dark:text-orange-500">Create account</button></RouterLink>
                    </div>
                </form>
                <div v-if="erreur" class="erreur">{{ erreur }}</div>
            </div>
        </div>
    </div>
</div> 




      

</div>







</template>


<script setup>
import Head from '../components/Head.vue';
import {ref} from 'vue';
const menu = ref([
        {
          id: 1,
          
          address: 'Odza',
          hour: "samedi-",
          image: 'https://example.com/spaghetti.jpg', // Remplacez par une URL d'image 
          nameRestaurant:'nom restaurant',
          typeservice :'Livraison et reservation',
        },
        ]);

        const active = ref(true);

        const open = () => {
  active.value = !active.value ;
}
const close =() => {
  active.value = !active.active ;
}


</script>


