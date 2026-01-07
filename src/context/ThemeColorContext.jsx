import React, { createContext, useEffect, useState } from "react";

export const ThemeColorContext = createContext();

const ThemeColorProvider = ({ children }) => {
  const [color, setColor] = useState(
    localStorage.getItem("theme-color") || "#0e7c3c"
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      color
    );
    localStorage.setItem("theme-color", color);
  }, [color]);

  return (
    <ThemeColorContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export default ThemeColorProvider;
