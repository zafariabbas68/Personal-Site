<template>
  <div class="portfolio-home">
    <!-- Simple header -->
    <header style="background: #2C5530; padding: 1rem 0; position: fixed; top: 0; width: 100%; z-index: 1000;">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
        <NuxtLink to="/" style="color: white; text-decoration: none; font-weight: bold;">
          Ghulam Abbas Zafari
        </NuxtLink>
        <nav>
          <NuxtLink to="/" style="color: white; margin-left: 1rem; text-decoration: none;">Home</NuxtLink>
          <NuxtLink to="/about" style="color: white; margin-left: 1rem; text-decoration: none;">About</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Simple hero section -->
    <section style="padding: 8rem 0 4rem; text-align: center; background: linear-gradient(135deg, #2C5530, #1a3c27); color: white;">
      <div class="container">
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Geoinformatics Engineer</h1>
        <p style="font-size: 1.2rem; margin-bottom: 2rem;">Transforming spatial data into actionable insights</p>
        <NuxtLink to="/contact" style="background: #2E86AB; color: white; padding: 0.8rem 2rem; text-decoration: none; border-radius: 4px;">
          Get In Touch
        </NuxtLink>
      </div>
    </section>

    <!-- Simple content -->
    <section style="padding: 4rem 0;">
      <div class="container">
        <h2 style="text-align: center; margin-bottom: 2rem;">Test Page - No Errors</h2>
        <p style="text-align: center;">If this page loads without errors, the issue is in your original index.vue file.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Simple SEO meta at top level
useSeoMeta({
  title: 'Test Page - Geoinformatics Engineer',
  description: 'Test page to check for Vue composition errors',
})
</script>

<style scoped>
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.portfolio-home {
  font-family: 'Poppins', sans-serif;
}
</style>
