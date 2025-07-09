function Header(props) {
    const { variant = 'full', title1, title2, h1, h2, h3, h4, h5, h6, h7, h8, v1, v2, v3, v4, picture } = props;

    if (variant === 'simple') {
        return (
            <div className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-2">
                <img
                    alt="Background"
                    src={picture}
                    className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-30"
                />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title1}</h2>
                        <p className="mt-4 text-3xl font-semibold text-pink-400">{h1}</p>
                        <p className="mt-6 text-2xl leading-8 font-semibold text-gray-300">{title2}</p>
                    </div>
                </div>
            </div>

        );
    }

    const links = [
        { name: h1, href: '#' }, { name: h2, href: '#' }, { name: h3, href: '#' }, { name: h4, href: '#' },
    ];
    const stats = [
        { name: h5, value: v1 }, { name: h6, value: v2 }, { name: h7, value: v3 }, { name: h8, value: v4 },
    ];

    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-32">
            <img
                alt=""
                src={picture}
                className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
            />
          
            <div className="mx-auto items-start -mt-20 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold tracking-tight !text-red-800 sm:text-7xl">{title1}</h2>
                    <p className="mt-8 text-lg font-medium text-pretty !text-pink-700 sm:text-xl/8">{title2}</p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-red-600 sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <a key={link.name} href={link.href} className="!text-pink-800 hover:!text-red-800 !font-semibold">
                                {link.name} <span aria-hidden="true">&rarr;</span>
                            </a>
                        ))}
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse gap-1">
                                <dt className="text-base/7 text-red-200 bg-pink-700">{stat.name}</dt>
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