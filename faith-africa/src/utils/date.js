/** @param {{ date?: string } | string} eventOrDate */
export const formatEventDate = (eventOrDate) => {
  const dateStr = typeof eventOrDate === 'string' ? eventOrDate : eventOrDate?.date;
  if (!dateStr) return 'TBD';
  const d = new Date(`${dateStr}T12:00:00`);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
};

/** @param {string} [isoDate] */
export const formatDisplayDeadline = (isoDate) => {
  if (!isoDate) return 'To be announced';
  return formatEventDate(isoDate);
};
