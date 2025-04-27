<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import BannerCard from '../cards/BannerCard.vue';

const router = useRouter();
const route = useRoute();

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
    page?: string;
    totalPages?: number;
    pathName?: string;
}>();

const loading = ref(true);
const totalPages = ref<number | null>(null);

const currentPage = computed(() => {
    if (route.params.page && typeof route.params.page === 'string') {
        return parseInt(route.params.page, 10);
    }

    if (props.page) {
        return parseInt(props.page, 10);
    }
    return 1;
});

watch([() => props.items, () => props.totalPages], ([newItems, newTotalPages]) => {
    if (newItems && newItems.length > 0) {
        loading.value = false;
    }
    if (newTotalPages !== undefined) {
        totalPages.value = newTotalPages;
    }
}, { immediate: true });

const visiblePages = computed(() => {
    if (!totalPages.value) return [];

    const maxVisible = 5;
    const halfVisible = Math.floor(maxVisible / 2);

    let startPage = Math.max(1, currentPage.value - halfVisible);
    let endPage = Math.min(totalPages.value, startPage + maxVisible - 1);


    if (endPage === totalPages.value) {
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
});

const showStartEllipsis = computed(() => visiblePages.value[0] > 1);
const showEndEllipsis = computed(() => {
    return totalPages.value !== null && visiblePages.value[visiblePages.value.length - 1] < totalPages.value;
});

const changePage = (page: number) => {

    if (page < 1 || (totalPages.value !== null && page > totalPages.value)) {
        return;
    }

    if (page !== currentPage.value) {
        loading.value = true;
        router.push({ name: props.pathName, params: { page: page } });

    }
};

const goToPrevPage = () => {
    if (currentPage.value > 1) {
        changePage(currentPage.value - 1);
    }
};


const goToNextPage = () => {
    if (totalPages.value === null || currentPage.value < totalPages.value) {
        changePage(currentPage.value + 1);
    }
};

// watch(
//     () => route.fullPath,
//     () => {
//         window.scrollTo(0, 0);
//     }
// );

// onMounted(() => {
//     window.scrollTo(0, 0);
// });
</script>

<template>
    <section class="container mx-auto px-4 mb-12">
        <div class="flex items-center justify-between mb-4"></div>

        <div v-if="loading">
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                <div v-for="index in 20" :key="index" class="animate-pulse">
                    <div class="relative overflow-hidden rounded-lg">
                        <div class="w-full h-[325px] bg-gray-300 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <BannerCard :items="items" :header="header" />
        </div>
    </section>


    <div class="flex justify-center items-center mb-10 px-4">
        <div class="join flex flex-wrap justify-center items-center gap-1 sm:gap-2">

            <button
                class="join-item btn btn-sm sm:btn-md md:btn-lg bg-transparent border border-gray-600 text-white hover:bg-red-600/30 hover:border-red-500 transition-all"
                :disabled="currentPage <= 1" @click="goToPrevPage">
                <span class="hidden sm:inline">Prev</span>
                <span class="sm:hidden">←</span>
            </button>


            <template v-if="showStartEllipsis">
                <button
                    class="join-item btn btn-sm sm:btn-md md:btn-lg bg-transparent border border-gray-600 text-white hover:bg-red-600/30 hover:border-red-500 transition-all"
                    @click="changePage(1)">
                    1
                </button>
                <span
                    class="join-item btn btn-sm sm:btn-md md:btn-lg bg-transparent text-white border-none pointer-events-none">...</span>
            </template>


            <button v-for="pageNum in visiblePages" :key="pageNum"
                class="join-item btn btn-sm sm:btn-md md:btn-lg transition-all" :class="{
                    'bg-red-600 text-white border-red-600 hover:bg-red-700 hover:border-red-700': pageNum === currentPage,
                    'bg-transparent border border-gray-600 text-white hover:bg-red-600/30 hover:border-red-500': pageNum !== currentPage
                }" @click="changePage(pageNum)">
                {{ pageNum }}
            </button>


            <template v-if="showEndEllipsis && totalPages">
                <span
                    class="join-item btn btn-sm sm:btn-md md:btn-lg bg-transparent text-white border-none pointer-events-none">...</span>
                <button
                    class="join-item btn btn-sm sm:btn-md md:btn-lg bg-transparent border border-gray-600 text-white hover:bg-red-600/30 hover:border-red-500 transition-all"
                    @click="changePage(totalPages)">
                    {{ totalPages }}
                </button>
            </template>

            <button
                class="join-item btn btn-sm sm:btn-md md:btn-lg bg-transparent border border-gray-600 text-white hover:bg-red-600/30 hover:border-red-500 transition-all"
                :disabled="totalPages !== null && currentPage >= totalPages" @click="goToNextPage">
                <span class="hidden sm:inline">Next</span>
                <span class="sm:hidden">→</span>
            </button>
        </div>
    </div>
</template>