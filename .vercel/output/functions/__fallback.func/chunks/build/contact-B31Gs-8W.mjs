import { _ as __nuxt_component_0 } from './nuxt-link-DL8m6sMt.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    const currentLanguage = ref("en");
    const isLoading = ref(false);
    const showSuccess = ref(false);
    const showError = ref(false);
    const formData = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    useSeoMeta({
      title: "Contact - Ghulam Abbas Zafari | GeoInformatics Engineer",
      description: "Get in touch with Ghulam Abbas Zafari for geospatial projects, collaborations, and innovative mapping solutions."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))} data-v-da31d217><header data-v-da31d217><div class="header-content" data-v-da31d217><div class="container nav-container" data-v-da31d217>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="logo-icon" data-v-da31d217${_scopeId}><i class="fas fa-map-marked-alt" data-v-da31d217${_scopeId}></i></span><span data-v-da31d217${_scopeId}>Ghulam Abbas Zafari</span>`);
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
      _push(`<ul class="${ssrRenderClass([{ active: isMenuOpen.value }, "nav-links"])}" id="navLinks" data-v-da31d217><li data-v-da31d217>`);
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
      _push(`</li><li data-v-da31d217>`);
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
      _push(`</li><li data-v-da31d217>`);
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
      _push(`</li><li data-v-da31d217>`);
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
      _push(`</li><li data-v-da31d217>`);
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
      _push(`</li><li data-v-da31d217>`);
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
      _push(`</li><li class="language-selector" data-v-da31d217><div class="language-dropdown" data-v-da31d217><button class="language-btn" data-v-da31d217><i class="fas fa-globe" data-v-da31d217></i><span class="current-language" data-v-da31d217>${ssrInterpolate(currentLanguage.value.toUpperCase())}</span><i class="fas fa-chevron-down" style="${ssrRenderStyle({ "font-size": "0.8rem", "margin-left": "5px" })}" data-v-da31d217></i></button><ul class="language-options" data-v-da31d217><li class="${ssrRenderClass({ active: currentLanguage.value === "en" })}" data-v-da31d217><span class="language-flag" data-v-da31d217>🇺🇸</span> English </li><li class="${ssrRenderClass({ active: currentLanguage.value === "it" })}" data-v-da31d217><span class="language-flag" data-v-da31d217>🇮🇹</span> Italiano </li><li class="${ssrRenderClass({ active: currentLanguage.value === "fa" })}" data-v-da31d217><span class="language-flag" data-v-da31d217>🇮🇷</span> فارسی </li></ul></div></li><li data-v-da31d217>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "contact-btn active",
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
      _push(`</li></ul><div class="menu-toggle" data-v-da31d217><i class="${ssrRenderClass(isMenuOpen.value ? "fas fa-times" : "fas fa-bars")}" data-v-da31d217></i></div></div></div></header><main data-v-da31d217><section class="page-header" data-v-da31d217><div class="container" data-v-da31d217><h1 data-i18n="contact_title" data-v-da31d217>Get In Touch</h1><p data-i18n="contact_subtitle" data-v-da31d217>Ready to discuss your next geospatial project? I&#39;m here to help bring your ideas to life with innovative mapping solutions.</p></div></section><section class="contact-section" data-v-da31d217><div class="container" data-v-da31d217><div class="contact-content" data-v-da31d217><div class="contact-info" data-v-da31d217><h2 data-i18n="contact_info" data-v-da31d217>Contact Information</h2><ul data-v-da31d217><li data-v-da31d217><i class="fas fa-envelope" data-v-da31d217></i><span data-v-da31d217>ghulamabbas.zafari@gmail.com</span></li><li data-v-da31d217><i class="fas fa-phone" data-v-da31d217></i><span data-v-da31d217>(+39) 379-138-7487</span></li><li data-v-da31d217><i class="fas fa-map-marker-alt" data-v-da31d217></i><div class="address-container" data-v-da31d217><span data-i18n="address" data-v-da31d217>Via Vittorio Veneto 22, 20091 Bresso, Italy</span><a href="https://www.google.com/maps/place/Via+Vittorio+Veneto,+22,+20091+Bresso+MI,+Italy" target="_blank" class="address-link" data-v-da31d217><i class="fas fa-map-marked-alt" data-v-da31d217></i><span data-v-da31d217>View on Google Maps</span></a></div></li></ul><div class="availability" data-v-da31d217><h3 data-v-da31d217>Available For New Projects</h3><p data-v-da31d217><i class="fas fa-clock" data-v-da31d217></i> Response time: ~24 hours</p><p data-v-da31d217><i class="fas fa-globe-europe" data-v-da31d217></i> Based in Milan, Italy</p><div class="availability-tags" data-v-da31d217><span class="availability-tag" data-v-da31d217>Remote</span><span class="availability-tag" data-v-da31d217>On-site</span><span class="availability-tag" data-v-da31d217>Hybrid</span></div></div><div class="social-media" data-v-da31d217><h3 data-i18n="connect_with_me" data-v-da31d217>Connect with me</h3><div class="social-icons" data-v-da31d217><a href="https://github.com/zafariabbas68" target="_blank" aria-label="GitHub" data-v-da31d217><i class="fab fa-github" data-v-da31d217></i></a><a href="https://www.linkedin.com/in/ghulam-abbas-zafari-b94105248/" target="_blank" aria-label="LinkedIn" data-v-da31d217><i class="fab fa-linkedin" data-v-da31d217></i></a><a href="https://wa.me/393791387487" target="_blank" aria-label="WhatsApp" data-v-da31d217><i class="fab fa-whatsapp" data-v-da31d217></i></a><a href="mailto:ghulamabbas.zafari@gmail.com" aria-label="Email" data-v-da31d217><i class="fas fa-envelope" data-v-da31d217></i></a></div></div></div><div class="contact-form" data-v-da31d217><h2 data-i18n="send_message" data-v-da31d217>Send a Message</h2><form data-v-da31d217><div class="form-group" data-v-da31d217><label for="name" data-i18n="name" data-v-da31d217>Name</label><input type="text" id="name"${ssrRenderAttr("value", formData.value.name)} required data-v-da31d217></div><div class="form-group" data-v-da31d217><label for="email" data-i18n="email" data-v-da31d217>Email</label><input type="email" id="email"${ssrRenderAttr("value", formData.value.email)} required data-v-da31d217></div><div class="form-group" data-v-da31d217><label for="subject" data-i18n="subject" data-v-da31d217>Subject</label><input type="text" id="subject"${ssrRenderAttr("value", formData.value.subject)} required data-v-da31d217></div><div class="form-group" data-v-da31d217><label for="message" data-i18n="message" data-v-da31d217>Message</label><textarea id="message" rows="5" required data-v-da31d217>${ssrInterpolate(formData.value.message)}</textarea></div><button type="submit" class="${ssrRenderClass([{ "btn-loading": isLoading.value }, "btn"])}"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} data-v-da31d217><i class="fas fa-paper-plane" data-v-da31d217></i><span data-v-da31d217>${ssrInterpolate(isLoading.value ? "Sending..." : "Send Message")}</span></button>`);
      if (showSuccess.value) {
        _push(`<div class="success-message" data-i18n="success_message" data-v-da31d217><i class="fas fa-check-circle" data-v-da31d217></i> Thank you for your message! I will get back to you soon. </div>`);
      } else {
        _push(`<!---->`);
      }
      if (showError.value) {
        _push(`<div class="error-message" data-i18n="error_message" data-v-da31d217><i class="fas fa-exclamation-circle" data-v-da31d217></i> There was an error sending your message. Please try again or contact me directly at ghulamabbas.zafari@gmail.com </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></div></section><section class="map-section" data-v-da31d217><div class="container" data-v-da31d217><div class="map-container" data-v-da31d217><div class="google-map-container" data-v-da31d217><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.1041074333763!2d9.18902977695435!3d45.53913297107138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786b8c0d2a0d4c5%3A0x8a4a2b4d4f8c4f4d!2sVia%20Vittorio%20Veneto%2C%2022%2C%2020091%20Bresso%20MI%2C%20Italy!5e0!3m2!1sen!2sus!4v1690123456789!5m2!1sen!2sus" class="google-map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-v-da31d217></iframe></div><div class="map-caption" data-v-da31d217><h3 data-v-da31d217>Based in Milan, Italy</h3><p data-v-da31d217>Available for remote collaborations and projects worldwide. Let&#39;s discuss how we can work together regardless of location.</p><div class="map-actions" data-v-da31d217><a href="https://www.google.com/maps/place/Via+Vittorio+Veneto,+22,+20091+Bresso+MI,+Italy" target="_blank" class="map-action-btn" data-v-da31d217><i class="fas fa-map-marked-alt" data-v-da31d217></i><span data-v-da31d217>Open in Google Maps</span></a><a href="https://www.google.com/maps/dir//Via+Vittorio+Veneto,+22,+20091+Bresso+MI,+Italy" target="_blank" class="map-action-btn secondary" data-v-da31d217><i class="fas fa-directions" data-v-da31d217></i><span data-v-da31d217>Get Directions</span></a></div></div></div></div></section></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da31d217"]]);

export { contact as default };
//# sourceMappingURL=contact-B31Gs-8W.mjs.map
