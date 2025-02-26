import { Outlet } from "react-router-dom";
import SideBar from "./components/Header/SideBar";
import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);


  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <section className="flex flex-col md:grid md:grid-cols-[1fr_4fr] bg-blue-300 min-h-screen">
      <div
        className="bg-black text-white shadow-slate-700 md:rounded-tr-lg md:h-screen overflow-y-auto"
        >
        <SideBar isOpen={isOpen} openMenu={openMenu} closeMenu={closeMenu} />
      </div>

      <div className="bg-gray-100 h-screen overflow-y-auto">
        <div>
          <Outlet /> {/* This is where the page content will change */}
        </div>
      </div>
    </section>
  );
};

export default App;
