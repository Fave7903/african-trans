/**
 * Home teaser: nearest upcoming, else most recent past.
 * @param {Array<{ status?: string, date?: string }>} events
 * @param {Array<{ status?: string, date?: string, isLive?: boolean }>} summits
 */
export function pickHomeTeaserEvent(events = [], summits = []) {
  const normalizedEvents = events.map((event) => ({
    ...event,
    status: (event.status || '').toLowerCase(),
  }));
  const normalizedSummits = summits.map((summit) => ({
    ...summit,
    category: summit.category || 'YALS Summit',
    location: [summit.hostCountry, summit.location].filter(Boolean).join(' · '),
    status: (summit.status || '').toLowerCase(),
  }));
  const allItems = [...normalizedEvents, ...normalizedSummits];
  if (!allItems.length) return null;

  const liveSummit = normalizedSummits.find((summit) => summit.isLive);
  if (liveSummit) return { event: liveSummit, mode: 'upcoming' };

  const upcoming = allItems
    .filter((e) => e.status === 'upcoming')
    .sort((a, b) => (a.date || '').localeCompare(b.date || ''));

  if (upcoming.length > 0) {
    return { event: upcoming[0], mode: 'upcoming' };
  }

  const past = allItems
    .filter((e) => e.status === 'past')
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  if (past.length > 0) {
    return { event: past[0], mode: 'past' };
  }

  return null;
}
