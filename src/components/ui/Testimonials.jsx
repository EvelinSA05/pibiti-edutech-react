import { useState } from 'react';

function Testimonials(props) {
    const { h1, testimonials, prev, next } = props;
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(testimonials[(startIndex + i) % testimonials.length]);
        }
        return visible;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <div className="text-center mt-12 py-12">
            <h2 className="text-4xl font-bold text-shadow-red-900">{h1}</h2>

            <div className="mt-8 border-y-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {visibleTestimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="flex items-center gap-4 text-shadow-slate-600">
                            <img src={testimonial.picture} alt={testimonial.name} className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center" />
                            <div className="flex w-full flex-col text-left">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-xl font-bold text-shadow-slate-600 ">
                                        {testimonial.name}
                                    </h5>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-left">
                            <p className="text-base text-shadow-slate-600 font-light leading-normal">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center my-6 gap-4">
                <button onClick={handlePrev} className="px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-600">
                    &#8592; {prev}
                </button>
                <button onClick={handleNext} className="px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-600">
                    {next} &#8594;
                </button>
            </div>
        </div>
    );
}

export default Testimonials;