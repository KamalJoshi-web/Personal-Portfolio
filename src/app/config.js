const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
  authDomain: String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
  projectId: String(import.meta.env.VITE_PROJECT_ID),
  storageBucket: String(import.meta.env.VITE_STORAGE_BUCKET),
  messagingSenderId: String(import.meta.env.VITE_MESSAGING_SENDER_ID),
  appId: String(import.meta.env.VITE_APP_ID),
};

export default firebaseConfig;
