import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CountUp from "react-countup";
import BarData from "../../bardata/BarData";
import PieData from "../../bardata/PieData";
import { useContext } from "react";
import { ThemeColorContext } from "../../context/ThemeColorContext";

const Home = () => {
  const { color } = useContext(ThemeColorContext);

  const dashboardStats = [
    {
      id: 1,
      title: "Total Users",
      count: 25,
      icon: <PeopleIcon style={{ fontSize: 40, color: color }} />,
    },
    {
      id: 2,
      title: "Pending Users",
      count: 3,
      icon: <PersonRemoveIcon style={{ fontSize: 40, color: color }} />,
    },
    {
      id: 3,
      title: "Ongoing Tasks",
      count: 7,
      icon: <FormatListNumberedIcon style={{ fontSize: 40, color: color }} />,
    },
    {
      id: 4,
      title: "Pending Tasks",
      count: 3,
      icon: <PendingActionsIcon style={{ fontSize: 40, color: color }} />,
    },
  ];

  return (
    <div className="px-1 md:px-5 h-auto  mx-auto">
      <h1 className="text-xl md:text-2xl font-semibold mb-6">
        Welcome Admin....
      </h1>

      {/* Dashboard cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-5">
        {dashboardStats.map((elem) => (
          <div
            key={elem.id}
            className="rounded-xl p-4 text-center flex flex-col items-center cursor-pointer shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            style={{
              background: `linear-gradient(to bottom right, ${color}30, white, ${color}50)`,
            }}
          >
            <span>{elem.icon}</span>
            <h2 className="text-2xl md:text-3xl font-bold my-2">
              <CountUp end={elem.count} />
            </h2>
            <h3 className="text-md md:text-lg font-medium">{elem.title}</h3>
          </div>
        ))}
      </div>

      {/* Chart container */}
      <div className="w-full mt-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Chart Box */}
          <div className="border-b-4 border-green-900 rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold mb-6 text-gray-700">
              Monthly Sales
            </h3>
            <BarData />
          </div>

          {/* Right Pie Chart Box */}
          <div className="border-b-4 border-indigo-500 rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold mb-6 text-gray-700">
              Units Sold
            </h3>
            <PieData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
