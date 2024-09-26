
<template>
<!--navbar en responsive-->
  <div>
  <nav class="bg-orange-400 text-gray-950">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../assets/un.jpg" class="h-12 border rounded-full border-orange-500" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap">EatEasily</span>
      </a>

      <div class="flex md:hidden">
        <button @click="toggleMenu" class="text-gray-950 focus:outline-none">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div class="hidden md:flex md:items-center md:space-x-5">
        <a href="#">
          <button @click.prevent="open1" class="text-gray-950 text-md font-medium">Restaurateur Space</button>
        </a>
        <RouterLink to="#">
          <button @click.prevent="open" class="flex items-center space-x-2 px-4 border border-orange-500 bg-white hover:bg-orange-300 hover:text-white rounded-full">
            <div class="flex items-center space-x-1">
              <svg class="h-4 w-4 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span class="text-gray-950 text-md font-medium">Sign In</span>
            </div>
          </button>
        </RouterLink>
      </div>
    </div>

    <!-- Main modal inscrire -->
<div id="authentication-modal" tabindex="-1" aria-hidden="true" v-show = "active2 == false" class=" flex inset-0 bg-gray-950 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0  z-50 justify-center items-center w-full h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-orange-500 dark:text-white">
                    Sign up to our platform
                </h3>
                <button type="button" @click="close2" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
                <form @submit.prevent="register" class=" space-y-4 ">
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="email" />
      <label for="email" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
     
    </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="password" id="password" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="password"/>
      <label for="password" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
     
    </div>

  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="firstname" id="firstname" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="firstname" />
        <label for="firstname" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">FirstName</label>

    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="lastname" id="lastname" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="lastname" />
        <label for="lastname" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"  >LastName</label>
 
    </div>
  </div>
  
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="address" id="address" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="address"/>
        <label for="address" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="numero" name="phone" id="phone" class="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required v-model="phone"/>
        <label for="phone" class="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone </label>

    </div>


  </div>
    
  <div class="mt-10 flex md:flex-col items-center">
  <button type="submit"    class="w-full px-5 py-2.5 text-orange-500 bg-white hover:text-white hover:bg-orange-500 border border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-xl text-md sm:w-auto  text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">SignUp</button>
</div>
  <!----<div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
       <div v-if="successMessage" class="text-green-500"> {{ successMessage }}</div>

       <div v-if = "response" :class ="{err : ! response.success}">{{ response.message }}</div>-->

       <p v-if="erreur" class="error"> {{ erreur }}</p>
      <p v-if="successMessage" class="success"> {{ successMessage }}</p>


       <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already an account? <RouterLink to=""><button @click="open2" class="text-orange-700 hover:underline dark:text-orange-500">SignIn</button></RouterLink>
                    </div>
</form>
            </div>
        </div>
    </div>
</div> 






    <!-- Menu mobile -->
    <div v-if="isMenuOpen" class="md:hidden">
      <a href="#" class="block px-4 py-2 text-gray-950">Restaurateur Space</a>
      <RouterLink to="#" class="block px-4 py-2 text-gray-950">Sign In</RouterLink>
    </div>
  </nav>
</div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const open1 = () => {
      // Logic for opening restaurateur space
    };

    const open = () => {
      // Logic for opening sign in
    };

    return {
      isMenuOpen,
      toggleMenu,
      open1,
      open,
    };
  },
};
</script>

<style scoped>
/* Ajoutez votre style ici si nécessaire */
</style>

