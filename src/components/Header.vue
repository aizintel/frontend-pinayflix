<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  
  // Prevent scrolling when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

// Close mobile menu when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  
  if (isMobileMenuOpen.value && mobileMenu && hamburgerBtn && 
      !mobileMenu.contains(event.target as Node) && 
      !hamburgerBtn.contains(event.target as Node)) {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';
  }
};

// Close mobile menu when route changes
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
  document.documentElement.style.scrollBehavior = 'smooth';
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
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
        <div class="navbar py-4 flex items-center justify-between">

          <div class="flex items-center gap-4">
            <!-- Improved Hamburger Button -->
            <button 
              id="hamburger-btn"
              class="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
              @click="toggleMobileMenu"
              aria-label="Menu"
              :aria-expanded="isMobileMenuOpen"
            >
              <span 
                :class="[
                  'block w-6 h-0.5 bg-white rounded-full transition-all duration-300',
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                ]"
              ></span>
              <span 
                :class="[
                  'block w-6 h-0.5 bg-white rounded-full transition-all duration-300 my-1',
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                ]"
              ></span>
              <span 
                :class="[
                  'block w-6 h-0.5 bg-white rounded-full transition-all duration-300',
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                ]"
              ></span>
            </button>

            <router-link to="/" class="text-3xl md:text-4xl font-bold tracking-tight text-white" @click="closeMobileMenu">
              PINAYFLIX
            </router-link>

            <!-- Desktop Navigation -->
            <div class="hidden lg:flex">
              <ul class="menu menu-horizontal text-lg font-medium">
                <li>
                  <router-link to="/pinay/category" class="px-4 hover:bg-red-600/30 rounded-lg transition-colors">
                    Category
                  </router-link>
                </li>
                <li>
                  <router-link to="/pinay/most-viewed" class="px-4 hover:bg-red-600/30 rounded-lg transition-colors">
                    Most Viewed
                  </router-link>
                </li>
                <li>
                  <router-link to="/pinay/most-longest" class="px-4 hover:bg-red-600/50 rounded-lg transition-colors">
                    Most Longest
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex items-center">
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

    <!-- Improved Mobile Menu -->
    <div 
      id="mobile-menu"
      :class="[
        'fixed inset-0 bg-black/95 z-40 lg:hidden transition-all duration-300 ease-in-out',
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      ]"
    >
      <div class="container mx-auto px-4 pt-20 pb-6">
        <nav class="flex flex-col space-y-2">
          <router-link 
            to="/pinay/category" 
            class="text-xl font-medium py-3 px-4 border-l-4 border-transparent hover:border-red-600 hover:bg-red-600/20 rounded-r-lg transition-all duration-200"
            :class="{ 'border-red-600 bg-red-600/10': $route.path.includes('/category') }"
            @click="closeMobileMenu"
          >
            Category
          </router-link>
          <router-link 
            to="/pinay/most-viewed" 
            class="text-xl font-medium py-3 px-4 border-l-4 border-transparent hover:border-red-600 hover:bg-red-600/20 rounded-r-lg transition-all duration-200"
            :class="{ 'border-red-600 bg-red-600/10': $route.path.includes('/most-viewed') }"
            @click="closeMobileMenu"
          >
            Most Viewed
          </router-link>
          <router-link 
            to="/pinay/most-longest" 
            class="text-xl font-medium py-3 px-4 border-l-4 border-transparent hover:border-red-600 hover:bg-red-600/20 rounded-r-lg transition-all duration-200"
            :class="{ 'border-red-600 bg-red-600/10': $route.path.includes('/most-longest') }"
            @click="closeMobileMenu"
          >
            Most Longest
          </router-link>
        </nav>

        <!-- Additional Mobile Menu Items -->
        <div class="mt-8 border-t border-gray-800 pt-6">
          <h3 class="text-gray-400 text-sm uppercase font-medium mb-4 px-4">Quick Links</h3>
          <div class="grid grid-cols-2 gap-2">
            <router-link 
              to="/pinay/trending" 
              class="py-2 px-4 bg-gray-900/50 hover:bg-red-600/20 rounded-lg transition-all text-center"
              @click="closeMobileMenu"
            >
              Trending
            </router-link>
            <router-link 
              to="/pinay/latest" 
              class="py-2 px-4 bg-gray-900/50 hover:bg-red-600/20 rounded-lg transition-all text-center"
              @click="closeMobileMenu"
            >
              Latest
            </router-link>
            <router-link 
              to="/pinay/featured" 
              class="py-2 px-4 bg-gray-900/50 hover:bg-red-600/20 rounded-lg transition-all text-center"
              @click="closeMobileMenu"
            >
              Featured
            </router-link>
            <router-link 
              to="/pinay/top-rated" 
              class="py-2 px-4 bg-gray-900/50 hover:bg-red-600/20 rounded-lg transition-all text-center"
              @click="closeMobileMenu"
            >
              Top Rated
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Optional: Add a subtle animation for the mobile menu links */
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

#mobile-menu nav a {
  animation: fadeInRight 0.3s ease-out forwards;
  animation-delay: calc(var(--index, 0) * 0.1s);
}

#mobile-menu nav a:nth-child(1) { --index: 1; }
#mobile-menu nav a:nth-child(2) { --index: 2; }
#mobile-menu nav a:nth-child(3) { --index: 3; }
</style>