<script setup lang="ts">

import { useRouter } from 'vue-router';
const router = useRouter();

function watchVideo(video?: string, author?: string, title?: string) {
  router.push({
    name: "stream",
    query: {
      video: video ?? '',
      author: author ?? '',
      title: title ?? ''
    }
  });
}

</script>

<template>
  <!-- Hero Section with Background Image -->
  <div class="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat overflow-hidden"
    style="background-image: url('https://pinayflix.me/wp-content/uploads/2024/07/Flex-ni-madam-ang-kanyang-pepe.jpg');">
    <!-- Overlay gradient for better text visibility -->
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"></div>

    <!-- Hero Content -->
    <div class="absolute bottom-0 left-0 w-full pb-16 md:pb-24 px-6 md:px-12">
      <div class="container mx-auto max-w-5xl">
        <h1 class="text-2xl md:text-3xl font-bold mb-4 text-white">Flex ni madam ang kanyang pepe - PINAYFLIX SEX VIDEOS
        </h1>
        <p class="text-xl md:text-2xl font-medium mb-6 text-gray-200">PINAYFLIX Love VIDEOS</p>

        <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm md:text-base text-gray-300">
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 mr-2 text-red-500">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            Date: July 8, 2024
          </p>
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 mr-2 text-red-500">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            From: UPLOADER XXX
          </p>
        </div>

        <!-- Call to action buttons -->
        <div class="flex flex-wrap gap-4 mt-8">
          <button
            @click="watchVideo('https://pinayflix.top/wp-content/uploads/2024/07/Flex-ni-madam-ang-kanyang-pepe.mp4', 'From: UPLOADER XXX', 'Flex ni madam ang kanyang pepe - PINAYFLIX SEX VIDEOS')"
            class="btn bg-red-600 hover:bg-red-700 text-white border-none px-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>

            Play Now
          </button>
          <!-- Future use -->
          <!-- <button class="btn bg-gray-800 hover:bg-gray-700 text-white border-none px-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              My List
            </button> -->
        </div>
      </div>
    </div>
  </div>
</template>
