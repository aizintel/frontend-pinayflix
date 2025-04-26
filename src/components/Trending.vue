<script setup lang="ts">
import { ref } from 'vue';
import VideoCard from './cards/VideoCard.vue';


interface VideoItem {
  title?: string;
  img: string;
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
  <section class="py-12 px-4 bg-black">
    <div class="container mx-auto relative">
      <div class="flex items-center mb-6">
        <div class="w-1 h-6 bg-red-600 mr-3"></div>
        <h2 class="text-2xl md:text-3xl font-bold">Trending Now</h2>
      </div>

     <VideoCard :items="videoList"></VideoCard>
   
    </div>
  </section>
</template>


<style scoped>

</style>