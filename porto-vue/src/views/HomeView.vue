<script setup>
import { onMounted, onBeforeUnmount } from 'vue'

let cleanups = []

onMounted(() => {
  // --- MAGNETIC BUTTON ---
  const buttons = document.querySelectorAll('.magnetic-btn')

  buttons.forEach((btn) => {
    const strength = 0.5

    const onMove = (e) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }

    const onLeave = () => {
      btn.style.transform = 'translate(0px, 0px)'
    }

    btn.addEventListener('mousemove', onMove)
    btn.addEventListener('mouseleave', onLeave)

    cleanups.push(() => {
      btn.removeEventListener('mousemove', onMove)
      btn.removeEventListener('mouseleave', onLeave)
    })
  })

  // --- OPTIONAL: Smooth Scroll untuk anchor (#...) ---
  const anchors = document.querySelectorAll('a[href^="#"]')
  anchors.forEach((a) => {
    const onClick = (e) => {
      const id = a.getAttribute('href')
      const target = id ? document.querySelector(id) : null
      if (!target) return

      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth' })
    }

    a.addEventListener('click', onClick)
    cleanups.push(() => a.removeEventListener('click', onClick))
  })
})

onBeforeUnmount(() => {
  cleanups.forEach((fn) => fn())
  cleanups = []
})
</script>

<template>
  <div class="ambient-glow glow-purple"></div>
  <div class="ambient-glow glow-cyan"></div>

  <nav class="glass-nav">
    <div class="logo">WILDAN.</div>
    <ul>
      <li><a href="#work">Work</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="pricelist">Pricelist</a></li>
      <li><a href="#contact" class="btn-hire">Let's Connect</a></li>
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
          <h2>Hi, I'm Wildan.</h2>
          <p>
            I bridge the gap between human connection and digital experience.
            As a Communication student passionate about UI/UX and Front-end Development, I don't just tell stories—I build the platforms where they live. Transforming complex ideas into intuitive, visually stunning realities.
          </p>

          <div class="stats">
            <div class="stat-box">
              <h3>3+</h3>
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
              <img src="../assets/IMG_20251213_175009.jpg" alt="Profile" class="profile-pic" />
              <h3>Wildan</h3>
              <p>@idan_abdll</p>
              <div class="barcode">*HIRE ME*</div>
            </div>
          </div>
        </div>
      </div>

      <router-link to="/cinematography" class="card glass-card item-main clickable-card">
    <div class="card-bg" style="background-image: url('https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=800');"></div>
    <div class="card-content">
        <span class="tag">Cinematography</span>
        <h3>Videography Project</h3>
    </div>
</router-link>

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
          <a href="https://instagram.com/caramellattteeeee_" target="_blank" class="magnetic-btn">
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

</style>
