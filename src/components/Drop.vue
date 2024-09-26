<template>
  <div class="relative w-full overflow-hidden">
    <div
      class="flex transition-transform duration-300"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="min-w-full"
      >
        <img :src="image" alt="Carousel image" class="w-full h-auto" />
      </div>
    </div>

   <button
      @click="prev"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
    >
      &#10094; <!--- Flèche gauche -->
   </button>
    <button
      @click="next"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
    >
      &#10095;  <!--Flèche droite -->
    </button> 

    <div class="absolute top-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
     <!---- <span
        v-for="(image, index) in images"
        :key="index"
        @click="goToIndex(index)"
        class="cursor-pointer w-3 h-3 rounded-full"
        :class="{ 'bg-blue-500': currentIndex === index, 'bg-gray-300': currentIndex !== index }"
      ></span>-->



    </div>


  </div>
</template>

<script>

import {onMounted,defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const currentIndex = ref(0);

    const next = () => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length;
      
    };

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % props.images.length;
      setTimeout(next,4000);
    };

    
    const prev = () => {
      currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
      
    };

    


    const goToIndex = (index) => {
      currentIndex.value = index;
    };
    onMounted(() => {
            setTimeout(nextSlide, 4000); // Start the carousel
        });

    return {
      currentIndex,
      next,
      prev,
      goToIndex,
      nextSlide,
    };
  },
})
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
