import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AdminModal from '../../components/admin/AdminModal';
import { btnGhost, btnPrimary, inputClass, labelClass } from '../../components/admin/adminFormStyles';
import RichTextEditor from '../../components/RichTextEditor';
import PageLoader from '../../components/PageLoader';
import {
  COLLECTIONS,
  createDocument,
  fetchProducts,
  removeDocument,
  updateDocument,
  uploadFileToStorage,
} from '../../services/firebase';

const emptyProduct = () => ({
  title: '',
  author: '',
  price: '',
  format: 'PDF',
  category: 'Books',
  featured: false,
  description: '',
  coverImageUrl: '',
  fileUrl: '',
  tableOfContents: '',
});

const StoreAdmin = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyProduct());
  const [coverFile, setCoverFile] = useState(null);
  const [assetFile, setAssetFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setProducts(await fetchProducts());
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyProduct());
    setCoverFile(null);
    setAssetFile(null);
    setModalOpen(true);
  };

  const openEdit = (p) => {
    setEditingId(p.id);
    setForm({
      title: p.title || '',
      author: p.author || '',
      price: p.price ?? '',
      format: p.format || 'PDF',
      category: p.category || 'Books',
      featured: Boolean(p.featured),
      description: p.description || '',
      coverImageUrl: p.coverImageUrl || '',
      fileUrl: p.fileUrl || '',
      tableOfContents: Array.isArray(p.tableOfContents)
        ? p.tableOfContents.join('\n')
        : p.tableOfContents || '',
    });
    setCoverFile(null);
    setAssetFile(null);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await removeDocument(COLLECTIONS.PRODUCTS, id);
      toast.success('Product deleted');
      load();
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      let coverImageUrl = form.coverImageUrl;
      let fileUrl = form.fileUrl;
      if (coverFile) {
        coverImageUrl = await uploadFileToStorage(`products/covers/${Date.now()}-${coverFile.name}`, coverFile);
      }
      if (assetFile) {
        fileUrl = await uploadFileToStorage(`products/files/${Date.now()}-${assetFile.name}`, assetFile);
      }
      const payload = {
        title: form.title,
        author: form.author,
        price: Number(form.price),
        format: form.format,
        category: form.category,
        featured: form.featured,
        description: form.description,
        coverImageUrl,
        fileUrl,
        tableOfContents: form.tableOfContents
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean),
      };
      if (editingId) {
        await updateDocument(COLLECTIONS.PRODUCTS, editingId, payload);
        toast.success('Product updated');
      } else {
        await createDocument(COLLECTIONS.PRODUCTS, payload);
        toast.success('Product created');
      }
      setModalOpen(false);
      load();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <PageLoader message="Loading products…" />;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Store</h1>
          <p className="text-sm text-slate-400">Collection: {COLLECTIONS.PRODUCTS}</p>
        </div>
        <button type="button" onClick={openCreate} className={btnPrimary}>
          + New product
        </button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-brand-border">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-brand-card text-xs uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3">Cover</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Price (NGN)</th>
              <th className="px-4 py-3">Format</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {products.map((p) => (
              <tr key={p.id}>
                <td className="px-4 py-3">
                  {p.coverImageUrl ? (
                    <img src={p.coverImageUrl} alt="" className="h-12 w-12 rounded object-cover" />
                  ) : (
                    '—'
                  )}
                </td>
                <td className="px-4 py-3 text-white">{p.title}</td>
                <td className="px-4 py-3">₦{Number(p.price || 0).toLocaleString('en-NG')}</td>
                <td className="px-4 py-3">{p.format}</td>
                <td className="px-4 py-3 space-x-2">
                  <button type="button" onClick={() => openEdit(p)} className="text-brand-gold">
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(p.id)} className="text-red-400">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title={editingId ? 'Edit product' : 'New product'} wide>
        <form onSubmit={handleSave} className="space-y-4">
          <label className={labelClass}>
            Title
            <input className={inputClass} required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </label>
          <label className={labelClass}>
            Author
            <input className={inputClass} value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
          </label>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className={labelClass}>
              Price (NGN)
              <input
                type="number"
                min="0"
                className={inputClass}
                required
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </label>
            <label className={labelClass}>
              Format
              <select className={inputClass} value={form.format} onChange={(e) => setForm({ ...form, format: e.target.value })}>
                {['PDF', 'ePub', 'Video', 'Audio', 'Toolkit'].map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </label>
            <label className={labelClass}>
              Category
              <select
                className={inputClass}
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                {['Books', 'Leadership Toolkits', 'Digital Masterclasses'].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) => setForm({ ...form, featured: e.target.checked })}
            />
            Featured product
          </label>
          <label className={labelClass}>
            Cover image
            <input type="file" accept="image/*" className="mt-1 text-sm text-slate-400" onChange={(e) => setCoverFile(e.target.files?.[0] || null)} />
          </label>
          <label className={labelClass}>
            Digital asset file
            <input type="file" className="mt-1 text-sm text-slate-400" onChange={(e) => setAssetFile(e.target.files?.[0] || null)} />
          </label>
          <label className={labelClass}>
            Table of contents (one line per chapter)
            <textarea
              rows={4}
              className={inputClass}
              value={form.tableOfContents}
              onChange={(e) => setForm({ ...form, tableOfContents: e.target.value })}
            />
          </label>
          <div>
            <p className={labelClass}>Description</p>
            <RichTextEditor value={form.description} onChange={(v) => setForm({ ...form, description: v })} />
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className={btnPrimary}>
              {saving ? 'Saving…' : 'Save product'}
            </button>
            <button type="button" onClick={() => setModalOpen(false)} className={btnGhost}>
              Cancel
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default StoreAdmin;
