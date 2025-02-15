import { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {

  // UseState to track all the added budget
    const [budgetGoals, setBudgetGoals] = useState([
      { id: 1, name: "Rent", amount: 150000, dueDate: "2025-02-28" },
      { id: 2, name: "Groceries", amount: 300, dueDate: "2025-02-15" },
    ]);

  // Function to add the budget inputted to the useState management for storage.
    const addNewGoal = (goal) => {
        setBudgetGoals([...budgetGoals, { id: Date.now(), ...goal }]);
    }

  return (
    <BudgetContext.Provider value={{ budgetGoals, addNewGoal }}>
      {children}
    </BudgetContext.Provider>
  );
};
