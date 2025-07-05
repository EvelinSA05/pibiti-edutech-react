import Faq from './Faq';
import Form from './Form';

function ContactSection(props) {
    const { title, description } = props;
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-shadow-red-900">{title}</h2>
                    <p className="mt-4 text-lg text-shadow-pink-800">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="faq-column">
                        <Faq
                            title="Frequently Asked Questions"
                            a1="Apa itu Kursus Online Study Buddy?"
                            a2="Bagaimana cara mendaftar kursus?"
                            a3="Apakah ada biaya untuk mengikuti kursus?"
                            a4="Apakah ada kursus gratis yang tersedia?"
                            d1="Kursus Online Study Buddy adalah platform pembelajaran yang menyediakan berbagai kursus online dalam berbagai bidang, termasuk pemrograman, desain, dan bisnis. Kursus ini dirancang untuk membantu siswa belajar dengan cara yang fleksibel dan mudah diakses."
                            d2="Untuk mendaftar kursus, Anda dapat mengunjungi situs web Study Buddy dan memilih kursus yang Anda minati. Setelah itu, Anda dapat mengikuti petunjuk pendaftaran yang tersedia di situs tersebut."
                            d3="Ya, ada biaya untuk mengikuti kursus. Biaya bervariasi tergantung pada jenis kursus yang Anda pilih. Namun, kami juga menyediakan beberapa kursus gratis yang dapat diakses oleh siapa saja."
                            d4="Ya, kami menyediakan beberapa kursus gratis yang dapat diakses oleh siapa saja. Kursus gratis ini mencakup berbagai topik dan dirancang untuk memberikan pengenalan dasar kepada siswa sebelum mereka memutuskan untuk mengikuti kursus berbayar."
                        />
                    </div>
                    <div className="form-column">
                        <Form
                            title="Hubungi Kami"
                            description="Silakan isi form di bawah ini untuk mengirimkan pesan atau pertanyaan Anda. Kami akan segera merespons."
                            f1="Nama Anda"
                            f2="Email Anda"
                            f3="Saran Anda"
                            b1="Kirim Pesan"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;