<script setup></script>

<template>
  <div class="ambient-glow glow-purple"></div>
  <div class="ambient-glow glow-cyan"></div>

  <nav class="glass-nav">
    <div class="logo">WILDAN.</div>
    <ul>
      <li><a href="#work">Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact" class="btn-hire">Let's Talk</a></li>
    </ul>
  </nav>

  <header class="hero">
    <div class="hero-content">
      <span class="badge">FULL STACK CREATIVE</span>
      <h1>Visuals by Heart.<br /><span class="text-gradient">Logic by Code.</span></h1>
      <p>Photographer • Drone Pilot • Web Dev • AppSheet Expert</p>
    </div>
  </header>

  <section id="work" class="container">
    <div class="bento-grid">
      <div class="card glass-card item-about">
        <div class="about-text">
          <span class="tag">Who Am I?</span>
          <h2>Wildan.</h2>
          <p>
            Mahasiswa UIN Sunan Ampel yang hobi coding, visual creative, dan bikin desain UI yang
            estetik.
          </p>

          <div class="stats">
            <div class="stat-box">
              <h3>2+</h3>
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
              <img src="./assets/IMG_20251213_175009.jpg" alt="Profile" class="profile-pic" />
              <h3>Wildan</h3>
              <p>@idan_abdll</p>
              <div class="barcode">*HIRE ME*</div>
            </div>
          </div>
        </div>
      </div>

      <div class="card glass-card item-main">
        <div
          class="card-bg"
          style="
            background-image: url('https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=800');
          "
        ></div>
        <div class="card-content">
          <span class="tag">Cinematography</span>
          <h3>Drone & Aerial Reels</h3>
        </div>
      </div>

      <div class="card glass-card item-tech">
        <div
          class="card-bg"
          style="
            background-image: url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800');
          "
        ></div>
        <div class="card-content">
          <span class="tag">Development</span>
          <h3>Custom AppSheet & Web</h3>
          <p>Solusi digital terintegrasi.</p>
        </div>
      </div>

      <div class="card glass-card item-photo">
        <div
          class="card-bg"
          style="
            background-image: url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800');
          "
        ></div>
        <div class="card-content">
          <span class="tag">Photography</span>
          <h3>Gallery</h3>
        </div>
      </div>

      <div class="card glass-card item-social">
        <div class="social-header">
          <h3>Connect</h3>
          <p>Cek repository & karya.</p>
        </div>
        <div class="social-links">
          <a href="https://behance.net/idan_abdll" target="_blank" class="magnetic-btn">
            <i class="ph ph-behance-logo"></i>
            <span>Behance</span>
          </a>
          <a href="https://github.com/amdwildanabdillah" target="_blank" class="magnetic-btn">
            <i class="ph ph-github-logo"></i>
            <span>GitHub</span>
          </a>
          <a href="https://instagram.com/caramellatteeeee_" target="_blank" class="magnetic-btn">
            <i class="ph ph-instagram-logo"></i>
            <span>Instagram</span>
          </a>
          <a
            href="https://linkedin.com/in/wildan-abdillah-099a8b247"
            target="_blank"
            class="magnetic-btn"
          >
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
/* =========================================
   1. VARIABLES & RESET
   ========================================= */

/* =========================================
   2. BACKGROUND EFFECTS (AURORA)
   ========================================= */
.ambient-glow {
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(120px);
  z-index: -1;
  opacity: 0.6;
  pointer-events: none;
  animation: float 10s infinite ease-in-out alternate;
}

.glow-purple {
  top: -150px;
  left: -100px;
  background: var(--glow-purple);
}

.glow-cyan {
  bottom: -150px;
  right: -100px;
  background: var(--glow-cyan);
  animation-delay: 2s;
}

@keyframes float {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(50px, 50px) scale(1.1);
  }
}

/* =========================================
   3. TYPOGRAPHY & NAVBAR
   ========================================= */
h1,
h2,
h3 {
  font-family: 'Clash Display', sans-serif;
  font-weight: 600;
}
a {
  text-decoration: none;
  color: inherit;
}

.glass-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(5, 5, 5, 0.5);
  border-bottom: 1px solid var(--glass-border);
}
.glass-nav ul {
  display: flex;
  gap: 30px;
  list-style: none;
}
.btn-hire {
  border: 1px solid #fff;
  padding: 8px 20px;
  border-radius: 50px;
  transition: 0.3s;
}
.btn-hire:hover {
  background: #fff;
  color: #000;
}

/* =========================================
   4. HERO SECTION
   ========================================= */
.hero {
  height: auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding-top: 120px;
  padding-bottom: 40px;
}

.hero-content h1 {
  font-size: 4.5rem;
  line-height: 1.1;
  margin: 20px 0;
}

.text-gradient {
  background: linear-gradient(to right, #ffffff, #b084ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  padding-right: 5px;
  display: inline-block;
}

.badge {
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: rgba(255, 255, 255, 0.05);
}

/* =========================================
   5. BENTO GRID SYSTEM
   ========================================= */
.container {
  padding: 50px;
  max-width: 1400px;
  margin: 0 auto;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 350px);
  gap: 20px;
}

