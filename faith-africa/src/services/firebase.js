import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

export const COLLECTIONS = {
  EVENTS: 'events',
  PRODUCTS: 'products',
  POSTS: 'posts',
  YALS_SUMMITS: 'yals_summits',
  NEWSLETTER_SUBSCRIBERS: 'newsletter_subscribers',
};

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
);

const app = isFirebaseConfigured ? initializeApp(firebaseConfig) : null;

export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
export const storage = app ? getStorage(app) : null;

const assertFirebase = () => {
  if (!db || !storage) {
    throw new Error(
      'Firebase is not configured. Add REACT_APP_FIREBASE_* variables to your .env file.'
    );
  }
};

/**
 * @param {string} storagePath
 * @param {File} file
 * @param {(pct: number) => void} [onProgress]
 * @returns {Promise<string>} download URL
 */
export async function uploadFileToStorage(storagePath, file, onProgress) {
  assertFirebase();
  const storageRef = ref(storage, storagePath);
  const task = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    task.on(
      'state_changed',
      (snapshot) => {
        if (onProgress) {
          const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          onProgress(pct);
        }
      },
      reject,
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve(url);
      }
    );
  });
}

/** @param {string} collectionName */
export async function listDocuments(collectionName) {
  assertFirebase();
  const snap = await getDocs(collection(db, collectionName));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/** @param {string} collectionName @param {Record<string, unknown>} data */
export async function createDocument(collectionName, data) {
  assertFirebase();
  const payload = { ...data, updatedAt: new Date().toISOString() };
  const refDoc = await addDoc(collection(db, collectionName), {
    ...payload,
    createdAt: new Date().toISOString(),
  });
  return refDoc.id;
}

/** @param {string} collectionName @param {string} id @param {Record<string, unknown>} data */
export async function updateDocument(collectionName, id, data) {
  assertFirebase();
  await updateDoc(doc(db, collectionName, id), {
    ...data,
    updatedAt: new Date().toISOString(),
  });
}

/** @param {string} collectionName @param {string} id */
export async function removeDocument(collectionName, id) {
  assertFirebase();
  await deleteDoc(doc(db, collectionName, id));
}

/** @param {string} collectionName @param {string} id */
export async function getDocumentById(collectionName, id) {
  assertFirebase();
  const snap = await getDoc(doc(db, collectionName, id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

export async function fetchEvents() {
  const items = await listDocuments(COLLECTIONS.EVENTS);
  return items.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

export async function fetchProducts() {
  return listDocuments(COLLECTIONS.PRODUCTS);
}

export async function fetchPublishedPosts() {
  assertFirebase();
  const q = query(collection(db, COLLECTIONS.POSTS), where('status', '==', 'published'));
  const snap = await getDocs(q);
  const posts = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  return posts.sort((a, b) => (b.publishDate || '').localeCompare(a.publishDate || ''));
}

export async function fetchAllPosts() {
  const posts = await listDocuments(COLLECTIONS.POSTS);
  return posts.sort((a, b) => (b.publishDate || '').localeCompare(a.publishDate || ''));
}

export async function fetchYalsSummits() {
  const items = await listDocuments(COLLECTIONS.YALS_SUMMITS);
  return items.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

/** @param {string} email @returns {Promise<{ alreadySubscribed: boolean }>}
 */
export async function subscribeToNewsletter(email) {
  if (!db) {
    throw new Error('Newsletter subscriptions are temporarily unavailable. Please try again later.');
  }

  const normalizedEmail = email.trim().toLowerCase();
  const subscribersRef = collection(db, COLLECTIONS.NEWSLETTER_SUBSCRIBERS);
  const existing = await getDocs(query(subscribersRef, where('email', '==', normalizedEmail)));
  if (!existing.empty) return { alreadySubscribed: true };

  const timestamp = new Date().toISOString();
  await addDoc(subscribersRef, {
    email: normalizedEmail,
    subscribedAt: timestamp,
    createdAt: timestamp,
    updatedAt: timestamp,
  });

  return { alreadySubscribed: false };
}

export { signInWithEmailAndPassword, signOut };
