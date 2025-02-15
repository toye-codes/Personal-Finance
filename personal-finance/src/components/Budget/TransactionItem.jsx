import React from "react";

const TransactionItem = ({ transaction }) => {
  const { id, amount, category, date, type } = transaction;

  return (
    <div className="flex items-center justify-between p-3 border-b border-gray-300 dark:border-gray-700">
      <div className="flex items-center gap-3">
        <span
          className={`w-10 h-10 flex items-center justify-center rounded-full text-white 
            ${type === "income" ? "bg-green-500" : "bg-red-500"}`}>
          {type === "income" ? "+" : "-"}
        </span>
        <div>
          <p className="text-gray-800 dark:text-gray-200 font-semibold">
            {category}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        </div>
      </div>
      <p className="text-gray-800 dark:text-gray-200 font-semibold">
        {type === "income" ? "+" : "-"}${amount.toLocaleString()}
      </p>
    </div>
  );
};

export default TransactionItem;
