<script setup lang="ts">
import { defineProps } from 'vue';
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
}>();

</script>


<template>
  <section class="py-12 px-4 bg-black">
    <div class="container mx-auto relative">
      <div class="flex items-center mb-6">
        <div class="w-1 h-6 bg-red-600 mr-3"></div>
        <h2 class="text-2xl md:text-3xl font-bold">{{ header }}</h2>
      </div>

      <VideoCard :items="props.videoList"></VideoCard>

    </div>
  </section>
</template>


<style scoped></style>