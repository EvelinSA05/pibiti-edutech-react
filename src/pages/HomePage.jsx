import Header from '../components/layout/Header';
import Testimonials from '../components/ui/Testimonials';
import Download from '../components/ui/Download';

function HomePage({ testimonialData }) {
  return (
    <>
      <Header
        title1="Kursus Online Terbaik di Indonesia"
        title2="Belajar dari Ahlinya, Kapan Saja, Di Mana Saja"
        h1="Video Kursus" h2="Lihat Courses" h3="Lihat Mentors" h4="Contact Kami"
        h5="Cabang di Indonesia" h6="Pelanggan Terdaftar" h7="Jam Belajar Per Minggu" h8="Video Belajar"
        v1="12" v2="300+" v3="40" v4="Unlimited"
        link1="https://youtube.com/@amellperalta?si=OPf-D9wX3GrBy1PE"
        link2="/courses"
        link3="/mentors"
        link4="/contact"
        picture="https://media.istockphoto.com/id/2149838473/id/foto/pertemuan-bisnis-latar-belakang-kabur-dan-orang-orang-di-kantor-untuk-kerja-tim-kolaborasi-dan.jpg?s=612x612&w=0&k=20&c=xkalwrUtViw8Peawc56MK-zRzg9xWcNBAnTHzR9zcvc="
      />
      <Testimonials
        h1="Apa Kata Mereka Tentang Kami?"
        prev="Sebelumnya"
        next="Berikutnya"
        testimonials={testimonialData}
      />
      <Download
        title1="Belajar Di manapun dan Kapanpun"
        title2="Tetap Update Pembelajaran dan Temukan Study Buddy di IOS dan Android. Download Aplikasinya Hari Ini"
        desc1="Download di"
        desc2="Mac App Store"
        desc3="Dapatkan di"
        desc4="Google Play" />
    </>
  );
}

export default HomePage;
