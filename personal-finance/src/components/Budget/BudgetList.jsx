import { useState } from "react";
import BudgetCard from "./BudgetCard";
import BudgetData from "../../utility/BudgetData";

const BudgetList = () => {
  const [filter, setFilter] = useState("Monthly"); // Default filter
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Function to filter budgets based on selected option (Placeholder logic)
  const filteredBudgets = BudgetData.filter((budget) => {
    if (filter === "Monthly") return budget;
    if (filter === "Yearly") return budget; // Implement logic later
    if (filter === "Weekly") return budget; // Implement logic later
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBudgets = filteredBudgets.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredBudgets.length / itemsPerPage);

  return (
    <div className="p-4 space-y-4">
      {/* Pagination Controls */}
      <div className="flex justify-between items-center">
        <div>
          <label className="mr-2 font-medium">Filter by:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded">
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>
        <div>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded mx-1">
            Prev
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded mx-1">
            Next
          </button>
        </div>
      </div>

      {/* Budget List */}
      <div className="grid gap-4">
        {currentBudgets.map((budget) => (
          <BudgetCard key={budget.id} {...budget} />
        ))}
      </div>
    </div>
  );
};

export default BudgetList;
