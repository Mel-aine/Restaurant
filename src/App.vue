<script setup>

import Aos from 'aos';
import Footer from './components/Footer.vue';
//import Head from './components/Head.vue';
//import Connexion from './views/Connexion.vue';

import { onMounted } from 'vue';


onMounted( async () => {
 Aos.init() ;
}
)

</script>

<template>
  <div>
  
 <div class="sticky top-0 z-50">

</div>


  <router-view/>
  <div class="mx-auto">
  <Footer/>
  
</div>
</div>


</template>







<style>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>

