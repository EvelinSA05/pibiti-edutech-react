function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div
                className="w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-pink-500 border-t-transparent"
            ></div>
            <p className="mt-4 text-lg font-semibold text-shadow-red-700 ">
                Memuat data...
            </p>
        </div>
    );
}

export default LoadingSpinner;