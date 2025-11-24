<!-- pages/about.vue -->
<template>
  <div class="about-page">
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
            <li><NuxtLink to="/about" class="active" data-i18n="about">About</NuxtLink></li>
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

    <!-- Page Header with Enhanced Geospatial Background -->
    <section class="page-header">
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

      <div class="container">
        <h1>About Me</h1>
        <p>Professional Geoinformatics Engineer & GIS Specialist</p>
      </div>
    </section>

    <!-- About Content Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="profile-container">
            <div class="profile-image"></div>
            <div class="personal-info">
              <h3>Personal Information</h3>
              <ul>
                <li><strong>Email:</strong> ghulamabbas.zafari@gmail.com</li>
                <li><strong>Phone:</strong> (+39) 379-138-7487</li>
                <li><strong>Address:</strong> Via Vittorio Veneto 22, Bresso, Italy</li>
                <li><strong>Languages:</strong> Persian (Dari), English (C2), Italian (B1)</li>
              </ul>
              <div class="social-links">
                <a href="https://github.com/zafariabbas68" target="_blank" aria-label="GitHub">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://wa.me/393791387487" target="_blank" aria-label="WhatsApp">
                  <i class="fab fa-whatsapp"></i>
                </a>
                <a href="mailto:ghulamabbas.zafari@gmail.com" aria-label="Email">
                  <i class="fas fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/ghulam-abbas-zafari-b94105248/" target="_blank" aria-label="LinkedIn">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
              <div class="cv-download">
                <a href="/reports/Eng_zafari-cv.pdf" class="cv-btn" download>
                  <i class="fas fa-download"></i>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
          <div class="about-text">
            <h2>Professional Profile</h2>
            <p>I am a dedicated Geoinformatics Engineer with a passion for transforming spatial data into actionable insights. With over five years of professional experience in cadastral surveying and geospatial analysis, I bring a unique combination of technical expertise and problem-solving skills to every project.</p>

            <p>I specialize in GIS applications, remote sensing analysis, and spatial data science. My work focuses on developing innovative solutions for environmental monitoring, urban planning, and land management challenges.</p>

            <!-- Updated Education Information -->
            <div class="education-highlight">
              <h4>Master's Degree in Geoinformatics Engineering</h4>
              <div class="education-date">Graduated: October 23, 2025</div>
              <p>Successfully completed my Master's degree with a comprehensive thesis defense at Politecnico di Milano.</p>
              <div class="thesis-title">
                <strong>Thesis Title:</strong><br>
                "Land Cover Dynamics and Transitions in Italy: A Multi-Temporal Analysis Using Global Land Cover Datasets"
              </div>
              <p>This research involved advanced analysis of land cover changes across Italy using multi-temporal satellite data and machine learning techniques to understand environmental transitions and urban development patterns.</p>
            </div>

            <p>What sets me apart is my ability to bridge the gap between complex geospatial technologies and practical applications. I thrive on creating efficient workflows that deliver accurate, reliable results while maintaining the highest standards of quality and precision.</p>

            <h3>Technical Expertise</h3>

            <!-- Updated Skills Grid -->
            <div class="skills-grid">
              <div class="skill-category">
                <h4>Geospatial Analysis & GIS</h4>
                <ul>
                  <li>Advanced GIS Analysis (ArcGIS Pro, QGIS)</li>
                  <li>Spatial Data Modeling & Database Management</li>
                  <li>Cartography & Map Design</li>
                  <li>Geodatabase Design & Implementation</li>
                  <li>Cadastral Surveying & Land Administration</li>
                  <li>Spatial Statistics & Geostatistics</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>Remote Sensing & Image Processing</h4>
                <ul>
                  <li>Multispectral & Hyperspectral Analysis</li>
                  <li>SAR Data Processing & Interpretation</li>
                  <li>Land Cover/Land Use Classification</li>
                  <li>Change Detection & Time Series Analysis</li>
                  <li>Atmospheric Correction & Calibration</li>
                  <li>Drone Imagery Processing</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>Programming & Data Science</h4>
                <ul>
                  <li>Python (Geospatial Libraries: GDAL, Rasterio, GeoPandas)</li>
                  <li>JavaScript (Leaflet, OpenLayers, D3.js)</li>
                  <li>SQL & Spatial Databases (PostGIS)</li>
                  <li>Machine Learning for Geospatial Applications</li>
                  <li>Web Mapping & Geospatial APIs</li>
                  <li>Data Visualization & Dashboard Development</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>Software & Platforms</h4>
                <ul>
                  <li>ESRI ArcGIS Suite</li>
                  <li>Google Earth Engine</li>
                  <li>ENVI & ERDAS IMAGINE</li>
                  <li>AutoCAD & MicroStation</li>
                  <li>QGIS with Advanced Plugins</li>
                  <li>GeoServer & Web GIS Solutions</li>
                </ul>
              </div>
            </div>

            <!-- Skill Proficiency Section -->
            <div class="skill-proficiency">
              <h3>Technical Proficiency</h3>
              <div class="proficiency-item">
                <div class="skill-name">
                  <span>GIS Analysis & Spatial Modeling</span>
                  <span>95%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-level" :style="{ width: '95%' }"></div>
                </div>
              </div>
              <div class="proficiency-item">
                <div class="skill-name">
                  <span>Remote Sensing & Image Processing</span>
                  <span>90%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-level" :style="{ width: '90%' }"></div>
                </div>
              </div>
              <div class="proficiency-item">
                <div class="skill-name">
                  <span>Python Programming for Geospatial</span>
                  <span>88%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-level" :style="{ width: '88%' }"></div>
                </div>
              </div>
              <div class="proficiency-item">
                <div class="skill-name">
                  <span>Web GIS Development</span>
                  <span>85%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-level" :style="{ width: '85%' }"></div>
                </div>
              </div>
              <div class="proficiency-item">
                <div class="skill-name">
                  <span>Spatial Database Management</span>
                  <span>92%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-level" :style="{ width: '92%' }"></div>
                </div>
              </div>
            </div>

            <!-- Certifications Section -->
            <div class="certifications">
              <h3>Certifications & Specializations</h3>
              <div class="cert-grid">
                <div class="cert-item">
                  <h4>Google Earth Engine for Geospatial Analysis</h4>
                  <div class="cert-issuer">Google</div>
                  <div class="cert-date">2023</div>
                </div>
                <div class="cert-item">
                  <h4>Advanced Python for Geospatial Applications</h4>
                  <div class="cert-issuer">Esri</div>
                  <div class="cert-date">2022</div>
                </div>
                <div class="cert-item">
                  <h4>Remote Sensing for Earth Observation</h4>
                  <div class="cert-issuer">Polimi</div>
                  <div class="cert-date">2021</div>
                </div>
              </div>
            </div>
          </div>
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

