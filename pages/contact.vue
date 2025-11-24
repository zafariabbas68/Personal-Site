<!-- pages/contact.vue -->
<template>
  <div class="contact-page">
    <!-- Navigation -->
    <header>
      <div class="header-content">
        <div class="container nav-container">
          <NuxtLink to="/" class="logo">
            <span class="logo-icon"><i class="fas fa-map-marked-alt"></i></span>
            <span>Ghulam Abbas Zafari</span>
          </NuxtLink>
          <ul class="nav-links" :class="{ active: isMenuOpen }" id="navLinks">
  <li><NuxtLink to="/" data-i18n="home">Home</NuxtLink></li>
  <li><NuxtLink to="/about" data-i18n="about">About</NuxtLink></li>
  <li><NuxtLink to="/projects" data-i18n="projects">Projects</NuxtLink></li>
  <li><NuxtLink to="/education" data-i18n="education">Education</NuxtLink></li>
  <li><NuxtLink to="/experience" data-i18n="experience">Experience</NuxtLink></li>
  <!-- ADD THIS LINE HERE -->
  <li><NuxtLink to="/blog" data-i18n="blog">Blog</NuxtLink></li>
  <li class="language-selector">
    <div class="language-dropdown">
      <button class="language-btn">
        <i class="fas fa-globe"></i>
        <span class="current-language">{{ currentLanguage.toUpperCase() }}</span>
        <i class="fas fa-chevron-down" style="font-size: 0.8rem; margin-left: 5px;"></i>
      </button>
      <ul class="language-options">
        <li :class="{ active: currentLanguage === 'en' }" @click="changeLanguage('en')">
          <span class="language-flag">🇺🇸</span>
          English
        </li>
        <li :class="{ active: currentLanguage === 'it' }" @click="changeLanguage('it')">
          <span class="language-flag">🇮🇹</span>
          Italiano
        </li>
        <li :class="{ active: currentLanguage === 'fa' }" @click="changeLanguage('fa')">
          <span class="language-flag">🇮🇷</span>
          فارسی
        </li>
      </ul>
    </div>
  </li>
  <li><NuxtLink to="/contact" class="contact-btn active" data-i18n="contact">Contact</NuxtLink></li>
