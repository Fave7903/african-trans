import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PageLoader from './PageLoader';

const ProtectedRoute = ({ children }) => {
  const { user, loading, firebaseReady } = useAuth();
  const location = useLocation();

  if (loading) {
    return <PageLoader message="Verifying admin session…" fullScreen />;
  }

  if (!firebaseReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-dark px-6 text-center text-slate-300">
        Firebase is not configured. Add REACT_APP_FIREBASE_* keys to enable the admin CMS.
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return children;
};

export default ProtectedRoute;
