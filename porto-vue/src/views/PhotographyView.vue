<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// DATA PROJECT FOTO
// thumbnail: Foto yang muncul di depan (Cover)
// gallery: Kumpulan foto lengkap di project itu (muncul pas diklik)
const projects = ref([
  {
    id: 1,
    title: 'Behind the Scene',
    category: 'PROFILE',
    thumbnail: '/me7.jpg',
    gallery: [
      '/me6.jpg',
      '/me5.jpg',
      '/me8.jpg',
      '/me3.jpg'
    ]
  },
  {
    id: 2,
    title: 'Wedding Stories',
    category: 'WEDDING',
    thumbnail: '/wed-cov.jpg',
    caption: 'Two souls, one promise. Capturing the sacred vows of eternal love.',
    gallery: [
      '/wed1.jpg',
      '/wed2.jpg'
    ]
  },
  {
    id: 3,
    title: 'LMLS',
    category: 'COLLABORATION',
    thumbnail: '/LMLS-2.jpg',
    gallery: [
      '/LMLS-1.jpg',
      '/LMLS-3.jpg',
      '/LMLS-4.jpg',
      '/LMLS-5.jpg'
    ]
  },
  {
    id: 4,
    title: 'Life Lately',
    category: 'JOURNAL',
    thumbnail: '/livin1.jpg',
    caption: 'Fragments of time, gasoline, caffeine, and stories in between.',
    gallery: [
      '/livin3.jpg',
      '/livin10.jpg',
      '/livin11.jpg',
      '/livin4.jpg',
      '/livin5.jpg',
      '/livin7.jpg'
    ]
  },
])

// --- LOGIKA LIGHTBOX (POP-UP) ---
const isModalOpen = ref(false)
const currentProject = ref(null)
const currentImageIndex = ref(0)

// Buka Modal
const openModal = (project) => {
  currentProject.value = project
  currentImageIndex.value = 0 // Mulai dari foto pertama
  isModalOpen.value = true
  document.body.style.overflow = 'hidden' // Kunci scroll belakang
}

// Tutup Modal
const closeModal = () => {
  isModalOpen.value = false
  currentProject.value = null
  document.body.style.overflow = 'auto' // Buka kunci scroll
}

// Geser Foto (Next/Prev)
const nextImage = () => {
  if (!currentProject.value) return
  if (currentImageIndex.value < currentProject.value.gallery.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0 // Loop balik ke awal
  }
}

const prevImage = () => {
  if (!currentProject.value) return
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = currentProject.value.gallery.length - 1 // Loop ke akhir
  }
}

