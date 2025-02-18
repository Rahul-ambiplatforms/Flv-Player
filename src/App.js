import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StreamPage from "./pages/StreamPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StreamPage />} />
      </Routes>
    </Router>
  );
};

export default App;
