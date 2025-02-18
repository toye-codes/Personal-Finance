import React, { useState } from "react";
import { CreditCard, CheckCircle, Loader2, X } from "lucide-react";

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    receiver: "",
    amount: "",
    bank: "",
    comment: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleProceed = () => {
    setIsModalOpen(false);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 5000);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2 bg-blue-100 text-blue-800 py-3 rounded-lg shadow-md">
        <CreditCard className="w-6 h-6 text-blue-600" /> Make a Transaction
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="receiver"
          placeholder="Receiver"
          className="w-full p-3 border rounded mb-3"
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="w-full p-3 border rounded mb-3"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="bank"
          placeholder="Bank"
          className="w-full p-3 border rounded mb-3"
          onChange={handleInputChange}
          required
        />
        <textarea
          name="comment"
          placeholder="Comment (Optional)"
          className="w-full p-3 border rounded mb-3"
          onChange={handleInputChange}></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
          Make Transaction
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <p className="text-lg font-semibold mb-4">Confirm Transaction?</p>
            <div className="flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                Cancel
              </button>
              <button
                onClick={handleProceed}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {isProcessing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center flex flex-col items-center">
            <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
            <p className="mt-4 text-lg font-semibold">
              Processing Transaction...
            </p>
          </div>
        </div>
      )}

      {isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center flex flex-col items-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
            <p className="mt-4 text-lg font-semibold">Transaction Sent!</p>
            <button
              onClick={() => setIsSuccess(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionForm;
