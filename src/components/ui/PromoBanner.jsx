import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PromoBanner() {
  const targetDate = new Date('2025-07-20T23:59:59');

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Menit: Math.floor((difference / 1000 / 60) % 60),
        Detik: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-pink-500 to-red-500 dark:from-pink-800 dark:to-red-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-wider text-pink-200">Festival Promo Akhir Tahun</h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Diskon hingga 50%
            </p>
            <p className="mt-4 max-w-2xl text-lg text-pink-100">
              Jangan lewatkan kesempatan emas untuk tingkatkan keahlian Anda! Dapatkan akses ke semua kursus premium kami dengan harga terbaik.
            </p>
            <div className="mt-8">
              <Link
                to="/courses"
                className="inline-block bg-red-900 text-pink-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-transform duration-300"
              >
                Lihat Semua Kursus
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end space-x-2 sm:space-x-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center text-center p-3 sm:p-4 bg-white/20 rounded-lg backdrop-blur-sm w-20 sm:w-24">
                <span className="text-3xl sm:text-4xl font-bold">{value}</span>
                <span className="text-xs sm:text-sm uppercase mt-1">{unit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoBanner;