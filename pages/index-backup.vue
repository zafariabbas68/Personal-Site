<!-- pages/index.vue -->
<template>
  <div class="portfolio-home">
    <!-- Navigation -->
    <header>
      <div class="header-content">
        <div class="container nav-container">
          <NuxtLink to="/" class="logo">
            <span class="logo-icon"><i class="fas fa-map-marked-alt"></i></span>
            <span>Ghulam Abbas Zafari</span>
          </NuxtLink>
          <ul class="nav-links" :class="{ active: isMenuOpen }" id="navLinks">
            <li><NuxtLink to="/" class="active" data-i18n="home">Home</NuxtLink></li>
            <li><NuxtLink to="/about" data-i18n="about">About</NuxtLink></li>
            <li><NuxtLink to="/projects" data-i18n="projects">Projects</NuxtLink></li>
            <li><NuxtLink to="/education" data-i18n="education">Education</NuxtLink></li>
            <li><NuxtLink to="/experience" data-i18n="experience">Experience</NuxtLink></li>
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
            <li><NuxtLink to="/contact" class="contact-btn" data-i18n="contact">Contact</NuxtLink></li>
          </ul>
          <div class="menu-toggle" @click="toggleMenu">
            <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section with Enhanced Geospatial Background -->
    <section class="hero" id="hero">
      <!-- Enhanced Geospatial SVG Background -->
      <div class="geospatial-background">
        <svg class="topography-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <!-- Enhanced Gradients -->
          <defs>
            <!-- Main Earth Gradient -->
            <linearGradient id="earthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1a3c27" />
              <stop offset="50%" stop-color="#2C5530" />
              <stop offset="100%" stop-color="#1a3c27" />
            </linearGradient>

            <!-- Enhanced Contour Gradient -->
            <linearGradient id="contourGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4A90E2" stop-opacity="0.4" />
              <stop offset="50%" stop-color="#2E86AB" stop-opacity="0.6" />
              <stop offset="100%" stop-color="#4A90E2" stop-opacity="0.4" />
            </linearGradient>

            <!-- Data Point Glow -->
            <radialGradient id="dataGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#4A90E2" stop-opacity="0.8" />
              <stop offset="70%" stop-color="#2E86AB" stop-opacity="0.4" />
              <stop offset="100%" stop-color="#4A90E2" stop-opacity="0" />
            </radialGradient>

            <!-- Enhanced Glow Filter -->
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <!-- Base Earth with Enhanced Visibility -->
          <rect width="100%" height="100%" fill="url(#earthGradient)" opacity="0.9" />

          <!-- Enhanced Grid System -->
          <g class="grid-lines" stroke="#2E86AB" stroke-opacity="0.15" stroke-width="1.5">
            <path d="M0,0 L1200,0 M0,100 L1200,100 M0,200 L1200,200 M0,300 L1200,300 M0,400 L1200,400 M0,500 L1200,500 M0,600 L1200,600 M0,700 L1200,700 M0,800 L1200,800" />
            <path d="M0,0 L0,800 M100,0 L100,800 M200,0 L200,800 M300,0 L300,800 M400,0 L400,800 M500,0 L500,800 M600,0 L600,800 M700,0 L700,800 M800,0 L800,800 M900,0 L900,800 M1000,0 L1000,800 M1100,0 L1100,800 M1200,0 L1200,800" />
          </g>

          <!-- Enhanced Topography Contours -->
          <g class="contours-group">
            <path class="contour-line contour-1" d="M0,350 Q150,320 300,350 T600,350 T900,350 T1200,350" />
            <path class="contour-line contour-2" d="M0,400 Q150,370 300,400 T600,400 T900,400 T1200,400" />
            <path class="contour-line contour-3" d="M0,450 Q150,420 300,450 T600,450 T900,450 T1200,450" />
            <path class="contour-line contour-4" d="M0,500 Q150,470 300,500 T600,500 T900,500 T1200,500" />
            <path class="contour-line contour-5" d="M0,550 Q150,520 300,550 T600,550 T900,550 T1200,550" />
            <path class="contour-line contour-6" d="M0,300 Q150,270 300,300 T600,300 T900,300 T1200,300" />
          </g>

          <!-- Enhanced Data Points Network -->
          <g class="data-points">
            <!-- Primary Data Cluster -->
            <g class="data-cluster-1">
              <circle class="data-point primary" cx="300" cy="350" r="5" />
              <circle class="data-point secondary" cx="250" cy="320" r="3" />
              <circle class="data-point secondary" cx="350" cy="330" r="3" />
              <circle class="data-point secondary" cx="280" cy="380" r="3" />
            </g>

            <!-- Secondary Data Cluster -->
            <g class="data-cluster-2">
              <circle class="data-point primary" cx="600" cy="400" r="5" />
              <circle class="data-point secondary" cx="550" cy="370" r="3" />
              <circle class="data-point secondary" cx="650" cy="380" r="3" />
              <circle class="data-point secondary" cx="580" cy="430" r="3" />
            </g>

            <!-- Tertiary Data Cluster -->
            <g class="data-cluster-3">
              <circle class="data-point primary" cx="900" cy="450" r="5" />
              <circle class="data-point secondary" cx="850" cy="420" r="3" />
              <circle class="data-point secondary" cx="950" cy="430" r="3" />
              <circle class="data-point secondary" cx="880" cy="480" r="3" />
            </g>
          </g>

          <!-- Enhanced Connection Lines -->
          <g class="connection-lines">
            <path class="connection connection-1" d="M300,350 L600,400" />
            <path class="connection connection-2" d="M600,400 L900,450" />
            <path class="connection connection-3" d="M250,320 L550,370" />
            <path class="connection connection-4" d="M350,330 L650,380" />
            <path class="connection connection-5" d="M280,380 L580,430" />
            <path class="connection connection-6" d="M550,370 L850,420" />
            <path class="connection connection-7" d="M650,380 L950,430" />
            <path class="connection connection-8" d="M580,430 L880,480" />
          </g>

          <!-- Satellite System -->
          <g class="satellite-system">
            <!-- Orbits -->
            <circle class="orbit orbit-1" cx="600" cy="400" r="180" />
            <circle class="orbit orbit-2" cx="600" cy="400" r="280" />
            <circle class="orbit orbit-3" cx="600" cy="400" r="380" />

            <!-- Satellites -->
            <g class="satellites">
              <circle class="satellite satellite-1" cx="780" cy="400" r="6">
                <animateTransform attributeName="transform" type="rotate" from="0 600 400" to="360 600 400" dur="25s" repeatCount="indefinite" />
              </circle>
              <circle class="satellite satellite-2" cx="600" cy="220" r="5">
                <animateTransform attributeName="transform" type="rotate" from="120 600 400" to="480 600 400" dur="30s" repeatCount="indefinite" />
              </circle>
              <circle class="satellite satellite-3" cx="420" cy="400" r="4">
                <animateTransform attributeName="transform" type="rotate" from="240 600 400" to="600 600 400" dur="35s" repeatCount="indefinite" />
              </circle>
            </g>
          </g>

          <!-- Map Coordinates -->
          <g class="coordinates" fill="#ffffff" font-family="Arial" font-size="12" opacity="0.3">
            <text x="50" y="30">45°N</text>
            <text x="1150" y="30">45°N</text>
            <text x="50" y="770">45°S</text>
            <text x="1150" y="770">45°S</text>
            <text x="30" y="400" transform="rotate(-90 30,400)">0°</text>
            <text x="1170" y="400" transform="rotate(90 1170,400)">180°</text>
          </g>

          <!-- Scan Lines Effect -->
          <g class="scan-lines">
            <rect class="scan-line" x="0" y="0" width="100%" height="2" fill="#4A90E2" opacity="0.1" />
          </g>
        </svg>
      </div>

      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            Transforming Spatial Data<br>Into
            <span class="highlight">
              Actionable Insights
              <span class="flag-line"></span>
            </span>
          </h1>
          <p class="hero-subtitle">Geoinformatics Engineer | GIS Specialist | Remote Sensing Expert</p>
          <div class="hero-buttons">
            <NuxtLink to="#featured-projects" class="btn primary-btn">
              View My Work <i class="fas fa-arrow-right"></i>
            </NuxtLink>
            <NuxtLink to="/contact" class="btn secondary-btn">Get In Touch</NuxtLink>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-wrapper">
            <img src="/images/profile.jpg" alt="Ghulam Abbas Zafari" class="profile-img" />
            <div class="tech-icons">
              <div class="icon"><i class="fab fa-python"></i></div>
              <div class="icon"><i class="fas fa-globe"></i></div>
              <div class="icon"><i class="fas fa-satellite"></i></div>
              <div class="icon"><i class="fas fa-database"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Expertise -->
    <section class="skills-section" id="expertise">
      <div class="container">
        <div class="section-header" :class="{ visible: isSectionVisible.expertise }">
          <h2 class="section-title">Core Expertise</h2>
          <p class="section-subtitle">Areas of specialized knowledge and technical proficiency</p>
        </div>
        <div class="skills-grid">
          <div
            v-for="(skill, index) in skills"
            :key="skill.title"
            class="skill-card"
            :class="{ visible: isSectionVisible[`skill-${index}`] }"
          >
            <div class="skill-icon">
              <i :class="skill.icon"></i>
            </div>
            <h3>{{ skill.title }}</h3>
            <p>{{ skill.description }}</p>
            <div class="skill-tags">
              <span v-for="tag in skill.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="projects-section" id="featured-projects">
      <div class="container">
        <div class="section-header" :class="{ visible: isSectionVisible.projects }">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">A showcase of my recent geospatial work and solutions</p>
        </div>
        <div class="projects-grid">
          <div
            v-for="(project, index) in featuredProjects"
            :key="project.title"
            class="project-card"
            :class="{ visible: isSectionVisible[`project-${index}`] }"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
              <NuxtLink :to="project.link" class="project-link">
                View Details <i class="fas fa-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div style="text-align: center; margin-top: 3rem;">
          <NuxtLink to="/projects" class="btn primary-btn">View All Projects</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section" id="cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Start Your Project?</h2>
          <p class="cta-description">Let's collaborate to transform your spatial data challenges into innovative solutions.</p>
          <NuxtLink to="/contact" class="btn primary-btn">Get In Touch</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Scroll to Top Button -->
    <div class="scroll-to-top" :class="{ active: showScrollTop }" @click="scrollToTop">
      <i class="fas fa-chevron-up"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive state
