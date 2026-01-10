<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// --- 1. LOGIC SCROLL & NAVIGASI (Bawaan Lama) ---
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const activeSection = ref('hero-section')
let navObserver = null
let scrollAnimationObserver = null

// --- 2. LOGIC POPUP ARSENAL (Baru) ---
const showArsenal = ref(false)

const arsenalItems = [
  {
    category: 'Development Stack',
    icon: 'ph-code',
    tools: ['Visual Studio Code', 'Vue.js Ecosystem', 'Flutter & Dart', 'Git & GitHub', 'Vercel / Hostinger', 'Tailwind CSS']
  },
  {
    category: 'Photography Gear',
    icon: 'ph-camera',
    tools: ['Sony A7 III', 'Sony A6400', 'Sony A7 II', 'Sony 50 1.8', '7Artisans 35 1.2 II', 'Sony 85 1.8','Adobe Lightroom', 'Adobe Photoshop', 'Canva']
  },
  {
    category: 'Video & Drone',
    icon: 'ph-film-strip',
    tools: ['DJI Mini 3 Pro', 'DJI Air 2S', 'DJI MAVIC Pro','Adobe Premiere Pro', 'DaVinci Resolve']
  }
]
// -------------------------------------

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

  <header id="hero-section" class="hero animate-block">
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

  <main class="main-container">

    <section id="about-section" class="section-block">
      <div class="glass-card wide-about-card animate-block">
        <div class="about-content-pro">
          <div class="about-text-pro">
            <span class="tag">Who Am I?</span>
            <h2>Storyteller <span class="text-gradient">& Developer.</span></h2>
            <p class="bio-text">
              Hai, saya <b>Ahmad Wildan Abdillah</b>. Mahasiswa Komunikasi Penyiaran Islam UINSA yang memiliki passion di bidang creative technology, khususnya videografi dan pengembangan web. Saya percaya bahwa <b>cerita yang baik</b> dapat menghubungkan manusia dan menciptakan pengalaman digital yang bermakna.
              <br><br>
              Sebagai Founder <b>Vixel Creative</b>, saya menggabungkan ilmu <i>Communication</i> dengan teknis <i>Programming</i>. Saya tidak hanya menulis kode atau merekam gambar, tapi saya <b>membangun narasi</b> digital yang utuh.
            </p>
            
            <div class="stats-pro">
              <div class="stat-box"><h3>3+</h3><p>Years</p></div>
              <div class="stat-box"><h3>15+</h3><p>Projects</p></div>
              <div class="stat-box"><h3>Vue.js</h3><p>Specialist</p></div>
            </div>

             <div class="arsenal-pro">
                <button class="glass-btn" @click="showArsenal = true">
                  <i class="ph ph-toolbox"></i> View My Arsenal
                </button>
             </div>

             <a href="https://wa.me/6285232351908?text=Halo%20Wildan" target="_blank" class="action-btn">
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
                <h3>Ahmad Wildan Abdillah</h3>
                <p>Full Stack Creative</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="work-section" class="section-block">
      <div class="section-title animate-block">
        <h2>Selected <span class="text-gradient">Works</span></h2>
        <p>Highlights of my best work.</p>
      </div>

      <div class="works-grid animate-block">
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
    </section>

    <section id="contact-section" class="section-block">
      <div class="glass-card mega-footer animate-block">

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
            <h3>AHMAD WILDAN ABDILLAH</h3>
            <p>Bridging the gap between human connection and digital experience through visuals and code.</p>
            <span class="vixel-tag">A Vixel Creative Initiative.</span>
          </div>

          <div class="footer-col">
            <h4>Connect</h4>
            <div class="social-links-grid">
              <a href="https://behance.net/idan_abdll" target="_blank" class="social-btn btn-be"><i class="ph ph-behance-logo"></i> <span>Behance</span></a>
              <a href="https://github.com/amdwildanabdillah" target="_blank" class="social-btn btn-gh"><i class="ph ph-github-logo"></i> <span>GitHub</span></a>
              <a href="https://instagram.com/idan_abdll" target="_blank" class="social-btn btn-ig"><i class="ph ph-instagram-logo"></i> <span>Instagram</span></a>
              <a href="https://www.linkedin.com/in/ahmadwildanabdillah-vixel" target="_blank" class="social-btn btn-li"><i class="ph ph-linkedin-logo"></i> <span>LinkedIn</span></a>
              <a href="https://www.youtube.com/@idan_abdll" target="_blank" class="social-btn btn-yt"><i class="ph ph-youtube-logo"></i> <span>YouTube</span></a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 Ahmad Wildan Abdillah. All rights reserved.</p>
          <p>Made with code and creativity.</p>
        </div>

      </div>
    </section>

  </main>

  <Transition name="fade">
    <div v-if="showArsenal" class="modal-backdrop" @click="showArsenal = false">
      <div class="glass-card modal-content" @click.stop>
        <button class="close-btn" @click="showArsenal = false"><i class="ph ph-x"></i></button>
        
        <div class="modal-header">
          <h2>My <span class="text-gradient">Arsenal</span></h2>
          <p>Tools behind the works.</p>
        </div>

        <div class="arsenal-grid">
          <div v-for="(group, i) in arsenalItems" :key="i" class="arsenal-group">
              <div class="group-title">
                  <i :class="['ph', group.icon]"></i> <span>{{ group.category }}</span>
              </div>
              <div class="tags-container">
                  <span v-for="(tool, t) in group.tools" :key="t" class="tool-tag">
                      {{ tool }}
                  </span>
              </div>
          </div>
        </div>

      </div>
    </div>
  </Transition>

