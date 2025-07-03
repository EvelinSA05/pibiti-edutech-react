function Form(props) {
    const { title, description, f1, f2, f3, b1 } = props;
    return (
        <div className="flex flex-col items-center py-16 px-6">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
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
                        <form className="w-full max-w-xl mx-auto text-left">
                            <div className="mb-6">
                                <label className="block text-gray-200 font-bold mb-2" htmlFor="name">
                                    {f1}
                                </label>
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" placeholder="Nama Anda" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-200 font-bold mb-2" htmlFor="email">
                                    {f2}
                                </label>
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" placeholder="Email Anda" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-200 font-bold mb-2" htmlFor="suggestion">
                                    {f3}
                                </label>
                                <textarea name="suggestion" id="suggestion" rows="4" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Saran Anda"></textarea>
                            </div>
                            <div>
                                <button className="shadow bg-purple-100 hover:bg-purple-100 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    {b1}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form