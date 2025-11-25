import { mergeProps, ref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-Dfrr2kfa.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = {
  __name: "LayoutFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = ref((/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "portfolio-footer" }, _attrs))} data-v-db2d2463><div class="container" data-v-db2d2463><div class="footer-content" data-v-db2d2463><div class="footer-brand" data-v-db2d2463><div class="brand-header" data-v-db2d2463><i class="fas fa-map-marked-alt brand-icon" data-v-db2d2463></i><h3 class="brand-name" data-v-db2d2463>Ghulam Abbas Zafari</h3></div><p class="brand-tagline" data-v-db2d2463>Innovative geospatial solutions for complex environmental and urban challenges.</p><div class="footer-social-links" data-v-db2d2463><a href="https://github.com/zafariabbas68" target="_blank" aria-label="GitHub" class="social-link github" data-v-db2d2463><i class="fab fa-github" data-v-db2d2463></i></a><a href="https://www.linkedin.com/in/ghulam-abbas-zafari-b94105248/" target="_blank" aria-label="LinkedIn" class="social-link linkedin" data-v-db2d2463><i class="fab fa-linkedin" data-v-db2d2463></i></a><a href="https://wa.me/393791387487" target="_blank" aria-label="WhatsApp" class="social-link whatsapp" data-v-db2d2463><i class="fab fa-whatsapp" data-v-db2d2463></i></a><a href="mailto:ghulamabbas.zafari@gmail.com" aria-label="Email" class="social-link email" data-v-db2d2463><i class="fas fa-envelope" data-v-db2d2463></i></a></div></div><div class="footer-links" data-v-db2d2463><h4 class="section-title" data-v-db2d2463>Quick Links</h4><ul class="links-list" data-v-db2d2463><li data-v-db2d2463>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "footer-link"
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
      _push(`</li><li data-v-db2d2463>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "footer-link"
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
      _push(`</li><li data-v-db2d2463>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "footer-link"
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
      _push(`</li><li data-v-db2d2463>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/education",
        class: "footer-link"
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
      _push(`</li><li data-v-db2d2463>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/experience",
        class: "footer-link"
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
      _push(`</li><li data-v-db2d2463>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "footer-link"
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
      _push(`</li><li data-v-db2d2463>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "footer-link"
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
      _push(`</li></ul></div><div class="footer-contact" data-v-db2d2463><h4 class="section-title" data-v-db2d2463>Contact Info</h4><div class="contact-info" data-v-db2d2463><div class="contact-item" data-v-db2d2463><i class="fas fa-envelope contact-icon" data-v-db2d2463></i><div class="contact-details" data-v-db2d2463><span class="contact-label" data-v-db2d2463>Email</span><a href="mailto:ghulamabbas.zafari@gmail.com" class="contact-link" data-v-db2d2463>ghulamabbas.zafari@gmail.com</a></div></div><div class="contact-item" data-v-db2d2463><i class="fas fa-phone contact-icon" data-v-db2d2463></i><div class="contact-details" data-v-db2d2463><span class="contact-label" data-v-db2d2463>Phone</span><a href="tel:+393791387487" class="contact-link" data-v-db2d2463>(+39) 379-138-7487</a></div></div><div class="contact-item" data-v-db2d2463><i class="fas fa-map-marker-alt contact-icon" data-v-db2d2463></i><div class="contact-details" data-v-db2d2463><span class="contact-label" data-v-db2d2463>Location</span><span class="contact-text" data-v-db2d2463>Via Vittorio Veneto 22, Bresso, Italy</span><a href="https://www.google.com/maps/place/Via+Vittorio+Veneto,+22,+20091+Bresso+MI,+Italy" target="_blank" class="map-link" data-v-db2d2463><i class="fas fa-external-link-alt" data-v-db2d2463></i> View on Google Maps </a></div></div></div></div></div><div class="flag-line" data-v-db2d2463></div><div class="footer-bottom" data-v-db2d2463><p class="copyright" data-v-db2d2463>© ${ssrInterpolate(currentYear.value)} Ghulam Abbas Zafari. All rights reserved.</p></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-db2d2463"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))} data-v-c4687f02><main data-v-c4687f02>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4687f02"]]);

export { _default as default };
//# sourceMappingURL=default-BmgL4Orc.mjs.map
