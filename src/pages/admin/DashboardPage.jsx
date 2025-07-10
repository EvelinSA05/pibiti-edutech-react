import { useState, useEffect } from 'react';
import axiosInstance from '../../api/axiosInstance';
import Modal from '../../components/ui/Modal';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

function AdminPage() {
  const [registrations, setRegistrations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReg, setSelectedReg] = useState(null);

  const fetchRegistrations = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get('/registrations');
      setRegistrations(response.data.reverse());
    } catch (err) {
      setError("Gagal memuat data pendaftaran.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  // FUNGSI UNTUK UPDATE & DELETE 

  const handleOpenModal = (registration) => {
    setSelectedReg(registration);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReg(null);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    if (!selectedReg) return;

    const updatedData = {
      name: event.target.name.value,
      email: event.target.email.value,
    };

    try {
      await axiosInstance.put(`/registrations/${selectedReg.id}`, updatedData);
      alert('Data berhasil diperbarui!');
      handleCloseModal();
      fetchRegistrations();
    } catch (err) {
      alert('Gagal memperbarui data.');
      console.error("Update error:", err);
    }
  };

  const handleDelete = async (registrationId) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      try {
        await axiosInstance.delete(`/registrations/${registrationId}`);
        alert('Data berhasil dihapus!');
        fetchRegistrations();
      } catch (err) {
        alert('Gagal menghapus data.');
        console.error("Delete error:", err);
      }
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) return <div className="text-center py-20 text-2xl text-red-500">❌ {error}</div>

  return (
    <>
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-900 dark:text-red-300 mb-12">Data Pendaftar</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="...">
              <tr>
                <th scope="col" className="px-6 py-3">Nama</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Kursus</th>
                <th scope="col" className="px-6 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((reg) => (
                <tr key={reg.id} className="bg-white border-b dark:bg-gray-800">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">{reg.name}</th>
                  <td className="px-6 py-4">{reg.email}</td>
                  <td className="px-6 py-4">{reg.courseTitle}</td>
                  <td className="px-6 py-4 text-right space-x-4">
                    <button onClick={() => handleOpenModal(reg)} className="font-medium text-gray-900 hover:underline">Edit</button>
                    <button onClick={() => handleDelete(reg.id)} className="font-medium text-gray-900 hover:underline">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedReg && (
          <form onSubmit={handleUpdate}>
            <h2 className="text-2xl text-gray-300 font-bold mb-4">Edit Pendaftaran</h2>
            <div className="mb-4">
              <label htmlFor="edit-name" className="block text-white text-left mb-2 text-sm font-medium">Nama</label>
              <input type="text" id="edit-name" name="name" defaultValue={selectedReg.name} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" required />
            </div>
            <div className="mb-6">
              <label htmlFor="edit-email" className="block text-white text-left mb-2 text-sm font-medium">Email</label>
              <input type="email" id="edit-email" name="email" defaultValue={selectedReg.email} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" required />
            </div>
            <button type="submit" className="w-full text-white bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Simpan Perubahan</button>
          </form>
        )}
      </Modal>
    </>
  );
}

export default AdminPage;