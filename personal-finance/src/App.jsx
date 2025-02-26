import { Outlet } from "react-router-dom";
import { useState, lazy, Suspense } from "react";

// Lazy load Sidebar
const SideBar = lazy(() => import("./components/Header/SideBar"));

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
      <div className="bg-black text-white shadow-slate-700 md:rounded-tr-lg md:h-screen overflow-y-auto">
        <Suspense
          fallback={<div className="text-white p-4">Loading Sidebar...</div>}>
          <SideBar isOpen={isOpen} openMenu={openMenu} closeMenu={closeMenu} />
        </Suspense>
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
