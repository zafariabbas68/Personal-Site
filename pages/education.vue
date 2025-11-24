<!-- pages/education.vue -->
<template>
  <div class="education-page">
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
  <li><NuxtLink to="/education" class="active" data-i18n="education">Education</NuxtLink></li>
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
  <li><NuxtLink to="/contact" class="contact-btn" data-i18n="contact">Contact</NuxtLink></li>
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
          <h1 data-i18n="education_title">Education</h1>
          <p data-i18n="education_subtitle">My academic journey and coursework</p>
        </div>
      </section>

      <section class="education-section">
        <div class="container">
          <div class="education-timeline">
            <!-- Master's Degree -->
            <div class="timeline-item">
              <div class="timeline-date">2023 – 2025</div>
              <div class="timeline-content">
                <div class="university-header">
                  <img src="/images/LogoPolimi.jpg" alt="Politecnico di Milano Logo" class="university-logo">
                  <div class="university-info">
                    <h3 data-i18n="masters_title">Master's Degree in Geoinformatics Engineering</h3>
                    <h4 data-i18n="masters_school">Politecnico di Milano, Italy</h4>
                  </div>
                </div>
                <p data-i18n="masters_description">Advanced studies in geospatial data analysis, remote sensing, and GIS technologies with focus on environmental monitoring and urban planning applications.</p>
                <div class="coursework">
                  <h5 data-i18n="relevant_coursework">Relevant Coursework:</h5>
                  <ul>
                    <li><strong data-i18n="course_gis">Geographic Information Systems (GIS):</strong> <span data-i18n="course_gis_desc">Developed a landslide susceptibility map and performed hazard analysis. Practical WebGIS development using GeoServer, QGIS, PostGIS, GRASS GIS, and SQL.</span></li>
                    <li><strong data-i18n="course_hypermedia">Hypermedia Applications:</strong> <span data-i18n="course_hypermedia_desc">Built a website as a course project using HTML, C++, and Python. Additionally, developed a full-stack Vue3/Nuxt3 web application for a non-profit center.</span></li>
                    <li><strong data-i18n="course_geospatial">Geospatial Data Analysis:</strong> <span data-i18n="course_geospatial_desc">Applied statistical methods and data modeling to spatial datasets.</span></li>
                    <li><strong data-i18n="course_data_quality">Data and Information Quality:</strong> <span data-i18n="course_data_quality_desc">Covered data quality assessment, profiling, error detection, cleaning, and fusion for databases, logs, sensors, and social media.</span></li>
                    <li><strong data-i18n="course_geospatial_processing">Geospatial Processing:</strong> <span data-i18n="course_geospatial_processing_desc">Integrated spatial data science concepts, formats, and algorithms with source code development in spatial workflows.</span></li>
                    <li><strong data-i18n="course_photogrammetry">Photogrammetry and Drone Image Processing:</strong> <span data-i18n="course_photogrammetry_desc">Learned photogrammetric principles for 3D reconstruction and orthophoto generation. Applied drone data in digital mapping.</span></li>
                    <li><strong data-i18n="course_earth_observation">Earth Observation – Advanced:</strong> <span data-i18n="course_earth_observation_desc">Focused on optical remote sensing and environmental applications using ESA SNAP.</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Bachelor's Degree -->
            <div class="timeline-item">
              <div class="timeline-date">2010 – 2014</div>
              <div class="timeline-content">
                <div class="university-header">
                  <img src="/images/Logo.png" alt="Kabul Polytechnic University Logo" class="university-logo">
                  <div class="university-info">
                    <h3 data-i18n="bachelors_title">Bachelor's Degree in Geodesy Engineering</h3>
                    <h4 data-i18n="bachelors_school">Kabul Polytechnic University, Afghanistan</h4>
                  </div>
                </div>
                <p data-i18n="bachelors_specialization">Specialization in cadastral surveying and cartography with focus on land administration and spatial data infrastructure.</p>
                <div class="coursework">
                  <h5>Core Geodesy Courses:</h5>
                  <ul>
                    <li><strong>Basic Geodesy:</strong> Introduction to geodetic principles, coordinate systems, and reference frames. Practical training in basic surveying techniques.</li>
                    <li><strong>Technical Drawing:</strong> Technical communication through engineering drawings, projections, and dimensioning standards.</li>
                    <li><strong>Geometric Drawing:</strong> Geometric constructions, projections, and descriptive geometry applications in surveying.</li>
                    <li><strong>Topographic Drawing:</strong> Creation and interpretation of topographic maps, contour lines, and terrain representation.</li>
                    <li><strong>Geology & Geomorphology:</strong> Earth structure, rock formations, and landform analysis for engineering applications.</li>
                    <li><strong>Geodesy II:</strong> Advanced geodetic concepts including coordinate transformations and geodetic networks.</li>
                    <li><strong>Basic Electronics:</strong> Fundamental electronic circuits and components relevant to surveying instrumentation.</li>
                    <li><strong>Mathematical Processing of Geodetic Measurement:</strong> Statistical analysis and adjustment of geodetic observations.</li>
                    <li><strong>Applied Geodesy:</strong> Practical applications in construction, mining, and engineering projects.</li>
                    <li><strong>Environmental Protection:</strong> Environmental impact assessment and sustainable development principles.</li>
                    <li><strong>Higher Geodesy:</strong> Advanced topics including physical geodesy, gravity field, and satellite positioning.</li>
                    <li><strong>Astronomy:</strong> Celestial coordinate systems and astronomical observations for geodetic applications.</li>
                    <li><strong>Electronic Tacheometer:</strong> Operation and application of modern electronic distance measurement instruments.</li>
                    <li><strong>Geodetic Survey Instruments:</strong> Comprehensive study of traditional and modern surveying equipment.</li>
                    <li><strong>Photogrammetry:</strong> Principles of aerial photography, stereo plotting, and 3D terrain modeling.</li>
                    <li><strong>Radio Geodesy Measurements:</strong> Use of radio signals and satellite systems for geodetic positioning.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="academic-projects">
            <h2 data-i18n="academic_projects">Academic Projects</h2>

            <div class="project-card">
              <h3 data-i18n="project1_title">Forest Cover and Land Cover Transitions in the Mediterranean Basin</h3>
              <ul>
                <li data-i18n="project1_point1">Analyzed land cover changes (1985–2022) using Landsat and Sentinel-2</li>
                <li data-i18n="project1_point2">Performed supervised classification (Random Forest)</li>
                <li data-i18n="project1_point3">Calculated transition matrices and linked changes to climate trends (Copernicus)</li>
                <li data-i18n="project1_point4">Visualized outputs with thematic maps and interactive dashboards (Python/Plotly)</li>
              </ul>
            </div>

            <div class="project-card">
              <h3 data-i18n="project2_title">Data Cleaning and Analysis Pipeline – Boston Crime Dataset</h3>
              <ul>
                <li data-i18n="project2_point1">Preprocessed and cleaned data using MICE imputation and Isolation Forest</li>
                <li data-i18n="project2_point2">Built a neural network classifier with 91% accuracy on cleaned vs 84% on raw data</li>
              </ul>
            </div>

            <div class="project-card">
              <h3 data-i18n="project3_title">Netflix Dataset: Exploratory and Predictive Analysis</h3>
              <ul>
                <li data-i18n="project3_point1">Analyzed content by genre, type, and release trends</li>
                <li data-i18n="project3_point2">Built regression/classification models using scikit-learn</li>
              </ul>
            </div>
          </div>

          <div class="certifications-section">
            <h2 data-i18n="certifications">Certifications</h2>
            <div class="certifications-grid">
              <div class="certification-card">
                <h3>Google Earth Engine for Geospatial Analysis</h3>
                <p>Google</p>
                <p class="certification-date">2023</p>
              </div>
              <div class="certification-card">
                <h3>Advanced Python for Geospatial Applications</h3>
                <p>Esri</p>
                <p class="certification-date">2022</p>
              </div>
              <div class="certification-card">
                <h3>Remote Sensing for Earth Observation</h3>
                <p>Polimi</p>
                <p class="certification-date">2024</p>
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
  title: 'Education - Ghulam Abbas Zafari | Geoinformatics Engineer',
  description: 'Academic background and educational journey of Ghulam Abbas Zafari, Geoinformatics Engineer and GIS Specialist.',
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

