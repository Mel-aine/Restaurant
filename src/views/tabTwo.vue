<template>
  <div>
    <div class="grid grid-cols-2 gab-4 space-x-5">
        <div
          class="max-w-4xl mx-auto mt-4 relative overflow-x-auto sm:rounded-lg flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div class="flex flex-col items-center px-4 pt-2 pb-5">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="../assets/depo.jpg"
              alt="Bonnie image"
            />
            <h5
              class="mb-1 text-xl font-medium text-orange-500 dark:text-white"
            >
              Restaurant's name
            </h5>
          </div>

          <div class="px-8 mx-auto">
            <dl
              class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
            >
              <div class="flex-col pb-2 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Email address
                </dt>
                <dd class="text-lg font-semibold">yourname@gmail.com</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Restaurant address
                </dt>
                <dd class="text-lg font-semibold">Yaoundé</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Phone number
                </dt>
                <dd class="text-lg font-semibold">688888558</dd>
              </div>
              <div class="flex-col py-1 grid md:grid-cols-2 md:gap-6">
                <dt class="mb-1 text-orange-500 md:text-lg dark:text-gray-400">
                  Site web
                </dt>
                <dd class="text-lg font-semibold">yourname@gmail.com</dd>
              </div>
            </dl>
          </div>

          <div class="flex mt-4 md:mt-6 pb-5">
            <button
              @click="open1"
              class="py-2 px-4 ms-2 text-sm font-medium text-orange-500 focus:outline-none bg-white rounded-lg border border-orange-500 hover:bg-orange-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-700 dark:bg-orange-800 dark:text-white dark:border-orange-600 dark:hover:text-white dark:hover:bg-orange-700"
            >
              Edit
            </button>
          </div>
        
      
    </div>
    <!--horaire-->
    <div>
      <div
        class="max-w-4xl mx-auto hover:bg-gray-100 mt-5 relative overflow-x-auto shadow-md sm:rounded-lg"
      >
        <h1 class="mb-6 uppercase text-gray-950 font-extrabold text-xl">
          Restaurant schedule
        </h1>
        <ul class="bg-white shadow-md rounded-lg">
          <li class="flex justify-between p-4 border-b">
            <span class="font-extrabold text-orange-500 text-lg"
              >Days of the week</span
            >
            <span class="font-extrabold text-orange-500 text-lg">Hours</span>
          </li>
          <li
            v-for="(horaire, index) in horaires"
            :key="index"
            class="flex justify-between p-4 border-b"
          >
            <span class="font-semibold text-gray-900 text-sm">{{
              horaire.jour
            }}</span>
            <span>{{ horaire.heure }}</span>
          </li>
        </ul>
        <div class="flex mt-4 md:mt-6 flex-col items-center pb-5">
          <button
            @click="open3"
            class="py-2 px-4 ms-2 text-sm font-medium text-orange-500 focus:outline-none bg-white rounded-lg border border-orange-500 hover:bg-orange-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-700 dark:bg-orange-500 dark:text-white dark:border-orange-600 dark:hover:text-white dark:hover:bg-orange-700"
          >
            Add schedule
          </button>
        </div>
      </div>
    </div>
