import { Link } from 'react-router-dom';

function Card(props) {
  const { id, itemType, title, harga, fitur, picture, description } = props;

  return (
    <div className="max-w-xs h-full rounded overflow-hidden shadow-lg bg-pink-800 flex flex-col">
      <img className="w-full h-48 object-cover" src={picture} alt={title} />

      <div className="px-6 py-4 flex-grow flex flex-col">
        <div className="font-bold text-xl mb-2 text-gray-100">{title}</div>
        <div className="text-lg mb-2 text-gray-100">{description}</div>
        {harga && <p className="text-2xl font-semibold text-pink-300 mb-4">{harga}</p>}
        {fitur && Array.isArray(fitur) && (
          <ul className="text-left space-y-1 list-disc list-inside text-gray-200">
            {fitur.slice(0, 2).map((fiturItem, index) => (
              <li key={index}>{fiturItem}</li>
            ))}
          </ul>
        )}
      </div>
      {itemType === 'course' && (
        <div className="px-6 pt-4 pb-2 mt-auto flex justify-between items-center">
          <Link
            to={`/register/${id}`}
            className="bg-pink-600 hover:bg-pink-500 gap-2 text-white font-bold py-2 px-28 rounded-full"
          >
            Daftar
          </Link>
        </div>
      )}
    </div>

  );
}

export default Card;