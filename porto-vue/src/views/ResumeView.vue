<script setup>
// Fungsi buat Print ke PDF
const printResume = () => {
    window.print()
}
</script>

<template>
  <div class="resume-wrapper">
    <div class="action-bar no-print">
        <router-link to="/" class="back-btn">← Back to Home</router-link>
        <button @click="printResume" class="download-btn">
            <i class="ph ph-download-simple"></i> Download PDF
        </button>
    </div>

    <div class="resume-paper">
        <header class="resume-header">
            <div class="header-main">
                <div class="photo-container">
                    <img src="../assets/IMG_20251213_175009.jpg" alt="Wildan Profile" class="resume-pic">
                </div>

                <div class="header-info">
                    <h1>AHMAD WILDAN ABDILLAH</h1>
                    <p class="subtitle">Full Stack Creative | Web Dev & Videographer</p>
                </div>
            </div>

            <div class="header-contact">
                <p>📍 Surabaya, Indonesia</p>
                <p>📧 amd.wildanabdillah@gmail.com</p>
                <p>🌐 portfoliowildan.my.id</p>
            </div>
        </header>

        <hr class="divider">

        <div class="resume-body">
            <div class="main-column">

                <section>
                    <h3><i class="ph ph-user"></i> Professional Summary</h3>
                    <p class="justified">
                        Creative technologist with a unique background in <b>Islamic Broadcasting Communication</b>, bridging the gap between visual storytelling and functional code. Experienced in end-to-end video production and modern web development (Vue.js & Laravel). Passionate about building intuitive digital experiences.
                    </p>
                </section>

                <section>
                    <h3><i class="ph ph-briefcase"></i> Selected Projects</h3>

                    <div class="job-item">
                        <div class="job-head">
                            <h4>Storydesto (Marketplace)</h4>
                            <span class="year">Full Stack Dev</span>
                        </div>
                        <p class="stack-used">Laravel • Vue.js • MySQL</p>
                        <ul>
                            <li>Engineered a marketplace connecting photography vendors with clients.</li>
                            <li>Implemented Smart Booking System & Payment Gateway.</li>
                        </ul>
                    </div>

                    <div class="job-item">
                        <div class="job-head">
                            <h4>Personal Interactive Portfolio</h4>
                            <span class="year">Frontend Dev</span>
                        </div>
                        <p class="stack-used">Vue.js • Vite • Glassmorphism UI</p>
                        <ul>
                            <li>Designed a SPA website with modern aesthetic and hash-mode routing for GitHub Pages.</li>
                            <li>Achieved high performance score with optimized assets.</li>
                        </ul>
                    </div>

                    <div class="job-item">
                        <div class="job-head">
                            <h4>D'Production Surabaya</h4>
                            <span class="year">Web Developer</span>
                        </div>
                        <p class="stack-used">HTML • CSS • SEO</p>
                        <ul>
                            <li>Built a professional company profile to showcase video showreels.</li>
                            <li>Optimized SEO structure for better brand visibility.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h3><i class="ph ph-graduation-cap"></i> Education</h3>
                    <div class="job-item">
                        <div class="job-head">
                            <h4>UIN Sunan Ampel Surabaya</h4>
                            <span class="year">Present</span>
                        </div>
                        <p>Bachelor of Islamic Broadcasting Communication (KPI)</p>
                        <p class="sm-text">Focus: Digital Media Strategy, Visual Rhetoric (#akukapeiakubahagia)</p>
                    </div>
                </section>
            </div>

            <div class="sidebar-column">
                <section>
                    <h3>Technical Skills</h3>
                    <div class="skill-group">
                        <h5>Frontend</h5>
                        <p>Vue.js, React, HTML5, CSS3, Tailwind, JS (ES6+)</p>
                    </div>
                    <div class="skill-group">
                        <h5>Backend</h5>
                        <p>Laravel (PHP), MySQL</p>
                    </div>
                    <div class="skill-group">
                        <h5>Tools</h5>
                        <p>Git, VS Code, AppSheet</p>
                    </div>
                </section>

                <section>
                    <h3>Creative Skills</h3>
                    <div class="skill-group">
                        <h5>Video & Photo</h5>
                        <p>Sony Alpha Cam Op, Lighting, Premiere Pro, DaVinci Resolve</p>
                    </div>
                    <div class="skill-group">
                        <h5>Design</h5>
                        <p>Figma, UI/UX Principles</p>
                    </div>
                </section>

                <section>
                    <h3>Connect</h3>
                    <p class="link-item">linkedin.com/in/wildan-abdillah-099a8b247/</p>
                    <p class="link-item">github.com/amdwildanabdillah</p>
                    <p class="link-item">@idan_abdll</p>
                </section>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
/* =========================================
   1. BACKGROUND & WRAPPER (TAMPILAN WEB)
   ========================================= */
.resume-wrapper {
    background-color: #0f0f0f;
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333;
}

/* TOMBOL AKSI (Back & Download) */
.action-bar {
    width: 100%;
    max-width: 210mm;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.back-btn { color: white; text-decoration: none; display: flex; align-items: center; gap: 5px; transition: 0.3s; }
.back-btn:hover { color: #a855f7; }

.download-btn {
    background: #a855f7; color: white; border: none; padding: 10px 20px;
    border-radius: 8px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 8px; transition: 0.3s;
}
.download-btn:hover { background: #9333ea; transform: translateY(-2px); }

/* =========================================
   2. KERTAS A4 DIGITAL
   ========================================= */
.resume-paper {
    background: white;
    width: 100%;
    max-width: 210mm; /* Lebar A4 */
    min-height: 297mm; /* Tinggi A4 */
    padding: 40px;
    box-shadow: 0 0 50px rgba(0,0,0,0.5);
    font-family: 'Arial', sans-serif;
    box-sizing: border-box;
}

/* =========================================
   3. HEADER SECTION (LAYOUT RAPI)
   ========================================= */
.resume-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 2px solid #eee;
}

.header-main {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
}

/* FOTO PROFIL (Anti Gepeng) */
.resume-pic {
    width: 90px; height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #f0f0f0;
    flex-shrink: 0; /* PENTING: Foto gak bakal penyet */
}

/* NAMA & ROLE */
.header-info h1 {
    font-size: 1.8rem; /* Pas 1 baris */
    margin: 0;
    line-height: 1.2;
    color: #222;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.5px;
}

.header-info .subtitle {
    margin-top: 5px;
    font-size: 0.9rem;
    color: #a855f7;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* KONTAK (KANAN) */
.header-contact {
    text-align: right;
    font-size: 0.85rem;
    line-height: 1.6;
    min-width: 180px;
}
.header-contact p { margin: 0; color: #555; }

/* =========================================
   4. BODY CONTENT (2 KOLOM)
   ========================================= */
.resume-body { display: flex; gap: 30px; margin-top: 10px; }
.main-column { flex: 65%; }
.sidebar-column { flex: 35%; }

/* --- PERINTAH SAKTI: BIAR HEADER & ISI GAK PISAH --- */
section, .job-item {
    break-inside: avoid;      /* Browser Modern */
    page-break-inside: avoid; /* PDF / Printer */
    margin-bottom: 20px;      /* Jarak aman */
}

/* JUDUL PER SECTION */
h3 {
    border-bottom: 2px solid #222;
    padding-bottom: 5px; margin-bottom: 15px; margin-top: 10px;
    font-size: 1rem; text-transform: uppercase;
    color: #000; letter-spacing: 1px;
    display: flex; align-items: center; gap: 8px;
}
section:first-child h3 { margin-top: 0; }

/* TEXT STYLE */
p { font-size: 0.9rem; line-height: 1.5; color: #444; margin-bottom: 5px; }
.justified { text-align: justify; }

/* PROJECT ITEMS */
.job-item { margin-bottom: 15px; }
.job-head { display: flex; justify-content: space-between; align-items: baseline; }
h4 { margin: 0; font-size: 1rem; color: #000; font-weight: bold; }
.year { color: #666; font-size: 0.8rem; }
.stack-used { font-size: 0.8rem; color: #a855f7; font-weight: bold; margin-bottom: 5px; }

ul { margin: 5px 0 0 15px; padding: 0; }
li { font-size: 0.85rem; color: #444; margin-bottom: 3px; line-height: 1.4; }

/* SIDEBAR ITEMS */
.skill-group { margin-bottom: 20px; }
h5 { margin: 0 0 5px; font-size: 0.9rem; color: #222; font-weight: bold; text-decoration: underline; text-decoration-color: #eee; }
.sm-text { font-size: 0.85rem; color: #666; font-style: italic; }
.link-item { color: #a855f7; text-decoration: none; font-weight: 600; font-size: 0.85rem; display: block; margin-bottom: 3px; }

/* =========================================
   5. PRINT MODE (PDF RAPI)
   ========================================= */
@media print {
    .no-print { display: none !important; }

    .resume-wrapper {
        background: white; padding: 0; margin: 0; display: block;
    }

    .resume-paper {
        box-shadow: none;
        width: 100%; max-width: 100%;
        padding: 0; margin: 0;
        min-height: auto;
    }

    /* Paksa Hitam Putih (Opsional) atau Warna Tetap Muncul */
    body { margin: 0; padding: 0; -webkit-print-color-adjust: exact; }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }

    @page { margin: 1cm; size: A4; }
}

/* =========================================
   6. RESPONSIVE HP
   ========================================= */
@media (max-width: 768px) {
    .resume-paper { padding: 20px; width: 100%; }
    .resume-header { flex-direction: column; text-align: center; gap: 15px; }
    .header-main { flex-direction: column; width: 100%; }
    .header-contact { text-align: center; width: 100%; }
    .resume-body { flex-direction: column; gap: 30px; }
    .sidebar-column { background: #f8f9fa; padding: 20px; border-radius: 10px; order: -1; }
}
</style>
