function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-pink-900 p-8 rounded-lg shadow-xl relative w-full max-w-md">
                <button onClick={onClose} className="absolute top-3 right-4 text-2xl font-bold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">&times;</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;