</ul>
          <div class="menu-toggle" @click="toggleMenu">
            <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </div>
        </div>
      </div>
    </header>

    <main>
      <!-- Page Header -->
      <section class="page-header">
        <div class="container">
          <h1 data-i18n="contact_title">Get In Touch</h1>
          <p data-i18n="contact_subtitle">Ready to discuss your next geospatial project? I'm here to help bring your ideas to life with innovative mapping solutions.</p>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="container">
          <div class="contact-content">
            <div class="contact-info">
              <h2 data-i18n="contact_info">Contact Information</h2>
              <ul>
                <li>
                  <i class="fas fa-envelope"></i>
                  <span>ghulamabbas.zafari@gmail.com</span>
                </li>
                <li>
                  <i class="fas fa-phone"></i>
                  <span>(+39) 379-138-7487</span>
                </li>
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="address-container">
                    <span data-i18n="address">Via Vittorio Veneto 22, 20091 Bresso, Italy</span>
                    <a href="https://www.google.com/maps/place/Via+Vittorio+Veneto,+22,+20091+Bresso+MI,+Italy" target="_blank" class="address-link">
                      <i class="fas fa-map-marked-alt"></i>
                      <span>View on Google Maps</span>
                    </a>
                  </div>
                </li>
              </ul>

              <!-- Enhanced Availability Section -->
              <div class="availability">
                <h3>Available For New Projects</h3>
                <p><i class="fas fa-clock"></i> Response time: ~24 hours</p>
                <p><i class="fas fa-globe-europe"></i> Based in Milan, Italy</p>
                <div class="availability-tags">
                  <span class="availability-tag">Remote</span>
                  <span class="availability-tag">On-site</span>
                  <span class="availability-tag">Hybrid</span>
                </div>
              </div>

              <div class="social-media">
                <h3 data-i18n="connect_with_me">Connect with me</h3>
                <div class="social-icons">
                  <a href="https://github.com/zafariabbas68" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/ghulam-abbas-zafari-b94105248/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                  <a href="https://wa.me/393791387487" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                  <a href="mailto:ghulamabbas.zafari@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <h2 data-i18n="send_message">Send a Message</h2>
              <form @submit.prevent="submitForm">
                <div class="form-group">
                  <label for="name" data-i18n="name">Name</label>
                  <input type="text" id="name" v-model="formData.name" required>
                </div>
                <div class="form-group">
                  <label for="email" data-i18n="email">Email</label>
                  <input type="email" id="email" v-model="formData.email" required>
                </div>
                <div class="form-group">
                  <label for="subject" data-i18n="subject">Subject</label>
                  <input type="text" id="subject" v-model="formData.subject" required>
                </div>
                <div class="form-group">
                  <label for="message" data-i18n="message">Message</label>
                  <textarea id="message" v-model="formData.message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn" :class="{ 'btn-loading': isLoading }" :disabled="isLoading">
                  <i class="fas fa-paper-plane"></i>
                  <span>{{ isLoading ? 'Sending...' : 'Send Message' }}</span>
                </button>
                <div v-if="showSuccess" class="success-message" data-i18n="success_message">
                  <i class="fas fa-check-circle"></i> Thank you for your message! I will get back to you soon.
                </div>
                <div v-if="showError" class="error-message" data-i18n="error_message">
                  <i class="fas fa-exclamation-circle"></i> There was an error sending your message. Please try again or contact me directly at ghulamabbas.zafari@gmail.com
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <!-- Map Section -->
      <section class="map-section">
        <div class="container">
          <div class="map-container">
            <div class="google-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.1041074333763!2d9.18902977695435!3d45.53913297107138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786b8c0d2a0d4c5%3A0x8a4a2b4d4f8c4f4d!2sVia%20Vittorio%20Veneto%2C%2022%2C%2020091%20Bresso%20MI%2C%20Italy!5e0!3m2!1sen!2sus!4v1690123456789!5m2!1sen!2sus"
                class="google-map"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div class="map-caption">
              <h3>Based in Milan, Italy</h3>
              <p>Available for remote collaborations and projects worldwide. Let's discuss how we can work together regardless of location.</p>
              <div class="map-actions">
                <a href="https://www.google.com/maps/place/Via+Vittorio+Veneto,+22,+20091+Bresso+MI,+Italy" target="_blank" class="map-action-btn">
                  <i class="fas fa-map-marked-alt"></i>
                  <span>Open in Google Maps</span>
                </a>
                <a href="https://www.google.com/maps/dir//Via+Vittorio+Veneto,+22,+20091+Bresso+MI,+Italy" target="_blank" class="map-action-btn secondary">
                  <i class="fas fa-directions"></i>
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer Component will be automatically included via layout -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive state
const isMenuOpen = ref(false)
const currentLanguage = ref('en')
const isLoading = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

// Form data
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Methods
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Toggle body scroll
  if (isMenuOpen.value) {
    document.body.classList.add('menu-open')
  } else {
    document.body.classList.remove('menu-open')
  }
}

const changeLanguage = (lang) => {
  currentLanguage.value = lang
  // Here you would typically load translations
  // For now, we'll just update the language state
  console.log('Language changed to:', lang)
}

const submitForm = async () => {
  isLoading.value = true
  showSuccess.value = false
  showError.value = false

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Here you would typically send the form data to your backend or EmailJS
    console.log('Form submitted:', formData.value)

    // Show success message
    showSuccess.value = true

    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('Form submission error:', error)
    showError.value = true

    // Hide error message after 5 seconds
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isLoading.value = false
  }
}

// Close menu when clicking outside and handle route changes
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
      isMenuOpen.value = false
      document.body.classList.remove('menu-open')
    }
  })

  // Close menu when route changes
  const router = useRouter()
  router.afterEach(() => {
    isMenuOpen.value = false
    document.body.classList.remove('menu-open')
  })
})

