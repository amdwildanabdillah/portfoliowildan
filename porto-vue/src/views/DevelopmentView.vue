<script setup>
import { ref, computed } from 'vue'

// --- HELPER: MAPPING ICON & WARNA BRAND ---
// Ini otaknya biar ikon tech stack warnanya sesuai aslinya
const getTechDetails = (techName) => {
  // Normalisasi nama (biar 'Vue.js' sama 'Vue' dianggap sama)
  const name = techName.toLowerCase();

  if (name.includes('vue')) return { icon: 'ph-file-vue', color: '#4FC08D' }; // Vue Green
  if (name.includes('laravel')) return { icon: 'ph-file-code', color: '#FF2D20' }; // Laravel Red
  if (name.includes('react')) return { icon: 'ph-atom', color: '#61DAFB' }; // React Blue
  if (name.includes('tailwind')) return { icon: 'ph-wind', color: '#38B2AC' }; // Tailwind Cyan
  if (name.includes('bootstrap')) return { icon: 'ph-bootstrap-logo', color: '#7952B3' }; // Bootstrap Purple
  if (name.includes('html')) return { icon: 'ph-file-html', color: '#E34F26' }; // HTML Orange
  if (name.includes('css')) return { icon: 'ph-file-css', color: '#1572B6' }; // CSS Blue
  if (name.includes('script')) return { icon: 'ph-file-js', color: '#F7DF1E' }; // JS Yellow
  if (name.includes('vite')) return { icon: 'ph-lightning', color: '#646CFF' }; // Vite Purple
  if (name.includes('mysql') || name.includes('database')) return { icon: 'ph-database', color: '#00758F' }; // DB Blue
  if (name.includes('sheet')) return { icon: 'ph-table', color: '#0F9D58' }; // Sheets Green
  if (name.includes('framer')) return { icon: 'ph-framer-logo', color: '#0055FF' }; // Framer Blue
  
  // Default kalo gak nemu
  return { icon: 'ph-code', color: '#b084ff' }; 
}


// DATA PROJECT (Update: Nambah field 'client')
const devProjects = ref([
  {
    id: 1,
    title: 'Storydesto',
    type: 'Marketplace Platform',
    client: 'Internal Project / Startup Initiative', // Nambah Client
    desc: 'A digital marketplace connecting photography vendors with clients. Features a Smart Booking System, integrated Payment Gateway, and a comprehensive Admin Dashboard.',
    stack: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap'],
    images: [
        '/coverdesto.png', 
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800'
    ],
    link: 'https://portfolio-storydesto.netlify.app/',
    github: 'https://github.com/amdwildanabdillah/storydesto'
  },
  {
    id: 2,
    title: "Personal Portfolio",
    type: 'Frontend Development',
    client: 'Personal Branding',
    desc: 'Interactive portfolio with Glassmorphism design. Built as SPA for smooth UX.',
    stack: ['Vue.js', 'HTML', 'CSS', 'Vite'],
    images: ['/webwildan.png'],
    link: 'https://portfoliowildan.my.id/',
    github: null,
  },
  {
    id: 3,
    title: "D'Production Surabaya",
    type: 'Company Profile',
    client: 'D\'Production House',
    desc: 'Official landing page for creative production house. Showcasing showreels and services.',
    stack: ['HTML', 'CSS', 'Javascript'],
    images: ['/dproduction.png'],
    link: 'https://dproductionsub.netlify.app/',
    github: 'https://github.com/amdwildanabdillah/dproductionsub'
  },
  {
    id: 4,
    title: "Invitation Kit",
    type: 'Digital Asset / Product',
    client: 'Vixel Creative Product',
    desc: 'Customizable digital invitation template with RSVP integration.',
    stack: ['Vue.js','HTML','Tailwind CSS'],
    images: ['/wedinvite.png'],
    link: 'https://wedding-invitation-wildan.vercel.app/',
    github: null,
  },
  {
    id: 5,
    title: "Vixel Creative Landing",
    type: 'Company Profile / Agency',
    client: 'Vixel Creative HQ',
    desc: 'Landing page for Web Dev & AppSheet Solution agency.',
    stack: ['Vue.js','Vite','Tailwind CSS','Framer Motion'],
    images: ['/vixel.png'],
    link: 'https://vixelcreative.my.id/',
    github: null,
  },
  {
    id: 6,
    title: "WildanInvites HQ",
    type: "Internal Tool / AppSheet",
    client: 'Internal Finance Dept.',
    desc: 'Internal management tool for cashflow tracking and P&L reporting automation.',
    stack: ['AppSheet','Google Sheet', 'Automation'],
    images: ['/cashflowhq.png'],
    link: null,
    github: null,
  }
])

