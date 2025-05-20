// Hawal.jsx
import React from "react";
import { Link } from "react-router-dom";

const Hawal = () => {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-blue-100 via-white to-blue-50 min-h-screen flex items-center justify-center">
      <section className="text-center px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-blue-700 drop-shadow-sm">
          Personal Finance Tracker
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto">
          Kelola keuanganmu dengan mudah dan cerdas setiap hari.
        </p>
        <Link
          to="/App"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition transform duration-300"
        >
          Lanjut
        </Link>
      </section>
    </div>
  );
};

export default Hawal;
