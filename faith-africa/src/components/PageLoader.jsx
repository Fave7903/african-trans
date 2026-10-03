import React from 'react';

const PageLoader = ({ message = 'Loading…', fullScreen = false }) => (
  <div
    className={`flex flex-col items-center justify-center gap-4 text-slate-300 ${
      fullScreen ? 'min-h-screen bg-brand-dark' : 'py-24'
    }`}
  >
    <div className="h-10 w-10 animate-spin rounded-full border-2 border-brand-gold border-t-transparent" />
    <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">{message}</p>
  </div>
);

export default PageLoader;
