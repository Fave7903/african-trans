import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import atn_logo from '../assets/ATN_logo.jpeg';

const JOIN_FORM =
  'https://docs.google.com/forms/d/e/1FAIpQLSeTBNvZ3LxcPP0jGOcm1wFp7zJWMwI13i5xGevtxGFqZbkPWg/viewform?usp=sharing';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/president', label: 'President' },
  { to: '/yals', label: 'YALS' },
  { to: '/events', label: 'Events' },
  { to: '/store', label: 'Store' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
];

const linkClass = ({ isActive }) =>
  `relative pb-1 transition hover:text-brand-gold ${
    isActive ? 'text-brand-gold' : 'text-slate-200'
  } after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:rounded-full after:bg-brand-gold after:transition-all ${
    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
  }`;

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-border/80 bg-brand-dark/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm font-ubuntu">
        <NavLink to="/" className="flex items-center gap-3" onClick={closeDrawer}>
          <img
            src={atn_logo}
            className="h-12 w-12 rounded-full border border-white/10 object-cover"
            alt="ATN Logo"
          />
          <div>
            <p className="font-semibold uppercase tracking-[0.3em] text-brand-gold">ATN</p>
            <p className="text-xs text-slate-400">African Transformation Network</p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <NavLink
            to="/yals"
            className="hidden rounded-full border border-brand-gold/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold transition hover:bg-brand-goldMuted md:inline-flex"
          >
            Apply for YALS
          </NavLink>
          <a
            href={JOIN_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950 transition hover:bg-brand-goldLight lg:inline-flex"
          >
            Join ATN
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-brand-border p-2 text-slate-200 transition hover:bg-white/5 lg:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      </header>

      {createPortal(
        <AnimatePresence>
          {drawerOpen && (
            <motion.button
              key="mobile-nav-backdrop"
              type="button"
              aria-label="Close navigation overlay"
              className="fixed inset-0 z-[1000] bg-black/60 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
            />
          )}
          {drawerOpen && (
            <motion.aside
              key="mobile-nav-drawer"
              className="fixed inset-y-0 right-0 z-[1001] flex w-[min(100%,20rem)] flex-col border-l border-brand-border bg-[#070a13] p-6 shadow-2xl lg:hidden"
              style={{
                backgroundColor: 'rgb(7, 10, 19)',
                backgroundImage: 'none',
                opacity: 1,
                backdropFilter: 'none',
                isolation: 'isolate',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Menu</p>
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="rounded-full border border-brand-border p-2 text-slate-200"
                  aria-label="Close navigation"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-8 flex flex-col gap-1">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                      `rounded-2xl px-4 py-3 text-lg ${
                        isActive ? 'bg-brand-goldMuted text-brand-gold' : 'text-slate-100 hover:text-brand-gold'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="mt-auto space-y-3 pt-8">
                <NavLink
                  to="/yals"
                  onClick={closeDrawer}
                  className="flex w-full justify-center rounded-full border border-brand-gold/40 py-3 text-sm font-semibold text-brand-gold"
                >
                  Apply for YALS
                </NavLink>
                <a
                  href={JOIN_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeDrawer}
                  className="flex w-full justify-center rounded-full bg-brand-gold py-3 text-sm font-semibold text-slate-950"
                >
                  Join ATN
                </a>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Nav;
