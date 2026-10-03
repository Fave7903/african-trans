import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { auth, signInWithEmailAndPassword } from '../../services/firebase';
import { useAuth } from '../../context/AuthContext';
import PageLoader from '../../components/PageLoader';

const AdminLogin = () => {
  const { user, loading, firebaseReady } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/admin';

  if (loading) return <PageLoader message="Loading…" fullScreen />;

  if (user) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firebaseReady || !auth) {
      toast.error('Firebase is not configured.');
      return;
    }
    setSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      toast.success('Welcome back');
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-dark px-6">
      <div className="w-full max-w-md rounded-[2rem] border border-brand-border bg-brand-card/80 p-8 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">ATN Admin</p>
        <h1 className="mt-3 text-2xl font-semibold text-white">Sign in to CMS</h1>
        <p className="mt-2 text-sm text-slate-400">Firebase Email/Password authentication</p>
        {!firebaseReady && (
          <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
            Add REACT_APP_FIREBASE_* variables to your .env file to enable login.
          </p>
        )}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-brand-border bg-brand-dark px-4 py-3 text-white outline-none focus:border-brand-gold/50"
            />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-brand-border bg-brand-dark px-4 py-3 text-white outline-none focus:border-brand-gold/50"
            />
          </label>
          <button
            type="submit"
            disabled={submitting || !firebaseReady}
            className="w-full rounded-full bg-brand-gold py-3 text-sm font-semibold text-slate-950 hover:bg-brand-goldLight disabled:opacity-50"
          >
            {submitting ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
