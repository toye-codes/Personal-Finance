import React from "react";
import { ArrowDownCircle, ArrowUpCircle, User } from "lucide-react";

const TransactionCard = ({ transaction }) => {
  const { name, amount, date, avatar } = transaction;
  const isCredit = amount > 0;

  return (
    <div className="flex items-center justify-between bg-white shadow-lg rounded-xl px-5 py-4 hover:shadow-xl transition-all duration-300">
      {/* Left Side: Avatar & Name */}
      <div className="flex items-center space-x-4">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-14 h-14 rounded-full object-cover border border-gray-200"
          />
        ) : (
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200">
            <User className="text-gray-500 w-8 h-8" />
          </div>
        )}
        <div>
          <p className="font-semibold capitalize text-lg">{name}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      {/* Right Side: Amount & Icon */}
      <div className="flex items-center space-x-2">
        {isCredit ? (
          <ArrowUpCircle className="text-green-500 w-6 h-6" />
        ) : (
          <ArrowDownCircle className="text-red-500 w-6 h-6" />
        )}
        <p
          className={`text-lg font-bold ${
            isCredit ? "text-green-600" : "text-red-600"
          }`}>
          {isCredit
            ? `+₦${amount.toLocaleString()}`
            : `-₦${Math.abs(amount).toLocaleString()}`}
        </p>
      </div>
    </div>
  );
};

export default TransactionCard;
