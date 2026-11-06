// Hawal.jsx
import React from "react";
import { Link } from "react-router-dom";

const Hawal = () => {
  return (
    <div className="relative isolate overflow-hidden font-sans text-[#F2EFE6] bg-[#080C0B] min-h-screen flex items-center justify-center before:content-[''] before:absolute before:-top-40 before:-right-40 before:h-[640px] before:w-[640px] before:rounded-full before:bg-[#C6F432]/25 before:blur-[140px] after:content-[''] after:absolute after:inset-0 after:-z-10 after:bg-[linear-gradient(to_right,rgba(242,239,230,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,239,230,0.06)_1px,transparent_1px)] after:bg-[size:72px_72px] after:[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]">
      <section className="relative z-10 w-full max-w-6xl px-6 md:px-12 text-left">
        <h2 className="max-w-[9ch] mb-10 text-[length:clamp(3.5rem,13vw,11rem)] font-black uppercase leading-[0.88] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#F2EFE6] to-[#C6F432]">
          Personal Finance Tracker
        </h2>
        <p className="max-w-md mb-12 pl-5 border-l-2 border-[#C6F432] font-mono text-sm md:text-base uppercase leading-relaxed tracking-[0.2em] text-[#F2EFE6]/60">
          Kelola keuanganmu dengan mudah dan cerdas setiap hari.
        </p>
        <Link
          to="/App"
          className="group inline-flex items-center gap-4 rounded-full bg-[#C6F432] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[#080C0B] shadow-[0_0_60px_-10px_rgba(198,244,50,0.6)] transition-all duration-500 hover:gap-8 hover:bg-[#F2EFE6] hover:shadow-[0_0_80px_-5px_rgba(242,239,230,0.5)] after:content-['→'] after:text-xl after:transition-transform after:duration-500 group-hover:after:translate-x-1"
        >
          Lanjut
        </Link>
      </section>
    </div>
  );
};

export default Hawal;