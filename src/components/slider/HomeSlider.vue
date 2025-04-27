<script setup lang="ts">
import { defineProps, watch, ref } from 'vue';
import VideoCard from '../cards/VideoCard.vue';

interface VideoItem {
  title?: string;
  img?: string;
  link?: string;
  video?: string;
  date?: string;
  author?: string;
}

const props = defineProps<{
  videoList: VideoItem[];
  header?: string;
  loading?: boolean;
}>();


const loading = ref(true);

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

watch(() => props.videoList, (newVal, oldVal) => {
  if (newVal && newVal.length > 0 && oldVal !== newVal) {
    loading.value = false;
  }
}, { immediate: true });

</script>

<template>
  <section class="py-12 px-4 bg-black">
    <div class="container mx-auto relative">
      <div class="flex items-center mb-6">
        <div class="w-1 h-6 bg-red-600 mr-3"></div>
        <h2 class="text-2xl md:text-3xl font-bold">{{ header }}</h2>
      </div>

      <template v-if="props.videoList.length">
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
      </template>

      <div ref="scrollContainer" class="overflow-x-auto hide-scrollbar no-scrollbar scroll-smooth">
        <div class="flex gap-4 w-max">

          <div v-if="loading" v-for="_ in 9" class="flex-shrink-0 w-[250px] relative group">
            <div class="relative overflow-hidden rounded-lg">
              <div class="w-full h-50 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>
          </div>

          <div v-else>
            <VideoCard :items="props.videoList"></VideoCard>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.PinayFlexCard_leftarrow {
  position: absolute;
  display: flex;
  left: -.6px;
  align-items: center;
  height: 80%;
  z-index: 7;
  background: linear-gradient(90deg, #000, rgba(0, 0, 0, .02));
  transition: all .3s ease-out !important;
  cursor: pointer;
}

.PinayFlexCard_rightarrow {
  position: absolute;
  display: flex;
  align-items: center;
  height: 80%;
  right: -.6px;
  z-index: 7;
  background: linear-gradient(270deg, #000, rgba(0, 0, 0, .02));
  transition: all .3s ease-out !important;
  cursor: pointer;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
