import { useState, useEffect } from 'react';
import CardList from '../components/card/CardList';
import LoadingSpinner from '../components/ui/LoadingSpinner'; // <-- 1. Import Spinner
import axiosInstance from '../api/axiosInstance';

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axiosInstance.get('/data?category=course');
        setCourses(response.data);
      } catch (err) {
        setError("Gagal memuat data kursus. Silakan coba lagi nanti.");
        console.error("Error fetching courses:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-center py-20 text-2xl font-semibold text-red-500">❌ {error}</div>;
  }

  return (
    <CardList
      title="Semua Paket Belajar"
      items={courses}
      itemType="course"
    />
  );
}

export default CoursesPage;