// SEO Meta
useSeoMeta({
  title: 'Contact - Ghulam Abbas Zafari | GeoInformatics Engineer',
  description: 'Get in touch with Ghulam Abbas Zafari for geospatial projects, collaborations, and innovative mapping solutions.',
})
</script>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

/* CSS Variables */
:root {
  --primary-earth: #2C5530;
  --secondary-water: #2E86AB;
  --accent-sky: #4A90E2;
  --neutral-light: #F8F9FA;
  --neutral-dark: #2D3748;
  --earth-brown: #8B7355;
  --earth-sand: #D7C9AA;
  --earth-rock: #6B705C;
  --data-green: #38A169;
  --data-red: #E53E3E;
  --afghan-black: #000000;
  --afghan-red: #D32011;
  --afghan-green: #007A36;
  --afghan-gold: #C19A6B;
  --card-bg: #FFFFFF;
  --footer-bg: var(--neutral-dark);
}

/* Container */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Enhanced Typography */
h1, h2, h3, h4 {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  line-height: 1.3;
}

h1 {
  font-size: 3.2rem;
  font-weight: 700;
}

h2 {
  font-size: 2.5rem;
  color: var(--primary-earth);
}

h3 {
  font-size: 2rem;
  color: var(--secondary-water);
}

h4 {
  font-size: 1.4rem;
  color: var(--earth-brown);
}

/* Enhanced Navigation */
header {
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
  padding: 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
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
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--primary-earth);
  text-decoration: none;
  font-family: 'Playfair Display', serif;
  z-index: 1001;
}

.logo-icon {
  margin-right: 10px;
  font-size: 1.8rem;
  color: var(--secondary-water);
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 2rem;
  position: relative;
}

.nav-links a {
  color: var(--neutral-dark);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
}

.nav-links a:after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: var(--secondary-water);
  bottom: 0;
  left: 0;
  transition: width 0.3s ease;
}

.nav-links a:hover:after {
  width: 100%;
}

.nav-links a.active {
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
  font-family: 'Poppins', sans-serif;
}

.contact-btn:hover {
  background: rgba(46, 134, 171, 0.1);
  transform: translateY(-2px);
}

/* Language Selector */
.language-selector {
  position: relative;
  margin-left: 1rem;
}

.language-btn {
  background: transparent;
  border: none;
  color: var(--neutral-dark);
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
}

.language-btn:hover {
  background: rgba(46, 134, 171, 0.1);
}

.language-options {
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--card-bg);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  list-style: none;
  padding: 0.5rem 0;
  margin: 0.5rem 0 0 0;
  width: 140px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  border: 1px solid rgba(139, 115, 85, 0.2);
}

.language-dropdown:hover .language-options {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.language-options li {
  padding: 0.8rem 1.2rem;
  color: var(--neutral-dark);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}

.language-options li:hover {
  background: rgba(46, 134, 171, 0.1);
  color: var(--secondary-water);
}

.language-options li.active {
  background: rgba(46, 134, 171, 0.15);
  color: var(--secondary-water);
  font-weight: 500;
}

.language-flag {
  font-size: 1rem;
}

/* Menu Toggle Button - FIXED */
.menu-toggle {
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--earth-brown);
  transition: all 0.3s ease;
  padding: 0.5rem;
  background: none;
  border: none;
  z-index: 1001;
}

.menu-toggle:hover {
  transform: scale(1.1);
  color: var(--secondary-water);
}

/* Page Header Section */
.page-header {
  position: relative;
  padding: 10rem 0 5rem;
  color: white;
  margin-bottom: 4rem;
  text-align: center;
  background: var(--primary-earth);
  margin-top: 80px;
  border-bottom: 1px solid rgba(44, 85, 48, 0.3);
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(46,134,171,0.1)"/></svg>');
  background-size: cover;
  opacity: 0.3;
}

.page-header h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: white;
  position: relative;
  display: inline-block;
}

