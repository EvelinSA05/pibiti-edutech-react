import { useState, useEffect } from 'react';
import axiosInstance from '../../api/axiosInstance';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

function AdminContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContacts = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get('/data?category=contact');
      setContacts(response.data.reverse());
    } catch (err) {
      setError("Gagal memuat data kontak.");
      console.error("Error fetching contacts:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (contactId) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus pesan ini?")) {
      try {
        await axiosInstance.delete(`/data/${contactId}`);
        alert('Pesan berhasil dihapus!');
        fetchContacts();
      } catch (err) {
        alert('Gagal menghapus pesan.');
      }
    }
  };

  if (isLoading) {
    return <LoadingSpinner />
  }
  if (error) return <div className="text-center py-20 text-2xl font-semibold text-red-500">❌ {error}</div>

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Data Pesan Masuk</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Nama Pengirim</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Pesan</th>
              <th scope="col" className="px-6 py-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="bg-white border-b dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">{contact.name}</th>
                <td className="px-6 py-4">{contact.email}</td>
                <td className="px-6 py-4 max-w-sm truncate">{contact.message}</td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => handleDelete(contact.id)} className="font-medium text-gray-900 hover:underline">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {contacts.length === 0 && (
        <p className="text-center py-10">Belum ada pesan yang masuk.</p>
      )}
    </div>
  );
}

export default AdminContactsPage;