import { _ as __nuxt_component_0 } from './nuxt-link-DL8m6sMt.mjs';
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

const _imports_0 = publicAssetsURL("/images/Hilmand_Kajaki-dam.jpeg");
const _imports_1 = publicAssetsURL("/images/RTK- Surveying.jpg");
const _sfc_main = {
  __name: "experience",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const currentLanguage = ref("en");
    useSeoMeta({
      title: "Experience - Ghulam Abbas Zafari | Geoinformatics Engineer",
      description: "Professional experience and career journey of Ghulam Abbas Zafari, Geoinformatics Engineer and GIS Specialist."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "experience-page" }, _attrs))} data-v-c65ef53a><header data-v-c65ef53a><div class="header-content" data-v-c65ef53a><div class="container nav-container" data-v-c65ef53a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-icon" data-v-c65ef53a${_scopeId}><i class="fas fa-map-marked-alt" data-v-c65ef53a${_scopeId}></i></span><span data-v-c65ef53a${_scopeId}>Ghulam Abbas Zafari</span>`);
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
      _push(`<ul class="${ssrRenderClass([{ active: isMenuOpen.value }, "nav-links"])}" id="navLinks" data-v-c65ef53a><li data-v-c65ef53a>`);
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
      _push(`</li><li data-v-c65ef53a>`);
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
      _push(`</li><li data-v-c65ef53a>`);
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
      _push(`</li><li data-v-c65ef53a>`);
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
      _push(`</li><li data-v-c65ef53a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/experience",
        class: "active",
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
      _push(`</li><li data-v-c65ef53a>`);
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
      _push(`</li><li class="language-selector" data-v-c65ef53a><div class="language-dropdown" data-v-c65ef53a><button class="language-btn" data-v-c65ef53a><i class="fas fa-globe" data-v-c65ef53a></i><span class="current-language" data-v-c65ef53a>${ssrInterpolate(currentLanguage.value.toUpperCase())}</span><i class="fas fa-chevron-down" style="${ssrRenderStyle({ "font-size": "0.8rem", "margin-left": "5px" })}" data-v-c65ef53a></i></button><ul class="language-options" data-v-c65ef53a><li class="${ssrRenderClass({ active: currentLanguage.value === "en" })}" data-v-c65ef53a><span class="language-flag" data-v-c65ef53a>🇺🇸</span> English </li><li class="${ssrRenderClass({ active: currentLanguage.value === "it" })}" data-v-c65ef53a><span class="language-flag" data-v-c65ef53a>🇮🇹</span> Italiano </li><li class="${ssrRenderClass({ active: currentLanguage.value === "fa" })}" data-v-c65ef53a><span class="language-flag" data-v-c65ef53a>🇮🇷</span> فارسی </li></ul></div></li><li data-v-c65ef53a>`);
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
      _push(`</li></ul><div class="menu-toggle" data-v-c65ef53a><i class="${ssrRenderClass(isMenuOpen.value ? "fas fa-times" : "fas fa-bars")}" data-v-c65ef53a></i></div></div></div></header><main data-v-c65ef53a><section class="page-header" data-v-c65ef53a><div class="container" data-v-c65ef53a><h1 data-i18n="experience_title" data-v-c65ef53a>Professional Experience</h1><p data-i18n="experience_subtitle" data-v-c65ef53a>My career journey and professional achievements</p></div></section><section class="profile-section" data-v-c65ef53a><div class="container" data-v-c65ef53a><div class="profile-container" data-v-c65ef53a><img${ssrRenderAttr("src", _imports_0)} alt="Ghulam Abbas Zafari" class="profile-image" data-v-c65ef53a><div class="profile-caption" data-v-c65ef53a><h3 data-v-c65ef53a>Ghulam Abbas Zafari</h3><p data-v-c65ef53a>Geoinformatics Engineer | GIS Specialist | Remote Sensing Expert</p></div></div></div></section><section class="experience-section" data-v-c65ef53a><div class="container" data-v-c65ef53a><div class="experience-timeline" data-v-c65ef53a><div class="timeline-item" data-v-c65ef53a><div class="timeline-date" data-v-c65ef53a>March 2018 - May 2021</div><div class="timeline-content" data-v-c65ef53a><h3 data-i18n="job1_title" data-v-c65ef53a>Cadastral Survey Engineer</h3><h4 data-i18n="job1_company" data-v-c65ef53a>Ministry of Urban Development and Land, Afghanistan</h4><ul data-v-c65ef53a><li data-i18n="job1_point1" data-v-c65ef53a>Managed work plans according to department requirements</li><li data-i18n="job1_point2" data-v-c65ef53a>Conducted quality control and prepared topographic equipment for field operations</li><li data-i18n="job1_point3" data-v-c65ef53a>Executed joint topographic surveys with clients</li><li data-i18n="job1_point4" data-v-c65ef53a>Performed road alignment tracing and prepared as-built drawings</li><li data-i18n="job1_point5" data-v-c65ef53a>Presented technical and progress reports to management</li></ul></div></div></div><div class="skills-section" data-v-c65ef53a><h2 data-i18n="professional_skills" data-v-c65ef53a>Professional Skills</h2><div class="skills-grid" data-v-c65ef53a><div class="skill-category" data-v-c65ef53a><h3 data-i18n="skills_geospatial" data-v-c65ef53a>Geospatial Technologies</h3><ul data-v-c65ef53a><li data-i18n="skill_gis" data-v-c65ef53a>GIS Analysis &amp; Mapping</li><li data-i18n="skill_remote_sensing" data-v-c65ef53a>Remote Sensing</li><li data-i18n="skill_cadastral" data-v-c65ef53a>Cadastral Surveying</li><li data-i18n="skill_photogrammetry" data-v-c65ef53a>Photogrammetry</li><li data-i18n="skill_drone" data-v-c65ef53a>Drone Image Processing</li></ul></div><div class="skill-category" data-v-c65ef53a><h3 data-i18n="skills_programming" data-v-c65ef53a>Programming &amp; Development</h3><ul data-v-c65ef53a><li data-i18n="skill_python" data-v-c65ef53a>Python (Advanced)</li><li data-i18n="skill_javascript" data-v-c65ef53a>JavaScript</li><li data-i18n="skill_sql" data-v-c65ef53a>SQL</li><li data-i18n="skill_web_dev" data-v-c65ef53a>Web Development</li><li data-i18n="skill_database" data-v-c65ef53a>Database Management</li></ul></div><div class="skill-category" data-v-c65ef53a><h3 data-i18n="skills_data_science" data-v-c65ef53a>Data Science</h3><ul data-v-c65ef53a><li data-i18n="skill_ml" data-v-c65ef53a>Machine Learning</li><li data-i18n="skill_stats" data-v-c65ef53a>Statistical Analysis</li><li data-i18n="skill_viz" data-v-c65ef53a>Data Visualization</li><li data-i18n="skill_cleaning" data-v-c65ef53a>Data Cleaning</li><li data-i18n="skill_modeling" data-v-c65ef53a>Predictive Modeling</li></ul></div><div class="skill-category" data-v-c65ef53a><h3 data-i18n="skills_soft" data-v-c65ef53a>Soft Skills</h3><ul data-v-c65ef53a><li data-i18n="skill_pm" data-v-c65ef53a>Project Management</li><li data-i18n="skill_reporting" data-v-c65ef53a>Technical Reporting</li><li data-i18n="skill_collaboration" data-v-c65ef53a>Team Collaboration</li><li data-i18n="skill_problem_solving" data-v-c65ef53a>Problem Solving</li><li data-i18n="skill_learning" data-v-c65ef53a>Continuous Learning</li></ul></div></div><div class="skill-proficiency" data-v-c65ef53a><h3 data-v-c65ef53a>Technical Proficiency</h3><div class="proficiency-item" data-v-c65ef53a><div class="skill-name" data-v-c65ef53a><span data-v-c65ef53a>GIS Analysis &amp; Spatial Modeling</span><span data-v-c65ef53a>95%</span></div><div class="skill-bar" data-v-c65ef53a><div class="skill-level" style="${ssrRenderStyle({ width: "95%" })}" data-v-c65ef53a></div></div></div><div class="proficiency-item" data-v-c65ef53a><div class="skill-name" data-v-c65ef53a><span data-v-c65ef53a>Python Programming for Geospatial</span><span data-v-c65ef53a>88%</span></div><div class="skill-bar" data-v-c65ef53a><div class="skill-level" style="${ssrRenderStyle({ width: "88%" })}" data-v-c65ef53a></div></div></div><div class="proficiency-item" data-v-c65ef53a><div class="skill-name" data-v-c65ef53a><span data-v-c65ef53a>Remote Sensing &amp; Image Processing</span><span data-v-c65ef53a>90%</span></div><div class="skill-bar" data-v-c65ef53a><div class="skill-level" style="${ssrRenderStyle({ width: "90%" })}" data-v-c65ef53a></div></div></div><div class="proficiency-item" data-v-c65ef53a><div class="skill-name" data-v-c65ef53a><span data-v-c65ef53a>Web GIS Development</span><span data-v-c65ef53a>85%</span></div><div class="skill-bar" data-v-c65ef53a><div class="skill-level" style="${ssrRenderStyle({ width: "85%" })}" data-v-c65ef53a></div></div></div><div class="proficiency-item" data-v-c65ef53a><div class="skill-name" data-v-c65ef53a><span data-v-c65ef53a>Spatial Database Management</span><span data-v-c65ef53a>92%</span></div><div class="skill-bar" data-v-c65ef53a><div class="skill-level" style="${ssrRenderStyle({ width: "92%" })}" data-v-c65ef53a></div></div></div></div></div><div class="references-section" data-v-c65ef53a><h2 data-i18n="references" data-v-c65ef53a>References</h2><div class="reference-card" data-v-c65ef53a><h3 data-i18n="ref1_name" data-v-c65ef53a>Prof. Daniele Oxoli, PhD</h3><p data-i18n="ref1_position" data-v-c65ef53a>Researcher – RTT</p><p data-i18n="ref1_department" data-v-c65ef53a>Department of Civil and Environmental Engineering</p><p data-i18n="ref1_university" data-v-c65ef53a>Politecnico di Milano</p><p data-v-c65ef53a><strong data-i18n="email" data-v-c65ef53a>Email:</strong> daniele.oxoli@polimi.it</p><p data-v-c65ef53a><strong data-i18n="phone" data-v-c65ef53a>Phone:</strong> +39 339 869 7385</p></div></div></div></section><section class="map-section" data-v-c65ef53a><div class="container" data-v-c65ef53a><div class="map-container" data-v-c65ef53a><img${ssrRenderAttr("src", _imports_1)} alt="RTK Surveying in Action" class="map-image" data-v-c65ef53a><div class="map-caption" data-v-c65ef53a><h3 data-v-c65ef53a>RTK Surveying in Action</h3><p data-v-c65ef53a>Real-Time Kinematic (RTK) surveying provides centimeter-level accuracy for precise geospatial data collection and cadastral mapping.</p></div></div></div></section></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const experience = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c65ef53a"]]);

export { experience as default };
//# sourceMappingURL=experience-CrQ8L-f6.mjs.map
