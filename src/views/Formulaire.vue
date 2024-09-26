<template>

<div class="  ">
    <section class="w-full bg-cover  bg-center bg-no-repeat bg-[url('assets/image.jpg')] ">




  <div>

<form @submit.prevent="Enregistrer" class=" z-50 max-w-sm mx-auto shadow md:translate-x-full border rounded-lg pb-10 px-8 bg-white border-orange-700  ">
  
<h1 class="my-5 text-xl font-semibold flex text-orange-500 flex-col items center underline">Do you already have an account ?</h1>

<hr class="py-2">

<div class="mb-5  ">
<label class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Restaurant's logo</label>
        <div class="flex flex-col items-center pb-5">

  <input type="file" @change="onFileChange" accept="image/*" name="logo"  />

</div>
  </div>  
  <div class=" flex-col py-1 grid md:grid-cols-2 md:gap-6">
  <div class="mb-5  ">
    <label for="address" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Restaurant Address</label>

    <input type="text" id="address" v-modal="address" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Entez restaurant address" required />
    
</div>
<div class="mb-5">
    <label for="nom" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Restaurant's Name</label>
    <input type="text" id="nom" v-modal="name" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Exemple: liv's-PIZZA" required />
  </div>
</div>

  <div class="mb-5">
    <label for="site" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Website</label>
    <input type="text" id="site" v-model="site" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="www.nmmml.com "  />
  </div>

  <div class="grid md:grid-cols-2 md:gap-6">
  <div class="mb-5">
    <label for="nom1" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">FirstName</label>
    <input type="text" id="nom1" v-model="firstname" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Entez your name" required />
  </div>
  <div class="mb-5">
    <label for="prenom" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">LastName</label>
    <input type="text" id="prenom" v-model="lastname" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Entez your lastname" required />
  </div>
</div>
<div class=" flex-col py-1 grid md:grid-cols-2 md:gap-6">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id="email" v-model="email" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="name@gmail.com" required />
  </div>
  <div class="mb-5">
    <div class="mb-5">
    <label for="pass" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Password</label>
    <input type="password" id="pass" v-model="password" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="Entez your password" required />
  </div>
</div>
    <label for="numero" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Phone number</label>
    <input type="tel" id="numero" v-model="phone" class="bg-white border border-orange-300 text-orange-900 text-md rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-white dark:border-orange-600 dark:placeholder-gray-400 dark:text-orange-500 dark:focus:ring-orange-500 dark:focus:border-orange-500" placeholder="697778855" required />
  </div>
<div class ="mb-5">
  <label class="block text-gray-900 text-lg font-semibold mb-2 dark:text-white">Type of service</label>
          <select v-model="service"  class=" appearance-none border rounded-lg w-full  border-orange-300 py-2 px-3 text-gray-700 p-2.5 leading-tight focus:outline-none focus:shadow-outline" required>
            <option  value="" disabled>Select an option</option>
            <option  value="reservation">Reservation</option>
            <option value="Delivery">Delivery</option>
            <option value="Delivery and Reservation">Delivery and Reservation</option>
          </select>

</div>

<div class="flex flex-col items-center mt-10">

  <RouterLink to="" class="inline-flex items-center px-3 py-2 text-lg  font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-white border hover:text-orange-700 hover:border-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            Register

        </RouterLink>

</div>

<p v-if="erreur" class="text-red-500">{{ erreur }}</p>
</form>
</div>
    </section>
    </div>
</template>
<script setup >
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from "vue-router";



  /*
  const selectedFile = ref(null);
const message = ref('');
const onFileChange = (event) => {
  selectedFile.value = event.target.files[0];
}
const uploadImage = async () => {
 // if (!selectedFile.value) return;
  const formData = new FormData();
  formData.append('logo', selectedFile.value);

  try {
    const response = await axios.post ('http://localhost:3001/restaurants/form', formData );
    const data = await response.json();
console.log(response.data)
    message.value = data.message;
  } catch (error) {
    console.error('Erreur lors du téléchargement:', error);
    message.value = 'Échec du téléchargement.';
  }
};*/
   
const successMessage = ref('');
 const router = useRouter(); // Initialiser le routeur

    const email = ref('');
    const password = ref('');
    const firstname = ref('');
    const lastname = ref('');
    const phone = ref('');
    const address = ref('');
    const erreur = ref(null);
    const service = ref ('');
    const site = ref ('');
    const name = ref ('');
    

    const Enregistrer = async () => {

      try {
        const response = await axios.post('http://localhost:3001/restaurants/form', {
            Email: email.value,
            Password: password.value,
            FirstName : firstname.value,
            LastName : lastname.value,
            Phone : phone.value,
            Address : address.value,
            Service : service.value,
            Website : site.value,
            Name : name.value,
            
        });

        
        
    // Traitement de la réponse (par exemple, stockage du token ou des données utilisateur ici)
        console.log(response.data);

// Redirection vers la page d'accueil ou tableau de bord après connexion réussie
//successMessage.value = "Inscription réussie ! Vous pouvez maintenant vous connecter.";
alert ("Inscription réussie ! Vous pouvez maintenant vous connecter.")
        // Redirection vers la page de connexion ou autre
router.push('/'); 

      } 
      catch (error) {
        if (error.response) {
          erreur.value = error.response.data.message || 'Erreur lors de l\'inscription';
        } else {
          erreur.value = 'Erreur d\' Enregistrement';
        }
      }
    };



    


</script>