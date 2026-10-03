import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import PublicLayout from './layouts/PublicLayout.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import Home from './pages/Home.jsx';
import President from './pages/President.jsx';
import Yals from './pages/Yals.jsx';
import Events from './pages/Events.jsx';
import Store from './pages/Store.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import EventsAdmin from './pages/admin/EventsAdmin.jsx';
import YalsAdmin from './pages/admin/YalsAdmin.jsx';
import StoreAdmin from './pages/admin/StoreAdmin.jsx';
import BlogAdmin from './pages/admin/BlogAdmin.jsx';
import SettingsAdmin from './pages/admin/SettingsAdmin.jsx';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster
          position="top-right"
          toastOptions={{
            style: { background: '#0f172a', color: '#e2e8f0', border: '1px solid #1e293b' },
          }}
        />
        <div className="min-h-screen bg-brand-dark font-ubuntu text-slate-100 overflow-x-hidden">
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/president" element={<President />} />
              <Route path="/yals" element={<Yals />} />
              <Route path="/events" element={<Events />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Route>

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="events" element={<EventsAdmin />} />
              <Route path="yals" element={<YalsAdmin />} />
              <Route path="store" element={<StoreAdmin />} />
              <Route path="blog" element={<BlogAdmin />} />
              <Route path="settings" element={<SettingsAdmin />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
