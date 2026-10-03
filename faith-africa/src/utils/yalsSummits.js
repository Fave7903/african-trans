const isUpcoming = (s) => s.status === 'Upcoming' || s.status === 'upcoming';
const isPast = (s) => s.status === 'Past' || s.status === 'past';

/** Hero: live summit first, then nearest upcoming, then latest past. */
export function selectHeroSummit(summits) {
  if (!summits?.length) return null;
  const live = summits.find((s) => s.isLive);
  if (live) return live;

  const upcoming = [...summits].filter(isUpcoming).sort((a, b) => (a.date || '').localeCompare(b.date || ''));
  if (upcoming.length) return upcoming[0];

  const past = [...summits].filter(isPast).sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  return past[0] || null;
}

/** Past summits for archive grid (excludes hero when hero is past). */
export function getPastSummitsArchive(summits, hero) {
  const past = summits.filter(isPast).sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  if (!hero || !isPast(hero)) return past;
  return past.filter((s) => s.id !== hero.id);
}
