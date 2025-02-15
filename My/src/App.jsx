import SideBar from "./components/Header/SideBar";
import OverView from "./pages/OverView";

const App = () => {
  return (
    <section className="flex flex-col md:grid md:grid-cols-[1fr_4fr] bg-blue-300 min-h-screen">
      {/* Left Sidebar - Fixed height & independent scrolling */}
      <div
        className="bg-black text-white shadow-xl shadow-slate-700 
           md:rounded-tr-lg h-screen overflow-y-auto">
        <SideBar />
      </div>

      {/* Right Main Content - Independent scrolling */}
      <div className="bg-gray-100 h-screen overflow-y-auto pt-4">
        <OverView />
      </div>
    </section>
  );
};

export default App;
