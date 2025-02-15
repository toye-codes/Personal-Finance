import React from "react";
import { useContext, useState } from "react";
import { BudgetContext } from "../../utility/Funtionalities/BudgetContext";

const BudgetGoalModal = ({ isModalOpen, setIsModalOpen }) => {
  
  // Accessing addNewGoal from BudgetContext and useState to collect form data
  const { addNewGoal } = useContext(BudgetContext);

  const [goal, setGoal] = useState({
    name: "",
    amount: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setGoal({ ...goal, [e.target.name]: e.target.value });
  };

  // Used a function to handle save whenever save is clicked
  const handleSave = () => {
    if (!goal.name || !goal.amount || !goal.dueDate) return; // Prevent saving empty goals

    addNewGoal({
      name: goal.name,
      amount: parseFloat(goal.amount),
      dueDate: goal.dueDate, // Using selected due date
    });

    // Reset fields and close modal
    setGoal({ name: "", amount: "", dueDate: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-4">
          Set Budget Goal
        </h2>

        <input
          type="text"
          name="name" // Tracking input by name
          placeholder="Budget Name"
          value={goal.name} // Value tracking added
          onChange={handleChange} // Updating state
          className="w-full p-2 border rounded-md mb-3 dark:bg-gray-700 dark:text-white"
        />

        <input
          type="number"
          name="amount" // Tracking input by name
          placeholder="Budget Amount"
          value={goal.amount} // Value tracking added
          onChange={handleChange} // Updating state
          className="w-full p-2 border rounded-md mb-3 dark:bg-gray-700 dark:text-white"
        />

        <input
          type="date"
          name="dueDate" // Tracking input by name
          value={goal.dueDate} // Value tracking added
          onChange={handleChange} // Updating state
          className="w-full p-2 border rounded-md mb-3 dark:bg-gray-700 dark:text-white"
        />

        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetGoalModal;
