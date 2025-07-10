import { useState, useEffect } from 'react';
import CardList from '../components/card/CardList';
import axiosInstance from '../api/axiosInstance';
import LoadingSpinner from '../components/ui/LoadingSpinner';

function MentorsPage() {
  const [mentors, setMentors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get('/data?category=mentor');
        setMentors(response.data);
      } catch (err) {
        setError("Gagal memuat data mentor.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMentors();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-center py-20 text-2xl font-semibold text-red-500">❌ {error}</div>;
  }

  return (
    <CardList
      title="Para Mentor Study Buddy"
      items={mentors}
      itemType="mentor"
    />
  );
}

export default MentorsPage;