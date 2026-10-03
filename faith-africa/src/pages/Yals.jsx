import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import PageLoader from '../components/PageLoader';
import ImageLightbox from '../components/ImageLightbox';
import FlyerThumbnail from '../components/FlyerThumbnail';
import { fetchYalsSummits, isFirebaseConfigured } from '../services/firebase';
import { formatEventDate } from '../utils/date';
import { toEmbedStreamUrl } from '../utils/stream';
import { getPastSummitsArchive, selectHeroSummit } from '../utils/yalsSummits';

const Yals = () => {
  const [summits, setSummits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lightboxUrl, setLightboxUrl] = useState(null);

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
  const archive = useMemo(() => getPastSummitsArchive(summits, hero), [summits, hero]);
  const embedUrl = hero?.isLive ? toEmbedStreamUrl(hero.liveStreamUrl) : null;

  if (loading) return <PageLoader message="Loading YALS summit…" />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-7xl px-6 py-12"
    >
      <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Young African Leadership Summit</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-white sm:text-5xl">
        A premier hybrid summit — hosted across the continent, streamed to the world.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-300 leading-8">
        YALS brings emerging leaders together for in-person convening and continental livestream — governance,
        innovation, enterprise, and servant-steward leadership.
      </p>
      {error && <p className="mt-6 text-sm text-slate-400">{error}</p>}

      {hero && (
        <section className="mt-14 overflow-hidden rounded-[2rem] border border-brand-border bg-brand-card/60">
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

      {archive.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-white">Summit archive</h2>
          <p className="mt-2 text-slate-400">Past convenings across the continent.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((s) => (
              <article key={s.id} className="rounded-2xl border border-brand-border bg-brand-card/50 p-4">
                {s.flyerUrl && (
                  <FlyerThumbnail src={s.flyerUrl} alt={s.title} onOpen={setLightboxUrl} className="mb-4" />
                )}
                <h3 className="font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-brand-gold">{s.hostCountry}</p>
                <p className="text-xs text-slate-500">{formatEventDate(s.date)}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <ImageLightbox isOpen={Boolean(lightboxUrl)} imageUrl={lightboxUrl} onClose={() => setLightboxUrl(null)} />
    </motion.div>
  );
};

export default Yals;