/* Education Section */
.education-section {
  padding: 5rem 0;
  position: relative;
  background-color: var(--neutral-light);
  margin: 0 1rem 4rem;
  border-radius: 10px;
}

.education-timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 1;
}

/* Timeline items */
.timeline-item {
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  border-left: 4px solid var(--secondary-water);
  position: relative;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(139, 115, 85, 0.1);
}

.timeline-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(44, 85, 48, 0.15);
}

.timeline-date {
  color: var(--secondary-water);
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: rgba(46, 134, 171, 0.1);
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
}

.timeline-content h3 {
  color: var(--primary-earth);
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-family: 'Playfair Display', serif;
}

.timeline-content h4 {
  color: var(--neutral-dark);
  margin-bottom: 1.5rem;
  font-style: italic;
  font-size: 1.3rem;
  font-family: 'Poppins', sans-serif;
}

.timeline-content p {
  color: var(--neutral-dark);
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
}

.coursework h5 {
  color: var(--primary-earth);
  margin: 2rem 0 1.5rem;
  font-size: 1.4rem;
  position: relative;
  padding-left: 1.5rem;
  font-family: 'Playfair Display', serif;
}

.coursework h5::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 70%;
  width: 4px;
  background-color: var(--secondary-water);
  border-radius: 2px;
}

