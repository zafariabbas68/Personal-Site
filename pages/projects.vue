<!-- pages/projects.vue -->
<template>
  <div class="projects-page">
    <!-- Navigation -->
    <header id="header" :class="{ scrolled: isScrolled }">
      <div class="header-content">
        <div class="container nav-container">
          <NuxtLink to="/" class="logo">
            <span class="logo-icon"><i class="fas fa-map-marked-alt"></i></span>
            <span>Ghulam Abbas Zafari</span>
          </NuxtLink>
          <ul class="nav-links" :class="{ active: isMenuOpen }" id="navLinks">
  <li><NuxtLink to="/" data-i18n="home">Home</NuxtLink></li>
  <li><NuxtLink to="/about" data-i18n="about">About</NuxtLink></li>
  <li><NuxtLink to="/projects" class="active" data-i18n="projects">Projects</NuxtLink></li>
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
  <li><NuxtLink to="/contact" class="contact-btn" data-i18n="contact">Contact</NuxtLink></li>
</ul>
          <div class="menu-toggle" id="menuToggle" @click="toggleMenu">
            <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="page-header">
        <div class="container">
          <h1 data-i18n="projects_title">My Projects</h1>
          <p data-i18n="projects_subtitle">Professional geospatial and data science implementations</p>
        </div>
      </section>

      <section class="projects-section">
        <div class="container">
          <div class="projects-filter">
            <button class="filter-btn active" data-filter="all" data-i18n="all_projects" @click="setFilter('all')">All Projects</button>
            <button class="filter-btn" data-filter="gis" data-i18n="gis_solutions" @click="setFilter('gis')">GIS Solutions</button>
            <button class="filter-btn" data-filter="remote-sensing" data-i18n="remote_sensing" @click="setFilter('remote-sensing')">Remote Sensing</button>
            <button class="filter-btn" data-filter="data-science" data-i18n="data_science" @click="setFilter('data-science')">Data Science</button>
            <button class="filter-btn" data-filter="web-development" data-i18n="web_development" @click="setFilter('web-development')">Web Development</button>
            <button class="filter-btn" data-filter="visualization" data-i18n="visualization" @click="setFilter('visualization')">Visualization</button>
          </div>

          <div class="projects-grid">
            <!-- Milan Urban Green Space Accessibility Analysis -->
            <div class="project-card" data-category="gis visualization data-science" data-project="milan" @click="openModal('milan')">
              <div class="project-visual">
                <div class="visual-container">
                  <img src="/images/enhanced_service_coverage_analysis.png" alt="Milan Urban Green Space Analysis">
                </div>
              </div>
              <div class="project-details">
                <h3>Milan Urban Green Space Accessibility Analysis</h3>
                <div class="project-meta">
                  <span class="date">2024</span>
                  <span class="duration">2 months</span>
                </div>
                <p class="project-description">
                  Comprehensive geospatial analysis evaluating accessibility and equity of parks and green spaces in Milan using network analysis and gravity modeling.
                </p>
                <div class="project-tech">
                  <span>Python</span>
                  <span>GeoPandas</span>
                  <span>OSMnx</span>
                  <span>NetworkX</span>
                  <span>Folium</span>
                </div>
                <div class="project-actions">
                  <a href="https://github.com/zafariabbas68/Milan-Urban-Green-Space-Accessibility-Analysis" target="_blank" class="btn primary-btn" @click.stop>View Code</a>
                  <a href="#" class="btn secondary-btn" @click.stop>View Report</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>

            <!-- NYC Urban Green Space Accessibility Analysis -->
            <div class="project-card" data-category="gis visualization" data-project="nyc" @click="openModal('nyc')">
              <div class="project-visual">
                <div class="visual-container">
                  <img src="/images/03_inaccessibility_analysis.png" alt="NYC Urban Green Space Analysis">
                </div>
              </div>
              <div class="project-details">
                <h3>NYC Urban Green Space Accessibility Analysis</h3>
                <div class="project-meta">
                  <span class="date">2024</span>
                  <span class="duration">1 month</span>
                </div>
                <p class="project-description">
                  Comprehensive analysis of public park accessibility across New York City using 0.5-mile walking distance threshold to identify underserved areas.
                </p>
                <div class="project-tech">
                  <span>Python</span>
                  <span>GeoPandas</span>
                  <span>Matplotlib</span>
                  <span>Contextily</span>
                  <span>Shapely</span>
                </div>
                <div class="project-actions">
                  <a href="https://github.com/zafariabbas68/NYC-Urban-Green-Space-Accessibility-Analysis" target="_blank" class="btn primary-btn" @click.stop>View Code</a>
                  <a href="#" class="btn secondary-btn" @click.stop>View Report</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>

            <!-- Convex Hull on a Sphere -->
            <div class="project-card" data-category="gis visualization data-science" data-project="convex" @click="openModal('convex')">
              <div class="project-visual">
                <div class="visual-container">
                  <img src="/images/convex_hull.png" alt="Convex Hull on a Sphere">
                </div>
              </div>
              <div class="project-details">
                <h3>Convex Hull on a Sphere: Advanced Visualization</h3>
                <div class="project-meta">
                  <span class="date">2024</span>
                  <span class="duration">3 weeks</span>
                </div>
                <p class="project-description">
                  Comprehensive implementation of convex hull computation and visualization on spherical surfaces with advanced 3D and 2D visualizations.
                </p>
                <div class="project-tech">
                  <span>Python</span>
                  <span>SciPy</span>
                  <span>Matplotlib 3D</span>
                  <span>Cartopy</span>
                  <span>NumPy</span>
                </div>
                <div class="project-actions">
                  <a href="https://github.com/zafariabbas68/Convex-Hull-Sphere-Visualization" target="_blank" class="btn primary-btn" @click.stop>View Code</a>
                  <a href="#" class="btn secondary-btn" @click.stop>View Demo</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>

            <!-- Freedom House Data Visualization -->
            <div class="project-card" data-category="web-development visualization data-science" data-project="freedom" @click="openModal('freedom')">
              <div class="project-visual">
                <div class="visual-container">
                  <img src="/images/newplot-2.png" alt="Freedom House Data Visualization">
                </div>
              </div>
              <div class="project-details">
                <h3>Freedom House Data Visualization Dashboard</h3>
                <div class="project-meta">
                  <span class="date">2024</span>
                  <span class="duration">1 month</span>
                </div>
                <p class="project-description">
                  Interactive data visualization dashboard displaying global freedom scores based on Freedom House data with interactive maps, time series charts, and country information.
                </p>
                <div class="project-tech">
                  <span>Python</span>
                  <span>Dash</span>
                  <span>Plotly</span>
                  <span>Pandas</span>
                  <span>PyCountry</span>
                </div>
                <div class="project-actions">
                  <a href="https://github.com/zafariabbas68/Freedom-House-Data-Visualisation" target="_blank" class="btn primary-btn" @click.stop>View Code</a>
                  <a href="https://freedom-house-dashboard.onrender.com" target="_blank" class="btn secondary-btn" @click.stop>Live Demo</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>

            <!-- Geospatial Comparative Analysis: Iran vs Italy -->
            <div class="project-card" data-category="gis remote-sensing visualization" data-project="iran-italy" @click="openModal('iran-italy')">
              <div class="project-visual">
                <div class="visual-container">
                  <img src="/images/Nighttime_light_intensity_analysis_(2015-2023)_Iran.png" alt="Geospatial Comparative Analysis">
                </div>
              </div>
              <div class="project-details">
                <h3>Geospatial Comparative Analysis: Iran vs Italy</h3>
                <div class="project-meta">
                  <span class="date">2025</span>
                  <span class="duration">3 months</span>
                </div>
                <p class="project-description">
                  Comprehensive geospatial analysis comparing land use/land cover (LULC) and nighttime lights between Iran and Italy using Google Earth Engine and Python.
                </p>
                <div class="project-tech">
                  <span>Google Earth Engine</span>
                  <span>Python</span>
                  <span>Geemap</span>
                  <span>Matplotlib</span>
                  <span>Pandas</span>
                </div>
                <div class="project-actions">
                  <a href="#" class="btn primary-btn" @click.stop>View Report</a>
                  <a href="#" class="btn secondary-btn" @click.stop>View Code</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>

            <!-- Seismic Globe Project -->
            <div class="project-card" data-category="gis visualization" data-project="seismic" @click="openModal('seismic')">
              <div class="project-visual">
                <div class="visual-container">
                  <video autoplay loop muted playsinline class="project-video">
                    <source src="/images/Earthquake_Globe_Animation.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div class="project-details">
                <h3>Seismic Globe: 3D Visualization of Global Earthquake Activity (2020–2024)</h3>
                <div class="project-meta">
                  <span class="date">2024</span>
                  <span class="duration">2 months</span>
                </div>
                <p class="project-description">Interactive 3D visualization tool that maps global earthquake activity from 2020 to 2024, fetching near-real-time seismic data from USGS.</p>
                <div class="project-tech">
                  <span>Python</span>
                  <span>Three.js</span>
                  <span>USGS API</span>
                </div>
                <div class="project-actions">
                  <a href="/reports/seismic_globe_report.pdf" target="_blank" class="btn primary-btn" @click.stop>Report</a>
                  <a href="#" class="btn secondary-btn" @click.stop>Demo</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>

            <!-- CityInsights Project -->
            <div class="project-card" data-category="gis visualization" data-project="cityinsights" @click="openModal('cityinsights')">
              <div class="project-visual">
                <div class="visual-container">
                  <img src="/images/barcelona_roads_parks_libraries_museums.png" alt="CityInsights Visualization" class="project-image">
                </div>
              </div>
              <div class="project-details">
                <h3>CityInsights: Urban Feature Visualization Using OpenStreetMap Data</h3>
                <div class="project-meta">
                  <span class="date">2024</span>
                  <span class="duration">3 months</span>
                </div>
                <p class="project-description">Python-based geospatial visualization tool that analyzes and maps key urban features using OpenStreetMap data.</p>
                <div class="project-tech">
                  <span>Python</span>
                  <span>OSMnx</span>
                  <span>GeoPandas</span>
                </div>
                <div class="project-actions">
                  <a href="/reports/City_insight_report.pdf" target="_blank" class="btn primary-btn" @click.stop>Report</a>
                  <a href="#" class="btn secondary-btn" @click.stop>Code</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>

            <!-- Mediterranean Project -->
            <div class="project-card" data-category="gis remote-sensing" data-project="mediterranean" @click="openModal('mediterranean')">
              <div class="project-visual">
                <div class="visual-container">
                  <img src="/images/mediterranean_1985.jpg" alt="Mediterranean Land Cover Comparison" class="project-image">
                </div>
              </div>
              <div class="project-details">
                <h3>Mediterranean Land Cover Dynamics (1985-2022)</h3>
                <div class="project-meta">
                  <span class="date">2023</span>
                  <span class="duration">3 months</span>
                </div>
                <p class="project-description">Analysis of land cover transitions across 12 Mediterranean countries using Landsat and Sentinel-2 data.</p>
                <div class="project-tech">
                  <span>Google Earth</span>
                  <span>Random Forest</span>
                  <span>PostGIS</span>
                </div>
                <div class="project-actions">
                  <a href="/projects/mediterranean-case-study.html" class="btn primary-btn" @click.stop>Case Study</a>
                  <a href="https://github.com/zafariabbas68/mediterranean-landcover" target="_blank" class="btn secondary-btn" @click.stop>Code</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>

            <!-- Boston Crime Project -->
            <div class="project-card" data-category="data-science" data-project="boston" @click="openModal('boston')">
              <div class="project-visual">
                <div class="visual-container">
                  <img src="/images/boston-crime.jpg" alt="Boston Crime Analysis" class="project-image">
                </div>
              </div>
              <div class="project-details">
                <h3>Boston Crime Analysis & Prediction</h3>
                <div class="project-meta">
                  <span class="date">2022</span>
                  <span class="duration">2 months</span>
                </div>
                <p class="project-description">Advanced data pipeline for cleaning and analyzing 2.4M crime records with 91% classification accuracy.</p>
                <div class="project-tech">
                  <span>Python</span>
                  <span>TensorFlow</span>
                  <span>Scikit-learn</span>
                </div>
                <div class="project-actions">
                  <a href="/reports/report-crimes.pdf" target="_blank" class="btn primary-btn" @click.stop>Report</a>
                  <a href="https://github.com/zafariabbas68/boston-crime-analysis" target="_blank" class="btn secondary-btn" @click.stop>Code</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>

            <!-- Air Quality Project -->
            <div class="project-card" data-category="web-development gis" data-project="airquality" @click="openModal('airquality')">
              <div class="project-visual">
                <div class="visual-container">
                  <img src="/images/air-quality.jpg" alt="Air Quality Dashboard" class="project-image">
                </div>
              </div>
              <div class="project-details">
                <h3>Real-time Air Quality Monitoring</h3>
                <div class="project-meta">
                  <span class="date">2023</span>
                  <span class="duration">1 month</span>
                </div>
                <p class="project-description">Interactive dashboard visualizing real-time air quality data from 47 sensors across Milan.</p>
                <div class="project-tech">
                  <span>Python</span>
                  <span>Dash/Plotly</span>
                  <span>PostgreSQL</span>
                </div>
                <div class="project-actions">
                  <a href="https://air-quality-dashboard.onrender.com" target="_blank" class="btn primary-btn" @click.stop>Demo</a>
                  <a href="https://github.com/zafariabbas68/air-quality-dashboard" target="_blank" class="btn secondary-btn" @click.stop>Code</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>

            <!-- SphereStats Project -->
            <div class="project-card" data-category="gis web-development" data-project="spherestats" @click="openModal('spherestats')">
              <div class="project-visual">
                <div class="visual-container">
                  <img src="/images/newyork_isochrones.gif" alt="SphereStats Demo" class="project-image">
                </div>
              </div>
              <div class="project-details">
                <h3>SphereStats Geospatial Library</h3>
                <div class="project-meta">
                  <span class="date">2022-Present</span>
                  <span class="duration">Ongoing</span>
                </div>
                <p class="project-description">Open-source Python library for advanced geospatial analysis with 12 core algorithms.</p>
                <div class="project-tech">
                  <span>Python</span>
                  <span>GeoPandas</span>
                  <span>NetworkX</span>
                </div>
                <div class="project-actions">
                  <a href="https://pypi.org/project/spherestats/" target="_blank" class="btn primary-btn" @click.stop>PyPI</a>
                  <a href="https://github.com/zafariabbas68/spherestats" target="_blank" class="btn secondary-btn" @click.stop>Repo</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>

            <!-- Netflix Project -->
            <div class="project-card" data-category="data-science" data-project="netflix" @click="openModal('netflix')">
              <div class="project-visual">
                <div class="visual-container">
                  <img src="/images/netflix.jpg" alt="Netflix Analysis" class="project-image">
                </div>
              </div>
              <div class="project-details">
                <h3>Netflix Content Analysis</h3>
                <div class="project-meta">
                  <span class="date">2022</span>
                  <span class="duration">3 weeks</span>
                </div>
                <p class="project-description">Comprehensive analysis of Netflix's content library with predictive models.</p>
                <div class="project-tech">
                  <span>Python</span>
                  <span>Pandas</span>
                  <span>Scikit-learn</span>
                </div>
                <div class="project-actions">
                  <a href="/projects/netflix-analysis.html" class="btn primary-btn" @click.stop>Analysis</a>
                  <a href="https://github.com/zafariabbas68/netflix-analysis" target="_blank" class="btn secondary-btn" @click.stop>Code</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>

            <!-- Landslide Project -->
            <div class="project-card" data-category="gis remote-sensing" data-project="landslide" @click="openModal('landslide')">
              <div class="project-visual">
                <div class="visual-container">
                  <img src="/images/landslide.jpg" alt="Landslide Susceptibility" class="project-image">
                </div>
              </div>
              <div class="project-details">
                <h3>Landslide Susceptibility Mapping</h3>
                <div class="project-meta">
                  <span class="date">2021</span>
                  <span class="duration">2 months</span>
                </div>
                <p class="project-description">Machine learning-based susceptibility analysis for Northern Italy with 89% accuracy.</p>
                <div class="project-tech">
                  <span>ArcGIS</span>
                  <span>GeoServer</span>
                  <span>PostGIS</span>
                </div>
                <div class="project-actions">
                  <a href="/reports/LANDSLIDE_SUSCEPTIBILITY.pdf" target="_blank" class="btn primary-btn" @click.stop>Report</a>
                  <a href="https://github.com/zafariabbas68/landslide-analysis" target="_blank" class="btn secondary-btn" @click.stop>Code</a>
                  <a href="#" class="btn tertiary-btn" @click.stop>Continue Reading</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Project Detail Modals -->
    <!-- Milan Modal -->
    <div v-if="activeModal === 'milan'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">Milan Urban Green Space Accessibility Analysis</h2>
            <div class="modal-meta">
              <span>2024</span>
              <span>2 months</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <img src="/images/enhanced_service_coverage_analysis.png" alt="Milan Service Coverage Analysis" class="modal-image">
            <img src="/images/service_area_overlap_analysis.png" alt="Milan Service Area Overlap" class="modal-image">
          </div>
          <p class="modal-description">
            A comprehensive geospatial analysis project evaluating the accessibility and equity of parks and green spaces in Milan, Italy. This project utilizes advanced network analysis, gravity modeling, and environmental justice frameworks to provide data-driven insights for urban planning. The analysis reveals that while 98.4% of Milan's population lives within a 10-minute walk of a green space, specific areas remain underserved. The project provides strategic recommendations to address these gaps and promote equitable access.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>Network-Based Accessibility: Calculates service areas for 400m (5-min) and 800m (10-min) walking distances using Milan's pedestrian network</li>
                <li>Gravity Model Analysis: Computes a nuanced accessibility score that factors in both distance to parks and their size/attractiveness</li>
                <li>Environmental Justice Assessment: Analyzes correlations between green space access and simulated socioeconomic variables</li>
                <li>Interactive Web Mapping: Generates an interactive Folium map to explore parks, population density, and service areas</li>
                <li>Policy-Ready Outputs: Produces visualizations, statistics, and clear recommendations for urban planners and policymakers</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Total Green Space: 49,890.8 hectares across 1,073 parks</li>
                <li>Green Space per Capita: 366.8 m²/person (WHO Standard: 9 m²/person)</li>
                <li>Population Served within 5-min walk: 93.5%</li>
                <li>Population Served within 10-min walk: 98.4%</li>
                <li>Population Unserved: 21,551 people lack access within a 10-minute walk</li>
                <li>Equity Findings: No strong systemic bias found; weak correlation between income and accessibility (r = 0.023)</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>Python</span>
            <span>GeoPandas</span>
            <span>OSMnx</span>
            <span>NetworkX</span>
            <span>Folium</span>
            <span>Matplotlib</span>
            <span>Seaborn</span>
            <span>NumPy</span>
            <span>Pandas</span>
          </div>
          <div class="modal-actions">
            <a href="https://github.com/zafariabbas68/Milan-Urban-Green-Space-Accessibility-Analysis" target="_blank" class="btn primary-btn">View Code on GitHub</a>
            <a href="#" class="btn secondary-btn">Download Full Report</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- NYC Modal -->
    <div v-if="activeModal === 'nyc'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">NYC Urban Green Space Accessibility Analysis</h2>
            <div class="modal-meta">
              <span>2024</span>
              <span>1 month</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <img src="/images/03_inaccessibility_analysis.png" alt="NYC Inaccessibility Analysis" class="modal-image">
          </div>
          <p class="modal-description">
            A comprehensive geospatial analysis of public park accessibility across New York City using a 0.5-mile walking distance threshold to identify underserved areas. This project evaluates the distribution of green spaces across NYC's five boroughs and identifies neighborhoods with limited access to parks and recreational areas.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>Buffer Analysis: Uses 0.5-mile walking distance buffers around all public parks</li>
                <li>Population Analysis: Calculates population served and unserved by park access</li>
                <li>Borough Comparison: Compares accessibility metrics across NYC's five boroughs</li>
                <li>Spatial Visualization: Creates detailed maps showing park locations and service areas</li>
                <li>Equity Assessment: Identifies neighborhoods with disproportionate lack of green space access</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Total Parks Analyzed: Over 1,700 public parks across NYC</li>
                <li>Population Served: Percentage of NYC residents within 0.5 miles of a park</li>
                <li>Borough Variations: Significant differences in park accessibility between boroughs</li>
                <li>Underserved Areas: Identification of specific neighborhoods lacking adequate park access</li>
                <li>Policy Recommendations: Data-driven suggestions for improving green space equity</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>Python</span>
            <span>GeoPandas</span>
            <span>Matplotlib</span>
            <span>Contextily</span>
            <span>Shapely</span>
            <span>Pandas</span>
            <span>NumPy</span>
          </div>
          <div class="modal-actions">
            <a href="https://github.com/zafariabbas68/NYC-Urban-Green-Space-Accessibility-Analysis" target="_blank" class="btn primary-btn">View Code on GitHub</a>
            <a href="#" class="btn secondary-btn">Download Full Report</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- Convex Hull Modal -->
    <div v-if="activeModal === 'convex'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">Convex Hull on a Sphere: Advanced Visualization</h2>
            <div class="modal-meta">
              <span>2024</span>
              <span>3 weeks</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <img src="/images/convex_hull.png" alt="Convex Hull Visualization" class="modal-image">
          </div>
          <p class="modal-description">
            A comprehensive implementation of convex hull computation and visualization on spherical surfaces with advanced 3D and 2D visualizations. This project addresses the mathematical and computational challenges of working with spherical geometry and provides intuitive visualizations of complex spatial relationships.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>Spherical Geometry: Implements convex hull algorithms specifically designed for spherical surfaces</li>
                <li>3D Visualization: Creates interactive 3D visualizations of convex hulls on spheres</li>
                <li>2D Projections: Provides multiple 2D map projections for different analytical perspectives</li>
                <li>Algorithm Comparison: Compares different convex hull algorithms for spherical data</li>
                <li>Performance Optimization: Optimized implementations for handling large datasets</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Algorithm Implementation: Successfully implemented multiple convex hull algorithms for spherical data</li>
                <li>Visualization Quality: High-quality 3D and 2D visualizations of complex spatial relationships</li>
                <li>Performance Metrics: Benchmark results showing algorithm efficiency and accuracy</li>
                <li>Application Examples: Practical examples demonstrating real-world applications</li>
                <li>Documentation: Comprehensive documentation and usage examples</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>Python</span>
            <span>SciPy</span>
            <span>Matplotlib 3D</span>
            <span>Cartopy</span>
            <span>NumPy</span>
            <span>Scikit-learn</span>
          </div>
          <div class="modal-actions">
            <a href="https://github.com/zafariabbas68/Convex-Hull-Sphere-Visualization" target="_blank" class="btn primary-btn">View Code on GitHub</a>
            <a href="#" class="btn secondary-btn">View Interactive Demo</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- Freedom House Modal -->
    <div v-if="activeModal === 'freedom'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">Freedom House Data Visualization Dashboard</h2>
            <div class="modal-meta">
              <span>2024</span>
              <span>1 month</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <img src="/images/newplot-2.png" alt="Freedom House Dashboard" class="modal-image">
          </div>
          <p class="modal-description">
            An interactive data visualization dashboard displaying global freedom scores based on Freedom House data. This dashboard provides comprehensive insights into political rights and civil liberties around the world through interactive maps, time series charts, and detailed country information.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>Interactive World Map: Color-coded map showing freedom scores by country</li>
                <li>Time Series Analysis: Historical trends in freedom scores over multiple decades</li>
                <li>Country Comparison: Side-by-side comparison of multiple countries</li>
                <li>Regional Analysis: Aggregate statistics and trends by world regions</li>
                <li>Detailed Country Profiles: In-depth information for individual countries</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Data Coverage: Comprehensive coverage of 195 countries over multiple years</li>
                <li>User Engagement: Intuitive interface allowing for easy exploration of complex data</li>
                <li>Performance: Fast loading times and responsive interactions</li>
                <li>Insight Generation: Clear visualization of global freedom trends and patterns</li>
                <li>Accessibility: Mobile-responsive design for access on various devices</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>Python</span>
            <span>Dash</span>
            <span>Plotly</span>
            <span>Pandas</span>
            <span>PyCountry</span>
            <span>NumPy</span>
          </div>
          <div class="modal-actions">
            <a href="https://github.com/zafariabbas68/Freedom-House-Data-Visualisation" target="_blank" class="btn primary-btn">View Code on GitHub</a>
            <a href="https://freedom-house-dashboard.onrender.com" target="_blank" class="btn secondary-btn">View Live Dashboard</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- Iran-Italy Modal -->
    <div v-if="activeModal === 'iran-italy'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">Geospatial Comparative Analysis: Iran vs Italy</h2>
            <div class="modal-meta">
              <span>2025</span>
              <span>3 months</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <img src="/images/Nighttime_light_intensity_analysis_(2015-2023)_Iran.png" alt="Iran-Italy Comparison" class="modal-image">
          </div>
          <p class="modal-description">
            A comprehensive geospatial analysis comparing land use/land cover (LULC) and nighttime lights between Iran and Italy using Google Earth Engine and Python. This project examines the environmental and developmental differences between these two geographically and culturally distinct countries through advanced remote sensing and spatial analysis techniques.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>Land Use/Land Cover Analysis: Comparative analysis of LULC patterns and changes</li>
                <li>Nighttime Lights: Examination of nighttime light intensity as a proxy for economic activity</li>
                <li>Temporal Analysis: Multi-year analysis from 2015 to 2023</li>
                <li>Environmental Indicators: Assessment of vegetation cover, urbanization patterns, and environmental changes</li>
                <li>Statistical Comparison: Quantitative comparison of various geospatial metrics</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Urbanization Patterns: Distinct differences in urban growth patterns between Iran and Italy</li>
                <li>Economic Indicators: Correlation between nighttime light intensity and economic development</li>
                <li>Environmental Changes: Tracking of environmental changes over the study period</li>
                <li>Regional Variations: Analysis of sub-national variations within each country</li>
                <li>Policy Implications: Insights relevant to urban planning and environmental policy</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>Google Earth Engine</span>
            <span>Python</span>
            <span>Geemap</span>
            <span>Matplotlib</span>
            <span>Pandas</span>
            <span>NumPy</span>
          </div>
          <div class="modal-actions">
            <a href="#" class="btn primary-btn">Download Full Report</a>
            <a href="#" class="btn secondary-btn">View Analysis Code</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- Seismic Globe Modal -->
    <div v-if="activeModal === 'seismic'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">Seismic Globe: 3D Visualization of Global Earthquake Activity (2020–2024)</h2>
            <div class="modal-meta">
              <span>2024</span>
              <span>2 months</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <video autoplay loop muted playsinline class="modal-image">
              <source src="/images/Earthquake_Globe_Animation.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <p class="modal-description">
            An interactive 3D visualization tool that maps global earthquake activity from 2020 to 2024, fetching near-real-time seismic data from USGS. This project provides an immersive experience for exploring earthquake patterns, magnitudes, and depths across the globe, helping to visualize seismic risk and tectonic activity.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>3D Globe Visualization: Interactive 3D globe showing earthquake locations and magnitudes</li>
                <li>Real-time Data: Integration with USGS API for near-real-time earthquake data</li>
                <li>Temporal Filtering: Ability to filter earthquakes by date and time range</li>
                <li>Magnitude Visualization: Visual encoding of earthquake magnitudes through size and color</li>
                <li>Depth Analysis: Representation of earthquake depths through 3D positioning</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Data Integration: Successful integration of USGS earthquake data feeds</li>
                <li>Visualization Quality: High-quality 3D visualizations with smooth interactions</li>
                <li>User Experience: Intuitive interface for exploring complex seismic data</li>
                <li>Performance: Efficient handling of large earthquake datasets</li>
                <li>Educational Value: Effective tool for understanding global seismic patterns</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>Python</span>
            <span>Three.js</span>
            <span>USGS API</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
          </div>
          <div class="modal-actions">
            <a href="/reports/seismic_globe_report.pdf" target="_blank" class="btn primary-btn">Download Technical Report</a>
            <a href="#" class="btn secondary-btn">View Interactive Demo</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- CityInsights Modal -->
    <div v-if="activeModal === 'cityinsights'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">CityInsights: Urban Feature Visualization Using OpenStreetMap Data</h2>
            <div class="modal-meta">
              <span>2024</span>
              <span>3 months</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <img src="/images/barcelona_roads_parks_libraries_museums.png" alt="CityInsights Visualization" class="modal-image">
          </div>
          <p class="modal-description">
            A Python-based geospatial visualization tool that analyzes and maps key urban features using OpenStreetMap data. This project provides comprehensive insights into urban infrastructure, green spaces, and public amenities across multiple cities, enabling comparative urban analysis and planning.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>Multi-City Analysis: Supports analysis of urban features across multiple global cities</li>
                <li>Infrastructure Mapping: Visualizes road networks, public transportation, and utilities</li>
                <li>Green Space Analysis: Identifies and analyzes parks, recreational areas, and natural spaces</li>
                <li>Public Amenities: Maps libraries, museums, schools, and other public facilities</li>
                <li>Comparative Metrics: Provides quantitative comparisons between different urban areas</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Data Integration: Successfully integrated OpenStreetMap data for multiple cities</li>
                <li>Visualization Quality: High-quality maps showing detailed urban features</li>
                <li>Analysis Capabilities: Comprehensive analysis of urban infrastructure and amenities</li>
                <li>User Interface: Intuitive interface for exploring and comparing cities</li>
                <li>Documentation: Complete documentation and usage examples</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>Python</span>
            <span>OSMnx</span>
            <span>GeoPandas</span>
            <span>Matplotlib</span>
            <span>NetworkX</span>
            <span>Pandas</span>
          </div>
          <div class="modal-actions">
            <a href="/reports/City_insight_report.pdf" target="_blank" class="btn primary-btn">Download Technical Report</a>
            <a href="#" class="btn secondary-btn">View Analysis Code</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- Mediterranean Modal -->
    <div v-if="activeModal === 'mediterranean'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">Mediterranean Land Cover Dynamics (1985-2022)</h2>
            <div class="modal-meta">
              <span>2023</span>
              <span>3 months</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <img src="/images/mediterranean_1985.jpg" alt="Mediterranean Land Cover" class="modal-image">
          </div>
          <p class="modal-description">
            Analysis of land cover transitions across 12 Mediterranean countries using Landsat and Sentinel-2 data. This project examines the environmental changes in the Mediterranean region over nearly four decades, providing insights into urbanization, agricultural expansion, deforestation, and other land use changes.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>Multi-temporal Analysis: Land cover analysis spanning from 1985 to 2022</li>
                <li>Regional Coverage: Comprehensive analysis of 12 Mediterranean countries</li>
                <li>Change Detection: Identification and quantification of land cover transitions</li>
                <li>Environmental Impact: Assessment of environmental consequences of land use changes</li>
                <li>Policy Implications: Insights relevant to environmental policy and sustainable development</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Urban Expansion: Documented significant urban growth in coastal areas</li>
                <li>Agricultural Changes: Identified patterns of agricultural intensification and abandonment</li>
                <li>Forest Dynamics: Tracked deforestation and reforestation patterns</li>
                <li>Climate Correlations: Examined relationships between land cover changes and climate variables</li>
                <li>Conservation Priorities: Identified areas requiring conservation attention</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>Google Earth Engine</span>
            <span>Python</span>
            <span>Random Forest</span>
            <span>PostGIS</span>
            <span>QGIS</span>
            <span>R</span>
          </div>
          <div class="modal-actions">
            <a href="/projects/mediterranean-case-study.html" class="btn primary-btn">View Case Study</a>
            <a href="https://github.com/zafariabbas68/mediterranean-landcover" target="_blank" class="btn secondary-btn">View Code on GitHub</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- Boston Crime Modal -->
    <div v-if="activeModal === 'boston'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">Boston Crime Analysis & Prediction</h2>
            <div class="modal-meta">
              <span>2022</span>
              <span>2 months</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <img src="/images/boston-crime.jpg" alt="Boston Crime Analysis" class="modal-image">
          </div>
          <p class="modal-description">
            Advanced data pipeline for cleaning and analyzing 2.4 million crime records from Boston with 91% classification accuracy. This project combines data engineering, machine learning, and spatial analysis to identify crime patterns and predict future incidents, providing valuable insights for law enforcement and urban safety planning.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>Data Pipeline: Comprehensive data cleaning and preprocessing pipeline for crime data</li>
                <li>Machine Learning: Multiple classification models for crime type prediction</li>
                <li>Spatial Analysis: Geographic patterns and hotspots of criminal activity</li>
                <li>Temporal Analysis: Seasonal and diurnal patterns in crime occurrence</li>
                <li>Predictive Modeling: Models for predicting crime likelihood in different areas</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Data Processing: Successfully processed 2.4 million crime records</li>
                <li>Model Accuracy: Achieved 91% classification accuracy for crime types</li>
                <li>Hotspot Identification: Identified significant crime hotspots across Boston</li>
                <li>Pattern Recognition: Discovered temporal and spatial patterns in criminal activity</li>
                <li>Practical Applications: Insights applicable to law enforcement and urban planning</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>Python</span>
            <span>TensorFlow</span>
            <span>Scikit-learn</span>
            <span>Pandas</span>
            <span>GeoPandas</span>
            <span>Matplotlib</span>
          </div>
          <div class="modal-actions">
            <a href="/reports/report-crimes.pdf" target="_blank" class="btn primary-btn">Download Technical Report</a>
            <a href="https://github.com/zafariabbas68/boston-crime-analysis" target="_blank" class="btn secondary-btn">View Code on GitHub</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- Air Quality Modal -->
    <div v-if="activeModal === 'airquality'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">Real-time Air Quality Monitoring</h2>
            <div class="modal-meta">
              <span>2023</span>
              <span>1 month</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <img src="/images/air-quality.jpg" alt="Air Quality Dashboard" class="modal-image">
          </div>
          <p class="modal-description">
            Interactive dashboard visualizing real-time air quality data from 47 sensors across Milan. This project provides comprehensive monitoring of air pollution levels, enabling citizens and policymakers to track environmental conditions and make informed decisions about outdoor activities and environmental policies.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>Real-time Monitoring: Live data from 47 air quality sensors across Milan</li>
                <li>Pollutant Tracking: Monitoring of PM2.5, PM10, NO2, O3, and other pollutants</li>
                <li>Interactive Maps: Geographic visualization of air quality across the city</li>
                <li>Temporal Analysis: Historical trends and forecasting of air quality</li>
                <li>Health Recommendations: Personalized recommendations based on air quality levels</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Data Integration: Successful integration of multiple air quality data sources</li>
                <li>User Engagement: High user engagement with the interactive dashboard</li>
                <li>Performance: Real-time data processing and visualization</li>
                <li>Accessibility: Mobile-responsive design for access on various devices</li>
                <li>Impact: Valuable tool for environmental awareness and policy planning</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>Python</span>
            <span>Dash/Plotly</span>
            <span>PostgreSQL</span>
            <span>Pandas</span>
            <span>GeoPandas</span>
            <span>NumPy</span>
          </div>
          <div class="modal-actions">
            <a href="https://air-quality-dashboard.onrender.com" target="_blank" class="btn primary-btn">View Live Dashboard</a>
            <a href="https://github.com/zafariabbas68/air-quality-dashboard" target="_blank" class="btn secondary-btn">View Code on GitHub</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- SphereStats Modal -->
    <div v-if="activeModal === 'spherestats'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">SphereStats Geospatial Library</h2>
            <div class="modal-meta">
              <span>2022-Present</span>
              <span>Ongoing</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <img src="/images/newyork_isochrones.gif" alt="SphereStats Demo" class="modal-image">
          </div>
          <p class="modal-description">
            Open-source Python library for advanced geospatial analysis with 12 core algorithms. SphereStats provides specialized tools for spherical geometry, network analysis, and spatial statistics, making complex geospatial computations accessible to researchers, analysts, and developers working with global-scale data.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>Spherical Geometry: Advanced algorithms for working with spherical coordinates</li>
                <li>Network Analysis: Tools for analyzing spatial networks on spherical surfaces</li>
                <li>Spatial Statistics: Statistical methods adapted for spherical data</li>
                <li>Performance Optimization: Efficient implementations for large datasets</li>
                <li>Documentation: Comprehensive documentation with examples and tutorials</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Algorithm Library: 12 core algorithms for spherical geospatial analysis</li>
                <li>User Adoption: Growing community of users and contributors</li>
                <li>Performance: Optimized implementations for efficient computation</li>
                <li>Documentation: Comprehensive documentation and usage examples</li>
                <li>Integration: Compatible with popular geospatial libraries like GeoPandas and Shapely</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>Python</span>
            <span>GeoPandas</span>
            <span>NetworkX</span>
            <span>NumPy</span>
            <span>SciPy</span>
            <span>Shapely</span>
          </div>
          <div class="modal-actions">
            <a href="https://pypi.org/project/spherestats/" target="_blank" class="btn primary-btn">View on PyPI</a>
            <a href="https://github.com/zafariabbas68/spherestats" target="_blank" class="btn secondary-btn">View Code on GitHub</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- Netflix Modal -->
    <div v-if="activeModal === 'netflix'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">Netflix Content Analysis</h2>
            <div class="modal-meta">
              <span>2022</span>
              <span>3 weeks</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <img src="/images/netflix.jpg" alt="Netflix Analysis" class="modal-image">
          </div>
          <p class="modal-description">
            Comprehensive analysis of Netflix's content library with predictive models. This project examines the streaming giant's content strategy, genre distribution, regional variations, and viewer preferences, providing insights into the evolving landscape of digital entertainment and content consumption patterns.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>Content Analysis: Comprehensive analysis of Netflix's content library</li>
                <li>Genre Distribution: Examination of content across different genres and categories</li>
                <li>Regional Variations: Analysis of content availability across different regions</li>
                <li>Predictive Modeling: Models for predicting content popularity and success</li>
                <li>Trend Analysis: Identification of content trends and patterns over time</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Content Insights: Detailed analysis of Netflix's content strategy</li>
                <li>Regional Patterns: Identification of regional variations in content availability</li>
                <li>Predictive Accuracy: Successful prediction of content popularity</li>
                <li>Trend Identification: Discovery of emerging content trends</li>
                <li>Strategic Implications: Insights relevant to content strategy and acquisition</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>Python</span>
            <span>Pandas</span>
            <span>Scikit-learn</span>
            <span>Matplotlib</span>
            <span>Seaborn</span>
            <span>NumPy</span>
          </div>
          <div class="modal-actions">
            <a href="/projects/netflix-analysis.html" class="btn primary-btn">View Detailed Analysis</a>
            <a href="https://github.com/zafariabbas68/netflix-analysis" target="_blank" class="btn secondary-btn">View Code on GitHub</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- Landslide Modal -->
    <div v-if="activeModal === 'landslide'" class="project-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <div>
            <h2 class="modal-title">Landslide Susceptibility Mapping</h2>
            <div class="modal-meta">
              <span>2021</span>
              <span>2 months</span>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-visuals">
            <img src="/images/landslide.jpg" alt="Landslide Susceptibility" class="modal-image">
          </div>
          <p class="modal-description">
            Machine learning-based susceptibility analysis for Northern Italy with 89% accuracy. This project combines geological data, terrain analysis, and machine learning to identify areas at high risk of landslides, providing valuable information for land use planning, infrastructure development, and disaster risk reduction.
          </p>
          <div class="modal-features">
            <div class="feature-column">
              <h4>Key Features</h4>
              <ul>
                <li>Multi-factor Analysis: Integration of geological, topographic, and climatic factors</li>
                <li>Machine Learning: Advanced algorithms for landslide susceptibility prediction</li>
                <li>Spatial Modeling: High-resolution susceptibility maps for Northern Italy</li>
                <li>Validation: Comprehensive validation using historical landslide data</li>
                <li>Risk Assessment: Quantitative assessment of landslide risk</li>
              </ul>
            </div>
            <div class="feature-column">
              <h4>Key Results</h4>
              <ul>
                <li>Model Accuracy: Achieved 89% accuracy in landslide susceptibility prediction</li>
                <li>Spatial Coverage: Comprehensive analysis of Northern Italy</li>
                <li>Risk Identification: Identification of high-risk areas for landslides</li>
                <li>Practical Applications: Results applicable to land use planning and risk management</li>
                <li>Methodology: Replicable methodology for landslide susceptibility mapping</li>
              </ul>
            </div>
          </div>
          <div class="modal-tech">
            <span>ArcGIS</span>
            <span>GeoServer</span>
            <span>PostGIS</span>
            <span>Python</span>
            <span>Scikit-learn</span>
            <span>QGIS</span>
          </div>
          <div class="modal-actions">
            <a href="/reports/LANDSLIDE_SUSCEPTIBILITY.pdf" target="_blank" class="btn primary-btn">Download Technical Report</a>
            <a href="https://github.com/zafariabbas68/landslide-analysis" target="_blank" class="btn secondary-btn">View Code on GitHub</a>
          </div>
        </div>
        <button class="close-modal" @click="closeModal">&times;</button>
      </div>
    </div>

    <!-- Footer Component will be automatically included via layout -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive state
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeFilter = ref('all')
const activeModal = ref(null)
const showScrollTop = ref(false)
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

