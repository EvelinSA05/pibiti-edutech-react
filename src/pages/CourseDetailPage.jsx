import { useParams, Link } from 'react-router-dom';

function CourseDetailPage(props) {
    const { packagesData, notFound, back, feature, regist } = props;
    const { courseId } = useParams();
    const course = packagesData.find(pkg => pkg.id === courseId);

    if (!course) {
        return (
            <div className="text-center py-20">
                <h1 className="text-4xl font-bold">{notFound}</h1>
                <Link to="/courses" className="text-pink-500 hover:underline mt-4 inline-block">{back}</Link>
            </div>
        );
    }

    return (
        <div className="py-16 px-4 max-w-4xl mx-auto">
            <img className="w-full h-64 object-cover rounded-lg shadow-lg mb-8" src={course.picture} alt={course.title} />
            <h1 className="text-4xl font-bold text-red-900 dark:text-red-300 mb-2">{course.title}</h1>
            <p className="text-3xl font-light text-pink-700 dark:text-pink-400 mb-6">{course.harga}</p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {course.description}
            </p>

            <h2 className="text-2xl font-bold text-red-900 dark:text-red-300 mb-4">{feature}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {course.fitur.map((fitur, index) => (
                    <li key={index}>{fitur}</li>
                ))}
            </ul>

            <div className="mt-12 text-center">
                <Link to={`/register/${course.id}`} className="px-8 py-3 bg-pink-700 text-white font-bold rounded-lg hover:bg-pink-600">
                    {regist}
                </Link>
            </div>
        </div>
    );
}

export default CourseDetailPage;