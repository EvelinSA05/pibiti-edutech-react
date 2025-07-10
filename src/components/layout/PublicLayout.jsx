import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function PublicLayout() {
    return (
        <>
            <Navbar
                nav1="Home"
                nav2="Courses"
                nav3="Mentors"
                nav4="Contact"
                nav5="Hubungi Tutor"
                link1="/"
                link2="/courses"
                link3="/mentors"
                link4="/contact"
                descModal="Silakan isi formulir di bawah ini, dan tutor kami akan segera menghubungi Anda."
                form1="Nama Anda"
                form2="Pertanyaan Anda"
                send="Kirim Pertanyaan"
            />
            <main>
                <Outlet />
            </main>
            <Footer
                title="Study Buddy - EduTech Platform"
                t1="Tentang Kami" t2="Komunitas" t3="Legal"
                d1="Course" d2="Mentors"
                d3="WhatsApp" d4="Instagram"
                d5="Kebijakan Privasi" d6="Syarat & Ketentuan"
                d7="© 2025 Study Buddy. " d8="All Rights Reserved."
            />
        </>
    );
}

export default PublicLayout;