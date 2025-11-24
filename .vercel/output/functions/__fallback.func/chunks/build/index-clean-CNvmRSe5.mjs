import { _ as __nuxt_component_0 } from './nuxt-link-DL8m6sMt.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "index-clean",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Test Page - Geoinformatics Engineer",
      description: "Test page to check for Vue composition errors"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "portfolio-home" }, _attrs))} data-v-8667c09a><header style="${ssrRenderStyle({ "background": "#2C5530", "padding": "1rem 0", "position": "fixed", "top": "0", "width": "100%", "z-index": "1000" })}" data-v-8667c09a><div class="container" style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "align-items": "center" })}" data-v-8667c09a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        style: { "color": "white", "text-decoration": "none", "font-weight": "bold" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ghulam Abbas Zafari `);
          } else {
            return [
              createTextVNode(" Ghulam Abbas Zafari ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav data-v-8667c09a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        style: { "color": "white", "margin-left": "1rem", "text-decoration": "none" }
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        style: { "color": "white", "margin-left": "1rem", "text-decoration": "none" }
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
      _push(`</nav></div></header><section style="${ssrRenderStyle({ "padding": "8rem 0 4rem", "text-align": "center", "background": "linear-gradient(135deg, #2C5530, #1a3c27)", "color": "white" })}" data-v-8667c09a><div class="container" data-v-8667c09a><h1 style="${ssrRenderStyle({ "font-size": "3rem", "margin-bottom": "1rem" })}" data-v-8667c09a>Geoinformatics Engineer</h1><p style="${ssrRenderStyle({ "font-size": "1.2rem", "margin-bottom": "2rem" })}" data-v-8667c09a>Transforming spatial data into actionable insights</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        style: { "background": "#2E86AB", "color": "white", "padding": "0.8rem 2rem", "text-decoration": "none", "border-radius": "4px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get In Touch `);
          } else {
            return [
              createTextVNode(" Get In Touch ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section style="${ssrRenderStyle({ "padding": "4rem 0" })}" data-v-8667c09a><div class="container" data-v-8667c09a><h2 style="${ssrRenderStyle({ "text-align": "center", "margin-bottom": "2rem" })}" data-v-8667c09a>Test Page - No Errors</h2><p style="${ssrRenderStyle({ "text-align": "center" })}" data-v-8667c09a>If this page loads without errors, the issue is in your original index.vue file.</p></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index-clean.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const indexClean = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8667c09a"]]);

export { indexClean as default };
//# sourceMappingURL=index-clean-CNvmRSe5.mjs.map
