const BudgetCard = ({ name, value, goal, color }) => {
  const progress = Math.min((value / goal) * 100, 100);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md w-full max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {name}
        </h3>
        <span className="text-gray-700 dark:text-gray-300">
          ₦{value.toLocaleString()}
        </span>
      </div>

      <div className="relative w-24 h-24 mx-auto">
        <svg
          className="absolute inset-0"
          width="100%"
          height="100%"
          viewBox="0 0 100 100">
          <circle
            className="text-gray-300"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          <circle
            className="text-[color]"
            strokeWidth="10"
            stroke={color}
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (progress / 100) * 251.2}
            strokeLinecap="round"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-medium text-gray-900 dark:text-gray-100">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="mt-2 text-center text-gray-700 dark:text-gray-300">
        Goal: ₦{goal.toLocaleString()}
      </div>
    </div>
  );
};

export default BudgetCard;
