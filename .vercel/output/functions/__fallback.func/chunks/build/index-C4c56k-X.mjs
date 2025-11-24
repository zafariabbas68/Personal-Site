import { _ as __nuxt_component_0 } from './nuxt-link-Dfrr2kfa.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/images/profile.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showScrollTop = ref(false);
    const isMenuOpen = ref(false);
    const currentLanguage = ref("en");
    const isSectionVisible = ref({
      expertise: false,
      projects: false,
      "skill-0": false,
      "skill-1": false,
      "skill-2": false,
      "project-0": false,
      "project-1": false,
      "project-2": false,
      "project-3": false,
      "project-4": false,
      "project-5": false
    });
    const skills = [
      {
        icon: "fas fa-map",
        title: "Geographic Information Systems",
        description: "Advanced spatial analysis, cartography, and WebGIS development using industry-standard tools.",
        tags: ["ArcGIS", "QGIS", "PostGIS", "GeoServer"]
      },
      {
        icon: "fas fa-satellite-dish",
        title: "Remote Sensing",
        description: "Image processing, classification, and environmental monitoring using optical and SAR data.",
        tags: ["ENVI", "Google Earth Engine", "ESA SNAP", "Drone Imagery"]
      },
      {
        icon: "fas fa-code",
        title: "Geospatial Development",
        description: "Building custom geospatial applications and data processing pipelines.",
        tags: ["Python", "JavaScript", "PostgreSQL", "GeoDjango"]
      }
    ];
    const featuredProjects = [
      {
        title: "Milan Urban Green Space Accessibility Analysis",
        description: "Comprehensive geospatial analysis evaluating accessibility and equity of parks and green spaces in Milan using network analysis and gravity modeling.",
        image: "/images/enhanced_service_coverage_analysis.png",
        tags: ["Python", "GeoPandas", "OSMnx", "NetworkX"],
        link: "/projects#milan"
      },
      {
        title: "NYC Urban Green Space Accessibility Analysis",
        description: "Comprehensive analysis of public park accessibility across New York City using 0.5-mile walking distance threshold to identify underserved areas.",
        image: "/images/03_inaccessibility_analysis.png",
        tags: ["Python", "GeoPandas", "Matplotlib", "Contextily"],
        link: "/projects#nyc"
      },
      {
        title: "Convex Hull on a Sphere: Advanced Visualization",
        description: "Comprehensive implementation of convex hull computation and visualization on spherical surfaces with advanced 3D and 2D visualizations.",
        image: "/images/convex_hull.png",
        tags: ["Python", "SciPy", "Matplotlib 3D", "Cartopy"],
        link: "/projects#convex"
      },
      {
        title: "Freedom House Data Visualization Dashboard",
        description: "Interactive data visualization dashboard displaying global freedom scores based on Freedom House data with interactive maps and time series charts.",
        image: "/images/newplot-2.png",
        tags: ["Python", "Dash", "Plotly", "Pandas"],
        link: "/projects#freedom"
      },
      {
        title: "Geospatial Comparative Analysis: Iran vs Italy",
        description: "Comprehensive geospatial analysis comparing land use/land cover (LULC) and nighttime lights between Iran and Italy using Google Earth Engine and Python.",
        image: "/images/Nighttime_light_intensity_analysis_(2015-2023)_Iran.png",
        tags: ["Google Earth Engine", "Python", "Geemap", "Matplotlib"],
        link: "/projects#iran-italy"
      },
      {
        title: "Seismic Globe: 3D Visualization of Global Earthquake Activity",
        description: "Interactive 3D visualization tool that maps global earthquake activity from 2020 to 2024, fetching near-real-time seismic data from USGS.",
        image: "/images/Earthquake_Globe_Animation.mp4",
        tags: ["Python", "Three.js", "USGS API", "WebGL"],
        link: "/projects#seismic"
      }
    ];
    useSeoMeta({
      title: "Ghulam Abbas Zafari - Geoinformatics Engineer",
      description: "Professional Geoinformatics Engineer specializing in GIS, Remote Sensing, and spatial data analysis."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio-home" }, _attrs))} data-v-d768ebae><header data-v-d768ebae><div class="header-content" data-v-d768ebae><div class="container nav-container" data-v-d768ebae>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-icon" data-v-d768ebae${_scopeId}><i class="fas fa-map-marked-alt" data-v-d768ebae${_scopeId}></i></span><span data-v-d768ebae${_scopeId}>Ghulam Abbas Zafari</span>`);
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
      _push(`<ul class="${ssrRenderClass([{ active: isMenuOpen.value }, "nav-links"])}" id="navLinks" data-v-d768ebae><li data-v-d768ebae>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "active",
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
      _push(`</li><li data-v-d768ebae>`);
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
      _push(`</li><li data-v-d768ebae>`);
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
      _push(`</li><li data-v-d768ebae>`);
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
      _push(`</li><li data-v-d768ebae>`);
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
      _push(`</li><li data-v-d768ebae>`);
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
      _push(`</li><li class="language-selector" data-v-d768ebae><div class="language-dropdown" data-v-d768ebae><button class="language-btn" data-v-d768ebae><i class="fas fa-globe" data-v-d768ebae></i><span class="current-language" data-v-d768ebae>${ssrInterpolate(currentLanguage.value.toUpperCase())}</span><i class="fas fa-chevron-down" style="${ssrRenderStyle({ "font-size": "0.8rem", "margin-left": "5px" })}" data-v-d768ebae></i></button><ul class="language-options" data-v-d768ebae><li class="${ssrRenderClass({ active: currentLanguage.value === "en" })}" data-v-d768ebae><span class="language-flag" data-v-d768ebae>🇺🇸</span> English </li><li class="${ssrRenderClass({ active: currentLanguage.value === "it" })}" data-v-d768ebae><span class="language-flag" data-v-d768ebae>🇮🇹</span> Italiano </li><li class="${ssrRenderClass({ active: currentLanguage.value === "fa" })}" data-v-d768ebae><span class="language-flag" data-v-d768ebae>🇮🇷</span> فارسی </li></ul></div></li><li data-v-d768ebae>`);
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
      _push(`</li></ul><div class="menu-toggle" data-v-d768ebae><i class="${ssrRenderClass(isMenuOpen.value ? "fas fa-times" : "fas fa-bars")}" data-v-d768ebae></i></div></div></div></header><section class="hero" id="hero" data-v-d768ebae><div class="geospatial-background" data-v-d768ebae><svg class="topography-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" data-v-d768ebae><defs data-v-d768ebae><linearGradient id="earthGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-d768ebae><stop offset="0%" stop-color="#1a3c27" data-v-d768ebae></stop><stop offset="50%" stop-color="#2C5530" data-v-d768ebae></stop><stop offset="100%" stop-color="#1a3c27" data-v-d768ebae></stop></linearGradient><linearGradient id="contourGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-v-d768ebae><stop offset="0%" stop-color="#4A90E2" stop-opacity="0.4" data-v-d768ebae></stop><stop offset="50%" stop-color="#2E86AB" stop-opacity="0.6" data-v-d768ebae></stop><stop offset="100%" stop-color="#4A90E2" stop-opacity="0.4" data-v-d768ebae></stop></linearGradient><radialGradient id="dataGlow" cx="50%" cy="50%" r="50%" data-v-d768ebae><stop offset="0%" stop-color="#4A90E2" stop-opacity="0.8" data-v-d768ebae></stop><stop offset="70%" stop-color="#2E86AB" stop-opacity="0.4" data-v-d768ebae></stop><stop offset="100%" stop-color="#4A90E2" stop-opacity="0" data-v-d768ebae></stop></radialGradient><filter id="glow" x="-50%" y="-50%" width="200%" height="200%" data-v-d768ebae><feGaussianBlur stdDeviation="4" result="coloredBlur" data-v-d768ebae></feGaussianBlur><feMerge data-v-d768ebae><feMergeNode in="coloredBlur" data-v-d768ebae></feMergeNode><feMergeNode in="SourceGraphic" data-v-d768ebae></feMergeNode></feMerge></filter></defs><rect width="100%" height="100%" fill="url(#earthGradient)" opacity="0.9" data-v-d768ebae></rect><g class="grid-lines" stroke="#2E86AB" stroke-opacity="0.15" stroke-width="1.5" data-v-d768ebae><path d="M0,0 L1200,0 M0,100 L1200,100 M0,200 L1200,200 M0,300 L1200,300 M0,400 L1200,400 M0,500 L1200,500 M0,600 L1200,600 M0,700 L1200,700 M0,800 L1200,800" data-v-d768ebae></path><path d="M0,0 L0,800 M100,0 L100,800 M200,0 L200,800 M300,0 L300,800 M400,0 L400,800 M500,0 L500,800 M600,0 L600,800 M700,0 L700,800 M800,0 L800,800 M900,0 L900,800 M1000,0 L1000,800 M1100,0 L1100,800 M1200,0 L1200,800" data-v-d768ebae></path></g><g class="contours-group" data-v-d768ebae><path class="contour-line contour-1" d="M0,350 Q150,320 300,350 T600,350 T900,350 T1200,350" data-v-d768ebae></path><path class="contour-line contour-2" d="M0,400 Q150,370 300,400 T600,400 T900,400 T1200,400" data-v-d768ebae></path><path class="contour-line contour-3" d="M0,450 Q150,420 300,450 T600,450 T900,450 T1200,450" data-v-d768ebae></path><path class="contour-line contour-4" d="M0,500 Q150,470 300,500 T600,500 T900,500 T1200,500" data-v-d768ebae></path><path class="contour-line contour-5" d="M0,550 Q150,520 300,550 T600,550 T900,550 T1200,550" data-v-d768ebae></path><path class="contour-line contour-6" d="M0,300 Q150,270 300,300 T600,300 T900,300 T1200,300" data-v-d768ebae></path></g><g class="data-points" data-v-d768ebae><g class="data-cluster-1" data-v-d768ebae><circle class="data-point primary" cx="300" cy="350" r="5" data-v-d768ebae></circle><circle class="data-point secondary" cx="250" cy="320" r="3" data-v-d768ebae></circle><circle class="data-point secondary" cx="350" cy="330" r="3" data-v-d768ebae></circle><circle class="data-point secondary" cx="280" cy="380" r="3" data-v-d768ebae></circle></g><g class="data-cluster-2" data-v-d768ebae><circle class="data-point primary" cx="600" cy="400" r="5" data-v-d768ebae></circle><circle class="data-point secondary" cx="550" cy="370" r="3" data-v-d768ebae></circle><circle class="data-point secondary" cx="650" cy="380" r="3" data-v-d768ebae></circle><circle class="data-point secondary" cx="580" cy="430" r="3" data-v-d768ebae></circle></g><g class="data-cluster-3" data-v-d768ebae><circle class="data-point primary" cx="900" cy="450" r="5" data-v-d768ebae></circle><circle class="data-point secondary" cx="850" cy="420" r="3" data-v-d768ebae></circle><circle class="data-point secondary" cx="950" cy="430" r="3" data-v-d768ebae></circle><circle class="data-point secondary" cx="880" cy="480" r="3" data-v-d768ebae></circle></g></g><g class="connection-lines" data-v-d768ebae><path class="connection connection-1" d="M300,350 L600,400" data-v-d768ebae></path><path class="connection connection-2" d="M600,400 L900,450" data-v-d768ebae></path><path class="connection connection-3" d="M250,320 L550,370" data-v-d768ebae></path><path class="connection connection-4" d="M350,330 L650,380" data-v-d768ebae></path><path class="connection connection-5" d="M280,380 L580,430" data-v-d768ebae></path><path class="connection connection-6" d="M550,370 L850,420" data-v-d768ebae></path><path class="connection connection-7" d="M650,380 L950,430" data-v-d768ebae></path><path class="connection connection-8" d="M580,430 L880,480" data-v-d768ebae></path></g><g class="satellite-system" data-v-d768ebae><circle class="orbit orbit-1" cx="600" cy="400" r="180" data-v-d768ebae></circle><circle class="orbit orbit-2" cx="600" cy="400" r="280" data-v-d768ebae></circle><circle class="orbit orbit-3" cx="600" cy="400" r="380" data-v-d768ebae></circle><g class="satellites" data-v-d768ebae><circle class="satellite satellite-1" cx="780" cy="400" r="6" data-v-d768ebae><animateTransform attributeName="transform" type="rotate" from="0 600 400" to="360 600 400" dur="25s" repeatCount="indefinite" data-v-d768ebae></animateTransform></circle><circle class="satellite satellite-2" cx="600" cy="220" r="5" data-v-d768ebae><animateTransform attributeName="transform" type="rotate" from="120 600 400" to="480 600 400" dur="30s" repeatCount="indefinite" data-v-d768ebae></animateTransform></circle><circle class="satellite satellite-3" cx="420" cy="400" r="4" data-v-d768ebae><animateTransform attributeName="transform" type="rotate" from="240 600 400" to="600 600 400" dur="35s" repeatCount="indefinite" data-v-d768ebae></animateTransform></circle></g></g><g class="coordinates" fill="#ffffff" font-family="Arial" font-size="12" opacity="0.3" data-v-d768ebae><text x="50" y="30" data-v-d768ebae>45°N</text><text x="1150" y="30" data-v-d768ebae>45°N</text><text x="50" y="770" data-v-d768ebae>45°S</text><text x="1150" y="770" data-v-d768ebae>45°S</text><text x="30" y="400" transform="rotate(-90 30,400)" data-v-d768ebae>0°</text><text x="1170" y="400" transform="rotate(90 1170,400)" data-v-d768ebae>180°</text></g><g class="scan-lines" data-v-d768ebae><rect class="scan-line" x="0" y="0" width="100%" height="2" fill="#4A90E2" opacity="0.1" data-v-d768ebae></rect></g></svg></div><div class="hero-container" data-v-d768ebae><div class="hero-content" data-v-d768ebae><h1 class="hero-title" data-v-d768ebae> Transforming Spatial Data<br data-v-d768ebae>Into <span class="highlight" data-v-d768ebae> Actionable Insights <span class="flag-line" data-v-d768ebae></span></span></h1><p class="hero-subtitle" data-v-d768ebae>Geoinformatics Engineer | GIS Specialist | Remote Sensing Expert</p><div class="hero-buttons" data-v-d768ebae>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#featured-projects",
        class: "btn primary-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View My Work <i class="fas fa-arrow-right" data-v-d768ebae${_scopeId}></i>`);
          } else {
            return [
              createTextVNode(" View My Work "),
              createVNode("i", { class: "fas fa-arrow-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn secondary-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get In Touch`);
          } else {
            return [
              createTextVNode("Get In Touch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hero-image" data-v-d768ebae><div class="image-wrapper" data-v-d768ebae><img${ssrRenderAttr("src", _imports_0)} alt="Ghulam Abbas Zafari" class="profile-img" data-v-d768ebae><div class="tech-icons" data-v-d768ebae><div class="icon" data-v-d768ebae><i class="fab fa-python" data-v-d768ebae></i></div><div class="icon" data-v-d768ebae><i class="fas fa-globe" data-v-d768ebae></i></div><div class="icon" data-v-d768ebae><i class="fas fa-satellite" data-v-d768ebae></i></div><div class="icon" data-v-d768ebae><i class="fas fa-database" data-v-d768ebae></i></div></div></div></div></div></section><section class="skills-section" id="expertise" data-v-d768ebae><div class="container" data-v-d768ebae><div class="${ssrRenderClass([{ visible: isSectionVisible.value.expertise }, "section-header"])}" data-v-d768ebae><h2 class="section-title" data-v-d768ebae>Core Expertise</h2><p class="section-subtitle" data-v-d768ebae>Areas of specialized knowledge and technical proficiency</p></div><div class="skills-grid" data-v-d768ebae><!--[-->`);
      ssrRenderList(skills, (skill, index2) => {
        _push(`<div class="${ssrRenderClass([{ visible: isSectionVisible.value[`skill-${index2}`] }, "skill-card"])}" data-v-d768ebae><div class="skill-icon" data-v-d768ebae><i class="${ssrRenderClass(skill.icon)}" data-v-d768ebae></i></div><h3 data-v-d768ebae>${ssrInterpolate(skill.title)}</h3><p data-v-d768ebae>${ssrInterpolate(skill.description)}</p><div class="skill-tags" data-v-d768ebae><!--[-->`);
        ssrRenderList(skill.tags, (tag) => {
          _push(`<span data-v-d768ebae>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="projects-section" id="featured-projects" data-v-d768ebae><div class="container" data-v-d768ebae><div class="${ssrRenderClass([{ visible: isSectionVisible.value.projects }, "section-header"])}" data-v-d768ebae><h2 class="section-title" data-v-d768ebae>Featured Projects</h2><p class="section-subtitle" data-v-d768ebae>A showcase of my recent geospatial work and solutions</p></div><div class="projects-grid" data-v-d768ebae><!--[-->`);
      ssrRenderList(featuredProjects, (project, index2) => {
        _push(`<div class="${ssrRenderClass([{ visible: isSectionVisible.value[`project-${index2}`] }, "project-card"])}" data-v-d768ebae><div class="project-image" data-v-d768ebae><img${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)} data-v-d768ebae></div><div class="project-content" data-v-d768ebae><h3 class="project-title" data-v-d768ebae>${ssrInterpolate(project.title)}</h3><p class="project-description" data-v-d768ebae>${ssrInterpolate(project.description)}</p><div class="project-tags" data-v-d768ebae><!--[-->`);
        ssrRenderList(project.tags, (tag) => {
          _push(`<span data-v-d768ebae>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: project.link,
          class: "project-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View Details <i class="fas fa-arrow-right" data-v-d768ebae${_scopeId}></i>`);
            } else {
              return [
                createTextVNode(" View Details "),
                createVNode("i", { class: "fas fa-arrow-right" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><div style="${ssrRenderStyle({ "text-align": "center", "margin-top": "3rem" })}" data-v-d768ebae>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "btn primary-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View All Projects`);
          } else {
            return [
              createTextVNode("View All Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="cta-section" id="cta" data-v-d768ebae><div class="container" data-v-d768ebae><div class="cta-content" data-v-d768ebae><h2 class="cta-title" data-v-d768ebae>Ready to Start Your Project?</h2><p class="cta-description" data-v-d768ebae>Let&#39;s collaborate to transform your spatial data challenges into innovative solutions.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn primary-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get In Touch`);
          } else {
            return [
              createTextVNode("Get In Touch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><div class="${ssrRenderClass([{ active: showScrollTop.value }, "scroll-to-top"])}" data-v-d768ebae><i class="fas fa-chevron-up" data-v-d768ebae></i></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d768ebae"]]);

export { index as default };
//# sourceMappingURL=index-C4c56k-X.mjs.map
