import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/admin/Sidebar';

function AdminLayout() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-grow p-8 bg-gray-100 dark:bg-gray-900">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;