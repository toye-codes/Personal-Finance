import { Link } from "react-router-dom";
import SideBarData from "../../utility/SideBarData";

const SideBar = ({ isOpen, openMenu, closeMenu }) => {
  return (
    <>
      {/* Overlay - Click outside the sidebar to close */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      <div className="flex justify-between items-center md:block bg-gray-900 text-gray-50 space-y-2 px-5 py-3 md:h-screen">
        {/* Mobile Menu Button */}
        <button onClick={openMenu} className="text-4xl px-3 md:hidden">
          ☰
        </button>

        {/* Logo Section */}
        <div className="flex items-center md:bg-slate-500 p-3 rounded font-semibold">
          <h1 className="md:text-lg italic font-bold">My Finance</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          {SideBarData.map(({ id, page, link, icon }) => (
            <div
              key={id}
              className="flex items-center space-x-5 py-2 mb-3 font-semibold text-base hover:bg-white hover:text-black hover:p-3 rounded transition-all duration-100">
              <Link to={link ?? "#"} className="flex items-center space-x-2">
                <div>{icon}</div>
                <h1>{page}</h1>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Sidebar with Smooth Transition */}
        <div
          className={`fixed md:hidden bg-gray-900 text-gray-50 top-0 left-0 w-64 h-full shadow-lg z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}>
          <button
            onClick={closeMenu}
            className="text-4xl px-3 absolute right-4 top-4">
            ✖
          </button>
          <div className="mt-16 px-5">
            {SideBarData.map(({ id, page, link, icon }) => (
              <div
                key={id}
                className="flex items-center space-x-5 py-2 mb-3 font-semibold text-base hover:bg-white hover:text-black hover:p-3 rounded transition-all duration-100">
                <Link
                  to={link ?? "#"}
                  className="flex items-center space-x-2"
                  onClick={closeMenu}>
                  <div>{icon}</div>
                  <h1>{page}</h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
