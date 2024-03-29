import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routers/router";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
