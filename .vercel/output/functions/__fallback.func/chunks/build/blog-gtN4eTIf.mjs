import { _ as __nuxt_component_0 } from './nuxt-link-Dfrr2kfa.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_13$1, a as _imports_0 } from './virtual_public-Dt4Yy9TN.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc, a as useSeoMeta } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'node:url';
import 'ipx';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _imports_1 = publicAssetsURL("/images/lombardy_landcover_1985_clean.png");
const _imports_3 = publicAssetsURL("/images/manhattan_building_heights_professional.png");
const _imports_4 = publicAssetsURL("/images/EuroPovertyMapper.png");
const _imports_5 = publicAssetsURL("/images/italy_landcover_1985_50m_HQ.png");
const _imports_6 = publicAssetsURL("/images/italy_landcover_2022_50m_HQ.png");
const _imports_7 = publicAssetsURL("/images/Urban expansion.png");
const _imports_8 = publicAssetsURL("/images/Global Earthquake Activity (2020-2024).png");
const _imports_9 = publicAssetsURL("/images/Afghanistan NDVI Map.png");
const _imports_10 = publicAssetsURL("/images/Afghanistan LST Map.png");
const _imports_11 = publicAssetsURL("/images/sphere_midpoint.png");
const _imports_12 = publicAssetsURL("/images/flight_map.png");
const _imports_13 = publicAssetsURL("/images/sphere_distance.png");
const _imports_14 = publicAssetsURL("/images/vancouver_Analysis.png");
const _imports_15 = publicAssetsURL("/images/GLOBAL MARITIME TRAFFIC VISUALIZATION.png");
const _imports_16 = publicAssetsURL("/images/comprehensive_transition_analysis_1995-2000.png");
const _imports_17 = publicAssetsURL("/images/comparison_2010.png");
const _imports_18 = publicAssetsURL("/images/global_internet_connectivity_map 3.png");
const _imports_19 = publicAssetsURL("/images/los_angeles_railway_expansion_topo.png");
const _imports_20 = publicAssetsURL("/images/Esri_NatGeo_3D_Globe_30s_compressed.mp4");
const _imports_21 = publicAssetsURL("/images/portfolio_web_version.png");
const _imports_22 = publicAssetsURL("/images/historical_isochrone_real_boundaries_final.png");
const _imports_23 = publicAssetsURL("/images/Lombardy_LandCover_2022_Professional_UltraQuality.png");
const _sfc_main = {
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const currentLanguage = ref("en");
    ref(null);
    const isSectionVisible = ref(false);
    ref([]);
    ref([]);
    const cardVisibility = ref(Array(3).fill(false));
    const vizVisibility = ref(Array(19).fill(false));
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const isCardVisible = (index) => cardVisibility.value[index];
    const isVizVisible = (index) => vizVisibility.value[index];
    useSeoMeta({
      title: "Blog - Ghulam Abbas Zafari | Geospatial Insights",
      description: "Explore geospatial analysis, remote sensing, and GIS insights through technical blog posts and data visualizations."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-page" }, _attrs))} data-v-2da845f2><header data-v-2da845f2><div class="header-content" data-v-2da845f2><div class="container nav-container" data-v-2da845f2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-icon" data-v-2da845f2${_scopeId}><i class="fas fa-map-marked-alt" data-v-2da845f2${_scopeId}></i></span><span data-v-2da845f2${_scopeId}>Ghulam Abbas Zafari</span>`);
          } else {
            return [
              createVNode("span", { class: "logo-icon" }, [
                createVNode("i", { class: "fas fa-map-marked-alt" })
              ]),
              createVNode("span", null, "Ghulam Abbas Zafari")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="${ssrRenderClass([{ active: isMenuOpen.value }, "nav-links"])}" id="navLinks" data-v-2da845f2><li data-v-2da845f2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        "data-i18n": "home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2da845f2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        "data-i18n": "about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2da845f2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        "data-i18n": "projects"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2da845f2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/education",
        "data-i18n": "education"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Education`);
          } else {
            return [
              createTextVNode("Education")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2da845f2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/experience",
        "data-i18n": "experience"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Experience`);
          } else {
            return [
              createTextVNode("Experience")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-2da845f2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "active",
        "data-i18n": "blog"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="language-selector" data-v-2da845f2><div class="language-dropdown" data-v-2da845f2><button class="language-btn" data-v-2da845f2><i class="fas fa-globe" data-v-2da845f2></i><span class="current-language" data-v-2da845f2>${ssrInterpolate(currentLanguage.value.toUpperCase())}</span><i class="fas fa-chevron-down" style="${ssrRenderStyle({ "font-size": "0.8rem", "margin-left": "5px" })}" data-v-2da845f2></i></button><ul class="language-options" data-v-2da845f2><li class="${ssrRenderClass({ active: currentLanguage.value === "en" })}" data-v-2da845f2><span class="language-flag" data-v-2da845f2>🇺🇸</span> English </li><li class="${ssrRenderClass({ active: currentLanguage.value === "it" })}" data-v-2da845f2><span class="language-flag" data-v-2da845f2>🇮🇹</span> Italiano </li><li class="${ssrRenderClass({ active: currentLanguage.value === "fa" })}" data-v-2da845f2><span class="language-flag" data-v-2da845f2>🇮🇷</span> فارسی </li></ul></div></li><li data-v-2da845f2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "contact-btn",
        "data-i18n": "contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="menu-toggle" data-v-2da845f2><i class="${ssrRenderClass(isMenuOpen.value ? "fas fa-times" : "fas fa-bars")}" data-v-2da845f2></i></div></div></div></header><section class="page-header" data-v-2da845f2><div class="container" data-v-2da845f2><h1 data-v-2da845f2>Geospatial Insights Blog</h1><p data-v-2da845f2>Exploring the intersection of geoinformatics, data science, and environmental analysis</p></div></section><section class="blog-section" data-v-2da845f2><div class="container" data-v-2da845f2><div class="blog-grid" data-v-2da845f2><div class="${ssrRenderClass([{ active: isCardVisible(0) }, "blog-card"])}" data-v-2da845f2><div class="blog-image" data-v-2da845f2><img${ssrRenderAttr("src", _imports_13$1)} alt="Urban Green Space Accessibility Analysis" data-v-2da845f2></div><div class="blog-content" data-v-2da845f2><span class="blog-date" data-v-2da845f2>May 15, 2023</span><h3 class="blog-title" data-v-2da845f2>Analyzing Urban Green Space Accessibility in Milan</h3><p class="blog-excerpt" data-v-2da845f2>A comprehensive analysis of park accessibility using network analysis and gravity modeling to identify underserved neighborhoods.</p><div class="blog-tags" data-v-2da845f2><span data-v-2da845f2>GIS</span><span data-v-2da845f2>Network Analysis</span><span data-v-2da845f2>Urban Planning</span></div><a href="#" class="blog-link" data-v-2da845f2>Read More <i class="fas fa-arrow-right" data-v-2da845f2></i></a></div></div><div class="${ssrRenderClass([{ active: isCardVisible(1) }, "blog-card"])}" data-v-2da845f2><div class="blog-image" data-v-2da845f2><img${ssrRenderAttr("src", _imports_1)} alt="Land Cover Analysis and Remote Sensing" data-v-2da845f2></div><div class="blog-content" data-v-2da845f2><span class="blog-date" data-v-2da845f2>April 22, 2023</span><h3 class="blog-title" data-v-2da845f2>Land Cover Change Detection Using Remote Sensing</h3><p class="blog-excerpt" data-v-2da845f2>Analysis of Lombardy region land cover changes using multi-temporal satellite imagery and machine learning classification techniques.</p><div class="blog-tags" data-v-2da845f2><span data-v-2da845f2>Remote Sensing</span><span data-v-2da845f2>Land Cover</span><span data-v-2da845f2>Machine Learning</span></div><a href="#" class="blog-link" data-v-2da845f2>Read More <i class="fas fa-arrow-right" data-v-2da845f2></i></a></div></div><div class="${ssrRenderClass([{ active: isCardVisible(2) }, "blog-card"])}" data-v-2da845f2><div class="blog-image" data-v-2da845f2><img${ssrRenderAttr("src", _imports_0)} alt="Geospatial Network Analysis" data-v-2da845f2></div><div class="blog-content" data-v-2da845f2><span class="blog-date" data-v-2da845f2>March 10, 2023</span><h3 class="blog-title" data-v-2da845f2>Network Analysis for Transportation Planning</h3><p class="blog-excerpt" data-v-2da845f2>Advanced geospatial network analysis examining service coverage and accessibility optimization using Python and network analysis libraries.</p><div class="blog-tags" data-v-2da845f2><span data-v-2da845f2>Python</span><span data-v-2da845f2>Network Analysis</span><span data-v-2da845f2>Transportation</span></div><a href="#" class="blog-link" data-v-2da845f2>Read More <i class="fas fa-arrow-right" data-v-2da845f2></i></a></div></div></div></div></section><section class="visualization-section" data-v-2da845f2><div class="container" data-v-2da845f2><div class="${ssrRenderClass([{ active: isSectionVisible.value }, "section-header"])}" data-v-2da845f2><h2 class="section-title" data-v-2da845f2>Featured Visualizations</h2><p class="section-subtitle" data-v-2da845f2>Interactive data visualizations showcasing geospatial analysis techniques</p></div><div class="${ssrRenderClass([{ active: isVizVisible(0) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🏙️ Manhattan Building Intelligence: Advanced Urban Analysis</h3><p class="visualization-description" data-v-2da845f2> A comprehensive geospatial analysis project providing advanced visualization and statistical analysis of building footprints and heights across Manhattan. This project combines real OpenStreetMap data with realistic height modeling to create professional-grade urban analysis visualizations. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_3)} alt="Manhattan Building Heights Analysis" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>Python</span><span class="tech-tag" data-v-2da845f2>OSMnx</span><span class="tech-tag" data-v-2da845f2>GeoPandas</span><span class="tech-tag" data-v-2da845f2>Matplotlib</span><span class="tech-tag" data-v-2da845f2>OpenStreetMap</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Features:</h4><ul data-v-2da845f2><li data-v-2da845f2>Analysis of 46,345+ Manhattan building footprints</li><li data-v-2da845f2>Realistic height modeling using lognormal distributions</li><li data-v-2da845f2>Multi-format visualizations (2D, 3D, statistical)</li><li data-v-2da845f2>Neighborhood-specific height patterns and spatial analysis</li><li data-v-2da845f2>Professional-grade urban analysis outputs</li></ul></div></div><div class="${ssrRenderClass([{ active: isVizVisible(1) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🌍 EuroPovertyMapper: European Poverty Risk Analysis</h3><p class="visualization-description" data-v-2da845f2> A comprehensive Python tool for analyzing and visualizing poverty risk across European regions using Eurostat data. This project creates stunning, publication-ready choropleth maps with advanced statistical analysis, providing insights into European social inequality patterns. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_4)} alt="European Poverty Risk Analysis" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>Python</span><span class="tech-tag" data-v-2da845f2>Eurostat API</span><span class="tech-tag" data-v-2da845f2>GeoPandas</span><span class="tech-tag" data-v-2da845f2>Matplotlib</span><span class="tech-tag" data-v-2da845f2>Statistical Analysis</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Insights:</h4><ul data-v-2da845f2><li data-v-2da845f2>Analysis of 327 NUTS2 regions across Europe</li><li data-v-2da845f2>Average poverty rate: 21.1% with range from 6.6% to 59.5%</li><li data-v-2da845f2>Clear North-South divide in poverty distribution</li><li data-v-2da845f2>Highest risk in Bulgaria (31.7%), Greece (28.5%), Romania (27.7%)</li><li data-v-2da845f2>Lowest risk in Czechia (11.4%), Slovenia (14.4%), Netherlands (15.4%)</li></ul></div></div><div class="${ssrRenderClass([{ active: isVizVisible(2) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>Italy Land Cover Change Analysis (1985-2022)</h3><p class="visualization-description" data-v-2da845f2> Comparative analysis of land cover changes in Italy over 37 years, showing urban expansion, agricultural transformations, and natural landscape evolution using high-resolution satellite data. </p><div class="image-comparison" data-v-2da845f2><div data-v-2da845f2><img${ssrRenderAttr("src", _imports_5)} alt="Italy Land Cover 1985" data-v-2da845f2><p class="image-caption" data-v-2da845f2>Italy Land Cover 1985</p></div><div data-v-2da845f2><img${ssrRenderAttr("src", _imports_6)} alt="Italy Land Cover 2022" data-v-2da845f2><p class="image-caption" data-v-2da845f2>Italy Land Cover 2022</p></div></div></div><div class="${ssrRenderClass([{ active: isVizVisible(3) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>Urban Expansion Analysis</h3><p class="visualization-description" data-v-2da845f2> Monitoring urban growth patterns and sprawl dynamics using multi-temporal satellite imagery and spatial metrics to understand urbanization trends and their environmental impacts. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_7)} alt="Urban Expansion Analysis" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div></div><div class="${ssrRenderClass([{ active: isVizVisible(4) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>Global Earthquake Activity (2020-2024)</h3><p class="visualization-description" data-v-2da845f2> Comprehensive visualization of global seismic activity patterns, showing magnitude distribution, depth analysis, and tectonic plate correlations using USGS real-time earthquake data. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_8)} alt="Global Earthquake Activity" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div></div><div class="${ssrRenderClass([{ active: isVizVisible(5) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>Afghanistan Environmental Monitoring</h3><p class="visualization-description" data-v-2da845f2> Integrated analysis of vegetation health (NDVI) and land surface temperature (LST) in Afghanistan, providing insights into agricultural productivity, drought conditions, and climate patterns. </p><div class="image-comparison" data-v-2da845f2><div data-v-2da845f2><img${ssrRenderAttr("src", _imports_9)} alt="Afghanistan NDVI Map" data-v-2da845f2><p class="image-caption" data-v-2da845f2>NDVI - Vegetation Health Index</p></div><div data-v-2da845f2><img${ssrRenderAttr("src", _imports_10)} alt="Afghanistan LST Map" data-v-2da845f2><p class="image-caption" data-v-2da845f2>LST - Land Surface Temperature</p></div></div></div><div class="${ssrRenderClass([{ active: isVizVisible(6) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🟢 Midpoint Between Two Points on a Sphere</h3><p class="visualization-description" data-v-2da845f2> A 3D visualization showing the Earth as a sphere with two cities plotted on its surface and their exact midpoint calculated using Cartesian coordinates. This plot demonstrates how spherical geometry can be applied to compute midpoints between locations on Earth, such as between New York City and Los Angeles. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_11)} alt="Midpoint Between Two Points on a Sphere" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>Python</span><span class="tech-tag" data-v-2da845f2>NumPy</span><span class="tech-tag" data-v-2da845f2>Matplotlib (3D plotting)</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Concepts:</h4><ul data-v-2da845f2><li data-v-2da845f2>Coordinate transformation</li><li data-v-2da845f2>Vector normalization</li><li data-v-2da845f2>Geodesic midpoint calculation</li></ul></div></div><div class="${ssrRenderClass([{ active: isVizVisible(7) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🌍 Global Flight Routes and Travel Times</h3><p class="visualization-description" data-v-2da845f2> An interactive world map that visualizes flight paths and estimated travel times between major global cities, using great-circle distances and average flight speed. Each route is color-coded, labeled with travel time, and rendered on a geographic projection for clarity. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_12)} alt="Global Flight Routes and Travel Times" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>Python</span><span class="tech-tag" data-v-2da845f2>NumPy</span><span class="tech-tag" data-v-2da845f2>Matplotlib</span><span class="tech-tag" data-v-2da845f2>Cartopy</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Concepts:</h4><ul data-v-2da845f2><li data-v-2da845f2>Haversine formula</li><li data-v-2da845f2>Geodesic mapping</li><li data-v-2da845f2>Data-driven visualization</li></ul></div></div><div class="${ssrRenderClass([{ active: isVizVisible(8) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🔵 Shortest Distance from a Point to a Great-Circle Path</h3><p class="visualization-description" data-v-2da845f2> A 3D Earth model showing a city (New Delhi) and the shortest distance to a great-circle route connecting two other cities (London and Singapore). The visualization highlights the geometric relationship between points and great-circle paths on a sphere. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_13)} alt="Shortest Distance from a Point to a Great-Circle Path" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>Python</span><span class="tech-tag" data-v-2da845f2>NumPy</span><span class="tech-tag" data-v-2da845f2>Matplotlib (3D visualization)</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Concepts:</h4><ul data-v-2da845f2><li data-v-2da845f2>Spherical trigonometry</li><li data-v-2da845f2>Projection onto a plane</li><li data-v-2da845f2>Geometric visualization</li></ul></div></div><div class="${ssrRenderClass([{ active: isVizVisible(9) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🏙️ Vancouver Comprehensive Urban Analysis</h3><p class="visualization-description" data-v-2da845f2> A sophisticated geospatial analysis of Vancouver&#39;s urban landscape featuring building heights, road networks, and landmark distribution. This project combines OpenStreetMap data with realistic height modeling to create an interactive 3D-like visualization of the city&#39;s infrastructure with professional GIS styling. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_14)} alt="Vancouver Comprehensive Urban Analysis" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>Python</span><span class="tech-tag" data-v-2da845f2>OSMnx</span><span class="tech-tag" data-v-2da845f2>GeoPandas</span><span class="tech-tag" data-v-2da845f2>Matplotlib</span><span class="tech-tag" data-v-2da845f2>OpenStreetMap</span><span class="tech-tag" data-v-2da845f2>Geospatial Analysis</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Features:</h4><ul data-v-2da845f2><li data-v-2da845f2>Realistic building height modeling by neighborhood</li><li data-v-2da845f2>Comprehensive road network hierarchy visualization</li><li data-v-2da845f2>Landmark and infrastructure mapping</li><li data-v-2da845f2>Statistical urban analysis integration</li></ul></div><div class="project-details" data-v-2da845f2><h4 data-v-2da845f2>Project Highlights:</h4><div class="details-grid" data-v-2da845f2><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Data Sources:</strong> OpenStreetMap, Urban Planning Data </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Neighborhoods Analyzed:</strong> Downtown Core, West End, Yaletown, Kitsilano, Olympic Village, Mount Pleasant, and more </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Building Height Model:</strong> Statistical distribution based on real urban planning parameters </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Road Classification:</strong> Motorway, Trunk, Primary, Secondary, Tertiary, Residential </div></div></div></div><div class="${ssrRenderClass([{ active: isVizVisible(10) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🌊 Global Maritime Traffic Visualization</h3><p class="visualization-description" data-v-2da845f2> An interactive world map showcasing global shipping routes, port infrastructure, and vessel traffic patterns. The visualization highlights major trade corridors, port capacities, and environmental impact metrics using real-time simulated AIS data with optimized label placement and route clarity. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_15)} alt="Global Maritime Traffic Visualization" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>Python</span><span class="tech-tag" data-v-2da845f2>Pandas</span><span class="tech-tag" data-v-2da845f2>Plotly</span><span class="tech-tag" data-v-2da845f2>Geo Visualization</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Concepts:</h4><ul data-v-2da845f2><li data-v-2da845f2>Shipping route optimization</li><li data-v-2da845f2>Port capacity analysis</li><li data-v-2da845f2>Environmental impact assessment</li><li data-v-2da845f2>Maritime traffic patterns</li></ul></div></div><div class="${ssrRenderClass([{ active: isVizVisible(11) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>Comprehensive Land Cover Transition Analysis (1995-2000)</h3><p class="visualization-description" data-v-2da845f2> This section presents a comprehensive analysis of land cover transitions in Italy, quantifying the pathways, magnitude, and dynamics of landscape change from 1995 to 2000. Utilizing ESA CCI LC (300m) datasets, the analysis reveals the complex interplay of urbanization, agricultural change, and forest dynamics that happened in the Italian peninsula. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_16)} alt="Comprehensive Land Cover Transition Analysis" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div></div><div class="${ssrRenderClass([{ active: isVizVisible(12) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>Accuracy Assessment: GLC_FCS30D vs ESA CCI LC</h3><p class="visualization-description" data-v-2da845f2> This section presents accuracy assessment between the high-resolution GLC_FCS30D (30m) and medium-resolution ESA CCI LC (300m) land cover datasets across Italy. The period 2000 to 2022 was considered in this analysis. The evaluation provides insights into the consistency, reliability, and limitations of both datasets for land cover monitoring applications, revealing both substantial agreement and systematic discrepancies that varied significantly by land cover class. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_17)} alt="Accuracy Assessment Comparison" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>GRASS GIS</span><span class="tech-tag" data-v-2da845f2>Python</span><span class="tech-tag" data-v-2da845f2>scikit-learn</span><span class="tech-tag" data-v-2da845f2>Statistical Analysis</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Metrics:</h4><ul data-v-2da845f2><li data-v-2da845f2>Overall Accuracy (OA): 78.06% - 79.13%</li><li data-v-2da845f2>Cohen&#39;s Kappa Coefficient (κ): 0.639 - 0.660</li><li data-v-2da845f2>Producer&#39;s Accuracy (PA)</li><li data-v-2da845f2>User&#39;s Accuracy (UA)</li></ul></div></div><div class="${ssrRenderClass([{ active: isVizVisible(13) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🌐 Global Internet Connectivity &amp; Infrastructure Map</h3><p class="visualization-description" data-v-2da845f2> A real-time simulation of global internet infrastructure showcasing 5.3+ billion connected devices, data flow patterns, and network hubs. This visualization maps internet exchange points, data centers, submarine cables, and live data traffic across the global digital ecosystem. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_18)} alt="Global Internet Connectivity and Infrastructure Visualization" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>GeoPandas</span><span class="tech-tag" data-v-2da845f2>Matplotlib</span><span class="tech-tag" data-v-2da845f2>Contextily</span><span class="tech-tag" data-v-2da845f2>Network Simulation</span><span class="tech-tag" data-v-2da845f2>Data Visualization</span><span class="tech-tag" data-v-2da845f2>Spatial Analysis</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Features:</h4><ul data-v-2da845f2><li data-v-2da845f2>Simulated real-time device connectivity (5.3B+ devices)</li><li data-v-2da845f2>Internet backbone traffic flow visualization</li><li data-v-2da845f2>Major infrastructure hubs mapping</li><li data-v-2da845f2>Data flow particle animation effects</li><li data-v-2da845f2>Global network topology analysis</li><li data-v-2da845f2>Live connection counter display</li></ul></div><div class="project-details" data-v-2da845f2><h4 data-v-2da845f2>Infrastructure Components:</h4><div class="details-grid" data-v-2da845f2><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Connected Devices:</strong> 5.3+ Billion simulated </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Data Centers:</strong> Major global facilities</div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Internet Exchanges:</strong> Key routing hubs</div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Network Backbone:</strong> Global connectivity lines</div></div></div></div><div class="${ssrRenderClass([{ active: isVizVisible(14) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🏙️ Los Angeles Urban Expansion &amp; Historical Railway Network</h3><p class="visualization-description" data-v-2da845f2> A historical-geographic visualization mapping Los Angeles&#39; urban growth alongside the Pacific Electric Railway system. This analysis shows how railway-driven development shaped Southern California&#39;s sprawl, featuring topographic context and temporal urban expansion patterns from 1890 to 2014. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_19)} alt="Los Angeles Urban Expansion and Historical Railway Network" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>OSMnx</span><span class="tech-tag" data-v-2da845f2>GeoPandas</span><span class="tech-tag" data-v-2da845f2>Matplotlib</span><span class="tech-tag" data-v-2da845f2>OpenStreetMap</span><span class="tech-tag" data-v-2da845f2>Contextily</span><span class="tech-tag" data-v-2da845f2>Historical GIS</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Features:</h4><ul data-v-2da845f2><li data-v-2da845f2>Historical Pacific Electric Railway reconstruction</li><li data-v-2da845f2>Temporal urban expansion (1890-2014)</li><li data-v-2da845f2>Topographic basemap integration</li><li data-v-2da845f2>Natural feature mapping (water, parks)</li><li data-v-2da845f2>Historical development patterns</li><li data-v-2da845f2>Railway-driven urban growth analysis</li></ul></div><div class="project-details" data-v-2da845f2><h4 data-v-2da845f2>Historical Context:</h4><div class="details-grid" data-v-2da845f2><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Railway Era:</strong> 1901-1961 </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Peak System:</strong> 1,000+ miles of track </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Development Strategy:</strong> Henry Huntington&#39;s land development </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Historical Significance:</strong> World&#39;s largest electric railway </div></div></div></div><div class="${ssrRenderClass([{ active: isVizVisible(15) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🌍 3D Earth Globe - Esri National Geographic Style</h3><p class="visualization-description" data-v-2da845f2> A stunning 3D animated globe visualization featuring Esri&#39;s National Geographic map style. This professional geographic visualization rotates smoothly through 360 degrees, highlighting 35 countries with enhanced markers and real-time progress tracking. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><video width="100%" height="500" controls autoplay loop style="${ssrRenderStyle({ "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2><source${ssrRenderAttr("src", _imports_20)} type="video/mp4" data-v-2da845f2> Your browser does not support the video tag. </video></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>Plotly</span><span class="tech-tag" data-v-2da845f2>Python</span><span class="tech-tag" data-v-2da845f2>3D Visualization</span><span class="tech-tag" data-v-2da845f2>Geographic</span><span class="tech-tag" data-v-2da845f2>Animation</span><span class="tech-tag" data-v-2da845f2>ImageIO</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Features:</h4><ul data-v-2da845f2><li data-v-2da845f2>360-degree smooth rotation animation</li><li data-v-2da845f2>Esri National Geographic map styling</li><li data-v-2da845f2>35 countries with enhanced markers</li><li data-v-2da845f2>Real-time progress tracking</li><li data-v-2da845f2>Professional cartographic elements</li></ul></div><div class="project-details" data-v-2da845f2><h4 data-v-2da845f2>Technical Specifications:</h4><div class="details-grid" data-v-2da845f2><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Duration:</strong> 30 seconds </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Frame Rate:</strong> 30 FPS </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Resolution:</strong> 1000x1000 pixels </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Countries:</strong> 35 global locations </div></div></div></div><div class="${ssrRenderClass([{ active: isVizVisible(16) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🗺️ Advanced World Political Map Visualization</h3><p class="visualization-description" data-v-2da845f2> A sophisticated cartographic visualization featuring climate-based country coloring, economic indicators, and personal project locations. This interactive world map combines professional GIS techniques with storytelling elements to create an engaging geopolitical analysis tool. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_21)} alt="Advanced World Political Map Visualization" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>GeoPandas</span><span class="tech-tag" data-v-2da845f2>Matplotlib</span><span class="tech-tag" data-v-2da845f2>Contextily</span><span class="tech-tag" data-v-2da845f2>Cartography</span><span class="tech-tag" data-v-2da845f2>mplcursors</span><span class="tech-tag" data-v-2da845f2>GIS</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Features:</h4><ul data-v-2da845f2><li data-v-2da845f2>Climate-zone based country coloring</li><li data-v-2da845f2>Interactive hover effects with country details</li><li data-v-2da845f2>GDP economic bubble indicators</li><li data-v-2da845f2>Regional alliance highlighting (EU, ASEAN)</li><li data-v-2da845f2>Personal project location mapping</li><li data-v-2da845f2>Professional cartographic elements</li></ul></div><div class="project-details" data-v-2da845f2><h4 data-v-2da845f2>Technical Implementation:</h4><div class="details-grid" data-v-2da845f2><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Data Source:</strong> Natural Earth 10m Cultural Dataset </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Projection:</strong> Web Mercator (EPSG:3857) </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Climate Zones:</strong> Polar, Temperate, Subtropical, Tropical </div><div class="detail-item" data-v-2da845f2><strong data-v-2da845f2>Interactivity:</strong> Hover effects with mplcursors</div></div></div></div><div class="${ssrRenderClass([{ active: isVizVisible(17) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🗺️ Historical Travel Duration from Vienna 1914</h3><p class="visualization-description" data-v-2da845f2> A sophisticated historical isochrone map visualizing travel times from Vienna across Central Europe in 1914, using real administrative boundaries from Natural Earth shapefiles. This reconstruction incorporates terrain obstacles, transportation networks, and geopolitical boundaries of the pre-WWI era to model realistic travel durations across the <strong data-v-2da845f2>Austro-Hungarian Empire</strong>, <strong data-v-2da845f2>German Empire</strong>, <strong data-v-2da845f2>Russian Empire</strong>, and <strong data-v-2da845f2>Kingdom of Italy</strong>, with empire names clearly labeled within their respective territories for immediate geopolitical context. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_22)} alt="Historical Travel Duration from Vienna 1914 with Empire Labels and Real Administrative Boundaries" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>Python</span><span class="tech-tag" data-v-2da845f2>GeoPandas</span><span class="tech-tag" data-v-2da845f2>Contextily</span><span class="tech-tag" data-v-2da845f2>Shapely</span><span class="tech-tag" data-v-2da845f2>Natural Earth</span><span class="tech-tag" data-v-2da845f2>Matplotlib</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Concepts:</h4><ul data-v-2da845f2><li data-v-2da845f2>Historical Isochrone Modeling</li><li data-v-2da845f2>Geospatial Data Reprojection</li><li data-v-2da845f2>Terrain-based Travel Modifiers</li><li data-v-2da845f2>Automatic Label Placement</li><li data-v-2da845f2>Historical Transportation Networks</li><li data-v-2da845f2>Empire Territory Labeling</li></ul></div><div class="methodology" data-v-2da845f2><h4 data-v-2da845f2>Technical Methodology:</h4><ul data-v-2da845f2><li data-v-2da845f2>Used Natural Earth 10m cultural shapefiles for authentic 1914 administrative boundaries</li><li data-v-2da845f2>Implemented terrain-aware travel time algorithms with Alps and Carpathians modifiers</li><li data-v-2da845f2>Integrated historical railway and road networks from period maps</li><li data-v-2da845f2>Employed Web Mercator projection (EPSG:3857) for accurate basemap alignment</li><li data-v-2da845f2>Modeled empire boundaries (Austro-Hungarian, German, Russian, Italian) with dashed styling</li></ul></div><div class="historical-context" data-v-2da845f2><h4 data-v-2da845f2>Historical Context &amp; Empire Territories:</h4><ul data-v-2da845f2><li data-v-2da845f2><strong data-v-2da845f2>Austro-Hungarian Empire</strong>: Central position containing Vienna, Budapest, Prague, and Trieste</li><li data-v-2da845f2><strong data-v-2da845f2>German Empire</strong>: Northern territory including Berlin, Munich, Hamburg, and Dresden</li><li data-v-2da845f2><strong data-v-2da845f2>Russian Empire</strong>: Eastern domains encompassing Lwiv, Czernowitz, and Warsaw</li><li data-v-2da845f2><strong data-v-2da845f2>Kingdom of Italy</strong>: Southern region with Venice, Milan, and Trieste (disputed)</li><li data-v-2da845f2>Travel times reflect pre-automobile era transportation (rail, horse, foot)</li><li data-v-2da845f2>Alpine regions show significantly longer travel times due to terrain obstacles</li><li data-v-2da845f2>Major rivers like the Danube provided natural travel corridors</li><li data-v-2da845f2>Railway networks dramatically reduced travel times between major cities</li><li data-v-2da845f2>Political boundaries influenced route availability and travel permissions</li></ul></div><div class="geopolitical-features" data-v-2da845f2><h4 data-v-2da845f2>Geopolitical Features:</h4><ul data-v-2da845f2><li data-v-2da845f2>Clear empire labeling provides immediate context for understanding travel restrictions</li><li data-v-2da845f2>Border crossings between empires would have involved customs and passport controls</li><li data-v-2da845f2>Railway networks primarily developed within empire boundaries with limited international connections</li><li data-v-2da845f2>Major cities like Vienna served as hubs within their respective empires</li><li data-v-2da845f2>Travel times increase significantly when crossing multiple imperial boundaries</li></ul></div></div><div class="${ssrRenderClass([{ active: isVizVisible(18) }, "visualization-container"])}" data-v-2da845f2><h3 class="visualization-title" data-v-2da845f2>🌿 Lombardy Land Cover Classification 2022</h3><p class="visualization-description" data-v-2da845f2> Advanced land cover classification analysis comparing ESA CCI 300m and GLC_FCS30D datasets for Lombardy, Italy. Through sophisticated data reprojection and reclassification processes, we harmonized both datasets using the MOLCA classification scheme to enable precise intercomparison and accuracy assessment between global land cover products. </p><div class="chart-container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2da845f2><img${ssrRenderAttr("src", _imports_23)} alt="Lombardy Land Cover Classification 2022 - Ultra Quality Professional Analysis" style="${ssrRenderStyle({ "max-width": "100%", "max-height": "500px", "border-radius": "8px", "box-shadow": "0 10px 30px rgba(44, 85, 48, 0.1)" })}" data-v-2da845f2></div><div class="tech-tags" data-v-2da845f2><span class="tech-tag" data-v-2da845f2>Python</span><span class="tech-tag" data-v-2da845f2>GDAL</span><span class="tech-tag" data-v-2da845f2>Rasterio</span><span class="tech-tag" data-v-2da845f2>Geopandas</span><span class="tech-tag" data-v-2da845f2>ESA CCI</span><span class="tech-tag" data-v-2da845f2>GLC_FCS30D</span></div><div class="key-concepts" data-v-2da845f2><h4 data-v-2da845f2>Key Concepts:</h4><ul data-v-2da845f2><li data-v-2da845f2>Data Reprojection &amp; Harmonization</li><li data-v-2da845f2>MOLCA Classification Scheme</li><li data-v-2da845f2>Inter-dataset Consistency Analysis</li><li data-v-2da845f2>Land Cover Accuracy Assessment</li><li data-v-2da845f2>Spatial Resolution Standardization</li></ul></div><div class="methodology" data-v-2da845f2><h4 data-v-2da845f2>Methodology Highlights:</h4><ul data-v-2da845f2><li data-v-2da845f2>Reprojected ESA CCI 300m data to match GLC_FCS30D spatial reference</li><li data-v-2da845f2>Applied MOLCA scheme for standardized class definitions</li><li data-v-2da845f2>Conducted pixel-by-pixel consistency analysis</li><li data-v-2da845f2>Quantified inter-product agreement metrics</li><li data-v-2da845f2>Validated classification accuracy across urban, agricultural, and natural areas</li></ul></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2da845f2"]]);

export { blog as default };
//# sourceMappingURL=blog-gtN4eTIf.mjs.map
