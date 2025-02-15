import React from "react";
import TransactionCard from "./TransactionCard";
import transactionData from "../../utility/TransactionData";

const TransactionList = () => {
  // Get the first 5 transactions
  const recentTransactions = transactionData.slice(0, 5);
  console.log("transaction data:", recentTransactions)
  return (
    <div className="w-auto bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2 px-3">Recent Transactions</h2>
      <div className="divide-y">
        {recentTransactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
