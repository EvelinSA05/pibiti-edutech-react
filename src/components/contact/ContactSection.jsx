import Faq from './Faq';
import Form from './Form';

function ContactSection(props) {
    const { title, description, faqData } = props;

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
                    <div className="form-column">
                        <Form
                            title="Hubungi Kami"
                            description="Silakan isi form di bawah ini untuk mengirimkan pesan atau pertanyaan Anda. Kami akan segera merespons."
                            f1="Nama Anda"
                            f2="Email Anda"
                            f3="Pesan Anda"
                            b1="Kirim Pesan"
                        />
                    </div>
                    <div className="faq-column">
                        <Faq
                            title="Frequently Asked Questions"
                            items={faqData}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;