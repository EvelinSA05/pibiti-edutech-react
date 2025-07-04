function Header(props) {
    const { title1, title2, h1, h2, h3, h4, h5, h6, h7, h8, v1, v2, v3, v4, picture } = props;
    const links = [
        { name: h1, href: '#' },
        { name: h2, href: '#' },
        { name: h3, href: '#' },
        { name: h4, href: '#' },
    ]
    const stats = [
        { name: h5, value: v1 },
        { name: h6, value: v2 },
        { name: h7, value: v3 },
        { name: h8, value: v4 },
    ]
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-32">
            <img
                alt=""
                src={picture}
                className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
            />
            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div className="mx-auto items-start -mt-20 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold tracking-tight !text-red-800 sm:text-7xl">{title1}</h2>
                    <p className="mt-8 text-lg font-medium text-pretty !text-pink-700 sm:text-xl/8">
                        {title2}
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-red-600 sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <a key={link.name} href={link.href} className="!text-pink-800 hover:!text-red-800 !font-semibold" >
                                {link.name} <span aria-hidden="true">&rarr;</span>
                            </a>
                        ))}
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-red-200  bg-pink-700">{stat.name}</dt>
                                <dd className="text-4xl font-semibold tracking-tight bg-pink-900 text-red-100">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>

    );
}

export default Header;