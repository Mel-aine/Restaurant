<template>
  <div ref="dropdownContainer">
    <header class="bg-white">
      <nav class=" md:mx-auto mx-8 md:px-8 px-2 py-2 flex items-center justify-between">
        <!-- Logo -->
        <div id="navbar-user" class="flex items-center">
          <a href="/" class=" flex items-center space-x-3">
            <img src="../assets/un.jpg" class="h-12 w-12 rounded-full" alt="Logo" />
            <span class="text-xl font-bold text-orange-500">EatEasily</span>
          </a>
        </div> 
        <div class="relative max-w-lg flex-grow md:mx-auto px-8"> 
          <div class=" hidden md:block  ">
            <form class="">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative flex flex-row">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input @input="searchRestaurant" v-model="searchQuery" type="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-50 dark:border-orange-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Search for an address, cuisine or restaurant" required />
              </div>
            </form>
          </div>
          <button @click="Menu"  type="button"   aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search</span>
          </button>  
        </div>
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <div v-if="!user.isLoggedIn" class="md:flex  space-x-2 ml-auto">
            <button @click="open" class="px-2 py-2 border truncate rounded-md text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white">Sign In</button>
          </div>
          <div  v-else class="items-center justify-between space-x-2   md:mr-5 w-50 flex md:w-auto md:order-1" id="navbar-user">
            <div class="relative inline-block">
              <button v-if="isEditor" @click="toggleDropdown1" class="px-2 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md" >
              Add Restaurant
            </button>
            <div v-show="isDropdownOpen1"  class="absolute mt-2 left-0 bg-white divide-y divide-gray-50 rounded-b-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm flex flex-col items-center text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton" >
            <li>
              <RouterLink to="/form" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Registration
              </RouterLink>
            </li>
            <li>
              <button id="doubleDropdownButton"  @click="toggleSubmenu"  class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"  >
              Restaurateur Space
              <svg class="w-2.5 h-2.5 ms-3 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"  />
            </svg>
          </button>
          <div v-show="isSubmenuOpen" class="absolute right-full top-10 ml-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700"  >
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li v-for="item in resto" :key="item.id_restaurant" class="flex flex-col items-center" >
             <button  @click=" redirectAndReload" >    <RouterLink :to="{ name: 'cmd', params: { id_restaurant: item.id_restaurant } }" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >
              {{ item.name }}
            </RouterLink></button>  
          </li>
        </ul>
      </div>
    </li>
  </ul>
</div>
</div>
<div class="relative z-10">
  <!-- Navigation Content -->
  <div class=" items-center container mx-auto px-1 py-2">
    <!-- Bouton utilisateur -->
    <button
    @click="toggleMenu"
    type="button"
    class="text-gray-700 hover:text-orange-500"
    >
    <svg
    class="h-8 w-8 text-orange-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    >
    <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
</button>

<!-- Dropdown -->
<div class="relative inline-block ">
  <div
  v-show="isMenuOpen"
  class="absolute right-full translate-x-8 w-30 mt-5 bg-white divide-y divide-gray-100 rounded-b-lg shadow dark:bg-gray-700 dark:divide-gray-600"
  id="user-dropdown"
  >
  <div class="px-4 py-3">
    <span
    class="block text-sm text-gray-500 truncate dark:text-gray-400"
    >
    {{ user.email }}
  </span>
</div>
<ul class="py-2" aria-labelledby="user-menu-button">
  <li>
    <button
    @click="logout"
    v-if="user.isLoggedIn"
    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    >
    Sign out
  </button>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Mobile Menu Button -->

<button 
class="block md:hidden text-gray-500 hover:text-orange-500"
@click="toggleMobileMenu"
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
</svg>
</button>

<!-- Mobile Menu -->

