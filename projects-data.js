const projectsData = [
    {
        id: "mavisevo-ros2-system",
        title: "MavisEvo ROS 2 AI Vision Workspace",
        category: "Robotics & AI",
        status: "On-going",
        images: [
            "assets/Project_4_Program1.png",
            "assets/Project_4_Prototipe1.png",
            "assets/Project_4_testing1.png",
            "assets/Project_4_Testing2.png",
            "assets/Project_4_Testing3.png"
        ],
        description: "Pusat saraf kendali UAV berbasis ROS 2 Jazzy. Sedang dalam tahap integrasi visi komputer YOLOv11 dengan akselerasi TensorRT pada GPU RTX 2050 (On-going)...",
        techStack: ["ROS 2", "Python", "YOLOv11", "TensorRT", "NVIDIA RTX 2050"],
        fullStory: `MavisEvo ROS 2 Workspace merupakan pusat saraf kendali cerdas yang mengintegrasikan kecerdasan buatan dengan sistem robotika modular. Saat ini, arsitektur workspace ini masih dalam fase pengembangan aktif (On-going), dengan fokus pada pengujian latensi aliran video dan stabilisasi sistem sebelum uji coba perairan secara penuh.

Memanfaatkan middleware ROS 2 Jazzy Jalisco, arsitektur ini menjalankan pemrosesan visi komputer secara real-time menggunakan algoritma YOLOv11 yang diakselerasi oleh NVIDIA TensorRT pada unit pemrosesan grafis RTX 2050. Sistem ini dirancang untuk menangani deteksi objek bawah air dengan latensi minimal melalui konversi model ke format FP16, yang kemudian dipancarkan melalui saluran telemetri terpusat. 

Selain aspek persepsi, workspace ini juga mencakup pengembangan Mission Control Dashboard berbasis Python yang memungkinkan operator memantau aliran video hasil olahan AI dan status sistem secara komprehensif, memastikan koordinasi yang mulus antara logika otonom dan kendali manual.`,
        githubLink: "https://github.com/noskac/MavisEvo-System"
    },
    {
        id: "mavisevo-mcu-firmware",
        title: "MavisEvo-MCU Universal Firmware",
        category: "Embedded System",
        status: "On-going",
        images: [
            "assets/Project_5_Porgram1.png",
            "assets/Project_5_Program2.png",
            "assets/Project_5_Prototipe1.png"
        ],
        description: "Firmware universal C++ untuk kendali aktuator UAV. Masih dalam tahap optimasi hardware timer pada arsitektur ESP32 dan Teensy 4.1 (On-going)...",
        techStack: ["C++", "PlatformIO", "ESP32", "Teensy 4.1", "PWM Control"],
        fullStory: `MavisEvo-MCU adalah firmware universal berbasis C++ yang dirancang khusus untuk memberikan kendali aktuator dengan presisi pada perangkat keras UAV. Proyek firmware ini berstatus On-going, dengan pengembangan terkini berfokus pada pengujian data serial dan kalibrasi output PWM agar sinkron sempurna dengan perangkat keras mekanis robot.

Dikembangkan menggunakan ekosistem PlatformIO, basis kode ini menerapkan prinsip modularitas melalui preprocessor directives, sehingga memiliki fleksibilitas untuk diunggah ke mikrokontroler ESP32 maupun Teensy 4.1 tanpa modifikasi manual pada struktur kodenya. 

Perangkat lunak ini bertugas sebagai jembatan komunikasi yang mengolah paket data serial berkecepatan tinggi dari sistem utama menjadi sinyal PWM (Pulse Width Modulation) yang stabil untuk menggerakkan rangkaian thruster. Dengan optimasi pada manajemen hardware timer dan protokol parsing data yang efisien, firmware ini menjamin respon pergerakan robot yang tangkas serta keandalan sistem dalam mempertahankan stabilitas manuver di bawah air.`,
        githubLink: "https://github.com/noskac/MavisEvo-MCU"
    },
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
    
];