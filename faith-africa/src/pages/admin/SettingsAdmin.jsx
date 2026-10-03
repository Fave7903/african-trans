import React from 'react';
import { isFirebaseConfigured } from '../../services/firebase';

const SettingsAdmin = () => (
  <div className="max-w-2xl">
    <h1 className="text-2xl font-semibold text-white">Settings</h1>
    <p className="mt-2 text-slate-400">Firebase configuration and security notes.</p>
    <div className="mt-8 space-y-4 rounded-2xl border border-brand-border bg-brand-card/50 p-6 text-sm text-slate-300">
      <p>
        Firebase status:{' '}
        <span className={isFirebaseConfigured ? 'text-green-400' : 'text-red-400'}>
          {isFirebaseConfigured ? 'Configured' : 'Missing environment variables'}
        </span>
      </p>
      <p className="leading-7">
        Apply Firestore and Storage security rules so only authenticated admin UIDs can create, update, or delete
        CMS documents. Public read access may be enabled for published content collections as needed.
      </p>
      <ul className="list-inside list-disc space-y-1 text-slate-400">
        <li>REACT_APP_FIREBASE_API_KEY</li>
        <li>REACT_APP_FIREBASE_AUTH_DOMAIN</li>
        <li>REACT_APP_FIREBASE_PROJECT_ID</li>
        <li>REACT_APP_FIREBASE_STORAGE_BUCKET</li>
        <li>REACT_APP_FIREBASE_MESSAGING_SENDER_ID</li>
        <li>REACT_APP_FIREBASE_APP_ID</li>
        <li>REACT_APP_PAYSTACK_PUBLIC_KEY (store checkout)</li>
      </ul>
    </div>
  </div>
);

export default SettingsAdmin;
