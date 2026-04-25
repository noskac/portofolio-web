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
        id: "iot-soil-moisture",
        title: "IoT Soil Moisture & Auto Watering Simulator",
        category: "IoT & Smart Agriculture",
        images: [
            "assets/Project_2_AndroidDashboard.png",
            "assets/Project_2_Program.png",
            "assets/Project_2_Prototipe.png",
            "assets/Project_2_Rangkaian.jpeg"
        ],
        // Deskripsi singkat untuk kartu di halaman utama
        description: "Sistem IoT berbasis ESP32 untuk otomasi pemantauan kelembaban tanah dan penyiraman mandiri menggunakan sensor kapasitif dan pompa air...",
        techStack: ["ESP32", "C++", "WebSocket", "OLED Display", "Soil Moisture Sensor"],
        // Deskripsi lengkap menggunakan backtick (`) agar enter/paragraf terbaca
        fullStory: `Sistem Internet of Things (IoT) yang dikembangkan untuk mengotomatisasi pemantauan kelembaban tanah dan perawatan tanaman. Dibangun dengan mikrokontroler ESP32, sistem bertindak dengan membaca tingkat kelembaban tanah secara real-time. Data fisik dari lingkungan tersebut kemudian dikonversi menjadi persentase visual yang dapat dipantau secara langsung melalui layar OLED di lokasi, maupun ditransmisikan ke antarmuka jarak jauh. Proyek ini merupakan implementasi praktis dari konsep pertanian presisi (precision agriculture) untuk mencegah kegagalan perawatan tanaman.

Ketika sensor kapasitif mendeteksi bahwa tanah berada di bawah ambang batas kelembaban yang ideal, sistem akan secara otomatis mengaktifkan aktuator berupa pompa air. Proses penyiraman ini berjalan secara terukur dan mandiri tanpa memerlukan intervensi manual dari pengguna, memastikan tanaman selalu mendapatkan hidrasi yang tepat pada waktu yang tepat.

Dari sisi rekayasa perangkat lunak, proyek ini menonjolkan penerapan arsitektur kode yang efisien dan responsif. Alih-alih menggunakan metode delay konvensional yang dapat menghentikan seluruh proses operasional mikrokontroler, saya mengimplementasikan sistem non-blocking timer berbasis fungsi komputasi waktu. Pendekatan teknis ini sangat krusial karena memungkinkan perangkat untuk melakukan multitasking: mengontrol durasi nyala pompa air secara akurat, memperbarui tampilan antarmuka visual, sekaligus menjaga kelancaran aliran data telemetri ke server melalui protokol WebSocket tanpa ada koneksi yang terputus.`,
        githubLink: "https://github.com/noskac/IoT-Soil-Moisture-Auto-Watering-Simulator"
    },
    {
        id: "esp32-rc-robot",
        title: "ESP32 Bluetooth RC Robot",
        category: "Robotics",
        status: "On-going", // Label tambahan untuk status proyek
        images: [
            "assets/Project_3_skema.png",
            "assets/Project_3_Program2.png",
            "assets/Project_3_Program1.png",
            "assets/Project_3_DashboardApp.png"
        ],
        description: "Sistem kendali robot 4WD berbasis ESP32 via Bluetooth. Saat ini dalam tahap pengembangan logika sistem dan antarmuka Android (On-going)...",
        techStack: ["ESP32", "C++", "Bluetooth Serial", "L298N Driver", "Android GUI"],
        fullStory: `Proyek ini merupakan sistem kendali robot mobile roda empat (4WD) berbasis mikrokontroler ESP32 yang dioperasikan secara nirkabel melalui protokol Bluetooth Serial. Saat ini, proyek masih dalam tahap pengembangan aktif (On-going), dengan fokus utama pada perancangan arsitektur sistem dan simulasi logika pergerakan sebelum masuk ke tahap perakitan fisik.

Sistem dirancang untuk menjembatani transmisi data real-time antara perangkat keras dengan aplikasi Android custom. Aplikasi pengontrol akan membaca input dari virtual joystick dan mengirimkan paket data berformat string (koordinat sumbu X dan Y) ke mikrokontroler dengan latensi rendah.

Pada sisi perangkat lunak, ESP32 bertugas memparsing data menjadi sinyal PWM untuk driver motor L298N. Meskipun masih dalam tahap pengembangan, algoritma differential steering telah dirancang di dalam kode C++ untuk memastikan manuver yang halus seperti akselerasi bertahap dan navigasi dinamis. Proyek ini mendemonstrasikan integrasi awal antara desain sirkuit elektronika aktuator dan pengembangan aplikasi mobile.`,
        githubLink: "https://github.com/noskac/ESP32-Bluetooth-RC-Robot"
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
    },
    
];