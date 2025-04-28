<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import HeroBanner from '../components/heros/HeroBanner.vue';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';

import { popularServices } from "../services/popular.service"
import SliderContent from '../components/slider/ContentSlider.vue';

interface Video {
  title: string;
  img: string;
  video: string;
  author: string;
}

let bannerHeader = ref<string | null>(null);
let bannerImage = ref<string | null>(null);
let bannerVideo = ref<string | null>(null);
let bannerAuthor = ref<string | null>(null);

const route = useRoute();

const pageParam = route.params.page;
const page = Array.isArray(pageParam) ? pageParam[0] : '1';

const popularService = popularServices();

const fetchVideos = async (page: string) => {
  if (page) {
    await popularService.getPopularVideosByPage(page);


    const video = popularService.videoList[Math.floor(Math.random() * popularService.videoList.length)] as Video;

    bannerHeader.value = video.title;
    bannerImage.value = video.img;
    bannerVideo.value = video.video;
    bannerAuthor.value = video.author;

  } else {
    await popularService.getPopularVideosByPage('1');
    const video = popularService.videoList[Math.floor(Math.random() * popularService.videoList.length)] as Video;


    bannerHeader.value = video.title;
    bannerImage.value = video.img;
    bannerVideo.value = video.video;
    bannerAuthor.value = video.author;
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
        <HeroBanner :header="'Most popular'" :text="bannerHeader" :image="bannerImage" :video="bannerVideo"
          :author="bannerAuthor"></HeroBanner>
      </section>

      <section>
        <SliderContent :header="'Most Popular'" :items="popularService.videoList" :page="page || '1'"
          :totalPages="Number(popularService.totalPages)" :pathName="'most-popular'" />
      </section>

      <ScrollToTopButton />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
