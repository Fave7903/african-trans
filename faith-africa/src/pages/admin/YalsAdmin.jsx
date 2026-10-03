import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AdminModal from '../../components/admin/AdminModal';
import { btnGhost, btnPrimary, inputClass, labelClass } from '../../components/admin/adminFormStyles';
import RichTextEditor from '../../components/RichTextEditor';
import PageLoader from '../../components/PageLoader';
import {
  COLLECTIONS,
  createDocument,
  fetchYalsSummits,
  removeDocument,
  updateDocument,
  uploadFileToStorage,
} from '../../services/firebase';

const emptySummit = () => ({
  title: '',
  hostCountry: '',
  location: '',
  date: '',
  time: '',
  description: '',
  flyerUrl: '',
  registrationUrl: '',
  isLive: false,
  liveStreamUrl: '',
  streamingDetails: '',
  status: 'Upcoming',
});

const YalsAdmin = () => {
  const [summits, setSummits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptySummit());
  const [flyerFile, setFlyerFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setSummits(await fetchYalsSummits());
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptySummit());
    setFlyerFile(null);
    setModalOpen(true);
  };

  const openEdit = (s) => {
    setEditingId(s.id);
    setForm({
      title: s.title || '',
      hostCountry: s.hostCountry || '',
      location: s.location || '',
      date: s.date || '',
      time: s.time || '',
      description: s.description || '',
      flyerUrl: s.flyerUrl || '',
      registrationUrl: s.registrationUrl || '',
      isLive: Boolean(s.isLive),
      liveStreamUrl: s.liveStreamUrl || '',
      streamingDetails: s.streamingDetails || '',
      status: s.status === 'Past' || s.status === 'past' ? 'Past' : 'Upcoming',
    });
    setFlyerFile(null);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this summit?')) return;
    try {
      await removeDocument(COLLECTIONS.YALS_SUMMITS, id);
      toast.success('Summit deleted');
      load();
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      let flyerUrl = form.flyerUrl;
      if (flyerFile) {
        flyerUrl = await uploadFileToStorage(`yals/flyers/${Date.now()}-${flyerFile.name}`, flyerFile);
      }
      const payload = { ...form, flyerUrl };

      if (form.isLive) {
        await Promise.all(
          summits
            .filter((s) => s.isLive && s.id !== editingId)
            .map((s) => updateDocument(COLLECTIONS.YALS_SUMMITS, s.id, { isLive: false }))
        );
      }

      if (editingId) {
        await updateDocument(COLLECTIONS.YALS_SUMMITS, editingId, payload);
        toast.success('Summit updated');
      } else {
        await createDocument(COLLECTIONS.YALS_SUMMITS, payload);
        toast.success('Summit created');
      }
      setModalOpen(false);
      load();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <PageLoader message="Loading YALS summits…" />;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Young African Leaders Summit</h1>
          <p className="text-sm text-slate-400">Collection: {COLLECTIONS.YALS_SUMMITS}</p>
        </div>
        <button type="button" onClick={openCreate} className={btnPrimary}>
          + New summit
        </button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-brand-border">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-brand-card text-xs uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Host country</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Live</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {summits.map((s) => (
              <tr key={s.id} className="text-slate-200">
                <td className="px-4 py-3 font-medium">{s.title}</td>
                <td className="px-4 py-3">{s.hostCountry}</td>
                <td className="px-4 py-3">{s.date}</td>
                <td className="px-4 py-3">{s.status}</td>
                <td className="px-4 py-3">{s.isLive ? 'Yes' : '—'}</td>
                <td className="px-4 py-3 space-x-2">
                  <button type="button" onClick={() => openEdit(s)} className="text-brand-gold hover:underline">
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(s.id)} className="text-red-400 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {summits.length === 0 && <p className="p-6 text-center text-slate-500">No summits yet.</p>}
      </div>

      <AdminModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingId ? 'Edit summit' : 'Create summit'}
        wide
      >
        <form onSubmit={handleSave} className="space-y-4">
          <label className={labelClass}>
            Title
            <input className={inputClass} required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Host country
              <input className={inputClass} value={form.hostCountry} onChange={(e) => setForm({ ...form, hostCountry: e.target.value })} />
            </label>
            <label className={labelClass}>
              Physical venue / location
              <input className={inputClass} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Date
              <input type="date" className={inputClass} required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </label>
            <label className={labelClass}>
              Time
              <input className={inputClass} value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
            </label>
          </div>
          <label className={labelClass}>
            Status
            <select className={inputClass} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
              <option value="Upcoming">Upcoming</option>
              <option value="Past">Past</option>
            </select>
          </label>
          <label className={labelClass}>
            Registration URL
            <input className={inputClass} value={form.registrationUrl} onChange={(e) => setForm({ ...form, registrationUrl: e.target.value })} />
          </label>
          <label className={labelClass}>
            Summit flyer
            <input type="file" accept="image/*" className="mt-1 text-sm text-slate-400" onChange={(e) => setFlyerFile(e.target.files?.[0] || null)} />
            {form.flyerUrl && !flyerFile && (
              <img src={form.flyerUrl} alt="" className="mt-2 h-24 rounded-lg object-cover" />
            )}
          </label>
          <div>
            <p className={labelClass}>Description</p>
            <RichTextEditor value={form.description} onChange={(v) => setForm({ ...form, description: v })} />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" checked={form.isLive} onChange={(e) => setForm({ ...form, isLive: e.target.checked })} />
            Summit is live now (shows Watch Live on public page)
          </label>
          <label className={labelClass}>
            Live stream URL (YouTube / embed)
            <input className={inputClass} value={form.liveStreamUrl} onChange={(e) => setForm({ ...form, liveStreamUrl: e.target.value })} />
          </label>
          <div>
            <p className={labelClass}>Streaming details (schedule, passcodes)</p>
            <RichTextEditor value={form.streamingDetails} onChange={(v) => setForm({ ...form, streamingDetails: v })} />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="submit" disabled={saving} className={btnPrimary}>
              {saving ? 'Saving…' : 'Save summit'}
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

export default YalsAdmin;
