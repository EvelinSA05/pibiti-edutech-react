import { Link } from 'react-router-dom';

function Card(props) {
  const { id, title, harga, picture, tag, rating, reviews, originalPrice, discount, itemType, fitur, pengalaman } = props;

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-pink-800 dark:border-gray-700 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Link to={`/register/${id}`}>
        <img className="rounded-t-lg h-48 w-full object-cover" src={picture} alt={title} />
      </Link>

      <div className="px-5 pb-5 pt-3 flex-grow flex flex-col">
        <Link to={`/register/${id}`}>
          <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400">
            {title}
          </h3>
        </Link>
        {itemType === 'course' && (
          <>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 6.847l-5.051.734A1.535 1.535 0 0 0 1.455 9.41l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.545 9.41a1.535 1.535 0 0 0 .379-1.785Z" />
                  </svg>
                ))}
              </div>
              <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-800 ms-3">{rating} ({reviews})</span>
              <div className="mb-2 ml-7 space-y-2">
                {fitur && Array.isArray(fitur) && fitur.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-start text-left">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {itemType === 'mentor' && (
          <>
            <p className="text-md font-semibold text-pink-600 dark:text-pink-400 mb-3">{tag}</p>
            <div className="text-left mt-2 flex-grow">
              <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Pengalaman Unggulan:</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {pengalaman && pengalaman.slice(0, 3).map((exp, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        <div className="flex-grow"></div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-sm font-bold text-red-400 line-through animate-pulse">{originalPrice}</span>
            )}
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{harga}</span>
          </div>
          {itemType === 'course' && (
            <Link
              to={`/register/${id}`}
              className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-500 dark:hover:bg-pink-600 dark:focus:ring-pink-800"
            >
              Beli Paket
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;