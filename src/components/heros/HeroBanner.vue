<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  header?: string;
  text?: string | null;
  image?: string | null;
  author?: string | null;
  video?: string | null;
}>();

function watchVideo(video?: string | null, author?: string | null, title?: string | null) {
  router.push({ 
    name: "stream", 
    query: { 
      video: video ?? '', 
      author: author ?? '', 
      title: title ?? '' 
    } 
  });
}

const loading = ref(true);
watch(
  () => props.image,
  async (newImage) => {
    if (newImage) {
      loading.value = false;
    }
  },
  { immediate: true } 
);
</script>

<template>
  <div class="relative w-full h-[70vh] mb-12">
    <div  class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>

    <!-- Show image if available, else show loading state with pulse -->
    <img
      v-if="!loading && props.image"
      :src="props.image"
      alt="Hero Banner"
      class="w-full h-full object-cover"
    />
    <!-- Show a pulse animation if loading -->
    <div
      v-else
      class="w-full h-full flex items-center justify-center animate-pulse bg-gray-200"
    >
     ]
    </div>

    <div v-if="!loading && props.image" class="absolute bottom-0 left-0 z-20 p-6 md:p-12 w-full">
      <!-- Show header with pulse effect if still loading -->
      <h1
        v-if="props.header"
        class="text-3xl md:text-5xl font-bold mb-2"
        :class="{ 'animate-pulse': loading }"
      >
        {{ props.header }}
      </h1>
      
      <!-- Show text with pulse effect if still loading -->
      <p
        v-if="props.text"
        class="text-lg md:text-xl mb-4 max-w-2xl"
        :class="{ 'animate-pulse': loading }"
      >
        {{ props.text }}
      </p>

      <button  @click="watchVideo(props.video, props.author, props.text)" class="btn bg-red-600 hover:bg-red-700 text-white border-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clip-rule="evenodd"
          />
        </svg>
        Watch Now
      </button>
    </div>
  </div>
</template>
