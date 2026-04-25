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


// --- Render Proyek di Halaman Utama (index.html) ---
const featuredGrid = document.getElementById('featured-projects');

if (featuredGrid) {
    // Menampilkan semua proyek yang ada di projects-data.js
    // Jika ingin membatasi hanya 3, gunakan: projectsData.slice(0, 3).forEach...
    projectsData.slice(0, 3).forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Logika Pemotongan Deskripsi (Truncate)
        // Jika karakter lebih dari 120, potong dan tambah "..."
        const shortDescription = project.description.length > 120 
            ? project.description.substring(0, 120) + "..." 
            : project.description;

        const projectImages = project.images ? project.images : [project.image];
        let imagesHTML = '';
        projectImages.forEach((img, index) => {
            imagesHTML += `<img src="${img}" class="${index === 0 ? 'active' : ''}" alt="${project.title}">`;
        });

        // Logika tambahan untuk label status
        const statusBadge = project.status ? `<span class="badge-status">${project.status}</span>` : '';

        card.innerHTML = `
            <div class="card-image-container" id="slider-${project.id}">
                <span class="card-badge">${project.category}</span>
                ${statusBadge} 
                ${imagesHTML}
            </div>
            <div class="card-content">
                <h3>${project.title}</h3>
                <p>${shortDescription}</p>
                <a href="project-detail.html?id=${project.id}" class="btn-detail">Lihat Detail ➔</a>
            </div>
        `;
        featuredGrid.appendChild(card);

        // --- Logika Auto-Slide per Kartu ---
        if (projectImages.length > 1) {
            let currentImgIndex = 0;
            const sliderContainer = card.querySelector(`#slider-${project.id}`);
            const images = sliderContainer.querySelectorAll('img');
            
            setInterval(() => {
                images[currentImgIndex].classList.remove('active');
                currentImgIndex = (currentImgIndex + 1) % images.length;
                images[currentImgIndex].classList.add('active');
            }, 3000); 
        }
    });
}

// --- Logika Modal Transkrip ---
function openTranscript() {
    document.getElementById('transcriptModal').style.display = 'block';
}

function closeTranscript() {
    document.getElementById('transcriptModal').style.display = 'none';
}

// Tutup modal jika pengguna mengklik area gelap di luar gambar
window.onclick = function(event) {
    const modal = document.getElementById('transcriptModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}