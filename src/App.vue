<script setup>

import Aos from 'aos';
import Footer from './components/Footer.vue';
//import Head from './components/Head.vue';
import restaurateur from './views/restaurateur.vue';

import { onMounted } from 'vue';


onMounted( async () => {
 Aos.init() ;
}
)

</script>

<template>


<restaurateur/>
  <div>



  <router-view/>
  <div class="mx-auto">
  <Footer/>
  
</div>
</div>


</template>







<style>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>

