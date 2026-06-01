import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm"></div>
          <div className="relative mx-auto flex min-h-screen items-center justify-center px-4 py-12">
            <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 shadow-2xl shadow-black/40">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="rounded-full bg-white/10 p-2 text-slate-200 transition hover:bg-white/20"
                  aria-label="Close modal"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-4">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;