/* Base Card Style */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 24px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.glass-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 40px -10px rgba(120, 58, 255, 0.2);
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  z-index: 0;
  transition: 0.5s;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0));
}
.glass-card:hover .card-bg {
  transform: scale(1.05);
  opacity: 0.7;
}
.card-content {
  position: relative;
  z-index: 1;
  pointer-events: none;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.75rem;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Grid Positioning */
.item-main {
  grid-column: span 2;
  grid-row: span 2;
}
.item-tech {
  grid-column: span 2;
}
.item-photo {
  grid-column: span 1;
}
.item-social {
  grid-column: span 1;
}

/* =========================================
   6. FEATURE: ABOUT ME & HANGING CARD
   ========================================= */
.item-about {
  /* FULL WIDTH (Span 4) */
  grid-column: span 4;

  display: flex;
  flex-direction: row;
  align-items: center; /* Vertikal: Tengah */
  justify-content: center; /* Horizontal: Rata Tengah */
  gap: 80px; /* Jarak antar Teks & Kartu */
  padding: 40px;
  overflow: visible; /* Biar tali gantungan aman */
}

.about-text {
  flex: 0 0 auto; /* Jangan stretch */
  width: 400px; /* Batasi lebar teks biar rapi */
  text-align: left; /* Desktop: Rata Kiri */
  padding-right: 0;
  z-index: 2;
}

.about-text h2 {
  font-size: 2.5rem;
  margin: 10px 0;
  background: linear-gradient(to right, #fff, #b084ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
}
.about-text p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 20px;
  line-height: 1.5;
}

.stats {
  display: flex;
  gap: 20px;
}
.stat-box h3 {
  font-size: 1.5rem;
  margin-bottom: 0;
}
.stat-box p {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* Card Wrapper & Animation */
.id-card-wrapper {
  position: relative;
  width: 180px;
  height: auto; /* Tinggi Auto */
  min-height: 250px;
  display: flex;
  justify-content: center;
  perspective: 1000px;
}

.lanyard-string {
  position: absolute;
  top: -100px;
  width: 2px;
  height: 120px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.4));
  z-index: 10;
}

.hanging-card {
  position: relative;
  top: 20px;
  width: 160px;

  /* FIX: Tinggi Auto biar konten muat & Rata Tengah */
  height: auto;
  min-height: 240px;
  padding-bottom: 25px;

  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;

  /* Isi kartu rata tengah */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-start;

  padding: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transform-origin: top center;
  animation: swing 3s infinite ease-in-out;
}

@keyframes swing {
  0% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(5deg);
  }
}

.hanging-card:hover {
  animation-play-state: paused;
  border-color: #b084ff;
}

/* Detail Dalam Kartu */
.card-header,
.card-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hole {
  width: 30px;
  height: 5px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin-bottom: 10px;
}
.role {
  font-size: 0.6rem;
  letter-spacing: 2px;
  background: #b084ff;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 700;
  margin-bottom: 10px;
  display: inline-block;
}
.profile-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
  display: block;
}
.hanging-card h3 {
  font-size: 1.2rem;
  margin-bottom: 2px;
  width: 100%;
}
.hanging-card p {
  font-size: 0.8rem;
  color: var(--text-muted);
  width: 100%;
}

/* Barcode Kosmetik (Aman tanpa install font) */
.barcode {
  margin-top: 20px;
  width: 100%;
  font-family: 'Courier New', monospace;
  font-weight: 900;
  font-size: 1.5rem;
  opacity: 0.5;
  letter-spacing: -2px;
  transform: scaleY(0.5);
}

/* =========================================
   7. SOCIAL BUTTONS
   ========================================= */
.item-social {
  justify-content: space-between;
  padding: 25px;
}
.social-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

.magnetic-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  transition:
    background 0.2s,
    border 0.2s;
  position: relative;
  overflow: hidden;
}

.magnetic-btn i,
.magnetic-btn span {
  pointer-events: none;
}
.magnetic-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
}

footer {
  text-align: center;
  padding: 50px;
  color: var(--text-muted);
  font-size: 0.8rem;
}

/* =========================================
   8. MEDIA QUERIES (MOBILE FIXES)
   ========================================= */
@media (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .item-main {
    grid-column: span 2;
  }
  .item-about {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  .glass-nav {
    padding: 20px;
    justify-content: center;
  }
  .glass-nav ul {
    display: none;
  }

  /* Layout Mobile */
  .bento-grid {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0;
  }

  /* FIX About Me di HP */
  .item-about {
    flex-direction: column; /* Tumpuk atas bawah */
    text-align: center; /* Paksa rata tengah */
    padding: 40px 20px;
    gap: 40px;
  }

  /* Teks Rata Tengah di HP */
  .about-text {
    width: 100%;
    max-width: 100%;
    text-align: center;
    padding: 0;
  }
  .about-text h2 {
    text-align: center;
  }
  .stats {
    justify-content: center;
  }

  .id-card-wrapper {
    width: 100%;
    height: 280px;
    margin-bottom: 20px;
  }
}
</style>
