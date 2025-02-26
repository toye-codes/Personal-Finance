import React from "react";
import TransactionList from "../components/Transactions/TransactionList";
import PaginationProvider from "../utility/Context/paginationProvider";
import TransactionForm from "../components/Transactions/TransactionForm";
import { CreditCard, List } from "lucide-react";

const Transactions = () => {
  return (
    <PaginationProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2 bg-black text-gray-100 py-3 rounded-lg shadow-md">
          <CreditCard className="w-6 h-6 text-white" /> My Transaction
        </h2>

        {/* Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Transaction Form */}
          <div className="bg-white rounded-lg p-3 md:p-6 ">
            <TransactionForm />
          </div>

          {/* Transaction List */}
          <div className="bg-white shadow-lg rounded-lg md:p-6 ">
            <TransactionList />
          </div>
        </div>
      </div>
    </PaginationProvider>
  );
};

export default Transactions;
