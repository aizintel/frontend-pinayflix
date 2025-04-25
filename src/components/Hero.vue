<script lang="ts">
export default {

}
</script>

<template>
  <div class="section w-full relative overflow-hidden mt-5">
    <img src="../assets/image.png" alt="Hero" class="w-full h-132 object-cover brightness-75">

    <!-- Shadows -->
    <div class="absolute inset-0 pointer-events-none z-100 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
    <div class="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
    <div class="absolute inset-0 pointer-events-none z-10 bg-gradient-to-l from-black/60 via-transparent to-transparent"></div>
    <div class="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
  </div>
</template>

<style scoped>
.section {
  height: 528px;
  position: relative;
  overflow: hidden;
 
}
</style>
