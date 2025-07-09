import { useState, useContext } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Modal from '../ui/Modal';
import { ThemeContext } from '../../context/ThemeContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function Navbar(props) {
    const { nav1, nav2, nav3, nav4, nav5, descModal, form1, form2, send, link1, link2, link3, link4 } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const navigation = [
        { name: nav1, to: link1 },
        { name: nav2, to: link2 },
        { name: nav3, to: link3 },
        { name: nav4, to: link4 },
    ];

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setIsModalOpen(false);
        alert('Pesan Anda telah berhasil dikirim! Anda akan diarahkan ke halaman utama.');
        navigate('/');
    };

    return (
        <>
            <Disclosure as="nav" className="bg-pink-900 sticky top-0 z-40">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                            </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link to="/">
                                    <img
                                        alt="Study Buddy"
                                        src="/wmremove-transformed.png"
                                        className="h-12 w-auto"
                                    />
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex items-center space-x-4 h-full">
                                    {navigation.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.to}
                                            className={({ isActive }) => classNames(
                                                isActive ? 'bg-pink-700 text-white' : 'text-gray-300 hover:bg-pink-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium'
                                            )}
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button onClick={toggleTheme} className="p-2 rounded-full text-white bg-pink-700 hover:bg-pink-600 mr-4">
                                {theme === 'light' ? '🌙' : '☀️'}
                            </button>
                            <button onClick={() => setIsModalOpen(true)} className="relative flex rounded-full bg-pink-700 hover:bg-pink-600 px-4 py-2 text-sm font-semibold text-white">
                                {nav5}
                            </button>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                className={({ isActive }) => classNames(
                                    isActive ? 'bg-red-800 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </Disclosure.Panel>
            </Disclosure>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{nav5}</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">{descModal}</p>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="modal-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{form1}</label>
                        <input type="text" id="modal-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5" placeholder="John Doe" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="modal-question" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{form2}</label>
                        <textarea id="modal-question" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500" placeholder="Saya ingin bertanya tentang..."></textarea>
                    </div>
                    <button type="submit" className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">{send}</button>
                </form>
            </Modal>
        </>
    );
}

export default Navbar;