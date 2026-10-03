import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AdminModal from '../../components/admin/AdminModal';
import { btnGhost, btnPrimary, inputClass, labelClass } from '../../components/admin/adminFormStyles';
import RichTextEditor from '../../components/RichTextEditor';
import PageLoader from '../../components/PageLoader';
import {
  COLLECTIONS,
  createDocument,
  fetchAllPosts,
  removeDocument,
  updateDocument,
  uploadFileToStorage,
} from '../../services/firebase';

const emptyPost = () => ({
  title: '',
  author: '',
  publishDate: '',
  status: 'draft',
  content: '',
  featureImageUrl: '',
});

const BlogAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyPost());
  const [imageFile, setImageFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setPosts(await fetchAllPosts());
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
    setForm(emptyPost());
    setImageFile(null);
    setModalOpen(true);
  };

  const openEdit = (post) => {
    setEditingId(post.id);
    setForm({
      title: post.title || '',
      author: post.author || '',
      publishDate: post.publishDate || '',
      status: post.status || 'draft',
      content: post.content || '',
      featureImageUrl: post.featureImageUrl || '',
    });
    setImageFile(null);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this post?')) return;
    await removeDocument(COLLECTIONS.POSTS, id);
    toast.success('Post deleted');
    load();
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      let featureImageUrl = form.featureImageUrl;
      if (imageFile) {
        featureImageUrl = await uploadFileToStorage(`blog/${Date.now()}-${imageFile.name}`, imageFile);
      }
      const payload = { ...form, featureImageUrl };
      if (editingId) {
        await updateDocument(COLLECTIONS.POSTS, editingId, payload);
        toast.success('Post updated');
      } else {
        await createDocument(COLLECTIONS.POSTS, payload);
        toast.success('Post created');
      }
      setModalOpen(false);
      load();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <PageLoader message="Loading posts…" />;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Blog</h1>
          <p className="text-sm text-slate-400">{COLLECTIONS.POSTS}</p>
        </div>
        <button type="button" onClick={openCreate} className={btnPrimary}>
          + New post
        </button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-brand-border">
        <table className="min-w-full text-sm">
          <thead className="bg-brand-card text-xs uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Author</th>
              <th className="px-4 py-3 text-left">Publish date</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-4 py-3">{post.title}</td>
                <td className="px-4 py-3">{post.author}</td>
                <td className="px-4 py-3">{post.publishDate}</td>
                <td className="px-4 py-3 capitalize">{post.status}</td>
                <td className="px-4 py-3 space-x-2">
                  <button type="button" onClick={() => openEdit(post)} className="text-brand-gold">
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(post.id)} className="text-red-400">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title={editingId ? 'Edit post' : 'New post'} wide>
        <form onSubmit={handleSave} className="space-y-4">
          <label className={labelClass}>
            Title
            <input className={inputClass} required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </label>
          <label className={labelClass}>
            Author
            <input className={inputClass} value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Publish date
              <input type="date" className={inputClass} value={form.publishDate} onChange={(e) => setForm({ ...form, publishDate: e.target.value })} />
            </label>
            <label className={labelClass}>
              Status
              <select className={inputClass} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </label>
          </div>
          <label className={labelClass}>
            Feature image
            <input type="file" accept="image/*" className="mt-1 text-sm text-slate-400" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
          </label>
          <RichTextEditor value={form.content} onChange={(v) => setForm({ ...form, content: v })} />
          <div className="flex gap-3">
            <button type="submit" disabled={saving} className={btnPrimary}>
              {saving ? 'Saving…' : 'Save post'}
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

export default BlogAdmin;
