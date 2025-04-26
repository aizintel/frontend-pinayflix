<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.documentElement.style.scrollBehavior = 'smooth';
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  document.documentElement.style.scrollBehavior = '';
});

</script>

<template>

  <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300">
    <div :class="[
      'w-full transition-all duration-300 ease-in-out',
      isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
    ]">
      <div class="container mx-auto px-4">
        <div class="navbar py-4">
          <div class="navbar-start">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabindex="0"
                class="menu menu-sm dropdown-content bg-black/95 text-white rounded-box mt-3 w-60 p-3 shadow-lg z-30">
                <li><a class="py-2 hover:bg-red-600/50 rounded-lg transition-colors">Catalog</a></li>
                <li><a class="py-2 hover:bg-red-600/50 rounded-lg transition-colors">Trending</a></li>
                <li><a class="py-2 hover:bg-red-600/50 rounded-lg transition-colors">Movies</a></li>
                <li><a class="py-2 hover:bg-red-600/50 rounded-lg transition-colors">Settings</a></li>
              </ul>
            </div>
            <a class="text-3xl md:text-4xl font-bold tracking-tight ml-2 text-white">PINAYFLIX</a>
          </div>

          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal text-lg font-medium">
              <li><a class="px-4 hover:bg-red-600/30 rounded-lg transition-colors">Catalog</a></li>
              <li><a class="px-4 hover:bg-red-600/30 rounded-lg transition-colors">Trending</a></li>
              <li><a class="px-4 hover:bg-red-600/30 rounded-lg transition-colors">Movies</a></li>
              <li><a class="px-4 hover:bg-red-600/30 rounded-lg transition-colors">Settings</a></li>
            </ul>
          </div>

          <div class="navbar-end">
            <button class="btn btn-ghost btn-circle text-white hover:bg-red-600/30 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>


</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>