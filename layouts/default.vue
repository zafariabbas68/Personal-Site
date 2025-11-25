<!-- layouts/default.vue -->
<template>
  <div class="layout">
    <Navigation />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from '~/components/Layout/Navigation.vue'
import Footer from '~/components/Layout/Footer.vue'
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding-top: 80px; /* Add padding to account for fixed header */
}
</style>