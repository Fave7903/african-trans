import React, { useState } from 'react';
import atn_logo from "../assets/ATN_logo.jpeg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-6 py-4 text-sm text-slate-100">
        <a href="#hero" className="flex items-center gap-3">
          <img src={atn_logo} className="h-12 w-12 rounded-full object-cover border border-white/10" alt="ATN Logo" />
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-[#d97f38]">ATN</p>
            <p className="text-xs text-slate-400">African Transformation Network</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#hero" className="transition hover:text-[#d97f38]">Home</a>
          <a href="#about" className="transition hover:text-[#d97f38]">About</a>
          <a href="#events" className="transition hover:text-[#d97f38]">Events</a>
          <a href="#contact" className="transition hover:text-[#d97f38]">Support</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeTBNvZ3LxcPP0jGOcm1wFp7zJWMwI13i5xGevtxGFqZbkPWg/viewform?usp=sharing"
            className="hidden rounded-full bg-[#d97f38] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-[#be8d3f] md:inline-flex"
          >
            Join Us
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-200 transition hover:bg-white/5 md:hidden"
            onClick={toggleAccordion}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden border-t border-white/10 bg-[#050816]/95 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-4 text-slate-100">
          <a href="#hero" onClick={toggleAccordion} className="block rounded-3xl px-4 py-3 text-lg transition hover:text-[#d97f38]">
            Home
          </a>
          <a href="#about" onClick={toggleAccordion} className="mt-2 block rounded-3xl px-4 py-3 text-lg transition hover:text-[#d97f38]">
            About
          </a>
          <a href="#events" onClick={toggleAccordion} className="mt-2 block rounded-3xl px-4 py-3 text-lg transition hover:text-[#d97f38]">
            Events
          </a>
          <a href="#contact" onClick={toggleAccordion} className="mt-2 block rounded-3xl px-4 py-3 text-lg transition hover:text-[#d97f38]">
            Support
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeTBNvZ3LxcPP0jGOcm1wFp7zJWMwI13i5xGevtxGFqZbkPWg/viewform?usp=sharing"
            onClick={toggleAccordion}
            className="mt-4 inline-flex w-full justify-center rounded-full bg-[#d97f38] px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-[#be8d3f]"
          >
            Join Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
