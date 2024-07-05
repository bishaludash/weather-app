import { useEffect, useState, createContext, useContext } from "react";

const TemperatureContext = createContext();

export const TempUnitProvider = ({ children }) => {
  const [isCelcius, setIsCelcius] = useState(() => {
    const isUnitCelcius = localStorage.getItem("isCelcius");
    return isUnitCelcius !== null ? JSON.parse(isUnitCelcius) : true;
  });

  const toggleTempUnit = () => {
    setIsCelcius((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("isCelcius", JSON.stringify(isCelcius));
  }, [isCelcius]);

  return (
    <TemperatureContext.Provider value={{ isCelcius, toggleTempUnit }}>
      {children}
    </TemperatureContext.Provider>
  );
};

export const useTempUnit = () => useContext(TemperatureContext);
