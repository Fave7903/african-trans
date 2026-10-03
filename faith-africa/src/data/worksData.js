/**
 * @typedef {'book' | 'speech' | 'policy' | 'article'} WorkType
 *
 * @typedef {Object} PresidentWork
 * @property {string} id
 * @property {string} title
 * @property {WorkType} type
 * @property {number} year
 * @property {string} summary
 * @property {string} actionLabel
 * @property {string} actionUrl
 */

/** @type {PresidentWork[]} */
export const worksData = [
  {
    id: 'work-leadership-policy-book',
    title: 'Executive Leadership & Governance Policy Book',
    type: 'book',
    year: 2024,
    summary:
      'Foundational treatise on servant-steward leadership, executive board governance, and non-partisan youth development across Africa.',
    actionLabel: 'Read excerpt',
    actionUrl: '/about',
  },
  {
    id: 'work-transformation-keynote',
    title: 'Forming Africa — Transforming Leaders for a New Century',
    type: 'speech',
    year: 2025,
    summary:
      'Keynote address on intentional growth, continental unity, and multiplying mentorship across governance, technology, and enterprise.',
    actionLabel: 'View transcript',
    actionUrl: '#',
  },
  {
    id: 'work-youth-governance-paper',
    title: 'Youth Public Responsibility in Non-Partisan Contexts',
    type: 'policy',
    year: 2023,
    summary:
      'Policy paper outlining ethical frameworks for young leaders engaging public institutions without partisan alignment.',
    actionLabel: 'Download PDF',
    actionUrl: '#',
  },
  {
    id: 'work-faith-integrity-excellence',
    title: 'Faith, Integrity, and Excellence: Values Anchor for African Leadership',
    type: 'article',
    year: 2024,
    summary:
      'Reflective essay connecting personal calling, public service, and excellence as non-negotiable standards for transformation.',
    actionLabel: 'Read article',
    actionUrl: '#',
  },
  {
    id: 'work-mental-transformation',
    title: 'Mental Transformation as Continental Infrastructure',
    type: 'article',
    year: 2025,
    summary:
      'Argument for self-development and mental resilience as prerequisites for sustainable community and national impact.',
    actionLabel: 'Read article',
    actionUrl: '#',
  },
  {
    id: 'work-volunteer-afrik-address',
    title: 'Volunteer Afrik: Service as Leadership Multiplication',
    type: 'speech',
    year: 2024,
    summary:
      'Address launching volunteer-driven continental projects and accountability structures for emerging leaders.',
    actionLabel: 'Watch replay',
    actionUrl: '#',
  },
];

/** @type {{ id: WorkType; label: string }[]} */
export const workTypeFilters = [
  { id: 'book', label: 'Books' },
  { id: 'speech', label: 'Speeches & Addresses' },
  { id: 'policy', label: 'Policy Papers' },
  { id: 'article', label: 'Articles' },
];