</div>
    <!--menu-->
    <div
      class="max-w-4xl mx-auto relative py-20  "
    >
      <h1 class="mb-6 uppercase text-gray-950 font-extrabold text-xl">
        Restaurant Menu
      </h1>
      <table class="min-w-full bg-white border border-orange-300">
        <thead>
          <tr class="bg-gray-100 text-orange-500">
            <th class="py-2 px-4 border-b">Image</th>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Description</th>
            <th class="py-2 px-4 border-b">Price</th>
            <th class="py-2 px-4 border-b">Ctegory</th>
            <th class="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in menu" :key="item.id" class="hover:bg-orange-300">
            <td class="py-2 px-4 border-b">
              <img
                :src="item.image"
                alt="Image de {{ item.name }}"
                class="w-16 h-16 object-cover rounded"
              />
            </td>
            <td class="py-2 px-4 border-b">{{ item.name }}</td>
            <td class="py-2 px-4 border-b">{{ item.description }}</td>
            <td class="py-2 px-4 border-b">{{ item.category }}</td>
            <td class="py-2 px-4 border-b">{{ item.price }} FCFA</td>
          </tr>
        </tbody>
      </table>
      <div class="flex mt-4 md:mt-6 flex-col items-center pb-5">
        <button
          @click="open2"
          class="py-2 px-4 ms-2 text-sm font-medium text-orange-500 focus:outline-none bg-white rounded-lg border border-orange-500 hover:bg-orange-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-700 dark:bg-orange-500 dark:text-white dark:border-orange-600 dark:hover:text-white dark:hover:bg-orange-700"
        >
          Add your menu
        </button>
      </div>
    </div>

    <!-- Main modal -->
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      v-show="active1 == false"
      class="inset-0 bg-gray-950 bg-opacity-50 flex shadow overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h1 class="text-orange-500 font-semibold text-lg translate-x-10">
              Modification form
            </h1>
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
            <form class="space-y-6">
              <label
                class="block mb-2 text-sm font-medium text-orange-500 dark:text-white"
                >Restaurant's logo</label
              >
              <div class="flex flex-col items-center pb-5">
                <img
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="../assets/un.jpg"
                  alt="logo du restaurant"
                />

                <input type="file" id="myFile" name="filename" />
              </div>
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-orange-500 dark:text-white"
                  >Restaurant's name</label
                >
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Sam's Pizza"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-orange-500 dark:text-white"
                  >Email</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  for="site"
                  class="block mb-2 text-sm font-medium text-orange-500 dark:text-white"
                  >Web site</label
                >
                <input
                  type="email"
                  name="site"
                  id="site"
                  placeholder="name@company.com"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-orange-500 dark:text-white"
                  >Phone</label
                >
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="name@company.com"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                class="w-full text-orange-500 bg-white hover:bg-orange-500 hover:text-white border border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Main modal menu -->
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      v-show="active2 == false"
      class="inset-0 bg-gray-950 bg-opacity-50 flex shadow overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h1 class="text-orange-500 font-semibold text-lg translate-x-10">
              Restaurant menu form
            </h1>
            <button
              type="button"
              @click="close2"
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
            <form @submit.prevent="submitForm" class="space-y-6">
              <label
                class="block mb-2 text-sm font-medium text-orange-500 dark:text-white"
                >Dish</label
              >
              <div class="flex flex-col items-center pb-5">
                <img
                  class="w-24 h-24 mb-3 rounded shadow-lg"
                  src="../assets/un.jpg"
                  alt="logo du restaurant"
                />

                <input
                  class="mx-8 translate-x-2"
                  type="file"
                  id="myFile"
                  name="filename"
                />
              </div>

              <label
                for="name"
                class="block text-orange-500 text-sm font-bold mb-2"
                >Name of the dish</label
              >
              <input
                v-model="form.name"
                type="text"
                id="name"
                placeholder="Enter name of the dish"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />

              <div class="mb-4">
                <label
                  for="description"
                  class="block text-orange-500 text-sm font-bold mb-2"
                  >Description</label
                >
                <textarea
                  v-model="form.description"
                  id="description"
                  placeholder="Enter a description"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
              </div>

              <div class="mb-4">
                <label
                  for="price"
                  class="block text-orange-500 text-sm font-bold mb-2"
                  >Price</label
                >
                <input
                  v-model="form.price"
                  type="number"
                  id="price"
                  placeholder="Enter the price"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div class="mb-4">
                <label
                  for="category"
                  class="block text-orange-500 text-sm font-bold mb-2"
                  >Category</label
                >
                <select
                  v-model="form.category"
                  id="category"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                >
                  <option value="" disabled>Select a category</option>
                  <option
                    v-for="category in categories"
                    :key="category"
                    :value="category"
                  >
                    {{ category }}
                  </option>
                </select>
              </div>

              <div class="flex items-center justify-between">
                <button
                  type="submit"
                  class="w-full text-orange-500 bg-white hover:bg-orange-500 hover:text-white border border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Register
                </button>
              </div>
            </form>

            <div
              v-if="submitted"
              class="mt-4 p-4 bg-green-200 text-green-700 rounded"
            >
              Plat soumis avec succès !
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main modal -->
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      v-show="active3 == false"
      class="inset-0 bg-gray-950 bg-opacity-50 flex shadow overflow-y-auto overflow-x-hidden fixed top-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h1 class="text-orange-500 font-semibold text-lg translate-x-10">
              Formulaire d'Horaire du Restaurant
            </h1>
            <button
              type="button"
              @click="close3"
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
          <div class="p-4 max-w-md mx-auto mt-2 md:p-5">
            <form
              @submit.prevent="submitForm1"
              class="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
            >
              <div class="mb-4">
                <label
                  for="day"
                  class="block text-orange-500 text-sm font-bold mb-2"
                  >day</label
                >
                <select
                  v-model="form1.day"
                  id="day"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="" disabled>Sélectionnez un jour</option>
                  <option v-for="day in days" :key="day" :value="day">
                    {{ day }}
                  </option>
                </select>
              </div>

              <div class="mb-4">
                <label
                  for="opening"
                  class="block text-orange-500 text-sm font-bold mb-2"
                  >Opening hours</label
                >
                <input
                  v-model="form1.opening"
                  type="time"
                  id="opening"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div class="mb-4">
                <label
                  for="closing"
                  class="block text-orange-500 text-sm font-bold mb-2"
                  >closing hours</label
                >
                <input
                  v-model="form1.closing"
                  type="time"
                  id="closing"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>

              <div class="flex items-center justify-between">
                <button
                  type="submit"
                  class="w-full text-orange-500 bg-white hover:bg-orange-500 hover:text-white border border-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Register
                </button>
              </div>
            </form>
            <div
              v-if="submitted1"
              class="mt-4 p-4 bg-green-200 text-green-700 rounded"
            >
              Horaire soumis avec succès !
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { RouterLink } from "vue-router";