// Keyboard Support (Panah Kiri/Kanan & Esc)
const handleKeydown = (e) => {
  if (!isModalOpen.value) return
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div class="ambient-glow glow-purple"></div>
  <div class="ambient-glow glow-cyan"></div>

  <div class="photo-container">

    <header class="photo-header">
        <router-link to="/" class="btn-back">
            <i class="ph ph-arrow-left"></i> Kembali ke Home
        </router-link>

        <div class="header-text">
            <span class="badge">PRO GALLERY</span>
            <h1>Through My <span class="text-gradient">Lens</span></h1>
            <p>Klik foto untuk melihat album lengkap.</p>
        </div>
    </header>

    <div class="masonry-grid">
        <div
          v-for="project in projects"
          :key="project.id"
          class="photo-card glass-card"
          @click="openModal(project)"
        >
            <div class="img-wrapper">
                <img :src="project.thumbnail" :alt="project.title" loading="lazy" />
                <div class="overlay">
                    <div class="overlay-text">
    <h3>{{ project.title }}</h3>

    <p v-if="project.caption" class="caption-text">
      "{{ project.caption }}"
    </p>

    <p class="meta">
      {{ project.category }} • {{ project.gallery.length }} Photos
      <i class="ph ph-images-square"></i>
    </p>
</div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="isModalOpen" class="lightbox-overlay" @click.self="closeModal">

      <button class="close-btn" @click="closeModal">
        <i class="ph ph-x"></i>
      </button>

      <div class="lightbox-content">
        <button v-if="currentProject.gallery.length > 1" class="nav-btn prev" @click.stop="prevImage">
          <i class="ph ph-caret-left"></i>
        </button>

        <div class="image-display">
          <img :src="currentProject.gallery[currentImageIndex]" alt="Full View" />
          <div class="image-info">
            <h3>{{ currentProject.title }}</h3>
            <p>{{ currentImageIndex + 1 }} / {{ currentProject.gallery.length }}</p>
          </div>
        </div>

        <button v-if="currentProject.gallery.length > 1" class="nav-btn next" @click.stop="nextImage">
          <i class="ph ph-caret-right"></i>
        </button>
      </div>

    </div>

  </div>
</template>

<style scoped>
/* BACKGROUND UTAMA */
.photo-container { padding: 40px; min-height: 100vh; color: white; }

/* HEADER */
.photo-header { text-align: center; margin-bottom: 60px; display: flex; flex-direction: column; align-items: center; }
.header-text h1 { font-size: 3rem; margin: 15px 0; font-family: 'Clash Display', sans-serif; }
.header-text p { color: #aaa; }
.badge { border: 1px solid rgba(255,255,255,0.2); padding: 5px 12px; border-radius: 20px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; background: rgba(255,255,255,0.05); color: #aaa; }
.text-gradient { background: linear-gradient(to right, #ffffff, #b084ff); -webkit-background-clip: text; background-clip: text; color: transparent; }

/* TOMBOL KEMBALI */
.btn-back { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #aaa; font-size: 0.9rem; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); padding: 8px 15px; border-radius: 20px; transition: 0.3s; }
.btn-back:hover { background: rgba(255,255,255,0.1); color: white; }

/* === 🔥 MASONRY LAYOUT (PINTEREST STYLE) 🔥 === */
.masonry-grid {
    display: block;      /* Matikan grid bawaan */
    column-count: 3;     /* Desktop: 3 Kolom */
    column-gap: 24px;    /* Jarak antar kolom */
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.photo-card {
    /* PENTING: Supaya kartu gak kepotong di tengah */
    break-inside: avoid;
    margin-bottom: 24px;
    
    /* Style Kartu Kaca */
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    background: rgba(20, 20, 20, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
}

/* Caption Aesthetic */
.caption-text {
    font-style: italic;
    font-size: 0.85rem !important; /* Lebih kecil dari judul */
    color: #ddd !important;
    margin-bottom: 5px !important;
    font-weight: 300;
    max-width: 90%;
}

/* Biar info Category gak nempel banget */
.meta {
    margin-top: 5px;
    font-size: 0.7rem !important;
    opacity: 0.8;
}

.photo-card:hover { 
    transform: translateY(-5px); 
    border-color: rgba(176, 132, 255, 0.5); 
}

/* GAMBAR NO-CROP (UTUH) */
.photo-card img {
    width: 100%;
    height: auto !important; /* KUNCI: Tinggi menyesuaikan gambar asli */
    display: block;
    object-fit: cover;
}

/* OVERLAY HOVER (Gelap dikit pas di-hover) */
.overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    opacity: 0; transition: opacity 0.3s ease; display: flex; align-items: flex-end; padding: 20px;
}
.photo-card:hover .overlay { opacity: 1; }
.overlay-text h3 { margin: 0; font-size: 1.1rem; color: white; }
.overlay-text p { margin: 5px 0 0; font-size: 0.75rem; color: #ccc; letter-spacing: 1px; display: flex; align-items: center; gap: 5px;}

/* === LIGHTBOX (POP-UP) === */
.lightbox-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.95); z-index: 9999; display: flex; justify-content: center; align-items: center; backdrop-filter: blur(10px); }
.lightbox-content { position: relative; width: 90%; max-width: 1000px; height: 80%; display: flex; justify-content: center; align-items: center; }
.image-display img { max-width: 100%; max-height: 80vh; border-radius: 8px; box-shadow: 0 0 30px rgba(0,0,0,0.5); display: block; margin: 0 auto; }
.image-info { text-align: center; margin-top: 15px; color: #fff; }
.close-btn { position: absolute; top: 30px; right: 30px; background: none; border: none; color: white; font-size: 2rem; cursor: pointer; z-index: 10000; }
.nav-btn { background: rgba(255,255,255,0.1); border: none; color: white; width: 50px; height: 50px; border-radius: 50%; font-size: 1.5rem; cursor: pointer; transition: 0.3s; display: flex; align-items: center; justify-content: center; position: absolute; top: 50%; transform: translateY(-50%); }
.nav-btn:hover { background: white; color: black; }
.prev { left: -70px; } .next { right: -70px; }

/* === RESPONSIVE (HP & TABLET) === */
@media (max-width: 768px) {
  /* 1. Layout Masonry (Tablet 2 Kolom) */
  .masonry-grid { column-count: 2; }

  /* 2. Navigasi Lightbox (Pindah ke Bawah biar gampang dipencet jempol) */
  .nav-btn { position: fixed; bottom: 30px; top: auto; transform: none; }
  .prev { left: 30px; } .next { right: 30px; }

  /* 3. 🔥 FIX: TEXT SELALU MUNCUL DI HP (NO HOVER) 🔥 */
  .overlay {
    opacity: 1 !important; /* Paksa muncul terus */
    /* Kasih background gradasi hitam biar tulisan kebaca jelas */
    background: linear-gradient(to top, rgba(0,0,0,0.9) 15%, rgba(0,0,0,0.4) 60%, transparent 100%);
    padding-bottom: 15px; 
  }

  /* Kecilin font judul dikit biar gak menuhi layar HP */
  .overlay-text h3 {
    font-size: 1rem;
    margin-bottom: 2px;
  }

  /* Caption dikecilin dikit */
  .caption-text {
    font-size: 0.75rem !important;
    margin: 2px 0 !important;
    display: block; /* Pastikan muncul */
  }

  /* Info kategori */
  .meta {
    font-size: 0.65rem !important;
    opacity: 0.9;
  }
}

@media (max-width: 600px) { 
  /* HP Kecil jadi 1 kolom antri ke bawah */
  .masonry-grid { column-count: 1; } 
}

/* GLOW BACKGROUND (TETAP DIPAKAI) */
.ambient-glow { position: fixed; width: 500px; height: 500px; border-radius: 50%; filter: blur(120px); z-index: -1; opacity: 0.4; pointer-events: none; }
.glow-purple { top: -100px; right: -100px; background: rgba(120, 58, 255, 0.2); }
.glow-cyan { bottom: -100px; left: -100px; background: rgba(0, 255, 209, 0.2); }
</style>