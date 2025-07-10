function FeatureList({ features }) {
  return (
    <div>
      {features.map((feature, index) => (
        <ul key={index} role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
          <li className="flex space-x-2 rtl:space-x-reverse items-center">
            <svg className="shrink-0 w-3.5 h-3.5 text-green-600 dark:text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="mt-0 ml-2 text-base font-medium text-gray-600 dark:text-gray-300">
              {feature}
            </span>
          </li>
        </ul>
      ))}
    </div>

  );
}

export default FeatureList;