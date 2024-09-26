<template>
    <div class="bg-gray-50">
      <div class=" sticky top-0 z-50">
    <Header/>
</div>
  <div class="flex flex-col items-center uppercase">
    <h1 class="text-4xl font-extrabold text-orange-500">Nom du Restaurant</h1>
    <span class="text-gray-950">Horaires du restaurant</span>
  </div>
  <div class="py-10"></div>
  
    <span
      class="text-orange-500 uppercase font-semibold text-lg mx-auto px-8 pb-10 pt-5"
      >Détails de la commande</span
    >

    <div class="relative overflow-x-auto py-5">
      <table
        class="lg:w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-orange-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Menu choisi</th>
            <th scope="col" class="px-6 py-3">Quantité</th>
            <th scope="col" class="px-6 py-3">Prix</th>
            <th scope="col" colspan="2" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Nom Menu(detail)
            </th>
            <td class="px-6 py-4">
              <form class="max-w-xs mx-auto flex flex-col items-center">
                <label
                  for="counter-input"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                ></label>
                <div class="relative flex items-center">
                  <button
                    type="button"
                    @click.prevent="decrementation"
                    id="decrement-button"
                    data-input-counter-decrement="counter-input"
                    class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="count"
                    data-input-counter
                    class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                    placeholder=""
                    v-model="count"
                    required
                  />
                  <button
                    type="button"
                    @click.prevent="incrementation"
                    id="increment-button"
                    data-input-counter-increment="counter-input"
                    class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </td>
            <td class="px-6 py-4">2000 fcfa</td>
            <td class="px-6 py-4">
              <button>Edit</button>
            </td>
            <td><button>supprimer</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-between px-8 pb-10">
      <h1>TOTAL</h1>
      <h1>FCFA</h1>
    </div>
    <div class="flex flex-col items-center">
      <RouterLink
        to="/tab1"
        class="px-3 py-1 text-sm font-medium text-center text-white bg-orange-700 rounded-full hover:bg-white border hover:text-orange-700 hover:border-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
      >
        Continuez la selection
      </RouterLink>
    </div>
  
  <div class="py-10"></div>
  
    <span
      class="text-orange-500 mx-auto md:text-center uppercase font-semibold text-lg px-8 py-5"
      >Choisissez votre methode de paiement</span
    >
    <hr class="py-2" />
    <ul
      class="w-full text-sm px-8 mx-auto font-medium text-gray-900 bg-white border border-orange-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <li
        class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
      >
        <div class="flex items-center ps-3">
          <input
            id="list-radio-id"
            type="radio"
            value=""
            name="list-radio"
            class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="list-radio-id"
            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Payer avec OM</label
          >
        </div>
      </li>
      <li
        class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600"
      >
        <div class="flex items-center ps-3">
          <input
            id="list-radio-military"
            type="radio"
            value=""
            name="list-radio"
            class="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="list-radio-military"
            class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Paiement à la livraison</label
          >
        </div>
      </li>
    </ul>

    <div class="py-10"></div>

    
      <span
        class="text-orange-500 uppercase text-lg font-semibold mx-auto px-8 py-5"
        >Info additionnelles</span
      >
      <hr class="py-2" />

      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Nom</label
          >
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Numéro de téléphone</label
          >
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Adresse
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Note</label
        >
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-blue-500"
          placeholder="pas de piment..."
        ></textarea>
      </form>
    

    <div class="flex flex-col items-center py-20">
      <RouterLink
        to=""
        class="px-3 py-5 text-sm font-medium text-center text-white bg-orange-700 rounded-full hover:bg-white border hover:text-orange-700 hover:border-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
      >
        Passez votre commande
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from '../components/Header.vue';
  
const count = ref(0);
const decrementation = () => {
  count.value--;
};
const incrementation = () => {
  count.value++;
};
</script>

<style></style>
