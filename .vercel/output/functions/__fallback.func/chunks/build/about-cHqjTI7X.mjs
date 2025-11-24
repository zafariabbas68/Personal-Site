import { _ as __nuxt_component_0 } from './nuxt-link-DL8m6sMt.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, a as useSeoMeta } from './server.mjs';
import '../nitro/nitro.mjs';
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

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const showScrollTop = ref(false);
    const isMenuOpen = ref(false);
    const currentLanguage = ref("en");
    useSeoMeta({
      title: "About - Ghulam Abbas Zafari | Geoinformatics Engineer",
      description: "Professional Geoinformatics Engineer specializing in GIS, Remote Sensing, and spatial data analysis with extensive experience in cadastral surveying."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-page" }, _attrs))} data-v-6f6ca955><header data-v-6f6ca955><div class="header-content" data-v-6f6ca955><div class="container nav-container" data-v-6f6ca955>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-icon" data-v-6f6ca955${_scopeId}><i class="fas fa-map-marked-alt" data-v-6f6ca955${_scopeId}></i></span><span data-v-6f6ca955${_scopeId}>Ghulam Abbas Zafari</span>`);
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
      _push(`<ul class="${ssrRenderClass([{ active: isMenuOpen.value }, "nav-links"])}" id="navLinks" data-v-6f6ca955><li data-v-6f6ca955>`);
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
      _push(`</li><li data-v-6f6ca955>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "active",
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
      _push(`</li><li data-v-6f6ca955>`);
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
      _push(`</li><li data-v-6f6ca955>`);
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
      _push(`</li><li data-v-6f6ca955>`);
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
      _push(`</li><li data-v-6f6ca955>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
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
      _push(`</li><li class="language-selector" data-v-6f6ca955><div class="language-dropdown" data-v-6f6ca955><button class="language-btn" data-v-6f6ca955><i class="fas fa-globe" data-v-6f6ca955></i><span class="current-language" data-v-6f6ca955>${ssrInterpolate(currentLanguage.value.toUpperCase())}</span><i class="fas fa-chevron-down" style="${ssrRenderStyle({ "font-size": "0.8rem", "margin-left": "5px" })}" data-v-6f6ca955></i></button><ul class="language-options" data-v-6f6ca955><li class="${ssrRenderClass({ active: currentLanguage.value === "en" })}" data-v-6f6ca955><span class="language-flag" data-v-6f6ca955>🇺🇸</span> English </li><li class="${ssrRenderClass({ active: currentLanguage.value === "it" })}" data-v-6f6ca955><span class="language-flag" data-v-6f6ca955>🇮🇹</span> Italiano </li><li class="${ssrRenderClass({ active: currentLanguage.value === "fa" })}" data-v-6f6ca955><span class="language-flag" data-v-6f6ca955>🇮🇷</span> فارسی </li></ul></div></li><li data-v-6f6ca955>`);
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
      _push(`</li></ul><div class="menu-toggle" data-v-6f6ca955><i class="${ssrRenderClass(isMenuOpen.value ? "fas fa-times" : "fas fa-bars")}" data-v-6f6ca955></i></div></div></div></header><section class="page-header" data-v-6f6ca955><div class="geospatial-background" data-v-6f6ca955><svg class="topography-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" data-v-6f6ca955><defs data-v-6f6ca955><linearGradient id="earthGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-6f6ca955><stop offset="0%" stop-color="#1a3c27" data-v-6f6ca955></stop><stop offset="50%" stop-color="#2C5530" data-v-6f6ca955></stop><stop offset="100%" stop-color="#1a3c27" data-v-6f6ca955></stop></linearGradient><linearGradient id="contourGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-6f6ca955><stop offset="0%" stop-color="#4A90E2" stop-opacity="0.4" data-v-6f6ca955></stop><stop offset="50%" stop-color="#2E86AB" stop-opacity="0.6" data-v-6f6ca955></stop><stop offset="100%" stop-color="#4A90E2" stop-opacity="0.4" data-v-6f6ca955></stop></linearGradient><radialGradient id="dataGlow" cx="50%" cy="50%" r="50%" data-v-6f6ca955><stop offset="0%" stop-color="#4A90E2" stop-opacity="0.8" data-v-6f6ca955></stop><stop offset="70%" stop-color="#2E86AB" stop-opacity="0.4" data-v-6f6ca955></stop><stop offset="100%" stop-color="#4A90E2" stop-opacity="0" data-v-6f6ca955></stop></radialGradient><filter id="glow" x="-50%" y="-50%" width="200%" height="200%" data-v-6f6ca955><feGaussianBlur stdDeviation="4" result="coloredBlur" data-v-6f6ca955></feGaussianBlur><feMerge data-v-6f6ca955><feMergeNode in="coloredBlur" data-v-6f6ca955></feMergeNode><feMergeNode in="SourceGraphic" data-v-6f6ca955></feMergeNode></feMerge></filter></defs><rect width="100%" height="100%" fill="url(#earthGradient)" opacity="0.9" data-v-6f6ca955></rect><g class="grid-lines" stroke="#2E86AB" stroke-opacity="0.15" stroke-width="1.5" data-v-6f6ca955><path d="M0,0 L1200,0 M0,100 L1200,100 M0,200 L1200,200 M0,300 L1200,300 M0,400 L1200,400 M0,500 L1200,500 M0,600 L1200,600 M0,700 L1200,700 M0,800 L1200,800" data-v-6f6ca955></path><path d="M0,0 L0,800 M100,0 L100,800 M200,0 L200,800 M300,0 L300,800 M400,0 L400,800 M500,0 L500,800 M600,0 L600,800 M700,0 L700,800 M800,0 L800,800 M900,0 L900,800 M1000,0 L1000,800 M1100,0 L1100,800 M1200,0 L1200,800" data-v-6f6ca955></path></g><g class="contours-group" data-v-6f6ca955><path class="contour-line contour-1" d="M0,350 Q150,320 300,350 T600,350 T900,350 T1200,350" data-v-6f6ca955></path><path class="contour-line contour-2" d="M0,400 Q150,370 300,400 T600,400 T900,400 T1200,400" data-v-6f6ca955></path><path class="contour-line contour-3" d="M0,450 Q150,420 300,450 T600,450 T900,450 T1200,450" data-v-6f6ca955></path><path class="contour-line contour-4" d="M0,500 Q150,470 300,500 T600,500 T900,500 T1200,500" data-v-6f6ca955></path><path class="contour-line contour-5" d="M0,550 Q150,520 300,550 T600,550 T900,550 T1200,550" data-v-6f6ca955></path><path class="contour-line contour-6" d="M0,300 Q150,270 300,300 T600,300 T900,300 T1200,300" data-v-6f6ca955></path></g><g class="data-points" data-v-6f6ca955><g class="data-cluster-1" data-v-6f6ca955><circle class="data-point primary" cx="300" cy="350" r="5" data-v-6f6ca955></circle><circle class="data-point secondary" cx="250" cy="320" r="3" data-v-6f6ca955></circle><circle class="data-point secondary" cx="350" cy="330" r="3" data-v-6f6ca955></circle><circle class="data-point secondary" cx="280" cy="380" r="3" data-v-6f6ca955></circle></g><g class="data-cluster-2" data-v-6f6ca955><circle class="data-point primary" cx="600" cy="400" r="5" data-v-6f6ca955></circle><circle class="data-point secondary" cx="550" cy="370" r="3" data-v-6f6ca955></circle><circle class="data-point secondary" cx="650" cy="380" r="3" data-v-6f6ca955></circle><circle class="data-point secondary" cx="580" cy="430" r="3" data-v-6f6ca955></circle></g><g class="data-cluster-3" data-v-6f6ca955><circle class="data-point primary" cx="900" cy="450" r="5" data-v-6f6ca955></circle><circle class="data-point secondary" cx="850" cy="420" r="3" data-v-6f6ca955></circle><circle class="data-point secondary" cx="950" cy="430" r="3" data-v-6f6ca955></circle><circle class="data-point secondary" cx="880" cy="480" r="3" data-v-6f6ca955></circle></g></g><g class="connection-lines" data-v-6f6ca955><path class="connection connection-1" d="M300,350 L600,400" data-v-6f6ca955></path><path class="connection connection-2" d="M600,400 L900,450" data-v-6f6ca955></path><path class="connection connection-3" d="M250,320 L550,370" data-v-6f6ca955></path><path class="connection connection-4" d="M350,330 L650,380" data-v-6f6ca955></path><path class="connection connection-5" d="M280,380 L580,430" data-v-6f6ca955></path><path class="connection connection-6" d="M550,370 L850,420" data-v-6f6ca955></path><path class="connection connection-7" d="M650,380 L950,430" data-v-6f6ca955></path><path class="connection connection-8" d="M580,430 L880,480" data-v-6f6ca955></path></g><g class="satellite-system" data-v-6f6ca955><circle class="orbit orbit-1" cx="600" cy="400" r="180" data-v-6f6ca955></circle><circle class="orbit orbit-2" cx="600" cy="400" r="280" data-v-6f6ca955></circle><circle class="orbit orbit-3" cx="600" cy="400" r="380" data-v-6f6ca955></circle><g class="satellites" data-v-6f6ca955><circle class="satellite satellite-1" cx="780" cy="400" r="6" data-v-6f6ca955><animateTransform attributeName="transform" type="rotate" from="0 600 400" to="360 600 400" dur="25s" repeatCount="indefinite" data-v-6f6ca955></animateTransform></circle><circle class="satellite satellite-2" cx="600" cy="220" r="5" data-v-6f6ca955><animateTransform attributeName="transform" type="rotate" from="120 600 400" to="480 600 400" dur="30s" repeatCount="indefinite" data-v-6f6ca955></animateTransform></circle><circle class="satellite satellite-3" cx="420" cy="400" r="4" data-v-6f6ca955><animateTransform attributeName="transform" type="rotate" from="240 600 400" to="600 600 400" dur="35s" repeatCount="indefinite" data-v-6f6ca955></animateTransform></circle></g></g><g class="coordinates" fill="#ffffff" font-family="Arial" font-size="12" opacity="0.3" data-v-6f6ca955><text x="50" y="30" data-v-6f6ca955>45°N</text><text x="1150" y="30" data-v-6f6ca955>45°N</text><text x="50" y="770" data-v-6f6ca955>45°S</text><text x="1150" y="770" data-v-6f6ca955>45°S</text><text x="30" y="400" transform="rotate(-90 30,400)" data-v-6f6ca955>0°</text><text x="1170" y="400" transform="rotate(90 1170,400)" data-v-6f6ca955>180°</text></g><g class="scan-lines" data-v-6f6ca955><rect class="scan-line" x="0" y="0" width="100%" height="2" fill="#4A90E2" opacity="0.1" data-v-6f6ca955></rect></g></svg></div><div class="container" data-v-6f6ca955><h1 data-v-6f6ca955>About Me</h1><p data-v-6f6ca955>Professional Geoinformatics Engineer &amp; GIS Specialist</p></div></section><section class="about-section" data-v-6f6ca955><div class="container" data-v-6f6ca955><div class="about-content" data-v-6f6ca955><div class="profile-container" data-v-6f6ca955><div class="profile-image" data-v-6f6ca955></div><div class="personal-info" data-v-6f6ca955><h3 data-v-6f6ca955>Personal Information</h3><ul data-v-6f6ca955><li data-v-6f6ca955><strong data-v-6f6ca955>Email:</strong> ghulamabbas.zafari@gmail.com</li><li data-v-6f6ca955><strong data-v-6f6ca955>Phone:</strong> (+39) 379-138-7487</li><li data-v-6f6ca955><strong data-v-6f6ca955>Address:</strong> Via Vittorio Veneto 22, Bresso, Italy</li><li data-v-6f6ca955><strong data-v-6f6ca955>Languages:</strong> Persian (Dari), English (C2), Italian (B1)</li></ul><div class="social-links" data-v-6f6ca955><a href="https://github.com/zafariabbas68" target="_blank" aria-label="GitHub" data-v-6f6ca955><i class="fab fa-github" data-v-6f6ca955></i></a><a href="https://wa.me/393791387487" target="_blank" aria-label="WhatsApp" data-v-6f6ca955><i class="fab fa-whatsapp" data-v-6f6ca955></i></a><a href="mailto:ghulamabbas.zafari@gmail.com" aria-label="Email" data-v-6f6ca955><i class="fas fa-envelope" data-v-6f6ca955></i></a><a href="https://www.linkedin.com/in/ghulam-abbas-zafari-b94105248/" target="_blank" aria-label="LinkedIn" data-v-6f6ca955><i class="fab fa-linkedin" data-v-6f6ca955></i></a></div><div class="cv-download" data-v-6f6ca955><a href="/reports/Eng_zafari-cv.pdf" class="cv-btn" download data-v-6f6ca955><i class="fas fa-download" data-v-6f6ca955></i><span data-v-6f6ca955>Download CV</span></a></div></div></div><div class="about-text" data-v-6f6ca955><h2 data-v-6f6ca955>Professional Profile</h2><p data-v-6f6ca955>I am a dedicated Geoinformatics Engineer with a passion for transforming spatial data into actionable insights. With over five years of professional experience in cadastral surveying and geospatial analysis, I bring a unique combination of technical expertise and problem-solving skills to every project.</p><p data-v-6f6ca955>I specialize in GIS applications, remote sensing analysis, and spatial data science. My work focuses on developing innovative solutions for environmental monitoring, urban planning, and land management challenges.</p><div class="education-highlight" data-v-6f6ca955><h4 data-v-6f6ca955>Master&#39;s Degree in Geoinformatics Engineering</h4><div class="education-date" data-v-6f6ca955>Graduated: October 23, 2025</div><p data-v-6f6ca955>Successfully completed my Master&#39;s degree with a comprehensive thesis defense at Politecnico di Milano.</p><div class="thesis-title" data-v-6f6ca955><strong data-v-6f6ca955>Thesis Title:</strong><br data-v-6f6ca955> &quot;Land Cover Dynamics and Transitions in Italy: A Multi-Temporal Analysis Using Global Land Cover Datasets&quot; </div><p data-v-6f6ca955>This research involved advanced analysis of land cover changes across Italy using multi-temporal satellite data and machine learning techniques to understand environmental transitions and urban development patterns.</p></div><p data-v-6f6ca955>What sets me apart is my ability to bridge the gap between complex geospatial technologies and practical applications. I thrive on creating efficient workflows that deliver accurate, reliable results while maintaining the highest standards of quality and precision.</p><h3 data-v-6f6ca955>Technical Expertise</h3><div class="skills-grid" data-v-6f6ca955><div class="skill-category" data-v-6f6ca955><h4 data-v-6f6ca955>Geospatial Analysis &amp; GIS</h4><ul data-v-6f6ca955><li data-v-6f6ca955>Advanced GIS Analysis (ArcGIS Pro, QGIS)</li><li data-v-6f6ca955>Spatial Data Modeling &amp; Database Management</li><li data-v-6f6ca955>Cartography &amp; Map Design</li><li data-v-6f6ca955>Geodatabase Design &amp; Implementation</li><li data-v-6f6ca955>Cadastral Surveying &amp; Land Administration</li><li data-v-6f6ca955>Spatial Statistics &amp; Geostatistics</li></ul></div><div class="skill-category" data-v-6f6ca955><h4 data-v-6f6ca955>Remote Sensing &amp; Image Processing</h4><ul data-v-6f6ca955><li data-v-6f6ca955>Multispectral &amp; Hyperspectral Analysis</li><li data-v-6f6ca955>SAR Data Processing &amp; Interpretation</li><li data-v-6f6ca955>Land Cover/Land Use Classification</li><li data-v-6f6ca955>Change Detection &amp; Time Series Analysis</li><li data-v-6f6ca955>Atmospheric Correction &amp; Calibration</li><li data-v-6f6ca955>Drone Imagery Processing</li></ul></div><div class="skill-category" data-v-6f6ca955><h4 data-v-6f6ca955>Programming &amp; Data Science</h4><ul data-v-6f6ca955><li data-v-6f6ca955>Python (Geospatial Libraries: GDAL, Rasterio, GeoPandas)</li><li data-v-6f6ca955>JavaScript (Leaflet, OpenLayers, D3.js)</li><li data-v-6f6ca955>SQL &amp; Spatial Databases (PostGIS)</li><li data-v-6f6ca955>Machine Learning for Geospatial Applications</li><li data-v-6f6ca955>Web Mapping &amp; Geospatial APIs</li><li data-v-6f6ca955>Data Visualization &amp; Dashboard Development</li></ul></div><div class="skill-category" data-v-6f6ca955><h4 data-v-6f6ca955>Software &amp; Platforms</h4><ul data-v-6f6ca955><li data-v-6f6ca955>ESRI ArcGIS Suite</li><li data-v-6f6ca955>Google Earth Engine</li><li data-v-6f6ca955>ENVI &amp; ERDAS IMAGINE</li><li data-v-6f6ca955>AutoCAD &amp; MicroStation</li><li data-v-6f6ca955>QGIS with Advanced Plugins</li><li data-v-6f6ca955>GeoServer &amp; Web GIS Solutions</li></ul></div></div><div class="skill-proficiency" data-v-6f6ca955><h3 data-v-6f6ca955>Technical Proficiency</h3><div class="proficiency-item" data-v-6f6ca955><div class="skill-name" data-v-6f6ca955><span data-v-6f6ca955>GIS Analysis &amp; Spatial Modeling</span><span data-v-6f6ca955>95%</span></div><div class="skill-bar" data-v-6f6ca955><div class="skill-level" style="${ssrRenderStyle({ width: "95%" })}" data-v-6f6ca955></div></div></div><div class="proficiency-item" data-v-6f6ca955><div class="skill-name" data-v-6f6ca955><span data-v-6f6ca955>Remote Sensing &amp; Image Processing</span><span data-v-6f6ca955>90%</span></div><div class="skill-bar" data-v-6f6ca955><div class="skill-level" style="${ssrRenderStyle({ width: "90%" })}" data-v-6f6ca955></div></div></div><div class="proficiency-item" data-v-6f6ca955><div class="skill-name" data-v-6f6ca955><span data-v-6f6ca955>Python Programming for Geospatial</span><span data-v-6f6ca955>88%</span></div><div class="skill-bar" data-v-6f6ca955><div class="skill-level" style="${ssrRenderStyle({ width: "88%" })}" data-v-6f6ca955></div></div></div><div class="proficiency-item" data-v-6f6ca955><div class="skill-name" data-v-6f6ca955><span data-v-6f6ca955>Web GIS Development</span><span data-v-6f6ca955>85%</span></div><div class="skill-bar" data-v-6f6ca955><div class="skill-level" style="${ssrRenderStyle({ width: "85%" })}" data-v-6f6ca955></div></div></div><div class="proficiency-item" data-v-6f6ca955><div class="skill-name" data-v-6f6ca955><span data-v-6f6ca955>Spatial Database Management</span><span data-v-6f6ca955>92%</span></div><div class="skill-bar" data-v-6f6ca955><div class="skill-level" style="${ssrRenderStyle({ width: "92%" })}" data-v-6f6ca955></div></div></div></div><div class="certifications" data-v-6f6ca955><h3 data-v-6f6ca955>Certifications &amp; Specializations</h3><div class="cert-grid" data-v-6f6ca955><div class="cert-item" data-v-6f6ca955><h4 data-v-6f6ca955>Google Earth Engine for Geospatial Analysis</h4><div class="cert-issuer" data-v-6f6ca955>Google</div><div class="cert-date" data-v-6f6ca955>2023</div></div><div class="cert-item" data-v-6f6ca955><h4 data-v-6f6ca955>Advanced Python for Geospatial Applications</h4><div class="cert-issuer" data-v-6f6ca955>Esri</div><div class="cert-date" data-v-6f6ca955>2022</div></div><div class="cert-item" data-v-6f6ca955><h4 data-v-6f6ca955>Remote Sensing for Earth Observation</h4><div class="cert-issuer" data-v-6f6ca955>Polimi</div><div class="cert-date" data-v-6f6ca955>2021</div></div></div></div></div></div></div></section><div class="${ssrRenderClass([{ active: showScrollTop.value }, "scroll-to-top"])}" data-v-6f6ca955><i class="fas fa-chevron-up" data-v-6f6ca955></i></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6f6ca955"]]);

export { about as default };
//# sourceMappingURL=about-cHqjTI7X.mjs.map
