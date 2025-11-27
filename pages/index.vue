<template>
  <div class="portfolio-home">
    <!-- Navigation -->
    <header>
      <div class="header-content">
        <div class="container nav-container">
          <NuxtLink to="/" class="logo">
            <span class="logo-icon"><i class="fas fa-graduation-cap"></i></span>
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
              <div class="language-dropdown" @mouseenter="showLanguageOptions = true" @mouseleave="showLanguageOptions = false">
                <button class="language-btn">
                  <i class="fas fa-globe"></i>
                  <span class="current-language">{{ currentLanguage.toUpperCase() }}</span>
                  <i class="fas fa-chevron-down" style="font-size: 0.8rem; margin-left: 5px;"></i>
                </button>
                <ul class="language-options" :class="{ active: showLanguageOptions }">
                  <li
                    v-for="lang in languages"
                    :key="lang.code"
                    :class="{ active: currentLanguage === lang.code }"
                    @click="changeLanguage(lang.code)"
                  >
                    <span class="language-flag">{{ lang.flag }}</span>
                    {{ lang.name }}
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
              <stop offset="0%" stop-color="#0f1e3d" />
              <stop offset="50%" stop-color="#1a365d" />
              <stop offset="100%" stop-color="#0f1e3d" />
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
              <span class="animated-line"></span>
            </span>
          </h1>
          <p class="hero-subtitle">Geoinformatics Engineer | GIS Specialist | Remote Sensing Expert</p>
          <div class="education-support">
            <div class="support-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <p class="support-text">Supporting Education for Afghan Women</p>
          </div>
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

    <!-- Rest of your sections remain the same -->
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

    <!-- Education Support Section -->
    <section class="education-section" id="education-support">
      <div class="container">
        <div class="section-header" :class="{ visible: isSectionVisible.education }">
          <h2 class="section-title">Education For All</h2>
          <p class="section-subtitle">Supporting the fundamental right to education for Afghan women and girls</p>
        </div>
        <div class="education-content">
          <div class="education-message">
            <div class="education-icon">
              <i class="fas fa-book-reader"></i>
            </div>
            <h3 class="education-title">Knowledge Knows No Boundaries</h3>
            <p>Education is a fundamental human right that should be accessible to everyone, regardless of gender, ethnicity, or geographical location. As a professional in geospatial sciences, I believe in the power of knowledge to transform lives and communities.</p>
            <p>I stand in solidarity with Afghan women and girls who face immense challenges in accessing education. The pursuit of knowledge is essential for building a better future, and every individual deserves the opportunity to learn, grow, and contribute to society.</p>
            <div class="education-quote">
              <i class="fas fa-quote-left"></i>
              <p>"Education is the most powerful weapon which you can use to change the world."</p>
              <span>- Nelson Mandela</span>
            </div>
          </div>
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
// Import Vue reactivity
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive data
const showScrollTop = ref(false)
const isMenuOpen = ref(false)
const currentLanguage = ref('en')
const showLanguageOptions = ref(false)
const isSectionVisible = ref({
  expertise: false,
  projects: false,
  education: false,
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

// Languages data
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷' }
]

// Navigation methods
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
  showLanguageOptions.value = false
  // Here you would typically load translations
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
  },
  {
    title: 'Convex Hull on a Sphere: Advanced Visualization',
    description: 'Comprehensive implementation of convex hull computation and visualization on spherical surfaces with advanced 3D and 2D visualizations.',
    image: '/images/convex_hull.png',
    tags: ['Python', 'SciPy', 'Matplotlib 3D', 'Cartopy'],
    link: '/projects#convex'
  },
  {
    title: 'Freedom House Data Visualization Dashboard',
    description: 'Interactive data visualization dashboard displaying global freedom scores based on Freedom House data with interactive maps and time series charts.',
    image: '/images/newplot-2.png',
    tags: ['Python', 'Dash', 'Plotly', 'Pandas'],
    link: '/projects#freedom'
  },
  {
    title: 'Geospatial Comparative Analysis: Iran vs Italy',
    description: 'Comprehensive geospatial analysis comparing land use/land cover (LULC) and nighttime lights between Iran and Italy using Google Earth Engine and Python.',
    image: '/images/Nighttime_light_intensity_analysis_(2015-2023)_Iran.png',
    tags: ['Google Earth Engine', 'Python', 'Geemap', 'Matplotlib'],
    link: '/projects#iran-italy'
  },
  {
    title: 'Seismic Globe: 3D Visualization of Global Earthquake Activity',
    description: 'Interactive 3D visualization tool that maps global earthquake activity from 2020 to 2024, fetching near-real-time seismic data from USGS.',
    image: '/images/Earthquake_Globe_Animation.mp4',
    tags: ['Python', 'Three.js', 'USGS API', 'WebGL'],
    link: '/projects#seismic'
  }
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
        ? (section.parentElement.parentElement.id === 'expertise' ? 'expertise' :
           section.parentElement.parentElement.id === 'featured-projects' ? 'projects' :
           section.parentElement.parentElement.id === 'education-support' ? 'education' : '')
        : section.classList.contains('skill-card')
          ? `skill-${Array.from(section.parentElement.children).indexOf(section)}`
          : `project-${Array.from(section.parentElement.children).indexOf(section)}`

      if (id) {
        isSectionVisible.value[id] = true
      }
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

