const projectsData = [
    {
        id: "active-fire-mitigation",
        title: "Active Fire Mitigation Simulation System via Blynk IoT",
        category: "IoT",
        // Array berisi semua foto proyekmu
        images: [
            "assets/Project_1_Skematik.png",
            "assets/Project_1_Skematik2.png",
            "assets/Project_1_tampilanHome.jpeg",
            "assets/Project_1_tampilan Dashboard.jpeg",
            "assets/Project_1_Prototipe.jpeg"
        ],
        description: "Sistem simulasi mitigasi kebakaran aktif berbasis IoT menggunakan platform Blynk untuk monitoring.",
        techStack: ["ESP32", "Blynk IoT", "C++", "Tinkercad", "Flame Sensor", "VS Code", "Arduino IDE", "PlatformIO"],
        // Space untuk deskripsi lengkap
        fullStory: "Proyek ini adalah sistem peringatan dini dan mitigasi kebakaran otomatis berbasis Internet of Things (IoT) yang dikembangkan menggunakan mikrokontroler ESP32 dan lingkungan pengembangan PlatformIO. Sistem ini tidak hanya memantau titik api secara real-time, tetapi juga mampu merespons ancaman secara aktif. Ketika anomali terdeteksi, sistem akan langsung memicu relay untuk menyalakan pompa air mini (water pump) sebagai tindakan pemadaman awal.Simulasi wiring dilakukan secara mendalam menggunakan Tinkercad untuk memastikan logika hardware bekerja 100% sebelum perakitan fisik. \n\nSecara bersamaan, sistem akan mengirimkan push notification darurat ke smartphone pengguna melalui cloud Blynk IoT. Proyek ini mendemonstrasikan kapabilitas integrasi end-to-end: mulai dari pengolahan sinyal trigger, kontrol aktuator fisik untuk mitigasi, hingga pengiriman log event ke sistem cloud. ",
        // Tautan langsung
        githubLink: "https://github.com/noskac/Active-Fire-Mitigation-Simulation-System-via-Blynk-IoT",
        tinkercadLink: "https://www.tinkercad.com/things/lP382Drvs9P-hardware-logic-wiring-simulation-fire-mitigation-system?sharecode=NLZpJhsPnhXzdHze22W2s33714ysGu2ZiEQD9lxzCPg"
    },
    {
        id: "yolo-road",
        title: "Sistem Deteksi Kerusakan Jalan",
        category: "Machine Learning",
        image: "https://via.placeholder.com/600x400", // Ganti dengan path foto aslimu
        description: "Deteksi dini lubang dan gelombang jalan menggunakan algoritma YOLO (You Only Look Once) versi 8 untuk meningkatkan keselamatan berkendara.",
        techStack: ["Python", "YOLOv8", "PyTorch", "OpenCV"],
        githubLink: "https://github.com/andaru/yolo-road-damage",
        fullStory: "Proyek ini dikembangkan sebagai bagian dari proposal PKM... (tulis detail lengkap di sini)"
    },
    {
        id: "biogas-iot",
        title: "Monitoring Reaktor Biogas IoT",
        category: "IoT & Embedded System",
        image: "https://via.placeholder.com/600x400",
        description: "Sistem pemantauan parameter reaktor biogas secara real-time menggunakan ESP32, sensor pH, dan suhu.",
        techStack: ["ESP32", "C++", "Firebase", "Nextion HMI"],
        githubLink: "https://github.com/andaru/biogas-iot",
        fullStory: "Menggunakan ESP32 untuk mengirimkan data sensor ke cloud sehingga kondisi reaktor bisa dipantau lewat aplikasi..."
    },
    {
        id: "underwater-rov",
        title: "Programming Robot Bawah Air (ROV)",
        category: "Robotics",
        image: "https://via.placeholder.com/600x400",
        description: "Pengembangan sistem kontrol dan navigasi untuk robot bawah air yang bertanggung jawab dalam eksplorasi bawah laut.",
        techStack: ["Arduino", "Teensy 4.1", "Python", "ROS"],
        githubLink: "https://github.com/andaru/rov-project",
        fullStory: "Bertanggung jawab dalam memprogram logika kontrol motor dan stabilisasi robot di dalam air..."
    }
    
];