const showScrollTop = ref(false)
const isMenuOpen = ref(false)
const currentLanguage = ref('en')
const isSectionVisible = ref({
  expertise: false,
  projects: false,
  'skill-0': false,
  'skill-1': false,
  'skill-2': false,
  'project-0': false,
  'project-1': false,
  'project-2': false,
  'project-3': false,
  'project-4': false,
  'project-5': false
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

// Skills data
const skills = [
  {
    icon: 'fas fa-map',
    title: 'Geographic Information Systems',
    description: 'Advanced spatial analysis, cartography, and WebGIS development using industry-standard tools.',
    tags: ['ArcGIS', 'QGIS', 'PostGIS', 'GeoServer']
  },
  {
    icon: 'fas fa-satellite-dish',
    title: 'Remote Sensing',
    description: 'Image processing, classification, and environmental monitoring using optical and SAR data.',
    tags: ['ENVI', 'Google Earth Engine', 'ESA SNAP', 'Drone Imagery']
  },
  {
    icon: 'fas fa-code',
    title: 'Geospatial Development',
    description: 'Building custom geospatial applications and data processing pipelines.',
    tags: ['Python', 'JavaScript', 'PostgreSQL', 'GeoDjango']
  }
]

// Featured projects data
const featuredProjects = [
  {
    title: 'Milan Urban Green Space Accessibility Analysis',
    description: 'Comprehensive geospatial analysis evaluating accessibility and equity of parks and green spaces in Milan using network analysis and gravity modeling.',
    image: '/images/enhanced_service_coverage_analysis.png',
    tags: ['Python', 'GeoPandas', 'OSMnx', 'NetworkX'],
    link: '/projects#milan'
  },
  {
    title: 'NYC Urban Green Space Accessibility Analysis',
    description: 'Comprehensive analysis of public park accessibility across New York City using 0.5-mile walking distance threshold to identify underserved areas.',
    image: '/images/03_inaccessibility_analysis.png',
    tags: ['Python', 'GeoPandas', 'Matplotlib', 'Contextily'],
    link: '/projects#nyc'
  }
  // Add your other projects here...
]

// Scroll handler
const handleScroll = () => {
  // Scroll to top button visibility
  showScrollTop.value = window.scrollY > 300

  // Section animation on scroll
  animateOnScroll()
}

// Scroll animation function
const animateOnScroll = () => {
  const sections = document.querySelectorAll('.section-header, .skill-card, .project-card')

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top
    const triggerPoint = window.innerHeight * 0.85

    if (sectionTop < triggerPoint) {
      const id = section.classList.contains('section-header')
        ? (section.parentElement.id === 'expertise' ? 'expertise' : 'projects')
        : section.classList.contains('skill-card')
          ? `skill-${Array.from(section.parentElement.children).indexOf(section)}`
          : `project-${Array.from(section.parentElement.children).indexOf(section)}`

      isSectionVisible.value[id] = true
    }
  })
}

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Initial check for elements in view
  animateOnScroll()

  // Close menu when clicking outside and handle route changes
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

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// SEO Meta
useSeoMeta({
  title: 'Ghulam Abbas Zafari - Geoinformatics Engineer',
  description: 'Professional Geoinformatics Engineer specializing in GIS, Remote Sensing, and spatial data analysis.',
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
  --transition: all 0.3s ease;
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

/* Menu Toggle Button */
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

/* Hero Section */
.hero {
  position: relative;
  padding: 10rem 0 5rem;
  color: white;
  margin-bottom: 4rem;
  text-align: left;
  margin-top: 80px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary-earth) 0%, #1a3c27 100%);
}

.geospatial-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.85;
}

.topography-svg {
  width: 100%;
  height: 100%;
  opacity: 1;
}

/* Add all your existing CSS styles for the SVG animations, hero section, skills, projects, etc. */
/* Copy all your existing CSS from your current index.vue file here */

/* Scroll to top button */
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--secondary-water);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: var(--transition);
  opacity: 0;
  visibility: hidden;
  z-index: 999;
  box-shadow: 0 5px 15px rgba(46, 134, 171, 0.3);
}

.scroll-to-top.active {
  opacity: 1;
  visibility: visible;
}

.scroll-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(46, 134, 171, 0.5);
  background: var(--accent-sky);
}

/* Mobile Navigation */
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

/* Add all your remaining CSS styles from your current index.vue */
/* This should include all your hero, skills, projects, and CTA section styles */
</style>
