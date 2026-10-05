import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PageLoader from '../components/PageLoader';
import ImageLightbox from '../components/ImageLightbox';
import FlyerThumbnail from '../components/FlyerThumbnail';
import { fetchYalsSummits, isFirebaseConfigured } from '../services/firebase';
import { formatEventDate } from '../utils/date';
import { toEmbedStreamUrl } from '../utils/stream';
import { selectHeroSummit } from '../utils/yalsSummits';
import yalsHeroImage from '../assets/_NEX9657.JPG';

const Yals = () => {
  const [summits, setSummits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lightboxUrl, setLightboxUrl] = useState(null);
  const [selectedSummit, setSelectedSummit] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setError('YALS summit details will load from Firebase once configured.');
      setLoading(false);
      return;
    }
    (async () => {
      try {
        setSummits(await fetchYalsSummits());
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const hero = useMemo(() => selectHeroSummit(summits), [summits]);
  const otherSummits = useMemo(() => summits.filter((summit) => summit.id !== hero?.id), [summits, hero]);
  const embedUrl = hero?.isLive ? toEmbedStreamUrl(hero.liveStreamUrl) : null;

  if (loading) return <PageLoader message="Loading YALS summit…" />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="pb-12"
    >
      <section className="relative isolate flex min-h-[32rem] items-center overflow-hidden sm:min-h-[38rem]">
        <img
          src={yalsHeroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-slate-950/75" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/25" />
        <div className="mx-auto w-full max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Young African Leadership Summit
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            A premier hybrid summit — hosted across the continent, streamed to the world.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            YALS brings emerging leaders together for in-person convening and continental livestream — governance,
            innovation, enterprise, and servant-steward leadership.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-3 pt-12 sm:px-6">
        {error && <p className="text-sm text-slate-400">{error}</p>}

        {hero && (
          <section className="overflow-hidden rounded-[2rem] border border-brand-border bg-brand-card/60">
          {hero.isLive && (
            <div className="border-b border-brand-gold/30 bg-brand-goldMuted px-6 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">● Live now</p>
            </div>
          )}
          <div className="grid gap-8 p-6 lg:grid-cols-2 lg:p-10">
            <div>
              <h2 className="text-3xl font-semibold text-white">{hero.title}</h2>
              <p className="mt-3 text-brand-gold">
                {hero.hostCountry}
                {hero.location ? ` · ${hero.location}` : ''}
              </p>
              <p className="mt-2 text-slate-400">
                {formatEventDate(hero.date)}
                {hero.time ? ` · ${hero.time}` : ''}
              </p>
              <div
                className="prose prose-invert mt-6 max-w-none text-slate-300"
                dangerouslySetInnerHTML={{ __html: hero.description || '' }}
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedSummit(hero)}
                  className="rounded-full border border-brand-gold/60 px-6 py-3 text-sm font-semibold text-brand-gold hover:bg-brand-gold/10"
                >
                  View event highlights
                </button>
                {hero.isLive && hero.liveStreamUrl && (
                  <a
                    href={hero.liveStreamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-500"
                  >
                    Watch Live
                  </a>
                )}
                {hero.registrationUrl && (
                  <a
                    href={hero.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-brand-goldLight"
                  >
                    Register to attend
                  </a>
                )}
              </div>
            </div>
            {hero.flyerUrl && (
              <FlyerThumbnail
                src={hero.flyerUrl}
                alt={`${hero.title} flyer`}
                onOpen={setLightboxUrl}
              />
            )}
          </div>

          {hero.isLive && embedUrl && (
            <div className="border-t border-brand-border px-6 pb-8 lg:px-10">
              <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-brand-border bg-black">
                <iframe
                  title="YALS live stream"
                  src={embedUrl}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {hero.streamingDetails && (
                <div
                  className="prose prose-invert prose-sm mt-6 max-w-none text-slate-300"
                  dangerouslySetInnerHTML={{ __html: hero.streamingDetails }}
                />
              )}
            </div>
          )}
          </section>
        )}

        {!hero && !error && (
          <p className="mt-12 text-center text-slate-500">No YALS summits published yet.</p>
        )}

        {otherSummits.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-semibold text-white">More YALS events</h2>
            <p className="mt-2 text-slate-400">Explore past highlights and upcoming convenings.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherSummits.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setSelectedSummit(s)}
                  className="group rounded-2xl border border-brand-border bg-brand-card/50 p-3 text-left hover:border-brand-gold/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold sm:p-4"
                  aria-label={`View highlights for ${s.title}`}
                >
                  {s.flyerUrl && (
                    <img
                      src={s.flyerUrl}
                      alt={`${s.title} flyer`}
                      className="mb-4 aspect-[16/10] w-full rounded-xl object-cover transition duration-300 group-hover:brightness-110"
                    />
                  )}
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-brand-gold">{s.hostCountry}</p>
                  <p className="text-xs text-slate-500">{formatEventDate(s.date)}</p>
                  <span className="mt-2 inline-block rounded-full bg-brand-goldMuted px-3 py-1 text-xs font-medium text-brand-gold">
                    {s.status || 'Summit'}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold">
                    View highlights
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>

      <AnimatePresence>
        {selectedSummit && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="summit-highlights-title"
            onClick={() => setSelectedSummit(null)}
          >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.section
              className="relative z-10 my-auto max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-brand-border bg-brand-dark p-6 shadow-2xl sm:p-8"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">Event highlights</p>
                  <h2 id="summit-highlights-title" className="mt-2 text-2xl font-semibold text-white">
                    {selectedSummit.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {selectedSummit.hostCountry}
                    {selectedSummit.date ? ` · ${formatEventDate(selectedSummit.date)}` : ''}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSummit(null)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-border text-slate-300 hover:bg-brand-card hover:text-white"
                  aria-label="Close event highlights"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              {selectedSummit.highlightImages?.length ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedSummit.highlightImages.map((imageUrl, index) => (
                    <button
                      type="button"
                      key={`${imageUrl}-${index}`}
                      onClick={() => setLightboxUrl(imageUrl)}
                      className="group overflow-hidden rounded-xl border border-brand-border bg-brand-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                      aria-label={`View event highlight ${index + 1}`}
                    >
                      <img
                        src={imageUrl}
                        alt={`${selectedSummit.title} highlight ${index + 1}`}
                        className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              ) : (
                <p className="mt-8 rounded-2xl border border-brand-border bg-brand-card/60 p-6 text-center text-slate-300">
                  Event highlight photos have not been added yet.
                </p>
              )}
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

      <ImageLightbox isOpen={Boolean(lightboxUrl)} imageUrl={lightboxUrl} onClose={() => setLightboxUrl(null)} />
    </motion.div>
  );
};

export default Yals;
