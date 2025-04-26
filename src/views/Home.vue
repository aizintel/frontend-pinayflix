<script setup lang="ts">
import Header from '../components/Header.vue'
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';
import Hero from '../components/heros/Hero.vue';
import Latest from '../components/Latest.vue';
import Popular from '../components/Popular.vue';
import Footer from '../components/Footer.vue';
import Trending from '../components/Trending.vue';



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

      <section aria-labelledby="trending">
        <Popular />
      </section>

      <ScrollToTopButton />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
