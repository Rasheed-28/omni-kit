import React, { useState } from "react";
import {
  Cpu,
  Home,
  Calculator,
  Repeat,
  Clock,
  Timer,
  ChevronDown,
  DollarSign,
  Ruler,
  Weight,
  Watch,
  Gauge ,
  Thermometer
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const [converterOpen, setConverterOpen] = useState(false);

  const menuItems = [
    { id: 1, title: "Home", icon: <Home size={20} />, path: "/" },
    { id: 2, title: "Calculator", icon: <Calculator size={20} />, path: "/calculator" },
    {
      id: 3,
      title: "Converter",
      icon: <Repeat size={20} />,
      path: "/converter",
      subItems: [
        { id: 31, title: "Currency", icon: <DollarSign size={16} />, path: "/converter/currency" },
        { id: 32, title: "Length", icon: <Ruler size={16} />, path: "/converter/length" },
        { id: 33, title: "Mass", icon: <Weight size={16} />, path: "/converter/mass" },
        { id: 34, title: "Time", icon: <Watch  size={16} />, path: "/converter/time" },
        { id: 35, title: "Temperature", icon: <Thermometer size={16} />, path: "/converter/temperature" },
        { id: 36, title: "Velocity", icon: <Gauge size={16} />, path: "/converter/velocity" },
      ],
    },
    { id: 4, title: "Clock", icon: <Clock size={20} />, path: "/clock" },
    { id: 5, title: "Stopwatch", icon: <Timer size={20} />, path: "/stopwatch" },
  ];

  return (
    <div className="h-screen w-60 bg-gray-100 text-gray-800 p-5 flex flex-col shadow-lg">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-10">
        <Cpu size={28} className="text-indigo-600" />
        <span
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl font-bold tracking-wide"
        >
          ClicKit
        </span>
      </div>

      {/* Menu */}
      <ul className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <li key={item.id} className="flex flex-col">
            {/* Main Item */}
            <div
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors duration-200"
              onClick={() =>
                item.subItems
                  ? setConverterOpen(!converterOpen)
                  : navigate(item.path)
              }
            >
              <span className="text-indigo-600">{item.icon}</span>
              <span className="font-medium">{item.title}</span>

              {/* Arrow */}
              {item.subItems && (
                <ChevronDown
                  size={16}
                  className={`ml-auto text-gray-500 transition-transform duration-200 ${
                    converterOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {/* Dropdown */}
            {item.subItems && converterOpen && (
              <ul className="flex flex-col ml-8 mt-2 gap-2">
                {item.subItems.map((sub) => (
                  <li
                    key={sub.id}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors duration-200"
                    onClick={() => navigate(sub.path)}
                  >
                    <span className="text-indigo-600">{sub.icon}</span>
                    <span className="text-sm font-medium">{sub.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-auto text-sm text-gray-500">
        &copy; 2026 ClicKit
      </div>
    </div>
  );
}