<!-- pages/blog.vue -->
<template>
  <div class="blog-page">
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
            <li><NuxtLink to="/blog" class="active" data-i18n="blog">Blog</NuxtLink></li>
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

    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Geospatial Insights Blog</h1>
        <p>Exploring the intersection of geoinformatics, data science, and environmental analysis</p>
      </div>
    </section>

    <!-- Blog Posts Section -->
    <section class="blog-section">
      <div class="container">
        <div class="blog-grid">
          <!-- Blog Post 1 -->
          <div class="blog-card" :class="{ active: isCardVisible(0) }" ref="blogCard1">
            <div class="blog-image">
              <img src="/images/service_area_overlap_analysis.png" alt="Urban Green Space Accessibility Analysis" @error="handleImageError">
            </div>
            <div class="blog-content">
              <span class="blog-date">May 15, 2023</span>
              <h3 class="blog-title">Analyzing Urban Green Space Accessibility in Milan</h3>
              <p class="blog-excerpt">A comprehensive analysis of park accessibility using network analysis and gravity modeling to identify underserved neighborhoods.</p>
              <div class="blog-tags">
                <span>GIS</span>
                <span>Network Analysis</span>
                <span>Urban Planning</span>
              </div>
              <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <!-- Blog Post 2 -->
          <div class="blog-card" :class="{ active: isCardVisible(1) }" ref="blogCard2">
            <div class="blog-image">
              <img src="/images/lombardy_landcover_1985_clean.png" alt="Land Cover Analysis and Remote Sensing" @error="handleImageError">
            </div>
            <div class="blog-content">
              <span class="blog-date">April 22, 2023</span>
              <h3 class="blog-title">Land Cover Change Detection Using Remote Sensing</h3>
              <p class="blog-excerpt">Analysis of Lombardy region land cover changes using multi-temporal satellite imagery and machine learning classification techniques.</p>
              <div class="blog-tags">
                <span>Remote Sensing</span>
                <span>Land Cover</span>
                <span>Machine Learning</span>
              </div>
              <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <!-- Blog Post 3 -->
          <div class="blog-card" :class="{ active: isCardVisible(2) }" ref="blogCard3">
            <div class="blog-image">
              <img src="/images/enhanced_service_coverage_analysis.png" alt="Geospatial Network Analysis" @error="handleImageError">
            </div>
            <div class="blog-content">
              <span class="blog-date">March 10, 2023</span>
              <h3 class="blog-title">Network Analysis for Transportation Planning</h3>
              <p class="blog-excerpt">Advanced geospatial network analysis examining service coverage and accessibility optimization using Python and network analysis libraries.</p>
              <div class="blog-tags">
                <span>Python</span>
                <span>Network Analysis</span>
                <span>Transportation</span>
              </div>
              <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Visualization Section -->
    <section class="visualization-section">
      <div class="container">
        <div class="section-header" :class="{ active: isSectionVisible }" ref="sectionHeader">
          <h2 class="section-title">Featured Visualizations</h2>
          <p class="section-subtitle">Interactive data visualizations showcasing geospatial analysis techniques</p>
        </div>

        <!-- Visualization: Manhattan Building Intelligence -->
        <div class="visualization-container" :class="{ active: isVizVisible(0) }" ref="viz1">
          <h3 class="visualization-title">🏙️ Manhattan Building Intelligence: Advanced Urban Analysis</h3>
          <p class="visualization-description">
            A comprehensive geospatial analysis project providing advanced visualization and statistical analysis of building footprints and heights across Manhattan. This project combines real OpenStreetMap data with realistic height modeling to create professional-grade urban analysis visualizations.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/manhattan_building_heights_professional.png"
                 alt="Manhattan Building Heights Analysis"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">OSMnx</span>
            <span class="tech-tag">GeoPandas</span>
            <span class="tech-tag">Matplotlib</span>
            <span class="tech-tag">OpenStreetMap</span>
          </div>
          <div class="key-concepts">
            <h4>Key Features:</h4>
            <ul>
              <li>Analysis of 46,345+ Manhattan building footprints</li>
              <li>Realistic height modeling using lognormal distributions</li>
              <li>Multi-format visualizations (2D, 3D, statistical)</li>
              <li>Neighborhood-specific height patterns and spatial analysis</li>
              <li>Professional-grade urban analysis outputs</li>
            </ul>
          </div>
        </div>

        <!-- Visualization: EuroPovertyMapper -->
        <div class="visualization-container" :class="{ active: isVizVisible(1) }" ref="viz2">
          <h3 class="visualization-title">🌍 EuroPovertyMapper: European Poverty Risk Analysis</h3>
          <p class="visualization-description">
            A comprehensive Python tool for analyzing and visualizing poverty risk across European regions using Eurostat data. This project creates stunning, publication-ready choropleth maps with advanced statistical analysis, providing insights into European social inequality patterns.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/EuroPovertyMapper.png"
                 alt="European Poverty Risk Analysis"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Eurostat API</span>
            <span class="tech-tag">GeoPandas</span>
            <span class="tech-tag">Matplotlib</span>
            <span class="tech-tag">Statistical Analysis</span>
          </div>
          <div class="key-concepts">
            <h4>Key Insights:</h4>
            <ul>
              <li>Analysis of 327 NUTS2 regions across Europe</li>
              <li>Average poverty rate: 21.1% with range from 6.6% to 59.5%</li>
              <li>Clear North-South divide in poverty distribution</li>
              <li>Highest risk in Bulgaria (31.7%), Greece (28.5%), Romania (27.7%)</li>
              <li>Lowest risk in Czechia (11.4%), Slovenia (14.4%), Netherlands (15.4%)</li>
            </ul>
          </div>
        </div>

        <!-- Visualization: Italy Land Cover Comparison -->
        <div class="visualization-container" :class="{ active: isVizVisible(2) }" ref="viz3">
          <h3 class="visualization-title">Italy Land Cover Change Analysis (1985-2022)</h3>
          <p class="visualization-description">
            Comparative analysis of land cover changes in Italy over 37 years, showing urban expansion,
            agricultural transformations, and natural landscape evolution using high-resolution satellite data.
          </p>
          <div class="image-comparison">
            <div>
              <img src="/images/italy_landcover_1985_50m_HQ.png" alt="Italy Land Cover 1985" @error="handleImageError">
              <p class="image-caption">Italy Land Cover 1985</p>
            </div>
            <div>
              <img src="/images/italy_landcover_2022_50m_HQ.png" alt="Italy Land Cover 2022" @error="handleImageError">
              <p class="image-caption">Italy Land Cover 2022</p>
            </div>
          </div>
        </div>

        <!-- Visualization: Urban Expansion -->
        <div class="visualization-container" :class="{ active: isVizVisible(3) }" ref="viz4">
          <h3 class="visualization-title">Urban Expansion Analysis</h3>
          <p class="visualization-description">
            Monitoring urban growth patterns and sprawl dynamics using multi-temporal satellite imagery
            and spatial metrics to understand urbanization trends and their environmental impacts.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/Urban expansion.png"
                 alt="Urban Expansion Analysis"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
        </div>

        <!-- Visualization: Global Earthquake Activity -->
        <div class="visualization-container" :class="{ active: isVizVisible(4) }" ref="viz5">
          <h3 class="visualization-title">Global Earthquake Activity (2020-2024)</h3>
          <p class="visualization-description">
            Comprehensive visualization of global seismic activity patterns, showing magnitude distribution,
            depth analysis, and tectonic plate correlations using USGS real-time earthquake data.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/Global Earthquake Activity (2020-2024).png"
                 alt="Global Earthquake Activity"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
        </div>

        <!-- Visualization: Afghanistan Environmental Analysis -->
        <div class="visualization-container" :class="{ active: isVizVisible(5) }" ref="viz6">
          <h3 class="visualization-title">Afghanistan Environmental Monitoring</h3>
          <p class="visualization-description">
            Integrated analysis of vegetation health (NDVI) and land surface temperature (LST) in Afghanistan,
            providing insights into agricultural productivity, drought conditions, and climate patterns.
          </p>
          <div class="image-comparison">
            <div>
              <img src="/images/Afghanistan NDVI Map.png"
                   alt="Afghanistan NDVI Map"
                   @error="handleImageError">
              <p class="image-caption">NDVI - Vegetation Health Index</p>
            </div>
            <div>
              <img src="/images/Afghanistan LST Map.png"
                   alt="Afghanistan LST Map"
                   @error="handleImageError">
              <p class="image-caption">LST - Land Surface Temperature</p>
            </div>
          </div>
        </div>

        <!-- Visualization: Sphere Midpoint -->
        <div class="visualization-container" :class="{ active: isVizVisible(6) }" ref="viz7">
          <h3 class="visualization-title">🟢 Midpoint Between Two Points on a Sphere</h3>
          <p class="visualization-description">
            A 3D visualization showing the Earth as a sphere with two cities plotted on its surface and their exact midpoint calculated using Cartesian coordinates. This plot demonstrates how spherical geometry can be applied to compute midpoints between locations on Earth, such as between New York City and Los Angeles.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/sphere_midpoint.png"
                 alt="Midpoint Between Two Points on a Sphere"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">NumPy</span>
            <span class="tech-tag">Matplotlib (3D plotting)</span>
          </div>
          <div class="key-concepts">
            <h4>Key Concepts:</h4>
            <ul>
              <li>Coordinate transformation</li>
              <li>Vector normalization</li>
              <li>Geodesic midpoint calculation</li>
            </ul>
          </div>
        </div>

        <!-- Visualization: Flight Map -->
        <div class="visualization-container" :class="{ active: isVizVisible(7) }" ref="viz8">
          <h3 class="visualization-title">🌍 Global Flight Routes and Travel Times</h3>
          <p class="visualization-description">
            An interactive world map that visualizes flight paths and estimated travel times between major global cities, using great-circle distances and average flight speed. Each route is color-coded, labeled with travel time, and rendered on a geographic projection for clarity.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/flight_map.png"
                 alt="Global Flight Routes and Travel Times"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">NumPy</span>
            <span class="tech-tag">Matplotlib</span>
            <span class="tech-tag">Cartopy</span>
          </div>
          <div class="key-concepts">
            <h4>Key Concepts:</h4>
            <ul>
              <li>Haversine formula</li>
              <li>Geodesic mapping</li>
              <li>Data-driven visualization</li>
            </ul>
          </div>
        </div>

        <!-- Visualization: Sphere Distance -->
        <div class="visualization-container" :class="{ active: isVizVisible(8) }" ref="viz9">
          <h3 class="visualization-title">🔵 Shortest Distance from a Point to a Great-Circle Path</h3>
          <p class="visualization-description">
            A 3D Earth model showing a city (New Delhi) and the shortest distance to a great-circle route connecting two other cities (London and Singapore). The visualization highlights the geometric relationship between points and great-circle paths on a sphere.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/sphere_distance.png"
                 alt="Shortest Distance from a Point to a Great-Circle Path"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">NumPy</span>
            <span class="tech-tag">Matplotlib (3D visualization)</span>
          </div>
          <div class="key-concepts">
            <h4>Key Concepts:</h4>
            <ul>
              <li>Spherical trigonometry</li>
              <li>Projection onto a plane</li>
              <li>Geometric visualization</li>
            </ul>
          </div>
        </div>

        <!-- Visualization: Vancouver Urban Analysis -->
        <div class="visualization-container" :class="{ active: isVizVisible(9) }" ref="viz10">
          <h3 class="visualization-title">🏙️ Vancouver Comprehensive Urban Analysis</h3>
          <p class="visualization-description">
            A sophisticated geospatial analysis of Vancouver's urban landscape featuring building heights, road networks, and landmark distribution. This project combines OpenStreetMap data with realistic height modeling to create an interactive 3D-like visualization of the city's infrastructure with professional GIS styling.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/vancouver_Analysis.png"
                 alt="Vancouver Comprehensive Urban Analysis"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">OSMnx</span>
            <span class="tech-tag">GeoPandas</span>
            <span class="tech-tag">Matplotlib</span>
            <span class="tech-tag">OpenStreetMap</span>
            <span class="tech-tag">Geospatial Analysis</span>
          </div>
          <div class="key-concepts">
            <h4>Key Features:</h4>
            <ul>
              <li>Realistic building height modeling by neighborhood</li>
              <li>Comprehensive road network hierarchy visualization</li>
              <li>Landmark and infrastructure mapping</li>
              <li>Statistical urban analysis integration</li>
            </ul>
          </div>
          <div class="project-details">
            <h4>Project Highlights:</h4>
            <div class="details-grid">
              <div class="detail-item">
                <strong>Data Sources:</strong> OpenStreetMap, Urban Planning Data
              </div>
              <div class="detail-item">
                <strong>Neighborhoods Analyzed:</strong> Downtown Core, West End, Yaletown, Kitsilano, Olympic Village, Mount Pleasant, and more
              </div>
              <div class="detail-item">
                <strong>Building Height Model:</strong> Statistical distribution based on real urban planning parameters
              </div>
              <div class="detail-item">
                <strong>Road Classification:</strong> Motorway, Trunk, Primary, Secondary, Tertiary, Residential
              </div>
            </div>
          </div>
        </div>

        <!-- Visualization: Maritime Traffic -->
        <div class="visualization-container" :class="{ active: isVizVisible(10) }" ref="viz11">
          <h3 class="visualization-title">🌊 Global Maritime Traffic Visualization</h3>
          <p class="visualization-description">
            An interactive world map showcasing global shipping routes, port infrastructure, and vessel traffic patterns. The visualization highlights major trade corridors, port capacities, and environmental impact metrics using real-time simulated AIS data with optimized label placement and route clarity.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/GLOBAL MARITIME TRAFFIC VISUALIZATION.png"
                 alt="Global Maritime Traffic Visualization"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Pandas</span>
            <span class="tech-tag">Plotly</span>
            <span class="tech-tag">Geo Visualization</span>
          </div>
          <div class="key-concepts">
            <h4>Key Concepts:</h4>
            <ul>
              <li>Shipping route optimization</li>
              <li>Port capacity analysis</li>
              <li>Environmental impact assessment</li>
              <li>Maritime traffic patterns</li>
            </ul>
          </div>
        </div>

        <!-- Visualization: Land Cover Transition Analysis -->
        <div class="visualization-container" :class="{ active: isVizVisible(11) }" ref="viz12">
          <h3 class="visualization-title">Comprehensive Land Cover Transition Analysis (1995-2000)</h3>
          <p class="visualization-description">
            This section presents a comprehensive analysis of land cover transitions in Italy, quantifying the pathways, magnitude, and dynamics of landscape change from 1995 to 2000. Utilizing ESA CCI LC (300m) datasets, the analysis reveals the complex interplay of urbanization, agricultural change, and forest dynamics that happened in the Italian peninsula.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/comprehensive_transition_analysis_1995-2000.png"
                 alt="Comprehensive Land Cover Transition Analysis"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
        </div>

        <!-- Visualization: Accuracy Assessment -->
        <div class="visualization-container" :class="{ active: isVizVisible(12) }" ref="viz13">
          <h3 class="visualization-title">Accuracy Assessment: GLC_FCS30D vs ESA CCI LC</h3>
          <p class="visualization-description">
            This section presents accuracy assessment between the high-resolution GLC_FCS30D (30m) and medium-resolution ESA CCI LC (300m) land cover datasets across Italy. The period 2000 to 2022 was considered in this analysis. The evaluation provides insights into the consistency, reliability, and limitations of both datasets for land cover monitoring applications, revealing both substantial agreement and systematic discrepancies that varied significantly by land cover class.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/comparison_2010.png"
                 alt="Accuracy Assessment Comparison"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">GRASS GIS</span>
            <span class="tech-tag">Python</span>
            <span class="tech-tag">scikit-learn</span>
            <span class="tech-tag">Statistical Analysis</span>
          </div>
          <div class="key-concepts">
            <h4>Key Metrics:</h4>
            <ul>
              <li>Overall Accuracy (OA): 78.06% - 79.13%</li>
              <li>Cohen's Kappa Coefficient (κ): 0.639 - 0.660</li>
              <li>Producer's Accuracy (PA)</li>
              <li>User's Accuracy (UA)</li>
            </ul>
          </div>
        </div>

        <!-- Visualization: Global Internet Connectivity -->
        <div class="visualization-container" :class="{ active: isVizVisible(13) }" ref="viz14">
          <h3 class="visualization-title">🌐 Global Internet Connectivity & Infrastructure Map</h3>
          <p class="visualization-description">
            A real-time simulation of global internet infrastructure showcasing 5.3+ billion connected devices, data flow patterns, and network hubs. This visualization maps internet exchange points, data centers, submarine cables, and live data traffic across the global digital ecosystem.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/global_internet_connectivity_map 3.png"
                 alt="Global Internet Connectivity and Infrastructure Visualization"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">GeoPandas</span>
            <span class="tech-tag">Matplotlib</span>
            <span class="tech-tag">Contextily</span>
            <span class="tech-tag">Network Simulation</span>
            <span class="tech-tag">Data Visualization</span>
            <span class="tech-tag">Spatial Analysis</span>
          </div>
          <div class="key-concepts">
            <h4>Key Features:</h4>
            <ul>
              <li>Simulated real-time device connectivity (5.3B+ devices)</li>
              <li>Internet backbone traffic flow visualization</li>
              <li>Major infrastructure hubs mapping</li>
              <li>Data flow particle animation effects</li>
              <li>Global network topology analysis</li>
              <li>Live connection counter display</li>
            </ul>
          </div>
          <div class="project-details">
            <h4>Infrastructure Components:</h4>
            <div class="details-grid">
              <div class="detail-item">
                <strong>Connected Devices:</strong> 5.3+ Billion simulated
              </div>
              <div class="detail-item">
                <strong>Data Centers:</strong> Major global facilities</div>
              <div class="detail-item">
                <strong>Internet Exchanges:</strong> Key routing hubs</div>
              <div class="detail-item">
                <strong>Network Backbone:</strong> Global connectivity lines</div>
            </div>
          </div>
        </div>

        <!-- Visualization: Los Angeles Urban Expansion -->
        <div class="visualization-container" :class="{ active: isVizVisible(14) }" ref="viz15">
          <h3 class="visualization-title">🏙️ Los Angeles Urban Expansion & Historical Railway Network</h3>
          <p class="visualization-description">
            A historical-geographic visualization mapping Los Angeles' urban growth alongside the Pacific Electric Railway system. This analysis shows how railway-driven development shaped Southern California's sprawl, featuring topographic context and temporal urban expansion patterns from 1890 to 2014.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/los_angeles_railway_expansion_topo.png"
                 alt="Los Angeles Urban Expansion and Historical Railway Network"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">OSMnx</span>
            <span class="tech-tag">GeoPandas</span>
            <span class="tech-tag">Matplotlib</span>
            <span class="tech-tag">OpenStreetMap</span>
            <span class="tech-tag">Contextily</span>
            <span class="tech-tag">Historical GIS</span>
          </div>
          <div class="key-concepts">
            <h4>Key Features:</h4>
            <ul>
              <li>Historical Pacific Electric Railway reconstruction</li>
              <li>Temporal urban expansion (1890-2014)</li>
              <li>Topographic basemap integration</li>
              <li>Natural feature mapping (water, parks)</li>
              <li>Historical development patterns</li>
              <li>Railway-driven urban growth analysis</li>
            </ul>
          </div>
          <div class="project-details">
            <h4>Historical Context:</h4>
            <div class="details-grid">
              <div class="detail-item">
                <strong>Railway Era:</strong> 1901-1961
              </div>
              <div class="detail-item">
                <strong>Peak System:</strong> 1,000+ miles of track
              </div>
              <div class="detail-item">
                <strong>Development Strategy:</strong> Henry Huntington's land development
              </div>
              <div class="detail-item">
                <strong>Historical Significance:</strong> World's largest electric railway
              </div>
            </div>
          </div>
        </div>

        <!-- Visualization: 3D Earth Globe -->
        <div class="visualization-container" :class="{ active: isVizVisible(15) }" ref="viz16">
          <h3 class="visualization-title">🌍 3D Earth Globe - Esri National Geographic Style</h3>
          <p class="visualization-description">
            A stunning 3D animated globe visualization featuring Esri's National Geographic map style. This professional geographic visualization rotates smoothly through 360 degrees, highlighting 35 countries with enhanced markers and real-time progress tracking.
          </p>
          <div class="chart-container" style="text-align: center;">
            <video width="100%" height="500" controls autoplay loop style="border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);">
              <source src="/images/Esri_NatGeo_3D_Globe_30s_compressed.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="tech-tags">
            <span class="tech-tag">Plotly</span>
            <span class="tech-tag">Python</span>
            <span class="tech-tag">3D Visualization</span>
            <span class="tech-tag">Geographic</span>
            <span class="tech-tag">Animation</span>
            <span class="tech-tag">ImageIO</span>
          </div>
          <div class="key-concepts">
            <h4>Key Features:</h4>
            <ul>
              <li>360-degree smooth rotation animation</li>
              <li>Esri National Geographic map styling</li>
              <li>35 countries with enhanced markers</li>
              <li>Real-time progress tracking</li>
              <li>Professional cartographic elements</li>
            </ul>
          </div>
          <div class="project-details">
            <h4>Technical Specifications:</h4>
            <div class="details-grid">
              <div class="detail-item">
                <strong>Duration:</strong> 30 seconds
              </div>
              <div class="detail-item">
                <strong>Frame Rate:</strong> 30 FPS
              </div>
              <div class="detail-item">
                <strong>Resolution:</strong> 1000x1000 pixels
              </div>
              <div class="detail-item">
                <strong>Countries:</strong> 35 global locations
              </div>
            </div>
          </div>
        </div>

        <!-- Visualization: World Political Map -->
        <div class="visualization-container" :class="{ active: isVizVisible(16) }" ref="viz17">
          <h3 class="visualization-title">🗺️ Advanced World Political Map Visualization</h3>
          <p class="visualization-description">
            A sophisticated cartographic visualization featuring climate-based country coloring, economic indicators, and personal project locations. This interactive world map combines professional GIS techniques with storytelling elements to create an engaging geopolitical analysis tool.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/portfolio_web_version.png"
                 alt="Advanced World Political Map Visualization"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">GeoPandas</span>
            <span class="tech-tag">Matplotlib</span>
            <span class="tech-tag">Contextily</span>
            <span class="tech-tag">Cartography</span>
            <span class="tech-tag">mplcursors</span>
            <span class="tech-tag">GIS</span>
          </div>
          <div class="key-concepts">
            <h4>Key Features:</h4>
            <ul>
              <li>Climate-zone based country coloring</li>
              <li>Interactive hover effects with country details</li>
              <li>GDP economic bubble indicators</li>
              <li>Regional alliance highlighting (EU, ASEAN)</li>
              <li>Personal project location mapping</li>
              <li>Professional cartographic elements</li>
            </ul>
          </div>
          <div class="project-details">
            <h4>Technical Implementation:</h4>
            <div class="details-grid">
              <div class="detail-item">
                <strong>Data Source:</strong> Natural Earth 10m Cultural Dataset
              </div>
              <div class="detail-item">
                <strong>Projection:</strong> Web Mercator (EPSG:3857)
              </div>
              <div class="detail-item">
                <strong>Climate Zones:</strong> Polar, Temperate, Subtropical, Tropical
              </div>
              <div class="detail-item">
                <strong>Interactivity:</strong> Hover effects with mplcursors</div>
            </div>
          </div>
        </div>

        <!-- Visualization: Historical Travel Analysis -->
        <div class="visualization-container" :class="{ active: isVizVisible(17) }" ref="viz18">
          <h3 class="visualization-title">🗺️ Historical Travel Duration from Vienna 1914</h3>
          <p class="visualization-description">
            A sophisticated historical isochrone map visualizing travel times from Vienna across Central Europe in 1914,
            using real administrative boundaries from Natural Earth shapefiles. This reconstruction incorporates terrain
            obstacles, transportation networks, and geopolitical boundaries of the pre-WWI era to model realistic travel
            durations across the <strong>Austro-Hungarian Empire</strong>, <strong>German Empire</strong>,
            <strong>Russian Empire</strong>, and <strong>Kingdom of Italy</strong>, with empire names clearly labeled
            within their respective territories for immediate geopolitical context.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/historical_isochrone_real_boundaries_final.png"
                 alt="Historical Travel Duration from Vienna 1914 with Empire Labels and Real Administrative Boundaries"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">GeoPandas</span>
            <span class="tech-tag">Contextily</span>
            <span class="tech-tag">Shapely</span>
            <span class="tech-tag">Natural Earth</span>
            <span class="tech-tag">Matplotlib</span>
          </div>
          <div class="key-concepts">
            <h4>Key Concepts:</h4>
            <ul>
              <li>Historical Isochrone Modeling</li>
              <li>Geospatial Data Reprojection</li>
              <li>Terrain-based Travel Modifiers</li>
              <li>Automatic Label Placement</li>
              <li>Historical Transportation Networks</li>
              <li>Empire Territory Labeling</li>
            </ul>
          </div>
          <div class="methodology">
            <h4>Technical Methodology:</h4>
            <ul>
              <li>Used Natural Earth 10m cultural shapefiles for authentic 1914 administrative boundaries</li>
              <li>Implemented terrain-aware travel time algorithms with Alps and Carpathians modifiers</li>
              <li>Integrated historical railway and road networks from period maps</li>
              <li>Employed Web Mercator projection (EPSG:3857) for accurate basemap alignment</li>
              <li>Modeled empire boundaries (Austro-Hungarian, German, Russian, Italian) with dashed styling</li>
            </ul>
          </div>
          <div class="historical-context">
            <h4>Historical Context & Empire Territories:</h4>
            <ul>
              <li><strong>Austro-Hungarian Empire</strong>: Central position containing Vienna, Budapest, Prague, and Trieste</li>
              <li><strong>German Empire</strong>: Northern territory including Berlin, Munich, Hamburg, and Dresden</li>
              <li><strong>Russian Empire</strong>: Eastern domains encompassing Lwiv, Czernowitz, and Warsaw</li>
              <li><strong>Kingdom of Italy</strong>: Southern region with Venice, Milan, and Trieste (disputed)</li>
              <li>Travel times reflect pre-automobile era transportation (rail, horse, foot)</li>
              <li>Alpine regions show significantly longer travel times due to terrain obstacles</li>
              <li>Major rivers like the Danube provided natural travel corridors</li>
              <li>Railway networks dramatically reduced travel times between major cities</li>
              <li>Political boundaries influenced route availability and travel permissions</li>
            </ul>
          </div>
          <div class="geopolitical-features">
            <h4>Geopolitical Features:</h4>
            <ul>
              <li>Clear empire labeling provides immediate context for understanding travel restrictions</li>
              <li>Border crossings between empires would have involved customs and passport controls</li>
              <li>Railway networks primarily developed within empire boundaries with limited international connections</li>
              <li>Major cities like Vienna served as hubs within their respective empires</li>
              <li>Travel times increase significantly when crossing multiple imperial boundaries</li>
            </ul>
          </div>
        </div>

        <!-- Visualization: Land Cover Analysis -->
        <div class="visualization-container" :class="{ active: isVizVisible(18) }" ref="viz19">
          <h3 class="visualization-title">🌿 Lombardy Land Cover Classification 2022</h3>
          <p class="visualization-description">
            Advanced land cover classification analysis comparing ESA CCI 300m and GLC_FCS30D datasets for Lombardy, Italy.
            Through sophisticated data reprojection and reclassification processes, we harmonized both datasets using the
            MOLCA classification scheme to enable precise intercomparison and accuracy assessment between global land cover products.
          </p>
          <div class="chart-container" style="text-align: center;">
            <img src="/images/Lombardy_LandCover_2022_Professional_UltraQuality.png"
                 alt="Lombardy Land Cover Classification 2022 - Ultra Quality Professional Analysis"
                 style="max-width: 100%; max-height: 500px; border-radius: 8px; box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);"
                 @error="handleImageError">
          </div>
          <div class="tech-tags">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">GDAL</span>
            <span class="tech-tag">Rasterio</span>
            <span class="tech-tag">Geopandas</span>
            <span class="tech-tag">ESA CCI</span>
            <span class="tech-tag">GLC_FCS30D</span>
          </div>
          <div class="key-concepts">
            <h4>Key Concepts:</h4>
            <ul>
              <li>Data Reprojection & Harmonization</li>
              <li>MOLCA Classification Scheme</li>
              <li>Inter-dataset Consistency Analysis</li>
              <li>Land Cover Accuracy Assessment</li>
              <li>Spatial Resolution Standardization</li>
            </ul>
          </div>
          <div class="methodology">
            <h4>Methodology Highlights:</h4>
            <ul>
              <li>Reprojected ESA CCI 300m data to match GLC_FCS30D spatial reference</li>
              <li>Applied MOLCA scheme for standardized class definitions</li>
              <li>Conducted pixel-by-pixel consistency analysis</li>
              <li>Quantified inter-product agreement metrics</li>
              <li>Validated classification accuracy across urban, agricultural, and natural areas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive state for navigation