// Close menu when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.nav-container')) {
    isMenuOpen.value = false
    document.body.classList.remove('menu-open')
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)

  // Initial check for elements in view
  animateOnScroll()

  // Close menu when route changes
  const router = useRouter()
  router.afterEach(() => {
    isMenuOpen.value = false
    document.body.classList.remove('menu-open')
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
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

/* CSS Variables - UPDATED EDUCATION COLORS */
:root {
  --primary-earth: #1a365d;        /* Deep blue for hero section */
  --secondary-water: #2E86AB;      /* Professional blue accent */
  --accent-sky: #4A90E2;           /* Bright blue for highlights */
  --neutral-light: #F8F9FA;        /* Light background */
  --neutral-dark: #0f1e3d;         /* Dark navy blue for footer */
  --earth-brown: #8B7355;
  --earth-sand: #D7C9AA;
  --earth-rock: #6B705C;
  --data-green: #38A169;
  --data-red: #E53E3E;
  --afghan-black: #000000;
  --afghan-red: #D32011;
  --afghan-green: #007A36;
  --afghan-gold: #C19A6B;
  --education-gold: #FFD700;       /* NEW: Bright gold for education titles */
  --education-light: #FFF8DC;      /* NEW: Light golden background */
  --education-accent: #B8860B;     /* NEW: Dark golden accent */
  --card-bg: #FFFFFF;
  --footer-bg: var(--neutral-dark);
  --transition: all 0.3s ease;
}

/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.portfolio-home {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: var(--neutral-dark);
  background-color: var(--neutral-light);
}

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
  color: var(--education-gold); /* Updated to use education gold */
  position: relative;
}

.logo-icon::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  background: rgba(255, 215, 0, 0.3); /* Updated to gold glow */
  animation: educationPulse 2s ease-in-out infinite;
  z-index: -1;
}

@keyframes educationPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
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

