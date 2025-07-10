import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FeatureList from '../components/ui/FeatureList';
import Header from '../components/layout/Header';
import axiosInstance from '../api/axiosInstance';
import LoadingSpinner from '../components/ui/LoadingSpinner';

function RegistrationPage(props) {
    const { featureTitle, titleHistory, desc1, desc2, harga1, desc3, desc4, harga2, desc5, harga3, titleForm, form1, form2, form3, send } = props;
    const { courseId } = useParams();
    const navigate = useNavigate();

    const [course, setCourse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchCourseDetail = async () => {
            try {
                setIsLoading(true);
                const response = await axiosInstance.get(`/data/${courseId}`);
                setCourse(response.data);
            } catch (err) {
                setError("Tidak dapat menemukan detail kursus untuk pendaftaran.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchCourseDetail();
    }, [courseId]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const registrationData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            courseTitle: course.title,
            courseId: course.id,
        };

        try {
            const response = await axiosInstance.post('/registrations', registrationData);
            console.log("API merespons:", response);
            alert(`Pendaftaran untuk "${course.title}" berhasil!`);
            navigate('/');

        } catch (error) {
            alert("Terjadi kesalahan saat mengirim pendaftaran. Lihat console untuk detail.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }
    if (error || !course) return <div className="text-center py-20 text-2xl text-red-500">❌ {error || "Kursus tidak ditemukan."}</div>;

    return (
        <div className="py-16 px-4 max-w-6xl mx-auto">
            <div className='-mt-5 mb-12'>
                <Header
                    variant="simple"
                    title1="Formulir Pendaftaran"
                    title2={course.harga}
                    h1={course.title}
                    picture={course.picture}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div id="defaultTabContent">
                            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-pink-800" id="services" role="tabpanel" aria-labelledby="services-tab">
                                <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">{featureTitle}</h2>
                                <div className="feature-list-container">
                                    <FeatureList features={course.fitur} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-4 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-pink-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{titleHistory}</h5>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <div className="shrink-0">
                                            <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-700 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-pink-600 dark:text-pink-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l.218-.318.942-.941.06-.061.012-.012L9.414 9H14a1 1 0 00.894-.553l3-6A1 1 0 0017 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {desc1}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {desc2}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            {harga1}
                                        </div>
                                    </div>
                                </li>

                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <div className="shrink-0">
                                            <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-700 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-pink-600 dark:text-pink-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l.218-.318.942-.941.06-.061.012-.012L9.414 9H14a1 1 0 00.894-.553l3-6A1 1 0 0017 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {desc3}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {desc4}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            {harga2}
                                        </div>
                                    </div>
                                </li>

                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center">
                                        <div className="shrink-0">
                                            <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-700 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-pink-600 dark:text-pink-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l.218-.318.942-.941.06-.061.012-.012L9.414 9H14a1 1 0 00.894-.553l3-6A1 1 0 0017 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {desc1}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {desc5}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            {harga3}
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

                <div className="form-container bg-gray-50 dark:bg-pink-800 p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{titleForm}</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white text-left">{form1}</label>
                            <input type="text" id="name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                placeholder='Nama Anda' required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white text-left">{form2}</label>
                            <input type="email" id="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                placeholder='Email Anda' required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white text-left">{form3}</label>
                            <input type="tel" id="phone" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                placeholder='Nomor Telepon Anda' required />
                        </div>
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-pink-700 text-white font-bold rounded-lg hover:bg-pink-600 transition-colors duration-300 disabled:bg-gray-400"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Mengirim...' : send}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default RegistrationPage;