<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import HeroBanner from '../components/heros/HeroBanner.vue';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';

import { mostViewServices } from '../services/most-viewed';
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

const mostViewService = mostViewServices();

const fetchVideos = async (page: string) => {
  if (page) {
    const data = await mostViewService.getMostVideosByPage(page);
    console.log(data);

    const video = mostViewService.videoList[Math.floor(Math.random() * mostViewService.videoList.length)] as Video;

    bannerHeader.value = video.title;
    bannerImage.value = video.img;
    bannerVideo.value = video.video;
    bannerAuthor.value = video.author;

  } else {
    const data = await mostViewService.getMostVideosByPage('1');
    console.log(data);
    const video = mostViewService.videoList[Math.floor(Math.random() * mostViewService.videoList.length)] as Video;
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
        <HeroBanner :header="'Most viewed'" :text="bannerHeader" :image="bannerImage" :video="bannerVideo"
          :author="bannerAuthor"></HeroBanner>
      </section>

      <section>
        <SliderContent :header="'Most viewed'" :items="mostViewService.videoList" :page="page || '1'"
          :totalPages="Number(mostViewService.totalPages)" :pathName="'most-viewed'" />
      </section>

      <ScrollToTopButton />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
