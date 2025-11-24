import { _ as __nuxt_component_0 } from './nuxt-link-Dfrr2kfa.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/images/LogoPolimi.jpg");
const _imports_1 = publicAssetsURL("/images/Logo.png");
const _sfc_main = {
  __name: "education",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const currentLanguage = ref("en");
    useSeoMeta({
      title: "Education - Ghulam Abbas Zafari | Geoinformatics Engineer",
      description: "Academic background and educational journey of Ghulam Abbas Zafari, Geoinformatics Engineer and GIS Specialist."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "education-page" }, _attrs))} data-v-23da4b20><header data-v-23da4b20><div class="header-content" data-v-23da4b20><div class="container nav-container" data-v-23da4b20>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-icon" data-v-23da4b20${_scopeId}><i class="fas fa-map-marked-alt" data-v-23da4b20${_scopeId}></i></span><span data-v-23da4b20${_scopeId}>Ghulam Abbas Zafari</span>`);
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
      _push(`<ul class="${ssrRenderClass([{ active: isMenuOpen.value }, "nav-links"])}" id="navLinks" data-v-23da4b20><li data-v-23da4b20>`);
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
      _push(`</li><li data-v-23da4b20>`);
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
      _push(`</li><li data-v-23da4b20>`);
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
      _push(`</li><li data-v-23da4b20>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/education",
        class: "active",
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
      _push(`</li><li data-v-23da4b20>`);
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
      _push(`</li><li data-v-23da4b20>`);
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
      _push(`</li><li class="language-selector" data-v-23da4b20><div class="language-dropdown" data-v-23da4b20><button class="language-btn" data-v-23da4b20><i class="fas fa-globe" data-v-23da4b20></i><span class="current-language" data-v-23da4b20>${ssrInterpolate(currentLanguage.value.toUpperCase())}</span><i class="fas fa-chevron-down" style="${ssrRenderStyle({ "font-size": "0.8rem", "margin-left": "5px" })}" data-v-23da4b20></i></button><ul class="language-options" data-v-23da4b20><li class="${ssrRenderClass({ active: currentLanguage.value === "en" })}" data-v-23da4b20><span class="language-flag" data-v-23da4b20>🇺🇸</span> English </li><li class="${ssrRenderClass({ active: currentLanguage.value === "it" })}" data-v-23da4b20><span class="language-flag" data-v-23da4b20>🇮🇹</span> Italiano </li><li class="${ssrRenderClass({ active: currentLanguage.value === "fa" })}" data-v-23da4b20><span class="language-flag" data-v-23da4b20>🇮🇷</span> فارسی </li></ul></div></li><li data-v-23da4b20>`);
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
      _push(`</li></ul><div class="menu-toggle" data-v-23da4b20><i class="${ssrRenderClass(isMenuOpen.value ? "fas fa-times" : "fas fa-bars")}" data-v-23da4b20></i></div></div></div></header><main data-v-23da4b20><section class="page-header" data-v-23da4b20><div class="container" data-v-23da4b20><h1 data-i18n="education_title" data-v-23da4b20>Education</h1><p data-i18n="education_subtitle" data-v-23da4b20>My academic journey and coursework</p></div></section><section class="education-section" data-v-23da4b20><div class="container" data-v-23da4b20><div class="education-timeline" data-v-23da4b20><div class="timeline-item" data-v-23da4b20><div class="timeline-date" data-v-23da4b20>2023 – 2025</div><div class="timeline-content" data-v-23da4b20><div class="university-header" data-v-23da4b20><img${ssrRenderAttr("src", _imports_0)} alt="Politecnico di Milano Logo" class="university-logo" data-v-23da4b20><div class="university-info" data-v-23da4b20><h3 data-i18n="masters_title" data-v-23da4b20>Master&#39;s Degree in Geoinformatics Engineering</h3><h4 data-i18n="masters_school" data-v-23da4b20>Politecnico di Milano, Italy</h4></div></div><p data-i18n="masters_description" data-v-23da4b20>Advanced studies in geospatial data analysis, remote sensing, and GIS technologies with focus on environmental monitoring and urban planning applications.</p><div class="coursework" data-v-23da4b20><h5 data-i18n="relevant_coursework" data-v-23da4b20>Relevant Coursework:</h5><ul data-v-23da4b20><li data-v-23da4b20><strong data-i18n="course_gis" data-v-23da4b20>Geographic Information Systems (GIS):</strong> <span data-i18n="course_gis_desc" data-v-23da4b20>Developed a landslide susceptibility map and performed hazard analysis. Practical WebGIS development using GeoServer, QGIS, PostGIS, GRASS GIS, and SQL.</span></li><li data-v-23da4b20><strong data-i18n="course_hypermedia" data-v-23da4b20>Hypermedia Applications:</strong> <span data-i18n="course_hypermedia_desc" data-v-23da4b20>Built a website as a course project using HTML, C++, and Python. Additionally, developed a full-stack Vue3/Nuxt3 web application for a non-profit center.</span></li><li data-v-23da4b20><strong data-i18n="course_geospatial" data-v-23da4b20>Geospatial Data Analysis:</strong> <span data-i18n="course_geospatial_desc" data-v-23da4b20>Applied statistical methods and data modeling to spatial datasets.</span></li><li data-v-23da4b20><strong data-i18n="course_data_quality" data-v-23da4b20>Data and Information Quality:</strong> <span data-i18n="course_data_quality_desc" data-v-23da4b20>Covered data quality assessment, profiling, error detection, cleaning, and fusion for databases, logs, sensors, and social media.</span></li><li data-v-23da4b20><strong data-i18n="course_geospatial_processing" data-v-23da4b20>Geospatial Processing:</strong> <span data-i18n="course_geospatial_processing_desc" data-v-23da4b20>Integrated spatial data science concepts, formats, and algorithms with source code development in spatial workflows.</span></li><li data-v-23da4b20><strong data-i18n="course_photogrammetry" data-v-23da4b20>Photogrammetry and Drone Image Processing:</strong> <span data-i18n="course_photogrammetry_desc" data-v-23da4b20>Learned photogrammetric principles for 3D reconstruction and orthophoto generation. Applied drone data in digital mapping.</span></li><li data-v-23da4b20><strong data-i18n="course_earth_observation" data-v-23da4b20>Earth Observation – Advanced:</strong> <span data-i18n="course_earth_observation_desc" data-v-23da4b20>Focused on optical remote sensing and environmental applications using ESA SNAP.</span></li></ul></div></div></div><div class="timeline-item" data-v-23da4b20><div class="timeline-date" data-v-23da4b20>2010 – 2014</div><div class="timeline-content" data-v-23da4b20><div class="university-header" data-v-23da4b20><img${ssrRenderAttr("src", _imports_1)} alt="Kabul Polytechnic University Logo" class="university-logo" data-v-23da4b20><div class="university-info" data-v-23da4b20><h3 data-i18n="bachelors_title" data-v-23da4b20>Bachelor&#39;s Degree in Geodesy Engineering</h3><h4 data-i18n="bachelors_school" data-v-23da4b20>Kabul Polytechnic University, Afghanistan</h4></div></div><p data-i18n="bachelors_specialization" data-v-23da4b20>Specialization in cadastral surveying and cartography with focus on land administration and spatial data infrastructure.</p><div class="coursework" data-v-23da4b20><h5 data-v-23da4b20>Core Geodesy Courses:</h5><ul data-v-23da4b20><li data-v-23da4b20><strong data-v-23da4b20>Basic Geodesy:</strong> Introduction to geodetic principles, coordinate systems, and reference frames. Practical training in basic surveying techniques.</li><li data-v-23da4b20><strong data-v-23da4b20>Technical Drawing:</strong> Technical communication through engineering drawings, projections, and dimensioning standards.</li><li data-v-23da4b20><strong data-v-23da4b20>Geometric Drawing:</strong> Geometric constructions, projections, and descriptive geometry applications in surveying.</li><li data-v-23da4b20><strong data-v-23da4b20>Topographic Drawing:</strong> Creation and interpretation of topographic maps, contour lines, and terrain representation.</li><li data-v-23da4b20><strong data-v-23da4b20>Geology &amp; Geomorphology:</strong> Earth structure, rock formations, and landform analysis for engineering applications.</li><li data-v-23da4b20><strong data-v-23da4b20>Geodesy II:</strong> Advanced geodetic concepts including coordinate transformations and geodetic networks.</li><li data-v-23da4b20><strong data-v-23da4b20>Basic Electronics:</strong> Fundamental electronic circuits and components relevant to surveying instrumentation.</li><li data-v-23da4b20><strong data-v-23da4b20>Mathematical Processing of Geodetic Measurement:</strong> Statistical analysis and adjustment of geodetic observations.</li><li data-v-23da4b20><strong data-v-23da4b20>Applied Geodesy:</strong> Practical applications in construction, mining, and engineering projects.</li><li data-v-23da4b20><strong data-v-23da4b20>Environmental Protection:</strong> Environmental impact assessment and sustainable development principles.</li><li data-v-23da4b20><strong data-v-23da4b20>Higher Geodesy:</strong> Advanced topics including physical geodesy, gravity field, and satellite positioning.</li><li data-v-23da4b20><strong data-v-23da4b20>Astronomy:</strong> Celestial coordinate systems and astronomical observations for geodetic applications.</li><li data-v-23da4b20><strong data-v-23da4b20>Electronic Tacheometer:</strong> Operation and application of modern electronic distance measurement instruments.</li><li data-v-23da4b20><strong data-v-23da4b20>Geodetic Survey Instruments:</strong> Comprehensive study of traditional and modern surveying equipment.</li><li data-v-23da4b20><strong data-v-23da4b20>Photogrammetry:</strong> Principles of aerial photography, stereo plotting, and 3D terrain modeling.</li><li data-v-23da4b20><strong data-v-23da4b20>Radio Geodesy Measurements:</strong> Use of radio signals and satellite systems for geodetic positioning.</li></ul></div></div></div></div><div class="academic-projects" data-v-23da4b20><h2 data-i18n="academic_projects" data-v-23da4b20>Academic Projects</h2><div class="project-card" data-v-23da4b20><h3 data-i18n="project1_title" data-v-23da4b20>Forest Cover and Land Cover Transitions in the Mediterranean Basin</h3><ul data-v-23da4b20><li data-i18n="project1_point1" data-v-23da4b20>Analyzed land cover changes (1985–2022) using Landsat and Sentinel-2</li><li data-i18n="project1_point2" data-v-23da4b20>Performed supervised classification (Random Forest)</li><li data-i18n="project1_point3" data-v-23da4b20>Calculated transition matrices and linked changes to climate trends (Copernicus)</li><li data-i18n="project1_point4" data-v-23da4b20>Visualized outputs with thematic maps and interactive dashboards (Python/Plotly)</li></ul></div><div class="project-card" data-v-23da4b20><h3 data-i18n="project2_title" data-v-23da4b20>Data Cleaning and Analysis Pipeline – Boston Crime Dataset</h3><ul data-v-23da4b20><li data-i18n="project2_point1" data-v-23da4b20>Preprocessed and cleaned data using MICE imputation and Isolation Forest</li><li data-i18n="project2_point2" data-v-23da4b20>Built a neural network classifier with 91% accuracy on cleaned vs 84% on raw data</li></ul></div><div class="project-card" data-v-23da4b20><h3 data-i18n="project3_title" data-v-23da4b20>Netflix Dataset: Exploratory and Predictive Analysis</h3><ul data-v-23da4b20><li data-i18n="project3_point1" data-v-23da4b20>Analyzed content by genre, type, and release trends</li><li data-i18n="project3_point2" data-v-23da4b20>Built regression/classification models using scikit-learn</li></ul></div></div><div class="certifications-section" data-v-23da4b20><h2 data-i18n="certifications" data-v-23da4b20>Certifications</h2><div class="certifications-grid" data-v-23da4b20><div class="certification-card" data-v-23da4b20><h3 data-v-23da4b20>Google Earth Engine for Geospatial Analysis</h3><p data-v-23da4b20>Google</p><p class="certification-date" data-v-23da4b20>2023</p></div><div class="certification-card" data-v-23da4b20><h3 data-v-23da4b20>Advanced Python for Geospatial Applications</h3><p data-v-23da4b20>Esri</p><p class="certification-date" data-v-23da4b20>2022</p></div><div class="certification-card" data-v-23da4b20><h3 data-v-23da4b20>Remote Sensing for Earth Observation</h3><p data-v-23da4b20>Polimi</p><p class="certification-date" data-v-23da4b20>2024</p></div></div></div></div></section></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/education.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const education = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23da4b20"]]);

export { education as default };
//# sourceMappingURL=education-Bc_wH9PG.mjs.map
