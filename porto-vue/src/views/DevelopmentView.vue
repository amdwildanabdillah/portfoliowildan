<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// --- HELPER ICONS ---
const getTechDetails = (techName) => {
  const name = techName.toLowerCase();
  if (name.includes('vue')) return { icon: 'ph-file-vue', color: '#4FC08D' };
  if (name.includes('laravel')) return { icon: 'ph-file-code', color: '#FF2D20' };
  if (name.includes('react')) return { icon: 'ph-atom', color: '#61DAFB' };
  if (name.includes('tailwind')) return { icon: 'ph-wind', color: '#38B2AC' };
  if (name.includes('bootstrap')) return { icon: 'ph-bootstrap-logo', color: '#7952B3' };
  if (name.includes('html')) return { icon: 'ph-file-html', color: '#E34F26' };
  if (name.includes('css')) return { icon: 'ph-file-css', color: '#1572B6' };
  if (name.includes('javascript') || name.includes('js')) return { icon: 'ph-file-js', color: '#F7DF1E' };
  if (name.includes('vite')) return { icon: 'ph-lightning', color: '#646CFF' };
  if (name.includes('mysql') || name.includes('database')) return { icon: 'ph-database', color: '#00758F' };
  if (name.includes('sheet')) return { icon: 'ph-table', color: '#0F9D58' };
  if (name.includes('framer')) return { icon: 'ph-framer-logo', color: '#0055FF' };
  if (name.includes('automation')) return { icon: 'ph-robot', color: '#FF9900' };
  return { icon: 'ph-code', color: '#b084ff' };
}

// DATA PROJECT
const devProjects = ref([
  {
    id: 1,
    title: 'Storydesto',
    type: 'Marketplace Platform',
    client: 'Internal Startup',
    desc: 'A digital marketplace connecting photography vendors with clients. Features a Smart Booking System, integrated Payment Gateway, and a comprehensive Admin Dashboard to streamline visual service transactions.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    images: [
        '/coverdesto.png',
        '/desto/desto1.png',
        '/desto/desto2.png',
        '/desto/desto3.png'
    ],
    link: 'https://portfolio-storydesto.netlify.app/',
    github: 'https://github.com/amdwildanabdillah/storydesto'
  },
  {
    id: 2,
    title: "Personal Portfolio",
    type: 'Frontend Development',
    client: 'Personal Branding',
    desc: 'Interactive portfolio with Glassmorphism design. Built with Vue.js as a Single Page Application (SPA) to deliver a fast, smooth, and fully responsive user experience across all devices.',
    stack: ['Vue.js', 'HTML', 'CSS', 'Vite'],
    images: ['/webwildan.png'],
    link: 'https://portfoliowildan.my.id/',
    github: null,
  },
  {
    id: 3,
    title: "D'Production Surabaya",
    type: 'Company Profile',
    client: "D'Production House",
    desc: 'Official landing page for a creative production house. Designed to professionally showcase video showreels, detail services, and enhance brand credibility.',
    stack: ['HTML', 'CSS', 'Javascript'],
    images: ['/dproduction.png'],
    link: 'https://dproductionsub.netlify.app/',
    github: 'https://github.com/amdwildanabdillah/dproductionsub'
  },
  {
    id: 4,
    title: "Invitation Kit",
    type: 'Digital Asset',
    client: 'Vixel Product',
    desc: 'A highly customizable digital invitation template. Built for speed and aesthetic with smooth animations, RSVP integration, and mobile-first responsive layout.',
    stack: ['Vue.js','HTML','Tailwind CSS'],
    images: ['/wedinvite.png'],
    link: 'https://wedding-invitation-wildan.vercel.app/',
    github: null,
  },
  {
    id: 5,
    title: "Vixel Creative Landing",
    type: 'Company Profile',
    client: 'Vixel Creative HQ',
    desc: 'Landing page for Web Dev & AppSheet Solution agency. Designed professionally showcase projects, detail service, and enhance brand credibility.',
    stack: ['Vue.js','Vite','Tailwind CSS','Framer Motion'],
    images: ['/vixel.png'],
    link: 'https://vixelcreative.my.id/',
    github: null,
  },
  {
    id: 6,
    title: "WildanInvites HQ",
    type: "Internal Tool",
    client: 'Finance Dept.',
    desc: "A dedicated internal management tool for WildanInvites, built with AppSheet. Features robust cashflow tracking, automated P&L reporting, and expense monitoring.",
    stack: ['AppSheet','Google Sheet', 'Automation'],
    images: ['/cashflowhq.png'],
    link: null,
    github: null,
  }
])

