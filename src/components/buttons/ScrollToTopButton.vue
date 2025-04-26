<script setup lang="ts">

const { onHandleScroll, onClickScroll } = defineProps<{
  onHandleScroll?: boolean,
  onClickScroll?: () => void,
}>();
</script>

<template>
    <button @click="onClickScroll" v-if="onHandleScroll"
        class="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-80 hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
    </button>
</template>