.coursework ul {
  padding-left: 1.5rem;
}

.coursework li {
  margin-bottom: 1rem;
  color: var(--neutral-dark);
  line-height: 1.7;
  font-size: 1.05rem;
  position: relative;
  font-family: 'Poppins', sans-serif;
}

.coursework li::before {
  content: "▸";
  position: absolute;
  left: -1.5rem;
  color: var(--secondary-water);
  font-weight: bold;
}

/* University Logos */
.university-logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: white;
  padding: 10px;
}

.university-header {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.university-info {
  flex: 1;
}

/* Highlight strong elements */
strong {
  color: var(--primary-earth);
  font-weight: 600;
}

/* Academic projects */
.academic-projects {
  margin-top: 5rem;
  padding: 3rem 0;
  position: relative;
}

.academic-projects h2 {
  color: var(--primary-earth);
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  position: relative;
  display: inline-block;
}

.academic-projects h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--afghan-black), var(--afghan-red), var(--afghan-green));
}

.project-card {
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  border-left: 4px solid var(--secondary-water);
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(139, 115, 85, 0.1);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(44, 85, 48, 0.15);
}

.project-card h3 {
  color: var(--primary-earth);
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  font-family: 'Playfair Display', serif;
}

.project-card ul {
  padding-left: 1.5rem;
}

.project-card li {
  margin-bottom: 1rem;
  color: var(--neutral-dark);
  line-height: 1.7;
  font-size: 1.05rem;
  position: relative;
  font-family: 'Poppins', sans-serif;
}

.project-card li::before {
  content: "▸";
  position: absolute;
  left: -1.5rem;
  color: var(--secondary-water);
  font-weight: bold;
}

/* Certifications Section */
.certifications-section {
  margin-top: 5rem;
  padding: 3rem 0;
  position: relative;
}

.certifications-section h2 {
  color: var(--primary-earth);
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  position: relative;
  display: inline-block;
}

.certifications-section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--afghan-black), var(--afghan-red), var(--afghan-green));
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.certification-card {
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(139, 115, 85, 0.1);
  border-left: 4px solid var(--secondary-water);
  text-align: center;
}

.certification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(44, 85, 48, 0.15);
}

.certification-card h3 {
  color: var(--primary-earth);
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-family: 'Playfair Display', serif;
}

.certification-card p {
  color: var(--neutral-dark);
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
}

.certification-date {
  color: var(--secondary-water);
  font-weight: 500;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
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
  .page-header h1 {
    font-size: 2.8rem;
  }
  .academic-projects h2,
  .certifications-section h2 {
    font-size: 2.2rem;
  }
  .certifications-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  .university-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .university-logo {
    width: 100px;
    height: 100px;
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
  .certifications-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .education-section {
    padding: 3rem 0;
    margin: 0 0.5rem 2rem;
  }
  .timeline-item,
  .project-card,
  .certification-card {
    padding: 1.5rem;
  }
  .academic-projects h2,
  .certifications-section h2 {
    font-size: 2rem;
  }
  .university-logo {
    width: 80px;
    height: 80px;
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