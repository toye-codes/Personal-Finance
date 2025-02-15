import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import BudgetData from "../../utility/BudgetData";

const totalBudget = BudgetData.reduce((acc, item) => acc + item.value, 0);
const spent = 338_000; // Example spent amount in Naira

const BudgetChart = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Budgets</h2>
        <button className="text-blue-500 text-sm">See Details &gt;</button>
      </div>

      {/* Pie Chart Section */}
      <div className="flex items-center justify-center mt-4 relative">
        <PieChart width={200} height={200}>
          <Pie
            data={BudgetData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={5}>
            {BudgetData.map(({ id, color }) => (
              <Cell key={id} fill={color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `₦${value.toLocaleString()}`} />
        </PieChart>

        {/* Center Amount Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-2xl font-bold">₦{spent.toLocaleString()}</p>
          <p className="text-sm text-gray-500">
            of ₦{totalBudget.toLocaleString()} limit
          </p>
        </div>
      </div>

      {/* Budget List */}
      <div className="mt-4 space-y-2">
        {BudgetData.map(({ id, name, color, value }) => (
          <div key={id} className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ background: color }}></span>
              <p className="text-sm text-gray-600">{name}</p>
            </div>
            <p className="text-sm font-semibold">₦{value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetChart;
