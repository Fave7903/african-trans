import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  COLLECTIONS,
  fetchEvents,
  fetchProducts,
  fetchAllPosts,
  fetchYalsSummits,
  isFirebaseConfigured,
} from '../../services/firebase';
import PageLoader from '../../components/PageLoader';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    (async () => {
      try {
        const [events, products, posts, summits] = await Promise.all([
          fetchEvents(),
          fetchProducts(),
          fetchAllPosts(),
          fetchYalsSummits(),
        ]);
        setStats({
          events: events.length,
          products: products.length,
          posts: posts.length,
          summits: summits.length,
        });
      } catch (e) {
        setError(e.message || 'Failed to load dashboard stats');
      }
    })();
  }, []);

  if (!isFirebaseConfigured) {
    return (
      <p className="text-slate-400">Configure Firebase environment variables to use the CMS dashboard.</p>
    );
  }

  if (!stats && !error) return <PageLoader message="Loading dashboard…" />;

  const cards = [
    { label: 'Events', count: stats?.events ?? 0, to: '/admin/events' },
    { label: 'Products', count: stats?.products ?? 0, to: '/admin/store' },
    { label: 'Blog posts', count: stats?.posts ?? 0, to: '/admin/blog' },
    { label: 'YALS summits', count: stats?.summits ?? 0, to: '/admin/yals' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
      <p className="mt-2 text-slate-400">Manage live content for the public ATN website.</p>
      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.label}
            to={card.to}
            className="rounded-2xl border border-brand-border bg-brand-card/60 p-6 transition hover:border-brand-gold/40"
          >
            <p className="text-sm text-slate-400">{card.label}</p>
            <p className="mt-2 text-3xl font-semibold text-brand-gold">{card.count}</p>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-xs text-slate-500">
        Collections: {Object.values(COLLECTIONS).join(', ')}
      </p>
    </div>
  );
};

export default AdminDashboard;
