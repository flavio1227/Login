import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timeout de seguridad: si Firebase no responde en 5 segundos, mostrar login
    const timeoutId = setTimeout(() => {
      console.warn('Firebase no respondió a tiempo, mostrando login...');
      setLoading(false);
    }, 5000);

    try {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          clearTimeout(timeoutId);
          setUser(user);
          setLoading(false);
        },
        (error) => {
          clearTimeout(timeoutId);
          console.error('Error de autenticación:', error);
          setLoading(false);
        }
      );

      return () => {
        clearTimeout(timeoutId);
        unsubscribe();
      };
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('Error al inicializar Firebase:', error);
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  const value = {
    user,
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
