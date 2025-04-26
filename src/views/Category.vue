<script setup lang="ts">
import Header from '../components/Header.vue'
import ScrollToTopButton from '../components/buttons/ScrollToTopButton.vue';
import Footer from '../components/Footer.vue';
import Hero from '../components/heros/Hero.vue';


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

      <ScrollToTopButton />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>
