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


const scrollLeft = (): void => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: -450,
      behavior: 'smooth',
    });
  }
};


const scrollRight = (): void => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: 450,
      behavior: 'smooth',
    });
  }
};

const props = defineProps<{
  items: VideoItem[];  
}>();


</script>

<template>
      <span @click="scrollLeft" class="PinayFlexCard_leftarrow"><svg xmlns="http://www.w3.org/2000/svg" width="28"
          height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
          stroke-linejoin="round" class="mb-4">
          <path d="m15 18-6-6 6-6"></path>
        </svg></span>
      <span @click="scrollRight" class="PinayFlexCard_rightarrow"><svg xmlns="http://www.w3.org/2000/svg" width="28"
          height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
          stroke-linejoin="round" class="mb-4">
          <path d="m9 18 6-6-6-6"></path>
        </svg></span>


      <div ref="scrollContainer" class="overflow-x-auto hide-scrollbar no-scrollbar scroll-smooth">
        <div class="flex gap-4 w-max">
          <div v-for="item in props.items" :key="item.img" class="flex-shrink-0 w-[250px] relative group">
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

<style scoped>
.PinayFlexCard_leftarrow {
  position: absolute;
  display: flex;
  left: -.6px;
  align-items: center;
  height: 90%;
  z-index: 7;
  background: linear-gradient(90deg, #000, rgba(0, 0, 0, .02));
  transition: all .3s ease-out !important;
  cursor: pointer;
}

.PinayFlexCard_rightarrow {
  position: absolute;
  display: flex;
  align-items: center;
  height: 90%;
  right: -.6px;
  z-index: 9;
  background: linear-gradient(270deg, #000, rgba(0, 0, 0, .02));
  transition: all .3s ease-out !important;
  cursor: pointer;
}
</style>