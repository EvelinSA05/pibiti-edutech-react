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
        setError(null);
        const response = await axiosInstance.get('/data');
        const mentorData = response.data.filter(item => item.category === 'mentor');
        setMentors(mentorData);
      } catch (err) {
        setError("Gagal memuat data mentor. Silakan coba lagi nanti.");
        console.error("Error fetching mentors:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMentors();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />
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