<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from '../components/Header.vue';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';
import Footer from '../components/Footer.vue';
import Hero from '../components/heros/Hero.vue';

const router = useRouter();

// Sample categories - replace with your actual categories
const categories = ref([
  { id: 1, name: 'Most Viewed', slug: 'most-viewed', icon: '👁️' },
  { id: 2, name: 'Latest Videos', slug: 'latest', icon: '🆕' },
  { id: 3, name: 'Top Rated', slug: 'top-rated', icon: '⭐' },
  { id: 4, name: 'Trending', slug: 'trending', icon: '🔥' },
  { id: 5, name: 'Featured', slug: 'featured', icon: '🏆' },
  { id: 6, name: 'Amateur', slug: 'amateur', icon: '📱' },
  { id: 7, name: 'Professional', slug: 'professional', icon: '🎬' },
  { id: 8, name: 'Short Videos', slug: 'short', icon: '⏱️' },
  { id: 9, name: 'Long Videos', slug: 'long', icon: '⏳' },
  { id: 10, name: 'HD Quality', slug: 'hd', icon: '📺' },
  { id: 11, name: '4K Quality', slug: '4k', icon: '🎮' },
  { id: 12, name: 'Verified', slug: 'verified', icon: '✅' }
]);

// Active category (if any)
const activeCategory = ref<string | null>(null);

// Navigate to category
const navigateToCategory = (slug: string) => {
  router.push(`/pinay/${slug}/1`);
  activeCategory.value = slug;
};
</script>

<template>
  <div id="app">
    <header>
      <Header />
    </header>

    <main class="min-h-screen bg-black text-white">
      <section>
        <Hero />
      </section>

      <!-- Categories Section -->
      <section class="container mx-auto px-4 py-8">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-center">Categories</h2>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div 
            v-for="category in categories" 
            :key="category.id"
            class="cursor-pointer transition-all duration-300 transform hover:scale-105"
            @click="navigateToCategory(category.slug)"
          >
            <div 
              class="bg-gray-900 border border-gray-800 rounded-lg p-4 h-full flex flex-col items-center justify-center text-center hover:bg-gray-800 hover:border-red-500"
              :class="{ 'bg-red-600/20 border-red-500': activeCategory === category.slug }"
            >
              <div class="text-3xl mb-2">{{ category.icon }}</div>
              <h3 class="font-medium">{{ category.name }}</h3>
            </div>
          </div>
        </div>
      </section>

      <!-- Popular Categories -->
      <section class="container mx-auto px-4 py-8">
        <h2 class="text-2xl md:text-3xl font-bold mb-6">Popular Categories</h2>
        
        <div class="flex flex-wrap gap-2 mb-8">
          <button
            v-for="(category, index) in categories.slice(0, 6)"
            :key="index"
            class="btn btn-sm md:btn-md bg-transparent border border-gray-600 text-white hover:bg-red-600/30 hover:border-red-500 transition-all"
            :class="{ 'bg-red-600 border-red-600': activeCategory === category.slug }"
            @click="navigateToCategory(category.slug)"
          >
            {{ category.name }}
          </button>
        </div>
      </section>

      <!-- Featured Category -->
      <section class="container mx-auto px-4 py-8">
        <div class="bg-gradient-to-r from-red-900/20 to-black rounded-lg p-6 border border-red-900/30">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-center md:text-left">
              <h2 class="text-2xl md:text-3xl font-bold mb-2">Featured Category</h2>
              <p class="text-gray-400 mb-4">Explore our most popular content</p>
              <button 
                class="btn bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700"
                @click="navigateToCategory('featured')"
              >
                Browse Featured
              </button>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3">
              <div class="aspect-video bg-gray-800 rounded-lg overflow-hidden border border-gray-700 relative">
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-5xl">🏆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Recently Viewed Categories -->
      <section class="container mx-auto px-4 py-8 mb-12">
        <h2 class="text-2xl md:text-3xl font-bold mb-6">Recently Viewed</h2>
        
        <div class="join flex flex-wrap justify-center items-center gap-1 sm:gap-2">
          <button
            v-for="(category, index) in categories.slice(0, 4)"
            :key="index"
            class="join-item btn btn-sm sm:btn-md md:btn-lg bg-transparent border border-gray-600 text-white hover:bg-red-600/30 hover:border-red-500 transition-all"
            @click="navigateToCategory(category.slug)"
          >
            {{ category.name }}
          </button>
        </div>
      </section>

      <ScrollToTopButton />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>