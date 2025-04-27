<script setup lang="ts">

const props = defineProps<{
  header?: string,
  text?: string  
}>();

</script>

<template>
    <div class="relative w-full h-[70vh] mb-12">
        <div class="absolute inset-0 min-h-screen bg-gradient-to-t from-black via-black/80 to-black/10 z-10"></div>
        <img src="https://pinayflix.me/wp-content/uploads/2025/04/Sinubo-ang-batuta-ni-pinsan.jpg" alt="Hero Banner"
            class="w-full h-full object-cover" />
        <div class="absolute bottom-0 left-0 z-20 p-6 md:p-12 w-full">
            <h1 class="text-3xl md:text-5xl font-bold mb-2">{{ props.header }}</h1>
            <p class="text-lg md:text-xl mb-4 max-w-2xl">{{ props.text }}</p>
            <button class="btn bg-red-600 hover:bg-red-700 text-white border-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clip-rule="evenodd" />
                </svg>
                Watch Now
            </button>
        </div>
    </div>
</template>
