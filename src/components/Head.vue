<template>
  <div>
    <nav class="bg-orange-400 text-gray-950 ">
      <div class="flex justify-between px-8 md:justify-between mx-auto p-2">
        <div class="flex items-start space-x-2">
          <div class="flex items-center">
            <!-- <div class="  max-w-screen-xl flex flex-wrap items-center md:justify-between mx-auto p-1">-->
            <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="../assets/un.jpg"
                class="h-12 border rounded-full border-orange-500"
                alt=" Logo"
              />
            </a>
          </div>

          <span class="self-center text-2xl font-semibold whitespace-nowrap"
            >EatEasily</span
          >
        </div>
        <!-- !store.global?.hasUser -->
        <div v-if="!user.isLoggedIn"
          class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center"
        >
          <div class="space-x-5">
            <a href="">
              <bouton data-modal-target="authentication-modal" type="button"
                @click.prevent="open1"
                class="text-gray-950 text-md font-meduim btn-open-modal"
                >Restaurateur space</bouton
              >
            </a>

            <a href="">
              <button type="button" data-modal-target="authentication-modal"  @click.prevent="open" class="">
                <div class="btn-open-modal flex items-center space-x-2 px-4 border border-orange-500 bg-white hover:bg-orange-300 hover:text-white rounded-full" >
                  <div class="flex items-center space-x-1 px-4">
                    <svg class="h-4 w-4 text-gray-950"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor" > <path  stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-950 text-md font-meduim" >Sign In</span >
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
         <div v-else 
          class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center"
        >
           <div class="space-x-5 relative">
            <button  @click.prevent="toggleDropdown" class="text-white font-medium  text-md text-center  items-center " type="button"> {{ user.email }} <svg  class="w-2.5 h-2.5 ms-3 inline-flex" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg> </button> 

           </div> 

        </div>
      </div>
    </nav>
    <div v-show="isDropdownOpen"   class="absolute right-0  z-0  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
      
      <li>
        <button @click="logout" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
      </li>
    </ul>
</div> 

    <!-- Main modal -->
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      v-show="active == false"
      class="flex bg-gray-950 bg-opacity-50 inset-0 overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full h-full"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-orange-500 dark:text-white">
              Welcome to EatEasily
            </h3>

            <button
              type="button"
              @click="close"
              class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5">
            <form class="space-y-4" action="">
              <div>
                <label
                  for="email1"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your email</label
                >
                <input
                  type="email"
                  v-model="email1"
                  name="email1"
                  id="email1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password1"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your password</label
                >
                <input
                  type="password"
                  v-model="password1"
                  name="password1"
                  id="password1"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <div class="py-2"></div>
              <RouterLink to="">
                <button
                  @click.prevent="handleLogin"
                  type="submit"
                  class="w-full text-white bg-orange-700 hover:bg-white hover:text-orange-500 border hover:border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Login to your account
                </button></RouterLink
              >
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?
                <RouterLink
                  to="/inscrire">
                  <button @click="close()" 
                  class="text-orange-700 hover:underline dark:text-orange-500"
                  >Create account </button></RouterLink
                >
              </div>
            </form>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Main modal add restaurant -->
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      v-show="active1 == false"
      class="inset-0 bg-gray-950 bg-opacity-50  flex shadow overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full h-full"
     > <!--bg-gray-950 bg-opacity-50  -->
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-orange-500 dark:text-white">
              Sign in to our platform
            </h3>
            <button
              type="button"
              @click="close1"
              class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5">
            <form class="space-y-4" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your email</label
                >
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Your password</label
                >
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

                

              <div class="py-2"></div>
              <RouterLink to="">
                <button
                  @click.prevent="connexion"
                  type="submit"
                  class="w-full text-white bg-orange-700 hover:bg-white border hover:border-orange-500 hover:text-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Login to your account
                </button></RouterLink
              >
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?
                <RouterLink to="/form"
                  ><button
                    @click="close1"
                    class="text-orange-700 hover:underline dark:text-orange-500"
                  >
                    Create account
                  </button></RouterLink
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script setup>
import { ref ,onMounted , computed } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import { useRouter } from "vue-router";
import { initFlowbite } from 'flowbite'
import { useUserStore } from '/src/utils/useUserStore.js'
import { store } from "../store/global";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";




onMounted(() => {
initFlowbite();
})


const useStore = useUserStore();
const active = ref(true);
const active1 = ref(true);
const errorMessage = ref("");
const successMessage = ref("");
const router = useRouter(); 
const isDropdownOpen = ref(false);
const email1 = ref("");
const password1 = ref("");
const userStore = useUserStore();
const email = ref("");
const password = ref("");

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
}

const open = () => {
  active.value = !active.value;
};
const close = () => {
  active.value = !active.active;
};

const open1 = () => {
  active1.value = !active1.value;
};
const close1 = () => {
  active1.value = !active1.active;
};


const handleLogin = async () => {
  try {
    const userStore = useUserStore();
    await userStore.login(email1.value, password1.value);
   
    alert('Connexion réussie !');
     store.setUser(userStore);
     console.log("Email de l'utilisateur :", userStore.userInfo.email)
     localStorage.setItem("userEmail1",userStore.userInfo.email ); 
     email1.value = '';
     password1.value = '';

     close()

  } catch (error) {
    alert('Erreur de connexion : ' + error.message);
  }
};

const user = computed(() => ({
  isLoggedIn: !!userStore.userInfo,
  email: userStore.userInfo ? userStore.userInfo.email : ''
}));





const connexion = async () => {
  const userStore = useUserStore(); 
  try {
  
      const response = await axios.post("http://localhost:3001/users/login", {
        Email: email.value,
        Password: password.value,
      });
      store.setUser(response.data.data);
      close1()
      router.push("/cmd");
      await userStore.login(email.value, password.value);
     if (userStore.userInfo) {
      alert('Connexion réussie !');
      localStorage.setItem("userEmail", userStore.userInfo.email);
      email.value = '';
      password.value = '';
      errorMessage.value = ""; 
    } else {
      throw new Error("Échec de la connexion : utilisateur non authentifié.");
    }
  } catch (error) {
    if (error.response) {
      errorMessage.value = error.response.data.message || "Erreur lors de la connexion";
    } else {
      errorMessage.value = error.message || "Erreur de connexion";
    }
    console.error("Erreur de connexion :", error);
  }
};



const logout = async () => {
  
  try {

    await userStore.logout(); // 
    toggleDropdown()
    localStorage.removeItem('userEmail1'); // Assurez-vous que c'est le bon nom de clé
    router.push("/"); // Redirection vers la page d'accueil
   // storeVue001.value = ''; // Réinitialiser storeVue001
    
    
  } catch (error) {
    console.error('Erreur lors de la déconnexion : ', error);
  }
};




</script>
