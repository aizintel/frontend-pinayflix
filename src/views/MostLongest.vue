<script setup lang="ts">
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import HeroBanner from '../components/heros/HeroBanner.vue';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';
import SliderContent from '../components/slider/SliderContent.vue';


import { longestServices } from '../services/longest.service';
import { onMounted } from 'vue';

const longestService = longestServices();

onMounted(async () => {
    await longestService.getMostlongestVideos();
})

</script>

<template>
  <div id="app">
    <header>
      <Header />
    </header>

    <main class="min-h-screen bg-black text-white">
      <section>
        <HeroBanner :header="'Most Longest'" :text="'Sinubo ang batuta ni pinsan - PINAYFLIX SEX VIDEOS'"></HeroBanner>
      </section>

      <section>
        <section>
          <SliderContent :header="'Most viewed'" :items="longestService.videoList"></SliderContent>
        </section>
      </section>

      <ScrollToTopButton />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>