// Scroll handler
const handleScroll = () => {
  // Scroll to top button visibility
  showScrollTop.value = window.scrollY > 300

  // Animate skill bars when in view
  animateSkillBars()
}

// Animate skill bars when in view
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll('.skill-level')
  const triggerPoint = window.innerHeight * 0.85

  skillBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top
    if (barTop < triggerPoint) {
      const width = bar.style.width
      bar.style.transition = 'width 1.5s ease-in-out'
      bar.style.width = width
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
  // Initial check for skill bars in view
  animateSkillBars()

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
  title: 'About - Ghulam Abbas Zafari | Geoinformatics Engineer',
  description: 'Professional Geoinformatics Engineer specializing in GIS, Remote Sensing, and spatial data analysis with extensive experience in cadastral surveying.',
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

/* Enhanced Page Header with Geospatial Background */
.page-header {
  position: relative;
  padding: 10rem 0 5rem;
  color: white;
  margin-bottom: 4rem;
  text-align: center;
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

/* Enhanced Contour Lines */
.contour-line {
  fill: none;
  stroke: url(#contourGradient);
  stroke-width: 2.5;
  stroke-linecap: round;
  filter: url(#glow);
}

.contour-1 { animation: contourFloat 12s ease-in-out infinite; }
.contour-2 { animation: contourFloat 14s ease-in-out infinite 1s; }
.contour-3 { animation: contourFloat 16s ease-in-out infinite 2s; }
.contour-4 { animation: contourFloat 18s ease-in-out infinite 3s; }
.contour-5 { animation: contourFloat 20s ease-in-out infinite 4s; }
.contour-6 { animation: contourFloat 22s ease-in-out infinite 5s; }

@keyframes contourFloat {
  0%, 100% {
    transform: translateY(0px);
    opacity: 0.6;
    stroke-width: 2.5;
  }
  25% {
    transform: translateY(-3px);
    opacity: 0.8;
    stroke-width: 3;
  }
  50% {
    transform: translateY(-6px);
    opacity: 1;
    stroke-width: 3.5;
  }
  75% {
    transform: translateY(-3px);
    opacity: 0.8;
    stroke-width: 3;
  }
}

/* Enhanced Data Points */
.data-point {
  fill: url(#dataGlow);
  filter: url(#glow);
  stroke: #ffffff;
  stroke-width: 1;
  stroke-opacity: 0.5;
}

.data-point.primary {
  animation: dataPulse 4s ease-in-out infinite;
  r: 6;
}

.data-point.secondary {
  animation: dataPulse 3s ease-in-out infinite;
  r: 4;
}

.data-cluster-1 .data-point { animation-delay: 0s; }
.data-cluster-2 .data-point { animation-delay: 0.5s; }
.data-cluster-3 .data-point { animation-delay: 1s; }

@keyframes dataPulse {
  0%, 100% {
    r: var(--base-size, 4);
    opacity: 0.7;
    stroke-width: 1;
  }
  50% {
    r: calc(var(--base-size, 4) + 2);
    opacity: 1;
    stroke-width: 2;
  }
}

.data-point.primary {
  --base-size: 6;
}

.data-point.secondary {
  --base-size: 4;
}

/* Enhanced Connection Lines */
.connection {
  fill: none;
  stroke: #4A90E2;
  stroke-width: 1.5;
  stroke-dasharray: 8 4;
  stroke-opacity: 0.6;
  filter: url(#glow);
}

.connection-1 { animation: connectionFlow 6s linear infinite; }
.connection-2 { animation: connectionFlow 7s linear infinite 0.5s; }
.connection-3 { animation: connectionFlow 8s linear infinite 1s; }
.connection-4 { animation: connectionFlow 9s linear infinite 1.5s; }
.connection-5 { animation: connectionFlow 10s linear infinite 2s; }
.connection-6 { animation: connectionFlow 11s linear infinite 2.5s; }
.connection-7 { animation: connectionFlow 12s linear infinite 3s; }
.connection-8 { animation: connectionFlow 13s linear infinite 3.5s; }

@keyframes connectionFlow {
  0% {
    stroke-dashoffset: 24;
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
}

/* Enhanced Grid System */
.grid-lines {
  animation: gridMove 40s linear infinite;
}

@keyframes gridMove {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(30px, 30px);
  }
}

/* Enhanced Satellite System */
.orbit {
  fill: none;
  stroke: #4A90E2;
  stroke-opacity: 0.25;
  stroke-width: 1.5;
  stroke-dasharray: 4 8;
}

.orbit-1 { animation: orbitPulse 8s ease-in-out infinite; }
.orbit-2 { animation: orbitPulse 10s ease-in-out infinite 1s; }
.orbit-3 { animation: orbitPulse 12s ease-in-out infinite 2s; }

@keyframes orbitPulse {
  0%, 100% {
    stroke-opacity: 0.2;
    stroke-dasharray: 4 8;
  }
  50% {
    stroke-opacity: 0.4;
    stroke-dasharray: 8 4;
  }
}

.satellite {
  fill: #FFD700;
  stroke: #FFA500;
  stroke-width: 1;
  filter: url(#glow);
}

.satellite-1 {
  animation: satelliteGlow 3s ease-in-out infinite;
}

.satellite-2 {
  animation: satelliteGlow 4s ease-in-out infinite 1s;
}

.satellite-3 {
  animation: satelliteGlow 5s ease-in-out infinite 2s;
}

@keyframes satelliteGlow {
  0%, 100% {
    r: 4;
    opacity: 0.7;
  }
  50% {
    r: 6;
    opacity: 1;
  }
}

/* Enhanced Scan Lines */
.scan-line {
  animation: scanMove 15s linear infinite;
}

@keyframes scanMove {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(800px);
    opacity: 0;
  }
}

/* Page Header Content */
.page-header .container {
  position: relative;
  z-index: 2;
}

.page-header h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: white;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
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
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* About Section */
.about-section {
  padding: 5rem 0;
  position: relative;
  background-color: var(--neutral-light);
  margin: 0 1rem 4rem;
  border-radius: 10px;
}

.about-content {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.profile-container {
  flex: 1;
  position: relative;
  min-width: 300px;
}

.profile-image {
  width: 100%;
  height: 400px;
  background-image: url('/images/Ghulam.jpeg');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 3px solid var(--secondary-water);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.02);
}

.about-text {
  flex: 2;
  background-color: var(--card-bg);
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
  position: relative;
  overflow: hidden;
}

.about-text::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, var(--afghan-black), var(--afghan-red), var(--afghan-green));
}

.about-text h2 {
  color: var(--primary-earth);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(46, 134, 171, 0.3);
}

.about-text p {
  margin-bottom: 2rem;
  color: var(--neutral-dark);
  font-size: 1.1rem;
  line-height: 1.8;
  font-family: 'Poppins', sans-serif;
}

.about-text h3 {
  color: var(--secondary-water);
  margin: 3rem 0 2rem;
}

.personal-info {
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 8px;
  margin-top: 3rem;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
  border-left: 3px solid var(--primary-earth);
  transition: transform 0.3s ease;
}

.personal-info:hover {
  transform: translateY(-5px);
}

.personal-info h3 {
  color: var(--primary-earth);
  margin-bottom: 1.5rem;
}

.personal-info ul {
  list-style: none;
  padding-left: 0;
}

.personal-info li {
  margin-bottom: 1rem;
  color: var(--neutral-dark);
  font-size: 1.05rem;
  font-family: 'Poppins', sans-serif;
}

.personal-info strong {
  color: var(--neutral-dark);
  font-weight: 600;
  margin-right: 0.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-links a {
  color: var(--neutral-dark);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(46, 134, 171, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.social-links a:hover {
  background: var(--secondary-water);
  color: white;
  transform: translateY(-3px);
}

/* CV Download Button */
.cv-download {
  margin-top: 2rem;
  text-align: center;
}

.cv-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--primary-earth);
  color: white;
  padding: 0.9rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(44, 85, 48, 0.3);
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
}

.cv-btn:hover {
  background: var(--secondary-water);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(46, 134, 171, 0.4);
}

/* Education Section */
.education-highlight {
  background: var(--neutral-light);
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  border-left: 4px solid var(--secondary-water);
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.education-highlight h4 {
  color: var(--primary-earth);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.education-date {
  color: var(--secondary-water);
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.thesis-title {
  color: var(--neutral-dark);
  font-style: italic;
  margin: 1rem 0;
  padding-left: 1rem;
  border-left: 2px solid var(--secondary-water);
}

/* Technical Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.skill-category {
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
  border-left: 4px solid var(--secondary-water);
  position: relative;
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(44, 85, 48, 0.15);
}

.skill-category h4 {
  color: var(--primary-earth);
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.skill-category h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--secondary-water);
}

.skill-category ul {
  list-style: none;
  padding-left: 0;
}

.skill-category li {
  margin-bottom: 0.8rem;
  color: var(--neutral-dark);
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  position: relative;
  padding-left: 1.5rem;
}

.skill-category li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--secondary-water);
  font-weight: bold;
}

/* Skill Proficiency Bars */
.skill-proficiency {
  margin-top: 3rem;
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
}

.skill-proficiency h3 {
  color: var(--primary-earth);
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Playfair Display', serif;
}

.proficiency-item {
  margin-bottom: 1.5rem;
}

.skill-name {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--neutral-dark);
  font-family: 'Poppins', sans-serif;
}

.skill-bar {
  height: 8px;
  background-color: rgba(46, 134, 171, 0.2);
  border-radius: 4px;
  overflow: hidden;
}

.skill-level {
  height: 100%;
  background: linear-gradient(90deg, var(--secondary-water), var(--accent-sky));
  border-radius: 4px;
  transition: width 1.5s ease-in-out;
  width: 0%;
}

/* Certifications Section */
.certifications {
  margin-top: 3rem;
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
}

.certifications h3 {
  color: var(--primary-earth);
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Playfair Display', serif;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.cert-item {
  background-color: var(--neutral-light);
  padding: 1.5rem;
  border-radius: 6px;
  border-left: 3px solid var(--secondary-water);
  transition: transform 0.3s ease;
}

.cert-item:hover {
  transform: translateY(-3px);
}

.cert-item h4 {
  color: var(--primary-earth);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.cert-issuer {
  color: var(--secondary-water);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.cert-date {
  color: var(--neutral-dark);
  font-size: 0.9rem;
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
  .about-content {
    flex-direction: column;
  }
  .profile-container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto 3rem;
  }
  .page-header h1 {
    font-size: 2.8rem;
  }
  h1 { font-size: 2.8rem; }
  h2 { font-size: 2.2rem; }
  h3 { font-size: 1.8rem; }
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
  .skills-grid {
    grid-template-columns: 1fr;
  }
  .cert-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .about-section {
    padding: 3rem 0;
    margin: 0 0.5rem 2rem;
  }
  .about-text {
    padding: 2rem;
  }
  .personal-info {
    padding: 2rem;
  }
  .education-highlight {
    padding: 1.5rem;
  }
  .skill-proficiency, .certifications {
    padding: 1.5rem;
  }
  .skill-category {
    padding: 1.5rem;
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