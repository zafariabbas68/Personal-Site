<!-- pages/experience.vue -->
<template>
  <div class="experience-page">
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
  <li><NuxtLink to="/experience" class="active" data-i18n="experience">Experience</NuxtLink></li>
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
          <h1 data-i18n="experience_title">Professional Experience</h1>
          <p data-i18n="experience_subtitle">My career journey and professional achievements</p>
        </div>
      </section>

      <!-- Profile Section -->
      <section class="profile-section">
        <div class="container">
          <div class="profile-container">
            <img src="/images/Hilmand_Kajaki-dam.jpeg" alt="Ghulam Abbas Zafari" class="profile-image">
            <div class="profile-caption">
              <h3>Ghulam Abbas Zafari</h3>
              <p>Geoinformatics Engineer | GIS Specialist | Remote Sensing Expert</p>
            </div>
          </div>
        </div>
      </section>

      <section class="experience-section">
        <div class="container">
          <div class="experience-timeline">
            <!-- Cadastral Survey Engineer -->
            <div class="timeline-item">
              <div class="timeline-date">March 2018 - May 2021</div>
              <div class="timeline-content">
                <h3 data-i18n="job1_title">Cadastral Survey Engineer</h3>
                <h4 data-i18n="job1_company">Ministry of Urban Development and Land, Afghanistan</h4>
                <ul>
                  <li data-i18n="job1_point1">Managed work plans according to department requirements</li>
                  <li data-i18n="job1_point2">Conducted quality control and prepared topographic equipment for field operations</li>
                  <li data-i18n="job1_point3">Executed joint topographic surveys with clients</li>
                  <li data-i18n="job1_point4">Performed road alignment tracing and prepared as-built drawings</li>
                  <li data-i18n="job1_point5">Presented technical and progress reports to management</li>
                </ul>
              </div>
            </div>

            <!-- Add more experience items here as needed -->
          </div>

          <div class="skills-section">
            <h2 data-i18n="professional_skills">Professional Skills</h2>
            <div class="skills-grid">
              <div class="skill-category">
                <h3 data-i18n="skills_geospatial">Geospatial Technologies</h3>
                <ul>
                  <li data-i18n="skill_gis">GIS Analysis & Mapping</li>
                  <li data-i18n="skill_remote_sensing">Remote Sensing</li>
                  <li data-i18n="skill_cadastral">Cadastral Surveying</li>
                  <li data-i18n="skill_photogrammetry">Photogrammetry</li>
                  <li data-i18n="skill_drone">Drone Image Processing</li>
                </ul>
              </div>
              <div class="skill-category">
                <h3 data-i18n="skills_programming">Programming & Development</h3>
                <ul>
                  <li data-i18n="skill_python">Python (Advanced)</li>
                  <li data-i18n="skill_javascript">JavaScript</li>
                  <li data-i18n="skill_sql">SQL</li>
                  <li data-i18n="skill_web_dev">Web Development</li>
                  <li data-i18n="skill_database">Database Management</li>
                </ul>
              </div>
              <div class="skill-category">
                <h3 data-i18n="skills_data_science">Data Science</h3>
                <ul>
                  <li data-i18n="skill_ml">Machine Learning</li>
                  <li data-i18n="skill_stats">Statistical Analysis</li>
                  <li data-i18n="skill_viz">Data Visualization</li>
                  <li data-i18n="skill_cleaning">Data Cleaning</li>
                  <li data-i18n="skill_modeling">Predictive Modeling</li>
                </ul>
              </div>
              <div class="skill-category">
                <h3 data-i18n="skills_soft">Soft Skills</h3>
                <ul>
                  <li data-i18n="skill_pm">Project Management</li>
                  <li data-i18n="skill_reporting">Technical Reporting</li>
                  <li data-i18n="skill_collaboration">Team Collaboration</li>
                  <li data-i18n="skill_problem_solving">Problem Solving</li>
                  <li data-i18n="skill_learning">Continuous Learning</li>
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
                  <span>Python Programming for Geospatial</span>
                  <span>88%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-level" :style="{ width: '88%' }"></div>
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
          </div>

          <div class="references-section">
            <h2 data-i18n="references">References</h2>
            <div class="reference-card">
              <h3 data-i18n="ref1_name">Prof. Daniele Oxoli, PhD</h3>
              <p data-i18n="ref1_position">Researcher – RTT</p>
              <p data-i18n="ref1_department">Department of Civil and Environmental Engineering</p>
              <p data-i18n="ref1_university">Politecnico di Milano</p>
              <p><strong data-i18n="email">Email:</strong> daniele.oxoli@polimi.it</p>
              <p><strong data-i18n="phone">Phone:</strong> +39 339 869 7385</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Map Section with RTK Surveying Image -->
      <section class="map-section">
        <div class="container">
          <div class="map-container">
            <img src="/images/RTK- Surveying.jpg" alt="RTK Surveying in Action" class="map-image">
            <div class="map-caption">
              <h3>RTK Surveying in Action</h3>
              <p>Real-Time Kinematic (RTK) surveying provides centimeter-level accuracy for precise geospatial data collection and cadastral mapping.</p>
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

  // Add animation for skill bars
  const skillBars = document.querySelectorAll('.skill-level');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = '0%';
        setTimeout(() => {
          entry.target.style.width = width;
        }, 300);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => {
    observer.observe(bar);
  });
})

