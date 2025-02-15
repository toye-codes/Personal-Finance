# Personal Finance App

## Project Overview

This project is a Personal Finance App where users can track their income, expenses, savings, and recurring bills. The app provides an overview dashboard with financial insights and a detailed transactions page with filtering and sorting options. Users can also manage budgets and saving pots while tracking progress toward financial goals. The app includes full CRUD functionality for budgets and savings and supports keyboard accessibility and responsive design.

---

## Key Features to Implement

### 1. Overview Page

- Display all financial data at a glance (budgets, savings, transactions, bills).
- Show latest three transactions for each budget category.
- Show progress towards each savings pot goal.

### 2. Transactions Page

- Display all transactions in a paginated table (10 per page).
- Implement search, sorting, and filtering for transactions.

### 3. Budget & Savings Management

- Create, read, update, delete (CRUD) budgets and saving pots.
- Users can add or withdraw money from pots.

### 4. Recurring Bills

- Display all recurring bills and their status for the current month.
- Implement search and sorting for recurring bills.

### 5. Form Validation & Accessibility

- Show validation messages if required form fields are incomplete.
- Ensure keyboard navigation for all actions.
- Apply hover and focus states for better UX.

### 6. Responsive UI

- Ensure an optimal layout for all screen sizes.

### 7. Bonus Features (Full-Stack Implementation)

- Database Integration to persist data.
- User Authentication (sign up, log in, secure access).

---

## Tech Stack Recommendation

### Frontend:

- React (with Vite or Next.js for optimization) – Since you are comfortable with React and Tailwind CSS.
- Tailwind CSS – For styling, as per your preference.
- React Router – For navigation between pages.
- useState & useContext – For state management (or consider Redux for scalability).
- React Query (or useEffect + fetch) – For API handling.
- Framer Motion – For animations (since you want to learn animations).

### Backend 

- Node.js with Express.js 
- MongoDB (with Mongoose) – A flexible NoSQL option for finance tracking.
- PostgreSQL – Good for structured data like transactions.
- JWT (JSON Web Token) – For authentication.
- Nodemailer –  for email notifications.

### Additional Tools:

- Zod or Yup – For form validation.
- React Hook Form – For handling form submissions efficiently.
- TanStack Table – For transaction table pagination, sorting, and filtering.

---

## Next Steps

### 1. Break Down the Project into Components

- Layout components (Navbar, Sidebar, Footer).
- Pages: Overview, Transactions, Budgets, Bills, Settings.
- Reusable UI components (cards, tables, modals).

### 2. Plan Data Structure

- Define the schema for transactions, budgets, savings, bills, and users.

### 3. Start with the Frontend (Local Data.json for Now)

- Build UI based on provided design.
- Implement CRUD and filtering features.

### 4. Extend to Full-Stack 

- Set up a backend API.
- Connect the frontend with a database.

---

## Conclusion

This project provides a comprehensive personal finance management system with a user-friendly interface, CRUD functionality, and optional full-stack implementation. The goal is to create a seamless financial tracking experience while incorporating best practices in accessibility, responsiveness, and user authentication.



## A conditional state that makes the sidebar disapper on smaller screen. It must only appear on larger screen. - create the function in the **utility folder** or **use tailwind in the the OverView Component**


**## Adding a calcutor to help manage and calculate expenses.**

**## Is there an AI that could help gather market value of food items?**

**## will it be able to get the price of food items and estimate how much should/could be spent on getting food items daily, per week or per month?**

## I can give the user an avatar with a greating whenever he/she logs in

**I still need to make the first cards in the overview section take over the full width on mobile screen**

**I still need to build a nav bar to use for mobile screen**

**Whenever i click on any of the sidebar function, I want to make it so that it only displays on the side rather than navigate to a new page**

<!-- To make the sidebar static whil the other side renders the selected tab -->

##Use Context for Global State (If Sidebar is in a Separate Component)
If your sidebar is a separate component, you can use React Context to share state across components.

**Steps:**
**Create a SidebarContext to store the selected item.**
**Wrap the Dashboard component with the context.**
**Update the selected tab dynamically.**

**Other Utility Features**
✅ formatCurrency(value) – Format numbers into readable currency
✅ calculateProgress(saved, goal) – Calculate percentage progress
✅ paginateData(data, page, limit) – Handle pagination for budgets & transactions
✅ filterTransactions(transactions, type) – Enable filtering
✅ sortTransactions(transactions, criteria) – Enable sorting