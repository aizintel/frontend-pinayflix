<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isSearchOpen = ref(false);
const searchQuery = ref('');


const isActive = (path: string) => {
  return route.path.includes(path);
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;


  if (isMobileMenuOpen.value) {
    isSearchOpen.value = false;
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;


  if (isSearchOpen.value) {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';

    setTimeout(() => {
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        searchInput.focus();
      }
    }, 100);
  } else {
    document.body.style.overflow = '';
  }
};


const handleSearch = () => {
  if (searchQuery.value.trim()) {

    console.log('Searching for:', searchQuery.value);

    isSearchOpen.value = false;
    searchQuery.value = '';
  }
};


const handleClickOutside = (event: MouseEvent) => {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const searchContainer = document.getElementById('search-container');
  const searchBtn = document.getElementById('search-btn');

  if (isMobileMenuOpen.value && mobileMenu && hamburgerBtn &&
    !mobileMenu.contains(event.target as Node) &&
    !hamburgerBtn.contains(event.target as Node)) {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';
  }

  if (isSearchOpen.value && searchContainer && searchBtn &&
    !searchContainer.contains(event.target as Node) &&
    !searchBtn.contains(event.target as Node)) {
    isSearchOpen.value = false;
    document.body.style.overflow = '';
  }
};


const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  isSearchOpen.value = false;
  document.body.style.overflow = '';
};


const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    if (isMobileMenuOpen.value || isSearchOpen.value) {
      isMobileMenuOpen.value = false;
      isSearchOpen.value = false;
      document.body.style.overflow = '';
    }
  }

  if ((e.ctrlKey || e.metaKey) && e.key === 's') {
    e.preventDefault();
    toggleSearch();
  }
};

