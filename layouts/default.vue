<!-- layouts/default.vue -->
<template>
  <div class="layout">
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
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
}
</style>