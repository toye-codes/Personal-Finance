import Card from "../components/Card";
import SavingsCard from "../components/SavingsCard";
import TransactionList from "../components/Transactions/TransactionList";
import BudgetChart from "../components/Budget/BudgetChart";

const cardData = [
  { id: 1, title: "Current Balance", description: "₦500,000" },
  { id: 2, title: "Income", description: "₦300,000" },
  { id: 3, title: "Expenses", description: "₦700,000" },
];

const OverView = () => {
  return (
    <section className="px-2 flex flex-col w-full">
      {/* Title Section */}
      <div className="mb-4">
        <h1 className="font-bold text-3xl text-gray-800">Overview</h1>
      </div>

      {/* First Section: Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {cardData.map(({ id, title, description }) => (
          <Card
            key={id}
            className="w-full sm:min-w-[300px] md:min-w-[340px] lg:max-w-[380px] xl:max-w-[420px] h-auto"
            title={title}
            description={description}
          />
        ))}
      </div>

      {/* Second Section: Savings Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 w-full">
        <div>
          <SavingsCard
            title="Savings Overview"
            amount="₦250,000"
            savingsList={[
              { id: 1, name: "Emergency Fund", amount: "₦50,000" },
              { id: 2, name: "Travel Savings", amount: "₦70,000" },
              { id: 3, name: "Investment", amount: "₦130,000" },
            ]}
          />
          {/* Third Section: Transaction List */}
          <div className="py-4">
            <TransactionList />
          </div>
        </div>
        <div>
          <BudgetChart />
        </div>
      </div>
    </section>
  );
};

export default OverView;