<div 
v-show="isMobileMenuOpen"
class="absolute top-14 left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden"
>
<ul class="flex flex-col p-4 space-y-2">
  <li><div v-if="MenuOpen" class="   ">
    <form class="">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative flex flex-row">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input @input="searchRestaurant" v-model="searchQuery" type="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-50 dark:border-orange-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Search for an address, cuisine or restaurant" required />
      </div>
    </form>
  </div></li>
  <li v-if="!user.isLoggedIn" class="flex flex-col items-end " >
    <button @click="open" class="px-1 py-2 border truncate rounded-md text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white">Sign In</button>
  </li>
  
  <li class="flex flex-col items-end "> <span
    class="block text-sm text-gray-500 truncate dark:text-gray-400"
    >
    {{ user.email }}
  </span></li>
  <li> </li>
  <li  v-if="user.isLoggedIn && isEditor" >
    <button 
    @click="toggleDropdown1" 
    class="flex justify-between w-full px-4 py-2 hover:bg-gray-100"
    >
    Add Restaurant
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l4 4 4-4" />
    </svg>
  </button>
  <div v-show="isDropdownOpen1" class="pl-4">
    <a href="/form" class="block px-4 py-2 hover:bg-gray-100">Registration</a>
    <button
    id="doubleDropdownButton"
    @click="toggle" 
    class="flex justify-between w-full px-4 py-2 hover:bg-gray-100"
    >
    Restaurateur Space
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l4 4 4-4" />
    </svg>
  </button>
  <div
  v-show="isSubmenu"
  class="pl-4"
  >
  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
    <li
    v-for="item in resto"
    :key="item.id_restaurant"
    class="flex flex-col items-center"
    >
    <button  @click=" redirectAndReload" >  <RouterLink
      :to="{ name: 'cmd', params: { id_restaurant: item.id_restaurant } }"
      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
      {{ item.name }}
    </RouterLink></button>
  </li>
</ul>
</div>
</div>
</li>
<li><button
  @click="logout"
  v-if="user.isLoggedIn"
  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
  >
  Sign out
</button></li>
</ul>
</div>



</nav>


</header>


