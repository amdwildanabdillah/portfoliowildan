<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// DATA PROJECT FOTO
// thumbnail: Foto yang muncul di depan (Cover)
// gallery: Kumpulan foto lengkap di project itu (muncul pas diklik)
const projects = ref([
  {
    id: 1,
    title: 'Wedding: Ilham & Hana',
    category: 'COUPLE',
    thumbnail: 'src/assets/wed-cov.jpg',
    gallery: [
      'src/assets/wed1.jpg',
      'src/assets/wed2.jpg',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200'
    ]
  },
  {
    id: 2,
    title: 'Bromo Mountain Trip',
    category: 'LANDSCAPE',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200',
      'https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=1200'
    ]
  },
  {
    id: 3,
    title: 'Urban Street',
    category: 'STREET',
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200'
    ]
  },
  {
    id: 4,
    title: 'Product: Coffee',
    category: 'COMMERCIAL',
    thumbnail: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200'
    ]
  },
  {
    id: 5,
    title: 'Minimalist Architecture',
    category: 'ARCHITECTURE',
    thumbnail: 'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?q=80&w=1200',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200'
    ]
  },
  {
    id: 6,
    title: 'Tech Workspace',
    category: 'SETUP',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200'
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
                        <p>
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
/* BACKGROUND */
.photo-container { padding: 40px; min-height: 100vh; color: white; }

/* HEADER */
.photo-header { text-align: center; margin-bottom: 60px; display: flex; flex-direction: column; align-items: center; }
.header-text h1 { font-size: 3rem; margin: 15px 0; font-family: 'Clash Display', sans-serif; }
.header-text p { color: #aaa; }
.badge { border: 1px solid rgba(255,255,255,0.2); padding: 5px 12px; border-radius: 20px; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; background: rgba(255,255,255,0.05); color: #aaa; }
.text-gradient { background: linear-gradient(to right, #ffffff, #b084ff); -webkit-background-clip: text; background-clip: text; color: transparent; }

.btn-back { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #aaa; font-size: 0.9rem; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); padding: 8px 15px; border-radius: 20px; transition: 0.3s; }
.btn-back:hover { background: rgba(255,255,255,0.1); color: white; }

/* === MASONRY LAYOUT === */
.masonry-grid {
    column-count: 3; column-gap: 20px; width: 100%; max-width: 1200px; margin: 0 auto;
}
.photo-card {
    break-inside: avoid; margin-bottom: 20px; border-radius: 16px; overflow: hidden;
    position: relative; cursor: pointer; transition: transform 0.3s ease; border: 1px solid rgba(255,255,255,0.1);
}
.photo-card:hover { transform: translateY(-5px); border-color: rgba(176, 132, 255, 0.5); }
.img-wrapper img { width: 100%; height: auto; display: block; transition: transform 0.5s ease; }
.photo-card:hover img { transform: scale(1.05); }

/* Overlay Thumbnail */
.overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    opacity: 0; transition: opacity 0.3s ease; display: flex; align-items: flex-end; padding: 20px;
}
.photo-card:hover .overlay { opacity: 1; }
.overlay-text h3 { margin: 0; font-size: 1.1rem; color: white; }
.overlay-text p { margin: 5px 0 0; font-size: 0.75rem; color: #ccc; letter-spacing: 1px; display: flex; align-items: center; gap: 5px;}

/* === LIGHTBOX STYLES (POP-UP) === */
.lightbox-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.95); z-index: 9999;
  display: flex; justify-content: center; align-items: center;
  backdrop-filter: blur(10px);
}

.lightbox-content {
  position: relative; width: 90%; max-width: 1000px; height: 80%;
  display: flex; justify-content: center; align-items: center;
}

.image-display {
  position: relative; max-width: 100%; max-height: 100%;
}
.image-display img {
  max-width: 100%; max-height: 80vh; border-radius: 8px;
  box-shadow: 0 0 30px rgba(0,0,0,0.5);
  display: block; margin: 0 auto;
}
.image-info {
  text-align: center; margin-top: 15px; color: #fff;
}
.image-info h3 { font-size: 1.2rem; margin-bottom: 5px; }
.image-info p { color: #888; font-size: 0.9rem; }

/* Buttons */
.close-btn {
  position: absolute; top: 30px; right: 30px; background: none; border: none;
  color: white; font-size: 2rem; cursor: pointer; z-index: 10000;
}
.nav-btn {
  background: rgba(255,255,255,0.1); border: none; color: white;
  width: 50px; height: 50px; border-radius: 50%;
  font-size: 1.5rem; cursor: pointer; transition: 0.3s;
  display: flex; align-items: center; justify-content: center;
  position: absolute; top: 50%; transform: translateY(-50%);
}
.nav-btn:hover { background: white; color: black; }
.prev { left: -70px; }
.next { right: -70px; }

/* Responsive Lightbox */
@media (max-width: 768px) {
  .nav-btn { position: fixed; bottom: 30px; top: auto; transform: none; }
  .prev { left: 30px; } .next { right: 30px; }
  .image-display img { max-height: 60vh; }
  .masonry-grid { column-count: 2; }
}
@media (max-width: 600px) { .masonry-grid { column-count: 1; } }

/* GLOW */
.ambient-glow { position: fixed; width: 500px; height: 500px; border-radius: 50%; filter: blur(120px); z-index: -1; opacity: 0.4; pointer-events: none; }
.glow-purple { top: -100px; right: -100px; background: rgba(120, 58, 255, 0.2); }
.glow-cyan { bottom: -100px; left: -100px; background: rgba(0, 255, 209, 0.2); }
</style>
