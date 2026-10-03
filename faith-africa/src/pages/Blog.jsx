import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLoader from '../components/PageLoader';
import { fetchPublishedPosts, isFirebaseConfigured } from '../services/firebase';
import { formatEventDate } from '../utils/date';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setError('Blog is unavailable until Firebase is configured.');
      setLoading(false);
      return;
    }
    (async () => {
      try {
        setPosts(await fetchPublishedPosts());
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <PageLoader message="Loading articles…" />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-7xl px-6 py-12"
    >
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">ATN Insights</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Blog & thought leadership</h1>
      </header>
      {error && <p className="mt-8 text-slate-400">{error}</p>}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="group overflow-hidden rounded-3xl border border-brand-border bg-brand-card/60 transition hover:border-brand-gold/40"
          >
            {post.featureImageUrl && (
              <img src={post.featureImageUrl} alt="" className="h-48 w-full object-cover transition group-hover:scale-[1.02]" />
            )}
            <div className="p-5">
              <p className="text-xs text-slate-500">{formatEventDate(post.publishDate)}</p>
              <h2 className="mt-2 text-lg font-semibold text-white group-hover:text-brand-gold">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-400">{post.author}</p>
            </div>
          </Link>
        ))}
      </div>
      {!error && posts.length === 0 && (
        <p className="mt-12 text-center text-slate-500">No published articles yet. Check back soon.</p>
      )}
    </motion.div>
  );
};

export default Blog;