.language-options.active {
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

/* Enhanced Hero Section */
.hero {
  padding: 6rem 0 4rem;
  color: white;
  margin-bottom: 0;
  position: relative;
  overflow: hidden;
  min-height: 70vh;
  display: flex;
  align-items: center;
  margin-top: 80px;
  background: linear-gradient(135deg, var(--primary-earth) 0%, var(--neutral-dark) 100%);
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

/* Enhanced Hero Container for Better Readability */
.hero-container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  max-width: 100%;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards;
  position: relative;
  z-index: 2;
  text-align: left;
  background: rgba(26, 54, 93, 0.3);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 3.2rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: white;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* Education Support Section in Hero */
.education-support {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border-left: 4px solid var(--education-gold);
}

.support-icon {
  font-size: 2rem;
  color: var(--education-gold);
  animation: gentlePulse 2s ease-in-out infinite;
}

@keyframes gentlePulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

.support-text {
  color: white;
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

.highlight {
  color: var(--earth-sand);
  font-weight: 700;
  position: relative;
  display: inline-block;
}

/* NEW: Mobile-friendly Animated Line - REPLACED FLAG LINE */
.animated-line {
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg,
    transparent 0%,
    var(--accent-sky) 20%,
    var(--education-gold) 50%,
    var(--accent-sky) 80%,
    transparent 100%);
  border-radius: 2px;
  animation: lineGlow 2s ease-in-out infinite alternate;
  box-shadow: 0 0 10px rgba(74, 144, 226, 0.5);
}

@keyframes lineGlow {
  0% {
    opacity: 0.6;
    transform: scaleX(0.9);
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
    box-shadow: 0 0 15px rgba(74, 144, 226, 0.7);
  }
}

/* Enhanced Buttons for Better Contrast */
.hero-buttons {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  transition: var(--transition);
  text-decoration: none;
  display: inline-block;
  font-size: 0.95rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 15px rgba(46, 134, 171, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  transition: width 0.3s ease;
  z-index: -1;
}

.btn:hover::before {
  width: 100%;
}

.primary-btn {
  background: rgba(46, 134, 171, 0.9);
  color: white;
}

.primary-btn::before {
  background: var(--accent-sky);
}

.primary-btn:hover {
  background: rgba(74, 144, 226, 0.95);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(74, 144, 226, 0.6);
  color: white;
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.secondary-btn::before {
  background: white;
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
  color: var(--secondary-water);
}

/* Profile Image - Right Side Positioning */
.hero-image {
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease 0.5s forwards;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow:
    0 20px 50px rgba(26, 54, 93, 0.4),
    0 0 0 4px rgba(215, 201, 170, 0.8),
    0 0 30px rgba(215, 201, 170, 0.6);
  border: 4px solid var(--earth-sand);
  transition: var(--transition);
  background: var(--card-bg);
  backdrop-filter: blur(10px);
}

.image-wrapper:hover {
  transform: scale(1.05);
  box-shadow:
    0 25px 60px rgba(26, 54, 93, 0.5),
    0 0 0 4px rgba(215, 201, 170, 0.9),
    0 0 40px rgba(215, 201, 170, 0.8);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.image-wrapper:hover .profile-img {
  transform: scale(1.08);
}

.tech-icons {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 115, 85, 0.2);
}

.tech-icons .icon {
  background: var(--card-bg);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(26, 54, 93, 0.1);
  font-size: 1.4rem;
  color: var(--secondary-water);
  transition: var(--transition);
  border: 1px solid rgba(139, 115, 85, 0.3);
  animation: float 3s ease-in-out infinite;
}

.tech-icons .icon:nth-child(2) {
  animation-delay: 0.5s;
}

.tech-icons .icon:nth-child(3) {
  animation-delay: 1s;
}

.tech-icons .icon:nth-child(4) {
  animation-delay: 1.5s;
}

.tech-icons .icon:hover {
  transform: translateY(-5px) scale(1.1);
  color: var(--primary-earth);
  box-shadow: 0 10px 25px rgba(26, 54, 93, 0.3);
  animation-play-state: paused;
}

/* Core Expertise Section */
.skills-section {
  padding: 5rem 0;
  position: relative;
  background-color: var(--neutral-light);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: var(--primary-earth);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--secondary-water), var(--accent-sky));
}

.section-subtitle {
  color: var(--neutral-dark);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 1.5rem auto 0;
  font-family: 'Poppins', sans-serif;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 2rem;
  transition: var(--transition);
  border-left: 4px solid var(--secondary-water);
  box-shadow: 0 10px 30px rgba(26, 54, 93, 0.1);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  border: 1px solid rgba(139, 115, 85, 0.1);
}

.skill-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(26, 54, 93, 0.15);
}

.skill-icon {
  font-size: 2.5rem;
  color: var(--secondary-water);
  margin-bottom: 1.5rem;
  transition: var(--transition);
}

.skill-card:hover .skill-icon {
  transform: scale(1.1) rotate(5deg);
}

.skill-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--primary-earth);
  font-family: 'Playfair Display', serif;
}

.skill-card p {
  color: var(--neutral-dark);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tags span {
  background: rgba(46, 134, 171, 0.1);
  color: var(--secondary-water);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: var(--transition);
  font-family: 'Poppins', sans-serif;
}

.skill-tags span:hover {
  background: var(--secondary-water);
  color: white;
  transform: translateY(-2px);
}

/* Featured Projects Section */
.projects-section {
  padding: 5rem 0;
  background: rgba(248, 249, 250, 0.5);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  transition: var(--transition);
  box-shadow: 0 10px 30px rgba(26, 54, 93, 0.1);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  border: 1px solid rgba(139, 115, 85, 0.1);
  border-left: 4px solid var(--secondary-water);
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(26, 54, 93, 0.15);
  border-color: var(--secondary-water);
}

.project-image {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--primary-earth);
  font-family: 'Playfair Display', serif;
}

.project-description {
  color: var(--neutral-dark);
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-tags span {
  background: rgba(46, 134, 171, 0.1);
  color: var(--secondary-water);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

.project-link {
  color: var(--secondary-water);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: var(--transition);
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
}

.project-link:hover {
  gap: 10px;
  color: var(--primary-earth);
}

/* Education Support Section - UPDATED COLORS FOR BETTER VISIBILITY */
.education-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--primary-earth) 0%, var(--neutral-dark) 100%);
  color: white;
  position: relative;
}

.education-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffd700' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.3;
}

.education-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