export default {
  setup() {
    const form = ref({
      name: "",
      description: "",
      price: "",
      category: "",
    });

    const form1 = ref({
      day: "",
      opening: "",
      closing: "",
    });

    const days = [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
    ];
    const submitted1 = ref(false);

    const submitForm1 = () => {
      console.log("Formulaire soumis:", form1.value);
      submitted1.value = true;
      form1.value = { day: "", opening: "", closing: "" }; // Reset form
    };

    const active2 = ref(true);
    const active1 = ref(true);
    const active3 = ref(true);

    const open1 = () => {
      active1.value = !active1.value;
    };
    const close1 = () => {
      active1.value = !active1.active;
    };

    const open2 = () => {
      active2.value = !active2.value;
    };
    const close2 = () => {
      active2.value = !active2.active;
    };

    const open3 = () => {
      active3.value = !active3.value;
    };
    const close3 = () => {
      active3.value = !active3.active;
    };

    const categories = [
      "Plats Africains",
      "Plats Européens",
      "Desserts",
      "Boissons",
    ];
    const submitted = ref(false);

    const submitForm = () => {
      console.log("Formulaire soumis:", form.value);
      submitted.value = true;
      form.value = { name: "", description: "", price: "", category: "" }; // Reset form
    };

    return {
      form,
      categories,
      submitted,
      submitForm,
      active1,
      active2,
      active3,
      close3,
      open3,
      open1,
      open2,
      close1,
      close2,
      form1,
      days,
      submitted1,
      submitForm1,
    };
  },
};
</script>
