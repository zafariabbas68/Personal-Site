<!-- components/Layout/Footer.vue -->
<template>
  <footer class="portfolio-footer">
    <div class="container">
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="brand-header">
            <i class="fas fa-map-marked-alt brand-icon"></i>
            <h3 class="brand-name">Ghulam Abbas Zafari</h3>
          </div>
          <p class="brand-tagline">Innovative geospatial solutions for complex environmental and urban challenges.</p>
          <div class="footer-social-links">
            <a href="https://github.com/zafariabbas68" target="_blank" aria-label="GitHub" class="social-link github">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ghulam-abbas-zafari-b94105248/" target="_blank" aria-label="LinkedIn" class="social-link linkedin">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/393791387487" target="_blank" aria-label="WhatsApp" class="social-link whatsapp">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:ghulamabbas.zafari@gmail.com" aria-label="Email" class="social-link email">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <h4 class="section-title">Quick Links</h4>
          <ul class="links-list">
            <li><NuxtLink to="/" class="footer-link">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="footer-link">About</NuxtLink></li>
            <li><NuxtLink to="/projects" class="footer-link">Projects</NuxtLink></li>
            <li><NuxtLink to="/education" class="footer-link">Education</NuxtLink></li>
            <li><NuxtLink to="/experience" class="footer-link">Experience</NuxtLink></li>
            <li><NuxtLink to="/blog" class="footer-link">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="footer-link">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-contact">
          <h4 class="section-title">Contact Info</h4>
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-envelope contact-icon"></i>
              <div class="contact-details">
                <span class="contact-label">Email</span>
                <a href="mailto:ghulamabbas.zafari@gmail.com" class="contact-link">ghulamabbas.zafari@gmail.com</a>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone contact-icon"></i>
              <div class="contact-details">
                <span class="contact-label">Phone</span>
                <a href="tel:+393791387487" class="contact-link">(+39) 379-138-7487</a>
              </div>
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt contact-icon"></i>
              <div class="contact-details">
                <span class="contact-label">Location</span>
                <span class="contact-text">Via Vittorio Veneto 22, Bresso, Italy</span>
                <a href="https://www.google.com/maps/place/Via+Vittorio+Veneto,+22,+20091+Bresso+MI,+Italy"
                   target="_blank"
                   class="map-link">
                  <i class="fas fa-external-link-alt"></i>
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Afghan Flag Line -->
      <div class="flag-line"></div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <p class="copyright">&copy; {{ currentYear }} Ghulam Abbas Zafari. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
</script>

<style scoped>
.portfolio-footer {
  background: linear-gradient(135deg, var(--neutral-dark) 0%, #1a202c 100%);
  color: white;
  padding: 3rem 0 1.5rem;
  position: relative;
  overflow: hidden;
}

.portfolio-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(46, 134, 171, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(44, 85, 48, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  z-index: 1;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1.2fr;
  gap: 3rem;
  margin-bottom: 2rem;
  align-items: start;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.brand-icon {
  font-size: 2.2rem;
  color: var(--secondary-water);
}

.brand-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.brand-tagline {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  max-width: 280px;
}

.footer-social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.social-link.github {
  background: linear-gradient(135deg, #333, #6e5494);
}

.social-link.linkedin {
  background: linear-gradient(135deg, #0077b5, #00a0dc);
}

.social-link.whatsapp {
  background: linear-gradient(135deg, #25d366, #128c7e);
}

.social-link.email {
  background: linear-gradient(135deg, var(--secondary-water), var(--accent-sky));
}

.social-link:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.footer-links .section-title,
.footer-contact .section-title {
  color: var(--earth-sand);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  font-family: 'Playfair Display', serif;
  position: relative;
}

.footer-links .section-title::after,
.footer-contact .section-title::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--secondary-water);
  transition: width 0.3s ease;
}

.links-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.links-list li {
  margin-bottom: 0.6rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: inline-block;
  padding: 0.2rem 0;
  position: relative;
}

.footer-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--secondary-water);
  transition: width 0.3s ease;
}

.footer-link:hover {
  color: white;
  transform: translateX(5px);
}

.footer-link:hover::before {
  width: 100%;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  border-left: 2px solid var(--secondary-water);
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(3px);
}

.contact-icon {
  color: var(--secondary-water);
  font-size: 1rem;
  margin-top: 2px;
  flex-shrink: 0;
  min-width: 16px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.contact-label {
  color: var(--earth-sand);
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Poppins', sans-serif;
}

.contact-link,
.contact-text {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
}

.contact-link:hover {
  color: var(--secondary-water);
}

.map-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--earth-sand);
  font-size: 0.85rem;
  text-decoration: none;
  margin-top: 0.5rem;
  padding: 0.3rem 0.8rem;
  background: rgba(139, 115, 85, 0.2);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.map-link:hover {
  background: rgba(139, 115, 85, 0.3);
  color: white;
}

.flag-line {
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg,
    var(--afghan-black) 0%,
    var(--afghan-black) 33.33%,
    var(--afghan-red) 33.33%,
    var(--afghan-red) 66.66%,
    var(--afghan-green) 66.66%,
    var(--afghan-green) 100%);
  border-radius: 2px;
  margin: 1.5rem 0 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.footer-bottom {
  text-align: center;
}

.copyright {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1.5fr 1fr 1.2fr;
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .portfolio-footer {
    padding: 2.5rem 0 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .brand-header {
    justify-content: center;
    text-align: center;
  }

  .brand-tagline {
    max-width: none;
    text-align: center;
  }

  .contact-item {
    justify-content: center;
    text-align: center;
  }

  .footer-social-links {
    justify-content: center;
  }

  .footer-links .section-title::after,
  .footer-contact .section-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 576px) {
  .footer-content {
    gap: 1.5rem;
  }

  .brand-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .brand-name {
    font-size: 1.4rem;
  }

  .brand-tagline {
    font-size: 0.95rem;
  }

  .contact-item {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .contact-details {
    align-items: center;
  }

  .contact-icon {
    margin-top: 0;
  }
}
</style>
