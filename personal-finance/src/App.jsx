import { Outlet } from "react-router-dom";
import SideBar from "./components/Header/SideBar";

const App = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-[1fr_4fr] bg-blue-300 min-h-screen">
      {/* Left Sidebar - Stays Fixed */}
      <div
        className="bg-black text-white shadow-xl shadow-slate-700 
           md:rounded-tr-lg h-screen overflow-y-auto">
        <SideBar />
      </div>

      {/* Right Content - Changes Dynamically */}
      <div className="bg-gray-100 h-screen overflow-y-auto pt-4">
        <Outlet /> {/* 👈 This is where the page content will change */}
      </div>
    </section>
  );
};

export default App;
