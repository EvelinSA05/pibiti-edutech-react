import ContactSection from '../components/contact/ContactSection';

function ContactPage({ faqItems }) {
  return (
    <ContactSection
      title="Hubungi Kami"
      description="Punya pertanyaan? Lihat pertanyaan yang sering diajukan atau kirimkan pertanyaan Anda melalui form di bawah ini."
      faqData={faqItems}
    />
  );
}

export default ContactPage;