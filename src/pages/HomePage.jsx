import Header from '../components/layout/Header';
import Testimonials from '../components/ui/Testimonials';
import Download from '../components/ui/Download';
import Card from '../components/card/Card';
import axiosInstance from '../api/axiosInstance';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PromoBanner from '../components/ui/PromoBanner';

function HomePage({ testimonialData }) {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedCourses = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get('/data');
        const courses = response.data.filter(item => item.category === 'course');
        setFeaturedCourses(courses.slice(0, 3));
      } catch (error) {
        console.error("Gagal memuat kursus unggulan:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedCourses();
  }, []);

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

      <PromoBanner />

      <div className="py-4 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-2 pb-5 text-5xl font-extrabold text-red-900 tracking-tight">Paket Unggulan</h2>
            <p className=" text-base text-pink-600 font-semibold tracking-wide">
              Mulai Perjalanan Belajar Anda
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {isLoading ? (
              <p>Memuat kursus...</p>
            ) : (
              featuredCourses.map((course) => (
                <Card
                  key={course.id}
                  id={course.id}
                  itemType="course"
                  {...course}
                />
              ))
            )}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
            >
              Lihat Semua Kursus
            </Link>
          </div>
        </div>
      </div>

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
