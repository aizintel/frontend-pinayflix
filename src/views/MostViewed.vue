<script setup lang="ts">
import { ref } from 'vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import HeroBanner from '../components/heros/HeroBanner.vue';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';
import BannerCard from '../components/cards/BannerCard.vue';

interface VideoItem {
  title?: string;
  img?: string;
  link?: string;
  video?: string;
  date?: string;
  author?: string;
}

const videoList = ref<VideoItem[]>([
  {
    title: "Sinubo ang batuta ni pinsan - PINAYFLIX SEX VIDEOS",
    img: "https://pinayflix.me/wp-content/uploads/2025/04/Sinubo-ang-batuta-ni-pinsan.jpg",
    link: "https://pinayflix.me/sinubo-ang-batuta-ni-pinsan/",
    video: "https://pinaydeepweb.xyz/wp-content/uploads/2025/04/Sinubo-ang-batuta-ni-pinsan.mp4",
    date: "Date: April 25, 2025",
    author: "From: UPLOADER XXX"
  },
  {
    title: "Sinubo ang batuta ni pinsan - PINAYFLIX SEX VIDEOS",
    img: "https://pinayflix.me/wp-content/uploads/2025/04/Sinubo-ang-batuta-ni-pinsan.jpg",
    link: "https://pinayflix.me/sinubo-ang-batuta-ni-pinsan/",
    video: "https://pinaydeepweb.xyz/wp-content/uploads/2025/04/Sinubo-ang-batuta-ni-pinsan.mp4",
    date: "Date: April 25, 2025",
    author: "From: UPLOADER XXX"
  },
  {
    title: "Sinubo ang batuta ni pinsan - PINAYFLIX SEX VIDEOS",
    img: "https://pinayflix.me/wp-content/uploads/2025/04/Sinubo-ang-batuta-ni-pinsan.jpg",
    link: "https://pinayflix.me/sinubo-ang-batuta-ni-pinsan/",
    video: "https://pinaydeepweb.xyz/wp-content/uploads/2025/04/Sinubo-ang-batuta-ni-pinsan.mp4",
    date: "Date: April 25, 2025",
    author: "From: UPLOADER XXX"
  },
  {
    title: "Sinubo ang batuta ni pinsan - PINAYFLIX SEX VIDEOS",
    img: "https://pinayflix.me/wp-content/uploads/2025/04/Sinubo-ang-batuta-ni-pinsan.jpg",
    link: "https://pinayflix.me/sinubo-ang-batuta-ni-pinsan/",
    video: "https://pinaydeepweb.xyz/wp-content/uploads/2025/04/Sinubo-ang-batuta-ni-pinsan.mp4",
    date: "Date: April 25, 2025",
    author: "From: UPLOADER XXX"
  },
  {
    title: "Sinubo ang batuta ni pinsan - PINAYFLIX SEX VIDEOS",
    img: "https://pinayflix.me/wp-content/uploads/2025/04/Sinubo-ang-batuta-ni-pinsan.jpg",
    link: "https://pinayflix.me/sinubo-ang-batuta-ni-pinsan/",
    video: "https://pinaydeepweb.xyz/wp-content/uploads/2025/04/Sinubo-ang-batuta-ni-pinsan.mp4",
    date: "Date: April 25, 2025",
    author: "From: UPLOADER XXX"
  },
  {
    title: "Pinatungan si esmar - PINAYFLIX SEX VIDEOS",
    img: "https://pinayflix.me/wp-content/uploads/2025/04/Pinatungan-si-esmar.jpg",
    link: "https://pinayflix.me/pinatungan-si-esmar/",
    video: "https://pinaydeepweb.xyz/wp-content/uploads/2025/04/Pinatungan-si-esmar.mp4",
    date: "Date: April 25, 2025",
    author: "From: UPLOADER XXX"
  },
  {
    title: "Pinapangarap ko noon natikman kuna ngayon - PINAYFLIX SEX VIDEOS",
    img: "https://pinayflix.me/wp-content/uploads/2025/04/Pinapangarap-ko-noon-natikman-kuna-ngayon.jpg",
    link: "https://pinayflix.me/pinapangarap-ko-noon-natikman-kuna-ngayon/",
    video: "https://pinaydeepweb.xyz/wp-content/uploads/2025/04/Pinapangarap-ko-noon-natikman-kuna-ngayon.mp4",
    date: "Date: April 24, 2025",
    author: "From: UPLOADER XXX"
  },
  {
    title: "Pinapangarap ko noon natikman kuna ngayon - PINAYFLIX SEX VIDEOS",
    img: "https://pinayflix.me/wp-content/uploads/2025/04/Pinapangarap-ko-noon-natikman-kuna-ngayon.jpg",
    link: "https://pinayflix.me/pinapangarap-ko-noon-natikman-kuna-ngayon/",
    video: "https://pinaydeepweb.xyz/wp-content/uploads/2025/04/Pinapangarap-ko-noon-natikman-kuna-ngayon.mp4",
    date: "Date: April 24, 2025",
    author: "From: UPLOADER XXX"
  },
  {
    title: "Pinapangarap ko noon natikman kuna ngayon - PINAYFLIX SEX VIDEOS",
    img: "https://pinayflix.me/wp-content/uploads/2025/04/Pinapangarap-ko-noon-natikman-kuna-ngayon.jpg",
    link: "https://pinayflix.me/pinapangarap-ko-noon-natikman-kuna-ngayon/",
    video: "https://pinaydeepweb.xyz/wp-content/uploads/2025/04/Pinapangarap-ko-noon-natikman-kuna-ngayon.mp4",
    date: "Date: April 24, 2025",
    author: "From: UPLOADER XXX"
  },
  {
    title: "Pinapangarap ko noon natikman kuna ngayon - PINAYFLIX SEX VIDEOS",
    img: "https://pinayflix.me/wp-content/uploads/2025/04/Pinapangarap-ko-noon-natikman-kuna-ngayon.jpg",
    link: "https://pinayflix.me/pinapangarap-ko-noon-natikman-kuna-ngayon/",
    video: "https://pinaydeepweb.xyz/wp-content/uploads/2025/04/Pinapangarap-ko-noon-natikman-kuna-ngayon.mp4",
    date: "Date: April 24, 2025",
    author: "From: UPLOADER XXX"
  },
])
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
          <BannerCard :header="'Most viewed'" :items="videoList"></BannerCard>
        </section>
      </section>

      <ScrollToTopButton />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>