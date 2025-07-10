import { useState, useContext } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ThemeContext } from '../../context/ThemeContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

function Navbar(props) {
    const { nav1, nav2, nav3, nav4, link1, link2, link3, link4 } = props;
    const { theme, toggleTheme } = useContext(ThemeContext);

    const navigation = [
        { name: nav1, to: link1 },
        { name: nav2, to: link2 },
        { name: nav3, to: link3 },
        { name: nav4, to: link4 },
    ];

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
        </>
    );
}

export default Navbar;