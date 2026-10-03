import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageLoader from '../components/PageLoader';
import FlyerThumbnail from '../components/FlyerThumbnail';
import ImageLightbox from '../components/ImageLightbox';
import { fetchEvents, isFirebaseConfigured } from '../services/firebase';
import { formatEventDate } from '../utils/date';
import { stripHtml } from '../utils/html';

const filterOptions = [
  { id: 'all', label: 'All' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'Webinar', label: 'Webinars' },
  { id: 'Masterclass', label: 'Masterclasses' },
  { id: 'summits', label: 'Conferences & Summits' },
  { id: 'past', label: 'Past Events' },
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [lightboxUrl, setLightboxUrl] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setError('Events will appear here once Firebase is connected.');
      setLoading(false);
      return;
    }
    (async () => {
      try {
        setEvents(await fetchEvents());
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(() => {
    let list = [...events];
    if (filter === 'upcoming') list = list.filter((e) => e.status === 'upcoming');
    else if (filter === 'past') list = list.filter((e) => e.status === 'past');
    else if (filter === 'Webinar' || filter === 'Masterclass') {
      list = list.filter((e) => e.category === filter);
    } else if (filter === 'summits') {
      list = list.filter((e) => e.category === 'Summit' || e.category === 'Conference');
    }
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (e) =>
          (e.title || '').toLowerCase().includes(q) ||
          (e.speaker || '').toLowerCase().includes(q) ||
          stripHtml(e.description).toLowerCase().includes(q)
      );
    }
    return list.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  }, [events, filter, search]);

  if (loading) return <PageLoader message="Loading events…" />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-7xl px-6 py-12"
    >
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Events hub</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Webinars, masterclasses, summits & conferences</h1>
      </header>
      {error && <p className="mt-6 text-sm text-slate-400">{error}</p>}

      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setFilter(opt.id)}
              className={`rounded-full px-4 py-2 text-sm ${
                filter === opt.id ? 'bg-brand-gold text-slate-950' : 'border border-brand-border text-slate-300'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search speaker or topic..."
          className="w-full rounded-xl border border-brand-border bg-brand-card px-4 py-3 text-sm text-white outline-none focus:border-brand-gold/40 lg:max-w-xs"
        />
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {filtered.map((event) => (
          <article key={event.id} className="flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-card/60">
            {(event.flyerUrl || event.imageUrl) && (
              <FlyerThumbnail
                src={event.flyerUrl || event.imageUrl}
                alt={`${event.title} flyer`}
                onOpen={setLightboxUrl}
                className="rounded-none border-0"
              />
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="rounded-xl bg-brand-gold/15 px-3 py-2 text-center">
                  <p className="text-xs uppercase text-brand-gold">{formatEventDate(event).split(' ')[1]}</p>
                  <p className="text-lg font-semibold text-white">{formatEventDate(event).split(' ')[0]}</p>
                </div>
                <span className="rounded-full border border-brand-border px-3 py-1 text-xs text-slate-300">
                  {event.category}
                </span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">{event.title}</h2>
              <p className="mt-2 text-sm text-slate-400">
                {event.time} · {event.location}
              </p>
              {event.speaker && <p className="mt-1 text-sm text-brand-gold/90">Speaker: {event.speaker}</p>}
              <div
                className="prose prose-invert prose-sm mt-4 flex-1 max-w-none text-slate-300"
                dangerouslySetInnerHTML={{ __html: event.description || '' }}
              />
              {event.status === 'upcoming' && event.registrationUrl ? (
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex justify-center rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-brand-goldLight"
                >
                  Register Now
                </a>
              ) : (
                <a
                  href={event.replayUrl || '#'}
                  className="mt-6 inline-flex justify-center rounded-full border border-brand-border px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-brand-gold/40 hover:text-brand-gold"
                >
                  Watch Replay
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      {!error && filtered.length === 0 && (
        <p className="mt-12 text-center text-slate-400">No events published yet.</p>
      )}
      <ImageLightbox
        isOpen={Boolean(lightboxUrl)}
        imageUrl={lightboxUrl}
        onClose={() => setLightboxUrl(null)}
      />
    </motion.div>
  );
};

export default Events;
