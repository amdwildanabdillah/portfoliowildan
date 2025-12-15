<script setup>
import { ref } from 'vue'

const videos = ref([
  // 1. BEHANCE (JADI LINK - BIAR RAPI)
  { 
    type: 'link',                 // <--- Kita set 'link' aja biar gak maksa embed
    id: 'https://www.behance.net/gallery/194103791/UPEKSHA', // Link Lengkap
    title: 'UPEKSHA Project', 
    category: 'BEHANCE • UI/UX' 
  },

  // 2. YOUTUBE (TETAP EMBED - KARENA BAGUS)
  { 
    type: 'youtube', 
    id: 'gDOdVnRsZ0E', 
    title: 'Cinematic Vlog', 
    category: 'COMPETITION' 
  },

  // 3. GOOGLE DRIVE (TETAP EMBED)
  { 
    type: 'drive', 
    id: '1X6jOYJeLK8weWPDFBSZRODS5Ue3bwjgl', 
    title: 'PT. SAMPOERNA Tbk.', 
    category: 'AFTER MOVIE' 
  },

  { 
    type: 'youtube', 
    id: 'vDXaoQyCoAs', 
    title: 'DUA SISI', 
    category: 'SHORT MOVIE' 
  },
])

// --- MESIN PINTAR ---
const getSrc = (video) => {
  if (video.type === 'youtube') return `https://www.youtube.com/embed/${video.id}`
  if (video.type === 'drive') return `https://drive.google.com/file/d/${video.id}/preview`
  return video.id
}
</script>

<template>
  <div class="ambient-glow glow-purple"></div>

  <div class="cinema-container">
    <header class="cinema-header">
        <router-link to="/" class="btn-back">
            <i class="ph ph-arrow-left"></i> Kembali ke Home
        </router-link>
        
        <div class="header-text">
            <span class="badge">PRO GALLERY</span>
            <h1>My <span class="text-gradient">Portfolio</span></h1>
            <p>Curated works from YouTube, Behance, and Drive.</p>
        </div>
    </header>

    <div class="fixed-grid-wrapper">
        <div v-for="(video, index) in videos" :key="index" class="glass-card video-card-fixed">
            
            <div v-if="video.type === 'link'" class="link-wrapper">
                <a :href="video.id" target="_blank" class="link-btn">
                    <i class="ph ph-behance-logo icon-big"></i>
                    <span>View on Behance</span>
                    <i class="ph ph-arrow-up-right icon-small"></i>
                </a>
            </div>

            <div v-else class="video-wrapper">
                <iframe 
                    :src="getSrc(video)" 
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowfullscreen
                    frameborder="0">
                </iframe>
            </div>

            <div class="card-info">
                <div class="info-top">
                    <h3>{{ video.title }}</h3>
                    <i v-if="video.type === 'youtube'" class="ph ph-youtube-logo logo-yt"></i>
                    <i v-if="video.type === 'drive'" class="ph ph-google-drive-logo logo-drive"></i>
                    <i v-if="video.type === 'link'" class="ph ph-behance-logo logo-be"></i>
                </div>
                <p>{{ video.category }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
/* Container & Header */
.cinema-container { padding: 40px; min-height: 100vh; color: white; display: flex; flex-direction: column; align-items: center; }
.cinema-header { text-align: center; margin-bottom: 50px; width: 100%; max-width: 800px; }
.header-text h1 { font-size: 3rem; margin: 10px 0; font-family: 'Clash Display', sans-serif; }
.text-gradient { background: linear-gradient(to right, #ffffff, #b084ff); -webkit-background-clip: text; background-clip: text; color: transparent; }
.badge { border: 1px solid rgba(255,255,255,0.2); padding: 5px 12px; border-radius: 20px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; background: rgba(255,255,255,0.05); color: #aaa; }

.btn-back { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #aaa; font-size: 0.9rem; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); padding: 8px 15px; border-radius: 20px; transition: 0.3s; }
.btn-back:hover { background: rgba(255,255,255,0.1); color: white; }

/* GRID SYSTEM (FIXED & RAPI) */
.fixed-grid-wrapper { display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; width: 100%; max-width: 1200px; }

/* KARTU FIX SIZE (SEMUA SAMA RATA) */
.video-card-fixed { 
    width: 320px !important; 
    flex: 0 0 auto !important; 
    background: rgba(20, 20, 20, 0.6); 
    border: 1px solid rgba(255, 255, 255, 0.1); 
    border-radius: 16px; 
    overflow: hidden; 
    transition: transform 0.3s; 
    display: flex; flex-direction: column; 
}
.video-card-fixed:hover { transform: translateY(-10px); border-color: rgba(176, 132, 255, 0.5); }

/* --- 1. MODE LINK (BEHANCE) --- */
.link-wrapper {
    width: 100%;
    /* Rasio 16:9 juga biar SAMA PERSIS kayak YouTube */
    aspect-ratio: 16/9; 
    background: linear-gradient(135deg, #053eff 0%, #000000 100%); /* Warna Behance Style */
    display: flex; align-items: center; justify-content: center;
}
.link-btn {
    display: flex; flex-direction: column; align-items: center; gap: 10px;
    text-decoration: none; color: white; transition: 0.3s; opacity: 0.8;
}
.link-btn:hover { opacity: 1; transform: scale(1.05); }
.icon-big { font-size: 3rem; }
.icon-small { font-size: 1rem; margin-top: 5px; }

/* --- 2. MODE VIDEO (YT/DRIVE) --- */
.video-wrapper { 
    position: relative; 
    width: 100%; 
    padding-bottom: 56.25%; /* 16:9 Standard */
    height: 0; background: #000; 
}
.video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

/* INFO */
.card-info { padding: 20px; text-align: left; }
.info-top { display: flex; justify-content: space-between; align-items: center; }
.card-info h3 { font-size: 1.1rem; color: #fff; margin: 0; max-width: 85%; }
.card-info p { font-size: 0.75rem; color: #888; margin-top: 5px; }
.logo-yt { color: #ff0000; font-size: 1.2rem; }
.logo-drive { color: #00d2ff; font-size: 1.2rem; }
.logo-be { color: #0057ff; font-size: 1.2rem; }

/* GLOW */
.ambient-glow { position: fixed; width: 500px; height: 500px; border-radius: 50%; filter: blur(120px); z-index: -1; opacity: 0.4; pointer-events: none; }
.glow-purple { top: -100px; right: -100px; background: rgba(120, 58, 255, 0.2); }
</style>