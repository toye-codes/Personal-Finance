import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

const SavingsCard = ({
  title = "Savings Goal", amount = "#0", savingsList = [],
}) => {
  return (
    <div className="px-3 py-4 bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-blue-800 text-base font-semibold cursor-pointer hover:underline">
          See Details
        </p>
      </div>

      {/* Savings Overview - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3">
        {/* Total Saved */}
        <div className="flex items-center p-3 rounded-lg hover:bg-amber-100">
          <CurrencyDollarIcon className="w-5 h-5 text-green-600" />
          <div className="ml-2">
            <p className="text-sm md:text-base text-gray-500">Total Saved</p>
            <p className="text-lg font-bold text-gray-900">{amount}</p>
          </div>
        </div>

        {/* Savings Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {savingsList.length > 0 ? (
            savingsList.map(({ id, name, amount }) => (
              <div
                key={id}
                className="p-3 bg-gray-50 rounded-md border hover:bg-amber-100 transition-all duration-100">
                <p className="text-sm md:text-base text-gray-600">{name}</p>
                <p className="text-md font-semibold text-gray-800">{amount}</p>
              </div>
            ))
          ) : (
            <p className="text-sm md:text-base text-gray-500 col-span-2 text-center">
              No savings data available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavingsCard;
