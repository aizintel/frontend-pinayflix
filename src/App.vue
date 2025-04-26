<script setup lang="ts">
import Header from './components/Header.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ScrollToTopButton from './components/buttons/ScrollToTopButton.vue';
import Hero from './components/Hero.vue';
import Latest from './components/Latest.vue';
import Footer from './components/Footer.vue';
import Trending from './components/Trending.vue';


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
  <div id="app">
    <header>
      <Header />
    </header>

    <main class="min-h-screen bg-black text-white">
      <section>
        <Hero />
      </section>

      <section aria-labelledby="latest">
        <Latest />
      </section>

      <section aria-labelledby="trending">
        <Trending />
      </section>

      <ScrollToTopButton :onHandleScroll="isScrolled" :onClickScroll="scrollToTop" />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
