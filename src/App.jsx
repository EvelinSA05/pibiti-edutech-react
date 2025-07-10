import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeContext';

import RegistrationPage from './pages/RegistrationPage';

import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import MentorsPage from './pages/MentorsPage';
import ContactPage from './pages/ContactPage';
import CourseDetailPage from './pages/CourseDetailPage';

import AdminLayout from './pages/admin/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import AdminCoursesPage from './pages/admin/AdminCoursesPage';
import AdminMentorsPage from './pages/admin/AdminMentorsPage';
import AdminContactsPage from './pages/admin/AdminContactsPage';

import PublicLayout from './components/layout/PublicLayout';

const testimonialData = [
  {
    name: "Tania Andrew",
    quote: "Saya menemukan solusi untuk semua kebutuhan desain saya dari Creative Tim. Saya menggunakannya sebagai freelancer dalam proyek hobi saya untuk bersenang-senang! Dan itu sangat terjangkau, sangat rendah hati !!!",
    picture: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2025/01/08/6-Rahasia-Menjadi-Seorang-yang-Murah-Senyum-dan-Disukai-Banyak-Orang-2673540605.jpg"
  },
  {
    name: "John Doe",
    quote: "Saya sangat terkesan dengan kualitas kursus yang ditawarkan. Materinya sangat lengkap dan mudah dipahami. Saya merasa lebih percaya diri dalam keterampilan pemrograman saya setelah mengikuti kursus ini.",
    picture: "https://media.istockphoto.com/id/1485546774/id/foto/pria-botak-tersenyum-ke-kamera-berdiri-dengan-tangan-disilangkan.jpg?s=612x612&w=0&k=20&c=hzlkB5Rs5GS080SS5QU9e3pzweE4CIdRjbaMK-G25XQ="
  },
  {
    name: "Andrea Smith",
    quote: "Pengalaman belajar yang luar biasa! Instruktur sangat berpengalaman dan selalu siap membantu. Saya belajar banyak hal baru dan merasa siap untuk menghadapi tantangan di dunia pemrograman.",
    picture: "https://media.sukabumiupdate.com/media/2023/11/20/1700456008_655ae6485debe_U7NMyDfBw4DOQBiPSYmJ.webp"
  },
  {
    name: "Rose Johnson",
    quote: "Pengalaman belajar yang luar biasa! Instruktur sangat berpengalaman dan selalu siap membantu. Saya belajar banyak hal baru dan merasa siap untuk menghadapi tantangan di dunia pemrograman.",
    picture: "https://media.sukabumiupdate.com/media/2023/11/20/1700456008_655ae6485debe_U7NMyDfBw4DOQBiPSYmJ.webp"
  },
  {
    name: "Hugo Brown",
    quote: "Pengalaman belajar yang luar biasa! Instruktur sangat berpengalaman dan selalu siap membantu. Saya belajar banyak hal baru dan merasa siap untuk menghadapi tantangan di dunia pemrograman.",
    picture: "https://media.sukabumiupdate.com/media/2023/11/20/1700456008_655ae6485debe_U7NMyDfBw4DOQBiPSYmJ.webp"
  }
];

const faqData = [
  {
    question: "Apa itu Kursus Online Study Buddy?",
    answer: "Kursus Online Study Buddy adalah platform pembelajaran yang menyediakan berbagai kursus online dalam berbagai bidang, termasuk pemrograman, desain, dan bisnis. Kursus ini dirancang untuk membantu siswa belajar dengan cara yang fleksibel dan mudah diakses."
  },
  {
    question: "Bagaimana cara mendaftar kursus?",
    answer: "Untuk mendaftar kursus, Anda dapat mengunjungi situs web Study Buddy dan memilih kursus yang Anda minati. Setelah itu, Anda dapat mengikuti petunjuk pendaftaran yang tersedia di situs tersebut."
  },
  {
    question: "Apakah ada biaya untuk mengikuti kursus?",
    answer: "Ya, ada biaya untuk mengikuti kursus. Biaya bervariasi tergantung pada jenis kursus yang Anda pilih. Namun, kami juga menyediakan beberapa kursus gratis yang dapat diakses oleh siapa saja."
  },
  {
    question: "Apakah ada kursus gratis yang tersedia?",
    answer: "Ya, kami menyediakan beberapa kursus gratis yang dapat diakses oleh siapa saja. Kursus gratis ini mencakup berbagai topik dan dirancang untuk memberikan pengenalan dasar kepada siswa sebelum mereka memutuskan untuk mengikuti kursus berbayar."
  }
];

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'bg-[#eee6e8]' : 'bg-gray-800'}>
      <main>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage testimonialData={testimonialData} />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route
              path="/course/:courseId"
              element={<CourseDetailPage />}
            />
            <Route
              path="/register/:courseId"
              element={
                <RegistrationPage
                  notFound="Kursus Tidak Ditemukan"
                  featureTitle="Paket Sudah Termasuk:"
                  titleHistory="Latest Customer"
                  desc1="Seseorang Telah Mendaftar"
                  desc2="Paket Belajar Pemrograman Lanjut"
                  harga1="Rp 1.200.000"
                  desc3="Pendaftaran baru"
                  desc4="Paket Belajar Pemrograman Dasar"
                  harga2="Rp 500.000"
                  desc5="Paket Belajar Pemrograman Spesialis"
                  harga3="Rp 2.500.000"
                  titleForm="Formulir Pendaftaran"
                  form1="Nama Lengkap"
                  form2="Alamat Email"
                  form3="Nomor Telepon"
                  send="Kirim Pendaftaran" />} />
            <Route path="/mentors" element={<MentorsPage />} />
            <Route path="/contact" element={
              <ContactPage faqItems={faqData} />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="courses" element={<AdminCoursesPage />} />
            <Route path="mentors" element={<AdminMentorsPage />} />
            <Route path="contacts" element={<AdminContactsPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;