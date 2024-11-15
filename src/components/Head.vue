<template>
  <div>

<!-- 
    <nav class="bg-orange-400 text-gray-950">
    <div class="flex flex-row justify-between px-4 md:px-8 mx-auto p-2">
        <div class="flex items-start space-x-2">
            <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../assets/un.jpg" class="h-12 border rounded-full border-orange-500" alt="Logo" />
            </a>
            <span class="self-center text-2xl font-semibold whitespace-nowrap">EatEasily</span>
        </div>

        <div class="md:hidden flex items-center">
            <button @click="toggleMenu" class="text-gray-950 focus:outline-none">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>

        <div :class="{'hidden': !isMenuOpen, 'relative': isMenuOpen}" class="absolute md:static bg-orange-400 w-full md:w-auto md:flex md:items-center md:space-x-3 mt-2 md:mt-0">
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center ml-auto">
                <div v-if="!user.isLoggedIn">
                    <button @click="open" class="text-gray-950 text-md font-medium" type="button">
                        <div class="flex items-center space-x-2 px-4 border border-orange-500 bg-white hover:bg-orange-300 hover:text-white rounded-full">
                            <div class="flex items-center space-x-1 px-4">
                                <svg class="h-4 w-4 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span class="text-gray-950 text-md font-medium">Sign In</span>
                            </div>
                        </div>
                    </button>
                </div>
                <div v-else>
                    <button @click.prevent="toggleDropdown" class="text-white font-medium text-md text-center items-center" type="button">
                        {{ user.email }} 
                        <svg class="w-2.5 h-2.5 ms-3 inline-flex" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>  
                </div>
            </div>
        </div>
    </div>
</nav>
 -->


     <nav class="bg-orange-400 text-gray-950 ">
      <div class="flex flex-row justify-between px-4 md:px-8 mx-auto p-2">
        <div class="flex items-start space-x-2">
          <div class="flex items-center">
          
            <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img  src="../assets/un.jpg"  class="h-12 border rounded-full border-orange-500"  alt=" Logo"/>
            </a>
          </div>

          <span class="self-center text-2xl font-semibold whitespace-nowrap"
            >EatEasily</span >
        </div>
        <div v-if="!user.isLoggedIn"
          class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center mt-2 md:mt-0">
          <div class="space-x-5">
            
              <button    @click="open" class="text-gray-950 text-md font-meduim"  type="button"> 
                 <div class=" flex items-center space-x-2 px-4 border border-orange-500 bg-white hover:bg-orange-300 hover:text-white rounded-full" >
                  <div class="flex items-center space-x-1 px-4">
                    <svg class="h-4 w-4 text-gray-950"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor" > <path  stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="text-gray-950 text-md font-meduim" >Sign In</span >
                  </div>
                </div> 
              </button>
            
          </div>
        </div>
         <div v-else  class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center" >
           <div class="space-x-5 relative">
            <button  @click.prevent="toggleDropdown" class="text-white font-medium  text-md text-center  items-center " type="button"> {{ user.email }} <svg  class="w-2.5 h-2.5 ms-3 inline-flex"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/></svg> 
            </button>  
           </div> 
        </div>
      </div>
    </nav> 

    <div v-show="isDropdownOpen"    class="absolute right-0  z-0  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
      
      <li>
        <button @click="logout" v-if="user.isLoggedIn" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
      </li>
    </ul>