.page-header h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg,
      var(--afghan-black) 0%,
      var(--afghan-black) 33.33%,
      var(--afghan-red) 33.33%,
      var(--afghan-red) 66.66%,
      var(--afghan-green) 66.66%,
      var(--afghan-green) 100%);
  border-radius: 2px;
  animation: flagMove 3s ease-in-out infinite alternate;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

@keyframes flagMove {
  0% {
      transform: translateX(-5%);
      width: 110%;
  }
  100% {
      transform: translateX(5%);
      width: 110%;
  }
}

.page-header p {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Poppins', sans-serif;
}

/* Contact Section */
.contact-section {
  padding: 5rem 0;
  position: relative;
  background-color: var(--neutral-light);
  margin: 0 1rem 4rem;
  border-radius: 10px;
}

.contact-content {
  display: flex;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.contact-info {
  flex: 1;
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
  border-left: 4px solid var(--secondary-water);
  transition: transform 0.3s ease;
}

.contact-info:hover {
  transform: translateY(-5px);
}

.contact-info h2 {
  color: var(--primary-earth);
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-family: 'Playfair Display', serif;
}

.contact-info ul {
  list-style: none;
  margin-bottom: 3rem;
  padding: 0;
}

.contact-info li {
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
}

.contact-info i {
  color: var(--secondary-water);
  font-size: 1.3rem;
  margin-right: 1rem;
  margin-top: 3px;
  flex-shrink: 0;
}

.contact-info span {
  color: var(--neutral-dark);
  font-size: 1.05rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-family: 'Poppins', sans-serif;
}

/* Enhanced Address with Google Maps Link */
.address-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.address-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-water);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 0.3rem 0.8rem;
  background-color: rgba(46, 134, 171, 0.1);
  border-radius: 4px;
  width: fit-content;
}

.address-link:hover {
  background-color: rgba(46, 134, 171, 0.2);
  transform: translateY(-2px);
}

/* Availability Section */
.availability {
  background-color: rgba(46, 134, 171, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 4px solid var(--data-green);
}

.availability h3 {
  color: var(--primary-earth);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-family: 'Playfair Display', serif;
}

.availability p {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: var(--neutral-dark);
}

.availability-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
}

.availability-tag {
  background-color: var(--secondary-water);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.social-media h3 {
  color: var(--primary-earth);
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  font-family: 'Playfair Display', serif;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(46, 134, 171, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary-water);
  font-size: 1.3rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(46, 134, 171, 0.2);
}

.social-icons a:hover {
  background-color: var(--secondary-water);
  color: white;
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(46, 134, 171, 0.3);
}

.contact-form {
  flex: 1;
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
  border-left: 4px solid var(--secondary-water);
  transition: transform 0.3s ease;
}

.contact-form:hover {
  transform: translateY(-5px);
}

.contact-form h2 {
  color: var(--primary-earth);
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-family: 'Playfair Display', serif;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--neutral-dark);
  font-weight: 500;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  background-color: rgba(46, 134, 171, 0.05);
  border: 1px solid rgba(46, 134, 171, 0.2);
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  color: var(--neutral-dark);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--secondary-water);
  box-shadow: 0 0 0 3px rgba(46, 134, 171, 0.2);
}

.form-group textarea {
  min-height: 150px;
  resize: vertical;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  background-color: var(--secondary-water);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 15px rgba(46, 134, 171, 0.3);
}

.btn:hover:not(:disabled) {
  background-color: var(--accent-sky);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4);
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Loading spinner */
.btn-loading {
  position: relative;
  color: transparent;
}

.btn-loading::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
  border: 2px solid white;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Success message */
.success-message {
  background-color: rgba(56, 161, 105, 0.1);
  color: var(--data-green);
  padding: 15px;
  border-radius: 4px;
  margin-top: 20px;
  border: 1px solid rgba(56, 161, 105, 0.2);
  font-family: 'Poppins', sans-serif;
}

/* Error message */
.error-message {
  background-color: rgba(229, 62, 62, 0.1);
  color: var(--data-red);
  padding: 15px;
  border-radius: 4px;
  margin-top: 20px;
  border: 1px solid rgba(229, 62, 62, 0.2);
  font-family: 'Poppins', sans-serif;
}

