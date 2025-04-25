<script lang="ts">
export default {
  data() {
    return {
      isScrolled: false, // Track if the page is scrolled
    };
  },
  mounted() {
    // Add scroll event listener when the component is mounted
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Remove the event listener when the component is unmounted (Vue 3 lifecycle)
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
};
</script>

<template>
  <div class="header sticky top-0">
    <div class="section w-full relative overflow-hidden">
      <!-- Navbar with dynamic background -->
      <nav class="top-0 left-0 w-full z-30">
        <div :class="['w-full z-20', isScrolled ? 'bg-black/80' : 'bg-transparent']">
          <div class="navbar px-5">
            <div class="navbar-start text-3xl">
              <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul tabindex="0" class="menu menu-sm dropdown-content bg-black/80 text-white rounded-box mt-3 w-52 p-2 shadow z-30">
                  <li><a>Catagalog</a></li>
                  <li>
                    <a>Popuplar</a>
                    <ul class="p-2">
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </li>
                  <li><a>Latest</a></li>
                </ul>
              </div>
              <a class="text-4xl font-semibold">Pinayflix</a>

            </div>

            <div class="navbar hidden lg:flex lg:gap-2 text-2xl">
              <ul class="menu menu-horizontal px-1 text-white">
                <li><a>Most viewed</a></li>
                <li>
                  <details>
                    <summary>Popuplar</summary>
                    <ul class="p-2 bg-black/80 rounded-box">
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </details>
                </li>
                <li><a>Longest</a></li>
              </ul>
            </div>

            <div class="navbar-end mr-5">
              <button class="btn btn-ghost btn-circle text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <section class="mt-48 p-3 ml-10">
          <div class="content">
            <h1></h1>
            <p>Isang tikim lang nainlove agad - PINAYFLIX SEX VIDEOS</p>
          </div>
        </section>
      </nav>
      
    </div>
  </div>
</template>

<style scoped>
.section {
  height: 528px;
}

nav {
  background-image: url('../assets/image.png');
  border-image: fill 0 linear-gradient(#0001, #000);
  background-size: cover;
  background-position: center;
  height: 528px;
  color: #ffff;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6); /* Shadow effect around the image */
  height: 105%;
  font-family: 'NetflixSansBold', sans-serif;
}

nav.sticky {
  position: sticky;
  top: 0;
  z-index: 9999;
}

nav img {
  width: 100%;
  height: 101;
  object-fit: cover;
}

.sticky.nav {
  opacity: 0;
}

.navbar ul li {
  margin-right: 30px; /* Adjust the spacing as needed */
}

section {
  font-family: 'NetflixSansLight', sans-serif;
}

section .content {
  font-size: 1.5rem;
}

</style>