</div> 

    <!-- Main modal -->
    <div   tabindex="-1"  v-show="active == false"  class="flex bg-gray-950 bg-opacity-50 inset-0 overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full h-full"  >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div   class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600" >
            <h3 class="text-xl font-semibold text-orange-500 dark:text-white">
              Welcome to EatEasily
            </h3>
            <button type="button"  @click="close"  class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"  >
              <svg  class="w-3 h-3"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"   >
                <path  stroke="currentColor"  stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2"  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 md:p-5">
            <form class="space-y-4" action="" @submit.prevent="handleLogin" >
              <p v-if="errorMessage" class="text-red-500 font-serif ">{{ errorMessage }}</p>
              <div>
                <label for="email1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >Email</label >
                <input  type="email"  v-model="email1" required id="email1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com"   autocomplete="username"  />
              </div>
              <div>
                <label  for="password1"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >Password</label >
                <input  type="password"   v-model="password1"  required    id="password1"  placeholder="••••••••"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"   autocomplete="current-password" />
              </div>
                <button  :disabled="isLoading" type="submit" class="w-full  text-white bg-orange-700 hover:bg-white hover:text-orange-500 border hover:border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" >
                Sign in
                </button>  
             
                <!-- Spinner -->
              <div v-if="isLoading" role="status" class="flex justify-start items-center">
                  <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                  <span class="sr-only text-gray-900" >Loading...</span>
              </div>

              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?
                <RouterLink to="/inscrire">
                  <button @click="close()"  class="text-orange-700 hover:underline dark:text-orange-500" >Create account </button></RouterLink  >
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




// onMounted(() => {
// initFlowbite();
// })


const active = ref(true);
const active1 = ref(true);
const errorMessage = ref("");
const successMessage = ref("");
const router = useRouter(); 
const isDropdownOpen = ref(false);
const email1 = ref("");
const password1 = ref("");
const userStore = useUserStore();


const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
}

const open = () => {
  active.value = !active.value;
  errorMessage.value = '';
};
const close = () => {
  active.value = !active.active;
  email1.value = '';
  password1.value = '';
};



const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}




const validateFields = () => {
  // Vérification de l'email
  if (!email1.value) {
    errorMessage.value = "Email is required.";
    return false;
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour valider l'email
  if (!emailPattern.test(email1.value)) { // Utilisez email1 ici
    errorMessage.value = "Please enter a valid email address.";
    return false;
  }
  
  // Vérification du mot de passe
  if (!password1.value) {
    errorMessage.value = "Password is required.";
    return false;
  }
  
  if (password1.value.length < 6) {
    errorMessage.value = "The password must contain at least 6 characters.";
    return false;
  }
  
  // Réinitialiser le message d'erreur si tout est valide
  errorMessage.value = ""; 
  return true;
};

const isLoading = ref(false)

const handleLogin = async () => {

   if (!validateFields()) {
     return; 
   }
   isLoading.value = true; // Active le spinner
  try {

    const userStore = useUserStore();
    await userStore.login(email1.value, password1.value);
    // Vérifiez si userInfo est défini
    if (userStore.userInfo && userStore.userInfo.email) {
      // alert('Connexion réussie !');
    
     console.log("Email de l'utilisateur :", userStore.userInfo.email)
     localStorage.setItem("userEmail1",userStore.userInfo.email ); 
     email1.value = '';
     password1.value = '';
     errorMessage.value = ""; 
     close();
    } else {
      throw new Error("Échec de la connexion : utilisateur non authentifié.");
    }
  } catch (error) {
    console.error("Erreur de connexion :", error);
  if (error.code === 'auth/invalid-email') {
    errorMessage.value = "L'adresse email saisie est invalide. Veuillez vérifier votre email.";
  } else if (error.code === 'auth/wrong-password') {
    errorMessage.value = "Le mot de passe saisi est incorrect.";
  } else if (error.code === 'auth/user-not-found') {
    errorMessage.value = "Aucun utilisateur trouvé avec cet email.";
  } else if (error.code === 'auth/invalid-credential') {
    errorMessage.value = "The credentials provided are invalid. Please try again.";
  }
  else {
    errorMessage.value = error.message || "Erreur de connexion";
  }
  } finally {
            isLoading.value = false; // Désactive le spinner
        }
};

const user = computed(() => ({
  isLoggedIn: !!userStore.userInfo,
  email: userStore.userInfo ? userStore.userInfo.email : ''
}));


// Récupérer l'email de l'utilisateur depuis le localStorage au chargement du composant
onMounted(() => {
  const storedEmail = localStorage.getItem("userEmail1");
  if (storedEmail) {
    // Vous pouvez ici mettre à jour le store ou faire autre chose
    userStore.userInfo = { email: storedEmail }; // Met à jour le store avec l'email
  }
});




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