// --- LOGIKA POPUP & BACK BUTTON FIX ---
const activeProject = ref(null)
const currentImageIndex = ref(0)

// 1. Fungsi Buka Modal
const openModal = (project) => {
  activeProject.value = project
  currentImageIndex.value = 0
  document.body.style.overflow = 'hidden'
  
  // 🔥 TRICK BIAR TOMBOL BACK HP GAK KELUAR HALAMAN 🔥
  // Kita "pura-pura" nambah history baru
  window.history.pushState({ modalOpen: true }, '')
}

// 2. Fungsi Tutup Modal (via Tombol X / Klik Luar)
const closeModal = () => {
  // Kalau user klik X, kita mundur 1 langkah di history (biar sinkron sama tombol back)
  window.history.back()
}

// 3. Listener Tombol Back HP
const handleBackButton = () => {
  // Kalau tombol back dipencet, browser otomatis mundur history-nya.
  // Kita tinggal tutup modalnya aja.
  if (activeProject.value) {
    activeProject.value = null
    document.body.style.overflow = 'auto'
  }
}

// Pasang Listener saat halaman dimuat
onMounted(() => {
  window.addEventListener('popstate', handleBackButton)
})

// Copot Listener kalau pindah halaman beneran
onUnmounted(() => {
  window.removeEventListener('popstate', handleBackButton)
  // Jaga-jaga kalau modal masih kebuka pas pindah halaman
  document.body.style.overflow = 'auto'
})

// Slider Logic
const nextImage = () => {
  if (activeProject.value) {
    currentImageIndex.value = (currentImageIndex.value + 1) % activeProject.value.images.length
  }
}
const prevImage = () => {
  if (activeProject.value) {
    currentImageIndex.value = (currentImageIndex.value - 1 + activeProject.value.images.length) % activeProject.value.images.length
  }
}
</script>

<template>
  <div class="ambient-glow glow-purple"></div>
  <div class="ambient-glow glow-cyan"></div>

  <div class="dev-container">

    <header class="dev-header">
        <router-link to="/" class="btn-back">
            <i class="ph ph-arrow-left"></i> Kembali ke Home
        </router-link>

        <div class="header-text">
            <span class="badge">DEVELOPMENT</span>
            <h1>Code meets <span class="text-gradient">Creativity</span></h1>
            <p>Membangun solusi digital yang fungsional dan estetik.</p>
        </div>
    </header>

    <div class="project-list">
        <div v-for="(item, index) in devProjects" :key="item.id" 
             class="project-row" :class="{ 'reverse': index % 2 !== 0 }">
            
            <div class="project-image glass-card" @click="openModal(item)">
                <div class="browser-bar">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                </div>
                <img :src="item.images[0]" :alt="item.title" />
                <div class="visit-overlay">
                    <span>View Details <i class="ph ph-magnifying-glass-plus"></i></span>
                </div>
            </div>

            <div class="project-info">
                <span class="project-type">{{ item.type }}</span>
                <h2>{{ item.title }}</h2>
                <p class="desc">{{ item.desc }}</p>

                <div class="action-buttons">
                    <a v-if="item.github" :href="item.github" target="_blank" class="btn-secondary">
                        <i class="ph ph-github-logo"></i> Repository
                    </a>
                    <button class="btn-primary outline" @click="openModal(item)">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    </div>

    <Transition name="fade">
      <div v-if="activeProject" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content glass-card vertical-layout">
          
          <button class="close-btn" @click="closeModal"><i class="ph ph-x"></i></button>

          <div class="modal-image-section">
            <div class="main-image-wrapper">
                <img :src="activeProject.images[currentImageIndex]" alt="Preview" class="main-img" />
                
                <div v-if="activeProject.images.length > 1" class="slider-nav">
                    <button @click.stop="prevImage"><i class="ph ph-caret-left"></i></button>
                    <button @click.stop="nextImage"><i class="ph ph-caret-right"></i></button>
                </div>
            </div>
            <div class="thumbnails-row" v-if="activeProject.images.length > 1">
                <img v-for="(img, idx) in activeProject.images" :key="idx" 
                     :src="img" :class="{ 'active': idx === currentImageIndex }" 
                     @click="currentImageIndex = idx" />
            </div>
          </div>

          <div class="modal-info-section">
            
            <div class="info-header">
                 <span class="modal-type-badge">{{ activeProject.type }}</span>
                 <h2>{{ activeProject.title }}</h2>
            </div>

            <p class="desc-full">{{ activeProject.desc }}</p>

            <div class="divider"></div>

            <div class="meta-row">
                <div class="meta-group">
                    <span class="meta-label">Built With</span>
                    <div class="tech-icons-colored">
                        <div v-for="t in activeProject.stack" :key="t" class="tech-item-color" 
                             :style="{ '--brand-color': getTechDetails(t).color }">
                            <i class="ph" :class="getTechDetails(t).icon"></i>
                            <span>{{ t }}</span>
                        </div>
                    </div>
                </div>

                <div class="meta-group" v-if="activeProject.client">
                    <span class="meta-label">Client</span>
                    <p class="client-name">{{ activeProject.client }}</p>
                </div>
            </div>

            <div class="modal-footer-actions">
                <a v-if="activeProject.link" :href="activeProject.link" target="_blank" class="action-chip primary">
                    Visit Live Site <i class="ph ph-arrow-up-right"></i>
                </a>
                <a v-if="activeProject.github" :href="activeProject.github" target="_blank" class="action-chip secondary">
                    <i class="ph ph-github-logo"></i> Repository
                </a>
            </div>

          </div>

        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
