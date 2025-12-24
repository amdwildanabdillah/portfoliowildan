<script setup>
import { ref } from 'vue'

// DATA PROJECT WEB & APPSHEET
const devProjects = ref([
  {
    id: 1,
    title: 'Storydesto',
    type: 'Marketplace Platform',
    desc: 'A digital marketplace connecting photography vendors with clients. Features a Smart Booking System, integrated Payment Gateway, and a comprehensive Admin Dashboard to streamline visual service transactions.',
    stack: ['Laravel', 'Vue.js', 'MySQL', 'Bootstrap'], // Tech Stack
    image: '/coverdesto.png', // Nanti ganti screenshot webnya
    link: 'https://portfolio-storydesto.netlify.app/', // Link asli (kalau ada)
    github: 'https://github.com/amdwildanabdillah/storydesto' // Link repo
  },
  {
    id: 2,
    title: "Wildan's Portfolio",
    type: 'Frontend Development',
    desc: 'An interactive portfolio featuring a modern Glassmorphism design. Built with Vue.js as a Single Page Application (SPA) to deliver a fast, smooth, and fully responsive user experience across all devices.',
    stack: ['Vue.js', 'HTML', 'CSS'],
    image: '/webwildan.png', // Nanti ganti screenshot HP
    link: 'https://portfoliowildan.my.id/', // Link asli (kalau ada)
    github: 'https://github.com/amdwildanabdillah/amdwildanabdillah.github.io' // AppSheet biasanya gak ada github
  },
  {
    id: 3,
    title: "D'Production Surabaya",
    type: 'Company Profile',
    desc: 'Official landing page for a creative production house. Designed to professionally showcase video showreels, detail services, and enhance brand credibility with an elegant layout and SEO optimization.',
    stack: ['HTML', 'CSS', 'Javascript'],
    image: '/dproduction.png',
    link: 'https://dproductionsub.netlify.app/',
    github: 'https://github.com/amdwildanabdillah/dproductionsub'
  },
  {
    id: 4,
    title: "Invitation Kit",
    type: 'Digital Asset',
    desc: 'A highly customizable digital invitation template. Built for speed and aesthetic with smooth animations, RSVP integration, and mobile-first responsive layout.',
    stack: ['Vue.js','HTML','Tailwindcss'],
    image: '/wedinvite.png',
    link: 'https://wedding-invitation-wildan.vercel.app/',
    github: null,
  },
  {
    id: 5,
    title: "VIXEL CREAIVE",
    type: 'Company Profile',
    desc: 'Official landing page for a creative Web Dev adn AppSheet Solution. Designed professionally showcase projects,detail service, and enhance brand credibility with an elegant layout and SEO optimization.',
    stack: ['Vue.js','Vite','Tailwind CSS','Framer Motion'],
    image: '/vixel.png',
    link: 'https://vixelcreative.my.id/',
    github: null,
  },
  {
    id: 6,
    title: "WildanInvites HQ (Cashflow App)",
    type: "Appsheet Development / Internal Tool",
    desc: "A dedicated internal management tool for WildanInvites, built with AppSheet. It features a robust cashflow tracking system, automated profit/loss reporting (P&L), and expense monitoring—including domain and landing page costs—to ensure healthy business scalability.",
    stack: ['AppSheet','Google Sheet', 'Automation'],
    image: '/cashflowhq.png',
    link: null,
    github: null,
  }
])
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

        <div
            v-for="(item, index) in devProjects"
            :key="item.id"
            class="project-row"
            :class="{ 'reverse': index % 2 !== 0 }"
        >
            <div class="project-image glass-card">
                <div class="browser-bar">
                    <div class="dot red"></div>
                    <div class="dot yellow"></div>
                    <div class="dot green"></div>
                </div>
                <img :src="item.image" :alt="item.title" />

                <a v-if="item.link !== '#'" :href="item.link" target="_blank" class="visit-overlay">
                    <span>Visit Site <i class="ph ph-arrow-up-right"></i></span>
                </a>
            </div>

            <div class="project-info">
                <span class="project-type">{{ item.type }}</span>
                <h2>{{ item.title }}</h2>
                <p class="desc">{{ item.desc }}</p>

                <div class="tech-stack">
                    <span v-for="tech in item.stack" :key="tech" class="tech-tag">
                        # {{ tech }}
                    </span>
                </div>

                <div class="action-buttons">
                    <a v-if="item.github" :href="item.github" target="_blank" class="btn-secondary">
                        <i class="ph ph-github-logo"></i> Repository
                    </a>
                </div>
            </div>
        </div>

    </div>

  </div>
