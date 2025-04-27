<script setup lang="ts">

import { useRouter } from 'vue-router';
import { streamServices } from '../../services/stream.service';

const router = useRouter();

const streamService = streamServices();

interface VideoItem {
  title?: string;
  img?: string;
  link?: string;
  video?: string;
  date?: string;
  author?: string;
}

const props = defineProps<{
  items: VideoItem[];  
}>();

function watchVideo(video?: string, author?: string, title?: string) {
  streamService.setVideoList(props.items);
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
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    <div v-for="item in props.items" :key="item.img" class="transition-transform duration-300 hover:scale-105">
      <div class="relative rounded-lg overflow-hidden group">
 <button @click="watchVideo(item.video, item.author, item.title)">

        <img :src="item.img" :alt="'image'" class="w-full h-76 aspect-[2/3] object-cover" />
        
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div class="p-3">
            <h3 class="text-sm md:text-base font-semibold line-clamp-2">{{ item.title }}</h3>
            <div class="flex items-center gap-2 mt-2">
             
             <button class="btn btn-xs btn-circle bg-red-600 hover:bg-red-700 border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </button>
      </div>
      <h3 class="text-sm mt-2 line-clamp-1 sm:hidden md:hidden lg:hidden">{{ item.title }}</h3>
    </div>
  </div>
</template>