const setFilter = (filter) => {
  activeFilter.value = filter
  filterProjects()
}

const openModal = (projectId) => {
  activeModal.value = projectId
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  activeModal.value = null
  document.body.style.overflow = 'auto'
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const changeLanguage = (lang) => {
  currentLanguage.value = lang
  // Here you would typically load the language file and update the content
  console.log('Language changed to:', lang)
}

// Filter projects based on active filter
const filterProjects = () => {
  const projects = document.querySelectorAll('.project-card')
  projects.forEach(project => {
    const categories = project.getAttribute('data-category')
    if (activeFilter.value === 'all' || categories.includes(activeFilter.value)) {
      project.style.display = 'flex'
    } else {
      project.style.display = 'none'
    }
  })
}

// Update filter button active states
const updateFilterButtons = () => {
  const buttons = document.querySelectorAll('.filter-btn')
  buttons.forEach(button => {
    if (button.getAttribute('data-filter') === activeFilter.value) {
      button.classList.add('active')
    } else {
      button.classList.remove('active')
    }
  })
}

// Lifecycle
onMounted(() => {
  // Scroll event listener
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
    showScrollTop.value = window.scrollY > 300

    // Animate project cards on scroll
    animateOnScroll()
  }

  window.addEventListener('scroll', handleScroll)

  // Keyboard event listener for closing modals
  const handleKeydown = (e) => {
    if (e.key === 'Escape' && activeModal.value) {
      closeModal()
    }
  }

  document.addEventListener('keydown', handleKeydown)

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

  // Set up Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      } else {
        entry.target.classList.remove('active')
      }
    })
  }, observerOptions)

  // Observe all project cards
  const projectCards = document.querySelectorAll('.project-card')
  projectCards.forEach(card => {
    observer.observe(card)
  })

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('keydown', handleKeydown)
    observer.disconnect()
  })
})