</template>

<style scoped>
/* =========================================
   STYLE KHUSUS COMPONENT (POPUP & BUTTON)
   Matches Global Theme: #b084ff (Purple)
   ========================================= */

/* 1. TOMBOL PEMICU (View My Arsenal) */
.arsenal-pro {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.glass-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  /* Menggunakan variable glass-border biar konsisten */
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border); 
  border-radius: 50px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  font-size: 0.95rem;
}

.glass-btn:hover {
  background: rgba(176, 132, 255, 0.15); /* Aksen ungu transparan */
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(176, 132, 255, 0.2); /* Glow ungu */
  color: #fff;
}

.glass-btn i { font-size: 1.2rem; }

/* 2. MODAL / POPUP STYLES */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(5, 5, 5, 0.9); /* Lebih gelap dikit dari bg-color main */
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
}

.modal-content {
  background: #0a0a0a !important; /* Background solid gelap biar kebaca */
  border: 1px solid var(--glass-border);
  padding: 2.5rem;
  width: 100%;
  max-width: 500px;
  border-radius: 24px;
  position: relative;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
}

/* Custom Scrollbar Modal */
.modal-content::-webkit-scrollbar { width: 6px; }
.modal-content::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
.modal-content::-webkit-scrollbar-track { background: transparent; }

.close-btn {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: rgba(255,255,255,0.05);
  border: none;
  width: 32px; height: 32px;
  border-radius: 50%;
  color: #888;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: 0.2s;
}
.close-btn:hover { 
  background: var(--primary-color); 
  color: #fff; 
}

.modal-header { margin-bottom: 2rem; text-align: center; }
.modal-header h2 { font-size: 1.8rem; margin: 0; color: #fff; font-family: 'Clash Display', sans-serif; }
.modal-header p { color: var(--text-muted); margin-top: 5px; font-size: 0.9rem; }

/* 3. LIST ITEM STYLES */
.arsenal-group {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--glass-border);
}
.arsenal-group:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

.group-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: var(--primary-color); /* Pake variable ungu */
  font-weight: 600;
  font-size: 1rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tool-tag {
  background: rgba(255,255,255,0.03);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #ccc;
  border: 1px solid var(--glass-border);
  transition: 0.2s;
}

.tool-tag:hover {
  background: rgba(176, 132, 255, 0.1);
  border-color: var(--primary-color); /* Border ungu pas hover */
  color: #fff;
  transform: translateY(-2px);
}

/* Transisi Vue */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>