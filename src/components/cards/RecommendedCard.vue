<script setup lang="ts">

import { useRouter } from 'vue-router';
const router = useRouter();

interface VideoItem {
  title?: string;
  img?: string;
  link?: string;
  video?: string;
  date?: string;
  author?: string;
}

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

defineProps<{
  videoList: VideoItem[];
}>();
</script>

<template>
      <h3 class="text-lg font-medium">Recommended</h3>
    
      <div v-for="item in videoList" :key="item.img" class="flex space-x-2">
        <button @click="watchVideo(item.video, item.author, item.title)">
               <img :src="item.img" class="w-40 h-24 bg-gray-800 rounded-md flex-shrink-0">
              </button>
                <div>
                  <h4 class="font-medium text-sm">{{ item.title }}</h4>
                  <p class="text-xs text-gray-400">{{ item.author }}</p>
                  <p class="text-xs text-gray-400">250K views • 1 week ago</p>
                </div>
               
              </div>
      
</template>