// SEO Meta
useSeoMeta({
  title: 'Experience - Ghulam Abbas Zafari | Geoinformatics Engineer',
  description: 'Professional experience and career journey of Ghulam Abbas Zafari, Geoinformatics Engineer and GIS Specialist.',
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

/* Profile Section */
.profile-section {
  padding: 3rem 0;
  background-color: var(--neutral-light);
}

.profile-container {
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
  text-align: center;
}

.profile-image {
  width: 100%;
  height: auto;
  display: block;
}

.profile-caption {
  padding: 1.5rem;
  background-color: var(--card-bg);
  border-top: 1px solid rgba(139, 115, 85, 0.1);
}

.profile-caption h3 {
  color: var(--primary-earth);
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
}

.profile-caption p {
  color: var(--neutral-dark);
  font-size: 1rem;
  line-height: 1.5;
}

/* Experience Section */
.experience-section {
  padding: 5rem 0;
  position: relative;
  background-color: var(--neutral-light);
  margin: 0 1rem 4rem;
  border-radius: 10px;
}

.experience-timeline {
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

.timeline-content ul {
  padding-left: 1.5rem;
}

.timeline-content li {
  margin-bottom: 1rem;
  color: var(--neutral-dark);
  line-height: 1.7;
  font-size: 1.05rem;
  position: relative;
  font-family: 'Poppins', sans-serif;
}

.timeline-content li::before {
  content: "▸";
  position: absolute;
  left: -1.5rem;
  color: var(--secondary-water);
  font-weight: bold;
}

/* Skills section */
.skills-section {
  margin-top: 5rem;
  padding: 3rem 0;
  position: relative;
}

.skills-section h2 {
  color: var(--primary-earth);
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  position: relative;
  display: inline-block;
}

.skills-section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--afghan-black), var(--afghan-red), var(--afghan-green));
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.skill-category {
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(139, 115, 85, 0.1);
  border-left: 4px solid var(--secondary-water);
  position: relative;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(44, 85, 48, 0.15);
}

.skill-category h3 {
  color: var(--primary-earth);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-family: 'Playfair Display', serif;
  position: relative;
  padding-bottom: 0.5rem;
}

.skill-category h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--secondary-water);
}

.skill-category ul {
  padding-left: 1.5rem;
}

.skill-category li {
  margin-bottom: 1rem;
  color: var(--neutral-dark);
  position: relative;
  font-family: 'Poppins', sans-serif;
}

.skill-category li::before {
  content: "▸";
  position: absolute;
  left: -1.5rem;
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
  transition: width 1s ease-in-out;
}

/* References section */
.references-section {
  margin-top: 5rem;
  padding: 3rem 0;
  position: relative;
}

.references-section h2 {
  color: var(--primary-earth);
  margin-bottom: 3rem;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
  position: relative;
  display: inline-block;
}

.references-section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--afghan-black), var(--afghan-red), var(--afghan-green));
}

.reference-card {
  background-color: var(--card-bg);
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
  border-left: 4px solid var(--secondary-water);
  max-width: 800px;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.reference-card:hover {
  transform: translateY(-5px);
}

.reference-card h3 {
  color: var(--primary-earth);
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  font-family: 'Playfair Display', serif;
}

.reference-card p {
  margin-bottom: 1rem;
  color: var(--neutral-dark);
  font-size: 1.05rem;
  font-family: 'Poppins', sans-serif;
}

.reference-card strong {
  color: var(--neutral-dark);
  font-weight: 600;
}

/* Map Section with RTK Surveying Image */
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
  .skills-section h2,
  .references-section h2 {
    font-size: 2.2rem;
  }
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .experience-section {
    padding: 3rem 0;
    margin: 0 0.5rem 2rem;
  }
  .timeline-item,
  .skill-category,
  .reference-card,
  .skill-proficiency {
    padding: 1.5rem;
  }
  .skills-section h2,
  .references-section h2 {
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