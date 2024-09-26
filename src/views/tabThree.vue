<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl  mb-6 text-orange-500 font-semibold  flex flex-col items-center">Le suivi des commandes</h1>
    <table class="min-w-full bg-white border border-orange-500  text-center">
      <thead>
        <tr class="text-orange-500 ">
          <th class="py-2 px-4 border-b">ID Command</th>
          <th class="py-2 px-4 border-b">Customers Name</th>
          <th class="py-2 px-4 border-b">Statut</th>
          <th class="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id " class="hover:bg-orange-200 ">
          <td class="py-2 px-4 border-b ">{{ order.id }}</td>
          <td class="py-2 px-4 border-b">{{ order.customerName }}</td>
          <td class="py-2 px-4 border-b">{{ order.status }}</td>
          <td class="py-2 px-4 border-b">
            <button
              v-if="order.status !== 'Terminé'"
              @click="markAsCompleted(order.id)"
              class="bg-gray-300 text-gray-950 px-2 py-1 rounded"
            >
              Marquer comme Terminé
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const orders = ref([
      { id: 1, customerName: 'Alice', status: 'En cours' },
      { id: 2, customerName: 'Bob', status: 'En cours' },
      { id: 3, customerName: 'Charlie', status: 'Terminé' },
    ]);

    const markAsCompleted = (id) => {
      const order = orders.value.find(order => order.id === id);
      if (order) {
        order.status = 'Terminé';
      }
    };

    return {
      orders,
      markAsCompleted,
    };
  },
};
</script>

<style>
/* Ajouter ici des styles personnalisés si nécessaire */
</style>
