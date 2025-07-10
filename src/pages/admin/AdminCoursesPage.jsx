import { useState, useEffect } from 'react';
import axiosInstance from '../../api/axiosInstance';
import Modal from '../../components/ui/Modal';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

function AdminCoursesPage() {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const fetchCourses = async () => {
        try {
            setIsLoading(true);
            const response = await axiosInstance.get('/data?category=course');
            setCourses(response.data);
        } catch (err) {
            setError("Gagal memuat data kursus.");
            console.error("Error fetching courses:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    // --- FUNGSI UNTUK UPDATE & DELETE ---

    const handleOpenModal = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        if (!selectedCourse) return;

        const updatedData = {
            title: event.target.title.value,
            harga: event.target.harga.value,
            description: event.target.description.value,
        };

        try {
            await axiosInstance.put(`/data/${selectedCourse.id}`, updatedData);
            alert('Data kursus berhasil diperbarui!');
            handleCloseModal();
            fetchCourses();
        } catch (err) {
            alert('Gagal memperbarui data kursus.');
            console.error("Update error:", err);
        }
    };

    const handleDelete = async (courseId) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus data kursus ini?")) {
            try {
                await axiosInstance.delete(`/data/${courseId}`);
                alert('Data kursus berhasil dihapus!');
                fetchCourses();
            } catch (err) {
                alert('Gagal menghapus data kursus.');
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
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Manajemen Data Kursus</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Judul Kursus</th>
                            <th scope="col" className="px-6 py-3">Harga</th>
                            <th scope="col" className="px-6 py-3 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course.id} className="bg-white border-b dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">{course.title}</th>
                                <td className="px-6 py-4">{course.harga}</td>
                                <td className="px-6 py-4 text-right space-x-4">
                                    <button onClick={() => handleOpenModal(course)} className="font-medium text-gray-900 hover:underline">Edit</button>
                                    <button onClick={() => handleDelete(course.id)} className="font-medium text-gray-900 hover:underline">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedCourse && (
                    <form onSubmit={handleUpdate}>
                        <h2 className="text-2xl font-bold mb-4 text-white">Edit Data Kursus</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="edit-title" className="block mb-2 text-sm font-medium text-white text-left">Judul Kursus</label>
                                <input type="text" id="edit-title" name="title" defaultValue={selectedCourse.title} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" required />
                            </div>
                            <div>
                                <label htmlFor="edit-harga" className="block mb-2 text-sm font-medium text-white text-left">Harga</label>
                                <input type="text" id="edit-harga" name="harga" defaultValue={selectedCourse.harga} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" required />
                            </div>
                            <div>
                                <label htmlFor="edit-description" className="block mb-2 text-sm font-medium text-white text-left">Deskripsi</label>
                                <textarea id="edit-description" name="description" defaultValue={selectedCourse.description} rows="4" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" required />
                            </div>
                        </div>
                        <button type="submit" className="mt-6 w-full text-white bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Simpan Perubahan</button>
                    </form>
                )}
            </Modal>
        </>
    );
}

export default AdminCoursesPage;