import React from 'react';
import atn_hero from "../assets/atn_hero.jpg";
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,127,56,0.24),transparent_35%),linear-gradient(180deg,rgba(5,8,22,.92),rgba(5,8,22,.92))]"
      />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${atn_hero})` }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border border-[#d97f38]/30 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-[#d97f38]">
              Purpose-led transformation
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building the next generation of African leaders with focus, clarity, and impact.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We create immersive programs, mentorship circles, and strategic platforms that help young Africans scale purpose into powerful outcomes.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeTBNvZ3LxcPP0jGOcm1wFp7zJWMwI13i5xGevtxGFqZbkPWg/viewform?usp=sharing"
                className="inline-flex items-center justify-center rounded-full bg-[#d97f38] px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#be8d3f]"
              >
                Join the movement
              </a>
              <a
                href="#events"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition hover:border-[#d97f38]/50 hover:text-[#d97f38]"
              >
                Explore past events
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-center shadow-xl shadow-black/20">
                <p className="text-3xl font-semibold text-white">
                  <CountUp end={6} duration={7} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">Countries</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-center shadow-xl shadow-black/20">
                <p className="text-3xl font-semibold text-white">
                  <CountUp end={20} duration={7} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">Events held</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-center shadow-xl shadow-black/20">
                <p className="text-3xl font-semibold text-white">
                  <CountUp end={200} duration={7} />+
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">People impacted</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="flex h-full flex-col justify-between gap-6 rounded-[2rem] border border-white/5 bg-slate-900/80 p-6">
              <div>
                <h2 className="text-xl font-semibold text-white">Why ATN matters</h2>
                <p className="mt-4 text-slate-300 leading-7">
                  We bring African thought partners together around smart strategy, career acceleration, and community support so every participant feels capable of making bold progress.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl border border-[#d97f38]/15 bg-[#0d1326] p-5">
                  <p className="text-sm uppercase tracking-[0.26em] text-[#d97f38]">Impact</p>
                  <p className="mt-3 text-base leading-7 text-slate-300">Curated learning journeys that accelerate leadership across sectors.</p>
                </div>
                <div className="rounded-3xl border border-[#d97f38]/15 bg-[#0d1326] p-5">
                  <p className="text-sm uppercase tracking-[0.26em] text-[#d97f38]">Connection</p>
                  <p className="mt-3 text-base leading-7 text-slate-300">A strong network of peers, mentors, and ecosystem allies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
