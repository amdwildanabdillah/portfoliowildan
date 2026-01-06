<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const activeSection = ref('hero-section')
let navObserver = null
let scrollAnimationObserver = null

onMounted(() => {
  const sections = document.querySelectorAll('section[id], header[id]')
  const navOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
  navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) activeSection.value = entry.target.id
    })
  }, navOptions)
  sections.forEach((section) => navObserver.observe(section))

  nextTick(() => {
      const animatedElements = document.querySelectorAll('.animate-block');
      const animationOptions = { root: null, rootMargin: '0px 0px -100px 0px', threshold: 0.1 };
      scrollAnimationObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target);
              }
          });
      }, animationOptions);
      animatedElements.forEach(el => scrollAnimationObserver.observe(el));
  });
})

onUnmounted(() => {
  if (navObserver) navObserver.disconnect()
  if (scrollAnimationObserver) scrollAnimationObserver.disconnect()
})
</script>

<template>
  <div class="ambient-glow glow-purple"></div>
  <div class="ambient-glow glow-cyan"></div>

  <nav class="ios-nav fade-in-down">
    <div class="logo">WILDAN.</div>
    <ul class="desktop-menu">
      <li><a href="#" @click.prevent="scrollToSection('hero-section')">Home</a></li>
      <li><a href="#" @click.prevent="scrollToSection('about-section')">About</a></li>
      <li><a href="#" @click.prevent="scrollToSection('work-section')">Work</a></li>
      <li><router-link to="/resume">Resume</router-link></li>
    </ul>
    <a href="#" @click.prevent="scrollToSection('contact-section')" class="btn-hire-small">Connect</a>
  </nav>

  <nav class="mobile-nav fade-in-up">
    <a href="#" @click.prevent="scrollToSection('hero-section')" class="nav-icon" :class="{ 'active-link': activeSection === 'hero-section' }"><i class="ph ph-house"></i></a>
    <a href="#" @click.prevent="scrollToSection('about-section')" class="nav-icon" :class="{ 'active-link': activeSection === 'about-section' }"><i class="ph ph-user"></i></a>
    <a href="#" @click.prevent="scrollToSection('work-section')" class="nav-icon center-icon" :class="{ 'active-link': activeSection === 'work-section' }"><i class="ph ph-squares-four"></i></a>
    <router-link to="/resume" class="nav-icon"><i class="ph ph-file-text"></i></router-link>
    <a href="#" @click.prevent="scrollToSection('contact-section')" class="nav-icon" :class="{ 'active-link': activeSection === 'contact-section' }"><i class="ph ph-chat-circle-dots"></i></a>
  </nav>

  <header id="hero-section" class="hero full-screen-section animate-block">
    <div class="hero-content">
      <span class="badge fade-in-up delay-1">FULL STACK CREATIVE</span>
      <h1>
        <span class="static-text fade-in-up delay-2">Visuals by Heart.</span><br />
        <span class="typewriter-container">
            <span class="text-gradient typewriter-text">Logic by Code.</span>
        </span>
      </h1>
      <p class="fade-in-up delay-3">Founder Vixel Creative • Videographer • Web Developer</p>
    </div>
    
    <div class="scroll-indicator fade-in-up delay-4">
        <i class="ph ph-caret-double-down"></i>
    </div>
  </header>

  <main class="main-container-fluid">

    <section id="about-section" class="full-screen-section">
      <div class="glass-card wide-about-card animate-block">
        <div class="about-content-pro">
          <div class="about-text-pro">
            <span class="tag">Who Am I?</span>
            <h2>Storyteller <span class="text-gradient">& Developer.</span></h2>
            <p class="bio-text">
              Hai, saya <b>Wildan</b>. Mahasiswa Komunikasi UINSA yang "tersesat" di jalan yang benar. 
              <br><br>
              Sebagai Founder <b>Vixel Creative</b>, saya menggabungkan ilmu <i>Communication</i> dengan teknis <i>Programming</i>. Saya tidak hanya menulis kode atau merekam gambar, tapi saya <b>membangun narasi</b> digital yang utuh.
            </p>
            <div class="stats-pro">
              <div class="stat-box"><h3>3+</h3><p>Years Exp.</p></div>
              <div class="stat-box"><h3>15+</h3><p>Projects</p></div>
              <div class="stat-box"><h3>Vue.js</h3><p>Specialist</p></div>
            </div>
             <div class="arsenal-pro">
                <i class="ph ph-file-vue" title="Vue.js"></i>
                <i class="ph ph-atom" title="React/Modern Web"></i>
                <i class="ph ph-camera-rotate" title="Sony Alpha"></i>
                <i class="ph ph-drone" title="DJI Drone"></i>
                <i class="ph ph-film-slate" title="Davinci/Premiere"></i>
             </div>
             <a href="https://wa.me/6285232351908?text=Halo%20Wildan" target="_blank" class="hire-btn primary-btn">
                Let's Collaborate <i class="ph ph-arrow-up-right"></i>
             </a>
          </div>

          <div class="profile-showcase">
            <div class="profile-frame">
                <img src="../assets/IMG_20251213_175009.jpg" alt="Profile Wildan" class="profile-img-pro" />
                <div class="frame-border color-1"></div>
                <div class="frame-border color-2"></div>
            </div>
            <div class="profile-label">
                <h3>Ahmad Wildan</h3>
                <p>Full Stack Creative Lead</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="work-section" class="full-screen-section work-section-padded">
      <div class="section-header animate-block">
        <span class="tag">Portfolio</span>
        <h2>Selected <span class="text-gradient">Works</span></h2>
      </div>

      <div class="works-grid animate-block delay-2">
        <router-link to="/cinematography" class="glass-card work-card clickable-card">
          <div class="card-bg" style="background-image: url('/covercinema.webp');"></div>
          <div class="card-content"><span class="tag">Videography</span><h3>Cinematography</h3><p>Visual storytelling & motion</p></div>
        </router-link>
        <router-link to="/development" class="glass-card work-card clickable-card">
          <div class="card-bg" style="background-image: url('/covercode.png');"></div>
          <div class="card-content"><span class="tag">Development</span><h3>Web & App</h3><p>Code, logic, and creativity.</p></div>
        </router-link>
        <router-link to="/photography" class="glass-card work-card clickable-card">
          <div class="card-bg" style="background-image: url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800');"></div>
          <div class="card-content"><span class="tag">Photography</span><h3>Gallery</h3><p>Timeless moments in frames.</p></div>
        </router-link>
      </div>
       <div class="center-btn animate-block delay-3">
          <router-link to="/resume" class="hire-btn secondary-btn">See All Projects & Resume</router-link>
       </div>
    </section>

    <section id="contact-section" class="full-screen-section footer-section">
        <div class="mega-footer glass-card animate-block">
            <div class="footer-cta">
                <h2>Ready to make something <span class="text-gradient">amazing?</span></h2>
                <p>Mari diskusikan ide dan projekmu bersama Vixel Creative.</p>
                <a href="https://wa.me/6285232351908" target="_blank" class="hire-btn giant-btn">
                    Start a Project <i class="ph ph-whatsapp-logo"></i>
                </a>
            </div>
            <div class="footer-divider"></div>
            <div class="footer-grid">
                <div class="footer-col brand-col">
                    <h3>WILDAN.</h3>
                    <p>Bridging the gap between human connection and digital experience through visuals and code.</p>
                    <span class="vixel-tag">A Vixel Creative Initiative.</span>
                </div>
                 <div class="footer-col">
                    <h4>Connect</h4>
                    <ul class="footer-socials">
                        <li><a href="https://www.linkedin.com/in/ahmadwildanabdillah-vixel" target="_blank" class="social-btn btn-li"><i class="ph ph-linkedin-logo"></i> <span>LinkedIn</span></a></li>
                        <li><a href="https://instagram.com/idan_abdll" target="_blank" class="social-btn btn-ig"><i class="ph ph-instagram-logo"></i> <span>Instagram</span></a></li>
                        <li><a href="https://www.youtube.com/@idan_abdll" target="_blank" class="social-btn btn-yt"><i class="ph ph-youtube-logo"></i> <span>YouTube</span></a></li>
                        <li><a href="https://github.com/amdwildanabdillah" target="_blank" class="social-btn btn-gh"><i class="ph ph-github-logo"></i> <span>GitHub</span></a></li>
                        <li><a href="https://behance.net/idan_abdll" target="_blank" class="social-btn btn-be"><i class="ph ph-behance-logo"></i> <span>Behance</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Ahmad Wildan Abdillah. All rights reserved.</p>
                <p>Made with code and creativity.</p>
            </div>
        </div>
    </section>

  </main>
</template>

<style scoped>
/* SEMUA CSS PINDAH KE GLOBAL.CSS */
</style>
