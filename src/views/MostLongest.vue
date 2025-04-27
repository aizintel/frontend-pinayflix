<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import HeroBanner from '../components/heros/HeroBanner.vue';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';

import { mostViewServices } from '../services/most-viewed';
import SliderContent from '../components/slider/ContentSlider.vue';

const route = useRoute();

const pageParam = route.params.page;
const page = Array.isArray(pageParam) ? pageParam[0] : '1'; 

const mostViewService = mostViewServices();

const fetchVideos = async (page: string) => {
  if (page) {
    await mostViewService.getMostVideosByPage(page);
  } else {
    await mostViewService.getMostViewvideos();
  }
};

onMounted(async () => {
  await fetchVideos(page);
});

watch(
  () => route.params.page,
  async (newPage) => {
    await fetchVideos(newPage as string);
  }
);
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
        <SliderContent :header="'Most Longest'" :items="mostViewService.videoList" :page="page || '1'"
          :totalPages="Number(mostViewService.totalPages)" :pathName="'most-longest'" />
      </section>

      <ScrollToTopButton />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
