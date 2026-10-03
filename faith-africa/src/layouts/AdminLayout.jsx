import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { auth, signOut } from '../services/firebase';

const navItems = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/events', label: 'Events' },
  { to: '/admin/yals', label: 'YALS' },
  { to: '/admin/store', label: 'Store' },
  { to: '/admin/blog', label: 'Blog' },
  { to: '/admin/settings', label: 'Settings' },
];

const sidebarLink = ({ isActive }) =>
  `block rounded-xl px-4 py-3 text-sm font-medium transition ${
    isActive
      ? 'bg-brand-gold/15 text-brand-gold'
      : 'text-slate-300 hover:bg-brand-card hover:text-white'
  }`;

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if (auth) await signOut(auth);
    } catch {
      /* ignore */
    }
    toast.success('Signed out');
    navigate('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-brand-dark text-slate-100">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-brand-border bg-[#0a0f1a] p-6 lg:flex">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">ATN CMS</p>
          <p className="mt-1 text-lg font-semibold text-white">Admin Dashboard</p>
        </div>
        <nav className="flex flex-1 flex-col gap-1">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={sidebarLink}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-6 rounded-xl border border-brand-border px-4 py-3 text-sm text-slate-300 hover:border-red-500/40 hover:text-red-300"
        >
          Logout
        </button>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-brand-border px-4 py-4 lg:px-8">
          <div className="lg:hidden">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-gold">ATN CMS</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className="rounded-full border border-brand-border px-3 py-1 text-xs text-slate-300"
              >
                {item.label}
              </NavLink>
            ))}
            <button type="button" onClick={handleLogout} className="rounded-full border border-brand-border px-3 py-1 text-xs">
              Logout
            </button>
          </div>
          <a href="/" target="_blank" rel="noopener noreferrer" className="ml-auto text-sm text-brand-gold hover:text-brand-goldLight">
            View public site →
          </a>
        </header>
        <div className="flex-1 overflow-auto p-4 lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