<!-- Main modal -->
<div   tabindex="-1"  v-show="active1 == false"  class="flex bg-gray-950 bg-opacity-50 inset-0 overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full h-full"  >
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
import { ref ,onMounted , computed,onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import { useRouter } from "vue-router";
import { initFlowbite } from 'flowbite'
import { useUserStore } from '/src/utils/useUserStore.js'
import { store } from "../store/global";
import { useCartStore } from '/src/utils/useCartStore.js';
import { getAuth, setPersistence, browserLocalPersistence, reload } from "firebase/auth";
import { key } from "localforage";




// onMounted(() => {
// initFlowbite();
// })

const dropdownContainer = ref(null);
const active = ref(true);
const active1 = ref(true);
const errorMessage = ref("");
const errorMessag = ref("");
const successMessage = ref("");
const router = useRouter(); 
const isDropdownOpen = ref(false);
const isDropdownOpen1 = ref(false);
const email1 = ref("");
const password1 = ref("");
const userStore = useUserStore();
const email = ref("");
const password = ref("");
const searchQuery = ref('');
const restoStore = useCartStore();
const restaurants = ref([]);
const act = ref(true);
const MenuOpen = ref(false);
const isMobileMenuOpen = ref(false);
const isSubmenuOpen = ref(false);
const isSubmenu = ref(false);
const activeDropdown = ref(null);

const redirectAndReload =()=> {
      
      window.location.reload(); // Force le rechargement de la page
    }

const resto = computed(() => store.getRestaurant());

const toggleMobileMenu =()=> {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    }

const reloading = () => {
  window.history.go();
}


const handleClickOutside = (event) => {
  if (dropdownContainer.value && !dropdownContainer.value.contains(event.target)) {
    activeDropdown.value = null; // Ferme tous les dropdowns
    isDropdownOpen1.value = false;
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

const toggleSubmenu =() => {
      isSubmenuOpen.value = !isSubmenuOpen.value;
    }
    const toggle =() => {
      isSubmenu.value = !isSubmenu.value;
    }

// const searchRestaurant = () => {
//   const query = searchQuery.value;
  
  
//   if (!restoStore.restoMemory) {
//     console.error("La mémoire des restaurants est vide.");
//     return;
//   }

//   if (!query.trim()) {
//     restaurants.value = restoStore.restoMemory;
//   } else {
//     restaurants.value = restoStore.restoMemory.filter(Item =>
//       Item.address &&  (Item.name.toLowerCase().includes(query.toLowerCase()) || Item.address.toLowerCase().includes(query.toLowerCase())));
//     restoStore.restoSearch = restaurants.value;
//     router.push("/search");
//   }
//   console.log("------------",restoStore.restoSearch)
// };


const toggleDropdown1 = () => {
    isDropdownOpen1.value = !isDropdownOpen1.value;
}

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
}

const open = () => {
  active1.value = !active1.value;
  errorMessage.value = '';
};
const close = () => {
  active1.value = !active1.value;
  email1.value = '';
  password1.value = '';
};



const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}

const Menu = () => {
    MenuOpen.value = !MenuOpen.value;
}



const validateFields = () => {
  if (!email1.value) {
    errorMessage.value = "Email is required.";
    return false;
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (!emailPattern.test(email1.value)) { 
    errorMessage.value = "Please enter a valid email address.";
    return false;
  }
  
  if (!password1.value) {
    errorMessage.value = "Password is required.";
    return false;
  }
  
  if (password1.value.length < 6) {
    errorMessage.value = "The password must contain at least 6 characters.";
    return false;
  }
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
    const response = await axios.post("https://proj-bdjg.onrender.com/users/login", {
      Email: email1.value,
      Password: password1.value,
    });

    store.setUser(response.data.data);
     const restaurants = response.data.data.Restaurants; 
    console.log("Restaurants récupérés :", restaurants);
    store.setRestaurant(restaurants);
    close();
    router.push("/"); 
    localStorage.setItem("userEmail1",userStore.userInfo.email ); 
    email1.value = '';
    password1.value = '';
    errorMessage.value = ""; 


  } catch (error) {
    console.error("Erreur de connexion :", error);
  if (error.code === 'auth/invalid-email') {
    errorMessage.value = "The email address you entered is invalid. Please check your email.";
  } else if (error.code === 'auth/wrong-password') {
    errorMessage.value = "The password entered is incorrect.";
  } else if (error.code === 'auth/user-not-found') {
    errorMessage.value = "No user found with this email.";
  } else if (error.code === 'auth/invalid-credential') {
    errorMessage.value = "The credentials provided are invalid. Please try again.";
  }else if (error.code === 'auth/network-request-failed') {
    errorMessage.value = "no internet access. Please try again.";
  }
  else {
    errorMessage.value = error.message || "connection error";
  }
  } finally {
            isLoading.value = false; 
        }
};

const isEditor = computed(() => {
      const user = store.getUser();
      return user && user.role === 'editor';
    });


const user = computed(() => ({
  isLoggedIn: !!userStore.userInfo,
  email: userStore.userInfo ? userStore.userInfo.email : '',
  
}));


// Récupérer l'email de l'utilisateur depuis le localStorage au chargement du composant
onMounted(() => {
  const storedEmail = localStorage.getItem("userEmail1");
  if (storedEmail) {
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



const searchRestaurant = () => { 
  const query = searchQuery.value;  
    if (!query.trim()) {
      restoStore.resto = restoStore.restoMemory;
    } else {
      restoStore.resto = restoStore.restoMemory.filter((item) => item.address &&  (item.name.toLowerCase().includes(query.toLowerCase()) || item.address.toLowerCase().includes(query.toLowerCase())));
        // ((item.name )|| (item.address)).toLowerCase().startsWith(query.toLowerCase()));
    }
  };



</script>
