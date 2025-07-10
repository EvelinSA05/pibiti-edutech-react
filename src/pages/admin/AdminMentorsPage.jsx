import { useState, useEffect } from 'react';
import axiosInstance from '../../api/axiosInstance';
import Modal from '../../components/ui/Modal';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

function AdminMentorsPage() {
    const [mentors, setMentors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMentor, setSelectedMentor] = useState(null);

    const fetchMentors = async () => {
        try {
            setIsLoading(true);
            const response = await axiosInstance.get('/data?category=mentor');
            setMentors(response.data);
        } catch (err) {
            setError("Gagal memuat data mentor.");
            console.error("Error fetching mentors:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMentors();
    }, []);

    // --- FUNGSI UNTUK UPDATE & DELETE ---

    const handleOpenModal = (mentor) => {
        setSelectedMentor(mentor);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedMentor(null);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        if (!selectedMentor) return;

        const updatedData = {
            title: event.target.title.value,
            description: event.target.description.value,
            tag: event.target.tag.value,
        };

        try {
            await axiosInstance.put(`/data/${selectedMentor.id}`, updatedData);
            alert('Data mentor berhasil diperbarui!');
            handleCloseModal();
            fetchMentors();
        } catch (err) {
            alert('Gagal memperbarui data mentor.');
            console.error("Update error:", err);
        }
    };

    const handleDelete = async (mentorId) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus data mentor ini?")) {
            try {
                await axiosInstance.delete(`/data/${mentorId}`);
                alert('Data mentor berhasil dihapus!');
                fetchMentors();
            } catch (err) {
                alert('Gagal menghapus data mentor.');
                console.error("Delete error:", err);
            }
        }
    };

    if (isLoading) {
        return <LoadingSpinner />
    }
    if (error) return <div className="text-center py-20 text-2xl font-semibold text-red-500">❌ {error}</div>

    return (
        <>
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Manajemen Data Mentor</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Nama Mentor</th>
                            <th scope="col" className="px-6 py-3">Deskripsi Singkat</th>
                            <th scope="col" className="px-6 py-3">Spesialisasi (Tag)</th>
                            <th scope="col" className="px-6 py-3 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mentors.map((mentor) => (
                            <tr key={mentor.id} className="bg-white border-b dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">{mentor.title}</th>
                                <td className="px-6 py-4">{mentor.description}</td>
                                <td className="px-6 py-4">{mentor.tag}</td>
                                <td className="px-6 py-4 text-right space-y-6">
                                    <button onClick={() => handleOpenModal(mentor)} className="font-medium text-gray-900 hover:underline">Edit</button>
                                    <button onClick={() => handleDelete(mentor.id)} className="font-medium text-gray-900 hover:underline">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedMentor && (
                    <form onSubmit={handleUpdate}>
                        <h2 className="text-2xl font-bold mb-4 text-white">Edit Data Mentor</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="edit-title" className="block mb-2 text-sm font-medium text-white text-left">Nama Mentor</label>
                                <input type="text" id="edit-title" name="title" defaultValue={selectedMentor.title} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" required />
                            </div>
                            <div>
                                <label htmlFor="edit-description" className="block mb-2 text-sm font-medium text-white text-left">Deskripsi</label>
                                <input type="text" id="edit-description" name="description" defaultValue={selectedMentor.description} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" required />
                            </div>
                            <div>
                                <label htmlFor="edit-tag" className="block mb-2 text-sm font-medium text-white text-left">Tag</label>
                                <input type="text" id="edit-tag" name="tag" defaultValue={selectedMentor.tag} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" required />
                            </div>
                        </div>
                        <button type="submit" className="mt-6 w-full text-white bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Simpan Perubahan</button>
                    </form>
                )}
            </Modal>
        </>
    );
}

export default AdminMentorsPage;