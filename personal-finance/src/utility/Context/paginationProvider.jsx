import { createContext, useState, useContext } from "react";
import transactionData from "../TransactionData"; // Import transaction data

// Create the Context
const PaginationContext = createContext();

// Custom Hook for using pagination
export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
};

// Pagination Provider Component
const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  // Calculate total pages based on data length
  const totalPages = Math.ceil(transactionData.length / transactionsPerPage);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        transactionsPerPage,
        totalPages,
        nextPage,
        prevPage,
      }}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
