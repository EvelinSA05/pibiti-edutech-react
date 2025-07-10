import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import LoadingSpinner from '../components/ui/LoadingSpinner';

function CourseDetailPage(props) {
    const { back, feature, regist } = props;
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                setIsLoading(true);
                const response = await axiosInstance.get(`/data/${courseId}`);
                setCourse(response.data);
            } catch (err) {
                setError("Gagal menemukan detail kursus.");
                console.error("Error fetching course detail:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourse();
    }, [courseId]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error || !course) {
        return <div className="text-center py-20 text-2xl text-red-500">❌ {error || "Kursus tidak ditemukan."}</div>;
    }

    return (
        <div className="py-16 px-4 max-w-4xl mx-auto">
            <img className="w-full h-64 object-cover rounded-lg shadow-lg mb-8" src={course.picture} alt={course.title} />
            <h1 className="text-4xl font-bold text-red-900 dark:text-red-300 mb-2">{course.title}</h1>
            <p className="text-3xl font-light text-pink-700 dark:text-pink-400 mb-6">{course.harga}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {course.description}
            </p>

            <h2 className="text-2xl font-bold text-red-900 dark:text-red-300 mb-4">{feature}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {course.fitur.map((fitur, index) => (
                    <li key={index}>{fitur}</li>
                ))}
            </ul>

            <div className="mt-12 text-center">
                <Link to={`/register/${course.id}`} className="px-8 py-3 bg-pink-700 text-white font-bold rounded-lg hover:bg-pink-600">
                    {regist}
                </Link>
            </div>
        </div>
    );
}

export default CourseDetailPage;