/* Map Section */
.map-section {
  padding: 3rem 0;
  background-color: var(--neutral-light);
}

.map-container {
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
  text-align: center;
}

.map-image {
  width: 100%;
  height: auto;
  display: block;
}

.map-caption {
  padding: 1.5rem;
  background-color: var(--card-bg);
  border-top: 1px solid rgba(139, 115, 85, 0.1);
}

.map-caption h3 {
  color: var(--primary-earth);
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.map-caption p {
  color: var(--neutral-dark);
  font-size: 1rem;
  line-height: 1.5;
}

/* Google Maps Integration */
.google-map-container {
  margin-top: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
}

.google-map {
  width: 100%;
  height: 400px;
  border: none;
}

.map-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.map-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: var(--secondary-water);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 15px rgba(46, 134, 171, 0.3);
}

.map-action-btn:hover {
  background-color: var(--accent-sky);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4);
}

.map-action-btn.secondary {
  background-color: var(--earth-brown);
}

.map-action-btn.secondary:hover {
  background-color: var(--earth-rock);
}

/* Mobile Navigation - FIXED */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 80px;
    transition: all 0.4s ease;
    gap: 0;
    z-index: 999;
  }

  .nav-links.active {
    left: 0;
  }

  .nav-links li {
    margin: 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(139, 115, 85, 0.1);
  }

  .nav-links a {
    display: block;
    padding: 1.2rem 2rem;
    font-size: 1.1rem;
    width: 100%;
    border: none;
  }

  .nav-links a:after {
    display: none;
  }

  .nav-links a:hover {
    background: rgba(46, 134, 171, 0.1);
    transform: none;
  }

  .contact-btn {
    border: none;
    background: rgba(46, 134, 171, 0.1);
    margin: 1rem;
    border-radius: 8px;
  }

  .language-selector {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .language-dropdown {
    text-align: center;
  }

  .language-options {
    right: auto;
    left: 50%;
    transform: translateX(-50%) translateY(-10px);
  }

  .language-dropdown:hover .language-options {
    transform: translateX(-50%) translateY(0);
  }

  /* Prevent body scroll when menu is open */
  body.menu-open {
    overflow: hidden;
  }
}

/* Responsive styles */
@media (max-width: 992px) {
  .contact-content {
      flex-direction: column;
  }
  .page-header h1 {
      font-size: 2.8rem;
  }
  .contact-info, .contact-form {
      width: 100%;
  }
}

@media (max-width: 768px) {
  .page-header {
      padding: 8rem 0 4rem;
  }
  .page-header h1 {
      font-size: 2.3rem;
  }
  .page-header p {
      font-size: 1.1rem;
  }
  .contact-info, .contact-form {
      padding: 2rem;
  }
  .contact-info li {
      flex-direction: column;
      align-items: flex-start;
  }
  .contact-info i {
      margin-bottom: 0.5rem;
  }
  .contact-info span {
      width: 100%;
  }
  .availability-tags {
      justify-content: center;
  }
  .map-actions {
      flex-direction: column;
      align-items: center;
  }
  .map-action-btn {
      width: 100%;
      max-width: 250px;
      justify-content: center;
  }
}

@media (max-width: 576px) {
  .contact-section {
      padding: 3rem 0;
      margin: 0 0.5rem 2rem;
  }
  .page-header h1 {
      font-size: 2rem;
  }
  .page-header p {
      font-size: 1.2rem;
  }
  .contact-info, .contact-form {
      padding: 1.5rem;
  }
  .contact-info h2,
  .contact-form h2 {
      font-size: 1.6rem;
  }
  .contact-info span {
      font-size: 1rem;
  }
  .social-icons a {
      width: 45px;
      height: 45px;
      font-size: 1.2rem;
  }
  .google-map {
      height: 300px;
  }
}

/* Extra small devices */
@media (max-width: 480px) {
  .logo {
    font-size: 1.2rem;
  }

  .logo-icon {
    font-size: 1.5rem;
  }

  .nav-links a {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
}
</style>