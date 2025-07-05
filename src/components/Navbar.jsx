import { useState, useContext } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Modal from './Modal';
import { ThemeContext } from '../context/ThemeContext';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar(props) {
    const { nav1, nav2, nav3, nav4, nav5 } = props;
    const navigation = [
        { name: nav1, href: '#', current: true },
        { name: nav2, href: '#', current: false },
        { name: nav3, href: '#', current: false },
        { name: nav4, href: '#', current: false },
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Disclosure as="nav" className="bg-pink-900 sticky top-0 z-50">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                                <span className="absolute -inset-0.5" />
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <img
                                    alt="Your Company"
                                    src="wmremove-transformed.png"
                                    className="h-17 w-auto"
                                />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current ? 'bg-pink-700 text-white' : 'text-gray-300 hover:bg-pink-700 hover:text-white',
                                                'rounded-md mt-4 px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-white bg-pink-700 hover:bg-pink-600 mr-4"
                                aria-label="Toggle theme"
                            >
                                {theme === 'light' ? '🌙' : '☀️'}
                            </button>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="relative flex rounded-full bg-pink-700 hover:bg-pink-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-800"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                {nav5}
                            </button>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-red-800 text-white' : 'text-gray-300 hover:bg-red-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Hubungi Tutor</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">Silakan isi formulir di bawah ini, dan tutor kami akan segera menghubungi Anda.</p>
                <form>
                    <div className="mb-4">
                        <label htmlFor="modal-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Anda</label>
                        <input type="text" id="modal-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5" placeholder="John Doe" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="modal-question" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pertanyaan Anda</label>
                        <textarea id="modal-question" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pink-500 focus:border-pink-500" placeholder="Saya ingin bertanya tentang..."></textarea>
                    </div>
                    <button type="submit" className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Kirim Pertanyaan</button>
                </form>
            </Modal>
        </>
    );
}

export default Navbar;
