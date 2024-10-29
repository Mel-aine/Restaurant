<template>
  <div>
    <div v-if="store.global?.hasUser"  class=" max-w-md mx-auto bg-white p-8 px-8 rounded-lg shadow-md mt-10 ">
       
          <div class="flex flex-col items-center px-4 pt-2 pb-5">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"  
              src="../assets/depo.jpg"
              alt="Bonnie image"
            />
            <h5
              class="mb-1 text-xl uppercase font-semibold text-orange-500 dark:text-white"
            >
            {{ store.global.user.Restaurants[0].name }}
            </h5>
          </div>

          <div class="px-8 mx-auto">
            <dl
              class="max-w-md text-gray-900 divide-y items-center divide-gray-200 dark:text-white dark:divide-gray-700"
            >
              <div class="flex-col pb-2 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Email address
                </dt>
                <dd class="text-lg font-semibold">{{ store.global.user.email }}</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Restaurant address
                </dt>
                <dd class="text-lg font-semibold">{{ store.global.user.address }}</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Phone number
                </dt>
                <dd class="text-lg font-semibold">{{ store.global.user.phone }}</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Site web
                </dt>
                <dd class="text-lg font-semibold">{{ store.global.user.Restaurants[0].website }}</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Type of service
                </dt>
                <dd class="text-lg font-semibold">{{ store.global.user.Restaurants[0].service }}</dd>
              </div>
            </dl>
          </div>

          <div class="flex mt-4 md:mt-6 pb-5 flex-col items-center">
            <button
              @click="open1"
              class="py-2 w-full px-4 ms-2 text-sm font-medium text-orange-500 focus:outline-none bg-white rounded-lg border border-orange-500 hover:bg-orange-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-700 dark:bg-orange-800 dark:text-white dark:border-orange-600 dark:hover:text-white dark:hover:bg-orange-700"
            >
              Edit
            </button>
          </div>
        
      
    
    </div>
 
  </div>
</template>
<script setup >
import { ref } from "vue";
import { store } from "../store/global";
import { RouterLink } from "vue-router";

const Restaurant = store.getRestaurant()


    
   

</script>
