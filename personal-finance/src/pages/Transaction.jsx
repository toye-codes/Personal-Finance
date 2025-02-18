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
        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2 bg-blue-100 text-blue-800 py-3 rounded-lg shadow-md">
          <CreditCard className="w-6 h-6 text-blue-600" /> Make a Transaction
        </h2>

        {/* Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Transaction Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <TransactionForm />
          </div>

          {/* Transaction List */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <List className="w-5 h-5 text-gray-700" /> Recent Transactions
            </h3>
            <TransactionList />
          </div>
        </div>
      </div>
    </PaginationProvider>
  );
};

export default Transactions;