const isMenuOpen = ref(false)
const currentLanguage = ref('en')

// Methods for navigation
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

// Reactive state for scroll animations
const sectionHeader = ref(null)
const isSectionVisible = ref(false)

// Create refs for all blog cards and visualizations
const blogCards = ref([])
const visualizations = ref([])

// Initialize arrays for tracking visibility
const cardVisibility = ref(Array(3).fill(false))
const vizVisibility = ref(Array(19).fill(false))

// Image error handler
const handleImageError = (event) => {
  console.error('Image failed to load:', event.target.src)
  // You can set a placeholder image here if needed
  // event.target.src = '/images/placeholder.png'
}

// Set up Intersection Observer
let observer

// Define template refs
const blogCard1 = ref(null)
const blogCard2 = ref(null)
const blogCard3 = ref(null)
const viz1 = ref(null)
const viz2 = ref(null)
const viz3 = ref(null)
const viz4 = ref(null)
const viz5 = ref(null)
const viz6 = ref(null)
const viz7 = ref(null)
const viz8 = ref(null)
const viz9 = ref(null)
const viz10 = ref(null)
const viz11 = ref(null)
const viz12 = ref(null)
const viz13 = ref(null)
const viz14 = ref(null)
const viz15 = ref(null)
const viz16 = ref(null)
const viz17 = ref(null)
const viz18 = ref(null)
const viz19 = ref(null)

