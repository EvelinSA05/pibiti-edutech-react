import './App.css';
import Navbar from './components/Navbar'; // Import komponen Header
import Header from './components/Header';
import Card from './components/Card';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar
        nav1="Home"
        nav2="About"
        nav3="Courses"
        nav4="Contact"
        nav5="Hubungi Tutor"
      />
      <Header
        title1="Kursus Online Terbaik di Indonesia"
        title2="Belajar dari Ahlinya, Kapan Saja, Di Mana Saja"
        h1="Video Kursus"
        h2="Kursus Online"
        h3="Kursus Tatap Muka"
        h4="Kursus Privat"
        h5="Cabang di Indonesia"
        h6="Pelanggan Terdaftar"
        h7="Jam Belajar Per Minggu"
        h8="Video Belajar"
        v1="12"
        v2="300+"
        v3="40"
        v4="Unlimited"
      />
      <Card
        h1="Paket Belajar Study Buddy"
        title1="Paket Belajar Pemrograman Dasar"
        title2="Paket Belajar Pemrograman Lanjut"
        title3="Paket Belajar Pemrograman Spesialis"
        description1="Paket belajar ini dirancang untuk pemula yang ingin memahami dasar-dasar pemrograman. Materi mencakup pengenalan bahasa pemrograman, struktur data, dan algoritma dasar. Cocok untuk siswa yang baru memulai perjalanan belajar pemrograman."
        description2="Paket belajar ini ditujukan bagi mereka yang ingin memperdalam pengetahuan pemrograman mereka. Materi mencakup konsep lanjutan seperti pemrograman berorientasi objek, pengembangan web, dan basis data. Ideal untuk siswa yang telah memiliki dasar pemrograman dan ingin meningkatkan keterampilan mereka."
        description3="Paket belajar ini dirancang untuk siswa yang ingin menjadi ahli dalam bidang pemrograman tertentu. Materi mencakup spesialisasi dalam bahasa pemrograman tertentu, pengembangan aplikasi mobile, dan pengembangan perangkat lunak tingkat lanjut. Cocok untuk siswa yang ingin fokus pada bidang tertentu dalam pemrograman."
        tag1="#PemrogramanDasar"
        tag2="#PemrogramanLanjut"
        tag3="#PemrogramanSpesialis"
      />
      <Testimonials
        h1="Apa Kata Mereka Tentang Kami?"
        c1="Tania Andrew"
        c2="John Doe"
        c3="Jane Smith"
        d1="Saya menemukan solusi untuk semua kebutuhan desain saya dari Creative Tim. Saya menggunakannya sebagai freelancer dalam proyek hobi saya untuk bersenang-senang! Dan itu sangat terjangkau, sangat rendah hati !!!"
        d2="Saya sangat terkesan dengan kualitas kursus yang ditawarkan. Materinya sangat lengkap dan mudah dipahami. Saya merasa lebih percaya diri dalam keterampilan pemrograman saya setelah mengikuti kursus ini."
        d3="Pengalaman belajar yang luar biasa! Instruktur sangat berpengalaman dan selalu siap membantu. Saya belajar banyak hal baru  dan merasa siap untuk menghadapi tantangan di dunia pemrograman."
      />
      <ContactSection
        title="Punya Pertanyaan?"
        description="Lihat pertanyaan yang sering diajukan atau kirimkan pertanyaan Anda melalui form di bawah ini."
      />
      <Footer
        title="Study Buddy - EduTech Platform"
        t1="Tentang Kami"
        t2="Komunitas"
        t3="Legal"
        d1="Kursus Online"
        d2="Kursus Tatap Muka"
        d3="Discord"
        d4="Instagram"
        d5="Kebijakan Privasi"
        d6="Syarat & Ketentuan"
        d7="© 2025 Study Buddy. "
        d8="All Rights Reserved."
      />
    </>
  )
}

export default App