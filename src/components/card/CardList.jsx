import { useState, useEffect } from 'react';
import Card from './Card';

function CardList(props) {
    const { title, items, itemType } = props;

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState(items || []);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (items) {
            const results = items.filter(item =>
                (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
            );
            setFilteredItems(results);
        }
    }, [searchTerm, items]);

    const itemsToShow = showAll ? filteredItems : (filteredItems ? filteredItems.slice(0, 3) : []);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
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
                {itemsToShow && itemsToShow.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        itemType={itemType}
                        title={item.title}
                        description={item.description}
                        tag={item.tag}
                        picture={item.picture}
                        harga={item.harga}
                        fitur={item.fitur}
                    />
                ))}
            </div>

            {filteredItems && filteredItems.length > 3 && (
                <div className="mt-12 text-center">
                    <button
                        onClick={toggleShowAll}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                        {showAll ? 'Sebagian' : 'Selengkapnya'}
                        <svg
                            className={`ml-3 -mr-1 h-5 w-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}

export default CardList;