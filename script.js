console.log("Website portofolio berhasil dimuat!");

// --- Konfigurasi Animasi Partikel ---
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60, // Jumlah titik partikel
      "density": { "enable": true, "value_area": 800 }
    },
    "color": {
      "value": "#0ea5e9" // Warna Sky Blue
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0.5,
      "random": false,
    },
    "size": {
      "value": 3,
      "random": true,
    },
    "line_linked": {
      "enable": true,
      "distance": 150, // Jarak maksimal agar titik terhubung garis
      "color": "#0ea5e9", // Garis warna Sky Blue
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, // Kecepatan gerak partikel
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // Saat mouse mendekat, jaring akan merapat ke kursor
      },
      "onclick": {
        "enable": true,
        "mode": "push" // Saat di-klik, partikel bertambah
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": { "opacity": 1 }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

// Pesan log untuk memastikan JS berjalan
console.log("Website dan animasi partikel berhasil dimuat!");

// --- Render Experience Timeline ---
const timeline = document.getElementById('experience-timeline');

experienceData.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    
    timelineItem.innerHTML = `
        <div class="timeline-content">
            <span class="timeline-date">${item.date}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `;
    timeline.appendChild(timelineItem);
});