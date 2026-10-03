import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import buildAfrica from '../assets/build_africa.jpg';
import capacity from '../assets/capacity.jpg';
import leadership from '../assets/leadership.jpg';
import excos from '../assets/atn_excos_updated.jpg';
import { teamData, servantLeadershipExcerpt } from '../data/teamData';

const pillars = [
  'African Leadership & Governance (non-partisan)',
  'Technology & Innovation & Immersive Learning',
  'Business & Entrepreneurship',
  'Community Development & Volunteer Afrik',
  'Mental Transformation & Self-Development',
];

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
    className="mx-auto max-w-7xl px-6 py-12"
  >
    <header className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">About ATN</p>
      <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
        Identity, strategic pillars & servant-leadership governance
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate-300">
        African Transformation Network designs transformational experiences for young African leaders — connecting
        mentorship, masterclasses, YALS formation, and continental community projects.
      </p>
    </header>

    <section className="mt-14 rounded-[2rem] border border-brand-border bg-brand-card/60 p-8">
      <h2 className="text-2xl font-semibold text-white">Servant-steward governance policy</h2>
      <p className="mt-4 text-slate-300 leading-8">{servantLeadershipExcerpt}</p>
      <p className="mt-4 text-sm text-slate-500">
        Future-forward initiatives include YALS, immersive/metaverse learning pilots, and Volunteer Afrik.
      </p>
    </section>

    <section className="mt-14">
      <h2 className="text-2xl font-semibold text-white">Strategic pillars</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {pillars.map((pillar) => (
          <li key={pillar} className="rounded-2xl border border-brand-border px-4 py-3 text-slate-300">
            {pillar}
          </li>
        ))}
      </ul>
    </section>

    <section className="mt-16 grid gap-8 lg:grid-cols-3">
      {teamData.map((member) => (
        <article key={member.id} className="rounded-3xl border border-brand-border bg-brand-card/50 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">{member.pillar}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{member.role}</h3>
          <p className="mt-1 text-sm text-slate-400">{member.name}</p>
          <p className="mt-3 text-sm text-slate-300 leading-6">{member.bio}</p>
        </article>
      ))}
    </section>

    <section className="mt-16 overflow-hidden rounded-[2rem] border border-brand-border">
      <img src={excos} alt="ATN Executive Board" className="w-full object-cover" />
    </section>

    <section className="mt-16 grid gap-8 lg:grid-cols-3">
      <div className="overflow-hidden rounded-2xl border border-brand-border">
        <img src={buildAfrica} alt="Building Africa Together" className="h-48 w-full object-cover" />
        <p className="p-4 text-sm text-slate-300">Building Africa together through intentional self-development.</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-brand-border">
        <img src={capacity} alt="Capacity building" className="h-48 w-full object-cover" />
        <p className="p-4 text-sm text-slate-300">Capacity building for careers, organizations, and public service.</p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-brand-border">
        <img src={leadership} alt="Leadership" className="h-48 w-full object-cover" />
        <p className="p-4 text-sm text-slate-300">Empowering catalysts of progress across dynamic communities.</p>
      </div>
    </section>

    <section id="support" className="mt-16 rounded-[2rem] border border-brand-gold/25 bg-brand-goldMuted p-8 text-center">
      <h2 className="text-2xl font-semibold text-white">Partner with continental transformation</h2>
      <p className="mx-auto mt-4 max-w-xl text-slate-300">
        Explore YALS, attend events, or support programs that multiply mentors across Africa.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          to="/yals"
          className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-brand-goldLight"
        >
          Apply for YALS
        </Link>
        <Link
          to="/store"
          className="rounded-full border border-brand-border px-6 py-3 text-sm font-semibold text-white hover:border-brand-gold/40"
        >
          Visit the store
        </Link>
      </div>
    </section>
  </motion.div>
);

export default About;
