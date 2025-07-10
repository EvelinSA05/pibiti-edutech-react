import { Link } from 'react-router-dom';

function CTASection() {
    // Anda bisa mengganti URL gambar ini dengan gambar lain yang Anda suka
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop';

    return (
        // Container utama dengan posisi relatif
        <div className="relative bg-gray-800">
            {/* Latar belakang gambar dan overlay gelap */}
            <div className="absolute inset-0">
                <img className="w-full h-full object-cover" src={backgroundImageUrl} alt="Tim Study Buddy" />
                <div className="absolute inset-0 bg-pink-900/70 mix-blend-multiply" aria-hidden="true" />
            </div>

            {/* Konten yang berada di atas gambar */}
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Kolom Kiri: Teks Ajakan */}
                    <div className="text-center md:text-left">
                        <p className="text-pink-200 font-semibold">Masih punya pertanyaan?</p>
                        <h2 className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                            Tanyakan via chat ke<br />Konsultan Pendidikan
                        </h2>
                    </div>
                    {/* Kolom Kanan: Tombol Aksi */}
                    <div className="mt-8 lg:mt-0 flex justify-center md:justify-end">
                        <div className="inline-flex rounded-md shadow">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-pink-700 bg-pink-700 hover:bg-pink-400 transition-colors"
                            >
                                <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 13.352V14.5a1.5 1.5 0 01-1.5 1.5h-1.054a10.5 10.5 0 01-10.72-10.722V3.5z" />
                                </svg>
                                Chat Konsultan
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CTASection;