onMounted(() => {
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

  // Initialize refs after component is mounted
  blogCards.value = [
    blogCard1.value,
    blogCard2.value,
    blogCard3.value
  ]

  visualizations.value = [
    viz1.value,
    viz2.value,
    viz3.value,
    viz4.value,
    viz5.value,
    viz6.value,
    viz7.value,
    viz8.value,
    viz9.value,
    viz10.value,
    viz11.value,
    viz12.value,
    viz13.value,
    viz14.value,
    viz15.value,
    viz16.value,
    viz17.value,
    viz18.value,
    viz19.value
  ]

  // Set up Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Handle section header
        if (entry.target === sectionHeader.value) {
          isSectionVisible.value = true
        }

        // Handle blog cards
        const cardIndex = blogCards.value.indexOf(entry.target)
        if (cardIndex !== -1) {
          cardVisibility.value[cardIndex] = true
        }

        // Handle visualizations
        const vizIndex = visualizations.value.indexOf(entry.target)
        if (vizIndex !== -1) {
          vizVisibility.value[vizIndex] = true
        }
      } else {
        // Remove active class when element leaves viewport (for scroll up)
        const cardIndex = blogCards.value.indexOf(entry.target)
        if (cardIndex !== -1) {
          cardVisibility.value[cardIndex] = false
        }

        const vizIndex = visualizations.value.indexOf(entry.target)
        if (vizIndex !== -1) {
          vizVisibility.value[vizIndex] = false
        }
      }
    })
  }, observerOptions)

  // Observe all elements that should animate
  if (sectionHeader.value) {
    observer.observe(sectionHeader.value)
  }

  // Observe blog cards
  blogCards.value.forEach(card => {
    if (card) observer.observe(card)
  })

  // Observe visualizations
  visualizations.value.forEach(viz => {
    if (viz) observer.observe(viz)
  })

  // Debug: Check if images are loading
  console.log('Checking image paths...')
  const images = document.querySelectorAll('img')
  images.forEach(img => {
    console.log('Image src:', img.src)
    // Test if image loads
    img.onload = () => console.log('Image loaded successfully:', img.src)
    img.onerror = () => console.error('Image failed to load:', img.src)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Computed functions for visibility
const isCardVisible = (index) => cardVisibility.value[index]
const isVizVisible = (index) => vizVisibility.value[index]

// SEO Meta
useSeoMeta({
  title: 'Blog - Ghulam Abbas Zafari | Geospatial Insights',
  description: 'Explore geospatial analysis, remote sensing, and GIS insights through technical blog posts and data visualizations.',
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

/* Container */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
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

/* Blog Section */
.blog-section {
  padding: 5rem 0;
  position: relative;
  background-color: var(--neutral-light);
  margin: 0 1rem 4rem;
  border-radius: 10px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.blog-card {
  background: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
  border-left: 4px solid var(--secondary-water);
  position: relative;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.8s ease;
}

.blog-card.active {
  opacity: 1;
  transform: scale(1);
}

.blog-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 15px 40px rgba(44, 85, 48, 0.15);
}

.blog-image {
  height: 220px;
  overflow: hidden;
  position: relative;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.1);
}

.blog-content {
  padding: 2rem;
}

.blog-date {
  color: var(--secondary-water);
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  display: block;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

.blog-title {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--primary-earth);
  font-family: 'Playfair Display', serif;
  line-height: 1.4;
}

.blog-excerpt {
  color: var(--neutral-dark);
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.blog-tags span {
  background: rgba(46, 134, 171, 0.1);
  color: var(--secondary-water);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

.blog-link {
  color: var(--secondary-water);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  font-family: 'Poppins', sans-serif;
}

.blog-link:hover {
  gap: 12px;
  color: var(--primary-earth);
}

/* Featured Visualization Section */
.visualization-section {
  padding: 5rem 0;
  background: rgba(248, 249, 250, 0.5);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.section-header.active {
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
  background: linear-gradient(90deg, var(--afghan-black), var(--afghan-red), var(--afghan-green));
}

.section-subtitle {
  color: var(--neutral-dark);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 1.5rem auto 0;
  font-family: 'Poppins', sans-serif;
}

.visualization-container {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
  border-left: 4px solid var(--secondary-water);
  transition: transform 0.3s ease;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.8s ease;
}

.visualization-container.active {
  opacity: 1;
  transform: scale(1);
}

.visualization-title {
  color: var(--primary-earth);
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  font-family: 'Playfair Display', serif;
}

.visualization-description {
  color: var(--neutral-dark);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
}

.chart-container {
  width: 100%;
  height: 400px;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
}

.map-container {
  width: 100%;
  height: 500px;
  margin: 1.5rem 0;
  border-radius: 4px;
  overflow: hidden;
}

.image-comparison {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.image-comparison img {
  max-width: 100%;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(44, 85, 48, 0.1);
  border: 1px solid rgba(139, 115, 85, 0.1);
}

.image-caption {
  color: var(--neutral-dark);
  margin-top: 10px;
  font-size: 0.9rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

/* Tech Tags */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 1.5rem 0;
}

.tech-tag {
  background: rgba(46, 134, 171, 0.1);
  color: var(--secondary-water);
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

/* Key Concepts */
.key-concepts {
  background: rgba(44, 85, 48, 0.05);
  padding: 1.5rem;
  border-radius: 6px;
  margin: 1.5rem 0;
  border-left: 3px solid var(--primary-earth);
}

.key-concepts h4 {
  color: var(--primary-earth);
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.key-concepts ul {
  list-style-type: none;
  padding-left: 0;
}

.key-concepts li {
  color: var(--neutral-dark);
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem;
}

.key-concepts li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--secondary-water);
}

/* Project Details */
.project-details {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(139, 115, 85, 0.2);
}

.project-details h4 {
  color: var(--primary-earth);
  margin-bottom: 1rem;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.detail-item {
  color: var(--neutral-dark);
  font-size: 0.95rem;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
}

.detail-item strong {
  color: var(--neutral-dark);
  font-weight: 600;
}

/* Methodology and Historical Context */
.methodology, .historical-context, .geopolitical-features {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(139, 115, 85, 0.2);
}

.methodology h4, .historical-context h4, .geopolitical-features h4 {
  color: var(--primary-earth);
  margin-bottom: 1rem;
}

.methodology ul, .historical-context ul, .geopolitical-features ul {
  list-style-type: none;
  padding-left: 0;
}

.methodology li, .historical-context li, .geopolitical-features li {
  color: var(--neutral-dark);
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.2rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
}

.methodology li::before, .historical-context li::before, .geopolitical-features li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--secondary-water);
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
  .section-title {
    font-size: 2.2rem;
  }
  .blog-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  .details-grid {
    grid-template-columns: 1fr;
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
  .blog-grid {
    grid-template-columns: 1fr;
  }
  .chart-container {
    height: 300px;
  }
  .map-container {
    height: 400px;
  }
  .image-comparison {
    flex-direction: column;
    align-items: center;
  }
  .image-comparison img {
    height: 300px;
  }
  .visualization-container {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .blog-section {
    padding: 3rem 0;
    margin: 0 0.5rem 2rem;
  }
  .chart-container {
    height: 250px;
  }
  .map-container {
    height: 300px;
  }
  .tech-tags {
    gap: 0.5rem;
  }
  .tech-tag {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
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