// --- LOGIKA POPUP ---
const activeProject = ref(null)
const currentImageIndex = ref(0)

const openModal = (project) => {
  activeProject.value = project
  currentImageIndex.value = 0
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  activeProject.value = null
  document.body.style.overflow = 'auto'
}

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
                    <a v-if="item.github" :href="item.github" target="_blank" class="btn-secondary"><i class="ph ph-github-logo"></i> Repo</a>
                     <button class="btn-primary outline" @click="openModal(item)">View Details</button>
                </div>
            </div>
        </div>
    </div>

    <Transition name="fade">
      <div v-if="activeProject" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content glass-card">
          <button class="close-btn" @click="closeModal"><i class="ph ph-x"></i></button>

          <div class="modal-gallery-top">
            <div class="main-image-container">
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

          <div class="modal-details-bottom">
            
            <div class="modal-header-info">
                 <span class="modal-type-badge">{{ activeProject.type }}</span>
                 <h2>{{ activeProject.title }}</h2>
            </div>

            <p class="desc-full">{{ activeProject.desc }}</p>

            <div class="divider"></div>

             <div class="meta-section">
                <span class="meta-label">Built With:</span>
                <div class="tech-icons-colored">
                    <div v-for="t in activeProject.stack" :key="t" class="tech-item-color" 
                         :style="{ '--brand-color': getTechDetails(t).color }">
                        <i class="ph" :class="getTechDetails(t).icon"></i>
                        <span>{{ t }}</span>
                    </div>
                </div>
            </div>

            <div class="meta-section" v-if="activeProject.client">
                <span class="meta-label">Client / Order By:</span>
                <p class="client-name">{{ activeProject.client }}</p>
            </div>

            <div class="modal-actions footer-actions">
                <a v-if="activeProject.link" :href="activeProject.link" target="_blank" class="modal-btn primary">
                    <i class="ph ph-globe"></i> Visit Live Site
                </a>
                <a v-if="activeProject.github" :href="activeProject.github" target="_blank" class="modal-btn secondary">
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
/* --- GLOBAL UNGU VIXEL --- */
:root { --primary-color: #b084ff; }

.dev-container { padding: 40px 20px; min-height: 100vh; max-width: 1200px; margin: 0 auto; color: white; }

/* HEADER & LIST (Sama kayak sebelumnya, cuma tech stack dihapus) */
.dev-header { text-align: center; margin-bottom: 80px; display: flex; flex-direction: column; align-items: center; }
.header-text h1 { font-size: 3rem; margin: 15px 0; font-family: 'Clash Display', sans-serif; }
.header-text p { color: #aaa; }
.badge { border: 1px solid rgba(255,255,255,0.2); padding: 5px 12px; border-radius: 20px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; background: rgba(255,255,255,0.05); color: #aaa; }
.text-gradient { background: linear-gradient(to right, #ffffff, var(--primary-color)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.btn-back { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #aaa; font-size: 0.9rem; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); padding: 8px 15px; border-radius: 20px; transition: 0.3s; }
.btn-back:hover { background: rgba(255,255,255,0.1); color: white; }

.project-list { display: flex; flex-direction: column; gap: 100px; }
.project-row { display: flex; align-items: center; gap: 60px; }
.project-row.reverse { flex-direction: row-reverse; }

.project-image { flex: 1; position: relative; border-radius: 16px; overflow: hidden; transition: transform 0.3s ease; cursor: pointer; border: 1px solid rgba(255,255,255,0.1); }
.project-image:hover { transform: translateY(-5px); border-color: var(--primary-color); }
.browser-bar { height: 30px; background: rgba(0,0,0,0.5); display: flex; align-items: center; padding: 0 15px; gap: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #ff5f56; } .yellow { background: #ffbd2e; } .green { background: #27c93f; }
.project-image img { width: 100%; height: auto; display: block; object-fit: cover; }
.visit-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; opacity: 0; transition: 0.3s; }
.visit-overlay span { border: 1px solid white; padding: 10px 20px; border-radius: 30px; color: white; display: flex; align-items: center; gap: 10px; }
.project-image:hover .visit-overlay { opacity: 1; }

.project-info { flex: 0.8; text-align: left; }
.project-type { color: var(--primary-color); font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
.project-info h2 { font-size: 2.5rem; margin: 10px 0 20px; font-family: 'Clash Display', sans-serif; line-height: 1.1; }
.desc { color: #ccc; line-height: 1.6; margin-bottom: 25px; }
/* Tech stack luar dihapus */

.action-buttons { display: flex; gap: 15px; }
.btn-primary { background: white; color: black; padding: 10px 25px; border-radius: 50px; font-weight: bold; text-decoration: none; transition: 0.3s; display: flex; align-items: center; gap: 8px; border: none; cursor: pointer; }
.btn-primary:hover { background: #ccc; }
.btn-primary.outline { background: transparent; border: 1px solid white; color: white; }
.btn-primary.outline:hover { background: rgba(255,255,255,0.1); }
.btn-secondary { display: flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.3); color: white; padding: 10px 25px; border-radius: 50px; text-decoration: none; transition: 0.3s; }
.btn-secondary:hover { border-color: white; background: rgba(255,255,255,0.1); }

/* === 🔥 MODAL POPUP BARU (VERTIKAL) 🔥 === */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(10px); }
/* Ubah display jadi Flex Column untuk layout atas-bawah */
.modal-content { 
    width: 100%; max-width: 800px; max-height: 90vh; 
    background: #111; border: 1px solid rgba(255,255,255,0.2); 
    display: flex; flex-direction: column; /* KUNCI VERTIKAL */
    overflow: hidden; position: relative; border-radius: 20px; 
}
/* Tombol close jadi ungu pas hover */
.close-btn { position: absolute; top: 15px; right: 15px; background: rgba(0,0,0,0.5); border: none; color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; z-index: 10; font-size: 1.2rem; transition: 0.3s; }
.close-btn:hover { background: var(--primary-color); }

/* BAGIAN ATAS: GAMBAR */
.modal-gallery-top { background: #050505; padding: 20px; flex-shrink: 0; }
.main-image-container { position: relative; width: 100%; height: 350px; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); }
.main-img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
.slider-nav button { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); border: none; color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 1.5rem; transition: 0.3s; }
.slider-nav button:hover { background: var(--primary-color); }
.slider-nav button:first-child { left: 10px; } .slider-nav button:last-child { right: 10px; }
.thumbnails-row { display: flex; gap: 10px; overflow-x: auto; padding-top: 15px; justify-content: center; }
.thumbnails-row img { width: 60px; height: 45px; object-fit: cover; border-radius: 5px; cursor: pointer; opacity: 0.5; border: 2px solid transparent; transition: 0.3s; }
.thumbnails-row img.active { opacity: 1; border-color: var(--primary-color); }

/* BAGIAN BAWAH: DETAIL (Scrollable) */
.modal-details-bottom { padding: 30px; overflow-y: auto; display: flex; flex-direction: column; gap: 20px; flex-grow: 1; }
.modal-header-info { text-align: left; }
.modal-type-badge { display: inline-block; background: rgba(176, 132, 255, 0.1); color: var(--primary-color); padding: 5px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px; }
.modal-details-bottom h2 { font-size: 2.2rem; font-family: 'Clash Display'; line-height: 1.1; margin: 0; }
.desc-full { color: #ccc; line-height: 1.7; font-size: 1rem; white-space: pre-line; }
.divider { height: 1px; background: rgba(255,255,255,0.1); width: 100%; }

/* 🔥 META SECTION (Built With & Client) 🔥 */
.meta-section { display: flex; flex-direction: column; gap: 10px; }
.meta-label { font-size: 0.9rem; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
.client-name { font-size: 1.1rem; font-weight: 500; color: white; }

/* IKON TECH STACK BERWARNA */
.tech-icons-colored { display: flex; flex-wrap: wrap; gap: 12px; }
.tech-item-color {
    /* Pake variabel CSS biar warnanya dinamis sesuai brand */
    background: linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
    border: 1px solid rgba(255,255,255,0.1);
    padding: 8px 15px; border-radius: 30px; font-size: 0.9rem; 
    display: flex; align-items: center; gap: 8px;
    transition: 0.3s; color: #ccc;
}
/* Saat hover, warnanya nyala sesuai brand color */
.tech-item-color:hover {
    border-color: var(--brand-color);
    color: var(--brand-color);
    background: rgba(0,0,0,0.3);
    box-shadow: 0 0 15px var(--brand-color); /* Efek glow */
}
.tech-item-color i { font-size: 1.2rem; color: var(--brand-color); /* Ikon selalu berwarna */ }

.footer-actions { margin-top: auto; padding-top: 20px; }
.modal-btn { flex: 1; padding: 15px; text-align: center; border-radius: 10px; text-decoration: none; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 10px; transition: 0.3s; }
.modal-btn.primary { background: var(--primary-color); color: white; border: none; }
.modal-btn.primary:hover { background: white; color: black; }
.modal-btn.secondary { border: 1px solid rgba(255,255,255,0.3); color: white; }
.modal-btn.secondary:hover { border-color: white; background: rgba(255,255,255,0.1); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 900px) {
    .project-row { flex-direction: column !important; gap: 30px; }
    .project-image { width: 100%; }
    .project-info { width: 100%; text-align: left; }
    .modal-content { max-height: 95vh; }
    .main-image-container { height: 250px; }
}
</style>