import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLoader from '../components/PageLoader';
import { COLLECTIONS, getDocumentById, isFirebaseConfigured } from '../services/firebase';
import { formatEventDate } from '../utils/date';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isFirebaseConfigured || !id) {
      setError('Article not available.');
      setLoading(false);
      return;
    }
    (async () => {
      try {
        const doc = await getDocumentById(COLLECTIONS.POSTS, id);
        if (!doc || doc.status !== 'published') {
          setError('This article is not published or does not exist.');
        } else {
          setPost(doc);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <PageLoader message="Loading article…" />;

  if (error || !post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-slate-400">{error || 'Not found'}</p>
        <Link to="/blog" className="mt-6 inline-block text-brand-gold">
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-3xl px-6 py-12"
    >
      <Link to="/blog" className="text-sm text-brand-gold hover:text-brand-goldLight">
        ← All articles
      </Link>
      {post.featureImageUrl && (
        <img src={post.featureImageUrl} alt="" className="mt-6 w-full rounded-3xl border border-brand-border object-cover" />
      )}
      <p className="mt-8 text-xs uppercase tracking-[0.25em] text-brand-gold">
        {formatEventDate(post.publishDate)} · {post.author}
      </p>
      <h1 className="mt-4 text-4xl font-semibold text-white">{post.title}</h1>
      <div
        className="prose prose-invert mt-10 max-w-none leading-8 text-slate-300"
        dangerouslySetInnerHTML={{ __html: post.content || '' }}
      />
    </motion.article>
  );
};

export default BlogPost;
