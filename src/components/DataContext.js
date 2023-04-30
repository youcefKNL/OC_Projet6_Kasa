import React, { createContext, useState, useEffect } from "react";
import jsonData from "../data/logements.json";

export const DataContext = createContext();

export const DataDone = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
