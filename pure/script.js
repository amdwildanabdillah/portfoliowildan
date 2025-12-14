document.addEventListener("DOMContentLoaded", () => {
    
    // --- MAGNETIC BUTTON LOGIC (FIXED) ---
    const buttons = document.querySelectorAll('.magnetic-btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            // Ambil dimensi tombol
            const width = btn.offsetWidth;
            const height = btn.offsetHeight;

            // Hitung posisi mouse RELATIF terhadap tombol (bukan layar)
            // e.offsetX adalah posisi X cursor di dalam elemen
            const x = e.offsetX - (width / 2);
            const y = e.offsetY - (height / 2);

            // Gerakkan tombol (0.5 = kekuatan magnet medium)
            btn.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
        });

        btn.addEventListener('mouseout', () => {
            // Reset smooth saat mouse keluar
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // --- OPTIONAL: Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});document.addEventListener("DOMContentLoaded", () => {
    
    // --- MAGNETIC BUTTON LOGIC (FIXED) ---
    const buttons = document.querySelectorAll('.magnetic-btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            // Ambil dimensi tombol
            const width = btn.offsetWidth;
            const height = btn.offsetHeight;

            // Hitung posisi mouse RELATIF terhadap tombol (bukan layar)
            // e.offsetX adalah posisi X cursor di dalam elemen
            const x = e.offsetX - (width / 2);
            const y = e.offsetY - (height / 2);

            // Gerakkan tombol (0.5 = kekuatan magnet medium)
            btn.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
        });

        btn.addEventListener('mouseout', () => {
            // Reset smooth saat mouse keluar
            btn.style.transform = 'translate(0px, 0px)';
        });
    });

    // --- OPTIONAL: Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});