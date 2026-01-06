<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// FUNGSI SCROLL MANUAL
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
    <a href="#" @click.prevent="scrollToSection('hero-section')" class="nav-icon" :class="{ 'active-link': activeSection === 'hero-section' }">
      <i class="ph ph-house"></i>
    </a>
    
    <a href="#" @click.prevent="scrollToSection('about-section')" class="nav-icon" :class="{ 'active-link': activeSection === 'about-section' }">
      <i class="ph ph-user"></i>
    </a>

    <a href="#" @click.prevent="scrollToSection('work-section')" class="nav-icon center-icon" :class="{ 'active-link': activeSection === 'work-section' }">
      <i class="ph ph-squares-four"></i>
    </a>

    <router-link to="/resume" class="nav-icon">
      <i class="ph ph-file-text"></i>
    </router-link>

    <a href="#" @click.prevent="scrollToSection('contact-section')" class="nav-icon" :class="{ 'active-link': activeSection === 'contact-section' }">
      <i class="ph ph-chat-circle-dots"></i>
    </a>
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
             <a href="https://wa.me/6285232351908?text=Halo%20Wildan,%20saya%20tertarik%20kolaborasi" target="_blank" class="hire-btn primary-btn">
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
                        <li><a href="https://www.linkedin.com/in/ahmadwildanabdillah-vixel" target="_blank"><i class="ph ph-linkedin-logo"></i> LinkedIn</a></li>
                        <li><a href="https://instagram.com/idan_abdll" target="_blank"><i class="ph ph-instagram-logo"></i> Instagram</a></li>
                        <li><a href="https://www.youtube.com/@idan_abdll" target="_blank"><i class="ph ph-youtube-logo"></i> YouTube</a></li>
                        <li><a href="https://github.com/amdwildanabdillah" target="_blank"><i class="ph ph-github-logo"></i> GitHub</a></li>
                        <li><a href="https://behance.net/idan_abdll" target="_blank"><i class="ph ph-behance-logo"></i> Behance</a></li>
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
/* --- ANIMASI & UTILS --- */
.animate-block { opacity: 0; transform: translateY(50px) scale(0.95); transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
.animate-block.is-visible { opacity: 1; transform: translateY(0) scale(1); }
.fade-in-up { opacity: 0; animation: fadeInUp 1s forwards; }
.fade-in-down { opacity: 0; animation: fadeInDown 1s forwards; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.5s; }
.delay-3 { animation-delay: 1.5s; }
.delay-4 { animation-delay: 2s; }

/* --- IOS NAVBAR (DESKTOP) --- */
.ios-nav {
    position: fixed; top: 30px; left: 0; right: 0; margin: 0 auto;
    width: 90%; max-width: 900px; display: flex; justify-content: space-between; align-items: center; padding: 15px 30px;
    background: rgba(15, 15, 15, 0.6); backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 50px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3); z-index: 1000;
}
.ios-nav .logo { font-weight: 800; font-size: 1.2rem; letter-spacing: 1px; color: #fff; }
.desktop-menu { display: flex; gap: 30px; list-style: none; }
.desktop-menu a { text-decoration: none; color: #aaa; font-weight: 500; font-size: 0.9rem; transition: 0.3s; }
.desktop-menu a:hover { color: #fff; }
.btn-hire-small { background: #fff; color: #000; padding: 8px 20px; border-radius: 30px; font-weight: 700; font-size: 0.85rem; text-decoration: none; transition: 0.3s; }
.btn-hire-small:hover { background: #b084ff; color: #fff; }
@media (max-width: 900px) { .ios-nav { display: none; } }

/* --- HERO --- */
.hero { min-height: 100vh; display: flex; justify-content: center; align-items: center; text-align: center; position: relative; padding: 0 5%; }
.hero-content { width: 100%; max-width: 1400px; }
.hero-content h1 { font-size: 5.5rem; line-height: 1.1; margin: 20px 0; font-family: 'Clash Display', sans-serif; letter-spacing: -2px; }
.typewriter-container { display: inline-block; vertical-align: bottom; }
.typewriter-text {
    display: inline-block; overflow: hidden; border-right: 4px solid #b084ff;
    white-space: nowrap; width: 0; color: transparent;
    background: linear-gradient(to right, #ffffff, #b084ff);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
    animation: typing-loop 6s steps(30, end) infinite, blink-caret 0.75s step-end infinite;
}
@keyframes typing-loop { 0% { width: 0; } 30% { width: 100%; } 70% { width: 100%; } 80% { width: 0; } 100% { width: 0; } }
@keyframes blink-caret { from, to { border-color: transparent; } 50% { border-color: #b084ff; } }

/* Panah Scroll: Posisi Absolute Tengah */
.scroll-indicator { 
    position: absolute; 
    bottom: 40px; 
    left: 50%; /* Tengah */
    transform: translateX(-50%); /* Koreksi posisi */
    font-size: 2rem; color: #666; 
    animation: bounce 2s infinite; opacity: 0.7; 
}
@keyframes bounce { 0%, 20%, 50%, 80%, 100% {transform: translate(-50%, 0);} 40% {transform: translate(-50%, -10px);} 60% {transform: translate(-50%, -5px);} }

/* --- LAYOUT UTAMA --- */
.main-container-fluid { width: 100%; max-width: 1600px; margin: 0 auto; padding: 0 40px; }
.full-screen-section { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 80px 0; }
.work-section-padded { justify-content: flex-start; padding-top: 150px; }

/* --- ABOUT PRO --- */
.wide-about-card { padding: 80px; width: 100%; }
.about-content-pro { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 100px; align-items: center; }
.about-text-pro h2 { font-size: 3.5rem; margin: 15px 0; line-height: 1.1; font-family: 'Clash Display', sans-serif; }
.bio-text { font-size: 1.1rem; color: #ccc; line-height: 1.7; margin-bottom: 30px; max-width: 95%; }
.bio-text b { color: #fff; }
.stats-pro { display: flex; gap: 50px; margin-bottom: 30px; padding-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1); }
.stats-pro .stat-box h3 { font-size: 2.5rem; margin-bottom: 0; background: linear-gradient(to right, #fff, #b084ff); -webkit-background-clip: text; color: transparent; }
.arsenal-pro { display: flex; gap: 30px; font-size: 2.2rem; color: #888; margin-bottom: 40px; }
.arsenal-pro i:hover { color: #b084ff; transform: translateY(-5px) scale(1.1); }
.primary-btn { background: #fff; color: #000 !important; border: none; padding: 12px 30px; font-size: 1rem; display: inline-flex; align-items: center; gap: 10px; }
.primary-btn:hover { background: #b084ff; color: #fff !important; box-shadow: 0 10px 20px -10px rgba(176, 132, 255, 0.5); }

/* PROFILE SHOWCASE */
.profile-showcase { display: flex; flex-direction: column; align-items: center; position: relative; }
.profile-frame { position: relative; width: 350px; height: 450px; border-radius: 20px; z-index: 2; }
.profile-img-pro { width: 100%; height: 100%; object-fit: cover; border-radius: 20px; border: 1px solid rgba(255,255,255,0.2); position: relative; z-index: 3; }
.frame-border { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 20px; z-index: 1; opacity: 0.5; transition: 0.5s ease; }
.color-1 { border: 2px solid #b084ff; transform: translate(20px, 20px); }
.color-2 { border: 2px solid #00d2ff; transform: translate(-20px, -20px); }
.wide-about-card:hover .color-1 { transform: translate(30px, 30px); opacity: 0.8; }
.wide-about-card:hover .color-2 { transform: translate(-30px, -30px); opacity: 0.8; }
.profile-label { margin-top: 30px; text-align: center; }
.profile-label h3 { font-size: 1.6rem; margin-bottom: 5px; font-family: 'Clash Display'; }
.profile-label p { color: var(--text-muted); letter-spacing: 2px; font-size: 0.9rem; text-transform: uppercase; }

/* --- WORKS --- */
.works-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; width: 100%; }
.work-card { height: 320px; position: relative; display: flex; flex-direction: column; justify-content: flex-end; padding: 30px; text-decoration: none; color: inherit; }
.card-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-size: cover; background-position: center; opacity: 0.8; transition: 0.5s; mask-image: linear-gradient(to bottom, black, transparent); }
.work-card:hover .card-bg { transform: scale(1.05); opacity: 1; }
.card-content { position: relative; z-index: 2; }
.work-card h3 { font-size: 1.5rem; margin-top: 5px; font-family: 'Clash Display', sans-serif; }

/* --- MEGA FOOTER --- */
.footer-section { justify-content: flex-end; padding-bottom: 0; }
.mega-footer { padding: 80px 60px 30px; border-bottom-left-radius: 0; border-bottom-right-radius: 0; background: rgba(10, 10, 10, 0.8); }
.footer-cta { text-align: center; margin-bottom: 60px; }
.footer-cta h2 { font-size: 2.5rem; font-family: 'Clash Display'; margin-bottom: 15px; }
.footer-cta p { color: #aaa; font-size: 1.1rem; margin-bottom: 30px; }
.giant-btn { padding: 15px 40px; font-size: 1.2rem; border-radius: 50px; display: inline-flex; align-items: center; gap: 15px; background: #b084ff; border: none; }
.giant-btn:hover { background: #fff; color: #b084ff !important; transform: translateY(-5px); box-shadow: 0 10px 30px rgba(176, 132, 255, 0.4); }
.footer-divider { height: 1px; background: rgba(255,255,255,0.1); margin-bottom: 50px; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 50px; margin-bottom: 60px; }
.brand-col h3 { font-size: 1.5rem; margin-bottom: 20px; letter-spacing: 1px; }
.brand-col p { color: #aaa; line-height: 1.6; margin-bottom: 20px; max-width: 80%; }
.vixel-tag { font-size: 0.8rem; color: #b084ff; font-weight: 600; letter-spacing: 1px; }
.footer-col h4 { font-size: 1.1rem; margin-bottom: 25px; color: #fff; }
.footer-col ul { list-style: none; }
.footer-col ul li { margin-bottom: 15px; }

/* STYLE BARU UNTUK TOMBOL SOSMED */
.footer-socials li a {
    text-decoration: none; color: #aaa;
    padding: 10px 20px; /* Padding biar jadi tombol */
    border: 1px solid rgba(255, 255, 255, 0.1); /* Border tipis */
    background: rgba(255, 255, 255, 0.05); /* Background tipis */
    border-radius: 30px; /* Bentuk pil */
    display: flex; align-items: center; gap: 10px;
    transition: all 0.3s ease;
}
.footer-socials li a:hover {
    color: #fff;
    border-color: #b084ff; /* Border ungu pas hover */
    background: rgba(176, 132, 255, 0.1); /* Bg ungu tipis */
    transform: translateX(5px);
}

.footer-bottom { text-align: center; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.05); font-size: 0.9rem; color: #666; display: flex; justify-content: space-between; }

/* =========================================
   🚀 MOBILE RESPONSIVE (FIXED FINAL) 
   ========================================= */
@media (max-width: 1280px) {
    .main-container-fluid { padding: 0 20px; }
    .about-content-pro { gap: 50px; }
}

@media (max-width: 1024px) {
    .hero-content h1 { font-size: 4rem; }
    .about-content-pro { grid-template-columns: 1fr; text-align: center; gap: 50px; }
    .about-text-pro h2 { font-size: 2.5rem; }
    .bio-text { margin: 0 auto 30px; }
    .stats-pro, .arsenal-pro { justify-content: center; }
    .profile-showcase { order: -1; margin-bottom: 30px; }
    .footer-grid { grid-template-columns: 1fr; text-align: center; gap: 40px; }
    .brand-col p { margin: 0 auto 20px; }
    .footer-col ul li a { justify-content: center; }
    .footer-bottom { flex-direction: column; gap: 10px; }
    .works-grid { grid-template-columns: 1fr; }
    .work-card { height: 350px; }
}

@media (max-width: 768px) {
    /* 1. FIX HERO HP (Biar gak nabrak panah) */
    .hero { 
        min-height: 85vh; 
        padding: 0 20px 120px; /* Padding bawah gede buat tempat panah */
        display: flex; 
    }
    .hero-content {
        margin-bottom: 50px; /* Dorong konten ke atas sedikit */
    }
    .hero-content h1 { font-size: 2.8rem; line-height: 1.2; letter-spacing: 0; }
    .typewriter-text { white-space: normal; border-right: none; animation: none; width: auto; display: block; }
    
    /* Panah di HP posisinya fix di atas nav */
    .scroll-indicator { display: block; bottom: 90px; }

    .full-screen-section { padding: 40px 0; min-height: auto; display: block; }
    .main-container-fluid { padding: 0 20px; }
    .wide-about-card, .mega-footer { padding: 40px 20px; }
    .profile-frame { width: 100%; max-width: 280px; height: 380px; }
    
    /* 2. FIX FOOTER HP (Rata Tengah & Rapi) */
    .footer-grid { text-align: center; gap: 40px; }
    .brand-col p { margin: 0 auto 20px; }
    .vixel-tag { display: block; margin-top: 10px; } /* Biar turun baris rapi */
    
    /* Tombol sosmed di HP rata tengah */
    .footer-col ul li a { justify-content: center; }
    .footer-bottom { text-align: center; padding-bottom: 100px; }
    .footer-cta h2 { font-size: 1.8rem; }

    /* 3. MOBILE NAV (IOS FLOATING STABLE) */
    .ios-nav { display: none; }
    .mobile-nav {
        position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
        width: 90%; max-width: 400px; height: 65px;
        background: rgba(20, 20, 20, 0.7); 
        backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.15); border-radius: 40px;
        display: flex; justify-content: space-around; align-items: center; 
        padding: 0 15px; z-index: 9999;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }
    
    .nav-icon { font-size: 1.4rem; color: #888; transition: 0.3s; }
    .nav-icon.active-link { color: #b084ff; transform: translateY(-2px); }
    
    /* HAPUS GLOW UNGU di HP */
    .center-icon { 
        background: #b084ff; color: white !important; width: 42px; height: 42px;
        border-radius: 50%; display: flex; align-items: center; justify-content: center;
        margin-top: 0; box-shadow: none;
    }
}
</style>