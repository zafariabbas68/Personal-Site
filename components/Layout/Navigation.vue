<!-- components/Layout/Navigation.vue -->
<template>
  <header class="header">
    <div class="header-content">
      <div class="container nav-container">
        <NuxtLink to="/" class="logo">
          <i class="fas fa-map-marker-alt logo-icon"></i>
          <span>Ghulam Abbas Zafari</span>
        </NuxtLink>

        <nav class="nav-links">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/projects" class="nav-link">Projects</NuxtLink>
          <NuxtLink to="/education" class="nav-link">Education</NuxtLink>
          <NuxtLink to="/experience" class="nav-link">Experience</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
          <NuxtLink to="/contact" class="contact-btn">Contact</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// Navigation logic will be added later
</script>

<style scoped>
.header {
  background: linear-gradient(90deg,
    var(--afghan-black) 0%,
    var(--afghan-black) 33.33%,
    var(--afghan-red) 33.33%,
    var(--afghan-red) 66.66%,
    var(--afghan-green) 66.66%,
    var(--afghan-green) 100%);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.header-content {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 1rem 0;
  backdrop-filter: blur(10px);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--primary-earth);
  text-decoration: none;
}

.logo-icon {
  margin-right: 10px;
  font-size: 1.8rem;
  color: var(--secondary-water);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--neutral-dark);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link:hover {
  color: var(--secondary-water);
}

.contact-btn {
  background: transparent;
  color: var(--secondary-water);
  padding: 0.7rem 1.8rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
  border: 2px solid var(--secondary-water);
  text-decoration: none;
}

.contact-btn:hover {
  background: rgba(46, 134, 171, 0.1);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>