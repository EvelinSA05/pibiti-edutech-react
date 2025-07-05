import { useState } from 'react';

function Card(props) {
    const { title, description, tag, picture, onRegisterClick } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const characterLimit = 100;
    const isLongDescription = description.length > characterLimit;
    const displayedDescription = isExpanded
        ? description
        : `${description.substring(0, characterLimit)}${isLongDescription ? '...' : ''}`;


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-800 flex flex-col">
            <img className="w-full h-48 object-cover" src={picture} alt={title} />

            <div className="px-6 py-4 flex-grow flex flex-col">
                <div className="font-bold text-xl mb-2 text-gray-100">{title}</div>
                <p className="text-gray-100 text-base text-left">
                    {displayedDescription}
                </p>

                {isLongDescription && (
                    <button onClick={toggleExpand} className="text-pink-300 hover:text-pink-200 font-bold mt-2 self-start">
                        {isExpanded ? 'Sembunyikan' : 'Selengkapnya...'}
                    </button>
                )}
            </div>

            <div className="px-6 pt-4 pb-2 mt-auto">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>

                <button
                    onClick={onRegisterClick}
                    className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full float-right"
                >
                    Daftar
                </button>
            </div>
        </div>
    );
}

export default Card;