const animateOnScroll = () => {
  // Animation logic handled by Intersection Observer
}

// Watch for filter changes
watch(activeFilter, () => {
  updateFilterButtons()
  filterProjects()
})

// SEO Meta
useSeoMeta({
  title: 'Projects | Ghulam Abbas Zafari',
  description: 'Professional geospatial and data science projects by Ghulam Abbas Zafari, including GIS solutions, remote sensing, and data visualization implementations.',
  ogTitle: 'Projects - Ghulam Abbas Zafari',
  ogDescription: 'Explore professional geospatial and data science projects by Ghulam Abbas Zafari.',
  ogImage: '/images/portfolio_web_version.png',
  twitterCard: 'summary_large_image'
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--neutral-light);
  color: var(--neutral-dark);
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
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

h4 {
  font-size: 1.4rem;
  color: var(--earth-brown);
}

/* Navigation */
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
  transition: var(--transition);
}

.header-content {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 1rem 0;
  backdrop-filter: blur(10px);
}

header.scrolled {
  padding: 0;
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
  font-family: 'Playfair Display', serif;
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
  transition: var(--transition);
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
  transition: var(--transition);
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
  transition: var(--transition);
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
  transition: var(--transition);
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
  transition: var(--transition);
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
  transition: var(--transition);
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

/* Projects Section */
.projects-section {
  padding: 5rem 0;
  position: relative;
  background-color: var(--neutral-light);
  margin: 0 1rem 4rem;
  border-radius: 10px;
}

.projects-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 3rem;
  justify-content: center;
}

