import { useState, useEffect } from 'react';
import Card from './Card';
import Modal from './Modal';

function CardList(props) {
    const { title, items } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        const results = items.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(results);
    }, [searchTerm, items]);

    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };


    return (
        <>
            <div className="text-center py-16">
                <h2 className="text-4xl font-bold text-shadow-red-900">{title}</h2>
                <div className="mt-8 mb-12 max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder={`Cari di ${title}...`}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                description={item.description}
                                tag={item.tag}
                                picture={item.picture}
                                onRegisterClick={() => handleOpenModal(item)}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-3 text-xl dark:text-white">Data tidak ditemukan.</p>
                    )}
                </div>
            </div>

            {selectedItem && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{selectedItem.title}</h2>
                    <img className="w-full h-48 object-cover rounded-md my-4" src={selectedItem.picture} alt={selectedItem.title} />
                    <p className="mb-6 text-gray-600 dark:text-gray-300 ">{selectedItem.description}</p>
                    <button
                        type="button"
                        className="text-white bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
                    >
                        Konfirmasi Pendaftaran
                    </button>
                </Modal>
            )}
        </>
    );
}

export default CardList;