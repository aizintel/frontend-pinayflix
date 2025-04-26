<script setup lang="ts">
import { ref, watch } from 'vue';
import BannerCard from '../cards/BannerCard.vue';

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
    header?: string;
}>();

const loading = ref(true);


watch(() => props.items, (newVal, oldVal) => {
    if (newVal && newVal.length > 0 && oldVal !== newVal) {
        loading.value = false;
    }
}, { immediate: true });


</script>

<template>
    <section class="container mx-auto px-4 mb-12">
        <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl md:text-3xl font-bold border-l-4 border-red-600 pl-3">{{ props.header }}</h2>
            <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">View All</a>
        </div>

        <div v-if="loading">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                <div v-for="_ in 20">
                    <div class="relative overflow-hidden rounded-lg">
                        <div class="w-full h-[325px] bg-gray-300 animate-pulse rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <BannerCard :items="items" :header="header"></BannerCard>
        </div>
    </section>
</template>