</template>

<style scoped>
.dev-container { padding: 40px 20px; min-height: 100vh; max-width: 1200px; margin: 0 auto; color: white; }

/* HEADER */
.dev-header { text-align: center; margin-bottom: 80px; display: flex; flex-direction: column; align-items: center; }
.header-text h1 { font-size: 3rem; margin: 15px 0; font-family: 'Clash Display', sans-serif; }
.header-text p { color: #aaa; }
.badge { border: 1px solid rgba(255,255,255,0.2); padding: 5px 12px; border-radius: 20px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; background: rgba(255,255,255,0.05); color: #aaa; }
.text-gradient { background: linear-gradient(to right, #ffffff, #b084ff); -webkit-background-clip: text; background-clip: text; color: transparent; }
.btn-back { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #aaa; font-size: 0.9rem; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); padding: 8px 15px; border-radius: 20px; transition: 0.3s; }
.btn-back:hover { background: rgba(255,255,255,0.1); color: white; }

/* === PROJECT LIST === */
.project-list { display: flex; flex-direction: column; gap: 100px; }

.project-row {
    display: flex; align-items: center; gap: 60px;
}
/* Kunci Zig-Zag: Kalau index ganjil, urutannya dibalik */
.project-row.reverse { flex-direction: row-reverse; }

/* 1. PROJECT IMAGE (Mockup Browser) */
.project-image {
    flex: 1;
    position: relative;
    border-radius: 16px; overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
}
.project-image:hover { transform: translateY(-5px); border-color: #b084ff; }

.browser-bar {
    height: 30px; background: rgba(0,0,0,0.5); display: flex; align-items: center; padding: 0 15px; gap: 8px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
}
.dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #ff5f56; } .yellow { background: #ffbd2e; } .green { background: #27c93f; }

.project-image img { width: 100%; height: auto; display: block; object-fit: cover; }

/* Hover Effect: Visit Site */
.visit-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: 0.3s; text-decoration: none;
}
.visit-overlay span {
    border: 1px solid white; padding: 10px 20px; border-radius: 30px; color: white;
}
.project-image:hover .visit-overlay { opacity: 1; }


/* 2. PROJECT INFO */
.project-info { flex: 0.8; text-align: left; }

.project-type { color: #b084ff; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
.project-info h2 { font-size: 2.5rem; margin: 10px 0 20px; font-family: 'Clash Display', sans-serif; line-height: 1.1; }
.desc { color: #ccc; line-height: 1.6; margin-bottom: 25px; }

/* Tech Stack Tags */
.tech-stack { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 30px; }
.tech-tag {
    background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 8px;
    font-size: 0.8rem; color: #aaa; border: 1px solid rgba(255,255,255,0.1); font-family: monospace;
}

/* Buttons */
.action-buttons { display: flex; gap: 15px; }
.btn-primary {
    background: white; color: black; padding: 10px 25px; border-radius: 50px; font-weight: bold; text-decoration: none; transition: 0.3s;
}
.btn-primary:hover { background: #ccc; }

.btn-secondary {
    display: flex; align-items: center; gap: 8px;
    border: 1px solid rgba(255,255,255,0.3); color: white; padding: 10px 25px; border-radius: 50px; text-decoration: none; transition: 0.3s;
}
.btn-secondary:hover { border-color: white; background: rgba(255,255,255,0.1); }

/* RESPONSIVE */
@media (max-width: 900px) {
    .project-row { flex-direction: column !important; gap: 30px; } /* Selalu tumpuk di HP */
    .project-image { width: 100%; }
    .project-info { width: 100%; text-align: left; }
    .header-text h1 { font-size: 2.5rem; }
}

/* GLOW */
.ambient-glow { position: fixed; width: 500px; height: 500px; border-radius: 50%; filter: blur(120px); z-index: -1; opacity: 0.4; pointer-events: none; }
.glow-purple { top: -100px; right: -100px; background: rgba(120, 58, 255, 0.2); }
.glow-cyan { bottom: -100px; left: -100px; background: rgba(0, 255, 209, 0.2); }
</style>
