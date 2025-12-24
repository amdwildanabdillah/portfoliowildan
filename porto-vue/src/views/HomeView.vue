<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// FUNGSI SCROLL MANUAL (ANTI BLANK PAGE)
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// --- OTAK SCROLL SPY (CCTV CANGGIH) ---
const activeSection = ref('')
let observer = null

onMounted(() => {
  // Pantau semua section yang punya ID
  const sections = document.querySelectorAll('section[id]')

  const options = {
    root: null,
    // LOGIKA GARIS TENGAH: Lampu pindah kalau section nyentuh tengah layar
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  sections.forEach((section) => observer.observe(section))
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
      <li><a href="#" @click.prevent="scrollToSection('about-section')">About</a></li>

      <li><a href="#" @click.prevent="scrollToSection('work-section')">Work</a></li>

      <li><router-link to="/resume">Resume</router-link></li>

      <li><a href="#" @click.prevent="scrollToSection('social-section')" class="btn-hire">Let's Connect</a></li>
    </ul>
  </nav>

  <nav class="mobile-nav">
    <a href="#" @click.prevent="scrollToSection('about-section')" class="nav-icon" :class="{ 'active-link': activeSection === 'about-section' }">
      <i class="ph ph-user"></i>
    </a>

    <a href="#" @click.prevent="scrollToSection('work-section')" class="nav-icon center-icon" :class="{ 'active-link': activeSection === 'work-section' }">
      <i class="ph ph-squares-four"></i>
    </a>

    <a href="#" @click.prevent="scrollToSection('social-section')" class="nav-icon" :class="{ 'active-link': activeSection === 'social-section' }">
      <i class="ph ph-paper-plane-tilt"></i>
    </a>

    <router-link to="/resume" class="nav-icon">
      <i class="ph ph-file-text"></i>
    </router-link>
  </nav>

  <header class="hero">
    <div class="hero-content">
      <span class="badge">FULL STACK CREATIVE</span>
      <h1>Visuals by Heart.<br /><span class="text-gradient">Logic by Code.</span></h1>
      <p>Videographer • Editor • Web Dev • AppSheet Expert</p>
    </div>
  </header>

  <main class="main-container">

    <section id="about-section" class="section-block">
      <div class="glass-card big-about-card">
        <div class="about-content">
          <div class="about-text">
            <span class="tag">Who Am I?</span>
            <h2>Hi, I'm Wildan.</h2>
            <p>
              I bridge the gap between human connection and digital experience. As a
              Communication student passionate about UI/UX and Front-end Development.
            </p>
            <div class="stats">
              <div class="stat-box"><h3>3+</h3><p>Years</p></div>
              <div class="stat-box"><h3>15+</h3><p>Projects</p></div>
            </div>
          </div>

          <div class="id-card-wrapper">
            <div class="lanyard-string"></div>
            <div class="hanging-card">
              <div class="card-header">
                <div class="hole"></div><span class="role">FULL STACK</span>
              </div>
              
              <div class="card-body">
                <img src="../assets/IMG_20251213_175009.jpg" alt="Profile" class="profile-pic" />
                <h3>Wildan</h3>
                <p>Wildan Abdillah</p>
                <a href="https://wa.me/6285232351908?text=Halo%20Wildan,%20saya%20tertarik%20dengan%20jasa%20Anda" target="_blank" class="hire-btn">LET'S TALK</a>
              </div> </div>
          </div>
        </div>
      </div>
    </section>

    <section id="work-section" class="section-block">
      <div class="section-title">
        <h2>Selected <span class="text-gradient">Works</span></h2>
        <p>Highlights of my best work.</p>
      </div>

      <div class="works-grid">
        <router-link to="/cinematography" class="glass-card work-card clickable-card">
          <div class="card-bg" style="background-image: url('/covercinema.webp');"></div>
          <div class="card-content">
            <span class="tag">Videography</span>
            <h3>Cinematography</h3>
            <p>Visual storytelling & motion</p>
          </div>
        </router-link>

        <router-link to="/development" class="glass-card work-card clickable-card">
          <div class="card-bg" style="background-image: url('/covercode.png');"></div>
          <div class="card-content">
            <span class="tag">Development</span>
            <h3>Web & App</h3>
            <p>Code, logic, and creativity.</p>
          </div>
        </router-link>

        <router-link to="/photography" class="glass-card work-card clickable-card">
          <div class="card-bg" style="background-image: url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800');"></div>
          <div class="card-content">
            <span class="tag">Photography</span>
            <h3>Gallery</h3>
            <p>Timeless moments in frames.</p>
          </div>
        </router-link>
      </div>
    </section>

    <section id="social-section" class="section-block">
      <div class="glass-card social-card-full">
        <div class="social-text">
          <h2>Let's <span class="text-gradient">Connect</span></h2>
          <p>Work and Repository</p>
        </div>

        <div class="social-links-row">
          <a href="https://behance.net/idan_abdll" target="_blank" class="magnetic-btn btn-be"><i class="ph ph-behance-logo"></i> Behance</a>
          <a href="https://github.com/amdwildanabdillah" target="_blank" class="magnetic-btn btn-gh"><i class="ph ph-github-logo"></i> GitHub</a>
          <a href="https://instagram.com/caramellattteeeee_" target="_blank" class="magnetic-btn btn-ig"><i class="ph ph-instagram-logo"></i> Instagram</a>
          <a href="https://discord.com/users/811059299429384249" target="_blank" class="magnetic-btn btn-discord"><i class="ph ph-discord-logo"></i> Discord</a>
        </div>
      </div>
    </section>

  </main>

  <footer>
    <p>&copy; 2025 Wildan. Made with code & creativity.</p>
  </footer>
</template>

<style scoped>
/* CSS ADA DI GLOBAL.CSS YA MAS */
</style>