.education-message {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.education-icon {
  font-size: 4rem;
  color: var(--education-gold);
  margin-bottom: 2rem;
  animation: gentlePulse 3s ease-in-out infinite;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

/* UPDATED: Education Section Titles for Better Visibility */
.education-section .section-title {
  color: var(--education-gold) !important;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7) !important;
  font-size: 2.8rem !important;
  margin-bottom: 1rem !important;
}

.education-section .section-subtitle {
  color: var(--education-light) !important;
  font-size: 1.3rem !important;
  font-weight: 500 !important;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) !important;
  max-width: 700px !important;
}

.education-title {
  color: var(--education-gold) !important;
  font-size: 2.2rem !important;
  margin-bottom: 1.5rem !important;
  font-family: 'Playfair Display', serif !important;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5) !important;
  font-weight: 700 !important;
}

.education-message p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.education-quote {
  background: rgba(255, 215, 0, 0.1);
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2rem;
  border-left: 4px solid var(--education-gold);
  border-right: 4px solid var(--education-gold);
}

.education-quote i {
  font-size: 2rem;
  color: var(--education-gold);
  margin-bottom: 1rem;
  display: block;
  text-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
}

.education-quote p {
  font-style: italic;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--education-light);
  font-weight: 500;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
}

.education-quote span {
  color: var(--education-gold);
  font-weight: 600;
  font-size: 1rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

/* Call to Action Section */
.cta-section {
  padding: 5rem 0;
  background: var(--neutral-light);
  text-align: center;
  color: var(--neutral-dark);
  border-top: 1px solid rgba(139, 115, 85, 0.1);
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-earth);
}

.cta-description {
  color: var(--neutral-dark);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
}

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

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

/* ========== MOBILE RESPONSIVE IMPROVEMENTS ========== */

/* Profile Image Improvements for Mobile */
@media (max-width: 768px) {
  .image-wrapper {
    width: 220px;
    height: 220px;
  }

  .tech-icons {
    padding: 0.6rem 1rem;
    bottom: -20px;
  }

  .tech-icons .icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .image-wrapper {
    width: 200px;
    height: 200px;
  }

  .tech-icons {
    gap: 0.8rem;
    padding: 0.5rem 0.8rem;
    bottom: -15px;
  }

  .tech-icons .icon {
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
  }
}

/* Enhanced Mobile Navigation */
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
    padding-top: 100px;
    transition: all 0.4s ease;
    gap: 0;
    z-index: 999;
    overflow-y: auto;
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

  .language-options.active {
    transform: translateX(-50%) translateY(0);
  }

  /* NEW: Mobile-specific animated line adjustments */
  .animated-line {
    height: 2px;
    bottom: -6px;
    animation: lineGlowMobile 2s ease-in-out infinite alternate;
  }

  @keyframes lineGlowMobile {
    0% {
      opacity: 0.5;
      transform: scaleX(0.8);
      box-shadow: 0 0 3px rgba(74, 144, 226, 0.3);
    }
    100% {
      opacity: 0.9;
      transform: scaleX(0.95);
      box-shadow: 0 0 8px rgba(74, 144, 226, 0.5);
    }
  }

  /* Prevent body scroll when menu is open */
  body.menu-open {
    overflow: hidden;
  }
}

/* Responsive Design for Hero Section */
@media (max-width: 992px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-content {
    text-align: center;
  }

  .hero-buttons {
    justify-content: center;
  }

  .image-wrapper {
    width: 240px;
    height: 240px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 5rem 0 3rem;
    min-height: 60vh;
  }

  .hero-container {
    gap: 2rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .education-support {
    flex-direction: column;
    text-align: center;
  }

  .image-wrapper {
    width: 220px;
    height: 220px;
  }

  .tech-icons {
    padding: 0.6rem 1rem;
  }

  .tech-icons .icon {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }

  .education-message {
    padding: 2rem;
  }

  .education-icon {
    font-size: 3rem;
  }

  .education-title {
    font-size: 1.8rem !important;
  }

  .education-section .section-title {
    font-size: 2.2rem !important;
  }

  .education-section .section-subtitle {
    font-size: 1.1rem !important;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 250px;
  }

  .image-wrapper {
    width: 200px;
    height: 200px;
  }

  .tech-icons {
    gap: 0.8rem;
    padding: 0.5rem 0.8rem;
  }

  .tech-icons .icon {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  .education-message {
    padding: 1.5rem;
  }

  .education-icon {
    font-size: 2.5rem;
  }

  .education-title {
    font-size: 1.5rem !important;
  }

  .education-section .section-title {
    font-size: 2rem !important;
  }

  .education-section .section-subtitle {
    font-size: 1rem !important;
  }

  .education-quote p {
    font-size: 1.1rem;
  }
}

/* Responsive styles for other sections */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.8rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 5rem 0 3rem;
    min-height: 50vh;
  }

  .hero-title {
    font-size: 2.3rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
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