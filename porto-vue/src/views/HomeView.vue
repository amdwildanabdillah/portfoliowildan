<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// --- 1. OTAK SCROLL SPY ---
const activeSection = ref('')
let observer = null

onMounted(() => {
  // Daftar target yang mau dipantau CCTV
  const sections = document.querySelectorAll('#about-section, #work-section, #social-section')

  const options = {
    root: null,
    threshold: 0.5 // Kalau 50% kotak kelihatan, langsung nyala
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  sections.forEach((section) => {
    observer.observe(section)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="ambient-glow glow-purple"></div>
  <div class="ambient-glow glow-cyan"></div>

  <nav class="glass-nav">
    <div class="logo">WILDAN.</div>
    <ul>
      <li><a href="#about-section">About</a></li>
      <li><a href="#work-section">Work</a></li>
      <li><a href="#">Pricelist</a></li>
      <li><a href="#social-section" class="btn-hire">Let's Connect</a></li>
    </ul>
  </nav>

  <nav class="mobile-nav">
    <a
      href="#about-section"
      class="nav-icon"
      :class="{ 'active-link': activeSection === 'about-section' }"
    >
      <i class="ph ph-user"></i>
    </a>
    <a
      href="#work-section"
      class="nav-icon center-icon"
      :class="{ 'active-link': activeSection === 'work-section' }"
    >
      <i class="ph ph-squares-four"></i>
    </a>
    <a
      href="#social-section"
      class="nav-icon"
      :class="{ 'active-link': activeSection === 'social-section' }"
    >
      <i class="ph ph-paper-plane-tilt"></i>
    </a>
  </nav>

  <header class="hero">
    <div class="hero-content">
      <span class="badge">FULL STACK CREATIVE</span>
      <h1>Visuals by Heart.<br /><span class="text-gradient">Logic by Code.</span></h1>
      <p>Videographer • Editor • Web Dev • AppSheet Expert</p>
    </div>
  </header>

  <section class="container">
    <div class="bento-grid">

      <div id="about-section" class="glass-card item-about">
        <div class="about-text">
          <span class="tag">Who Am I?</span>
          <h2>Hi, I'm Wildan.</h2>
          <p>
            I bridge the gap between human connection and digital experience. As a
            Communication student passionate about UI/UX and Front-end Development.
          </p>

          <div class="stats">
            <div class="stat-box">
              <h3>3+</h3>
              <p>Years</p>
            </div>
            <div class="stat-box">
              <h3>15+</h3>
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div class="id-card-wrapper">
          <div class="lanyard-string"></div>
          <div class="hanging-card">
            <div class="card-header">
              <div class="hole"></div>
              <span class="role">FULL STACK</span>
            </div>
            <div class="card-body">
              <img src="../assets/IMG_20251213_175009.jpg" alt="Profile" class="profile-pic" />
              <h3>Wildan</h3>
              <p>@idan_abdll</p>
              <div class="barcode">*HIRE ME*</div>
            </div>
          </div>
        </div>
      </div>

      <router-link to="/cinematography" id="work-section" class="glass-card item-main clickable-card">
        <div
          class="card-bg"
          style="background-image: url('https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=800');"
        ></div>
        <div class="card-content">
          <span class="tag">Videography</span>
          <h3>Audio Visual</h3>
          <p>High quality video service</p>
        </div>
      </router-link>

      <div class="glass-card item-tech">
        <div
          class="card-bg"
          style="background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800');"
        ></div>
        <div class="card-content">
          <span class="tag">Development</span>
          <h3>Custom AppSheet & Web</h3>
          <p>Solusi digital terintegrasi.</p>
        </div>
      </div>

      <div class="glass-card item-photo">
        <div
          class="card-bg"
          style="background-image: url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800');"
        ></div>
        <div class="card-content">
          <span class="tag">Photography</span>
          <h3>Gallery</h3>
          <p>Aesthetics in every frame</p>
        </div>
      </div>

      <div id="social-section" class="glass-card item-social">
        <div class="social-header">
          <h3>Connect</h3>
          <p>Work and Repository</p>
        </div>
        <div class="social-links">
          <a href="https://behance.net/idan_abdll" target="_blank" class="magnetic-btn btn-be">
            <i class="ph ph-behance-logo"></i>
            <span>Behance</span>
          </a>

          <a href="https://github.com/amdwildanabdillah" target="_blank" class="magnetic-btn btn-gh">
            <i class="ph ph-github-logo"></i>
            <span>GitHub</span>
          </a>

          <a href="https://instagram.com/caramellattteeeee_" target="_blank" class="magnetic-btn btn-ig">
            <i class="ph ph-instagram-logo"></i>
            <span>Instagram</span>
          </a>

          <a href="https://linkedin.com/in/wildan-abdillah-099a8b247" target="_blank" class="magnetic-btn btn-li">
            <i class="ph ph-linkedin-logo"></i>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 Wildan. Made with code & creativity.</p>
  </footer>
</template>

<style scoped>
/* Kosong gapapa, CSS ada di global.css */
</style>
