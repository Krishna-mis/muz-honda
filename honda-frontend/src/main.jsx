import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from React 18
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Use createRoot instead of ReactDOM.render
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