.filter-btn {
  padding: 8px 16px;
  border: 1px solid var(--secondary-water);
  background: transparent;
  color: var(--secondary-water);
  border-radius: 4px;
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

.filter-btn.active, .filter-btn:hover {
  background: var(--secondary-water);
  color: var(--neutral-light);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(46, 134, 171, 0.3);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
  transition: var(--transition);
  cursor: pointer;
  height: 100%;
  border-left: 4px solid var(--secondary-water);
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.8s ease;
}

.project-card.active {
  opacity: 1;
  transform: scale(1);
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 35px rgba(44, 85, 48, 0.15);
  border-color: var(--secondary-water);
}

.project-visual {
  position: relative;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(248, 249, 250, 0.5);
  padding: 15px;
  overflow: hidden;
}

.visual-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--neutral-light);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(44, 85, 48, 0.1);
}

.visual-container img,
.visual-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.project-card:hover .visual-container img,
.project-card:hover .visual-container video {
  transform: scale(1.05);
}

.project-details {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-card h3 {
  color: var(--primary-earth);
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.project-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 1rem;
  color: var(--neutral-dark);
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
}

.project-description {
  color: var(--neutral-dark);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.5rem;
}

.project-tech span {
  background: rgba(46, 134, 171, 0.1);
  color: var(--secondary-water);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: var(--transition);
  font-family: 'Poppins', sans-serif;
}

.project-tech span:hover {
  background: var(--secondary-water);
  color: var(--neutral-light);
  transform: translateY(-2px);
}

.project-actions {
  display: flex;
  gap: 10px;
  margin-top: auto;
  flex-wrap: wrap;
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  font-size: 0.9rem;
  text-align: center;
  flex: 1;
  position: relative;
  overflow: hidden;
  z-index: 1;
  font-family: 'Poppins', sans-serif;
  min-width: 120px;
  border: none;
  cursor: pointer;
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
  background: var(--primary-earth);
  color: var(--neutral-light);
}

.primary-btn::before {
  background: rgba(44, 85, 48, 0.8);
}

.primary-btn:hover {
  background: rgba(44, 85, 48, 0.8);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(44, 85, 48, 0.3);
  color: var(--neutral-light);
}

.secondary-btn {
  border: 1px solid var(--secondary-water);
  color: var(--secondary-water);
  background: transparent;
}

.secondary-btn::before {
  background: var(--secondary-water);
}

.secondary-btn:hover {
  background: var(--secondary-water);
  transform: translateY(-2px);
  color: var(--neutral-light);
}

.tertiary-btn {
  border: 1px solid var(--earth-brown);
  color: var(--earth-brown);
  background: transparent;
}

.tertiary-btn::before {
  background: var(--earth-brown);
}

.tertiary-btn:hover {
  background: var(--earth-brown);
  transform: translateY(-2px);
  color: var(--neutral-light);
}

/* Project Detail Modal - Full Screen */
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(45, 55, 72, 0.98);
  z-index: 2000;
  overflow-y: auto;
  padding: 0;
}

