<script setup lang="ts">
import { ref } from 'vue';

interface VideoItem {
  title?: string;
  img?: string;
  link?: string;
  video?: string;
  date?: string;
  author?: string;
}

const scrollContainer = ref<HTMLElement | null>(null);

defineProps<{
  items: VideoItem[];
}>();

</script>

<template>

  <div ref="scrollContainer" class="overflow-x-auto hide-scrollbar no-scrollbar scroll-smooth">
    <div class="flex gap-4 w-max">

      <div v-for="(item, index) in items" :key="item.img || index" class="flex-shrink-0 w-[250px] relative group">
        <div class="relative overflow-hidden rounded-lg">
          <img :src="item.img" :alt="item.title"
            class="w-full h-[325px] object-cover transition-transform duration-300 group-hover:scale-110" />
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
        <h3 class="mt-2 text-sm font-medium truncate">{{ item.title }}</h3>




      </div>
    </div>
  </div>
</template>

<style scoped></style>