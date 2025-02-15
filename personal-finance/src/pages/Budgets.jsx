import React from "react";
import BudgetChart from "../components/Budget/BudgetChart";
import BudgetList from "../components/Budget/BudgetList";
import RecentTransactions from "../components/Budget/RecentTransactions";
import BudgetGoals from "../components/Budget/BudgetGoals";


const Budget = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Left Section: Transactions, Goals */}
        <div className="space-y-3">
          <RecentTransactions />
          <BudgetList />
        </div>

        {/* Right Section: Budget Details */}
        <div className="space-y-3">
          <BudgetGoals />
          <BudgetChart />
        </div>
      </div>
    </div>
  );
};

export default Budget;
