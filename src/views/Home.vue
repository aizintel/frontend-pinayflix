<script setup lang="ts">
import Header from '../components/Header.vue';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';
import Hero from '../components/heros/Hero.vue';
import Footer from '../components/Footer.vue';

import { homeServices } from '../services/home.service';
import { popularServices } from '../services/popular.service';
import { onMounted } from 'vue';

import HomeSlider from '../components/slider/HomeSlider.vue';

// interface Video {
//   title: string;
//   img: string;
//   video: string;
//   author: string;
// }

// let bannerHeader = ref<string | null>(null);
// let bannerImage = ref<string | null>(null);
// let bannerVideo = ref<string | null>(null);
// let bannerAuthor = ref<string | null>(null);

const popularService = popularServices();
const homeService = homeServices();

onMounted(async () => {
    try {

        await popularService.getPopularVideos(),
            await homeService.getHomeVideos()


    } catch (error) {
        if (error instanceof Error) {
            console.error("An error occurred:", error.message);
        } else {
            console.error("Unknown error:", error);
        }
    }
});
</script>



<template>
    <div id="app">
        <header>
            <Header />
        </header>

        <main class="min-h-screen bg-black text-white">
            <section>
                <Hero />
            </section>

            <section aria-labelledby="latest">
                <HomeSlider :videoList="homeService.videoList" :header="'Now latest'" />
            </section>

            <section aria-labelledby="popular">
                <HomeSlider :videoList="popularService.videoList" :header="'Now Popular'" />
            </section>



            <ScrollToTopButton />
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
</template>
