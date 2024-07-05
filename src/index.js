import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TempUnitProvider } from "./context/TemperatureContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TempUnitProvider>
      <App />
    </TempUnitProvider>
  </React.StrictMode>
);
