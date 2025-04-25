<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Hero from './Hero.vue';
import Latest from './Latest.vue';
import Footer from './Footer.vue'

const isScrolled = ref(false);

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};


// Sample data for video cards
const recentEpisodes = ref([
  {
    id: 1,
    title: 'Ang Huling El Bimbo',
    episode: '9',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Pinayflix+1'
  },
  {
    id: 2,
    title: 'Pagdating ng Panahon',
    episode: '8',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Pinayflix+2'
  },
  {
    id: 3,
    title: 'Hawak Kamay',
    episode: '9',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Pinayflix+3'
  },
  {
    id: 4,
    title: 'Narda',
    episode: '23',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Pinayflix+4'
  },
  {
    id: 5,
    title: 'Magbalik',
    episode: '10',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Pinayflix+5'
  },
  {
    id: 6,
    title: 'Alapaap',
    episode: '22',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Pinayflix+6'
  },
  {
    id: 7,
    title: 'Banal Na Aso',
    episode: '86',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Pinayflix+7'
  }
]);

const trendingNow = ref([
  {
    id: 1,
    title: 'Harana',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Trending+1'
  },
  {
    id: 2,
    title: 'Pare Ko',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Trending+2'
  },
  {
    id: 3,
    title: 'Ligaya',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Trending+3'
  },
  {
    id: 4,
    title: 'Toyang',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Trending+4'
  },
  {
    id: 5,
    title: 'Overdrive',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Trending+5'
  },
  {
    id: 6,
    title: 'Spoliarium',
    thumbnail: 'https://placehold.co/400x225/222/FFF?text=Trending+6'
  },
  {
    id: 7,
    title: 'Minsan',
    thumbnail: 'https://pinayflix.me/wp-content/uploads/2024/07/Flex-ni-madam-ang-kanyang-pepe.jpg'
  }
]);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Add smooth scrolling to the entire page
  document.documentElement.style.scrollBehavior = 'smooth';
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  // Remove smooth scrolling when component is unmounted
  document.documentElement.style.scrollBehavior = '';
});
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Sticky Header -->
    <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <!-- Navbar with dynamic background -->
      <div :class="[
        'w-full transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
      ]">
        <div class="container mx-auto px-4">
          <div class="navbar py-4">
            <!-- Mobile menu and logo -->
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

            <!-- Desktop menu -->
            <div class="navbar-center hidden lg:flex">
              <ul class="menu menu-horizontal text-lg font-medium">
                <li><a class="px-4 hover:bg-red-600/30 rounded-lg transition-colors">Catalog</a></li>
                <li><a class="px-4 hover:bg-red-600/30 rounded-lg transition-colors">Trending</a></li>
                <li><a class="px-4 hover:bg-red-600/30 rounded-lg transition-colors">Movies</a></li>
                <li><a class="px-4 hover:bg-red-600/30 rounded-lg transition-colors">Settings</a></li>
              </ul>
            </div>

            <!-- Search button -->
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



    <Hero></Hero>

    <Latest></Latest>

    <!-- Trending Now Section -->
    <section class="py-12 px-4 bg-black">
      <div class="container mx-auto">
        <div class="flex items-center mb-6">
          <div class="w-1 h-6 bg-red-600 mr-3"></div>
          <h2 class="text-2xl md:text-3xl font-bold">Trending Now</h2>
        </div>

        <!-- Video Cards Horizontal Scroll -->
        <div class="flex overflow-x-auto pb-6 gap-4 hide-scrollbar">
          <div v-for="video in trendingNow" :key="video.id" class="flex-shrink-0 w-[250px] relative group">
            <div class="relative overflow-hidden rounded-lg">
              <!-- Thumbnail -->
              <img :src="video.thumbnail" :alt="video.title"
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
            <h3 class="mt-2 text-sm font-medium truncate">{{ video.title }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Back to top button -->
    <button
      @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-80 hover:opacity-100">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>

    <Footer></Footer>

  </div>
</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>