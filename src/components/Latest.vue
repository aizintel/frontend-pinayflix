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
// Sample data for video cards

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
  // ... Add the rest of the items here
])



</script>

<template>
       <!-- Latest Section -->
       <section class="py-12 px-4 bg-black">
      <div class="container mx-auto">
        <div class="flex items-center mb-6">
          <div class="w-1 h-6 bg-red-600 mr-3"></div>
          <h2 class="text-2xl md:text-3xl font-bold">Trending Now</h2>
        </div>
       

             <!-- Video Cards Horizontal Scroll -->
             <div class="flex overflow-x-auto pb-6 gap-4 hide-scrollbar">
          <div v-for="item in videoList" :key="item.img" class="flex-shrink-0 w-[250px] relative group">
            <div class="relative overflow-hidden rounded-lg">
              <!-- Thumbnail -->
              <img :src="item.img" :alt="item.title"
                class="w-full h-[140px] object-cover transition-transform duration-300 group-hover:scale-110" />

              <!-- Play overlay on hover -->
              <div
                class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button class="btn btn-circle bg-red-600 hover:bg-red-700 border-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Title -->
            <h3 class="mt-2 text-sm font-medium truncate">{{ item.title }}</h3>
          </div>
        </div>
        
          <!-- <VideoCard 
          v-for="item in videoList" :key="item.img"
          :title="item.title" :img="item.img" :video="item.video" :date="item.date" :author="item.author" :link="item.link" /> -->
        
      </div>
    </section>
</template>