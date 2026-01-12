import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// IMPORTANTE: Usa las MISMAS credenciales de Firebase que en el Login
// Esto asegura que la sesión se comparta entre ambas aplicaciones
const firebaseConfig = {
  apiKey: "AIzaSyA_KRg3gquEfNTGVBpX5LXsy90kImNNYSc",
  authDomain: "sigem-8c63e.firebaseapp.com",
  projectId: "sigem-8c63e",
  storageBucket: "sigem-8c63e.firebasestorage.app",
  messagingSenderId: "17276488812",
  appId: "1:17276488812:web:d1c6a6573240b3b94bdc49",
  measurementId: "G-CDHXQFPS5F"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
