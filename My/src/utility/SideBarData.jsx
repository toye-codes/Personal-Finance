import {
  HomeIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ReceiptPercentIcon,
} from "@heroicons/react/24/outline";

const SideBarData = [
  {
    id: 1,
    page: "Overview",
    link: "/overview",
    icon: <HomeIcon className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 2,
    page: "Transactions",
    link: "/transactions",
    icon: <CreditCardIcon className="w-5 h-5 text-purple-600" />,
  },
  {
    id: 3,
    page: "Budget",
    link: "/budget",
    icon: <CurrencyDollarIcon className="w-5 h-5 text-green-600" />,
  },
  {
    id: 4,
    page: "Savings",
    link: "/savings",
    icon: <ChartBarIcon className="w-5 h-5 text-teal-600" />,
  },
  {
    id: 5,
    page: "Bills",
    link: "/bills",
    icon: <ReceiptPercentIcon className="w-5 h-5 text-red-600" />,
  },
];

export default SideBarData;
