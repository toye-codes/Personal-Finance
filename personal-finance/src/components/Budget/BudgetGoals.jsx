import React, { useState, useContext } from "react";
import BudgetGoalModal from "./BudgetGoalModal";
import { BudgetContext } from "../../utility/Funtionalities/BudgetContext";

const BudgetGoals = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { budgetGoals } = useContext(BudgetContext);
    

    //Function to control the modal base.
  const handleInput = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Budget Goals
        </h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handleInput} // Toggle modal on button click
        >
          Set Your Budget Goal
        </button>
      </div>

      {/* Budget Goals List Placeholder */}
      {/* Dynamic Budget Goals List */}
      <div className="space-y-3">
        {budgetGoals.map((goal) => (
          <div
            key={goal.id}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex justify-between items-center">
            <p className="text-gray-800 dark:text-gray-200">
              {goal.name} - ₦{goal.amount}
            </p>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Due: {goal.dueDate}
            </span>
          </div>
        ))}
      </div>

      {/* Render Modal ONLY When Open */}
      {isModalOpen && (
        <BudgetGoalModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default BudgetGoals;
