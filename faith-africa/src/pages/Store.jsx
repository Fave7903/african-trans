import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import atn_logo from '../assets/ATN_logo.jpeg';
import Modal from '../components/Modal';
import PaystackCheckoutButton from '../components/PaystackCheckoutButton';
import PageLoader from '../components/PageLoader';
import { fetchProducts, isFirebaseConfigured } from '../services/firebase';
import { stripHtml } from '../utils/html';

const categories = ['All', 'Books', 'Leadership Toolkits', 'Digital Masterclasses'];

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setError('Store catalog will appear once Firebase is connected.');
      setLoading(false);
      return;
    }
    (async () => {
      try {
        setProducts(await fetchProducts());
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(() => {
    if (category === 'All') return products;
    return products.filter((p) => p.category === category);
  }, [products, category]);

  const closeProduct = () => setSelectedProduct(null);

  if (loading) return <PageLoader message="Loading store…" />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-7xl px-6 py-12"
    >
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">Digital bookstore</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Resources for transformation leaders</h1>
      </header>
      {error && <p className="mt-6 text-sm text-slate-400">{error}</p>}

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm ${
              category === cat ? 'bg-brand-gold text-slate-950' : 'border border-brand-border text-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <motion.article
            key={product.id}
            whileHover={{ y: -4 }}
            className="flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-card/70"
          >
            <div className="relative h-44 bg-brand-goldMuted">
              <img
                src={product.coverImageUrl || atn_logo}
                alt=""
                className="h-full w-full object-cover"
              />
              {product.featured && (
                <span className="absolute left-4 top-4 rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-slate-950">
                  Featured
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{product.format}</p>
              <h2 className="mt-2 text-lg font-semibold text-white">{product.title}</h2>
              <p className="mt-1 text-sm text-slate-400">{product.author}</p>
              <p className="mt-3 flex-1 text-sm text-slate-300 line-clamp-3">{stripHtml(product.description)}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-semibold text-brand-gold">
                  ₦{Number(product.price || 0).toLocaleString('en-NG')}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="rounded-full border border-brand-gold/40 px-4 py-2 text-sm font-semibold text-brand-gold hover:bg-brand-goldMuted"
                >
                  Preview
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      {!error && filtered.length === 0 && (
        <p className="mt-12 text-center text-slate-500">No products in the catalog yet.</p>
      )}

      <Modal isOpen={Boolean(selectedProduct)} onClose={closeProduct}>
        {selectedProduct && (
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">{selectedProduct.category}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{selectedProduct.title}</h3>
              <p className="mt-1 text-sm text-slate-400">
                {selectedProduct.author} · {selectedProduct.format}
              </p>
            </div>
            <div
              className="prose prose-invert max-w-none text-slate-300"
              dangerouslySetInnerHTML={{ __html: selectedProduct.description || '' }}
            />
            {Array.isArray(selectedProduct.tableOfContents) && selectedProduct.tableOfContents.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-white">Table of contents</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  {selectedProduct.tableOfContents.map((chapter) => (
                    <li key={chapter} className="flex gap-2">
                      <span className="text-brand-gold">·</span>
                      {chapter}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <PaystackCheckoutButton
              productTitle={selectedProduct.title}
              amountNgn={Number(selectedProduct.price) || 0}
              downloadUrl={selectedProduct.fileUrl}
              onClose={closeProduct}
            />
          </div>
        )}
      </Modal>
    </motion.div>
  );
};

export default Store;
