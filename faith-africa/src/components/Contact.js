import React, { useState } from 'react';
import Modal from './Modal';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="mx-auto max-w-4xl px-6">
      <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-2xl shadow-black/40">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d97f38]">Partner with our work</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Support the vision powering Africa’s transformation.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
            Your support helps us deliver transformational events, grow leadership capacity, and sustain programs that uplift communities across the continent.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center rounded-full bg-[#d97f38] px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#be8d3f]"
          >
            View donation details
          </button>
          <a
            href="https://selar.co/showlove/african-transformation-network"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:border-[#d97f38]/50 hover:text-[#d97f38]"
          >
            Support via Selar
          </a>
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
    </section>
  );
};

export default Contact;
