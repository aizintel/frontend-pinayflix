<script setup lang="ts">
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import HeroBanner from '../components/heros/HeroBanner.vue';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';
import BannerCard from '../components/cards/BannerCard.vue';


import { popularServices } from '../services/popular.service';
import { onMounted } from 'vue';

const popularService = popularServices();

onMounted(async () => {
    await popularService.getPopularVideos();
})

</script>

<template>
  <div id="app">
    <header>
      <Header />
    </header>

    <main class="min-h-screen bg-black text-white">
      <section>
        <HeroBanner :header="'Most Popular'" :text="'Sinubo ang batuta ni pinsan - PINAYFLIX SEX VIDEOS'"></HeroBanner>
      </section>

      <section>
        <section>
          <BannerCard :header="'Most popular'" :items="popularService.videoList"></BannerCard>
        </section>
      </section>

      <ScrollToTopButton />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>