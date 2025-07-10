import { NavLink } from 'react-router-dom';

function Sidebar() {
    const linkStyle = "block px-4 py-2 text-lg text-gray-200 rounded-md hover:bg-pink-700";
    const activeLinkStyle = "bg-pink-700";

    return (
        <aside className="w-64 bg-pink-900 text-white p-4 shrink-0">
            <h2 className="text-2xl font-bold mb-8">Admin Menu</h2>
            <nav>
                <ul>
                    <li className="mb-2">
                        <NavLink to="/admin" end className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
                            Data Pendaftaran
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/admin/courses" className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
                            Data Kursus
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/admin/mentors" className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
                            Data Mentor
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink to="/admin/contacts" className={({ isActive }) => `${linkStyle} ${isActive ? activeLinkStyle : ''}`}>
                            Data Kontak & FAQ
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;