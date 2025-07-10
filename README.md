📚 Study Buddy - Platform Kursus Online

Selamat datang di **Study Buddy**\! Ini adalah proyek *frontend* yang dibangun sebagai platform edukasi teknologi (EduTech) yang modern, interaktif, dan dinamis. Aplikasi ini dikembangkan sepenuhnya menggunakan **React.js** dan ditata dengan **Tailwind CSS**, menunjukkan implementasi konsep-konsep canggih dalam pengembangan web modern.

Aplikasi ini dibangun sebagai *Single-Page Application* (SPA) dengan sistem navigasi yang cepat dan pengalaman pengguna yang mulus.

✨ Fitur Utama

Aplikasi ini dilengkapi dengan serangkaian fitur canggih yang mencerminkan praktik terbaik dalam pengembangan React:

### 1\. Manajemen State Dinamis (`useState`)

  * **📝 Form Interaktif:** Semua formulir, mulai dari form kontak hingga pendaftaran kursus, dikelola sepenuhnya oleh *state*, memberikan validasi dan umpan balik secara *real-time*.
  * **🎠 Carousel Testimonial:** Bagian testimoni tidak lagi statis. Pengguna dapat menekan tombol "Sebelumnya" dan "Berikutnya" untuk menavigasi daftar testimoni dengan lancar.
  * **🔍 Pencarian Langsung:** Halaman kursus dan mentor dilengkapi dengan fitur pencarian *live* yang memfilter hasil secara instan saat pengguna mengetik, memberikan pengalaman pencarian yang responsif. 

### 2\. Arsitektur Komponen Fleksibel

  * **🧱 Komponen Reusable:** Komponen seperti `<Card />` dan `<CardList />` dirancang untuk dapat digunakan kembali di berbagai halaman (untuk menampilkan kursus dan mentor) dengan *props* yang berbeda, menunjukkan prinsip **DRY (Don't Repeat Yourself)**.
  * **🎁 Layout dengan `props.children`**: Komponen krusial seperti `<Modal />` (untuk pop-up) dan `<PublicLayout />` dirancang sebagai "pembungkus" generik yang bisa menampung konten apa pun, memungkinkan pembuatan layout yang konsisten dan rapi.

### 3\. Manajemen Efek Samping (`useEffect`)

  * **🌐 Pengambilan Data dari API:** Aplikasi ini tidak lagi menggunakan data statis. Semua data utama (kursus, mentor, pendaftaran) diambil secara *asynchronous* dari **MockAPI** menggunakan **Axios**.
  * **🔄 Status Loading & Error:** Setiap halaman yang mengambil data dari internet dilengkapi dengan manajemen status yang baik, menampilkan pesan **"Memuat data..."** saat proses berlangsung dan menangani kondisi **error** jika API gagal diakses.
  * **🌐 Interaksi Browser:** `useEffect` juga digunakan untuk mengubah judul tab browser (`document.title`) secara dinamis, memberikan pengalaman yang lebih profesional.

### 4\. Manajemen State Global (`useContext`)

  * **🌗 Dark/Light Mode Toggle:** Aplikasi ini memiliki fitur ganti tema global yang persisten. State tema dikelola oleh `useContext`, memungkinkan komponen mana pun untuk mengakses dan mengubah tema tanpa perlu "prop drilling".
  * **📊 Data Terpusat:** Data pendaftaran baru disimpan secara global menggunakan `useContext`, memungkinkan berbagai komponen (seperti halaman admin) untuk mengaksesnya secara *real-time*.

### 5\. Navigasi Multi-Halaman (`react-router-dom`)

  * **🔀 Routing Statis & Dinamis:** Aplikasi ini memiliki beberapa halaman (Home, Courses, Mentors, Contact) dan juga halaman detail dinamis yang URL-nya dibuat berdasarkan parameter (misalnya, `/course/:id`).
  * **🔐 Layout Terpisah:** Terdapat layout terpisah untuk halaman publik (dengan Navbar & Footer) dan halaman admin (dengan Sidebar), menunjukkan implementasi *nested routing* yang benar menggunakan `<Outlet>`.
  * **🚀 Navigasi Programatik:** Menggunakan *hook* `useNavigate` untuk mengarahkan pengguna secara otomatis setelah aksi tertentu, seperti setelah berhasil mengirimkan form pendaftaran.

### 6\. Dasbor Admin Fungsional

  * Halaman `/admin` yang memiliki *sidebar* navigasi untuk mengelola berbagai jenis data.
  * Menampilkan data **pendaftaran, kursus, dan mentor** yang diambil langsung dari API.
  * Memiliki fungsionalitas **CRUD** (Create, Read, Update, Delete) penuh: admin bisa **memperbarui (Update)** dan **menghapus (Delete)** data langsung dari dasbor.

## 🛠️ Teknologi yang Digunakan

  * **Framework:** [React.js](https://reactjs.org/)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  * **Routing:** [React Router DOM](https://reactrouter.com/)
  * **HTTP Client:** [Axios](https://axios-http.com/)
  * **Build Tool:** [Vite](https://vitejs.dev/)
  * **Mock API:** [MockAPI.io](https://mockapi.io/)

## 🚀 Cara Menjalankan Proyek

1.  Pastikan Anda memiliki [Node.js](https://nodejs.org/) terinstal.

2.  *Clone* repositori ini.

3.  Buka terminal di dalam folder proyek dan jalankan perintah berikut:

    ```bash
    # Instal semua dependensi yang dibutuhkan
    npm install

    # Jalankan server pengembangan
    npm run dev
    ```

4.  Buka [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) di browser Anda.

-----
