<script setup lang="ts">
import { onMounted } from 'vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import HeroBanner from '../components/heros/HeroBanner.vue';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';


import { mostViewServices } from '../services/most-viewed';
import SliderContent from '../components/slider/SliderContent.vue';

const mostViewService = mostViewServices();


onMounted(async () => {
 await mostViewService.getMostViewvideos();
})

</script>

<template>
  <div id="app">
    <header>
      <Header />
    </header>

    <main class="min-h-screen bg-black text-white">
      <section>
        <HeroBanner :header="'Most viewed'" :text="'Sinubo ang batuta ni pinsan - PINAYFLIX SEX VIDEOS'"></HeroBanner>
      </section>

      <section>
        <section>
          <SliderContent :header="'Most viewed'" :items="mostViewService.videoList"></SliderContent>
        </section>
      </section>

      <ScrollToTopButton />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>