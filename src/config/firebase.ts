import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_KRg3gquEfNTGVBpX5LXsy90kImNNYSc",
  authDomain: "sigem-8c63e.firebaseapp.com",
  projectId: "sigem-8c63e",
  storageBucket: "sigem-8c63e.firebasestorage.app",
  messagingSenderId: "17276488812",
  appId: "1:17276488812:web:d1c6a6573240b3b94bdc49",
  measurementId: "G-CDHXQFPS5F"
};

let app: FirebaseApp;
let auth: Auth;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  console.log('✅ Firebase inicializado correctamente');
} catch (error) {
  console.error('❌ Error al inicializar Firebase:', error);
  throw error;
}

export { auth };
