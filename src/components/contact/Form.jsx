import { useState } from 'react';
import axiosInstance from '../../api/axiosInstance';

function Form(props) {
    const { title, description, f1, f2, f3, b1 } = props;
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const contactData = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
            category: "contact"
        };

        try {
            await axiosInstance.post('/data', contactData);
            alert('Pesan Anda telah berhasil dikirim! Terima kasih.');
            event.target.reset();
        } catch (error) {
            alert('Gagal mengirim pesan. Silakan coba lagi.');
            console.error("Contact form error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <div className="flex flex-col items-center py-16 px-6">
            <div className="max-w-sm -mt-16 w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('https://i.pinimg.com/736x/04/fe/2c/04fe2c3044fd7af0951cabf5a478834b.jpg')" }}>
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-pink-800 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-left mb-12">
                            <h1 className="text-2xl font-bold text-gray-200">
                                {title}
                            </h1>
                            <p className="mt-4 text-lg text-gray-200">
                                {description}
                            </p>
                        </div>
                        <form className="w-full max-w-xl mx-auto text-left" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block text-gray-200 font-bold mb-2" htmlFor="name">
                                    {f1}
                                </label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Nama Anda"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-200 font-bold mb-2" htmlFor="email">
                                    {f2}
                                </label>
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email Anda"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-200 font-bold mb-2" htmlFor="suggestion">
                                    {f3}
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    placeholder="Saran Anda"
                                ></textarea>
                            </div>
                            <div className="text-center pt-4">
                                <button type="submit" className="w-full px-8 py-3 bg-pink-700 text-white font-bold rounded-lg disabled:bg-gray-400" disabled={isSubmitting}>
                                    {isSubmitting ? 'Mengirim...' : b1}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;