import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import OverView from "./pages/OverView.jsx";
import Transaction from "./pages/Transaction.jsx";
import Budget from "./pages/Budgets.jsx";
import Savings from "./pages/Savings.jsx";
import RecurringBills from "./pages/RecurringBills.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BudgetProvider } from "./utility/Funtionalities/BudgetContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/overview",
    element: <OverView />,
  },
  {
    path: "/transactions",
    element: <Transaction />,
  },
  {
    path: "/budget",
    element: <Budget />,
  },
  {
    path: "/savings",
    element: <Savings />,
  },
  {
    path: "/recurringbills",
    element: <RecurringBills />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BudgetProvider>
      <RouterProvider router={router} />
    </BudgetProvider>
  </StrictMode>
);
