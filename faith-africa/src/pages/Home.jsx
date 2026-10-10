import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import atn_hero from '../assets/atn_hero.jpg';

import { fetchEvents, fetchYalsSummits, isFirebaseConfigured } from '../services/firebase';

import { formatEventDate } from '../utils/date';

import { pickHomeTeaserEvent } from '../utils/events';

import { servantLeadershipExcerpt } from '../data/teamData';

import FlyerThumbnail from '../components/FlyerThumbnail';

import ImageLightbox from '../components/ImageLightbox';



const sectionMotion = {

  initial: { opacity: 0, y: 20 },

  whileInView: { opacity: 1, y: 0 },

  viewport: { once: true, margin: '-80px' },

  transition: { duration: 0.5 },

};



const pillars = [

  {

    title: 'African Leadership & Governance',

    body: 'Non-partisan civic stewardship, ethical public responsibility, and governance literacy for emerging leaders.',

  },

  {

    title: 'Technology & Innovation',

    body: 'Digital infrastructure, immersive learning, and continental-scale innovation with inclusion at the core.',

  },

  {

    title: 'Business & Entrepreneurship',

    body: 'Enterprise formation aligned with servant-steward values — people before positions, impact before optics.',

  },

  {

    title: 'Community Development',

    body: 'Volunteer Afrik and grassroots projects that translate leadership into measurable community outcomes.',

  },

  {

    title: 'Mental Transformation & Self-Development',

    body: 'Intentional growth, discipline, and resilience as the foundation for sustainable continental impact.',

  },

];



const JOIN_FORM =

  'https://docs.google.com/forms/d/e/1FAIpQLSeTBNvZ3LxcPP0jGOcm1wFp7zJWMwI13i5xGevtxGFqZbkPWg/viewform?usp=sharing';



const MetricCard = ({ end, suffix = '', label }) => {

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (

    <div

      ref={ref}

      className="rounded-3xl border border-brand-border bg-brand-card/80 p-6 text-center shadow-xl shadow-black/20"

    >

      <p className="text-3xl font-semibold text-white">

        {inView ? <CountUp end={end} duration={5} suffix={suffix} /> : '0'}

      </p>

      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-slate-400">{label}</p>

    </div>

  );

};



const Home = () => {

  const [teaser, setTeaser] = useState(null);

  const [lightboxUrl, setLightboxUrl] = useState(null);



  useEffect(() => {

    if (!isFirebaseConfigured) return;

    (async () => {

      try {
        const [events, summits] = await Promise.all([fetchEvents(), fetchYalsSummits()]);
        setTeaser(pickHomeTeaserEvent(events, summits));
      } catch {

        setTeaser(null);

      }

    })();

  }, []);



  const teaserEvent = teaser?.event;
  const teaserFlyerUrl = teaserEvent?.flyerUrl || teaserEvent?.imageUrl;



  return (

    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>

      <section className="relative overflow-hidden">

        <div

          className="absolute inset-0 bg-cover bg-center"

          style={{ backgroundImage: `url(${atn_hero})` }}

        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,127,56,0.18),transparent_45%),linear-gradient(180deg,rgba(7,10,19,.85),rgba(7,10,19,.92))]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">

          <p className="inline-flex rounded-full border border-brand-gold/30 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-gold backdrop-blur-sm">

            Continental vision

          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">

            Forming Africa-Transforming Leaders for Governance, Technology & Enterprise.

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 drop-shadow-sm">

            African Transformation Network equips young leaders through the Young African Leaders Summit, masterclasses,

            and a servant-steward covenant — affiliated with TYLIAFRICA Global Consult.

          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link

              to="/yals"

              className="inline-flex justify-center rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold text-slate-950 hover:bg-brand-goldLight"

            >

              Explore YALS

            </Link>

            <a

              href={JOIN_FORM}

              target="_blank"

              rel="noopener noreferrer"

              className="inline-flex justify-center rounded-full border border-white/30 bg-black/30 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:border-brand-gold/50 hover:text-brand-gold"

            >

              Join the Network

            </a>

          </div>

        </div>

      </section>



      <motion.section {...sectionMotion} className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-8 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Impact & metrics</p>

          <h2 className="mt-3 text-3xl font-semibold text-white">Continental footprint in formation</h2>

        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <MetricCard end={9} label="African Countries Impacted" />

          <MetricCard end={850} suffix="+" label="Emerging Leaders Reached" />

          <MetricCard end={45} suffix="+" label="Strategic Masterclasses & Summits" />

          <MetricCard end={28} label="Continental Community Projects" />

        </div>

      </motion.section>



      <motion.section {...sectionMotion} className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-10 max-w-2xl">

          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Pillars of impact</p>

          <h2 className="mt-3 text-3xl font-semibold text-white">Five focus areas shaping the network</h2>

        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {pillars.map((pillar) => (

            <motion.article

              key={pillar.title}

              whileHover={{ y: -4 }}

              className="rounded-3xl border border-brand-border bg-brand-card/70 p-6 transition hover:border-brand-gold/35"

            >

              <h3 className="text-lg font-semibold text-brand-gold">{pillar.title}</h3>

              <p className="mt-3 text-slate-300 leading-7">{pillar.body}</p>

            </motion.article>

          ))}

        </div>

      </motion.section>



      <motion.section {...sectionMotion} className="mx-auto max-w-7xl px-6 py-16">

        <div className="max-w-3xl">

            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Executive leadership</p>

            <h2 className="mt-3 text-3xl font-semibold text-white">Servant-steward governance</h2>

            <blockquote className="mt-6 border-l-2 border-brand-gold/50 pl-5 text-slate-300 leading-8 italic">

              {servantLeadershipExcerpt}

            </blockquote>

            <Link to="/about" className="mt-8 inline-flex text-sm font-semibold text-brand-gold hover:text-brand-goldLight">

              Read strategic pillars & policy →

            </Link>

        </div>

      </motion.section>



      <motion.section {...sectionMotion} className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-[2rem] border border-brand-border bg-brand-card/60 p-8">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">

                {teaser?.mode === 'past' ? 'Recent highlight' : 'Upcoming engagement'}

              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white">On the continental calendar</h2>

            </div>

            <Link

              to="/events"

              className="inline-flex justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-brand-goldLight"

            >

              View All Events

            </Link>

          </div>



          {teaserEvent ? (

            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">

              {teaserFlyerUrl && (

                <FlyerThumbnail

                  src={teaserFlyerUrl}

                  alt={teaserEvent.title}

                  onOpen={setLightboxUrl}

                />

              )}

              <article className="rounded-2xl border border-brand-border bg-brand-dark/80 p-6">

                <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">{teaserEvent.category}</p>

                <h3 className="mt-2 text-xl font-semibold text-white">{teaserEvent.title}</h3>

                <p className="mt-2 text-sm text-slate-400">

                  {formatEventDate(teaserEvent)} · {teaserEvent.location}

                </p>

                {teaser.mode === 'past' && (

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Most recent past event</p>

                )}

                {teaserEvent.status === 'upcoming' && teaserEvent.registrationUrl && (

                  <a

                    href={teaserEvent.registrationUrl}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="mt-4 inline-flex text-sm font-semibold text-brand-gold"

                  >

                    Register →

                  </a>

                )}

              </article>

            </div>

          ) : (

            <p className="mt-8 text-center text-slate-500">Events will appear here once published in the CMS.</p>

          )}

        </div>

      </motion.section>
      <ImageLightbox isOpen={Boolean(lightboxUrl)} imageUrl={lightboxUrl} onClose={() => setLightboxUrl(null)} />

    </motion.div>

  );

};



export default Home;

