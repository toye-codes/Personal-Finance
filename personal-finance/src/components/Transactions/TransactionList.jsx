import React from "react";
import TransactionCard from "./TransactionCard";
import transactionData from "../../utility/TransactionData";
import { usePagination } from "../../utility/Context/paginationProvider"


const TransactionList = () => {
  const { currentPage, transactionsPerPage } = usePagination(); // Get pagination state

  // Calculate first and last transaction index
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;

  // Get transactions for the current page
  const currentTransactions = transactionData.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  return (
    <div className="w-full bg-white rounded-lg">
      <h2 className="text-lg font-semibold mb-2 px-3">Recent Transactions</h2>
      <div className="">
        {currentTransactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
