import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import AdminModal from '../../components/admin/AdminModal';
import { btnGhost, btnPrimary, inputClass, labelClass } from '../../components/admin/adminFormStyles';
import RichTextEditor from '../../components/RichTextEditor';
import PageLoader from '../../components/PageLoader';
import {
  COLLECTIONS,
  createDocument,
  fetchEvents,
  removeDocument,
  updateDocument,
  uploadFileToStorage,
} from '../../services/firebase';

const emptyEvent = () => ({
  title: '',
  date: '',
  time: '',
  location: '',
  registrationUrl: '',
  replayUrl: '',
  category: 'Webinar',
  status: 'upcoming',
  speaker: '',
  description: '',
  imageUrl: '',
});

const EventsAdmin = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyEvent());
  const [flyerFile, setFlyerFile] = useState(null);
  const [uploadPct, setUploadPct] = useState(0);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setEvents(await fetchEvents());
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
    setForm(emptyEvent());
    setFlyerFile(null);
    setModalOpen(true);
  };

  const openEdit = (event) => {
    setEditingId(event.id);
    setForm({
      title: event.title || '',
      date: event.date || '',
      time: event.time || '',
      location: event.location || '',
      registrationUrl: event.registrationUrl || '',
      replayUrl: event.replayUrl || '',
      category: event.category || 'Webinar',
      status: event.status || 'upcoming',
      speaker: event.speaker || '',
      description: event.description || '',
      imageUrl: event.imageUrl || '',
    });
    setFlyerFile(null);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this event?')) return;
    try {
      await removeDocument(COLLECTIONS.EVENTS, id);
      toast.success('Event deleted');
      load();
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      let imageUrl = form.imageUrl;
      if (flyerFile) {
        const path = `events/flyers/${Date.now()}-${flyerFile.name}`;
        imageUrl = await uploadFileToStorage(path, flyerFile, setUploadPct);
      }
      const payload = { ...form, imageUrl };
      if (editingId) {
        await updateDocument(COLLECTIONS.EVENTS, editingId, payload);
        toast.success('Event updated');
      } else {
        await createDocument(COLLECTIONS.EVENTS, payload);
        toast.success('Event created');
      }
      setModalOpen(false);
      load();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
      setUploadPct(0);
    }
  };

  if (loading) return <PageLoader message="Loading events…" />;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-white">Events</h1>
          <p className="text-sm text-slate-400">Collection: {COLLECTIONS.EVENTS}</p>
        </div>
        <button type="button" onClick={openCreate} className={btnPrimary}>
          + New event
        </button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-brand-border">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-brand-card text-xs uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {events.map((ev) => (
              <tr key={ev.id} className="text-slate-200">
                <td className="px-4 py-3 font-medium">{ev.title}</td>
                <td className="px-4 py-3">{ev.date}</td>
                <td className="px-4 py-3">{ev.category}</td>
                <td className="px-4 py-3 capitalize">{ev.status}</td>
                <td className="px-4 py-3 space-x-2">
                  <button type="button" onClick={() => openEdit(ev)} className="text-brand-gold hover:underline">
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(ev.id)} className="text-red-400 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {events.length === 0 && <p className="p-6 text-center text-slate-500">No events yet.</p>}
      </div>

      <AdminModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingId ? 'Edit event' : 'Create event'}
        wide
      >
        <form onSubmit={handleSave} className="space-y-4">
          <label className={labelClass}>
            Title
            <input
              className={inputClass}
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Date
              <input
                type="date"
                className={inputClass}
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </label>
            <label className={labelClass}>
              Time
              <input
                className={inputClass}
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
              />
            </label>
          </div>
          <label className={labelClass}>
            Location
            <input
              className={inputClass}
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className={labelClass}>
              Category
              <select
                className={inputClass}
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                {['Webinar', 'Masterclass', 'Summit', 'Conference'].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label className={labelClass}>
              Status
              <select
                className={inputClass}
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>
            </label>
          </div>
          <label className={labelClass}>
            Speaker
            <input
              className={inputClass}
              value={form.speaker}
              onChange={(e) => setForm({ ...form, speaker: e.target.value })}
            />
          </label>
          <label className={labelClass}>
            Registration URL
            <input
              className={inputClass}
              value={form.registrationUrl}
              onChange={(e) => setForm({ ...form, registrationUrl: e.target.value })}
            />
          </label>
          <label className={labelClass}>
            Replay URL (past events)
            <input
              className={inputClass}
              value={form.replayUrl}
              onChange={(e) => setForm({ ...form, replayUrl: e.target.value })}
            />
          </label>
          <label className={labelClass}>
            Event flyer (Storage upload)
            <input
              type="file"
              accept="image/*"
              className="mt-1 block w-full text-sm text-slate-400"
              onChange={(e) => setFlyerFile(e.target.files?.[0] || null)}
            />
            {uploadPct > 0 && uploadPct < 100 && <p className="text-xs text-brand-gold">Uploading {uploadPct}%</p>}
            {form.imageUrl && !flyerFile && (
              <img src={form.imageUrl} alt="" className="mt-2 h-24 rounded-lg object-cover" />
            )}
          </label>
          <div>
            <p className={labelClass}>Description</p>
            <RichTextEditor
              value={form.description}
              onChange={(v) => setForm({ ...form, description: v })}
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="submit" disabled={saving} className={btnPrimary}>
              {saving ? 'Saving…' : 'Save event'}
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

export default EventsAdmin;
