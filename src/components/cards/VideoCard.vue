<script setup lang="ts">

interface VideoCardProps {
  title?: string;
  img: string;
  link?: string;
  video?: string;
  date?: string;
  author?: string;
}


const props = defineProps<VideoCardProps>()
</script>

<template>
   <!-- Video Cards Horizontal Scroll -->
   <div class="flex overflow-x-auto pb-6 gap-4 hide-scrollbar">
          <div class="flex-shrink-0 w-[250px] relative group">
            <div class="relative overflow-hidden rounded-lg">
              <!-- Thumbnail -->
              <img :src="props.img" :alt="props.title"
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
            <h3 class="mt-2 text-sm font-medium truncate">{{ props.title }}</h3>
          </div>
        </div>
</template>
