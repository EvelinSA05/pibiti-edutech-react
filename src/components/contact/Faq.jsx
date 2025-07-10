import { useState } from 'react';

function Faq(props) {
    const { title, items } = props;

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white dark:bg-pink-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-red-900 dark:text-white">{title}</h2>
                <div className="grid pt-8 text-left border-t border-gray-200 dark:border-gray-700">
                    {items.map((item, index) => (
                        <div key={index} className="mb-10">
                            <h3
                                className="flex justify-between items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer"
                                onClick={() => toggleFaq(index)}
                            >
                                <span>{item.question}</span>

                                <svg
                                    className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </h3>

                            {activeIndex === index && (
                                <p className="text-gray-500 dark:text-gray-400">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;