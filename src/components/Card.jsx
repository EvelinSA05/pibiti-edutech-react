function Card(props) {
    const { h1, title1, title2, title3, description1, description2, description3, tag1, tag2, tag3 } = props;
    return (
        <div>
            <h2 className="mt-20 text-4xl font-bold text-red-900">{h1}</h2>
            <div className="mt-12 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-800">
                    <img className="w-full" src="https://contentstatic.techgig.com/photo/msid-84838745,width-400,resizemode-4/A-brief-guide-for-coders-to-understand-the-programming-paradigms.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-gray-100">{title1}</div>
                        <p className="text-gray-100 text-base">
                            {description1}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag1}</span>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-800">
                    <img className="w-full" src="https://yukcoding.id/wp-content/uploads/2021/12/programming-coding.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-gray-100 ">{title2}</div>
                        <p className="text-gray-100 text-base">
                            {description2}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag2}</span>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-800">
                    <img className="w-full" src="https://www.techslang.com/wp-content/uploads/2023/09/learn-programming-language-scaled-e1695915051727.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-gray-100">{title3}</div>
                        <p className="text-gray-100 text-base">
                            {description3}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag3}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;