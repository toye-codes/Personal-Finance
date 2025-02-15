import { useState } from "react";
import TransactionCard from "./TransactionCard"; // Import the merged component

const transactions = [
  {
    id: 1,
    category: "Entertainment",
    amount: 15000,
    date: "2025-02-01",
    type: "expense",
  },
  {
    id: 2,
    category: "Bills",
    amount: 70000,
    date: "2025-02-03",
    type: "expense",
  },
  {
    id: 3,
    category: "Dining Out",
    amount: 20000,
    date: "2025-02-05",
    type: "expense",
  },
  {
    id: 4,
    category: "Personal Care",
    amount: 12000,
    date: "2025-02-06",
    type: "expense",
  },
  {
    id: 5,
    category: "Savings",
    amount: 50000,
    date: "2025-02-07",
    type: "income",
  },
  {
    id: 6,
    category: "Shopping",
    amount: 25000,
    date: "2025-02-08",
    type: "expense",
  },
];

const RecentTransactions = () => {
  const [sortType, setSortType] = useState("date");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortType === "amount")
      return b.amount - a.amount;
    return new Date(b.date) - new Date(a.date);
  });

  const paginatedTransactions = sortedTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-100">Recent Transactions</h2>
        <select
          className="p-2 border rounded-md"
          onChange={(e) => setSortType(e.target.value)}>
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
        </select>
      </div>
      <ul>
        {paginatedTransactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50">
          Prev
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage * itemsPerPage >= transactions.length}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default RecentTransactions;
