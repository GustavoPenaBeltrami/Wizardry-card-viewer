import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { WizardyApp } from "./WizardyApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
      <WizardyApp />
    </BrowserRouter>
  // </React.StrictMode>
);
