import React, { useState } from 'react';
import atn_logo from '../assets/ATN_logo.jpeg';
import Modal from './Modal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="border-t border-white/10 bg-[#050816] text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <a href="#hero" className="inline-flex items-center gap-3">
              <img src={atn_logo} className="h-14 w-14 rounded-full border border-white/10 object-cover" alt="ATN Logo" />
              <div>
                <p className="font-semibold uppercase tracking-[0.3em] text-[#d97f38]">ATN</p>
                <p className="text-sm text-slate-400">African Transformation Network</p>
              </div>
            </a>
            <p className="max-w-sm text-slate-400 leading-7">
              We design transformational experiences for young African leaders and connect them with the networks and systems they need to scale impact.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d97f38]">Resources</h3>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeTBNvZ3LxcPP0jGOcm1wFp7zJWMwI13i5xGevtxGFqZbkPWg/viewform?usp=sharing" className="transition hover:text-white">
                  Join our community
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#events" className="transition hover:text-white">
                  Past programs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d97f38]">Connect</h3>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>
                <a href="mailto:africantransformationnetwork1@gmail.com" className="transition hover:text-white">
                  Email
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/african-transformation-network" className="transition hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <button type="button" onClick={openModal} className="transition hover:text-white">
                  Donate
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 ATN. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">Designed for mission-focused growth.</p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="space-y-6 rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-6 text-slate-100 shadow-2xl shadow-black/40">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Donate to African Transformation Network</h3>
            <p className="text-slate-300 leading-7">
              6453642874
              <br />African Transformation Network owned by FAITH SOLOMON
              <br />Moniepoint MFB
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#03111f]/80 p-5">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d97f38]">Alternative support</p>
            <a
              href="https://selar.co/showlove/african-transformation-network"
              className="mt-4 inline-flex w-full justify-center rounded-full bg-[#d97f38] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#be8d3f]"
            >
              Support us on Selar
            </a>
          </div>
          <p className="text-slate-300 leading-7">
            Your support helps sustain our work, deepen community impact, and accelerate access to leadership opportunities across Africa.
          </p>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