/* --- SETUP DASAR --- */
:root { --primary-color: #b084ff; }
.dev-container { padding: 40px 20px; min-height: 100vh; max-width: 1200px; margin: 0 auto; color: white; }

/* HEADER & LIST (STANDARD) */
.dev-header { text-align: center; margin-bottom: 80px; display: flex; flex-direction: column; align-items: center; }
.header-text h1 { font-size: 3rem; margin: 15px 0; font-family: 'Clash Display', sans-serif; }
.header-text p { color: #aaa; }
.badge { border: 1px solid rgba(255,255,255,0.2); padding: 5px 12px; border-radius: 20px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; background: rgba(255,255,255,0.05); color: #aaa; }
.text-gradient { background: linear-gradient(to right, #ffffff, #b084ff); -webkit-background-clip: text; background-clip: text; color: transparent; }
.btn-back { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #aaa; font-size: 0.9rem; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); padding: 8px 15px; border-radius: 20px; transition: 0.3s; }
.btn-back:hover { background: rgba(255,255,255,0.1); color: white; }

/* PROJECT CARDS */
.project-list { display: flex; flex-direction: column; gap: 100px; }
.project-row { display: flex; align-items: center; gap: 60px; }
.project-row.reverse { flex-direction: row-reverse; }

.project-image { flex: 1; position: relative; border-radius: 16px; overflow: hidden; transition: transform 0.3s ease; cursor: pointer; border: 1px solid rgba(255,255,255,0.1); }
.project-image:hover { transform: translateY(-5px); border-color: #b084ff; }
.browser-bar { height: 30px; background: rgba(0,0,0,0.5); display: flex; align-items: center; padding: 0 15px; gap: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #ff5f56; } .yellow { background: #ffbd2e; } .green { background: #27c93f; }
.project-image img { width: 100%; height: auto; display: block; object-fit: cover; }
.visit-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; }
.visit-overlay span { border: 1px solid white; padding: 10px 20px; border-radius: 30px; color: white; display: flex; align-items: center; gap: 10px; }
.project-image:hover .visit-overlay { opacity: 1; }

.project-info { flex: 0.8; text-align: left; }
.project-type { color: #b084ff; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
.project-info h2 { font-size: 2.5rem; margin: 10px 0 20px; font-family: 'Clash Display', sans-serif; line-height: 1.1; }
.desc { color: #ccc; line-height: 1.6; margin-bottom: 25px; }

.action-buttons { display: flex; gap: 15px; }
.btn-primary.outline { background: transparent; border: 1px solid white; color: white; padding: 10px 25px; border-radius: 50px; font-weight: bold; cursor: pointer; transition: 0.3s; }
.btn-primary.outline:hover { background: rgba(255,255,255,0.1); }
.btn-secondary { display: flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.3); color: white; padding: 10px 25px; border-radius: 50px; text-decoration: none; transition: 0.3s; }
.btn-secondary:hover { border-color: white; background: rgba(255,255,255,0.1); }

/* === 🔥 MODAL VERTIKAL LAYOUT (SCROLLABLE) 🔥 === */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(10px); }

.modal-content { 
    width: 100%; max-width: 700px; /* Lebar ideal buat baca */
    max-height: 90vh; 
    background: #111; border: 1px solid rgba(255,255,255,0.2); 
    display: flex; flex-direction: column; /* SUSUN KE BAWAH */
    overflow-y: auto; /* SCROLL VERTIKAL AKTIF */
    position: relative; border-radius: 20px; 
}

/* Tombol Close */
.close-btn { 
    position: absolute; top: 15px; right: 15px; z-index: 20;
    background: rgba(0,0,0,0.6); border: none; color: white; 
    width: 35px; height: 35px; border-radius: 50%; cursor: pointer; 
    display: flex; align-items: center; justify-content: center;
    transition: 0.3s;
}
.close-btn:hover { background: #b084ff; transform: rotate(90deg); }

/* Bagian Gambar (Atas) */
.modal-image-section { 
    width: 100%; background: #000; 
    padding: 0; /* Full width */
}
.main-image-wrapper { position: relative; width: 100%; height: auto; }
.main-img { width: 100%; height: auto; display: block; max-height: 400px; object-fit: contain; background: #050505; }

/* Navigasi Slider */
.slider-nav button { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); border: none; color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 1.5rem; transition: 0.3s; }
.slider-nav button:hover { background: #b084ff; }
.slider-nav button:first-child { left: 10px; } .slider-nav button:last-child { right: 10px; }

/* Thumbnails */
.thumbnails-row { display: flex; gap: 8px; padding: 15px; justify-content: center; background: #080808; border-bottom: 1px solid rgba(255,255,255,0.1); }
.thumbnails-row img { width: 60px; height: 40px; object-fit: cover; border-radius: 4px; cursor: pointer; opacity: 0.5; border: 2px solid transparent; transition: 0.3s; }
.thumbnails-row img.active { opacity: 1; border-color: #b084ff; }

/* Bagian Info (Bawah) */
.modal-info-section { padding: 40px; text-align: left; }

.modal-type-badge { display: inline-block; color: #b084ff; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
.modal-info-section h2 { font-size: 2.2rem; font-family: 'Clash Display'; line-height: 1.2; margin: 0 0 20px 0; }
.desc-full { color: #ccc; line-height: 1.8; font-size: 1.05rem; white-space: pre-line; margin-bottom: 30px; }

.divider { height: 1px; background: rgba(255,255,255,0.1); width: 100%; margin: 30px 0; }

.meta-row { display: flex; flex-direction: column; gap: 30px; }
.meta-group { display: flex; flex-direction: column; gap: 10px; }
.meta-label { font-size: 0.85rem; color: #666; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
.client-name { font-size: 1.1rem; color: white; font-weight: 500; margin: 0; }

/* Tech Stack Colored */
.tech-icons-colored { display: flex; flex-wrap: wrap; gap: 10px; }
.tech-item-color {
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
    padding: 8px 16px; border-radius: 20px; font-size: 0.9rem; 
    display: flex; align-items: center; gap: 8px; color: #ddd;
    transition: 0.3s;
}
.tech-item-color:hover { 
    background: rgba(255,255,255,0.1); 
    border-color: var(--brand-color); 
    color: white; 
    box-shadow: 0 0 15px var(--brand-color);
}
.tech-item-color i { font-size: 1.2rem; color: var(--brand-color); }

/* Tombol Aksi Akhir (Sejajar) */
.modal-footer-actions { margin-top: 40px; display: flex; gap: 20px; }
.action-chip { 
    flex: 1; padding: 15px; text-align: center; border-radius: 12px; font-weight: 700; 
    text-decoration: none; transition: 0.3s; display: flex; align-items: center; justify-content: center; gap: 8px; 
}
.action-chip.primary { background: #b084ff; color: white; border: none; }
.action-chip.primary:hover { background: white; color: black; box-shadow: 0 5px 20px rgba(176, 132, 255, 0.4); }
.action-chip.secondary { background: transparent; border: 1px solid rgba(255,255,255,0.3); color: white; }
.action-chip.secondary:hover { border-color: white; background: rgba(255,255,255,0.1); }

/* Transition Fade */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 900px) {
    .project-row { flex-direction: column !important; gap: 30px; }
    .project-image { width: 100%; }
    .project-info { width: 100%; text-align: left; }
    .modal-content { height: 100%; max-height: 100%; border-radius: 0; }
    .main-image-wrapper { height: 250px; }
    .modal-info-section { padding: 25px; }
    .header-text h1 { font-size: 2.5rem; }
}

/* Glow */
.ambient-glow { position: fixed; width: 500px; height: 500px; border-radius: 50%; filter: blur(120px); z-index: -1; opacity: 0.4; pointer-events: none; }
.glow-purple { top: -100px; right: -100px; background: rgba(120, 58, 255, 0.2); }
.glow-cyan { bottom: -100px; left: -100px; background: rgba(0, 255, 209, 0.2); }
</style>