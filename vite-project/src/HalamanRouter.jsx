// App.jsx (utama)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hawal from "./HalamanAwal";
import AppPage from "./App"; // ini file tujuan dari /App

const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hawal />} />
        <Route path="/App" element={<AppPage />} />
      </Routes>
    </Router>
  );
};

export default Routering;
