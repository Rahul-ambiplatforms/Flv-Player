import React from "react";
import ReactDOM from "react-dom/client"; // Change here
import App from "./App";
import "./index.css";

// Create a root container and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
