import React, { useContext, useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { ThemeColorContext } from "../context/ThemeColorContext";
import { useLocation } from "react-router-dom";

const ColorPalette = () => {
  const [open, setOpen] = useState(false);
  const { setColor, color } = useContext(ThemeColorContext);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const paletteColors = [
    "#097235",
    "#3b82f6",
    "#ef4444",
    "#f59e0b",
    "#f96e0b",
    "#8b5cf6",
  ];

  const handleColochange = (c)=>{
     setColor(c)
     setOpen(false)
  }

  return (
    <div
      className={`fixed top-14 right-0 md:top-45 md:right-0 z-50 flex items-center
      transition-transform duration-500 ease-in-out
      ${open ? "translate-x-0" : "translate-x-[200px]"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 bg-white border border-gray-300
        flex items-center justify-center cursor-pointer rounded-l"
      >
        <SettingsIcon className="rotate-continuous" />
      </button>

      <div className="w-52 bg-white p-4 rounded-l shadow">
        <h3 className="text-black mb-3 text-sm font-semibold">
          Select Theme Color
        </h3>

        <div className="grid grid-cols-3 gap-3">
          {paletteColors.map((c, index) => (
            <div
              key={index}
              // onClick={() => setColor(c)}
              onClick={()=> handleColochange(c)}
              className={`w-8 h-8 rounded-full border cursor-pointer
              hover:scale-110 transition-transform
              ${color === c ? "ring-2 ring-black" : ""}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
