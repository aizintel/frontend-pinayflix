<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import HeroBanner from '../components/heros/HeroBanner.vue';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';
import SliderContent from '../components/slider/ContentSlider.vue';
import { latestServices } from '../services/latest.service';

interface Video {
  title: string;
  img: string;
  video: string;
  author: string;
  date: string;
  link: string;
}

interface LatestService {
  getLatestVideosByPage: (page: string) => Promise<any>;
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

const latestService = latestServices() as LatestService;

const setRandomBanner = (videoList: Video[]) => {
  if (!videoList.length) return;

  const randomVideo = videoList[Math.floor(Math.random() * videoList.length)];
  bannerHeader.value = randomVideo.title;
  bannerImage.value = randomVideo.img;
  bannerVideo.value = randomVideo.video;
  bannerAuthor.value = randomVideo.author;
};

const fetchVideos = async (page: string) => {
  const data = await latestService.getLatestVideosByPage(page);
  console.log(data);
  setRandomBanner(latestService.videoList as Video[]);
  //update
};

onMounted(async () => {
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
        <HeroBanner :header="'latest'" :text="bannerHeader" :image="bannerImage" :video="bannerVideo"
          :author="bannerAuthor"></HeroBanner>
      </section>

      <section>
        <SliderContent :header="'Most Longest'" :items="latestService.videoList" :page="page || '1'"
          :totalPages="Number(latestService.totalPages)" :pathName="'latest'" />
      </section>

      <ScrollToTopButton />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
