import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const username = "admin";
const password = "password123";

// Prompt for credentials
const enteredUsername = window.prompt("Enter username:");
const enteredPassword = window.prompt("Enter password:");

// Check authentication
if (enteredUsername === username && enteredPassword === password) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  alert("Access denied! Incorrect username or password.");
  window.location.reload();
}
