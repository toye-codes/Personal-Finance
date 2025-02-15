import React from "react";

const TransactionCard = ({ transaction }) => {
  // Destructuring transaction object for cleaner access
  const { name, amount, date, avatar } = transaction;

  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg px-4 py-3 hover:bg-amber-100 transition-colors duration-200">
      {/* Left Side: Avatar & Name */}
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold capitalize">{name}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      {/* Right Side: Amount */}
      <p
        className={`text-lg font-bold ${
          amount > 0 ? "text-green-500" : "text-red-500"
        }`}>
        {amount > 0
          ? `+₦${amount.toLocaleString()}`
          : `-₦${Math.abs(amount).toLocaleString()}`}
      </p>
    </div>
  );
};

export default TransactionCard;
