


<template>
    <div class="relative">
      <!-- Left Arrow (hidden on mobile) -->
      <button
        @click="scrollLeft"
        class="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-black/80 to-transparent p-2 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
  
      <!-- Right Arrow (hidden on mobile) -->
      <button
        @click="scrollRight"
        class="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-black/80 to-transparent p-2 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
  
      <!-- Scrollable Container -->
      <div ref="scrollContainer" class="overflow-x-auto scroll-smooth no-scrollbar">
        <div class="flex gap-4 w-max py-4 px-2">
          <div v-for="item in items" :key="item.img" class="flex-shrink-0 w-56 sm:w-64 group">
            <div class="relative overflow-hidden rounded-lg">
              <img
                :src="item.img"
                :alt="item.title"
                class="w-full h-48 sm:h-[325px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <button class="btn btn-circle bg-red-600 hover:bg-red-700 border-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                  </svg>
                </button>
              </div>
            </div>
            <h3 class="mt-2 text-sm font-medium truncate text-center">{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
  });
  
  const scrollContainer = ref(null);
  
  const scrollLeft = () => {
    scrollContainer.value.scrollBy({ left: -300, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    scrollContainer.value.scrollBy({ left: 300, behavior: 'smooth' });
  };
  </script>
  
  <style scoped>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  </style>
  