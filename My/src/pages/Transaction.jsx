import React from "react";
import TransactionCard from "../components/Transactions/TransactionCard";
import transactionData from "../utility/TransactionData";

const Transactions = () => {


  console.log("Transaction Data:", transactionData);

  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold my-4 text-center">
        Recent Transactions
      </h2>

      {transactionData.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default Transactions;
