<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import HeroBanner from '../components/heros/HeroBanner.vue';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';
import SliderContent from '../components/slider/ContentSlider.vue';
import { mostViewServices } from '../services/most-viewed.service';

interface Video {
  title: string;
  img: string;
  video: string;
  author: string;
  date: string;
  link: string;
}

interface MostViewedService {
  getMostVideosByPage: (page: string) => Promise<any>;
  videoList: Video[];
  totalPages: string;
}

const bannerHeader = ref<string | null>(null);
const bannerImage = ref<string | null>(null);
const bannerVideo = ref<string | null>(null);
const bannerAuthor = ref<string | null>(null);

const route = useRoute();
const pageParam = route.params.page;
const page = Array.isArray(pageParam) ? pageParam[0] : '1';

let mostViewService = {} as MostViewedService;

const setRandomBanner = (videoList: Video[]) => {
  if (!videoList.length) return;

  const randomVideo = videoList[Math.floor(Math.random() * videoList.length)];
  bannerHeader.value = randomVideo.title;
  bannerImage.value = randomVideo.img;
  bannerVideo.value = randomVideo.video;
  bannerAuthor.value = randomVideo.author;
};

const fetchVideos = async (page: string) => {
  try {
    const data = await mostViewService.getMostVideosByPage(page);
    console.log(data);

    setRandomBanner(mostViewService.videoList as Video[]);
  } catch (e) {
    console.log('Error in fetch', e);
  }

};

onMounted(async () => {
  mostViewService = mostViewServices() as MostViewedService;
  await fetchVideos(page);
});

watch(
  () => route.params.page,
  async (newPage) => {
    const resolvedPage = Array.isArray(newPage) ? newPage[0] : (newPage || '1');
    await fetchVideos(resolvedPage);
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
