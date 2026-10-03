import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import atn_logo from '../assets/ATN_logo.jpeg';
import { worksData, workTypeFilters } from '../data/worksData';

const President = () => {
  const [activeType, setActiveType] = useState('all');

  const filteredWorks = useMemo(() => {
    if (activeType === 'all') return worksData;
    return worksData.filter((w) => w.type === activeType);
  }, [activeType]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-7xl px-6 py-12"
    >
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative mx-auto max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] bg-brand-gold/10 blur-2xl" />
          <img
            src={atn_logo}
            alt="President — African Transformation Network"
            className="relative rounded-[2rem] border border-brand-border object-cover shadow-2xl"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">The President & His Works</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Faith-led stewardship for continental transformation</h1>
          <p className="mt-2 text-sm text-slate-400">
            President, African Transformation Network · TYLIAFRICA Global Consult
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Our vision is to multiply mentors, strengthen governance literacy, and equip young Africans to lead with
            faith, integrity, and excellence — without partisan entanglement.
          </p>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 grid gap-6 lg:grid-cols-3"
      >
        {[
          {
            title: 'Personal Mission & Calling',
            body: 'Called to steward a generation of Africa-transforming leaders through intentional formation and covenant community.',
          },
          {
            title: 'Public Leadership & Youth Mentorship',
            body: 'Championing non-partisan civic responsibility, executive governance policy, and replicated mentorship models.',
          },
          {
            title: 'Values Anchor',
            body: 'Faith, Integrity, and Excellence — the non-negotiable standards for every ATN initiative and partnership.',
          },
        ].map((block) => (
          <article key={block.title} className="rounded-3xl border border-brand-border bg-brand-card/70 p-6">
            <h2 className="text-lg font-semibold text-brand-gold">{block.title}</h2>
            <p className="mt-3 text-slate-300 leading-7">{block.body}</p>
          </article>
        ))}
      </motion.section>

      <section className="mt-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Archive & works</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Books, speeches, policy & articles</h2>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveType('all')}
            className={`rounded-full px-4 py-2 text-sm ${
              activeType === 'all' ? 'bg-brand-gold text-slate-950' : 'border border-brand-border text-slate-300'
            }`}
          >
            All
          </button>
          {workTypeFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveType(f.id)}
              className={`rounded-full px-4 py-2 text-sm ${
                activeType === f.id ? 'bg-brand-gold text-slate-950' : 'border border-brand-border text-slate-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <motion.article
              key={work.id}
              layout
              className="flex flex-col rounded-3xl border border-brand-border bg-brand-card/60 p-5"
            >
              <div className="mb-4 flex h-32 items-center justify-center rounded-2xl bg-brand-goldMuted">
                <span className="text-xs uppercase tracking-[0.25em] text-brand-gold">{work.type}</span>
              </div>
              <p className="text-xs text-slate-500">{work.year}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{work.title}</h3>
              <p className="mt-3 flex-1 text-sm text-slate-400 leading-6">{work.summary}</p>
              <a href={work.actionUrl} className="mt-4 text-sm font-semibold text-brand-gold hover:text-brand-goldLight">
                {work.actionLabel} →
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default President;