.modal-content {
  background: var(--card-bg);
  margin: 0;
  border-radius: 0;
  width: 100%;
  min-height: 100vh;
  box-shadow: none;
  overflow: hidden;
  position: relative;
  padding: 2rem 0;
}

.modal-header {
  padding: 2rem 4rem 1rem;
  border-bottom: 1px solid rgba(139, 115, 85, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.modal-title {
  color: var(--primary-earth);
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.modal-meta {
  display: flex;
  gap: 20px;
  color: var(--neutral-dark);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
}

.close-modal {
  background: none;
  border: none;
  color: var(--neutral-dark);
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem;
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 2001;
  background: rgba(248, 249, 250, 0.8);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.close-modal:hover {
  color: var(--secondary-water);
  background: rgba(46, 134, 171, 0.1);
  transform: scale(1.1);
}

.modal-body {
  padding: 0 4rem 3rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.modal-visuals {
  margin: 2rem 0 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
}

.modal-image {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  transition: transform 0.3s ease;
}

.modal-image:hover {
  transform: scale(1.02);
}

.modal-description {
  color: var(--neutral-dark);
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  text-align: justify;
  font-family: 'Poppins', sans-serif;
}

.modal-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.feature-column h4 {
  color: var(--secondary-water);
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  font-family: 'Playfair Display', serif;
}

.feature-column ul {
  padding-left: 1.5rem;
}

.feature-column li {
  margin-bottom: 1rem;
  color: var(--neutral-dark);
  position: relative;
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
}

.feature-column li:before {
  content: "▹";
  position: absolute;
  left: -1.5rem;
  color: var(--secondary-water);
  font-size: 1.2rem;
}

.modal-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 3rem;
  justify-content: center;
}

.modal-tech span {
  background: rgba(46, 134, 171, 0.1);
  color: var(--secondary-water);
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  transition: var(--transition);
  font-family: 'Poppins', sans-serif;
}

.modal-tech span:hover {
  background: var(--secondary-water);
  color: var(--neutral-light);
  transform: translateY(-2px);
}

.modal-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 2rem;
}

.modal-actions .btn {
  flex: 0 1 auto;
  min-width: 180px;
  padding: 12px 24px;
  font-size: 1.1rem;
}

/* Scroll to top button */
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--primary-earth);
  color: var(--neutral-light);
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
  box-shadow: 0 5px 15px rgba(44, 85, 48, 0.3);
}

.scroll-to-top.active {
  opacity: 1;
  visibility: visible;
}

.scroll-to-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(44, 85, 48, 0.5);
  background: var(--secondary-water);
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

/* Responsive styles */
@media (max-width: 1200px) {
  .modal-header, .modal-body {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .modal-visuals {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }

  .project-visual {
    height: 220px;
  }

  .page-header {
    padding: 8rem 0 4rem;
  }

  .modal-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.3rem;
  }

  .page-header p {
    font-size: 1.1rem;
  }

  .project-card h3 {
    font-size: 1.3rem;
  }

  .project-details {
    padding: 1.25rem;
  }

  .project-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .visual-container {
    height: 200px;
  }

  .modal-features {
    grid-template-columns: 1fr;
  }

  .modal-actions {
    flex-direction: column;
  }

  .modal-actions .btn {
    width: 100%;
  }

  .close-modal {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .modal-header {
    padding: 5rem 1.5rem 1rem;
  }

  .modal-body {
    padding: 0 1.5rem 2rem;
  }

  /* Mobile Menu Styles */
  .nav-links {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background-color: var(--neutral-light);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem 0;
    transition: all 0.5s ease;
    gap: 1.5rem;
    border-top: 1px solid rgba(139, 115, 85, 0.1);
  }

  .nav-links.active {
    left: 0;
  }

  .nav-links li {
    margin: 0;
  }

  .menu-toggle {
    display: block;
  }

  .language-selector {
    margin-left: 0;
    margin-top: 1rem;
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

@media (max-width: 576px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .projects-filter {
    justify-content: flex-start;
  }

  .filter-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }

  .project-visual {
    height: 180px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .modal-title {
    font-size: 1.8rem;
  }

  .modal-meta {
    flex-direction: column;
    gap: 5px;
  }

  .modal-visuals {
    grid-template-columns: 1fr;
  }
}
</style>