const goToNextRoute = (route: string) => {
  // Programmatically navigate
  // window.location.href = route // Full page reload

  console.log(route)

  // Or, if you want to trigger Vue Router without reloading:
  // this.$router.push('/pinay/most-popular').then(() => {
  //   window.location.reload();
  // });
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeyDown);
  document.documentElement.style.scrollBehavior = 'smooth';
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleKeyDown);
  document.documentElement.style.scrollBehavior = '';
});
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300">
    <div :class="[
      'w-full transition-all duration-300 ease-in-out',
      isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-md' : 'bg-gradient-to-b from-black/80 to-transparent'
    ]">
      <div class="container mx-auto px-4">
        <div class="navbar h-16 md:h-20 flex items-center justify-between">
          <!-- Left Section: Logo and Hamburger -->
          <div class="flex items-center gap-2 md:gap-4">
            <!-- Hamburger Button -->
            <button id="hamburger-btn"
              class="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
              @click="toggleMobileMenu" aria-label="Menu" :aria-expanded="isMobileMenuOpen">
              <span :class="[
                'block w-6 h-0.5 bg-white rounded-full transition-all duration-300',
                isMobileMenuOpen ? 'hidden' : ''
              ]"></span>
              <span :class="[
                'block w-6 h-0.5 bg-white rounded-full transition-all duration-300 my-1',
                isMobileMenuOpen ? 'hidden' : 'opacity-100'
              ]"></span>
              <span :class="[
                'block w-6 h-0.5 bg-white rounded-full transition-all duration-300',
                isMobileMenuOpen ? 'hidden' : ''
              ]"></span>
            </button>

            <!-- Logo -->
            <router-link to="/" class="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center"
              @click="closeMobileMenu">
              <span class="text-red-600">PINAY</span>FLIX
            </router-link>
          </div>

          <!-- Center Section: Navigation -->
          <div class="hidden lg:flex justify-center flex-1 px-4">
            <nav class="flex items-center">
              <ul class="menu menu-horizontal rounded-box p-1 text-lg uppercase">
                <li>
                  <router-link @click="goToNextRoute('/pinay/home')" to="/pinay/home"
                    class="px-4 py-2 font-medium rounded-lg transition-colors"
                    :class="isActive('/pinay/home') ? 'bg-red-600/50 text-white' : 'hover:bg-red-600/30'">
                    Home
                  </router-link>
                </li>
                <li>
                  <router-link @click="goToNextRoute('/pinay/latest')" to="/pinay/latest"
                    class="px-4 py-2 font-medium rounded-lg transition-colors"
                    :class="isActive('/pinay/latest') ? 'bg-red-600/50 text-white' : 'hover:bg-red-600/30'">
                    Latest
                  </router-link>
                </li>

                <li>
                  <router-link @click="goToNextRoute('/pinay/random')" to="/pinay/random"
                    class="px-4 py-2 font-medium rounded-lg transition-colors"
                    :class="isActive('/pinay/random') ? 'bg-red-600/50 text-white' : 'hover:bg-red-600/30'">
                    Random
                  </router-link>
                </li>
                <li>
                  <router-link @click="goToNextRoute('/pinay/most-viewed')" to="/pinay/most-viewed"
                    class="px-4 py-2 font-medium rounded-lg transition-colors"
                    :class="isActive('/most-viewed') ? 'bg-red-600/50 text-white' : 'hover:bg-red-600/30'">
                    Most Viewed
                  </router-link>
                </li>
                <li>
                  <router-link @click="goToNextRoute('/pinay/most-longest')" to="/pinay/most-longest"
                    class="px-4 py-2 font-medium rounded-lg transition-colors"
                    :class="isActive('/most-longest') ? 'bg-red-600/50 text-white' : 'hover:bg-red-600/30'">
                    Most Longest
                  </router-link>
                </li>
                <li>
                  <router-link @click="goToNextRoute('/pinay/most-popular')" to="/pinay/most-popular"
                    class="px-4 py-2 font-medium rounded-lg transition-colors"
                    :class="isActive('/most-popular') ? 'bg-red-600/50 text-white' : 'hover:bg-red-600/30'">
                    Most Popular
                  </router-link>
                </li>

              </ul>
            </nav>
          </div>

          <!-- Right Section: Search -->
          <div class="flex items-center">
            <button id="search-btn"
              class="btn btn-circle bg-transparent border-0 text-white hover:bg-black/30 transition-colors"
              @click="toggleSearch" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Overlay - Styled like the reference image -->
    <div @click="toggleSearch" id="search-container" :class="[
      'fixed inset-0 bg-black/90 z-40 flex items-center justify-center transition-all duration-300 ease-in-out',
      isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    ]">
      <div class="container mx-auto px-4 relative">
        <!-- Exit button for both mobile and desktop -->
        <!-- <button 
          class="absolute top-0 right-4 md:right-8 text-gray-400 hover:text-white p-2 lg:hidden "
          @click="toggleSearch"
          aria-label="Close search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> -->

        <div class="flex flex-col items-center">
          <!-- Keyboard shortcut indicator -->
          <div class="mb-4 flex items-center justify-center text-gray-400 text-sm">
            <span class="mr-2">For quick access :</span>
            <span class="bg-gray-800 px-2 py-0.5 rounded mr-1">CTRL</span>
            <span class="mx-1">+</span>
            <span class="bg-gray-800 px-2 py-0.5 rounded">S</span>
          </div>

          <!-- Search input with reduced width -->
          <div class="w-full max-w-md relative">
            <input id="search-input" v-model="searchQuery" type="text" placeholder="Search videos..."
              class="w-full bg-gray-800 border-0 rounded py-3 px-4 text-white placeholder-gray-400 focus:outline-none text-lg"
              @keydown.enter="handleSearch" />

            <!-- Category indicator -->
            <div class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              Videos
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" :class="[
      'fixed inset-0 bg-black/95 z-40 lg:hidden transition-all duration-300 ease-in-out',
      isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    ]">
      <div class="container mx-auto px-4 pt-20 pb-6">
        <!-- Back button for mobile -->
        <button class="absolute top-4 right-4 text-gray-400 hover:text-white p-2" @click="toggleMobileMenu"
          aria-label="Close menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Main Navigation -->
        <nav class="flex flex-col space-y-1 uppercase">
          <router-link @click="goToNextRoute('/pinay/home'); closeMobileMenu()" to="/pinay/home"
            class="text-xl font-medium py-3 px-4 border-l-4 border-transparent hover:border-red-600 hover:bg-red-600/20 rounded-r-lg transition-all duration-200"
            :class="{ 'border-red-600 bg-red-600/10': isActive('/pinay/home') }">
            Home
          </router-link>
          <router-link @click="goToNextRoute('/pinay/latest'); closeMobileMenu()" to="/pinay/latest"
            class="text-xl font-medium py-3 px-4 border-l-4 border-transparent hover:border-red-600 hover:bg-red-600/20 rounded-r-lg transition-all duration-200"
            :class="{ 'border-red-600 bg-red-600/10': isActive('/pinay/latest') }">
            Latest
          </router-link>
          <router-link @click="goToNextRoute('/pinay/random'); closeMobileMenu()" to="/pinay/random"
            class="text-xl font-medium py-3 px-4 border-l-4 border-transparent hover:border-red-600 hover:bg-red-600/20 rounded-r-lg transition-all duration-200"
            :class="{ 'border-red-600 bg-red-600/10': isActive('/pinay/random') }">
            Random
          </router-link>
          <router-link @click="goToNextRoute('/pinay/most-viewed'); closeMobileMenu()" to="/pinay/most-viewed"
            class="text-xl font-medium py-3 px-4 border-l-4 border-transparent hover:border-red-600 hover:bg-red-600/20 rounded-r-lg transition-all duration-200"
            :class="{ 'border-red-600 bg-red-600/10': isActive('/most-viewed') }">
            Most Viewed
          </router-link>
          <router-link @click="goToNextRoute('/pinay/most-longest'); closeMobileMenu()" to="/pinay/most-longest"
            class="text-xl font-medium py-3 px-4 border-l-4 border-transparent hover:border-red-600 hover:bg-red-600/20 rounded-r-lg transition-all duration-200"
            :class="{ 'border-red-600 bg-red-600/10': isActive('/most-longest') }">
            Most Longest
          </router-link>
          <router-link @click="goToNextRoute('/pinay/most-popular'); closeMobileMenu()" to="/pinay/most-popular"
            class="text-xl font-medium py-3 px-4 border-l-4 border-transparent hover:border-red-600 hover:bg-red-600/20 rounded-r-lg transition-all duration-200"
            :class="{ 'border-red-600 bg-red-600/10': isActive('/pinay/most-popular') }">
            Most Popular
          </router-link>
        </nav>

        <!-- Quick Links Grid
        <div class="mt-8 border-t border-gray-800 pt-6">
          <h3 class="text-gray-400 text-sm uppercase font-medium mb-4 px-4">Quick Links</h3>
          <div class="grid grid-cols-2 gap-2">
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
            <router-link 
              to="/pinay/popular" 
              class="py-2 px-4 bg-gray-900/50 hover:bg-red-600/20 rounded-lg transition-all text-center"
              @click="closeMobileMenu"
            >
              Popular
            </router-link>
          </div>
        </div> -->


      </div>
    </div>
  </header>
</template>

<style scoped>
/* Animation for the mobile menu links */
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

#mobile-menu nav a:nth-child(1) {
  --index: 1;
}

#mobile-menu nav a:nth-child(2) {
  --index: 2;
}

#mobile-menu nav a:nth-child(3) {
  --index: 3;
}

#mobile-menu nav a:nth-child(4) {
  --index: 4;
}

/* Focus styles for accessibility */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #ef4444;
  outline-offset: 2px;
}

/* Remove focus outline for search input */
input:focus {
  outline: none;
}
</style>