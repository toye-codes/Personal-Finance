import { Link } from "react-router-dom";
import SideBarData from "../../utility/SideBarData";

const SideBar = () => {
  return (
    <section className="bg-gray-900 text-gray-50 space-y-2 px-5 py-3 h-screen">
      <div className="flex items-center justify-center bg-slate-500 p-3 rounded font-semibold">
        <h1 className="text-lg font-bold">My Finance</h1>
      </div>
      <div>
        {SideBarData.map(({ id, page, link, icon }) => (
          <div
            key={id}
            className="flex items-center space-x-5 py-2 mb-3 font-semibold text-base hover:bg-white hover:text-black hover:p-3 rounded transition-all duration-100">
            <Link to={link} className="flex items-center space-x-2">
              <div>{icon}</div>
              <h1>{page}</h1>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SideBar;
